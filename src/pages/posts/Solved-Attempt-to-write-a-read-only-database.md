---
stackbit_url_path: >-
  posts/Solved-Attempt-to-write-a-read-only-database
title: 'Solved: Attempt to write a read-only database'
date: '2013-06-27 18:09:01.7914286'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - BlogEngine.NET
  - SQLite
  - iis
  - iisreset
canonical_url: >-
template: post
---
<h2><font color="#9b00d3">Problem:</font></h2>  <p>Hosted a BlogEngine.NET on Windows Server 2008 [R2] / Windows 8 IIS server (7.5 or higher), and used SQLite as Blog’s database. When navigate to the blog, an error clames “Attempt to write a read-only database”.</p>  <p><a href="http://zizhujy.com/blog/image.axd?picture=image_624.png"><img title="Attempt to write a read-only database" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="Attempt to write a read-only database" src="http://zizhujy.com/blog/image.axd?picture=image_thumb_313.png" width="653" height="361" /></a></p>  <h2><font color="#9b00d3">Solution:</font></h2>  <p>1. Make sure the account IIS_IUSRS has the permission to modify the database file (usually the database file is under ~/App_Data and its named called BlogEngine.s3db). </p>  <p><a href="http://zizhujy.com/blog/image.axd?picture=image_625.png"><img title="Solved: Attempt to write a read-only database" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="Solved: Attempt to write a read-only database" src="http://zizhujy.com/blog/image.axd?picture=image_thumb_314.png" width="505" height="568" /></a></p>  <p>2. Do the same for the containing folder of that database file (~/App_Data).</p>  <p>3. Make sure the “Application pool identity” is checked in the Anonymous user identity panel of your web site. To check that setting, press Win + Run, type “inetmgr” and hit Enter key, in the Internet Information Services (IIS) Manager, choose your web site, click “Authentication” icon, then the following panel appears.</p>  <p><a href="http://zizhujy.com/blog/image.axd?picture=image_626.png"><img title="Solved: Attempt to write a read-only database" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="Solved: Attempt to write a read-only database" src="http://zizhujy.com/blog/image.axd?picture=image_thumb_315.png" width="627" height="345" /></a></p>  <p>4. Restart your web site or just press Win + Run, type “iisreset” and hit Enter key.</p>  <p>5. Revisit the blog, the error should be gone.</p>