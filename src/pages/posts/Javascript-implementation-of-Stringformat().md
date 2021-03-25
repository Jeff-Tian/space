---
stackbit_url_path: >-
  posts/Javascript-implementation-of-Stringformat()
title: 'Javascript implementation of String.format()'
date: '2013-07-31 22:36:18.9810187'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - format
  - javascript
canonical_url: https://be-net.azurewebsites.net/post/2013/07/31/Javascript-implementation-of-Stringformat()
template: post
---
<h2><font color="#9b00d3">Background:</font></h2>  <p>The String class has a format() method in C# which is very handy to build dynamic messages from a template.</p>  <p>For example, </p>  <pre class="brush: csharp">Console.WriteLine(String.Format(&quot;Current Page Index: {0}, Total Pages: {1}&quot;, 10, 150));</pre>

<p>The above code would generate the following outputs:</p>

<pre class="background-color: black; color: white;">Current Page Index: 10, Total Pages: 150</pre>

<p>But by default, the String object in javascript has no methods like that. But we can add one to it.</p>

<p>I have <a title="add-format-method-to-string-object-in-javascript" href="http://zizhujy.com/blog/post/2011/08/02/add-format-method-to-string-object-in-javascript.aspx" target="_blank">implemented one long time ago</a>, and today I came up with a new implementation which is more robust.</p>

<h2><font color="#9b00d3">Solution:</font></h2>

<pre class="brush: javascript">        String.format = function () {
            if (arguments.length &lt;= 0) {
                return &quot;&quot;;
            } else {
                var format = arguments[0];
                var args = arguments;

                var s = format.replace(/(?:[^{]|^|\b|)(?:{{)*(?:{(\d+)}){1}(?:}})*(?=[^}]|$|\b)/g, function (match, number) {
                    number = parseInt(number);

                    return typeof args[number + 1] != &quot;undefined&quot; ? match.replace(/{\d+}/g, args[number + 1]) : match;
                });

                return s.replace(/{{/g, &quot;{&quot;).replace(/}}/g, &quot;}&quot;);
            }
        };

        String.prototype.format = function () {            
            if (arguments.length &lt;= 0) {
                return this;
            } else {
                var format = this;
                var args = arguments;

                var s = format.replace(/(?:[^{]|^|\b|)(?:{{)*(?:{(\d+)}){1}(?:}})*(?=[^}]|$|\b)/g, function (match, number) {
                    number = parseInt(number);

                    return typeof args[number] != &quot;undefined&quot; ? match.replace(/{\d+}/g, args[number]) : match;
                });

                return s.replace(/{{/g, &quot;{&quot;).replace(/}}/g, &quot;}&quot;);
            }
        };</pre>

<h2><font color="#9b00d3">Usage and QUnit tests:</font></h2>

<pre class="brush: javascript">                var format = &quot;{0}{1}{{2}}&quot;;
                var s = String.format(format, &quot;hello&quot;, &quot;world&quot;, &quot;nonsense&quot;);
                equal(s, &quot;helloworld{2}&quot;);
                s = format.format(&quot;hello&quot;, &quot;world&quot;, &quot;nonsense&quot;);
                equal(s, &quot;helloworld{2}&quot;);

                format = &quot;{0}{1}{{2}}&quot;;
                s = String.format(format, &quot;hello&quot;);
                equal(s, &quot;hello{1}{2}&quot;);
                s = format.format(&quot;hello&quot;);
                equal(s, &quot;hello{1}{2}&quot;);

                format = &quot;{0}{1}&quot;;
                s = String.format(format, &quot;hello&quot;, &quot;world&quot;);
                equal(s, &quot;helloworld&quot;);
                s = format.format(&quot;hello&quot;, &quot;world&quot;);
                equal(s, &quot;helloworld&quot;);

                format = &quot;{0}{1}&quot;;
                s = String.format(format, &quot;hello&quot;, &quot;world&quot;, &quot;i&quot;);
                equal(s, &quot;helloworld&quot;);
                s = format.format(&quot;hello&quot;, &quot;world&quot;, &quot;i&quot;);
                equal(s, &quot;helloworld&quot;);

                format = &quot;{{{0}}}&quot;;
                s = String.format(format, &quot;hello&quot;);
                equal(s, &quot;{hello}&quot;);
                s = format.format(&quot;hello&quot;);
                equal(s, &quot;{hello}&quot;);

                format = &quot;{{{{0}}}}&quot;;
                s = String.format(format, &quot;hello&quot;);
                equal(s, &quot;{{0}}&quot;);
                s = format.format(&quot;hello&quot;);
                equal(s, &quot;{{0}}&quot;);

                format = &quot;{{{{{0}}}}}&quot;;
                s = String.format(format, &quot;hello&quot;);
                equal(s, &quot;{{hello}}&quot;);
                s = format.format(&quot;hello&quot;);
                equal(s, &quot;{{hello}}&quot;);</pre>

<h2><font color="#9b00d3">Application Example:</font></h2>

<p>Write code like this:</p>

<pre class="brush: javascript">alert(String.format(&quot;Current Page Index: {0}, Total Pages: {1}&quot;, 10, 150));</pre>

<p>You can run it online immediately by clicking the <a title="Click here to run the testing code!" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=%20%20%20%20%20%20%20%20String.format%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(arguments.length%20%3C%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%22%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20format%20%3D%20arguments%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20args%20%3D%20arguments%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20s%20%3D%20format.replace(%2F(%3F%3A%5B%5E%7B%5D%7C%5E%7C%5Cb%7C)(%3F%3A%7B%7B)*(%3F%3A%7B(%5Cd%2B)%7D)%7B1%7D(%3F%3A%7D%7D)*(%3F%3D%5B%5E%7D%5D%7C%24%7C%5Cb)%2Fg%2C%20function%20(match%2C%20number)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20number%20%3D%20parseInt(number)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20typeof%20args%5Bnumber%20%2B%201%5D%20!%3D%20%22undefined%22%20%3F%20match.replace(%2F%7B%5Cd%2B%7D%2Fg%2C%20args%5Bnumber%20%2B%201%5D)%20%3A%20match%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20s.replace(%2F%7B%7B%2Fg%2C%20%22%7B%22).replace(%2F%7D%7D%2Fg%2C%20%22%7D%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%0A%20%20%20%20alert(String.format(%22Current%20Page%20Index%3A%20%7B0%7D%2C%20Total%20Pages%3A%20%7B1%7D%22%2C%2010%2C%20150))%3B" target="_blank">this link</a>.</p>