---
stackbit_url_path: >-
  posts/BlogEngineNET的图片护卫插件
title: 'BlogEngine.NET的图片护卫插件'
date: '2011-08-12 08:06:05.4170837'
excerpt: >-
  
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
<h1><font color="#800080">摘要</font></h1>  <p>图片护卫插件使你能够用三种不同的方式来保护你博文中的图片，这是首款（至少目前是）拥有如此功能的BlogEngine.NET插件。这三种不同的保护方式分别是：</p>  <ol>   <li><strong>水印方式（Watermark）：</strong> 当你的图片被别的站点盗链时，在图片上加上水印，比如加个你的域名，起码告诉了浏览者，这是属于你的图片（顺便还宣传了你自己的网站，不是吗？: ) ）。这是默认的护卫方式；       <ul>       <li><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image.jpg"><img title="image" border="0" alt="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb.jpg" width="240" height="181" /></a></li>     </ul>   </li>    <li><strong>阻止（Block）：</strong>把被盗链的图片，用一张放有不允许盗链信息的图片替换；       <ul>       <li><img alt="" src="http://t1.gstatic.com/images?q=tbn:ANd9GcRdcevMw9vFg3-r-BS2GOsICeGeA5e1FX2SjyLbigqNi3Xj597s" /></li>     </ul>   </li>    <li><strong>拒绝服务（Reject）：</strong>直接对盗链请求用403响应，拒绝服务。       <ul>       <li><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_44.png"><img title="image" border="0" alt="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_44.png" width="240" height="220" /></a></li>     </ul>   </li> </ol>  <h1><font color="#800080">要求</font></h1>  <p>BlogEngine.NET 2.0 及以上</p>  <h1><font color="#800080">安装</font></h1>  <p>下载该压缩文件 <a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f8%2fImageGuard.zip">ImageGuard.zip (6.18 kb)</a> (版本号 <strong>1.0</strong>)，然后：</p>  <ol>   <li>解压文件； </li>    <li>将其中的 ImageGuard.cs 文件复制到 <em>~/App_Code/Extensions/</em> 文件夹。</li> </ol>  <h1><font color="#800080">配置</font></h1>  <ul>   <li><strong>护卫类型（Guarding Type）：</strong> 你可以从上述的三种不同的护卫方式中选择其一，来保护你的图片，默认是水印（Watermark）方式。 </li>    <li><strong>水印文字（Watermark Text）：</strong> 如果你选择了水印的护卫方式，则该选项中的文本值将会在你的图片被盗链时，显示在你的图片的右下角，否则该文本值会被忽略。建议你在这里输入自己网站的网址，如<a href="http://www.zizhujy.com">http://www.zizhujy.com</a> 。 </li>    <li><strong>水印图片的虚拟路径（Virtual Path Of Watermark Image）：</strong> 如果你选择了水印的护卫方式，则当你的图片被盗链时，图片护卫插件会从这里配置的虚拟路径找到对应的图片，作为水印图片加在被盗链的图片的左下角。否则，该选项的设置值会被忽略。你应该输入在你的BlogEngine.NET应用程序中的图片的虚拟路径。比如你用了某篇博文中的一张图片作为水印图片，则它的虚拟路径应该形如“<em>~/App_Data/files/yourWatermark.png</em>”这种样子。 </li>    <li><strong>阻止图片的虚拟路径（Virtual Path Of Block Image）：</strong> 如果你选择了使用阻止方式来护卫你的图片，则这里应该放置你希望替换原图片的阻止图片的虚拟路径，否则这里的设置值将会被忽略。你应该输入在你的BlogEngine.NET应用程序中的图片的虚拟路径。比如你用了某篇博文中的一张图片作为水印图片，则它的虚拟路径应该形如“<em>~/App_Data/files/yourBlockImage.png</em>”这种样子。</li> </ul>  <h1><font color="#800080">附</font></h1>  <p>欢迎留言建议！</p>  <p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f8%2fImageGuard.zip">ImageGuard.zip (6.18 kb)</a></p>