---
stackbit_url_path: >-
  posts/解决ASPNET中的-Unable-to-connect-to-SQL-Server-database问题
title: '解决ASP.NET中的 Unable to connect to SQL Server database.问题'
date: '2010-05-12 06:44:41'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/05/12/解决ASPNET中的-Unable-to-connect-to-SQL-Server-database问题
template: post
---

        <p>今天，使用ASP.NET创建一个用户管理系统时，拖入一个Login控件，在浏览器中不能正常进行登录操作，而是出现了 Unable to connect to SQL Server database. 错误。</p>
<p>问题分析：Membership是必须放在SQL数据库中的，所以如果SQL数据库中没有这个数据库，就不能正常进行用户登录操作。</p>
<p>问题解决方法：</p>
<ol>
    <li>创建aspnetdb数据库：运行   aspnet_regsql.exe （路径：C:\WINDOWS\Microsoft.NET\Framework\v2.0.50727\aspnet_regsql.exe）   来安装membership所要建立的数据库。</li>
    <li>配置Web.config配置文件：这里可以是机器的（C:\WINDOWS\Microsoft.NET\Framework\v2.0.50727\CONFIG\web.config）也可以是自己创建的网站的，我的做法是修改自己网站的，毕意我现在的控制力不强，修改自己网站的可以保证不出大问题。
    <p>要注意&lt;connectionstrings&gt; &nbsp; ... &nbsp; &lt;/connectionstrings&gt;这个节点。</p>
    <pre class="brush: xml">&lt;connectionStrings&gt;
  &lt;!--关键是下面这两个，"remove"表于从连接字符串集合中移除对继承的连接字符串的引用。
"add"则是'ASPNETDB'数据库的连接字符串，注意如果是SQLExpress数据库则Data Source＝（local)\SQLExpress
  --&gt;
  &lt;remove   name="LocalSqlServer"   /&gt;
  &lt;add   name="LocalSqlServer"   connectionString="Data   Source=localhost;Initial   Catalog=aspnetdb;Integrated   Security=True" providerName="System.Data.SqlClient"   /&gt;
&lt;/connectionStrings&gt;
</pre>
    </li>
    <li>重新运行网站，就发现，问题已经成功解决！<img alt="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_184.png"></li>
</ol>
<p>&nbsp;</p>
      