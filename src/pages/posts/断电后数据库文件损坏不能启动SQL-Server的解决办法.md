---
stackbit_url_path: >-
  posts/断电后数据库文件损坏不能启动SQL-Server的解决办法
title: '断电后数据库文件损坏不能启动SQL Server的解决办法'
date: '2011-10-26 08:19:51.700087'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - SQL Server
  - model
  - 文件损坏
  - 断电
canonical_url: https://be-net.azurewebsites.net/post/2011/10/26/断电后数据库文件损坏不能启动SQL-Server的解决办法
template: post
---
<h1><font style="font-weight: bold" color="#9b00d3">一、问题</font></h1>  <p>北京诺基亚库房2011-10-25晚断电，第二天上班恢复电力后，发现系统登录不上。经排查，是由于SQL Server服务没有启动。在手动启动时，碰到错误不能成功启动。查看系统事件日志，得到如下信息：</p>  <p>SQL&#160;&#160; Server&#160;&#160; (MSSQLSERVER)&#160;&#160; 服务因&#160;&#160; 3414&#160;&#160; (0xD56)&#160;&#160; 服务性错误而停止。    <br />有关更多信息，请参阅在&#160;&#160; http://go.microsoft.com/fwlink/events.asp&#160;&#160; 的帮助和支持中心。</p>  <h1><font color="#9b00d3"><font style="font-weight: bold">二、原因</font></font></h1>  <p>这次事故是由于断电导致数据库文件model.mdf与modellog.ldf被损坏，所以不能成功启动数据库。</p>  <h1><font color="#9b00d3"><font style="font-weight: bold">三、解决方案</font></font></h1>  <p>用安装包中的原始文件覆盖被损坏的文件即可，具体来说，以32位机器为例，是将安装包中的</p>  <pre class="brush: html">~\x86\setup\sql_engine_core_inst_msi\pfiles\sqlserver\mssol.x\mssql\binn\template\</pre>

<p>目录下的model.mdf与modellog.ldf文件覆盖掉SQL Server数据库需要使用的对应的那两个被损坏的文件。</p>

<p>然后即可再次重新启动 SQL Server 服务，成功！</p>

<p>&#160;</p>

<blockquote>
  <p><em>如果除了model，还有其他数据库文件损坏，如master等，也是如上方法，将那个目录下的master数据库文件覆盖掉被损坏的文件。</em></p>
</blockquote>

<p>&#160;</p>

<p>[donate: <a href="http://www.zizhujy.com">www.zizhujy.com</a>]</p>