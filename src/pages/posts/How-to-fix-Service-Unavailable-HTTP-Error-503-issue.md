---
stackbit_url_path: >-
  posts/How-to-fix-Service-Unavailable-HTTP-Error-503-issue
title: 'How to fix “Service Unavailable: HTTP Error 503” issue'
date: '2012-06-10 19:42:00.0042639'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 503
  - IIS
canonical_url: https://be-net.azurewebsites.net/post/2012/06/10/How-to-fix-Service-Unavailable-HTTP-Error-503-issue
template: post
---
<h2><font style="font-weight: bold" color="#9b00d3">Problem:</font></h2>  <p>I deployed a web site to my local IIS, and then I got this error when I tried to visit it:</p>  <h3>Service Unavailable</h3>  <p>   <hr />HTTP Error 503. The service is unavailable.</p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_580.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_279.png" width="677" height="167" /></a></p>  <h2><font style="font-weight: bold" color="#9b00d3">Solution:</font></h2>  <p>There are many complicated steps described in the google search results. But the worked solution for me is this simple one:</p>  <ol>   <li>Open the Internet Information Services (IIS) Manager</li>    <li>Select the Application Pools node under the root node in the left hand side frame</li>    <li>Right click on the DefaultAppPool. If the service is stopped, start it. If the service is running, restart it.</li>    <li>Issue resolved.</li> </ol>  <p>Thank <a href="http://forums.iis.net/t/1183179.aspx" target="_blank">Richie</a> for providing this solution. </p>  <h2><font color="#9b00d3"><font style="font-weight: bold">Discussion:</font></font></h2>  <p>To improve the computer performance, I made the application pools not to start automatically, so this issue occurs.</p>