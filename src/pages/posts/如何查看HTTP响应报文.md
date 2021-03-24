---
stackbit_url_path: >-
  posts/如何查看HTTP响应报文
title: '如何查看HTTP响应报文'
date: '2009-11-18 11:45:11'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---
<div style="text-indent: 2em;"><p>查看HTTP响应报文非常容易做到，首先用Telnet工具登录到Web服务器上，接下来输入一个只有一行的请求报文去请求该服务器上的某些对象。如在命令行提示下输入：</p><p>telnet www.myfootprints.cn 80</p><p>&nbsp;</p><p>GET /HTTP.asp HTTP/1.1</p><p>Host: www.myfootprints.cn</p><p>&nbsp;</p><p>(注意：在有些时候，你输入的字符不会回显，即你输入GET /HTTP.asp HTTP/1.1 时，你会看不见你输入的内容，但它们的确输入了。正因为你看不见，所以输入的时候需要小心，并且区分大小写。在最后输入结束后，需要连续两次回车。)</p><p>这会打开一个到主机www.myfootprints.cn的80端口的TCP连接，并发送一个HTTP请求报文。你将会看到一个携带基本HTML文件的响应报文。如下图：</p><p><img onload="ResizeImage(this,520)" alt="" title="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_407.png"></p><p>如果你只是想看一下HTTP协议的报文行，而不是获取对象本身，那么可以用HEAD代替GET。</p><p>如果你想看请求的对象从指定的日期起有没有被修改过，可以使用条件GET。比如以下命令查看www.myfootprints.cn网站的index.asp页面从2009-12-5起是否被修改过。</p><p>telnet www.myfootprints.cn 80</p><p>&nbsp;</p><p>GET /index.asp HTTP/1.1</p><p>Host: www.myfootprints.cn</p><p>If-modified-since: 2009-12-5</p><p>如果返回的状态码是304，则说明没有被修改过。</p></div>