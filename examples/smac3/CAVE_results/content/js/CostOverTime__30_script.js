
  (function() {
    var fn = function() {
      Bokeh.safely(function() {
        (function(root) {
          function embed_document(root) {
            
          var docs_json = '{"b0799269-6893-455e-8db2-022acd1cab60":{"roots":{"references":[{"attributes":{"data_source":{"id":"5871","type":"ColumnDataSource"},"glyph":{"id":"5918","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5919","type":"Line"},"selection_glyph":null,"view":{"id":"5916","type":"CDSView"},"visible":false},"id":"5920","type":"GlyphRenderer"},{"attributes":{"text":"Cost over time","text_font_size":{"value":"15pt"}},"id":"5874","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"time"},"y":{"field":"mean"}},"id":"5925","type":"Line"},{"attributes":{"active":[0],"callback":{"id":"5929","type":"CustomJS"},"labels":["average","run_1","run_2"]},"id":"5930","type":"CheckboxButtonGroup"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5950","type":"BoxAnnotation"},{"attributes":{},"id":"5897","type":"ResetTool"},{"attributes":{},"id":"5881","type":"LogScale"},{"attributes":{"callback":null,"renderers":[{"id":"5909","type":"GlyphRenderer"},{"id":"5913","type":"GlyphRenderer"},{"id":"5920","type":"GlyphRenderer"},{"id":"5926","type":"GlyphRenderer"}],"tooltips":[["estimated performance","@mean"],["at-time","@time"]]},"id":"5927","type":"HoverTool"},{"attributes":{"ticker":{"id":"5884","type":"LogTicker"}},"id":"5887","type":"Grid"},{"attributes":{"data_source":{"id":"5871","type":"ColumnDataSource"},"glyph":{"id":"5924","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5925","type":"Line"},"selection_glyph":null,"view":{"id":"5922","type":"CDSView"},"visible":false},"id":"5926","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":null},"below":[{"id":"5883","type":"LogAxis"}],"border_fill_color":{"value":null},"center":[{"id":"5887","type":"Grid"},{"id":"5892","type":"Grid"}],"left":[{"id":"5888","type":"LogAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"5909","type":"GlyphRenderer"},{"id":"5913","type":"GlyphRenderer"},{"id":"5920","type":"GlyphRenderer"},{"id":"5926","type":"GlyphRenderer"}],"right":[{"id":"5935","type":"Legend"}],"title":{"id":"5874","type":"Title"},"toolbar":{"id":"5898","type":"Toolbar"},"x_range":{"id":"5872","type":"Range1d"},"x_scale":{"id":"5879","type":"LogScale"},"y_range":{"id":"5877","type":"DataRange1d"},"y_scale":{"id":"5881","type":"LogScale"}},"id":"5873","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.2,"fill_color":"#7570B3","line_color":"#7570B3","x":{"field":"x"},"y":{"field":"y"}},"id":"5911","type":"Patch"},{"attributes":{"ticker":null},"id":"5947","type":"LogTickFormatter"},{"attributes":{"args":{"checkbox":{"id":"5930","type":"CheckboxButtonGroup"},"glyph_renderer0":{"id":"5909","type":"GlyphRenderer"},"glyph_renderer1":{"id":"5913","type":"GlyphRenderer"},"glyph_renderer2":{"id":"5920","type":"GlyphRenderer"},"glyph_renderer3":{"id":"5926","type":"GlyphRenderer"}},"code":"var labels = []; checkbox.active = labels;len_labels = 3;glyph_renderers = [[glyph_renderer0,glyph_renderer1],[glyph_renderer2],[glyph_renderer3]];\\n        for (i = 0; i &lt; len_labels; i++) {\\n            if (checkbox.active.includes(i)) {\\n                // console.log(&#x27;Setting to true: &#x27; + i + &#x27;(&#x27; + glyph_renderers[i].length + &#x27;)&#x27;)\\n                for (j = 0; j &lt; glyph_renderers[i].length; j++) {\\n                    glyph_renderers[i][j].visible = true;\\n                    // console.log(&#x27;Setting to true: &#x27; + i + &#x27; : &#x27; + j)\\n                }\\n            } else {\\n                // console.log(&#x27;Setting to false: &#x27; + i + &#x27;(&#x27; + glyph_renderers[i].length + &#x27;)&#x27;)\\n                for (j = 0; j &lt; glyph_renderers[i].length; j++) {\\n                    glyph_renderers[i][j].visible = false;\\n                    // console.log(&#x27;Setting to false: &#x27; + i + &#x27; : &#x27; + j)\\n                }\\n            }\\n        }\\n        "},"id":"5933","type":"CustomJS"},{"attributes":{"label":{"value":"average"},"renderers":[{"id":"5909","type":"GlyphRenderer"},{"id":"5913","type":"GlyphRenderer"}]},"id":"5936","type":"LegendItem"},{"attributes":{},"id":"5879","type":"LogScale"},{"attributes":{"callback":{"id":"5931","type":"CustomJS"},"icon":null,"label":"All"},"id":"5932","type":"Button"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"time"},"y":{"field":"mean"}},"id":"5908","type":"Line"},{"attributes":{},"id":"5953","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","x":{"field":"time"},"y":{"field":"mean"}},"id":"5907","type":"Line"},{"attributes":{"callback":null,"end":322.3197224140167,"start":0.0003540515899658203},"id":"5872","type":"Range1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAA0Nz8AAAAAAMpAPwAAABAH9DlAAAAA5Bm3O0AAAACszXpKQAAAADw2fVtAAAAAG7b6akAAAECVHSV0QAAAQJUdJXRAAAAAG7b6akAAAAA8Nn1bQAAAAKzNekpAAAAA5Bm3O0AAAAAQB/Q5QAAAAAAAykA/AAAAAAA0Nz8=","dtype":"float64","shape":[16]},"y":{"__ndarray__":"jgLunVeyPj+OAu6dV7I+P5hFUP/c3EA/7F+CaBW7Pz//4yzlD9g9Pxfbs5duBDs/pNjI+LEfQj8Xy601dco8P4AD/Qwj3UE/iFT41kobQz/6YGnKAEJAP8w3qKybukA/rnGo8SOPQz86zgJgP+RDP44C7p1Xsj4/jgLunVeyPj8=","dtype":"float64","shape":[16]}},"selected":{"id":"5954","type":"Selection"},"selection_policy":{"id":"5953","type":"UnionRenderers"}},"id":"5910","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"5877","type":"DataRange1d"},{"attributes":{},"id":"5951","type":"UnionRenderers"},{"attributes":{"label":{"value":"run_1"},"renderers":[{"id":"5920","type":"GlyphRenderer"}]},"id":"5937","type":"LegendItem"},{"attributes":{"args":{"checkbox":{"id":"5930","type":"CheckboxButtonGroup"},"glyph_renderer0":{"id":"5909","type":"GlyphRenderer"},"glyph_renderer1":{"id":"5913","type":"GlyphRenderer"},"glyph_renderer2":{"id":"5920","type":"GlyphRenderer"},"glyph_renderer3":{"id":"5926","type":"GlyphRenderer"}},"code":"var labels = [0, 1, 2]; checkbox.active = labels;len_labels = 3;glyph_renderers = [[glyph_renderer0,glyph_renderer1],[glyph_renderer2],[glyph_renderer3]];\\n        for (i = 0; i &lt; len_labels; i++) {\\n            if (checkbox.active.includes(i)) {\\n                // console.log(&#x27;Setting to true: &#x27; + i + &#x27;(&#x27; + glyph_renderers[i].length + &#x27;)&#x27;)\\n                for (j = 0; j &lt; glyph_renderers[i].length; j++) {\\n                    glyph_renderers[i][j].visible = true;\\n                    // console.log(&#x27;Setting to true: &#x27; + i + &#x27; : &#x27; + j)\\n                }\\n            } else {\\n                // console.log(&#x27;Setting to false: &#x27; + i + &#x27;(&#x27; + glyph_renderers[i].length + &#x27;)&#x27;)\\n                for (j = 0; j &lt; glyph_renderers[i].length; j++) {\\n                    glyph_renderers[i][j].visible = false;\\n                    // console.log(&#x27;Setting to false: &#x27; + i + &#x27; : &#x27; + j)\\n                }\\n            }\\n        }\\n        "},"id":"5931","type":"CustomJS"},{"attributes":{"num_minor_ticks":10},"id":"5884","type":"LogTicker"},{"attributes":{"column_name":"name","group":"run_2"},"id":"5921","type":"GroupFilter"},{"attributes":{"data_source":{"id":"5910","type":"ColumnDataSource"},"glyph":{"id":"5911","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5912","type":"Patch"},"selection_glyph":null,"view":{"id":"5914","type":"CDSView"}},"id":"5913","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"lower":[0.0004683936985472669,0.0004683936985472669,0.0005146102035970433,0.0004841735140046477,0.00045538318697740937,0.0004122514726100797,0.0005530947688103982,0.0004393135220005935,0.0004683936985472669,0.0004683936985472669,0.0006532597187463724,0.0006532597187463724,0.0004683936985472669,0.0004683936985472669,0.0004278114457574061,0.0004278114457574061],"mean":[0.0004683936985472669,0.0004683936985472669,0.0005608267086468197,0.0005405355822518893,0.0004829549281974126,0.00045420045195252617,0.0005680911269833773,0.0004922369624435075,0.0004683936985472669,0.0004683936985472669,0.0006532597187463724,0.0006532597187463724,0.0004683936985472669,0.0004683936985472669,0.0004278114457574061,0.0004278114457574061],"name":["average","average","average","average","average","average","average","average","run_1","run_1","run_1","run_1","run_2","run_2","run_2","run_2"],"sp-clause-activity-inc":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",1.0,0.8010096602672881,1.2324295588767136,0.5921974975193663,1.0,0.6344667123857157,0.6341684953370115,0.9910833088013963],"sp-clause-decay":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",1.4,1.6283170687578554,1.1487419752611672,1.5632274657759597,1.4,1.9545553670212605,1.4483423393862498,1.3348478942079562],"sp-clause-del-heur":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","2","0","2","0","2","0","0","0"],"sp-clause-inversion":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive"],"sp-first-restart":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",100,122,41,109,100,42,27,161],"sp-learned-clause-sort-heur":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","0","1","2","9","0","8","9","4"],"sp-learned-clauses-inc":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",1.3,1.2773943608969935,1.3427141748151887,1.1909140309863875,1.3,1.3637807738268433,1.2229524670710852,1.4862511342653772],"sp-learned-size-factor":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",0.4,1.1780283328215297,0.6137985361567136,1.3175784101428392,0.4,0.9045107247697929,1.3476990994578542,1.3889617799634035],"sp-max-res-lit-inc":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",1.0,0.3088983914277925,"inactive","inactive",1.0,1.9449407963671381,0.4357907702994575,0.7738526325948372],"sp-max-res-runs":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",4,1,"inactive","inactive",4,19,2,15],"sp-orig-clause-sort-heur":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","0","1","9","5","0","1","12","17"],"sp-phase-dec-heur":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","5","0","2","5","5","0","4","4"],"sp-rand-phase-dec-freq":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","0.001","0.0001","inactive","0.0001","0.001","0.001","0.0001","0"],"sp-rand-phase-scaling":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",1.0,0.5099633125315828,"inactive",0.4348061901340922,1.0,0.37224865523946626,0.5184029935526,"inactive"],"sp-rand-var-dec-freq":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","0.001","0.0001","0.05","0.05","0.001","0.001","0.05","0.0001"],"sp-rand-var-dec-scaling":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",1.0,0.7068491220873272,0.9635334693384778,0.4601600167171874,1.0,0.6457428689908321,1.0150223602145294,0.3989642099913439],"sp-res-cutoff-cls":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",8,18,"inactive","inactive",8,2,2,2],"sp-res-cutoff-lits":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",400,202,"inactive","inactive",400,602,657,984],"sp-res-order-heur":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","0","11","inactive","inactive","0","7","11","17"],"sp-resolution":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","1","1","0","0","1","2","2","1"],"sp-restart-inc":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",1.5,1.6635373921745407,1.1052031147728583,1.7107627767358236,1.5,1.6256255957292618,1.6824951306591167,1.158027050556822],"sp-update-dec-queue":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","1","1","1","0","1","1","0","0"],"sp-use-pure-literal-rule":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","1","0","1","1","1","0","0","0"],"sp-var-activity-inc":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",1.0,1.0746129305190708,0.92337983183454,0.6646499538036926,1.0,0.7795203367721831,0.6043780206999324,1.3487402008902887],"sp-var-dec-heur":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","0","19","16","16","0","14","4","18"],"sp-variable-decay":["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive",1.4,1.8998086415854103,1.4523717964072764,1.8936785929913007,1.4,1.3805846348618949,1.746721703524285,1.3315459643721135],"time":[0.0003540515899658203,0.0005123615264892578,25.953232765197754,27.71523880958557,52.95940160751343,109.95643520355225,215.83472967147827,322.3197224140167,0.0005123615264892578,25.953232765197754,25.953232765197754,52.95940160751343,0.0003540515899658203,27.71523880958557,27.71523880958557,109.95643520355225],"upper":[0.0004683936985472669,0.0004683936985472669,0.000607043213696596,0.0005968976504991308,0.0005105266694174159,0.0004961494312949726,0.0005830874851563564,0.0005451604028864215,0.0004683936985472669,0.0004683936985472669,0.0006532597187463724,0.0006532597187463724,0.0004683936985472669,0.0004683936985472669,0.0004278114457574061,0.0004278114457574061]},"selected":{"id":"5952","type":"Selection"},"selection_policy":{"id":"5951","type":"UnionRenderers"}},"id":"5871","type":"ColumnDataSource"},{"attributes":{},"id":"5952","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"5936","type":"LegendItem"},{"id":"5937","type":"LegendItem"},{"id":"5938","type":"LegendItem"}],"label_text_font_size":{"value":"8pt"},"location":"bottom_left"},"id":"5935","type":"Legend"},{"attributes":{"filters":[{"id":"5904","type":"GroupFilter"}],"source":{"id":"5871","type":"ColumnDataSource"}},"id":"5905","type":"CDSView"},{"attributes":{"callback":{"id":"5933","type":"CustomJS"},"icon":null,"label":"None"},"id":"5934","type":"Button"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5893","type":"SaveTool"},{"id":"5894","type":"PanTool"},{"id":"5895","type":"BoxZoomTool"},{"id":"5896","type":"WheelZoomTool"},{"id":"5897","type":"ResetTool"},{"id":"5927","type":"HoverTool"}]},"id":"5898","type":"Toolbar"},{"attributes":{"ticker":null},"id":"5949","type":"LogTickFormatter"},{"attributes":{"children":[{"id":"5930","type":"CheckboxButtonGroup"}],"width":100},"id":"5939","type":"WidgetBox"},{"attributes":{"axis_label":"time (sec)","axis_label_text_font_size":{"value":"15pt"},"formatter":{"id":"5949","type":"LogTickFormatter"},"major_label_orientation":0.75,"major_label_text_font_size":{"value":"12pt"},"ticker":{"id":"5884","type":"LogTicker"}},"id":"5883","type":"LogAxis"},{"attributes":{"children":[{"id":"5940","type":"WidgetBox"},{"id":"5941","type":"WidgetBox"}]},"id":"5942","type":"Row"},{"attributes":{},"id":"5893","type":"SaveTool"},{"attributes":{},"id":"5954","type":"Selection"},{"attributes":{"data_source":{"id":"5871","type":"ColumnDataSource"},"glyph":{"id":"5907","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5908","type":"Line"},"selection_glyph":null,"view":{"id":"5905","type":"CDSView"}},"id":"5909","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"time"},"y":{"field":"mean"}},"id":"5919","type":"Line"},{"attributes":{"line_color":"#d95f02","x":{"field":"time"},"y":{"field":"mean"}},"id":"5918","type":"Line"},{"attributes":{"axis_label":"estimated runtime","axis_label_text_font_size":{"value":"15pt"},"formatter":{"id":"5947","type":"LogTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"ticker":{"id":"5889","type":"LogTicker"}},"id":"5888","type":"LogAxis"},{"attributes":{"filters":[{"id":"5921","type":"GroupFilter"}],"source":{"id":"5871","type":"ColumnDataSource"}},"id":"5922","type":"CDSView"},{"attributes":{"source":{"id":"5910","type":"ColumnDataSource"}},"id":"5914","type":"CDSView"},{"attributes":{"children":[{"id":"5934","type":"Button"}],"width":50},"id":"5941","type":"WidgetBox"},{"attributes":{"children":[{"id":"5873","subtype":"Figure","type":"Plot"},{"id":"5943","type":"Column"}]},"id":"5944","type":"Row"},{"attributes":{"num_minor_ticks":10},"id":"5889","type":"LogTicker"},{"attributes":{"column_name":"name","group":"run_1"},"id":"5915","type":"GroupFilter"},{"attributes":{"label":{"value":"run_2"},"renderers":[{"id":"5926","type":"GlyphRenderer"}]},"id":"5938","type":"LegendItem"},{"attributes":{"filters":[{"id":"5915","type":"GroupFilter"}],"source":{"id":"5871","type":"ColumnDataSource"}},"id":"5916","type":"CDSView"},{"attributes":{"line_color":"#7570b3","x":{"field":"time"},"y":{"field":"mean"}},"id":"5924","type":"Line"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"5912","type":"Patch"},{"attributes":{},"id":"5894","type":"PanTool"},{"attributes":{"children":[{"id":"5932","type":"Button"}],"width":50},"id":"5940","type":"WidgetBox"},{"attributes":{"column_name":"name","group":"average"},"id":"5904","type":"GroupFilter"},{"attributes":{"children":[{"id":"5939","type":"WidgetBox"},{"id":"5942","type":"Row"}]},"id":"5943","type":"Column"},{"attributes":{"dimension":1,"ticker":{"id":"5889","type":"LogTicker"}},"id":"5892","type":"Grid"},{"attributes":{},"id":"5896","type":"WheelZoomTool"},{"attributes":{"args":{"glyph_renderer0":{"id":"5909","type":"GlyphRenderer"},"glyph_renderer1":{"id":"5913","type":"GlyphRenderer"},"glyph_renderer2":{"id":"5920","type":"GlyphRenderer"},"glyph_renderer3":{"id":"5926","type":"GlyphRenderer"}},"code":"len_labels = 3;glyph_renderers = [[glyph_renderer0,glyph_renderer1],[glyph_renderer2],[glyph_renderer3]];\\n        for (i = 0; i &lt; len_labels; i++) {\\n            if (cb_obj.active.includes(i)) {\\n                // console.log(&#x27;Setting to true: &#x27; + i + &#x27;(&#x27; + glyph_renderers[i].length + &#x27;)&#x27;)\\n                for (j = 0; j &lt; glyph_renderers[i].length; j++) {\\n                    glyph_renderers[i][j].visible = true;\\n                    // console.log(&#x27;Setting to true: &#x27; + i + &#x27; : &#x27; + j)\\n                }\\n            } else {\\n                // console.log(&#x27;Setting to false: &#x27; + i + &#x27;(&#x27; + glyph_renderers[i].length + &#x27;)&#x27;)\\n                for (j = 0; j &lt; glyph_renderers[i].length; j++) {\\n                    glyph_renderers[i][j].visible = false;\\n                    // console.log(&#x27;Setting to false: &#x27; + i + &#x27; : &#x27; + j)\\n                }\\n            }\\n        }\\n        "},"id":"5929","type":"CustomJS"},{"attributes":{"overlay":{"id":"5950","type":"BoxAnnotation"}},"id":"5895","type":"BoxZoomTool"}],"root_ids":["5944"]},"title":"Bokeh Application","version":"1.1.0"}}';
          var render_items = [{"docid":"b0799269-6893-455e-8db2-022acd1cab60","roots":{"5944":"61ee71b9-e0d2-495f-a81f-782bfacf30ea"}}];
          root.Bokeh.embed.embed_items(docs_json, render_items);
        
          }
          if (root.Bokeh !== undefined) {
            embed_document(root);
          } else {
            var attempts = 0;
            var timer = setInterval(function(root) {
              if (root.Bokeh !== undefined) {
                embed_document(root);
                clearInterval(timer);
              }
              attempts++;
              if (attempts > 100) {
                console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                clearInterval(timer);
              }
            }, 10, root)
          }
        })(window);
      });
    };
    if (document.readyState != "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  })();
