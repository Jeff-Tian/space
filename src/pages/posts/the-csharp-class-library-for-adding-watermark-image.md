---
stackbit_url_path: >-
  posts/the-csharp-class-library-for-adding-watermark-image
title: '给图片添加水印的C#类库'
date: '2011-07-12 16:57:00'
excerpt: >-
  本文提供了一个给图片添加水印的C#类库，首先介绍了它的使用方法，其次介绍了该类库的结构，最后公开了它的源代码以及整个项目文件。
comments_count: 0
positive_reactions_count: 0
tags: 
  - Watermark
  - 扩展
  - 模板设计模式
  - 水印
canonical_url: https://be-net.azurewebsites.net/post/2011/07/12/the-csharp-class-library-for-adding-watermark-image
template: post
---
<h1><span style="color: #800080;">相关文件下载：</span></h1>
<p><span style="color: #000000;">1. 给图片添加水印的类库（dll)文件：<a href="/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f7%2fImageHandler.dll">ImageHandler.dll (18.00 kb)</a></span></p>
<p><span style="color: #000000;">2. 整个类库项目文件：<a href="/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f7%2fImageHandler.rar">ImageHandler.rar (45.03 kb)</a></span><span style="color: #800080;">&nbsp;</span></p>
<h1><span style="color: #800080;">摘要：</span></h1>
<p>本文提供了一个给图片添加水印的C#类库，首先介绍了它的使用方法，其次介绍了该类库的结构，最后公开了它的源代码以及整个项目文件。</p>
<h1><span style="color: #800080;">简介：</span></h1>
<p><a title="使用.NET的GDI+技术给图片加水印" href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/post/2011/07/07/add-watermark-to-image-using-csharp-and-gdiplus.aspx" target="_blank">上篇文章</a>介绍了使用C#及GDI+技术给图片添加水印的原理和技术细节。本文使用其技术做底层实现，采用模板设计模式架构，提供了一个高复用性与易扩展的图片处理类库。</p>
<p>&nbsp;<a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_30.png"><img style="display: inline; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_30.png" alt="给图片添加水印的C#类库 The C# Class Library for adding watermark to image" width="610" height="256" border="0" /></a></p>
<h1><span style="color: #800080;">一、类库的使用：</span></h1>
<p>将类库(<a href="/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f7%2fImageHandler.dll">ImageHandler.dll (18.00 kb)</a>)复制到你的工程Bin文件夹后，在你的代码中添加zizhujy.ImageHandler命名空间，然后打开你要添加水印的图片，实例化一个zizhujy.ImageHandler中的Watermarker类，添加你想要的水印，完毕。就是如此简单！它可以被引用到Windows Console Application、Windows Form Application、Web Application、Web Service Application 等等工程中，以下以ASP.NET MVC 3 Application为例，就文字水印与图片水印分别列出三个代码实例。</p>
<h2><span style="color: #800080;">1. 添加文字水印：</span></h2>
<p>代码：</p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using zizhujy.ImageHandler;
 
namespace zizhujy.Controllers
{
    public class TestController : Controller
    {
        public void AddWatermark()
        {
            Image originImage = Image.FromFile(@"C:\source.jpg");
            TextWatermarker txtWatermarker = new TextWatermarker(originImage, "<em class="text_cor1">www.zizhujy.com</em>");
            txtWatermarker.AddWatermark();
 
            // Response and show the watermarked image in the browser
            Response.ContentType = "image/jpeg";
            txtWatermarker.WatermarkedImage.Save(Response.OutputStream, System.Drawing.Imaging.ImageFormat.Jpeg);
 
            txtWatermarker.Dispose();
            originImage.Dispose();
        }
    }
}</pre>
<p>效果：</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_28.png"><img style="display: inline; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_28.png" alt="给图片添加水印的C#类库 The C# Class Library for adding watermark to image" width="619" height="260" border="0" /></a></p>
<h2><span style="color: #800080;">2. 添加图片水印：</span></h2>
<p>代码：</p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using zizhujy.ImageHandler;
 
namespace zizhujy.Controllers
{
    public class TestController : Controller
    {
        public void AddWatermark()
        {
            Image originImage = Image.FromFile(@"C:\source.jpg");
            Image watermark = Image.FromFile(@"C:\clock.png");
 
            ImageWatermarker imgWatermarker = new ImageWatermarker(originImage, watermark);
            imgWatermarker.AddWatermark();
 
            // Response and show the watermarked image in the browser
            Response.ContentType = "image/jpeg";
            imgWatermarker.WatermarkedImage.Save(Response.OutputStream, System.Drawing.Imaging.ImageFormat.Jpeg);
 
            imgWatermarker.Dispose();
            watermark.Dispose();
            originImage.Dispose();
        }
    }
}</pre>
<p>效果：</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_29.png"><img style="display: inline; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_29.png" alt="给图片添加水印的C#类库 The C# Class Library for adding watermark to image" width="603" height="253" border="0" /></a></p>
<p>&nbsp;</p>
<h2><span style="color: #800080;">3. 同时添加图片水印和文字水印：</span></h2>
<p>代码：</p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using zizhujy.ImageHandler;
 
namespace zizhujy.Controllers
{
    public class TestController : Controller
    {
        public void AddWatermark()
        {
            // First, add the image watermark
            Image originImage = Image.FromFile(@"C:\source.jpg");
            Image watermark = Image.FromFile(@"C:\clock.png");
 
            ImageWatermarker imgWatermarker = new ImageWatermarker(originImage, watermark);
            // You can set the watermark size, if you not then the watermark will be its original size by default
            imgWatermarker.SetWatermarkHeight(80);
            imgWatermarker.AddWatermark();
 
            // Second, add the text watermark
            TextWatermarker txtWatermarker = new TextWatermarker(imgWatermarker.WatermarkedImage, "<em class="text_cor1">www.zizhujy.com</em>");
            // You can set the position of the watermark
            txtWatermarker.Position = WatermarkPostion.TopLeft;
            txtWatermarker.AddWatermark();
 
            // Response and show the watermarked image in the browser
            Response.ContentType = "image/jpeg";
            // Note: save the secondly watermarked image 
            //  (txtWatermarker not imgWatermarker because the txtWatermarker comes after than imgWatermarker)
            txtWatermarker.WatermarkedImage.Save(Response.OutputStream, System.Drawing.Imaging.ImageFormat.Jpeg);
 
            imgWatermarker.Dispose();
            watermark.Dispose();
            originImage.Dispose();
        }
    }
}</pre>
<p>效果：</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_30.png"><img style="display: inline; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_30.png" alt="给图片添加水印的C#类库 The C# Class Library for adding watermark to image" width="610" height="256" border="0" /></a></p>
<h1><span style="color: #800080;">二、类库的结构(设计模式)</span></h1>
<p>此类库采用了模板设计模式。因为对于给图片加水印，至少分为文本水印、图片水印两种。而不同的水印，将其添加到图片上的算法是一样的。即</p>
<ol>
<li>获取源图片</li>
<li>获取水印</li>
<li>计算水印的位置Point (x,y)</li>
<li>计算水印的大小Size (width, height)</li>
<li>在源图片的Point位置处，以Size尺寸，将水印绘制出来，并返回新的图片</li>
</ol>
<p>因此很自然想到使用模板设计模式，将以上算法封装在模板类Watermarker类中。对于图片水印与文本水印如何添加到源图片上，其方法是不一样的（详见<a title="使用.NET的GDI+技术给图片加水印" href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/post/2011/07/07/add-watermark-to-image-using-csharp-and-gdiplus.aspx" target="_blank">上篇文章</a>说明），故上述第5步，绘制水印的方法应该是抽象的，由具体的类来给予实现，即分别在ImageWatermarker和TextWatermarker中实现。</p>
<p>类图结构如下：</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_31.png"><img style="display: inline; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_31.png" alt="给图片添加水印的C#类图 The C# Class Diagram for adding watermark to image" width="652" height="583" border="0" /></a></p>
<p>很简单明了，后面三个Enum是用来表示水印在源图片上出现的位置的struct结构体。</p>
<p>以下分别看每个类的结构：</p>
<div style="width: 100%; height: auto; overflow: auto;">&nbsp;<a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_32.png"><img style="margin-top: 0px; display: inline; margin-bottom: 0px; float: left; border: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_32.png" alt="给图片添加水印的C#类图 The C# Class Diagram for adding watermark to image" width="137" height="513" align="left" border="0" /></a> <a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_33.png"><img style="margin: 20px 20px 0px 0px; display: inline; float: left; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_33.png" alt="给图片添加水印的C#类图 The C# Class Diagram for adding watermark to image" width="258" height="499" align="left" border="0" /></a><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_38.png"><img style="margin: 20px 0px 0px; display: inline; border: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_38.png" alt="image" width="241" height="380" align="left" border="0" /></a></div>
<div style="width: 100%; height: auto; overflow: auto;">&nbsp;<a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_35.png"><img style="margin-top: 0px; display: inline; margin-bottom: 0px; float: left; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_35.png" alt="给图片添加水印的C#类图 The C# Class Diagram for adding watermark to image" width="240" height="124" align="left" border="0" /></a> <a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_36.png"><img style="margin-top: 0px; display: inline; margin-bottom: 0px; float: left; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_36.png" alt="给图片添加水印的C#类图 The C# Class Diagram for adding watermark to image" width="240" height="124" align="left" border="0" /></a> <a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_37.png"><img style="margin: 0px; display: inline; float: left; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_37.png" alt="给图片添加水印的C#类图 The C# Class Diagram for adding watermark to image" width="240" height="222" align="left" border="0" /></a></div>
<h1><span style="color: #800080;">三、类库的源码</span></h1>
<p>先看模板类Watermarker.cs的源码（三个Enum结构体的代码也在这个文件中）：</p>
<pre class="brush:csharp">using System;
using System.Drawing;
 
namespace zizhujy.ImageHandler
{
    /// 
    /// Watermarker Template class
    /// 
    public abstract class Watermarker : IDisposable
    {
        #region Properties
 
        private Image originImage;
        public Image OriginImage
        {
            get
            {
                return originImage;
            }
            set
            {
                originImage = value;
            }
        }
 
        private Image watermarkedImage;
        public Image WatermarkedImage
        {
            get
            {
                return watermarkedImage;
            }
            set
            {
                watermarkedImage = value;
            }
        }
 
        private SizeF watermarkSize;
        protected SizeF WatermarkSize
        {
            get
            {
                return watermarkSize;
            }
            set
            {
                watermarkSize = value;
            }
        }
 
        private float x;
        protected float X
        {
            get
            {
                return x;
            }
            set
            {
                x = value;
            }
        }
 
        private float y;
        protected float Y
        {
            get
            {
                return y;
            }
            set
            {
                y = value;
            }
        }
 
        private bool computeX = true;
        public bool ComputeX
        {
            get { return computeX; }
        }
 
        private bool computeY = true;
        public bool ComputeY
        {
            get { return computeY; }
        }
 
        private WatermarkHorizontalPostion hPos;
        public WatermarkHorizontalPostion HorizontalPosition
        {
            get
            {
                return hPos;
            }
            set
            {
                computeX = true;
                hPos = value;
            }
        }
 
        private WatermarkVerticalPostion vPos;
        public WatermarkVerticalPostion VerticalPosition
        {
            get
            {
                return vPos;
            }
            set
            {
                computeY = true;
                vPos = value;
            }
        }
 
        public WatermarkPostion Position
        {
            get
            {
                return GetPosition(this.HorizontalPosition , this.VerticalPosition) ;
            }
            set
            {
                this.HorizontalPosition = GetHorizentalPosition(value);
                this.VerticalPosition = GetVerticalPosition(value);
            }
        }
 
        private int hMarginPixel;
        public int HorizontalMarginPixel
        {
            get
            {
                return hMarginPixel;
            }
            set
            {
                hMarginPixel = value;
            }
        }
 
        private int vMarginPixel;
        public int VerticalMarginPixel
        {
            get
            {
                return vMarginPixel;
            }
            set
            {
                vMarginPixel = value;
            }
        }
 
        public double HorizontalMarginPercent
        {
            get
            {
                return this.HorizontalMarginPixel / this.OriginImage.Width;
            }
            set
            {
                double percent = value &gt; 1 ? 1 : (value &lt; 0 ? 0 : value);
                this.HorizontalMarginPixel = (int)(this.OriginImage.Width * percent);
            }
        }
 
        public double VerticalMarginPercent
        {
            get
            {
                return this.VerticalMarginPixel / this.OriginImage.Height;
            }
            set
            {
                double percent = value &gt; 1 ? 1 : (value &lt; 0 ? 0 : value);
                this.VerticalMarginPixel = (int)(this.originImage.Height * percent);
            }
        }
 
        private Color shadowColor;
        public Color ShadowColor
        {
            get
            {
                return shadowColor;
            }
            set
            {
                shadowColor = value;
            }
        }
 
        private Color foreColor;
        public Color ForeColor
        {
            get
            {
                return foreColor;
            }
            set
            {
                foreColor = value;
            }
        }
 
        public double ShadowOpacity
        {
            get
            {
                return shadowColor.A / 255;
            }
            set
            {
                double percent = value &gt; 1 ? 1 : (value &lt; 0 ? 0 : value);
                int alpha = (int)(255 * percent);
 
                shadowColor = Color.FromArgb(alpha, shadowColor);
            }
        }
 
        public virtual double ForegroundOpacity
        {
            get
            {
                return foreColor.A / 255;
            }
            set
            {
                double percent = value &gt; 1 ? 1 : (value &lt; 0 ? 0 : value);
                int alpha = (int)(255 * percent);
 
                foreColor = Color.FromArgb(alpha, foreColor);
            }
        }
 
        private int shadowOffsetX;
        public int ShadowOffsetX
        {
            get
            {
                return shadowOffsetX;
            }
            set
            {
                shadowOffsetX = value;
            }
        }
 
        private int shadowOffsetY;
        public int ShadowOffsetY
        {
            get
            {
                return shadowOffsetY;
            }
            set
            {
                shadowOffsetY = value;
            }
        }
 
        #endregion
 
        #region Contructor
 
        public Watermarker(Image originImage)
        {
            this.OriginImage = originImage;
            // 默认值
            this.ShadowColor = Color.FromArgb(153, 0, 0, 0);
            this.ForeColor = Color.FromArgb(153, 255, 255, 255);
            this.ShadowOffsetX = 1;
            this.ShadowOffsetY = 1;
            this.Position = WatermarkPostion.BottomRight;
            this.HorizontalMarginPixel = 10;
            this.VerticalMarginPixel = 10;
        }
 
        #endregion
 
        #region Methods
 
        public void SetX(float x)
        {
            this.X = x;
            computeX = false;
        }
 
        public void SetY(float y)
        {
            this.Y = y;
            computeY = false;
        }
 
        public void SetXY(float x, float y)
        {
            SetX(x);
            SetY(y);
        }
 
        /// 
        /// Add water mark to original image
        /// 
        public Image AddWatermark()
        {
            ComputeWatermarkSize();
            UpdateXY();
            watermarkedImage = AddWatermarkToOriginImage();
 
            return watermarkedImage;
        }
 
        /// 
        /// hook
        /// 
        /// 
        protected virtual SizeF ComputeWatermarkSize()
        {
            this.WatermarkSize = new SizeF(100f, 50f);
            return this.WatermarkSize;
        }
 
        /// 
        /// hook
        /// 
        protected virtual Image AddWatermarkToOriginImage()
        {
            return originImage;
        }
        
        /// 
        /// hook
        /// 
        protected virtual void UpdateXY()
        {
            if (this.ComputeX)
            {
                switch (this.HorizontalPosition)
                {
                    case WatermarkHorizontalPostion.Left:
                        this.X = this.HorizontalMarginPixel;
                        break;
 
                    case WatermarkHorizontalPostion.Center:
                        this.X = this.OriginImage.Width / 2 - this.WatermarkSize.Width / 2;
                        break;
 
                    case WatermarkHorizontalPostion.Right:
                        this.X = (this.OriginImage.Width - this.HorizontalMarginPixel - this.WatermarkSize.Width);
                        break;
 
                    default:
                        break;
                }
            }
 
            if (this.ComputeY)
            {
                switch (this.VerticalPosition)
                {
                    case WatermarkVerticalPostion.Top:
                        this.Y = this.VerticalMarginPixel;
                        break;
 
                    case WatermarkVerticalPostion.Middle:
                        this.Y = this.OriginImage.Height / 2 - this.WatermarkSize.Height / 2;
                        break;
 
                    case WatermarkVerticalPostion.Bottom:
                        this.Y = (this.OriginImage.Height - this.VerticalMarginPixel - this.WatermarkSize.Height);
                        break;
 
                    default:
                        break;
                }
            }
        }
 
        private static WatermarkHorizontalPostion GetHorizentalPosition(WatermarkPostion pos)
        {
            // Mask: 000 111
            return (WatermarkHorizontalPostion)((char)pos &amp; (char)0x07);
        }
 
        private static WatermarkVerticalPostion GetVerticalPosition(WatermarkPostion pos)
        {
            // Mask: 111 000
            return (WatermarkVerticalPostion)((char)pos &amp; (char)0x38);
        }
 
        private static WatermarkPostion GetPosition(WatermarkHorizontalPostion hPos, WatermarkVerticalPostion vPos)
        {
            return (WatermarkPostion)((char)hPos | (char)vPos);
        }
 
        #endregion
 
        #region IDisposable 成员
 
        public virtual void Dispose()
        {
            this.OriginImage.Dispose();
            this.WatermarkedImage.Dispose();
        }
 
        #endregion
    }
 
    public enum WatermarkPostion
    {
        TopLeft = 0x24,         // 100 100
        TopCenter = 0x22,       // 100 010
        TopRight = 0x21,        // 100 001
        MiddleLeft = 0x14,      // 010 100
        MiddleCenter = 0x12,    // 010 010
        MiddleRight = 0x11,     // 010 001    
        BottomLeft = 0x0C,      // 001 100
        BottomCenter = 0x0A,    // 001 010
        BottomRight = 0x09,     // 001 001
    }
 
    public enum WatermarkHorizontalPostion
    {
        Left = 0x04,            // 000 100
        Center = 0x02,          // 000 010
        Right = 0x01,           // 000 001
    }
 
    public enum WatermarkVerticalPostion
    {
        Top = 0x20,             // 100 000
        Middle = 0x10,          // 010 000
        Bottom = 0x08,          // 001 000
    }
}</pre>
<p>再来分别看加图片水印的类ImageWatermarker.cs与加文本水印的类TextWatermark.cs的源码：</p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
 
namespace zizhujy.ImageHandler
{
    public class ImageWatermarker : Watermarker
    {
        #region Properties
 
        private Image watermarkImage;
        public Image WatermarkImage
        {
            get
            {
                return watermarkImage;
            }
            set
            {
                watermarkImage =value;
            }
        }
 
        private ImageAttributes imageAttributes = new ImageAttributes();
        public ImageAttributes ImageAttributes
        {
            get
            {
                return imageAttributes;
            }
            set
            {
                imageAttributes = value;
            }
        }
 
        private List colorMaps = new List();
        public List ColorMaps
        {
            get
            {
                return colorMaps;
            }
            set { colorMaps = value; }
        }
 
        public float[][] ColorMatrixElements
        {
            get
            {
                if (this.ColorMatrix != null)
                {
                    return new float[][] {
                        new float[] {this.ColorMatrix.Matrix00, this.ColorMatrix.Matrix01, this.ColorMatrix.Matrix02, this.ColorMatrix.Matrix03, this.ColorMatrix.Matrix04},
                        new float[] {this.ColorMatrix.Matrix10, this.ColorMatrix.Matrix11, this.ColorMatrix.Matrix12, this.ColorMatrix.Matrix13, this.ColorMatrix.Matrix14},
                        new float[] {this.ColorMatrix.Matrix20, this.ColorMatrix.Matrix21, this.ColorMatrix.Matrix22, this.ColorMatrix.Matrix23, this.ColorMatrix.Matrix24},
                        new float[] {this.ColorMatrix.Matrix30, this.ColorMatrix.Matrix31, this.ColorMatrix.Matrix32, this.ColorMatrix.Matrix33, this.ColorMatrix.Matrix34},
                        new float[] {this.ColorMatrix.Matrix40, this.ColorMatrix.Matrix41, this.ColorMatrix.Matrix42, this.ColorMatrix.Matrix43, this.ColorMatrix.Matrix44}
                    };
                }
                else
                {
                    return null;
                }
            }
            set
            {
                this.ColorMatrix.Matrix00 = value[0][0];
                this.ColorMatrix.Matrix01 = value[0][1];
                this.ColorMatrix.Matrix02 = value[0][2];
                this.ColorMatrix.Matrix03 = value[0][3];
                this.ColorMatrix.Matrix04 = value[0][4];
                this.ColorMatrix.Matrix10 = value[1][0];
                this.ColorMatrix.Matrix11 = value[1][1];
                this.ColorMatrix.Matrix12 = value[1][2];
                this.ColorMatrix.Matrix13 = value[1][3];
                this.ColorMatrix.Matrix14 = value[1][4];
                this.ColorMatrix.Matrix20 = value[2][0];
                this.ColorMatrix.Matrix21 = value[2][1];
                this.ColorMatrix.Matrix22 = value[2][2];
                this.ColorMatrix.Matrix23 = value[2][3];
                this.ColorMatrix.Matrix24 = value[2][4];
                this.ColorMatrix.Matrix30 = value[3][0];
                this.ColorMatrix.Matrix31 = value[3][1];
                this.ColorMatrix.Matrix32 = value[3][2];
                this.ColorMatrix.Matrix33 = value[3][3];
                this.ColorMatrix.Matrix34 = value[3][4];
                this.ColorMatrix.Matrix40 = value[4][0];
                this.ColorMatrix.Matrix41 = value[4][1];
                this.ColorMatrix.Matrix42 = value[4][2];
                this.ColorMatrix.Matrix43 = value[4][3];
                this.ColorMatrix.Matrix44 = value[4][4];
            }
        }
 
        private ColorMatrix colorMatrix;
        public ColorMatrix ColorMatrix
        {
            get
            {
                return colorMatrix;
            }
            set
            {
                colorMatrix = value;
            }
        }
 
        private bool keepScale;
        public bool KeepScale
        {
            get { return keepScale; }
            set { keepScale = value; }
        }
 
        public override double ForegroundOpacity
        {
            get
            {
                return base.ForegroundOpacity;
            }
            set
            {
                double percent = value &gt; 1 ? 1 : (value &lt; 0 ? 0 : value);
 
                base.ForegroundOpacity = percent;
                this.ColorMatrix.Matrix33 = (float)percent;
            }
        }
 
        #endregion
 
        #region Constructor
 
        public ImageWatermarker(Image originImage, Image watermarkImage)
            : base(originImage)
        {
            this.WatermarkImage = watermarkImage;
 
            // Default values
            this.ColorMaps.Add(new ColorMap());
            this.ColorMaps[0].OldColor = Color.FromArgb(255, 255, 255, 255);
            this.ColorMaps[0].NewColor = Color.FromArgb(0, 0, 0, 0);
 
            float[][] colorMatrixElements = {
                new float[]{1.0f, 0.0f, 0.0f, 0.0f, 0.0f},
                new float[]{0.0f, 1.0f, 0.0f, 0.0f, 0.0f},
                new float[]{0.0f, 0.0f, 1.0f, 0.0f, 0.0f},
                new float[]{0.0f, 0.0f, 0.0f, 0.3f, 0.0f},
                new float[]{0.0f, 0.0f, 0.0f, 0.0f, 1.0f}   
            };
            this.ColorMatrix = new ColorMatrix(colorMatrixElements);
            this.WatermarkSize = this.WatermarkImage.Size;
            this.KeepScale = true;
        }
 
        #endregion
 
        #region Methods
 
        protected override SizeF ComputeWatermarkSize()
        {
            return this.WatermarkSize;
        }
 
        protected override Image AddWatermarkToOriginImage()
        {
            this.WatermarkedImage = this.OriginImage;
            Graphics watermarkGraphic = Graphics.FromImage(this.WatermarkedImage);
 
            this.ImageAttributes.SetRemapTable(this.ColorMaps.ToArray(), ColorAdjustType.Bitmap);
            this.ImageAttributes.SetColorMatrix(this.ColorMatrix, ColorMatrixFlag.Default, ColorAdjustType.Bitmap);
 
            watermarkGraphic.DrawImage(this.WatermarkImage,
                new Rectangle((int)this.X, (int)this.Y, (int)this.WatermarkSize.Width, (int)this.WatermarkSize.Height),
                0, 0, this.WatermarkImage.Width, this.WatermarkImage.Height,
                GraphicsUnit.Pixel, this.ImageAttributes);
 
            watermarkGraphic.Dispose();
            imageAttributes.Dispose();
 
            return this.WatermarkedImage;
        }
 
        public void SetWatermarkWidth(int width)
        {
            float height = this.WatermarkSize.Height;
            if (this.KeepScale)
            {
                height = height * width / this.WatermarkSize.Width;
            }
 
            this.WatermarkSize = new SizeF(width, height);
        }
 
        public void SetWatermarkHeight(int height)
        {
            float width = this.WatermarkSize.Width;
            if (this.KeepScale)
            {
                width = width * height / this.WatermarkSize.Height;
            }
 
            this.WatermarkSize = new SizeF(width, height);
        }
 
        public void SetWatermarkSize(int width, int height)
        {
            this.WatermarkSize = new SizeF(width, height);
            this.KeepScale = false;
        }
 
        public override void Dispose()
        {
            base.Dispose();
            this.WatermarkImage.Dispose();
        }
 
        #endregion
    }
}</pre>
<p>&nbsp;</p>
<pre class="brush: csharp">using System;
using System.Drawing;
using System.Collections.Generic;
 
namespace zizhujy.ImageHandler
{
    public class TextWatermarker : Watermarker
    {
        #region Properties
 
        private string watermarkText;
        public string WatermarkText
        {
            get
            {
                return watermarkText;
            }
            set
            {
                watermarkText = value;
            }
        }
 
        // 自动计算最合适的水印文本字体大小
        private bool autoSize = true;
        public bool AutoSize
        {
            get
            {
                return autoSize;
            }
            set
            {
                autoSize = value;
            }
        }
 
        private double fontSizePercent;
        public double FontSizePercent
        {
            get { return fontSizePercent; }
            set {
                fontSizePercent = value &gt; 1 ? 1 : (value &lt;= 0.01 ? 0.01 : value);
            }
        }
 
        private List&lt;Font&gt; fonts = new List&lt;Font&gt;();
        public List&lt;Font&gt; Fonts
        {
            get
            {
                return fonts;
            }
            set
            {
                fonts = value;
            }
        }
 
        private Font bestFont = new Font("Arial", 12, FontStyle.Regular, GraphicsUnit.Pixel);
        public Font BestFont{
            get{
                return bestFont;
            }
            set
            {
                bestFont = value;
            }
        }
 
        private StringFormat StringFormat
        {
            get
            {
                StringFormat format = new StringFormat();
                if (this.ComputeX)
                {
                    switch (this.HorizontalPosition)
                    {
                        case WatermarkHorizontalPostion.Left:
                            format.Alignment = StringAlignment.Near;
                            break;
 
                        case WatermarkHorizontalPostion.Center:
                            format.Alignment = StringAlignment.Center;
                            break;
 
                        case WatermarkHorizontalPostion.Right:
                            format.Alignment = StringAlignment.Far;
                            break;
                    }
                }
                else
                {
                    format.Alignment = StringAlignment.Near;
                }
 
                return format;
            }
        }
 
        #endregion
 
        #region Constructor
 
        public TextWatermarker(Image originImage, string watermarkText) : base(originImage)
        {
            this.WatermarkText = watermarkText;
 
            // Default values
            this.Fonts.Add(new Font("Arial", 18, FontStyle.Regular, GraphicsUnit.Pixel));
            this.Fonts.Add(new Font("Arial", 16, FontStyle.Regular, GraphicsUnit.Pixel));
            this.Fonts.Add(new Font("Arial", 14, FontStyle.Regular, GraphicsUnit.Pixel));
            this.Fonts.Add(new Font("Arial", 12, FontStyle.Regular, GraphicsUnit.Pixel));
            this.Fonts.Add(new Font("Arial", 10, FontStyle.Regular, GraphicsUnit.Pixel));
            this.Fonts.Add(new Font("Arial", 8, FontStyle.Regular, GraphicsUnit.Pixel));
            this.Fonts.Add(new Font("Arial", 6, FontStyle.Regular, GraphicsUnit.Pixel));
            this.Fonts.Add(new Font("Arial", 4, FontStyle.Regular, GraphicsUnit.Pixel));
            this.FontSizePercent = 30.00 / 480.00;
            this.AutoSize = true;
        }
 
        #endregion
 
        #region Methods

        public void ChangeFontFamily(string fontFamily)
        {
            FontFamily ff = new FontFamily(fontFamily);
            for (int i = 0; i &lt; this.Fonts.Count; i++)
            {
                this.Fonts[i] = new Font(ff, this.Fonts[i].Size, this.Fonts[i].Style, this.Fonts[i].Unit, this.Fonts[i].GdiCharSet, this.Fonts[i].GdiVerticalFont);
            }
            this.BestFont = new Font(ff, this.BestFont.Size, this.BestFont.Style, this.BestFont.Unit, this.BestFont.GdiCharSet, this.BestFont.GdiVerticalFont);
        }
 
        protected override SizeF ComputeWatermarkSize()
        {
            FindAvailableMaxSizedFont();
            return this.WatermarkSize;
        }
 
        protected override void UpdateXY()
        {
            if (this.ComputeX)
            {
                switch (this.HorizontalPosition)
                {
                    case WatermarkHorizontalPostion.Left:
                        this.X = this.HorizontalMarginPixel;
                        break;
 
                    case WatermarkHorizontalPostion.Center:
                        this.X = this.OriginImage.Width / 2;
                        break;
 
                    case WatermarkHorizontalPostion.Right:
                        this.X = (this.OriginImage.Width - this.HorizontalMarginPixel);
                        break;
 
                    default:
                        break;
                }
            }
 
            if (this.ComputeY)
            {
                switch (this.VerticalPosition)
                {
                    case WatermarkVerticalPostion.Top:
                        this.Y = this.VerticalMarginPixel;
                        break;
 
                    case WatermarkVerticalPostion.Middle:
                        this.Y = this.OriginImage.Height / 2 - this.WatermarkSize.Height / 2;
                        break;
 
                    case WatermarkVerticalPostion.Bottom:
                        this.Y = (this.OriginImage.Height - this.VerticalMarginPixel - this.WatermarkSize.Height);
                        break;
 
                    default:
                        break;
                }
            }
        }
 
        protected override Image AddWatermarkToOriginImage()
        {
            this.WatermarkedImage = this.OriginImage;
            Graphics g = Graphics.FromImage(this.WatermarkedImage);
            g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;
            SolidBrush semiTransBrushShadow = new SolidBrush(this.ShadowColor);
            
            StringFormat format = this.StringFormat;
            g.DrawString(this.WatermarkText, this.BestFont, semiTransBrushShadow, new PointF(this.X + this.ShadowOffsetX, this.Y + this.ShadowOffsetY), format);
            SolidBrush semiTransBrush = new SolidBrush(this.ForeColor);
            g.DrawString(this.WatermarkText, this.BestFont, semiTransBrush, new PointF(this.X, this.Y), format);
            g.Dispose();
 
            return this.WatermarkedImage;
        }
 
        private Font FindAvailableMaxSizedFont()
        {
            if (this.AutoSize)
            {
                this.BestFont = FindAvailableMaxSizedFont(false);
                if (this.BestFont.Size &gt;= 16)
                {
                    return this.BestFont;
                }
                else
                {
                    return FindAvailableMaxSizedFont(true); 
                }
            }
            else
            {
                return FindAvailableMaxSizedFont(true);
            }
        }
 
        private Font FindAvailableMaxSizedFont(bool byAbsoluteSizes)
        {
            if (byAbsoluteSizes)
            {
                this.Fonts.Sort(delegate(Font font1, Font font2) { return font2.Size.CompareTo(font1.Size); });
                SizeF size = new SizeF();
                Bitmap image = new Bitmap(1, 1);
                Graphics g = Graphics.FromImage(image);
 
                for (int i = 0; i &lt; this.Fonts.Count; i++)
                {
                    //size = MeasureSize(this.WatermarkText, this.Fonts[i]);
                    size = g.MeasureString(this.WatermarkText, this.Fonts[i]);
                    if ((ushort)(size.Width + this.HorizontalMarginPixel * 2) &lt; (ushort)this.OriginImage.Width &amp;&amp; (ushort)(size.Height + this.VerticalMarginPixel * 2) &lt; (ushort)this.OriginImage.Height)
                    {
                        g.Dispose();
                        image.Dispose();
                        this.WatermarkSize = size;
                        this.BestFont = this.fonts[i];
                        return this.Fonts[i];
                    }
                }
 
                g.Dispose();
                image.Dispose();
 
                this.WatermarkSize = new SizeF(0, 0);
                return null;
            }
            else
            {
                int fontSize = (int)(this.OriginImage.Height * this.FontSizePercent);
                fontSize = fontSize &gt;= 1 ? fontSize : 1;
                this.BestFont = new Font(this.BestFont.FontFamily, fontSize, this.BestFont.Style, this.BestFont.Unit);
                this.WatermarkSize = MeasureSize(this.WatermarkText, this.BestFont);
                if ((ushort)(this.WatermarkSize.Width + this.HorizontalMarginPixel * 2) &lt; (ushort)this.OriginImage.Width &amp;&amp; (ushort)(this.WatermarkSize.Height + this.VerticalMarginPixel * 2) &lt; (ushort)this.OriginImage.Height)
                {
                    return this.BestFont;
                }
                else
                {
                    this.WatermarkSize = new SizeF(0, 0);
                    return null;
                }
            }
        }
 
        private SizeF MeasureSize(string text, Font font)
        {
            // Use a test image to measure the text.
            Bitmap image = new Bitmap(1, 1);
            Graphics g = Graphics.FromImage(image);
            SizeF size = g.MeasureString(text, font);
            g.Dispose();
            image.Dispose();
 
            return size;
        }
 
        #endregion
    }
}
 </pre>
<p>&nbsp;</p>
<h1><span style="color: #800080;">四、总结：</span></h1>
<p>这里采用模板设计模式，可复用性高，能被引用在多种工程之中；可扩展性强，比如当有需要添加HTML水印时，只需要新建一个HtmlWatermarker类，并实现模板类Watermarker中的相关方法即可，不需要更改任何现有代码。</p>
<p>注意，模板设计模式很好地遵循了面向对象设计中的一个重要原则：对修改关闭，对扩展开放。</p>
<h1><span style="color: #800080;">五、相关文件下载：</span></h1>
<p>DLL 文件(若仅需使用)：<a href="/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f7%2fImageHandler.dll">ImageHandler.dll (18.00 kb)</a></p>
<p>整个项目文件(若还需开发)：<a href="/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f7%2fImageHandler.rar">ImageHandler.rar (45.03 kb)</a></p>
<p>&nbsp;</p>
<p>[donate: www.zizhujy.com]</p>