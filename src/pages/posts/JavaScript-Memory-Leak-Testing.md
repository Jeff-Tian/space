---
stackbit_url_path: >-
  posts/JavaScript-Memory-Leak-Testing
title: 'JavaScript Memory Leak Testing'
date: '2012-03-22 02:30:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - javascript
  - memory leak
canonical_url: https://be-net.azurewebsites.net/post/2012/03/22/JavaScript-Memory-Leak-Testing
template: post
---
<h2><span style="color: #ff00ff;">Download word version:</span></h2>
<p><a href="/blog/file.axd?file=2012%2f3%2fJavaScript+Memory+Leak+Testing+(v2).docx">JavaScript Memory Leak Testing (v2).docx (468.49 kb)</a></p>
<h4>What a memory leak is</h4>
<p>In its simplest form, a memory leak occurs when a program does not release memory it allocated.</p>
<h4><a name="_Toc320109435"></a>What a JavaScript memory leak is</h4>
<p>Memory leak that associates with the particular program &ndash; JavaScript.</p>
<p>As JavaScript is implemented differently across the different browsers, the same JavaScript can causes different memory leak problems across the different browsers. It can happen that a same code causes memory leaks in one browser but works fine in another browser.</p>
<p><strong>So a lot of memory leaks in JavaScript are browser specific. </strong>So if you hear Browser Memory Leak, you don&rsquo;t meet new concept. They are the same thing. Generally, JavaScript memory leaks are not an issue for web applications. Users navigate between pages, and each page switch causes the browser to refresh. Even if there&rsquo;s a memory leak on one page, the leak is released after a page switch. The size of the leak is minor, and consequently often ignored.</p>
<p>Memory leaks became more of a problem when the Ajax technology was introduced. On an ajax heavy page, users don&rsquo;t refresh the page very often. Ajax technology is used to update the page content asynchronously. In an extreme scenario, the whole web application is constructed on one page. (For example: <a href="http://causes.msn.com">http://causes.msn.com</a>). In this cases, leaks accumulate and can&rsquo;t be ignored.</p>
<h4><a name="_Toc320109436"></a>JavaScript memory leak&rsquo;s consequences</h4>
<p>&middot; Leaks will slow down the browser as the process consumes more memory</p>
<p>&middot; Leaks will slow down the operating system and other processes as the bigger process is given more room</p>
<p>As you have already known that the leaks are browser specific, some browsers handle leaks better than others (e.g. IE 8 users whole separate processes per tab)</p>
<h4><a name="_Toc320109437"></a>How memory leaks occur in JavaScript</h4>
<p>&middot; Circular references</p>
<p>&middot; Closures with DOM elements / event handlers</p>
<p>&middot; Event handlers (mostly with IE)</p>
<p>&middot; Too much recursion</p>
<p>&middot; See Appendix (<a href="file:///D:/jie.tian/Trainning/JavaScript Memory Leak Testing/#_Leak_Patterns">Leak Patterns</a>) for detail</p>
<h4><a name="_Toc320109438"></a>How to avoid memory leaks</h4>
<p>&middot; Use the global scope only when appropriate</p>
<p>&middot; Always declare variables in functions when you use them</p>
<p>&middot; Use a collector to keep references to elements with event handlers</p>
<p>&middot; Avoid closure with event handlers and functions that attach event handlers or use a global event handler that delegates to listeners</p>
<p>&middot; Avoid dealing with DOM elements in closures or remember to null them afterwards</p>
<p>&middot; Detach circular references when you are done with them</p>
<h4><a name="_Toc320109439"></a>Detection of leaks</h4>
<p>&middot; Code review</p>
<p>&middot; Open browser console, interact with page and notice the error messages (if any) appear in console</p>
<p>&middot; Use windows Task Manager</p>
<p>o <a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image002_2.jpg"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="clip_image002" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image002_thumb_2.jpg" alt="clip_image002" width="224" height="244" border="0" /></a></p>
<p>o <a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image004_2.jpg"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="clip_image004" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image004_thumb_2.jpg" alt="clip_image004" width="224" height="244" border="0" /></a></p>
<p>&middot; Use tools to detect, see the Tools section</p>
<h4><a name="_Toc320109440"></a>Detecting Tools</h4>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="213">
<p><strong>Name</strong></p>
</td>
<td valign="top" width="88">
<p><strong>For (Browser)</strong></p>
</td>
<td valign="top" width="337">
<p><strong>Remark</strong></p>
</td>
</tr>
<tr>
<td valign="top" width="213">
<p><a href="http://blogs.msdn.com/b/gpde/archive/2009/08/03/javascript-memory-leak-detector-v2.aspx">Microsoft JavaScript Memory Leak Detector (v2)</a></p>
</td>
<td valign="top" width="88">
<p>IE6, IE7</p>
</td>
<td valign="top" width="337">
<p>It can highlight the exact point in the JavaScript code where the memory leak originated.<em></em></p>
</td>
</tr>
<tr>
<td valign="top" width="213">
<p><a href="http://outofhanwell.com/ieleak/index.php?title=Main_Page">Drip</a></p>
</td>
<td valign="top" width="88">
<p>IE</p>
</td>
<td valign="top" width="337">
<p>This tool only shows the result, not the reason for leaks.</p>
</td>
</tr>
<tr>
<td valign="top" width="213">
<p><a href="https://addons.mozilla.org/en-US/firefox/addon/2490">Leak Monitor 0.4.2</a></p>
</td>
<td valign="top" width="88">
<p>Firefox</p>
</td>
<td valign="top" width="337">
<p>It is an open extension for Firefox. (Not supported by lasted firefox any more)</p>
</td>
</tr>
<tr>
<td valign="top" width="213">
<p><a href="http://www.softwareverify.com/javascript/memory/index.html">SoftwareVerification JavaScript Memory validator</a></p>
</td>
<td valign="top" width="88">
<p>Firefox</p>
</td>
<td valign="top" width="337">
<p>You can find and track the leaks with its &ldquo;hot spots&rdquo; feature. But it is a commercial application, though you can use its trial version.</p>
</td>
</tr>
<tr>
<td valign="top" width="213">
<p><a href="http://home.orange.nl/jsrosman/">sIEve</a></p>
</td>
<td valign="top" width="88">
<p>IE</p>
</td>
<td valign="top" width="337">
<p>Much like Drip, but is more powerful.</p>
<p>sIEve can&rsquo;t find all leaks for your application, but it will find leaks caused by orphan nodes. The additional information, such as ID and outerHTML, can help you identify the leaking nodes.</p>
</td>
</tr>
</tbody>
</table>
<h4><a name="_Toc320109441"></a>Examples:</h4>
<h5><a name="_Toc320109442"></a>Detect circular reference with sIEve/Drip</h5>
<p>Steps with sIEve:</p>
<p>1. Open sIEve, and paste the target url of the testing page <a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image006_2.jpg"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="clip_image006" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image006_thumb_2.jpg" alt="clip_image006" width="244" height="119" border="0" /></a></p>
<p>2. After the page loads complete, interact with the page or just keep the page open for a long time</p>
<p>3. Click the &ldquo;Scan Now!&rdquo; button</p>
<p>4. Then click &ldquo;Show Leaks&rdquo; button, you will see the leaked elements if any<a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image008_2.jpg"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="clip_image008" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image008_thumb_2.jpg" alt="clip_image008" width="244" height="139" border="0" /></a></p>
<p>Steps with Drip:</p>
<p>1. Open Drip and paste the target url</p>
<p>2. Interact with the page or just leave the page open for a long time</p>
<p>3. Click the &ldquo;Show DOM Leaks&rdquo; button you will see the leaked elements if any<a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image010_2.jpg"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="clip_image010" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image010_thumb_2.jpg" alt="clip_image010" width="244" height="143" border="0" /></a></p>
<p>The source code of the sample testing page (CircularReferences.htm):</p>
<pre class="brush: html">&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
&lt;head&gt;
    &lt;title&gt;JavaScript Memory Leak - Circular References&lt;/title&gt;
    &lt;script type="text/javascript"&gt;
    &lt;!--
        window.onload = function () {
            var obj = document.getElementById("cmd");
            document.getElementById("cmd").expandoProperty = obj;
            alert(obj);
        };
    //--&gt;
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div&gt;
        &lt;h1&gt;JavaScript Memory Leak Testing - Circular References&lt;/h1&gt;
        &lt;pre id="cmd"&gt;&lt;/pre&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
<h5><a name="_Toc320109443"></a>Detect too much recursion issue</h5>
<p>Please refer to the Appendix <a href="file:///D:/jie.tian/Trainning/JavaScript Memory Leak Testing/#_Too_much_recursion">too much recursion</a> section.</p>
<p>Steps:</p>
<p>1. Open browser and navigate to target url</p>
<p>2. Press F12 (with IE / Chrome) or Ctrl+Shift+K (with Firefox) to open Console</p>
<p>3. Interact with the page and notice the error messages appear in the console if any</p>
<p>4. Investigate if it is caused by recursion.</p>
<h4><a name="_Toc320109444"></a>Appendix</h4>
<h5><a name="_Toc320109445"></a><a name="_Leak_Patterns"></a>Leak Patterns</h5>
<p>As web developers know, Internet Explorer (IE) is different from Firefox and other browsers. In this section, the memory leak patterns and issues discussed are mainly targeted at, but not limited to, IE. Good practices should be applicable to all browsers.</p>
<h6>Circular references</h6>
<p>Circular references are the root cause of nearly every leak (As discussed in the above section). Generally, IE can handle the circular references and dispose of them correctly in the JavaScript world. The exception occurs when DOM objects are introduced. Circular references occur and cause the DOM node to leak when the JavaScript object holds the reference to the DOM element, and the DOM element&rsquo;s property holds the JavaScript object. <a href="file:///D:/jie.tian/Trainning/JavaScript Memory Leak Testing/#_Listing_1._Leak">Listing 1</a> shows a code sample that&rsquo;s often used to demonstrate this problem in articles about memory leaks.</p>
<h6><a name="_Listing_1._Leak"></a>Listing 1. Leak by circular references</h6>
<pre class="brush: javascript">var obj = document.getElementById(&ldquo;someLeakingDIV&rdquo;);
document.getElementById(&ldquo;someLeakingDIV&rdquo;).expandoProperty = obj;
</pre>
<p>To resolve the issue, explicitly set the expandoProperty to null when you&rsquo;re ready to remove the node from the document.</p>
<h6>Clossures</h6>
<p>Closures cause memory leaks because they create circular references without being aware of it. The parent function&rsquo;s variable will be held as long as the closure is alive. Its life cycle goes beyond the function scope, which will cause a leak if not handled carefully. <a href="file:///D:/jie.tian/Trainning/JavaScript Memory Leak Testing/#_Listing_2._Closure">Listing 2</a> shows a leak caused by closure, which is a common coding style in JavaScript.</p>
<h6><a name="_Listing_2._Closure"></a>Listing 2. Closure that leaks</h6>
<pre class="brush: html">&lt;html&gt;
&lt;head&gt;
	&lt;script type=&rdquo;text/javascript&rdquo;&gt;
window.onload = function () {
		var obj = document.getElementById(&ldquo;element&rdquo;);
		// this creates a closure over &ldquo;element&rdquo;
		// and will leak if not handled properly.
		obj.onclick = function(evt) {
alert(&ldquo;leak the element DIV&rdquo;);
};
	};
	&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&rdquo;element&rdquo;&gt;Leaking DIV&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>If you use sIEve &ndash; a tool that detects orphan nodes and memory leaks &ndash; you&rsquo;ll notice that the element DIV is being referenced twice. One of the reference is held by the closure (the anonymous function assigned to the <em>onclick</em> event) and can&rsquo;t be deleted even if you remove the node. If your application removes the element node later, the JavaScript reference will still hold an orphan node. That orphan node will cause the memory leak.</p>
<p>To understand why closure creates circular references you can refer to the below diagram:</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image012_2.jpg"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="clip_image012" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image012_thumb_2.jpg" alt="clip_image012" width="244" height="149" border="0" /></a></p>
<h6><a name="_Too_much_recursion"></a>Too much recursion</h6>
<p>This is the most serious issue among the leaks mentioned in this article. It is caused by unintentional redefine some javascript methods with the same names. The consequence is that it will run out of memory so the browser (All kind of browsers) will stop all the javascript execution to avoid crash and so that the page&rsquo;s functionality is broken. Below screenshot is an example:</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image014_2.jpg"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="clip_image014" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image014_thumb_2.jpg" alt="clip_image014" width="244" height="180" border="0" /></a></p>
<p>Screen shot with IE 9</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image016_2.jpg"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="clip_image016" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image016_thumb_2.jpg" alt="clip_image016" width="244" height="171" border="0" /></a></p>
<p>Screen shot with Chrome</p>
<p>The source code of this example is listed below.</p>
<p>From the source code we can easily find out the root cause is the Object.prototype.toString() method is redefined 2 times, but in the practical case, this can be very hard to find out because the duplicated redefining may be placed in 2 or more separate js files.</p>
<p>This example can be repro&rsquo;d in IE 9, Chrome, Firefox, but not in IE 7, 8.</p>
<p>The source code of TooMuchRecursion.htm</p>
<pre class="brush: html">&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
&lt;head&gt;
    &lt;title&gt;JavaScript Memory Leak - Too much recursion&lt;/title&gt;
    &lt;script type="text/javascript"&gt;
    &lt;!--
        (function () {
            // back up the original toString() method
            Object.prototype.toString2 = Object.prototype.toString;

            // rewrite the toString() method
            Object.prototype.toString = function () {
                var originalString = this.toString2();
                if (arguments.length &gt; 0) {
                    return "{ " + originalString + " }\r\n";
                } else {
                    return "{ " + originalString + " }";
                }
            };
        })();

        (function (window) {
            // back up the original toString() method
            Object.prototype.toString2 = Object.prototype.toString;

            // rewrite the toString() method
            Object.prototype.toString = function () {
                var originalString = this.toString2();
                if (arguments.length &gt; 0) {
                    return "{ " + originalString + " }\r\n";
                } else {
                    return "{ " + originalString + " }";
                }
            };

            function showInfo(o, infoDivId) {
                var infoDiv = document.getElementById(infoDivId);
                infoDiv.innerHTML += o.toString(true);
            }

            window.showInfo = showInfo;
        })(window);
    //--&gt;
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div&gt;
        &lt;h1&gt;JavaScript Memory Leak Testing - Too much recursion&lt;/h1&gt;
        &lt;p&gt;&lt;input type="button" value="Click me to show my info" onclick="showInfo(this, 'cmd');" /&gt;&lt;/p&gt;
        &lt;pre id="cmd"&gt;&lt;/pre&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<h2><span style="color: #ff00ff;">Download word version:</span></h2>
<p><a href="/blog/file.axd?file=2012%2f3%2fJavaScript+Memory+Leak+Testing+(v2).docx">JavaScript Memory Leak Testing (v2).docx (468.49 kb)</a></p>