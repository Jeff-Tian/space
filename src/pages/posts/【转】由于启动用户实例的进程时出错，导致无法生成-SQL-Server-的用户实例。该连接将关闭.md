---
stackbit_url_path: >-
  posts/【转】由于启动用户实例的进程时出错，导致无法生成-SQL-Server-的用户实例。该连接将关闭
title: '【转】由于启动用户实例的进程时出错，导致无法生成 SQL Server 的用户实例。该连接将关闭'
date: '2010-03-18 04:19:14'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/18/【转】由于启动用户实例的进程时出错，导致无法生成-SQL-Server-的用户实例。该连接将关闭
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>转载一篇超经典文章，如果你碰到过此问题并且为此大费周折也不能解决此问题的话，你看了这篇文章会吐血的。</p>
<hr>
<p><span class="Apple-style-span" style="font-family: verdana, sans-serif; line-height: 21px; ">由于启动用户实例的进程时出错，导致无法生成 SQL Server 的用户实例。该连接将关闭。其英文版本的相同问题的错误信息是：“Failed to generate a user instance of SQL Server due to a failure in starting the process for the user instance. The connection will be closed.”<br>
这是微软的bug，并且微软已经承认，详情如下：<a href="http://support.microsoft.com/?id=896613" style="text-decoration: none; color: rgb(51, 102, 1); "><font color="#22148d">http://support.microsoft.com/?id=896613</font></a><br>
出现此错误的条件是：你用过远程桌面连接，并且安装了SQL2005+VS2005，就有很大可能触发这个问题，微软说会在将来的XP SP3里面解决掉这个问题，要想立即解决这个问题，需要交费<br>
不用理会SB MS，咱们自有土办法来解决，请看如下文章：<a href="http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=128707&amp;SiteID=1" style="text-decoration: none; color: rgb(0, 107, 173); "><font color="#22148d">http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=128707&amp;SiteID=1</font></a><br>
如果你看不懂英文，那么我告诉你我的解决办法：删除C:\Documents and Settings\[USERNAME]\Local Settings\Application Data\Microsoft\Microsoft SQL Server Data\SQLEXPRESS目录即可，[USERNAME]是Windows用户名，比如说Administrator</span></p>
</div>
      