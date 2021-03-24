---
stackbit_url_path: >-
  posts/验证-URL-的正则表达式
title: '验证 URL 的正则表达式'
date: '2010-03-05 09:40:06'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>我曾自己写过一个验证 URL 的正则表达式（<a href="http://www.myfootprints.cn/blog/post/regularExpression_Url.html">http://www.myfootprints.cn/blog/post/regularExpression_Url.html</a>），但是今天在学习 .NET 的过程中，发现，.NET 框架中的 RegularExpressionValidator 中有一些写好的正则表达式，用来验证 URL、Email 等。现在把它摘录出来。</p>
<p>URL：</p>
<div style="text-indent: 0;">
<pre class="brush: javascript" style="text-indent: 0;"> 
var s = "http://www.myfootprints.cn";
var re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&amp;=]*)?/;
alert(re.test(s));
</pre>
<p><a target="_blank" title="点击这里运行" href="http://www.myfootprints.cn/javascript/default.asp?s=var%20s%20%3D%20%22http%3A%2F%2Fwww.myfootprints.cn%22%3B%0Avar%20re%20%3D%20%2Fhttp(s)%3F%3A%5C%2F%5C%2F(%5B%5Cw-%5D%2B%5C.)%2B%5B%5Cw-%5D%2B(%5C%2F%5B%5Cw-%20.%5C%2F%3F%25%26%3D%5D*)%3F%2F%3B%0Aalert(re.test(s))%3B">点击这里运行</a></p>
</div>
<p>Email：</p>
<div style="text-indent: 0;">
<pre class="brush: javascript" style="text-indent: 0;">/* 验证是否是有效的 Email 地址格式 */
var reEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
var sEmail = 'admin@myfootprints.cn';
var sValid = reEmail.test(sEmail) ? '正确' : '不正确';
alert(sEmail + ' 是一个 ' + sValid + ' 的Email地址格式。');
</pre>
<p><a target="_blank" title="点击这里运行" href="http://www.myfootprints.cn/javascript/default.asp?s=%2F*%20%E7%A4%BA%E4%BE%8B%20*%2F%0A%2F*%20%E9%AA%8C%E8%AF%81%E6%98%AF%E5%90%A6%E6%98%AF%E6%9C%89%E6%95%88%E7%9A%84%20Email%20%E5%9C%B0%E5%9D%80%E6%A0%BC%E5%BC%8F%20*%2F%0Avar%20reEmail%20%3D%20%2F%5Cw%2B(%5B-%2B.'%5D%5Cw%2B)*%40%5Cw%2B(%5B-.%5D%5Cw%2B)*%5C.%5Cw%2B(%5B-.%5D%5Cw%2B)*%2F%3B%0Avar%20sEmail%20%3D%20'admin%40myfootprints.cn'%3B%0Avar%20sValid%20%3D%20reEmail.test(sEmail)%20%3F%20'%E6%AD%A3%E7%A1%AE'%20%3A%20'%E4%B8%8D%E6%AD%A3%E7%A1%AE'%3B%0Aalert(sEmail%20%2B%20'%20%E6%98%AF%E4%B8%80%E4%B8%AA%20'%20%2B%20sValid%20%2B%20'%20%E7%9A%84Email%E5%9C%B0%E5%9D%80%E6%A0%BC%E5%BC%8F%E3%80%82')%3B">点击这里运行</a></p>
</div>
</div>
      