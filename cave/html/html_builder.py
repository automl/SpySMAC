import inspect
import json
import logging
import os
import re
import shutil
from collections import OrderedDict
from traceback import print_exc

from cave.__version__ import __version__ as version
from cave.html.html_helpers import figure_to_html
from cave.utils.tooltips import get_tooltip

__author__ = "Marius Lindauer"
__copyright__ = "Copyright 2016, ML4AAD"
__license__ = "MIT"
__email__ = "lindauer@cs.uni-freiburg.de"


class HTMLBuilder(object):

    def __init__(self,
                 output_dn: str,
                 scenario_name: str,
                 logo_fn: str,
                 logo_custom: bool=False):
        '''
        The dictionary structure in the HTML-Builder follows the following syntax:
        ::

          {"top1" : {
                    "tooltip": str|None,
                    "subtop1: {  # generates a further bottom if it is dictionary
                            "tooltip": str|None,
                            ...
                            }
                    "table": str|None (html table)
                    "figure" : str|None (file name)
                    "bokeh" : (str, str)|None  # (script, div as returned by components())
                    }
           "top2: { ... }
          }

        Arguments
        ---------
        output_dn:str
            output directory name
        scenario_name:str
            name of scenario
        logo_fn: str
            path to the logo of the configurator
        logo_custom: bool
            if true, logo ist treated as external logo that needs to be copied
        '''
        self.logger = logging.getLogger("HTMLBuilder")

        self.own_folder = os.path.realpath(os.path.abspath(os.path.split(inspect.getfile(inspect.currentframe()))[0]))
        self.logo_fn = logo_fn
        self.logo_custom = logo_custom

        self.output_dn = output_dn
        self.unique_id_counter = 0
        self.budget = ''

        self.relative_content_js = os.path.join('content', 'js')
        self.relative_content_images = os.path.join('content', 'images')
        if output_dn:
            os.makedirs(os.path.join(self.output_dn, self.relative_content_js), exist_ok=True)
            os.makedirs(os.path.join(self.output_dn, self.relative_content_images), exist_ok=True)
            # todo make relative dirs again
            # Copy subfolders
            subfolders = ["css", "images", "js", "font"]
            for sf in subfolders:
                try:
                    shutil.rmtree(os.path.join(self.output_dn, "html", sf), ignore_errors=True)
                    shutil.copytree(os.path.join(self.own_folder, "web_files", sf),
                                    os.path.join(self.output_dn, "html", sf))
                except OSError:
                    print_exc()

        self.header_part_1 = '''
<!DOCTYPE html>
<html>
<head>
<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
<meta content="utf-8" http-equiv="encoding">

<title>CAVE</title>
<link href="html/css/accordion.css" rel="stylesheet" />
<link href="html/css/table.css" rel="stylesheet" />
<link href="html/css/lightbox.min.css" rel="stylesheet" />
<link href="html/css/help-tip.css" rel="stylesheet" />
<link href="html/css/global.css" rel="stylesheet" />
<link href="html/css/back-to-top.css" rel="stylesheet" />
<link href="html/css/tabs.css" rel="stylesheet" />

<link href="html/css/bokeh-1.1.0.min.css" rel="stylesheet" type="text/css">
<link href="html/css/bokeh-widgets-1.1.0.min.css" rel="stylesheet" type="text/css">
<link href="html/css/bokeh-tables-1.1.0.min.css" rel="stylesheet" type="text/css">

<script src="html/js/tabs.js"></script>

<script src="html/js/bokeh-1.1.0.min.js"></script>
<script src="html/js/bokeh-widgets-1.1.0.min.js"></script>
<script src="html/js/bokeh-tables-1.1.0.min.js"></script>

<!--Below here are the includes of scripts for the report (e.g. bokeh)-->
'''

        self.header_part_2 = '''
<!--Above here are the includes of scripts for the report (e.g. bokeh)-->

</head>
<body>
<script src="http://www.w3schools.com/lib/w3data.js"></script>
<script src="html/js/lightbox-plus-jquery.min.js"></script>
<header>
    <div class='l-wrapper'>
        <img class='logo logo--configurator' src="html/images/{}" />
        <img class='logo logo--cave' src="html/images/CAVE_logo.png" />
        <img class='logo logo--ml' src="html/images/automl-logo.png" />
    </div>
</header>
<div class='l-wrapper'>
<h1></h1>
'''.format(self.logo_fn if not self.logo_custom else 'custom_logo.png')

        self.footer = '''
</div>
<footer>
    <div class='l-wrapper'>
        Generated by <a href="https://github.com/automl/CAVE">CAVE v{}</a> and developed by
        <a href="http://www.automl.org">autoML</a> | Optimized for Chrome and Firefox
    </div>
</footer>'''.format(version) + '''
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
<script src="html/js/back-to-top.js"></script>
</body>
</html>
'''

    def generate_webpage(self, data_dict: OrderedDict):
        '''
        Arguments
        ---------
        data_dict : OrderedDict
            see constructor
        '''
        html_head, html_body = "", ""
        html_head += self.header_part_1
        # Get components (script, div) for each entry in report
        scripts, divs = self.generate_html(data_dict)

        # Scripts go into header, divs go into body
        for script in scripts:
            html_head += script  # e.g. bokeh-scripts used for hover
        for div in divs:
            html_body += div
        html_head += self.header_part_2  # Close header after adding all scripts
        html = html_head + html_body + self.footer

        # Write webpage to file
        with open(os.path.join(self.output_dn, "report.html"), "w") as fp:
            fp.write(html)

        # If available, add custom logo
        if self.logo_custom:
            original_path = self.logo_fn
            self.logo_fn = os.path.join(self.output_dn, "html", 'images', 'custom_logo.png')
            self.logger.debug("Attempting to copy %s to %s", original_path, self.logo_fn)
            shutil.copyfile(original_path, self.logo_fn)
            self.logo_custom = False

    def generate_html(self, data_dict: OrderedDict):
        with open(os.path.join(self.output_dn, 'debug', 'webpage_dict.json'), 'w') as f:
            f.write(json.dumps(data_dict, indent=2))

        # Generate
        scripts, divs = [], []
        for k, v in data_dict.items():
            if not v:  # ignore empty entry
                self.logger.debug("No content for %s, skipping in html-generation", k)
                continue
            script, div = self.add_layer(layer_name=k, data_dict=v)
            if script:
                scripts.append(script)
            divs.append(div)
        return scripts, divs

    def add_layer(self, layer_name, data_dict: OrderedDict, is_tab: bool=False):
        '''
        add a further layer of top data_dict keys

        Parameters
        ----------
        layer_name: str
            name of the layer
        data_dict : OrderedDict
            see constructor
        is_tab: bool
            if True, don't use accordion but tab-structure to wrap content

        Returns
        -------
        (script, div): (str, str)
            script goes into header, div goes into body
        '''
        script, div = "", ""

        if layer_name is None:
            layer_name = ""
        unique_layer_name = layer_name + self.get_unique_id()

        # Add tooltip, if possible
        tooltip = data_dict.get("tooltip", None)
        if tooltip is not None:
            tooltip = "<div class=\"help-tip\"><p>{}</p></div>".format(tooltip)
        # TODO elif is obsolete / can be merged into first option (simplify!)
        elif get_tooltip(layer_name):  # if no tooltip is parsed, try to look it up
            tooltip = "<div class=\"help-tip\"><p>{}</p></div>".format(get_tooltip(layer_name))
        else:
            tooltip = ""

        # Start accordion-panel
        if not is_tab:
            div += "<div class=\"accordion\">{0} {1}</div>\n".format(layer_name, tooltip)
            div += "<div class=\"panel\">\n"

        # If this layer represents budgets, add tabs for this layer, add tabs-code
        sublayer_names = [k for k, v in data_dict.items() if isinstance(v, dict)]
        use_tabs = False
        if len(sublayer_names) >= 1 and all([sn.lower().startswith('budget') for sn in sublayer_names]):
            use_tabs = True

        if use_tabs:
            div += "<div class=\"tab\">\n"
            tabs_names = [k.replace('_', ' ') for k, v in data_dict.items() if isinstance(v, dict)]

            default_open_id = "defaultOpen" + self.get_unique_id()
            div += "  <button class=\"tablinks\" onclick=\"openTab(event, '{0}', '{1}')\" "\
                   "id=\"{2}\">{1}</button>\n".format(unique_layer_name, tabs_names[0], default_open_id)
            for name in tabs_names[1:]:
                div += "  <button class=\"tablinks\" onclick=\"openTab(event, '{0}', '{1}')\">{1}</button>\n".format(
                    unique_layer_name, name)
            div += "</div>\n"

        for k, v in data_dict.items():
            if k == "tooltip":
                continue
            if k.startswith('budget'):
                self.budget = k[7:]
            if not v:
                if isinstance(v, dict):
                    continue
                else:
                    return '', ''
            elif isinstance(v, dict):
                if use_tabs:
                    div += "<div id=\"{0}\" class=\"tabcontent\">\n".format(unique_layer_name + k.replace('_', ' '))
                    div += "<div class=\"pane\">\n"
                add_script, add_div = self.add_layer(k, v, is_tab=use_tabs)
                script += add_script
                div += add_div
                if use_tabs:  # close div
                    div += "</div>\n"
                    div += "</div>\n"
            elif k == "figure":
                div += figure_to_html(v, prefix=self.output_dn)
            elif k == "figure_x2":
                div += figure_to_html(v, prefix=self.output_dn, max_in_a_row=2)
            elif k == "table":
                div += "<div style=\"overflow-x: auto\" align=\"center\">\n{}\n</div>\n".format(v)
            elif k == "html":
                div += ("<div align=\"center\">\n<a href='{}'>Interactive "
                        "Plot</a>\n</div>\n".format(v[len(self.output_dn):].lstrip("/")))
            elif k == "bokeh":
                # Escape path for URL (remove spaces, slashes and single quotes)
                path_script = os.path.join(self.relative_content_js, '_'.join([layer_name, self.budget,
                                                                               self.get_unique_id(), 'script.js']))
                path_script = path_script.translate({ord(c): None for c in ' \''})

                # Write script to file
                if self.output_dn:
                    with open(os.path.join(self.output_dn, path_script), 'w') as fn:
                        js_code = re.sub('<.*?>', '', v[0].strip())  # Remove script-tags
                        fn.write(js_code)
                    script += "<script src=\"" + path_script + "\"></script>\n"
                else:
                    script += v[0]
                div += "<div align=\"center\">\n{}\n</div>\n".format(v[1])
            else:
                try:
                    div += v
                except Exception as err:
                    self.logger.warning("Failed on interpreting: %s, %s, %s (Error: %s)",
                                        str(layer_name), str(k), str(v), err, exc_info=1)

        if use_tabs:  # close tab with selecting first element by default
            div += "<script> \n"
            div += "// Get the element with id=\"{}\" and click on it \n".format(default_open_id)
            div += "document.getElementById(\"{}\").click(); \n".format(default_open_id)
            div += "</script> \n"


        if not is_tab:
            div += "</div>"
        return script, div

    def get_unique_id(self):
        self.unique_id_counter += 1
        return str(self.unique_id_counter)
