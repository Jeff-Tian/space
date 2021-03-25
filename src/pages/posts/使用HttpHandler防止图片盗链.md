---
stackbit_url_path: >-
  posts/使用HttpHandler防止图片盗链
title: '使用HttpHandler防止图片盗链'
date: '2011-10-01 02:16:50.72913'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - ASP.NET
  - C#
  - HttpHandler
  - ImageGuard
  - 图片护卫
canonical_url: https://be-net.azurewebsites.net/post/2011/10/01/使用HttpHandler防止图片盗链
template: post
---
<p><img style="margin: 0px 10px 0px 0px" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_44.png" width="178" height="163" /><img style="margin: 0px 10px 0px 0px" src="http://t1.gstatic.com/images?q=tbn:ANd9GcRdcevMw9vFg3-r-BS2GOsICeGeA5e1FX2SjyLbigqNi3Xj597s" width="164" height="164" /><img style="margin: 0px 10px 0px 0px" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb.jpg" width="213" height="161" /></p>  <h1><font style="font-weight: bold" color="#9b00d3">一、摘要</font></h1>  <p>对于你自己网站上的图片，你可能会希望它们只显示在自己网站的页面上，而当别人的网站引用它们时，不给予显示<img style="margin: 0px 10px 0px 0px" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_44.png" width="73" height="67" />，或者显示一张自定义的警告图片<img style="margin: 0px 10px 0px 0px" src="http://t1.gstatic.com/images?q=tbn:ANd9GcRdcevMw9vFg3-r-BS2GOsICeGeA5e1FX2SjyLbigqNi3Xj597s" width="69" height="69" />，或者在图片上加上一个水印信息<img style="margin: 0px 10px 0px 0px" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb.jpg" width="90" height="68" />，告诉浏览者此图片是来自你的网站的。</p>  <p>使用ASP.NET的HttpHandler可以很方便地达到这样的效果。</p>  <h1><font color="#9b00d3"><font style="font-weight: bold">二、实现步骤</font></font></h1>  <h2>1. 在网站项目中添加一个类文件，实现IHttpHandler接口</h2>  <h2>2. 配置Web.Config，将图片文件的请求映射到第1步中的类处理程序</h2>  <p>下面先讲第1步配置Web.Config，再讲第1步。因为配置非常简单，而类文件则需要一些代码，将会分三种情况给出这个类文件的三个版本。</p>  <h1><font color="#9b00d3"><font style="font-weight: bold">三、配置Web.Config详解</font></font></h1>  <p>假设第1步的类文件命名为ImageGuardHandler.cs，该文件定义了一个位于命名空间 zizhujy.HttpHandlers 下的类 ImageGuardHandler。现在配置Web.Config，使得图片文件请求被转交到ImageGuardHandler来处理。</p>  <p>如果网站服务器是使用的IIS 7.5或以上，则只需按如下格式配置：</p>  <pre class="brush: xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;!--
  有关如何配置 ASP.NET 应用程序的详细信息，请访问
  http://go.microsoft.com/fwlink/?LinkId=152368
  --&gt;

&lt;configuration&gt;
	...
    &lt;system.webServer&gt;
        &lt;validation validateIntegratedModeConfiguration=&quot;false&quot;/&gt;
        &lt;modules runAllManagedModulesForAllRequests=&quot;true&quot;/&gt;
        &lt;handlers&gt;
            &lt;add name=&quot;ImageGuardHandlerPng&quot; path=&quot;*.png&quot; verb=&quot;*&quot; type=&quot;zizhujy.HttpHandlers.ImageGuardHandler, zizhujy&quot; resourceType=&quot;Unspecified&quot; preCondition=&quot;integratedMode&quot;/&gt;
            &lt;add name=&quot;ImageGuardHandlerGif&quot; path=&quot;*.gif&quot; verb=&quot;*&quot; type=&quot;zizhujy.HttpHandlers.ImageGuardHandler, zizhujy&quot; resourceType=&quot;Unspecified&quot; preCondition=&quot;integratedMode&quot;/&gt;
            &lt;add name=&quot;ImageGuardHandlerJpg&quot; path=&quot;*.jpg&quot; verb=&quot;*&quot; type=&quot;zizhujy.HttpHandlers.ImageGuardHandler, zizhujy&quot; resourceType=&quot;Unspecified&quot; preCondition=&quot;integratedMode&quot;/&gt;
        &lt;/handlers&gt;
    &lt;/system.webServer&gt;
	...
&lt;/configuration&gt;</pre>

<p>如上，配置了对于三种图片文件（.png, .gif, .jpg）的请求，将会被ImageGuardHandler处理。</p>

<p>如果使用的是 IIS 5.1，则需要按如下格式配置：</p>

<pre class="brush: xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;!--
  有关如何配置 ASP.NET 应用程序的详细信息，请访问
  http://go.microsoft.com/fwlink/?LinkId=152368
  --&gt;

&lt;configuration&gt;
	...
    &lt;system.web&gt;
        &lt;httpHandlers&gt;
            &lt;add path=&quot;*.gif&quot; verb=&quot;*&quot; type=&quot;zizhujy.HttpHandlers.ImageGuardHandler, zizhujy&quot; validate=&quot;false&quot;/&gt;
            &lt;add path=&quot;*.png&quot; verb=&quot;*&quot; type=&quot;zizhujy.HttpHandlers.ImageGuardHandler, zizhujy&quot; validate=&quot;false&quot;/&gt;
            &lt;add path=&quot;*.jpg&quot; verb=&quot;*&quot; type=&quot;zizhujy.HttpHandlers.ImageGuardHandler, zizhujy&quot; validate=&quot;false&quot;/&gt;
        &lt;/httpHandlers&gt;
    &lt;/system.web&gt;
	...
&lt;/configuration&gt;</pre>

<h1><font style="font-weight: bold" color="#9b00d3">四、处理程序ImageGuardHandler详解</font></h1>

<h2>1. 对于来自非本网站的图片请求给予拒绝服务的响应：</h2>

<p><img style="margin: 0px 10px 0px 0px" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_44.png" width="146" height="134" /></p>

<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Globalization;
using System.IO;
using System.Drawing;
using System.Drawing.Imaging;
using zizhujy.Utility;

namespace zizhujy.HttpHandlers
{
    public class ImageGuardHandler : IHttpHandler
    {
        public void ProcessRequest(System.Web.HttpContext context)
        {
            HttpResponse response = context.Response;
            HttpRequest request = context.Request;
            string imagePath = null;

            // Check whether the page requesting the image is from your site.
            if (request.UrlReferrer != null)
            {
                // Perform a case-insensitive comparison of the referer.
                if (string.Compare(request.Url.Host, request.UrlReferrer.Host, true, CultureInfo.InvariantCulture) == 0)
                {
                    // The requesting host is correct.
                    // Allow the image to be served(if it exists).
                    imagePath = request.PhysicalPath;
                    if (!File.Exists(imagePath))
                    {
                        response.Status = &quot;Image not found&quot;;
                        response.StatusCode = 404;
                        return;
                    }
                }
            }

            if (imagePath == null)
            {
                response.Status = &quot;Not allowed&quot;;
                response.StatusCode = 500;
                return;
            }

            // Set the content type to the appropriate image type.
            response.ContentType = &quot;image/&quot; + Path.GetExtension(imagePath).ToLower();

            // Serve the image.
            response.WriteFile(imagePath);
            //Image image = Image.FromFile(imagePath);
            //image = ImageHandler.WatermarkHandler.AddCopyrightText(image, &quot;www.zizhujy.com&quot;, ImageHandler.CopyrightPosition.BottomRight);
            //image.Save(response.OutputStream, GetImageFormatByExtension(Path.GetExtension(imagePath)));

            //image.Dispose();
        }

        public bool IsReusable
        {
            get { return true; }
        }
    }
}</pre>

<h2>2. 对于来自非本网站的图片请求，显示一张自定义的警告图片，这个警告图片的路径可以配置在Web.Config中的 <appsettings />节中，如：</h2>

<p><img style="margin: 0px 10px 0px 0px" src="http://t1.gstatic.com/images?q=tbn:ANd9GcRdcevMw9vFg3-r-BS2GOsICeGeA5e1FX2SjyLbigqNi3Xj597s" width="132" height="132" /></p>

<div style="font-size: small;">
<pre class="brush: xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;!--
  有关如何配置 ASP.NET 应用程序的详细信息，请访问
  http://go.microsoft.com/fwlink/?LinkId=152368
  --&gt;

&lt;configuration&gt;
	...
    &lt;appSettings&gt;
        &lt;httpHandlers&gt;
            &lt;add key=&quot;NotAllowedImage&quot; value=&quot;~/Content/Images/NotAllowed.gif&quot;/&gt;
        &lt;/httpHandlers&gt;
    &lt;/appSettings&gt;
	...
&lt;/configuration&gt;</pre>
</div>

<p>ImageGuardHandler.cs代码如下：</p>
<div style="font-size: small;">
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Globalization;
using System.IO;
using System.Drawing;
using System.Drawing.Imaging;
using zizhujy.Utility;

namespace zizhujy.HttpHandlers
{
    public class ImageGuardHandler : IHttpHandler
    {
        public void ProcessRequest(System.Web.HttpContext context)
        {
            HttpResponse response = context.Response;
            HttpRequest request = context.Request;
            string imagePath = null;

            // Check whether the page requesting the image is from your site.
            if (request.UrlReferrer != null)
            {
                // Perform a case-insensitive comparison of the referer.
                if (string.Compare(request.Url.Host, request.UrlReferrer.Host, true, CultureInfo.InvariantCulture) == 0)
                {
                    // The requesting host is correct.
                    // Allow the image to be served(if it exists).
                    imagePath = request.PhysicalPath;
                    if (!File.Exists(imagePath))
                    {
                        response.Status = &quot;Image not found&quot;;
                        response.StatusCode = 404;
                        return;
                    }
                }
            }

            if (imagePath == null)
            {
                // No valid image was allowed.
                // Return the warning image instead of the requested image.
                // Rather than hard-code this image, you could retrieve it from the web.config file (using the <appsettings> section or a custom section).

                //imagePath = context.Server.MapPath(&quot;~/Images/notAllowed.gif&quot;);
                imagePath = context.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings.Get(&quot;NotAllowedImage&quot;).ToString());
            }

            // Set the content type to the appropriate image type.
            response.ContentType = &quot;image/&quot; + Path.GetExtension(imagePath).ToLower();

            // Serve the image.
            response.WriteFile(imagePath);
            //Image image = Image.FromFile(imagePath);
            //image = ImageHandler.WatermarkHandler.AddCopyrightText(image, &quot;www.zizhujy.com&quot;, ImageHandler.CopyrightPosition.BottomRight);
            //image.Save(response.OutputStream, GetImageFormatByExtension(Path.GetExtension(imagePath)));

            //image.Dispose();
        }

        public bool IsReusable
        {
            get { return true; }
        }
    }
}</pre>
</div>

<h2>3. 对于来自非本网站的图片请求，在图片上加上一行水印文本，将自己网站的Url信息写在图片上。</h2>

<p><img style="margin: 0px; display: inline" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb.jpg" width="184" height="139" /></p>

<p>这里涉及到给图片添加水印的程序，由于之前介绍过<a href="http://www.zizhujy.com/blog/post/2011/07/13/the-csharp-class-library-for-adding-watermark-image.aspx" target="_blank">给图片添加水印的类库</a>，这里就直接引用了它来完成添加水印的过程。在图片上添加水印的原理请见： </p>

<p><a href="http://www.zizhujy.com/blog/post/2011/07/13/add-watermark-to-image-using-csharp-and-gdiplus.aspx">使用.NET的GDI+技术给图片加水印</a></p>

<p>ImageGuardHandler.cs文件源码如下：</p>

<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Globalization;
using System.IO;
using System.Drawing;
using System.Drawing.Imaging;
using zizhujy.Utility;

namespace zizhujy.HttpHandlers
{
    public class ImageGuardHandler : IHttpHandler
    {
        public void ProcessRequest(System.Web.HttpContext context)
        {
            HttpResponse response = context.Response;
            HttpRequest request = context.Request;
            string imagePath = null;

            // Check whether the page requesting the image is from your site.
            if (request.UrlReferrer != null)
            {
                // Perform a case-insensitive comparison of the referer.
                if (string.Compare(request.Url.Host, request.UrlReferrer.Host, true, CultureInfo.InvariantCulture) == 0)
                {
                    // The requesting host is correct.
                    // Allow the image to be served(if it exists).
                    imagePath = request.PhysicalPath;
                    if (!File.Exists(imagePath))
                    {
                        response.Status = &quot;Image not found&quot;;
                        response.StatusCode = 404;
                        return;
                    }
                    else
                    {
                        // Serve the image normally
                        response.WriteFile(imagePath);
                        return;
                    }
                }
                else
                {
                    // Add watermark to the image
                    imagePath = request.PhysicalPath;

                    // Set the content type to the appropriate image type.
                    response.ContentType = &quot;image/&quot; + Path.GetExtension(imagePath).Replace(&quot;.&quot;, &quot;&quot;).ToLower();

                    // Serve the image.
                    Image image = Image.FromFile(imagePath);

                    ImageHandler.TextWatermarker txtWatermarker = new ImageHandler.TextWatermarker(image, &quot;www.zizhujy.com&quot;);
                    txtWatermarker.AddWatermark();

                    image = txtWatermarker.WatermarkedImage;
                    //image.Save(response.OutputStream, ImageHelper.GetImageFormatByExtension(Path.GetExtension(imagePath)));

                    MemoryStream mem = new MemoryStream();
                    image.Save(mem, ImageHelper.GetImageFormatByExtension(Path.GetExtension(imagePath)));

                    // Write the MemoryStream data to the OutputStream
                    mem.WriteTo(response.OutputStream);

                    mem.Dispose();

                    image.Dispose();
                    txtWatermarker.Dispose();
                    return;
                }
            }
            else
            {
                // Add watermark to the image
                imagePath = request.PhysicalPath;

                // Set the content type to the appropriate image type.
                response.ContentType = &quot;image/&quot; + Path.GetExtension(imagePath).Replace(&quot;.&quot;,&quot;&quot;).ToLower();

                // Serve the image.
                Image image = Image.FromFile(imagePath);
                ImageHandler.TextWatermarker txtWatermarker = new ImageHandler.TextWatermarker(image, &quot;www.zizhujy.com&quot;);
                txtWatermarker.AddWatermark();
                image = txtWatermarker.WatermarkedImage;

                // If the image is in PNG format, then it can be saved into response.OutputStream directly 
                ImageFormat format = ImageHelper.GetImageFormatByExtension(Path.GetExtension(imagePath));
                //if (format.Equals(ImageFormat.Png))
                if (true)
                {
                    // Create the PNG in memory
                    MemoryStream mem = new MemoryStream();
                    image.Save(mem, ImageFormat.Png);

                    // Write the MemoryStream data to the output stream.
                    mem.WriteTo(response.OutputStream);
                    mem.Dispose();
                }
                else
                {
                    image.Save(response.OutputStream, format);
                }

                image.Dispose();
                txtWatermarker.Dispose();
                return;
            }
        }

        public bool IsReusable
        {
            get { return true; }
        }
    }
}</pre>

<h1><font color="#9b00d3"><font style="font-weight: bold">五、结语</font></font></h1>

<p>以上三种版本的HttpHandler处理程序类，只需要任选其一即可。甚至可以整合成一个类，然后在Web.Config中作相关的配置，以控制其是直接拒绝服务，还是显示警告图片，或者是添加水印信息。</p>

<p>[donate: <a href="http://www.zizhujy.com">www.zizhujy.com</a>]</p>