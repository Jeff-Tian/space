---
stackbit_url_path: >-
  posts/What-is-“byte-order-mark”
title: 'What is “byte order mark”?'
date: '2012-04-23 07:46:26.2306983'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - byte order mark
  - endian
canonical_url: https://be-net.azurewebsites.net/post/2012/04/23/What-is-“byte-order-mark”
template: post
---
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_511.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="byte order mark" border="0" alt="byte order mark" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_226.png" width="260" height="146" /></a> </p>  <p>One byte can only hold a number between 0 and 255. But two bytes in a row can store numbers between 0 and 65,536 – which, in hex, is FFFF. The file needs to be able to tell whatever program opens it up that it’s going to contain these higher-numbered (the unicode characters with numbers 0 through 127 are called lower-numbered characters) characters. So it puts a special reserved byte sequence at the beginning of the file: “FF FE”. That’s called the “byte order mark”. As soon as a program sees that, it knows that all of the characters are encoded with two bytes each. (So an E is encoded as 00 45 – with leading zeroes).</p>  <p>You’ll also see a different byte order mark: “FE FF”, which indicates that the higher byte will be put behind the lower byte (big endian). To the contrary, the byte order mark “FF FE” indicates the higher byte will be put in front of the lower byte (little endian). </p>  <p align="right">- <strong><em>Head First C#</em></strong></p>