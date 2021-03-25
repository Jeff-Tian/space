---
stackbit_url_path: >-
  posts/Upgrade-BlogEngineNET-from-25-to-26
title: 'Upgrade BlogEngine.NET from 2.5 to 2.6'
date: '2012-02-15 06:46:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - BlogEngine.NET
  - upgrade
  - view count
canonical_url: https://be-net.azurewebsites.net/post/2012/02/15/Upgrade-BlogEngineNET-from-25-to-26
template: post
---
<p>If you are running BlogEngine.NET 2.5, and you want to add post view count statistics feature to your webblog, then I recommend you apply this update to your blog installation.</p>
<h1><span style="color: #800080;">New feature: </span><span style="color: #ff0000;">Post view count stats</span></h1>
<p><strong>Front end screenshot:</strong></p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_463.png"><img style="display: inline; border-width: 0px;" title="Update BlogEngine.NET from 2.5 to 2.6" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_193.png" alt="Update BlogEngine.NET from 2.5 to 2.6" width="529" height="413" border="0" /></a>&nbsp;</p>
<p><em>Remark</em>: You can set the view count number appear next to the total number of comments.</p>
<p><strong>Admin screenshot:</strong></p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_464.png"><img style="display: inline; border-width: 0px;" title="Update BlogEngine.NET from 2.5 to 2.6" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_194.png" alt="Update BlogEngine.NET from 2.5 to 2.6" width="536" height="277" border="0" /></a></p>
<p><em>Remark</em>: Via the extension manager, you can exclude the authenticated users as well as the specified IPs from accumulating the view count for a post.</p>
<h1><span style="color: #800080;">Changed file list:</span></h1>
<pre>~\DotNetSlave.BusinessLogic\Post.cs
~\DotNetSlave.BusinessLogic\Providers\DbBlogProvider.cs
~\DotNetSlave.BusinessLogic\Providers\XmlProvider\Posts.cs
~\BlogEngine.NET\App_Code\Extensions\PostViewed.cs
~\BlogEngine.NET\themes\Standard\PostView.ascx
~\BlogEngine.NET\setup\SQLite\SQLiteUpgradeFrom2.5To2.6.txt
~\BlogEngine.NET\setup\SQL_CE\SQL_CE_UpgradeFrom2.5to2.6.sql
~\BlogEngine.NET\setup\MySQL\MySQLUpgradeFrom2.5To2.6.sql
~\BlogEngine.NET\setup\SQLServer\MSSQLUpgradeFrom2.5to2.6.sql</pre>
<h1><span style="color: #800080;">Upgrade steps:</span></h1>
<ol>
<li>Always important! Backup your original blog;</li>
<li>Download the upgrade zip file, and unzip it;</li>
<li>Copy those files listed above in the unzipped folder to the corresponding folders of your blog installation place. For those files had already existed, replace them;</li>
<li>Execute the repective sql statements if you are using a database. For example, if you are using SQLite for your blog, then execute the sql statements in the SQLiteUpgradeFrom2.5To2.6 txt. If you are not using a database (i.e. you are using xml as data storage for your blog), then you don&rsquo;t need this step.</li>
<li>Done.</li>
</ol>
<p><em>Reminder</em>: If you upgraded at the local machine, and then upload it to the remote server, remember upload the files under <em>bin</em> folder as well as other files. The safe way is uploading all files.</p>
<h1><span style="color: #800080;">Download:</span></h1>
<p><a href="/blog/file.axd?file=2012%2f2%2fBE2.5To2.6.zip">BE2.5To2.6.zip (321.98 kb)</a></p>