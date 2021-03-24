---
stackbit_url_path: >-
  posts/自定义-String-对象的trim()方法
title: '自定义 String 对象的trim()方法'
date: '2009-11-26 07:52:02'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>在对字符串的处理中，去掉有效字符两边的空白字符是一个经常性的需求。于是很多语言中都有专门做这件事的字符串处理函数trim()，如在VB中，你可以使用 Trim(“ 涂鸦 ") 得到 “涂鸦"。</p>
<p>在 JavaScript 中，String 对象有着非常丰富方法用于对字符串进行处理，但偏偏没有这个经常需要使用的 trim()。比如，下面这段代码，在某些浏览器（如 IE）中就不能运行，虽然在有些浏览器（如 Google Chrome）中它是可以使用的。</p>
<pre class="brush: javascript" style="text-indent: 0;">var s = "涂鸦 ";
var s2 = "博客";
alert(s.trim() + s2);
</pre>
<p><a href="http://www.myfootprints.cn/javascript/default.asp?s=var%20s%20%3D%20%22%E6%B6%82%E9%B8%A6%20%22%3B%0Avar%20s2%20%3D%20%22%E5%8D%9A%E5%AE%A2%22%3B%0Aalert(s.trim()%20%2B%20s2)%3B" title="涂鸦 JavaScript 练兵场" target="_blank">点击这里运行它试试看</a></p>
<p>因此，有必要给String对象自定义一个去掉两边空白字符的方法，使得在所有的浏览器中都可以放心地使用它。</p>
<p>使用正则表达式，使得建立字符串的trim()方法非常方便。</p>
<p>首先建立如下的正则表达式，来匹配这样的字符串，它以零个或多个空白字符开头，跟着是任意数目的字符，最后在字符串结尾处又是零个或多个空白。</p>
<pre class="brush: javascript" style="text-indent: 0;">var reExtraSpace = /^\s*(.*?)\s*$/;
</pre>
<p>然后，通过配合使用String对象的replace()方法以及正则表达式的反向引用，就可以定义自己的trim()方法。</p>
<pre class="brush: javascript" style="text-indent: 0;">String.prototype.trim = function() {
    var reExtraSpace = /^\s*(.*?)\s*$/;
    return this.replace(reExtraSpace, "$1");
};
</pre>
<p>你可以将以上代码加到之前的代码的前面，在不能运行之前代码的浏览器（如 IE）中，再次尝试运行，你会发现一切正如期望的那样了。</p>
<pre class="brush: javascript" style="text-indent: 0;">String.prototype.trim = function() {
    var reExtraSpace = /^\s*(.*?)\s*$/;
    return this.replace(reExtraSpace, "$1");
};
var s = "涂鸦 ";
var s2 = "博客";
alert(s.trim() + s2);
</pre>
<p><a href="http://www.myfootprints.cn/javascript/default.asp?s=String.prototype.trim%20%3D%20function()%20%7B%0A%20%20%20%20var%20reExtraSpace%20%3D%20%2F%5E%5Cs*(.*%3F)%5Cs*%24%2F%3B%0A%20%20%20%20return%20this.replace(reExtraSpace%2C%20%22%241%22)%3B%0A%7D%3B%0Avar%20s%20%3D%20%22%E6%B6%82%E9%B8%A6%20%22%3B%0Avar%20s2%20%3D%20%22%E5%8D%9A%E5%AE%A2%22%3B%0Aalert(s.trim()%20%2B%20s2)%3B" title="涂鸦 JavaScript 练兵场" target="_blank">点击这时运行它</a></p>
<p>最后再做一些解释，如果你熟悉正则表达式的话就不用看了。\s用来匹配空白字符，相当于[ \t\n\x0B\f\r]，*代表可以出现0次或多次，.用来匹配除了换行和回车之外的任意字符，即[^\n\r]，*?也如同*一样，代表可以出现0次或多次，但是*是贪婪量词，*?是惰性量词。()表示分组，$1表示反向引用，即引用第一个分组，也就是()里的匹配的内容。</p>
<p>贪婪和惰性的意思是什么呢？</p>
<p><strong>贪婪量词</strong>先看整个字符串是否匹配。如果没有发现匹配，它去掉该字符串中的最后一个字符，并再次尝试。如果还是没有发现匹配，那么再次去掉最后一个字符，这个过程会一直重复直到发现一个匹配或者字符串不剩任何字符。</p>
<p><strong>惰性量词</strong>先看字符串中的第一个字母是否匹配。如果单独这一个字符还不够，就读入下一个字符，组成两个字符的字符串。如果还是没有发现匹配，惰性量词继续从字符串中添加字符直到发现匹配或者整个字符串都检查过也没有匹配。惰性量词与贪婪量词的工作方式恰好相反。</p>
<p>除了以上两种量词，还有一个量词叫<strong>支配量词</strong>，它只尝试匹配整个字符串。如果整个字符串不能产生匹配，不做进一步尝试。支配量词其实简单地说，就是一刀切。</p>
</div>
      