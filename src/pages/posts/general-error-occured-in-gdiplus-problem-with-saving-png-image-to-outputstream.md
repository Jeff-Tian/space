---
stackbit_url_path: >-
  posts/general-error-occured-in-gdiplus-problem-with-saving-png-image-to-outputstream
title: 'GDI+ 中发生一般性错误（在 OutputStream 中保存 PNG 格式图像时遇到的问题）'
date: '2011-07-25 07:42:00'
excerpt: >-
  本文说明了当尝试在OutputStream中保存PNG格式图像时，会遇到错误；并解释了出现这个错误的原因，以及提供了解决该错误的方法。
comments_count: 0
positive_reactions_count: 0
tags: 
  - GDI+
  - OutputStream
  - PNG
  - 图像
canonical_url: >-
template: post
---
<h1><span style="color: #800080;">一、症状：</span></h1>
<p>在将图片以 PNG 格式保存至 Response.OutputStream 时，会碰到如下错误：</p>
<h4><em>GDI+ 中发生一般性错误。</em></h4>
<h1><span style="color: #800080;">二、症状实例：</span></h1>
<h4><em><span style="color: #800000;">GDI+ 中发生一般性错误。</span></em></h4>
<p><strong>说明: </strong>执行当前 Web 请求期间，出现未经处理的异常。请检查堆栈跟踪信息，以了解有关该错误以及代码中导致错误的出处的详细信息。 <br /><strong>异常详细信息: </strong>System.Runtime.InteropServices.ExternalException: GDI+ 中发生一般性错误。 <br /><strong>源错误:</strong>&nbsp;</p>
<pre style="width: 99%; overflow: auto;">行 56: txtWatermarker.Position = model.CopyrightPosition;
行 57: txtWatermarker.AddWatermark();
行 58: <span style="color: #ff0000;">txtWatermarker.WatermarkedImage.Save(Response.OutputStream, System.Drawing.Imaging.ImageFormat.Png);</span>
行 59: txtWatermarker.Dispose();
行 60: return Response.OutputStream;</pre>
<p><strong>源文件: </strong>C:\Inetpub\wwwroot\zizhujy\Controllers\WatermarkController.cs<strong>&nbsp;&nbsp;&nbsp; 行: </strong>58</p>
<h1><span style="color: #800080;">三、原因：</span></h1>
<p>在写 PNG 格式的图像时，指针需要在存储的位置来回移动。而 Response.OutputStream 只支持顺序访问。</p>
<h1><span style="color: #800080;">四、解决方案：</span></h1>
<p>先将 PNG 格式的图像保存至内存（内存总是可以随机访问的，即指针可以在内存中的存储位置来回移动），再将内存的存储内容复制写入 Response.OutputStream 中。</p>
<h1><span style="color: #800080;">五、解决方案实例：</span></h1>
<p>如以上的代码，改写为如下代码后，即不复出现该错误。</p>
<pre style="width: 99%; overflow: auto;">行 56: txtWatermarker.Position = model.CopyrightPosition;
行 57: txtWatermarker.AddWatermark();
行 58: <strong><span style="color: #0000ff;">MemoryStream mem = new MemoryStream();</span>
</strong>行 59: <strong><span style="color: #0000ff;">txtWatermarker.WatermarkedImage.Save(mem, ImageFormat.Png);</span>
</strong>行 60: <span style="color: #004000;">//txtWatermarker.WatermarkedImage.Save(Response.OutputStream, System.Drawing.Imaging.ImageFormat.Jpeg);</span>
行 61: <strong><span style="color: #0000ff;">Response.ContentType = "image/*";</span></strong>
行 62: <strong><span style="color: #0000ff;">mem.WriteTo(Response.OutputStream);</span>
</strong>行 63: <strong><span style="color: #0000ff;">mem.Dispose();</span></strong>
行 64: txtWatermarker.Dispose();
行 65: return Response.OutputStream;</pre>
<p>[donate:www.zizhujy.com]</p>