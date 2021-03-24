---
stackbit_url_path: >-
  posts/A-Flot-plugin-for-saving-canvas-image-to-local-disk
title: 'A Flot plugin for saving canvas image to local disk'
date: '2013-07-02 05:30:19.9731979'
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
<h2><font color="#9b00d3">Background:</font></h2>  <p><a href="http://flotcharts.org" target="_blank">Flot</a> is an open source javascript library to draw attractive charts. I’ve made a plug in for it to allow user save the beautiful chart as an image to local disk as png/bmp/jpeg files by mouse right clicking on the chart.</p>  <h2><font color="#9b00d3">Screen shot:</font></h2>  <p><a href="http://zizhujy.com/FunctionGrapher" target="_blank"><img title="A Flot plugin for saving canvas image to local disk" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="A Flot plugin for saving canvas image to local disk" src="http://zizhujy.com/blog/image.axd?picture=image_629.png" width="663" height="357" /></a></p>  <h2><font color="#9b00d3">Usage:</font></h2>  <p>Inside the &lt;head&gt;&lt;/head&gt; area of your html page, add the following lines:</p>  <pre class="brush: html">    &lt;script type=&quot;text/javascript&quot; src=&quot;http://zizhujy.com/Scripts/base64.js&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;http://zizhujy.com/Scripts/drawing/canvas2image.js&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;http://zizhujy.com/Scripts/flot/jquery.flot.saveAsImage.js&quot;&gt;&lt;/script&gt;</pre>

<p>Now you are all set. Right click on your flot canvas, you will see the &quot;Save image as ...&quot; option.</p>

<h2><font color="#9b00d3">Online examples:</font></h2>

<p><a href="http://zizhujy.com/FunctionGrapher">http://zizhujy.com/FunctionGrapher</a> is using it, you can try right clicking on the function graphs and ou will see you can save the image to local disk.</p>

<h2><font color="#9b00d3">Dependencies:</font></h2>

<p>This plugin references the base64.js and canvas2image.js.</p>

<h2><font color="#9b00d3">Customizations:</font></h2>

<p>The default behavior of this plugin is dynamically creating an image from the flot canvas, and then puts the image above the flot canvas. If you want to add some css effects on to the dynamically created image, you can apply whatever css styles on to it, only remember to make sure the css class name is set correspondingly by the options object of this plugin. You can also customize the image format through this options object:</p>

<pre class="brush: javascript">    options: {
        imageClassName: &quot;canvas-image&quot;,
        imageFormat: &quot;png&quot;
    }</pre>

<h2><font color="#9b00d3">Browser compatibility:</font></h2>

<p>Tested on IE 10 and Chrome, it works well.</p>

<h2><font color="#9b00d3">Source Code: [jquery.flot.saveAsImage.js]</font></h2>

<p><a title="https://github.com/Jeff-Tian/jquery.flot.saveAsImage.js" href="https://github.com/Jeff-Tian/jquery.flot.saveAsImage.js">https://github.com/Jeff-Tian/jquery.flot.saveAsImage.js</a></p>

<pre class="brush: javascript">
/* Flot plugin that adds a function to allow user save the current graph as an image
    by right clicking on the graph and then choose "Save image as ..." to local disk.

Copyright (c) 2013 http://zizhujy.com.
Licensed under the MIT license.

Usage:
    Inside the <head></head> area of your html page, add the following lines:
    
    &lt;script type="text/javascript" src="http://zizhujy.com/Scripts/base64.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="http://zizhujy.com/Scripts/drawing/canvas2image.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="http://zizhujy.com/Scripts/flot/jquery.flot.saveAsImage.js"&gt;&lt;/script&gt;

    Now you are all set. Right click on your flot canvas, you will see the "Save image as ..." option.

Online examples:
    http://zizhujy.com/FunctionGrapher is using it, you can try right clicking on the function graphs and
    you will see you can save the image to local disk.

Dependencies:
    This plugin references the base64.js and canvas2image.js.

Customizations:
    The default behavior of this plugin is dynamically creating an image from the flot canvas, and then puts the 
    image above the flot canvas. If you want to add some css effects on to the dynamically created image, you can
    apply whatever css styles on to it, only remember to make sure the css class name is set correspondingly by 
    the options object of this plugin. You can also customize the image format through this options object:

    options: {
        imageClassName: "canvas-image",
        imageFormat: "png"
    }

*/

; (function ($, Canvas2Image) {    
    var imageCreated = null;

    function init(plot, classes) {
        plot.hooks.bindEvents.push(bindEvents);
        plot.hooks.shutdown.push(shutdown);

        function bindEvents(plot, eventHolder){
            eventHolder.mousedown(onMouseDown);
        }

        function shutdown(plot, eventHolder){
            eventHolder.unbind("mousedown", onMouseDown);
        }

        function onMouseDown(e){        
            if(e.button == 2) {                        
                // Open an API in Canvas2Image, in case you would need to call
                // it to delete the dynamically created image.
                //Canvas2Image.deleteStaleCanvasImage = deleteStaleCanvasImage;
                deleteStaleCanvasImage(plot);
                createImageFromCanvas(plot, plot.getOptions().imageFormat);
            }
        }
    }

    function onMouseUp(plot){
        setTimeout( function() {deleteStaleCanvasImage(plot);}, 1);
    }

    function deleteStaleCanvasImage(plot) {
        //$(plot.getCanvas()).parent().find("img." + plot.getOptions().imageClassName).unbind("mouseup", onMouseUp).remove();
        $(imageCreated).unbind("mouseup", onMouseUp).remove();
    }

    function createImageFromCanvas(plot, format){
        var canvas = plot.getCanvas();
        var img = null;
        switch(format.toLowerCase()){
            case "png":
                img = Canvas2Image.saveAsPNG(canvas, format);
                break;
            case "bmp":
                img = Canvas2Image.saveAsBMP(canvas, format);
                break;
            case "jpeg":
                img = Canvas2Image.saveAsJPEG(canvas, format);
                break;
            default:
                break;
        }

        if(!img){
            alert("Sorry, this browser is not capable of saving " + format + " files!");
            return false;
        }

        $(img).attr("class", plot.getOptions().imageClassName);
        $(img).css("border", $(canvas).css("border"));
        $(img).insertBefore($(canvas));
        $(img).mouseup(plot, onMouseUp);

        imageCreated = img;
    }

    var options = {
        imageClassName: "canvas-image",
        imageFormat: "png"
    };

    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'saveAsImage',
        version: '1.1'
    });

})(jQuery, Canvas2Image);
</pre>