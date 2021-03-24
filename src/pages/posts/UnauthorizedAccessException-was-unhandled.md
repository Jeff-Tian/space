---
stackbit_url_path: >-
  posts/UnauthorizedAccessException-was-unhandled
title: 'UnauthorizedAccessException was unhandled'
date: '2012-03-22 19:31:44.9545751'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - TFS
  - Team Foundation Server
canonical_url: >-
template: post
---
<p>Today when I coded a snippet to download file from a team foundation server, I met this error:</p>  <p>UnauthorizedAccessException was unhandled.</p>  <p>Access to the path is denied.</p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_495.png"><img style="background-image: none; border-right-width: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="UnauthorizedAccessException was unhandled" border="0" alt="UnauthorizedAccessException was unhandled" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_216.png" width="665" height="365" /></a></p>  <p>The relative code is:</p>  <pre style="overflow-y: visible" class="brush: csharp">private static void DownloadFile()
{
    TeamFoundationServer tfs = TeamFoundationServerFactory.GetServer(@&quot;serverNameOrUrl&quot;);
    VersionControlServer vc = (VersionControlServer)tfs.GetService(typeof(VersionControlServer));
    Console.WriteLine(&quot;Downloading...&quot;);
    vc.DownloadFile(@&quot;$/YourPath/YourPath/YourPath/File.aspx&quot;, @&quot;C:\test.aspx&quot;);
    Console.WriteLine(&quot;Done&quot;);
    Console.ReadKey();
}</pre>

<p>I was confused by this error, and checked my permission to the Team Foundation Server again and again, and found there is no issue with my account connected to the TFS server.</p>

<p>After a long time, I found out the error was not saying that the code has not enough permission to download file from TFS server, it was saying that the code has not enough permission to save the file into local disk!</p>

<p>The Windows 7 OS won’t let code to save file into local disk C: by default. I just changed the disk to D: and the problem was fixed.</p>

<pre style="overflow-y: visible; height: 30px" class="brush: csharp">
//...
vc.DownloadFile(@&quot;$/YourPath/YourPath/YourPath/File.aspx&quot;, @&quot;D:\test.aspx&quot;);
//...
</pre>