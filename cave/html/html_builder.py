import argparse
import logging
import sys
import os
import shutil
import inspect
from traceback import print_exc
from collections import namedtuple

import numpy as np

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

from cave.utils.tooltips import get_tooltip

__author__ = "Marius Lindauer"
__copyright__ = "Copyright 2016, ML4AAD"
__license__ = "MIT"
__email__ = "lindauer@cs.uni-freiburg.de"

class HTMLBuilder(object):

    def __init__(self,
                 output_dn:str,
                 scenario_name:str):
        '''
        Constructor

        Arguments
        ---------
        output_dn:str
            output directory name
        scenario_name:str
            name of scenario
        '''
        self.logger = logging.getLogger("HTMLBuilder")


        self.own_folder = os.path.realpath(os.path.abspath(os.path.split(inspect.getfile( inspect.currentframe() ))[0]))

        self.output_dn = output_dn

        self.header='''
<!DOCTYPE html>
<html>
<head>
<title>CAVE</title>
<link href="css/accordion.css" rel="stylesheet" />
<link href="css/table.css" rel="stylesheet" />
<link href="css/lightbox.min.css" rel="stylesheet" />
<link href="css/help-tip.css" rel="stylesheet" />
<link href="css/global.css" rel="stylesheet" />
<link href="css/back-to-top.css" rel="stylesheet" />
</head>
<body>
<script src="http://www.w3schools.com/lib/w3data.js"></script>
<script src="js/lightbox-plus-jquery.min.js"></script>
<header>
    <div class='l-wrapper'>
        <img class='logo logo--smac3' src="images/SMAC3.png" />
        <img class='logo logo--ml' src="images/ml4aad.png" />
    </div>
</header>
<div class='l-wrapper'>
<h1>CAVE</h1>
        '''

        self.footer = '''
</div>
<footer>
    <div class='l-wrapper'>
        Generated by <a href="https://github.com/automl/CAVE">CAVE</a> and developed by <a href="http://www.ml4aad.org">ML4AAD</a> | Optimized for Chrome and Firefox
    </div>
</footer>
</body>
<script>
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}
</script>
<script src="js/back-to-top.js"></script>
</html>
        '''

    def generate_html(self, data_dict:dict):
        '''
            Arguments
            ---------
            data_dict : OrderedDict
                {"top1" : {
                            "tooltip": str|None,
                            "subtop1: {  # generates a further bottom if it is dictionary
                                    "tooltip": str|None,
                                    ...
                                    }
                            "table": str|None (html table)
                            "figure" : str | None (file name)
                            }
                "top2: { ... }
        '''
        html = ""
        html += self.header

        for k,v in data_dict.items():
            html = self.add_layer(html_str=html, layer_name=k, data_dict=v)
        html += self.footer

        with open(os.path.join(self.output_dn, "report.html"), "w") as fp:
            fp.write(html)

        try:
            if not os.path.isdir(os.path.join(self.output_dn,"css")):
                shutil.copytree(os.path.join(self.own_folder, "web_files", "css"), os.path.join(self.output_dn,"css"))
        except OSError:
            print_exc()
        try:
            if not os.path.isdir(os.path.join(self.output_dn,"images")):
                shutil.copytree(os.path.join(self.own_folder, "web_files", "images"), os.path.join(self.output_dn,"images"))
        except OSError:
            print_exc()
        try:
            if not os.path.isdir(os.path.join(self.output_dn,"js")):
                shutil.copytree(os.path.join(self.own_folder, "web_files", "js"), os.path.join(self.output_dn,"js"))
        except OSError:
            print_exc()
        try:
            if not os.path.isdir(os.path.join(self.output_dn,"font")):
                shutil.copytree(os.path.join(self.own_folder, "web_files", "font"), os.path.join(self.output_dn,"font"))
        except OSError:
            print_exc()


    def add_layer(self, html_str:str, layer_name, data_dict:dict):
        '''
        add a further layer of top data_dict keys
        '''
        if data_dict.get("tooltip"):
            tooltip = "<div class=\"help-tip\"><p>{}</p></div>".format(data_dict.get("tooltip"))
        elif get_tooltip(layer_name):  # if no tooltip is parsed, try to look it up
            tooltip = "<div class=\"help-tip\"><p>{}</p></div>".format(get_tooltip(layer_name))
        else:
            tooltip = ""
        html_str += "<div class=\"accordion\">{0} {1}</div>\n".format(layer_name, tooltip)
        html_str += "<div class=\"panel\">\n"

        for k, v in data_dict.items():
            if isinstance(v, dict):
                html_str = self.add_layer(html_str, k, v)
            elif k == "figure":
                html_str +="<div align=\"center\">\n"
                if isinstance(v, str):
                    html_str +="<a href=\"{0}\" data-lightbox=\"{0}\" data-title=\"{0}\"><img src=\"{0}\" alt=\"Plot\" width=\"600px\"></a>\n".format(v[len(self.output_dn):].lstrip("/"))
                else:
                    # List with multiple figures size relative, put next to each other
                    width = (100 - len(v)) / len(v)
                    for fig in v:
                        html_str += "<a href=\"{0}\" data-lightbox=\"{1}\" data-title=\"{0}\"><img src=\"{0}\" alt=\"Plot\" style=\"float: left; width: {2}%; margin-right: 1%; margin-bottom: 0.5em;\"></a>\n".format(
                                fig[len(self.output_dn):].lstrip("/"),
                                str(v),
                                int(width))

                    html_str += "<p style=\"clear: both;\">"
                html_str +="</div>\n"
            elif k == "table":
                html_str += "<div align=\"center\">\n{}\n</div>\n".format(v)
            elif k == "html":
                html_str += "<div align=\"center\">\n<a href='{}'>Interactive Plot</a>\n</div>\n".format(v[len(self.output_dn):].lstrip("/"))
                #html_str += "<div align=\"center\"><iframe src='{}' frameborder='0' scrolling='no' width='700px' height='500px'></iframe></div>\n".format(v[len(self.output_dn):].lstrip("/"))

        html_str += "</div>"
        return html_str
