---
stackbit_url_path: >-
  posts/Image-Guard-Extension-for-BlogEngineNET
title: 'Image Guard Extension for BlogEngine.NET'
date: '2011-08-11 07:32:00'
excerpt: >-
  Image Guard is the first (if not unique, at least for the moment) BlogEngine.NET extension that allows you guard your image files in blog posts in three different ways when they are displayed on other sites.
  
  Watermark: Add watermark to your images. (That’s a good way to spread your web site, isn’t it ? : ) );
  
  Block: Replace the image that other sites request with a block image, such as an image only shows Not Allowed text on it;
  
  Reject: Responde the request with 403 code.
comments_count: 0
positive_reactions_count: 0
tags: 
  - BlogEngine.NET
  - C#
  - Extensions
  - ImageGuard
  - Watermark
  - 图片护卫
  - 插件
  - 水印
  - 盗链
canonical_url: >-
template: post
---
<h1><span style="color: #800080">Abstract</span></h1>  <p>Image Guard is the first (if not unique, at least for the moment) BlogEngine.NET extension that allows you guard your image files in blog posts in three different ways when they are displayed on other sites.</p>  <ol>   <li><strong>Watermark</strong>: Add watermark to your images. (That’s a good way to spread your web site, isn’t it ? : ) );       <ul>       <li><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image.jpg"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb.jpg" width="240" height="181" /></a> </li>     </ul>   </li>    <li><strong>Block</strong>: Replace the image that other sites request with a block image, such as an image only shows Not Allowed text on it;       <ul>       <li><img alt="" src="http://t1.gstatic.com/images?q=tbn:ANd9GcRdcevMw9vFg3-r-BS2GOsICeGeA5e1FX2SjyLbigqNi3Xj597s" /> </li>     </ul>   </li>    <li><strong>Reject</strong>: Responde the request with 403 code.       <ul>       <li><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_44.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_44.png" width="240" height="220" /></a> </li>     </ul>   </li> </ol>  <h1><span style="color: #800080"></span><font color="#800080">Requirements</font></h1>  <p>BlogEngine.NET 2.0 or above</p>  <h1><span style="color: #800080">Installation</span></h1>  <p>Download the compressed file <a href="/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f8%2fImageGuard.zip">ImageGuard.zip (6.18 kb)</a> (version <strong>1.0</strong>), then:</p>  <ol>   <li>Extract files; </li>    <li>Copy ImageGuard.cs into <em>~/App_Code/Extensions/</em> folder. </li> </ol>  <h1><span style="color: #800080">Configuration</span></h1>  <ul>   <li><strong>Guarding Type</strong>: You can choose one of the three different ways mentioned above that to protect your images, default is Watermark. </li>    <li><strong>Watermark Text</strong>: If you choose the Watermark Guarding Type, then the watermark text you input to this textbox will be displayed in the right bottom of the images that requested by other site, otherwise this value will be ignored. Recommend you input your web site url in this field, for example: <a href="http://www.zizhujy.com">www.zizhujy.com</a>. </li>    <li><strong>Virtual Path Of Watermark Image</strong>: If you choose the Watermark Guarding Type, then the image file in this path you inputted will be displayed in the left bottom of the images that requested by other site, otherwise this value will be ignored. You should input virtual path against your BlogEngine.NET application, for example, you use an image file in your blog post, then the virtual path of watermark image value would be like “<em>~/App_Data/files/yourWatermark.png</em>”. </li>    <li><strong>Virtual Path Of Block Image</strong>: If you choose the Block Guarding Type, then the value you inputted into this text box will be used as the file path for the block image, otherwise this value will be ignored. You should input virtual path against your BlogEngine.NET application, for example, you use an image file in your blog post, then the virtual path of watermark image value would be like “<em>~/App_Data/files/yourWatermark.png</em>”. </li> </ul>  <h1><span style="color: #800080">P.S.</span></h1>  <p>I’m sorry for my poor English. Welcome your suggestion!</p>  <p><a href="/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f8%2fImageGuard.zip">ImageGuard.zip (6.18 kb)</a></p>