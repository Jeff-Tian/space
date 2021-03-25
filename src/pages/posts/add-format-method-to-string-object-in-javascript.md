---
stackbit_url_path: >-
  posts/add-format-method-to-string-object-in-javascript
title: '给JavaScript的String对象添加一个format方法'
date: '2011-08-02 03:53:00'
excerpt: >-
  本文给JavaScript的String对象添加了一个format()方法，使得在JavaScript中也能像在C#中一样使用
  String.format("Current Page Index: {0}, Total Pages: {1}", 10, 150)这样的语句了。
comments_count: 0
positive_reactions_count: 0
tags: 
  - arguments
  - format
  - overload
  - string
canonical_url: https://be-net.azurewebsites.net/post/2011/08/02/add-format-method-to-string-object-in-javascript
template: post
---
<h1><span style="color: #9b00d3;">一、背景</span></h1>
<p>在C#中，String类有一个Format()方法，可以方便使用字符串模板和动态参数来构建最终的字符串。</p>
<p>比如有如下代码：</p>
<pre class="brush: csharp" style="min-height: 3em; width: 99%; overflow: auto;">Console.WriteLine(String.Format("Current Page Index: {0}, Total Pages: {1}", 10, 150));</pre>
<p>最终输出为：</p>
<pre style="background-color: black; color: white;">Current Page Index: 10, Total Pages: 150</pre>
<p>但是，JavaScript 的String对象没有这样的字符串模板方法。不过，我们可以自行给它的String对象添加一个。来模仿C#中的String.Format()。</p>
<h1><span style="color: #9b00d3;">二、解决方案</span></h1>
<p>代码：</p>
<pre class="brush: javascript" style="min-height: 3em; width: 99%; overflow: auto;">    String.format = function () {
        if (arguments.length &lt;= 0) {
            return "";
        } else {
            var string = arguments[0];
            for (var i = 1; i &lt; arguments.length; i++) {
                string = string.replace("{" + (i - 1) + "}", arguments[i]);
            }

            return string;
        }
    };</pre>
<h1>三、应用示例</h1>
<p>这样写代码：</p>
<pre class="brush: javascript" style="min-height: 3em; width: 99%; overflow: auto;">    alert(String.format("Current Page Index: {0}, Total Pages: {1}", 10, 150));</pre>
<p>运行结果： <a title="点击这里运行" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=%0A%20%20%20%20String.format%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20if%20(arguments.length%20%3C%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%22%22%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20string%20%3D%20arguments%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20(var%20i%20%3D%201%3B%20i%20%3C%20arguments.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20string%20%3D%20string.replace(%22%7B%22%20%2B%20(i%20-%201)%20%2B%20%22%7D%22%2C%20arguments%5Bi%5D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20string%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%20%20%0A%20%20%20%20alert(String.format(%22Current%20Page%20Index%3A%20%7B0%7D%2C%20Total%20Pages%3A%20%7B1%7D%22%2C%2010%2C%20150))%3B" target="_blank">点击这里运行</a></p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_43.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_43.png" border="0" alt="image" width="402" height="163" /></a></p>
<h1>四、原理剖析</h1>
<ol>
<li>在 JavaScript 中，可以修改已有对象，或者为已有对象添加新方法。
<ul>
<li>本例中就是为已有对象String添加了format()新方法。</li>
</ul>
</li>
<li>由于需要传递给String.format()方法的参数不确定，故需要用到arguments对象。
<ul>
<li>在函数代码中，使用特殊对象arguments，开发者无需明确指出参数名，就能访问它们。第一个参数位于位置0，第二个参数位于位置1，依次类推。</li>
<li>与其他程序设计语言不同，Javascript不会验证传递给函数的参数个数是否等于函数定义的参数个数。开发者定义的函数都可以接受任意个数的参数（根据Netscape的文档，最多能接受25个），而不会引发任何错误，任何遗漏的参数都会以undefined传递给函数，多余的参数将忽略。</li>
<li>因此本例中在函数定义处根本没有定义参数。</li>
</ul>
</li>
</ol>
<p>[donate: <a href="http://www.zizhujy.com">www.zizhujy.com</a>]</p>