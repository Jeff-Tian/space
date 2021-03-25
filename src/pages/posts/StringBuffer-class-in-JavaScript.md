---
stackbit_url_path: >-
  posts/StringBuffer-class-in-JavaScript
title: 'JavaScript 版 StringBuffer 类'
date: '2011-08-02 22:35:00'
excerpt: >-
  本文介绍了大量字符串拼接操作潜在的问题，以及解决方法。并提供了一个JavaScript版本的StringBuffer类。
comments_count: 0
positive_reactions_count: 0
tags: 
  - StringBuffer
  - javascript
  - 动态原型
  - 字符串拼接
canonical_url: https://be-net.azurewebsites.net/post/2011/08/02/StringBuffer-class-in-JavaScript
template: post
---
<h1><span style="color: #9b00d3;">一、背景（字符串连接）</span></h1>
<p>C#与JavaScript一样，使用+来连接字符串。事实上，这种字符串拼接方式是非常消耗资源的，当这种操作的重复次数较多时（成百上千），会造成性能问题。在 C# 中，可以使用 StringBuffer 来应对大量的字符串拼接操作，在 JavaScript 中呢？默认没有这样的StringBuffer类，不过可以自己写个 StringBuffer 类。</p>
<h1><span style="color: #9b00d3;">二、解决方案</span></h1>
<p>StringBuffer类源码：</p>
<pre class="brush: javascript" style="min-height: 3em; width: 99%; overflow: auto;">    function StringBuffer() {
        this.__strings__ = new Array();

        if (typeof StringBuffer._initialized == "undefined") {
            StringBuffer.prototype.append = function (s) {
                this.__strings__.push(s);
            };

            StringBuffer.prototype.appendLine = function (s) {
                this.__strings__.push(s + "\n");
            };

            StringBuffer.prototype.toString = function () {
                return this.__strings__.join("");
            };

            StringBuffer._initialized = true;
        }
    }</pre>
<h1><span style="color: #9b00d3;">三、原理剖析</span></h1>
<p>以上代码使用了Array对象存储字符串，然后使用join()方法（参数是空字符串）拼接成最后的字符串。这样子在数组中引入多少字符串都不成问题，因为只有在调用join()方法时才会发生连接操作。（我猜C#中的StringBuffer也是这样实现的）</p>
<p>JavaScript中并没有class这样的定义类的关键字，以上使用了动态原型的途径来模拟了类的实现。</p>
<h1><span style="color: #9b00d3;">四、应用示例</span></h1>
<p><a title="点击这里运行" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=%0A%20%20%20%20function%20StringBuffer()%20%7B%0A%20%20%20%20%20%20%20%20this.__strings__%20%3D%20new%20Array()%3B%0A%0A%20%20%20%20%20%20%20%20if%20(typeof%20StringBuffer._initialized%20%3D%3D%20%22undefined%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20StringBuffer.prototype.append%20%3D%20function%20(s)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.__strings__.push(s)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20StringBuffer.prototype.appendLine%20%3D%20function%20(s)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.__strings__.push(s%20%2B%20%22%5Cn%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20StringBuffer.prototype.toString%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20this.__strings__.join(%22%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20StringBuffer._initialized%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20var%20sb%20%3D%20new%20StringBuffer()%3B%0A%20%20%20%20sb.append(%22hello%22)%3B%0A%20%20%20%20sb.append(%22%2C%20I'm%20%22)%3B%0A%20%20%20%20sb.appendLine(%22Jeff%22)%3B%0A%20%20%20%20sb.appendLine(%22It's%20great%20day%20for%20love%2C%20isn't%20it%3F%22)%3B%0A%20%20%20%20sb.appendLine(%22Welcome%20to%20www.zizhujy.com!%22)%3B%0A%20%20%20%20%0A%20%20%20%20alert(sb.toString())%3B" target="_blank">点击这里运行</a></p>
<pre class="brush: javascript" style="min-height: 3em; width: 99%; overflow: auto;">    var sb = new StringBuffer();
    sb.append("hello");
    sb.append(", I'm ");
    sb.appendLine("Jeff");
    sb.appendLine("It's great day for love, isn't it?");
    sb.appendLine("Welcome to www.zizhujy.com!");
    
    alert(sb.toString());</pre>
<p>[donate: <a href="http://www.zizhujy.com">www.zizhujy.com</a>]</p>