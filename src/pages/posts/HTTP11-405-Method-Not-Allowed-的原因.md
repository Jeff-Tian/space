---
stackbit_url_path: >-
  posts/HTTP11-405-Method-Not-Allowed-的原因
title: 'HTTP/1.1 405 Method Not Allowed 的原因'
date: '2012-02-07 06:56:40.1320865'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 405
  - ajax
  - http
  - iis
canonical_url: >-
template: post
---
<h1><font color="#800080">一、问题：</font></h1>  <p>在XP系统的IIS 5.1上部署了一个站点，使用Ajax调用该站点的Web Service时碰到如下错误：</p>  <p>HTTP/1.1 405 Method Not Allowed。</p>  <p>以下是使用Firefox查看到的网络请求截图</p> <a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_437.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="HTTP/1.1 405 Method Not Allowed 的原因" border="0" alt="HTTP/1.1 405 Method Not Allowed 的原因" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_171.png" width="244" height="236" /></a>   <p></p>  <h1><font color="#800080">二、原因：</font></h1>  <p>从<a href="http://support.microsoft.com/kb/216493">http://support.microsoft.com/kb/216493</a>得知，这是IIS 5.1的一个周知Bug。: (</p>  <h1><font color="#800080">三、解决方案：</font></h1>  <p>以上链接中没有给出比较好的解决方案，只是说IIS 6已经修正了这个问题。</p>