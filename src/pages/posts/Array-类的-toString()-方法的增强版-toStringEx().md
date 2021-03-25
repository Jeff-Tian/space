---
stackbit_url_path: >-
  posts/Array-类的-toString()-方法的增强版-toStringEx()
title: 'Array 类的 toString() 方法的增强版 toStringEx()'
date: '2009-12-08 15:52:43'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/12/08/Array-类的-toString()-方法的增强版-toStringEx()
template: post
---

        <div style="text-indent: 2em;">
<p>对于数组，我们将它作为字符串输出时，默认的toString()方法，仅将其元素用逗号（,）连接而组成字符串。然而作为数组，我们更希望看到每个元素的标号，并且以列的形式输出效果会更好。于是可以自定义一个toString()方法的增强版本。如下：</p>
<pre class="brush: javascript" style="text-indent: 0;">// Array类的增强型toString()方法
Array.prototype.toStringEx = function() {
    var s = '';
    for (var i = 0; i &lt; this.length; i++) {
        s += i + ': ' + this[i] + ';\n\r';
    }
    return s;
};

</pre>
<p>你现在就可以来<a href="http://www.myfootprints.cn/javascript/default.asp?s=%2F%2F%20Array%E7%B1%BB%E7%9A%84%E5%A2%9E%E5%BC%BA%E5%9E%8BtoString()%E6%96%B9%E6%B3%95%0D%0AArray.prototype.toStringEx%20%3D%20function()%20%7B%0D%0A%20%20%20%20var%20s%20%3D%20''%3B%0D%0A%20%20%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20this.length%3B%20i%2B%2B)%20%7B%0D%0A%20%20%20%20%20%20%20%20s%20%2B%3D%20i%20%2B%20'%3A%20'%20%2B%20this%5Bi%5D%20%2B%20'%3B%5Cn%5Cr'%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20return%20s%3B%0D%0A%7D%3B%0D%0A%0D%0Avar%20a%20%3D%20%5B'hello'%2C%20'world'%5D%3B%0D%0Aalert(a.toStringEx())%3B%0D%0A" target="_blank" title="点击这里直接运行">试一试它的效果</a>，即运行如下这段代码：</p>
<pre class="brush: javascript" style="text-indent: 0;">// Array类的增强型toString()方法
Array.prototype.toStringEx = function() {
    var s = '';
    for (var i = 0; i &lt; this.length; i++) {
        s += i + ': ' + this[i] + ';\n\r';
    }
    return s;
};

var a = ['hello', 'world'];
alert(a.toStringEx());
</pre>
</div>
      