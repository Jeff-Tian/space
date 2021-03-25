---
stackbit_url_path: >-
  posts/以禁用网页安全模式启动Google-Chrome
title: '以禁用网页安全模式启动Google Chrome'
date: '2011-11-01 02:40:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - BAT
  - Chrome
  - Google
  - javascript
  - 批处理文件
  - 网页安全
  - 跨域攻击
canonical_url: https://be-net.azurewebsites.net/post/2011/11/01/以禁用网页安全模式启动Google-Chrome
template: post
---
<h1><span style="color: #9b00d3;">一、问题</span></h1>
<p>为了防止跨站点脚本攻击以及其他安全隐患，一般浏览器会检查脚本所在的域，如果试图使用一个站点的脚本去操纵其他站点的页面元素，则会阻止脚本运行，并报错。</p>
<p>比如，你建立了一个站点，在这个站点网页中放入一个Iframe，并在此Iframe中加载一个其他网站，比如<a href="http://www.baidu.com">www.baidu.com</a>，然后，你在自己的网页中，使用JavaScript试图去在百度页面上添加一个自己的链接，就会碰到这种安全错误。</p>
<h1><span style="color: #9b00d3;">二、解决方案</span></h1>
<p>这个问题是设计者出于安全隐患设计的，所以基本上是没有解决方案的。</p>
<p>但是，</p>
<p>仍然有两个不是解决方案的解决方案。</p>
<blockquote>
<p>1. 自己写个代理程序，截获目标的Http响应，然后对其中的Html作修改，注入自己的代码。这样做，只需把浏览器的代理设置修改为自己的代理程序，就一劳永逸了，用什么浏览器浏览都能达到效果。</p>
<p>但是，这个代理程序开发起来需要一点点时间，篇幅也会比较长。本篇文章略过。</p>
<p>2. 这个解决方案比较简单，不需要另外再开发程序。那就是，禁用浏览器的网页安全功能。凡事有利有弊，这个虽然快捷，可惜的是，不同浏览器有不同的禁用方式。</p>
<p>本篇文章只针对Google Chrome浏览器作这个介绍。</p>
<p>通过cmd界面，启动Chrome.exe 时，添加一个参数 &ndash;disable-web-security，即可以禁用网页安全模式启动Chrome.exe。</p>
<p>如果你的Chrome.exe程序位于这个文件夹：C:\Users\***\AppData\Local\Google\Chrome\Application，则可以写个BAT批处理文件，放在桌面，这样，就可以双击启动了，省事儿。</p>
<p>BAT文件源码如下：</p>
<pre class="brush: javascript">CD C:\Users\***\AppData\Local\Google\Chrome\Application
chrome.exe --disable-web-security
exit</pre>
</blockquote>
<h1><span style="color: #9b00d3;">三、相关文件下载</span></h1>
<p><a href="/blog/file.axd?file=2011%2f11%2fChrome.bat">Chrome.bat (96.00 bytes)</a></p>