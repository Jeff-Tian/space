---
stackbit_url_path: >-
  posts/清除JavaScript-数组的所有元素
title: '清除JavaScript 数组的所有元素'
date: '2011-08-23 06:55:29.8807301'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - array
  - clear
  - javascript
  - splice
  - 数组
  - 清除
canonical_url: >-
template: post
---
<p>如何清除JavaScript数组中的所有元素呢？</p>  <p>使用Array类的splice()方法：</p>  <p>代码示例：</p>  <pre class="brush: javascript">var a = [1, 3, 3, 4, 5, 6];
alert(a.toString());

a.splice(0, a.length);
alert(a.toString());</pre>

<p><a title="点击这里运行" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=var%20a%20%3D%20%5B1%2C%203%2C%203%2C%204%2C%205%2C%206%5D%3B%0Aalert(a.toString())%3B%0A%0Aa.splice(0%2C%20a.length)%3B%0Aalert(a.toString())%3B" target="_blank">点击这里运行</a></p>