---
stackbit_url_path: >-
  posts/I-found-a-bug-of-httpwwwwolframalphacom-today
title: 'I found a bug of http://www.wolframalpha.com today'
date: '2012-01-31 06:52:31.3397758'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - BUG
  - Math
  - functions
  - graph
canonical_url: https://be-net.azurewebsites.net/post/2012/01/31/I-found-a-bug-of-httpwwwwolframalphacom-today
template: post
---
<h1><font color="#800080">[Repro Steps]</font></h1>  <ol>   <li>Navigate to <a href="http://www.wolframalpha.com">http://www.wolframalpha.com</a></li>    <li>Type y = x ^ (1/3);</li>    <li>Hit compute button</li>    <li>Watch the graph it produces</li> </ol>  <h1><font color="#800080">[Actual Result]</font></h1>  <p>Only the right half of the function’s graph is produced.</p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_434.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="I found a bug of http://www.wolframalpha.com today" border="0" alt="I found a bug of http://www.wolframalpha.com today" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_169.png" width="551" height="651" /></a> </p>  <p>&#160;</p>  <h1><font color="#800080">[Expected Result]</font></h1>  <p>The left half of the graph should also be produced to avoid misleading to users.</p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_435.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="function graph for y = x ^ (1/3)" border="0" alt="function graph for y = x ^ (1/3)" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_170.png" width="413" height="500" /></a></p>