---
stackbit_url_path: >-
  posts/笔记：Windows-7-64-位系统下未能加载文件或程序集“SystemDataSQLite”的解决办法
title: '笔记：Windows 7 64 位系统下未能加载文件或程序集“System.Data.SQLite”的解决办法'
date: '2011-09-01 06:10:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 64 位
  - SQLite
  - Windows 7
canonical_url: https://be-net.azurewebsites.net/post/2011/09/01/笔记：Windows-7-64-位系统下未能加载文件或程序集“SystemDataSQLite”的解决办法
template: post
---
<h1><strong><span style="color: #800080;">一、问题</span></strong></h1>
<p>今天将自己的BlogEngine.NET博客下载到了Windows 7 64位系统里，这个博客使用SQLite数据库作为数据存储。结果在Windows 7 64位系统里运行这个博客的时候，出现如下错误：</p>
<p>未能加载文件或程序集&rdquo;System.Data.SQLite&rdquo;，或者格式错误等云云。</p>
<h1><span style="color: #800080;"><strong>二、解决方案</strong></span></h1>
<p>上<a href="http://sourceforge.net/projects/sqlite-dotnet2/files/">http://sourceforge.net/projects/sqlite-dotnet2/files/</a>下载了<a href="/blog/file.axd?file=2011%2f9%2fSQLite-1.0.66.0-setup.exe">SqLite的安装文件</a>，安装后将C:\Program Files (x86)\SQLite.NET\bin\<a href="/blog/file.axd?file=2011%2f9%2fSystem.Data.SQLite.DLL">x64目录下的System.Data.SQLite.DLL</a>文件覆盖了BlogEngine中<a href="/blog/file.axd?file=2011%2f9%2fSystem.Data.SQLite.dll">原来的System.Data.SQLite.DLL</a>文件。然后博客就可以正常运行了。</p>
<h1><span style="color: #800080;"><strong>三、相关文件下载</strong></span></h1>
<p><span style="color: #800080;"><span style="color: #000000;">SqLite 安装文件：</span>&nbsp;<a href="/blog/file.axd?file=2011%2f9%2fSQLite-1.0.66.0-setup.exe">SQLite-1.0.66.0-setup.exe (3.03 mb)</a></span>&nbsp;</p>
<h1><span style="color: #800080;"><span style="color: #000000; font-size: 12px; font-weight: normal;">适合于64位系统的DLL文件： </span><a style="font-size: 12px; font-weight: normal;" href="/blog/file.axd?file=2011%2f9%2fSystem.Data.SQLite.DLL">System.Data.SQLite.DLL (1.05 mb)</a></span></h1>
<h1><span style="color: #800080;"><span style="color: #000000; font-size: 12px; font-weight: normal;">适合于32位系统的DLL文件：&nbsp;</span></span><a style="font-size: 12px; font-weight: normal;" href="/blog/file.axd?file=2011%2f9%2fSystem.Data.SQLite.dll">System.Data.SQLite.dll (883.50 kb)</a></h1>
<h1><span style="color: #800080;"><strong>四、资料来源</strong></span></h1>
<p><a href="http://www.cnblogs.com/downcom/archive/2009/11/20/1590120.html">http://www.cnblogs.com/downcom/archive/2009/11/20/1590120.html</a></p>
<p>[donate:www.zizhujy.com]</p>