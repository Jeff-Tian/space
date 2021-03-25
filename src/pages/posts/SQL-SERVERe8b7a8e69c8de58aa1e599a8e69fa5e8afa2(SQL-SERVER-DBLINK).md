---
stackbit_url_path: >-
  posts/SQL-SERVERe8b7a8e69c8de58aa1e599a8e69fa5e8afa2(SQL-SERVER-DBLINK)
title: 'SQL SERVER跨服务器查询(SQL SERVER DBLINK)'
date: '2011-03-02 05:54:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2011/03/02/SQL-SERVERe8b7a8e69c8de58aa1e599a8e69fa5e8afa2(SQL-SERVER-DBLINK)
template: post
---
<p>连接远程服务器进行数据查询时可以这么做：select * from [**.**.**.**].test.dbo.t1 </p>  <p>   <br />不过，不出意外的话会报错：在 sysservers 中未能找到服务器 '**.*.**.**'。请执行 sp_addlinkedserver 以将服务器添加到 sysservers。     <br /></p>  <p>添加sysservers：exec&#160;&#160; sp_addlinkedserver&#160;&#160;&#160;&#160; 'srv_lnk','','SQLOLEDB','**.*.**.**' </p>  <p>   <br />再查询：select * from srv_lnk.test.dbo.t1 （因为定义了“别名”，所以这儿“别名”） </p>  <p>   <br />除非两个服务器上的该用户的密码一样，否则会报：用户 '**' 登录失败。 </p>  <p>   <br />指定登录用户：exec&#160;&#160; sp_addlinkedsrvlogin&#160;&#160; 'srv_lnk','false',null,'rUser','rPwd'&#160; </p>  <p>   <br />再查询：select * from srv_lnk.test.dbo.t1，如果无意外的话就应该是成功的 </p>  <p>   <br />sp_addlinkedserver </p>  <p>   <br />创建一个链接的服务器，使其允许对分布式的、针对 OLE DB 数据源的异类查询进行访问。在使用 sp_addlinkedserver 创建链接的服务器之后，此服务器就可以执行分布式查询。如果链接服务器定义为 Microsoft® SQL Server™，则可执行远程存储过程。 </p>  <p>   <br />Exec sp_droplinkedsrvlogin server,Null </p>  <p>   <br />Exec sp_dropserver server </p>  <p>   <br />EXEC sp_addlinkedserver </p>  <p>   <br />@server= 'server ',--被访问的服务器别名 </p>  <p>   <br />@srvproduct= ' ', </p>  <p>   <br />@provider= 'SQLOLEDB ', </p>  <p>   <br />@datasrc= '10.23.11.28,3342 ' --要访问的服务器 </p>  <p>   <br />EXEC sp_addlinkedsrvlogin </p>  <p>   <br />'server ', --被访问的服务器别名 </p>  <p>   <br />'false ', </p>  <p>   <br />NULL, </p>  <p>   <br />'la0001 ', --帐号 </p>  <p>   <br />'aaaaaa ' --密码</p>