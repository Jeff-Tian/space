---
stackbit_url_path: >-
  posts/How-to-make-reCaptcha-extension-work-in-your-BlogEngineNET
title: 'How to make reCaptcha extension work in your BlogEngine.NET'
date: '2012-02-18 21:02:21.7681029'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - BlogEngine.NET
  - Extensions
  - reCaptcha
canonical_url: >-
template: post
---
<ol>   <li>Go to Admin tool, select settings tab, under comments settings, make sure “Use Disqus as a comment provider” is unchecked</li>    <ul>     <li><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_465.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="How to make reCaptcha plugin work in your BlogEngine.NET" border="0" alt="How to make reCaptcha plugin work in your BlogEngine.NET" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_195.png" width="718" height="263" /></a> </li>   </ul>    <li>Go to Extensions tab, make sure the “SimpleCaptcha” extension is disabled. (<font color="#ff0000">This is very important, because the reCaptcha extension’s priority is lower than the SimpleRecaptcha!</font>)</li>    <ul>     <li><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_466.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="How to make reCaptcha extension work in your BlogEngine.NET" border="0" alt="How to make reCaptcha extension work in your BlogEngine.NET" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_196.png" width="494" height="200" /></a>&#160;</li>   </ul>    <li>And make sure the “reCaptcha” extension is enabled and set your own public key and private key properly.</li>    <ul>     <li><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_467.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="How to make reCaptcha extension work in your BlogEngine.NET" border="0" alt="How to make reCaptcha extension work in your BlogEngine.NET" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_197.png" width="640" height="319" /></a> </li>   </ul>    <li>You are all set now. Log off from Admin tool and see it from the comment part of the blog post.</li>    <ul>     <li><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_468.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="How to make reCaptcha extension work in your BlogEngine.NET" border="0" alt="How to make reCaptcha extension work in your BlogEngine.NET" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_198.png" width="281" height="240" /></a> </li>   </ul> </ol>