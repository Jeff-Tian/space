---
stackbit_url_path: >-
  posts/A-navigation-control-plugin-for-Flot
title: 'A navigation control plugin for Flot'
date: '2013-07-23 21:25:07.515957'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - flot
  - javascript
  - plugin
canonical_url: >-
template: post
---
<h2><font color="#9b00d3">Background:</font></h2>  <p>Flot is an open source javascript library for drawing attractive charts, and there is a plugin named jquery.flot.navigation.js to allow user to pan or zoom the charts. However, it is hard for touch screen (iPad, iPhone, Windows Phone, etc.) users to do that. So I made another plugin named jquery.flot.navigationControl.js working together with jquery.flot.navigation.js to ease that problem. It adds several control buttons on top of the charts to let user to click on them, and hooks these buttons to do the panning and zooming work.</p>  <h2><font color="#9b00d3">Screen shot:</font></h2>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/Screenshot.png"><img title="A navigation control plugin for Flot" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="A navigation control plugin for Flot" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/Screenshot_thumb.png" width="647" height="369" /></a></p>  <h2><font color="#9b00d3">Usage:</font></h2>  <p>Inside the &lt;head&gt;&lt;/head&gt; area of your html page, add the following line:</p>  <pre class="brush: html">&lt;script type=&quot;text/javascript&quot; src=&quot;http://zizhujy.com/Scripts/flot/jquery.flot.navigationControl.js&quot;&gt;&lt;/script&gt;</pre>

<p>Now you are all set, there will be pan and zooming controls appear on your canvas.</p>

<h2><font color="#9b00d3">Online example:</font></h2>

<p><a href="http://zizhujy.com/FunctionGrapher">http://zizhujy.com/FunctionGrapher</a> is using it.</p>

<h2><font color="#9b00d3">Dependencies: </font></h2>

<p>These navigation controls would only work if you have referenced jquery.flot.navigation.js plugin and enabled it already.</p>

<h2><font color="#9b00d3">Customizations: </font></h2>

<pre class="brush: javascript">    options = {
        homeRange: {xmin:-10,xmax:10,ymin:-10,ymax:10},
        panAmount: 100,
        zoomAmount: 1.5,
        position: {left: &quot;20px&quot;, top: &quot;20px&quot;}
    };</pre>

<p>To make the control symbols (+, -, ←, ↑, →, ↓, ⌂) more beautiful, you may include your own icon fonts css file, the symbols 
  <br />have the css class 'icon' for you to hook.</p>

<h2><font color="#9b00d3">Browser compatibility:</font></h2>

<p>Tested on IE 8, 9, 10, 11, IE on Windows Phone, Chrome, it works well.</p>

<h2><font color="#9b00d3">Source Code: [jquery.flot.navigationControl.js]</font></h2>

<p><a href="https://github.com/Jeff-Tian/jquery.flot.navigationControl">https://github.com/Jeff-Tian/jquery.flot.navigationControl</a></p>

<pre class="brush: javascript">/* Flot plugin that adds some navigation controls on top of the canvas layer to allow users pan or zoom the graph. This is even more helpful 
    for the touch screen users.

Copyright (c) 2013 http://zizhujy.com.
Licensed under the MIT license.

Usage:
Inside the &lt;head&gt;&lt;/head&gt; area of your html page, add the following line:

&lt;script type=&quot;text/javascript&quot; src=&quot;http://zizhujy.com/Scripts/flot/jquery.flot.navigationControl.js&quot;&gt;&lt;/script&gt;

Now you are all set, there will be pan and zooming controls appear on your canvas.

Online examples:
http://zizhujy.com/FunctionGrapher is using it.

Dependencies:
These navigation controls would only work if you have referenced jquery.flot.navigation.js plugin and enabled it already.

Customizations:
    options = {
        homeRange: {xmin:-10,xmax:10,ymin:-10,ymax:10},
        panAmount: 100,
        zoomAmount: 1.5,
        position: {left: &quot;20px&quot;, top: &quot;20px&quot;}
    };

To make the control symbols (+, -, ←, ↑, →, ↓, ⌂) more beautiful, you may include your own icon fonts css file, the symbols 
have the css class 'icon' for you to hook.

*/

; (function ($) {

    function init(plot, classes) {
        plot.hooks.draw.push(drawNavigationControl);

        plot.hooks.shutdown.push(shutdown);
    }

    function drawNavigationControl(plot, canvascontext){
        var control = &quot;&lt;div id='navigation-control' style='width: 0; height: 0; left: &quot; + options.position.left + &quot;; top: &quot; + options.position.top + &quot;; position: absolute;'&gt;Control&lt;/div&gt;&quot;;
        var zoomin = &quot;&lt;div id='zoom-in' style='position: absolute; left: 32px; top: 0; height: 28px; width: 28px; border: solid 1px #666;  padding: 0; line-height: 28px; border-radius: 5px; cursor: pointer; vertical-align: middle; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); background-color: #f5f5f5; display: inline-block; text-align: center; -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); text-shadow: 1px 1px 5px rgba(100, 100, 100, 0.75);'&gt;&lt;div&gt;&lt;span class='icon' style='font-size: normal; color: #666;'&gt;+&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&quot;;
        var home = &quot;&lt;div id='zoom-home' style='position: absolute; left: 32px; top: 64px; height: 28px; width: 28px; border: solid 1px #666;  padding: 0; line-height: 28px; border-radius: 5px; cursor: pointer; vertical-align: middle; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); background-color: #f5f5f5; display: inline-block; text-align: center; -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); text-shadow: 1px 1px 5px rgba(100, 100, 100, 0.75);'&gt;&lt;div&gt;&lt;span class='icon' style='font-size: normal; color: #666;'&gt;⌂&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&quot;;
        var zoomout = &quot;&lt;div id='zoom-out' style='position: absolute; left: 32px; top: 128px; height: 28px; width: 28px; border: solid 1px #666;  padding: 0; line-height: 28px; border-radius: 5px; cursor: pointer; vertical-align: middle; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); background-color: #f5f5f5; display: inline-block; text-align: center; -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); text-shadow: 1px 1px 5px rgba(100, 100, 100, 0.75);'&gt;&lt;div&gt;&lt;span class='icon' style='font-size: normal; color: #666;'&gt;-&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&quot;;

        var panup = &quot;&lt;div id='pan-up' style='position: absolute; left: 32px; top: 32px; height: 28px; width: 28px; border: solid 1px #666;  padding: 0; line-height: 28px; border-radius: 5px; cursor: pointer; vertical-align: middle; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); background-color: #f5f5f5; display: inline-block; text-align: center; -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); text-shadow: 1px 1px 5px rgba(100, 100, 100, 0.75);'&gt;&lt;div&gt;&lt;span class='icon' style='font-size: normal; color: #666;'&gt;↑&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&quot;;
        var panright = &quot;&lt;div id='pan-right' style='position: absolute; left: 64px; top: 64px; height: 28px; width: 28px; border: solid 1px #666;  padding: 0; line-height: 28px; border-radius: 5px; cursor: pointer; vertical-align: middle; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); background-color: #f5f5f5; display: inline-block; text-align: center; -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); text-shadow: 1px 1px 5px rgba(100, 100, 100, 0.75);'&gt;&lt;div&gt;&lt;span class='icon' style='font-size: normal; color: #666;'&gt;→&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&quot;;
        var pandown = &quot;&lt;div id='pan-down' style='position: absolute; left: 32px; top: 96px; height: 28px; width: 28px; border: solid 1px #666;  padding: 0; line-height: 28px; border-radius: 5px; cursor: pointer; vertical-align: middle; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); background-color: #f5f5f5; display: inline-block; text-align: center; -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); text-shadow: 1px 1px 5px rgba(100, 100, 100, 0.75);'&gt;&lt;div&gt;&lt;span class='icon' style='font-size: normal; color: #666;'&gt;↓&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&quot;;
        var panleft = &quot;&lt;div id='pan-left' style='position: absolute; left: 0; top: 64px; height: 28px; width: 28px; border: solid 1px #666;  padding: 0; line-height: 28px; border-radius: 5px; cursor: pointer; vertical-align: middle; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); background-color: #f5f5f5; display: inline-block; text-align: center; -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); text-shadow: 1px 1px 5px rgba(100, 100, 100, 0.75);'&gt;&lt;div&gt;&lt;span class='icon' style='font-size: normal; color: #666;'&gt;←&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&quot;;

        var whitebox = &quot;&quot;; // &quot;&lt;div class='navigation-control-placeholder' style='height: 28px; width: 28px; border: solid 1px transparent; margin-bottom: 1px; padding: 0; line-height: 28px; border-radius: 5px; vertical-align: middle; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); background-color: transparent; display: inline-block; text-align: center; -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); box-shadow: 0 0 4px rgba(0, 0, 0, 0); text-shadow: 1px 1px 5px rgba(100, 100, 100, 0.75);'&gt;&lt;/div&gt;&quot;;

        var $placeholder = plot.getPlaceholder();
        $(&quot;#navigation-control&quot;).remove();
        $(control).html(whitebox + zoomin + whitebox + whitebox + panup + whitebox + panleft + home + panright + whitebox + pandown + whitebox + whitebox + zoomout + whitebox).appendTo($placeholder);

        $placeholder.find(&quot;#zoom-in&quot;).click(function(){zoomIn(plot);});
        $placeholder.find(&quot;#zoom-out&quot;).click(function(){zoomOut(plot);});
        $placeholder.find(&quot;#zoom-home&quot;).click(function(){zoomHome(plot);});

        $placeholder.find(&quot;#pan-up&quot;).click(function(){panUp(plot);});
        $placeholder.find(&quot;#pan-right&quot;).click(function(){panRight(plot);});
        $placeholder.find(&quot;#pan-down&quot;).click(function(){panDown(plot);});
        $placeholder.find(&quot;#pan-left&quot;).click(function(){panLeft(plot);});
    }

    function shutdown(plot, eventHolder){
        var $placeholder = plot.getPlaceholder();

        $placeholder.find(&quot;#zoom-in&quot;).unbind(&quot;click&quot;);
        $placeholder.find(&quot;#zoom-out&quot;).unbind(&quot;click&quot;);
        $placeholder.find(&quot;#zoom-home&quot;).unbind(&quot;click&quot;);

        $placeholder.find(&quot;#pan-up&quot;).unbind(&quot;click&quot;);
        $placeholder.find(&quot;#pan-right&quot;).unbind(&quot;click&quot;);
        $placeholder.find(&quot;#pan-down&quot;).unbind(&quot;click&quot;);
        $placeholder.find(&quot;#pan-left&quot;).unbind(&quot;click&quot;);
    }

    function zoomIn(plot){
        var center = plot.p2c({x:0, y:0});
        plot.zoom({amount: options.zoomAmount, center: center});
    }

    function zoomOut(plot){
        var center = plot.p2c({x:0, y:0});
        plot.zoomOut({amount: options.zoomAmount, center: center});
    }

    function zoomHome(plot){
        var axes = plot.getAxes();
        var xaxis= axes.xaxis;
        var yaxis = axes.yaxis;
        xaxis.options.min = options.homeRange.xmin;
        xaxis.options.max = options.homeRange.xmax;
        yaxis.options.min = options.homeRange.ymin;
        yaxis.options.max = options.homeRange.ymax;

        plot.setupGrid();
        plot.draw();
    }

    function panUp(plot){
        plot.pan({top:options.panAmount});
    }

    function panRight(plot){
        plot.pan({left: -options.panAmount});
    }

    function panDown(plot){
        plot.pan({top:-options.panAmount});
    }

    function panLeft(plot){
        plot.pan({left: options.panAmount});
    }

    var options = {
        homeRange: {xmin:-10,xmax:10,ymin:-10,ymax:10},
        panAmount: 100,
        zoomAmount: 1.5,
        position: {left: &quot;20px&quot;, top: &quot;20px&quot;}
    };

    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'navigationControl',
        version: '0.1'
    });

})(jQuery);</pre>