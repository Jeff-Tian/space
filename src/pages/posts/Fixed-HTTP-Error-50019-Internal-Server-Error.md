---
stackbit_url_path: >-
  posts/Fixed-HTTP-Error-50019-Internal-Server-Error
title: 'Fixed: HTTP Error 500.19 - Internal Server Error'
date: '2013-07-04 00:32:27.6057572'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - IIS
  - Internal Server Error
  - hosting
canonical_url: https://be-net.azurewebsites.net/post/2013/07/04/Fixed-HTTP-Error-50019-Internal-Server-Error
template: post
---
<h2><font color="#9b00d3">Problem:</font></h2>  <p>After deployed a website on localhost, when visit the web, the following error occurred:</p>  <p>___________________________________________________________________________________</p>  <p><strong>Error Summary</strong></p>  <h4><font color="#ff0000">HTTP Error 500.19 - Internal Server Error</font></h4>  <h5><font color="#ff0000">The requested page cannot be accessed because the related configuration data for the page is invalid.</font></h5>  <p><strong>Detailed Error Information</strong></p>  <p><strong>Module</strong>    <br />IIS Web Core</p>  <p><strong>Notification</strong>    <br />BeginRequest</p>  <p><strong>Handler</strong>    <br />Not yet determined</p>  <p><strong>Error Code     <br /></strong>0x80070021</p>  <p><strong>Config Error     <br /></strong>This configuration section cannot be used at this path. This happens when the section is locked at a parent level. Locking is either by default (overrideModeDefault=&quot;Deny&quot;), or set explicitly by a location tag with overrideMode=&quot;Deny&quot; or the legacy allowOverride=&quot;false&quot;.</p>  <p><strong>Config File     <br /></strong>\\?\D:\CAT\CAT.WebApi\web.config</p>  <p><strong>Requested URL     <br /></strong>http://localhost:80/CatService/CatService.svc</p>  <p><strong>Physical Path     <br /></strong>D:\CAT\CAT.WebApi\CatService.svc</p>  <p><strong>Logon Method     <br /></strong>Not yet determined</p>  <p><strong>Logon User     <br /></strong>Not yet determined</p>  <p><strong>Config Source</strong></p>  <pre><code>   69:   &lt;system.webServer&gt;
<font color="#ff0000">   70:     &lt;modules runAllManagedModulesForAllRequests=&quot;true&quot;/&gt;</font>
   71:     &lt;!--
</code></pre>

<h2><font color="#9b00d3">Screen shot:</font></h2>

<pre><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_630.png"><img title="HTTP Error 500.19 - Internal Server Error" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="HTTP Error 500.19 - Internal Server Error" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_318.png" width="652" height="358" /></a></pre>

<h2><font color="#9b00d3">Solution:</font></h2>

<p>1. Open control panel, go to “Programs and Features”;</p>

<p>2. Click “Turn Windows features on or off”;</p>

<p>3. On the “Turn Windows features on or off” panel, expand “Internet Information Services”, “World Wide Web Services”, “Application Development Features” in sequence.</p>

<p>4. Check the “ASP.NET” option, the other 3 options “.NET Extensibility”, “ISAPI Extensions”, “ISAPI Filters” would be automatically checked.<a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_631.png"><img title="Fixed: HTTP Error 500.19 - Internal Server Error" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="Fixed: HTTP Error 500.19 - Internal Server Error" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_319.png" width="660" height="409" /></a></p>

<p>5. Click OK, and then revisit the web page, the error is gone.</p>