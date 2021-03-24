---
stackbit_url_path: >-
  posts/在BlogEngineNET-中嵌入自定义表格样式
title: '在BlogEngine.NET 中嵌入自定义表格样式'
date: '2011-09-10 02:36:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - BlogEngine.NET
  - 样式
  - 表格
canonical_url: >-
template: post
---
<h1><span style="color: #9b00d3;">一、嵌入后日志中的表格示例</span></h1>
<p>1. <a href="http://www.zizhujy.com/blog/post/2011/09/10/%E6%B6%82%E9%B8%A6%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F.aspx" target="_blank">涂鸦样式</a>：</p>
<p><a href="http://www.zizhujy.com/blog/post/2011/09/10/%E6%B6%82%E9%B8%A6%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F.aspx" target="_blank"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; border: 0px;" title="涂鸦表格样式" src="http://www.zizhujy.com/blog/image.axd?picture=image_thumb_82.png" alt="涂鸦表格样式" width="362" height="313" border="0" /></a></p>
<p>2. <a href="http://www.zizhujy.com/blog/post/2011/09/10/%E4%BB%BFGoogle%E6%A0%B7%E5%BC%8F%E7%9A%84%E8%A1%A8%E6%A0%BC.aspx" target="_blank">仿Google的表格样式</a>：</p>
<p><a href="http://www.zizhujy.com/blog/post/2011/09/10/%E4%BB%BFGoogle%E6%A0%B7%E5%BC%8F%E7%9A%84%E8%A1%A8%E6%A0%BC.aspx"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="仿Google的表格样式" src="http://www.zizhujy.com/blog/image.axd?picture=image_83.png" alt="仿Google的表格样式" width="579" height="479" border="0" /></a></p>
<p>&nbsp;</p>
<h1><span style="color: #9b00d3;">二、为什么要嵌入自定义表格样式</span></h1>
<p>在写日志时，有时需要插入表格。而默认的表格样式很丑，一般博客主题中又没有为日志中的表格设定样式。你当然可以自己做个主题，并在主题中对日志的表格设定样式。但是做整个的博客主题工作量比较大。而且，就算你真的打算这样做，那么其中仍然有个环节，就是将日志表格样式嵌入到自己写的博客主题中去。</p>
<p>好了，现在有个已经做好的博客主题，不管是下载的，还是自己做的，让我们将表格样式嵌入到里面去。</p>
<h1><span style="color: #9b00d3;">三、步骤</span></h1>
<ol>
<li>准备好一个表格样式的CSS文件（如<a href="/blog/file.axd?file=2011%2f9%2ftables.css" target="_blank">tables.css</a>），将它添加到对应的主题目录的css文件夹下（~/themes/&lt;主题目录名，如Boldy&gt;/css/），如下图：</li>
<ol>
<li><a href="http://www.zizhujy.com/blog/image.axd?picture=image_84.png"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="http://www.zizhujy.com/blog/image.axd?picture=image_thumb_83.png" alt="image" width="199" height="348" border="0" /></a></li>
</ol>
<li>如果在css中引用了<a href="/blog/file.axd?file=2011%2f9%2fbar.gif" target="_blank">某些图片</a>，则将那些图片添加到对应主题目录的images文件夹下（（~/themes/&lt;主题目录名，如Boldy&gt;/images/）。如下图：</li>
<ol>
<li><a href="http://www.zizhujy.com/blog/image.axd?picture=image_85.png"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="http://www.zizhujy.com/blog/image.axd?picture=image_thumb_84.png" alt="image" width="244" height="213" border="0" /></a></li>
</ol>
<li>打开对应主题根目录下的site.master文件，添加对css文件的引用：</li>
<ol>
<li><a href="http://www.zizhujy.com/blog/image.axd?picture=image_86.png"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="http://www.zizhujy.com/blog/image.axd?picture=image_thumb_85.png" alt="image" width="588" height="138" border="0" /></a></li>
</ol></ol>
<h1><span style="color: #9b00d3;">四、在日志中如何使用</span></h1>
<p>在写完日志后，对其中添加的表格，切换到源代码视图，给相关的表格添加上CSS样式即可。</p>
<p>如：</p>
<p><a href="http://www.zizhujy.com/blog/image.axd?picture=image_87.png"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="http://www.zizhujy.com/blog/image.axd?picture=image_thumb_86.png" alt="image" width="562" height="425" border="0" /></a></p>
<h1><span style="color: #9b00d3;">五、示例表格样式文件</span></h1>
<p>在本博客前面的日篇日志中，曾介绍了两种样式的表格（<a href="http://www.zizhujy.com/blog/post/2011/09/10/%E6%B6%82%E9%B8%A6%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F.aspx" target="_blank">涂鸦表格样式</a>和<a href="http://www.zizhujy.com/blog/post/2011/09/10/%E4%BB%BFGoogle%E6%A0%B7%E5%BC%8F%E7%9A%84%E8%A1%A8%E6%A0%BC.aspx" target="_blank">仿Google样式的表格</a>），现在将这两种样式代码整合到一个CSS文件中，并嵌入到博客里面。该文件可以从下面的链接下载：</p>
<p><a href="/blog/file.axd?file=2011%2f9%2ftables.css" target="_blank">tables.css (3.72 kb)</a></p>
<p>此样式用到了一张背景图片，此图片可以从以下链接下载：</p>
<p><a href="/blog/file.axd?file=2011%2f9%2fbar.gif" target="_blank">bar.gif (673.00 bytes)</a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>[donate: <a href="http://www.zizhujy.com">www.zizhujy.com</a>]</p>
<p>&nbsp;</p>
<p>&nbsp;</p>