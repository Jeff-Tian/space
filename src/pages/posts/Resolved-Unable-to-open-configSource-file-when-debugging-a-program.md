---
stackbit_url_path: >-
  posts/Resolved-Unable-to-open-configSource-file-when-debugging-a-program
title: 'Resolved: Unable to open configSource file when debugging a program'
date: '2013-07-11 00:38:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - configSource
  - debug
  - tracing
canonical_url: https://be-net.azurewebsites.net/post/2013/07/11/Resolved-Unable-to-open-configSource-file-when-debugging-a-program
template: post
---
<h2><span style="color: #9b00d3;">Problem:</span></h2>
<p>When debugging a program, met an error:</p>
<p><span style="color: #ff0000;">Unable to open configSource file.</span></p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_638.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border: 0px;" title="Unable to open configSource file." src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_326.png" alt="Unable to open configSource file." width="645" height="341" border="0" /></a></p>
<h2><span style="color: #9b00d3;">Cause:</span></h2>
<p>The program conigures the trace listeners outside of the App.Config in a separate configuration file, and specified the separate configuration file name inside the App.Config. But the program was started from the bin\Debug folder when debugging, where the separate configuration file is not in.</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_639.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border: 0px;" title="Resolved: Unable to open configSource file when debugging a program" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_327.png" alt="Resolved: Unable to open configSource file when debugging a program" width="651" height="150" border="0" /></a></p>
<h2><span style="color: #9b00d3;">Solution:</span></h2>
<p>You can copy the separate configuration file manually into the bin\Debug folder to resolve this problem. Or you can set the that configuration file&rsquo;s &ldquo;Copy to Output Directory&rdquo; property to &ldquo;Copy always&rdquo; to save the manual work.</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_640.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border: 0px;" title="Resolved: Unable to open configSource file when debugging a program" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_328.png" alt="Resolved: Unable to open configSource file when debugging a program" width="659" height="394" border="0" /></a></p>