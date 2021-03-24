---
stackbit_url_path: >-
  posts/add-watermark-to-image-using-csharp-and-gdiplus
title: '使用.NET的GDI+技术给图片加水印'
date: '2011-07-12 16:44:00'
excerpt: >-
  本文描述了使用.NET中的C#与GDI+来在图片上添加一个水印层的过程。
comments_count: 0
positive_reactions_count: 0
tags: 
  - C#
  - GDI+
  - Watermark
  - 水印
canonical_url: >-
template: post
---
<p>下载源文件：<a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f7%2fAddWatermark.zip">AddWatermark.zip (370.41 kb)</a></p>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=watermark_final.jpg"><img style="display: inline; border-width: 0px;" title="watermark_final" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=watermark_final_thumb.jpg" border="0" alt="Add watermark to image 给图片添加水印" width="492" height="370" /></a></p>
<p>注：原文在此：<a href="http://www.codeproject.com/KB/GDI-plus/watermark.aspx">http://www.codeproject.com/KB/GDI-plus/watermark.aspx</a>。</p>
<p>本文翻译和修改了原文。</p>
<hr />
<h2><strong><span style="color: #800080; font-size: x-large;">摘要</span></strong></h2>
<p>本文描述了使用.NET中的C#与GDI+来在图片上添加一个水印层的过程。</p>
<h2><span style="color: #800080; font-size: x-large;"><strong>简介</strong></span></h2>
<p>当在网页放置图片时，经常会有在其上添加一个水印与/或版权声明的需要。这种信息的添加帮助人们识别是谁创作了这张图片以及谁拥有对其的版权。如果手工来完成这种任务将会非常耗时而且不容易保持一致的效果。通过使用一些简单的技术如C#和GDI+，就可以很轻松地完成这一任务。</p>
<h2><span style="color: #800080; font-size: x-large;"><strong>总览</strong></span></h2>
<p>我将向你展示操纵图片的一系列技术。下面的一个清单，列出了其中的一些技术：</p>
<ul>
<li>在图片上插入文本并根据图片的尺寸来相应地定位 </li>
<li>动态地选择文本字体大小，以使可读性最高 </li>
<li>控制文本字符串的透明度 </li>
<li>替换位图中的特定颜色来达到透明的效果 </li>
<li>通过一个5x5颜色矩阵来改变图片的透明度 </li>
</ul>
<h2><span style="color: #800080; font-size: x-large;"><strong>确定图片</strong></span></h2>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=1305211066-1784_600-0_6-0.jpg"><img style="margin: 0px 20px 10px 0px; display: inline; float: left; border-width: 0px;" title="1305211066-1784_600-0_6-0" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=1305211066-1784_600-0_6-0_thumb.jpg" border="0" alt="Add watermark to image 给图片添加水印" width="244" height="184" align="left" /></a></p>
<p>这个过程中的第一步就是加载一张你想要添加水印于其上的源图片。这张图片可以是任意尺寸。在这个例子中我将使用一张宽640像素高480像素的照片。</p>
<p>紧接着主函数(static void Main(string[] args))的声明，定义两个string变量。第一个定义了寻找源图片、水印图片、以及输出结果新图片的位置。第二个变量将定义那个我们要用作水印的一部分的版权文本。</p>
<pre class="brush: csharp">            string workingDirectory = @"C:\";
            string copyright = "www.zizhujy.com";</pre>
<p>接下来，从指定的文件创建一个Image对象，并且分别定义一个变量来存储它的宽度和高度值。这些维度值会被用来创建一个每像素使用24比特存储颜色数据的Bitmap对象。最后这个Bitmap对象被用来创建一个新的Graphics对象。</p>
<pre class="brush: csharp">            Image photo = Image.FromFile(workingDirectory + "\\1305211066-1784_600-0_6-0.jpg");
            int width = photo.Width;
            int height = photo.Height;

            Bitmap bitmap = new Bitmap(width, height, PixelFormat.Format24bppRgb);
            Graphics g = Graphics.FromImage(bitmap);</pre>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=logo.png"><img style="margin: 0px 20px 10px 0px; display: inline; float: left; border-width: 0px;" title="logo" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=logo_thumb.png" border="0" alt="Add watermark to image 给图片添加水印" width="95" height="95" align="left" /></a> 下面的代码装入了水印图片。并且又一次分别定义了变量来存储它的宽度和高度值。</p>
<pre class="brush: csharp">Image imgWatermark = new Bitmap(workingDirectory + "\\logo.png"); 
int widthWatermark = imgWatermark.Width; 
int heightWatermark = imgWatermark.Height;</pre>
<h2><span style="color: #800080; font-size: x-large;"><strong>第1步 - 添加水印文本</strong></span></h2>
<p>下面的代码将photo以原尺寸的100%的比例从(x=0,&nbsp; y=0)的位置画到Graphics对象里。接下来所有的绘制都将发生在源图片的上方。</p>
<pre class="brush: csharp">            g.SmoothingMode = SmoothingMode.AntiAlias;
            g.DrawImage(photo, new Rectangle(0, 0, width, height), 0, 0, width, height, GraphicsUnit.Pixel);</pre>
<p>为了最大化版权信息文本我们将测试7种不同的字体大小，来找出我们能够用到源图片中的可行的最大的字体大小。为了有效地做到这点，我们将定义一个整数数组存储字体大小数值，然后循环遍历它们，用以测量在不同字体大小的情况下的版权文本字符串的长度。一旦我们找到了最佳大小值，我们就退出循环并将文本绘制在源图片上。</p>
<pre class="brush: csharp">   
            int[] sizes = new int[] { 16, 14, 12, 10, 8, 6, 4 };
            Font font = null;
            SizeF size = new SizeF();
            for (int i = 0; i &lt; 7; i++)
            {
                font = new Font("arial", sizes[i], FontStyle.Bold);
                size = g.MeasureString(copyright,font);

                if ((ushort)size.Width &lt; (ushort)width)
                    break;
            }</pre>
<p>因为源图片将会有不同的高度，固这里使用离底边5%的距离来绘制版权文本。并使用copyright字符串的高度来找出一个合适的y坐标值，用来绘制字符串。x坐标值可以通过计算图片的中心坐标，然后定义一个StringFormat对象并设置StringAlignment为Center来得到。</p>
<pre class="brush: csharp">int yPixlesFromBottom = (int)(height * .05);
            float yPosFromBottom = ((height - yPixlesFromBottom) - (size.Height / 2));
            float xCenterOfImg = (width / 2);

            StringFormat strFormat = new StringFormat();
            strFormat.Alignment = StringAlignment.Center;</pre>
<p>现在我们有了足够的定位坐标来创建一个60%黑（alpha值为153）的SolidBrush。在偏离合适位置右下方1像素的地方绘制copyright字符串。这个偏离做出了一种阴影效果。然后用一个白色的SolidBrush再次重复这个过程，将相同的文本直接绘制在前面绘制好的字符串上。</p>
<pre class="brush: csharp">            SolidBrush semiTransBrushShadow =   new SolidBrush(Color.FromArgb(153, 0, 0, 0));

            g.DrawString(copyright, font, semiTransBrushShadow, new PointF(xCenterOfImg + 1, yPosFromBottom + 1), strFormat);

            SolidBrush semiTransBrush = new SolidBrush(Color.FromArgb(153, 255, 255, 255));

            g.DrawString(copyright, font, semiTransBrush, new PointF(xCenterOfImg, yPosFromBottom), strFormat);</pre>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_26.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_26.png" border="0" alt="Add watermark to image 给图片添加水印" width="630" height="51" /></a></p>
<h2><span style="color: #800080; font-size: x-large;"><strong>第2步 - 添加图片水印</strong></span></h2>
<p>基于之前已经修改的源图片创建一个Bitmap。将它装入到一个新的Graphics对象。</p>
<pre class="brush: csharp">            Bitmap bitmapWatermark = new Bitmap(bitmap);

            Graphics gWatermark = Graphics.FromImage(bitmapWatermark);</pre>
<p>为了达到一种半透明效果的水印我们将通过定义一个ImageAttribute对象并分别设置它的两个属性来应用两种颜色操作。第一步是通过一个透明颜色（Alpha=0, R=0, G=0, B=0）来替换掉水印图片中的背景颜色（如绿色）。要做到这点我们将使用Colormap并定义一个RemapTable。下面我们将用透明颜色替换掉图片中的绿色分量。</p>
<pre class="brush: csharp">            ImageAttributes imageAttributes = new ImageAttributes();
            ColorMap colorMap = new ColorMap();

            colorMap.OldColor = Color.FromArgb(255, 0, 255, 0);
            colorMap.NewColor = Color.FromArgb(0, 0, 0, 0);
            ColorMap[] remapTable = { colorMap };

            imageAttributes.SetRemapTable(remapTable, ColorAdjustType.Bitmap);</pre>
<p>第二步颜色操作是改变水印图片的透明度。这是通过应用一个包含RGBA空间坐标值的5x5的矩阵来做到的。通过设置第三行第三列（从零开始数）值为0.5f我们就达到了一定的不透明度（50%）。结果是透过这个水印图片能看到一点下面的图像。</p>
<pre class="brush: csharp">            float[][] colorMatrixElements = { 
               new float[] {1.0f,  0.0f,  0.0f,  0.0f, 0.0f},
               new float[] {0.0f,  1.0f,  0.0f,  0.0f, 0.0f},
               new float[] {0.0f,  0.0f,  1.0f,  0.0f, 0.0f},
               new float[] {0.0f,  0.0f,  0.0f,  0.5f, 0.0f},
               new float[] {0.0f,  0.0f,  0.0f,  0.0f, 1.0f}
            };

            ColorMatrix wmColorMatrix = new ColorMatrix(colorMatrixElements);

            imageAttributes.SetColorMatrix(wmColorMatrix, ColorMatrixFlag.Default, ColorAdjustType.Bitmap);</pre>
<p>通过将这两个颜色操作添加到imageAttributes对象里，我们能够绘制水印图片到源图片的右上方，我们还设置水印图片向下和向左偏离10像素。</p>
<pre class="brush: csharp">            int xPosOfWatermark = ((width - widthWatermark) - 10);
            int yPosOfWatermark = 10;

            gWatermark.DrawImage(imgWatermark, new Rectangle(xPosOfWatermark, yPosOfWatermark, widthWatermark, heightWatermark), 0, 0, widthWatermark, heightWatermark, GraphicsUnit.Pixel, imageAttributes);
        </pre>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_27.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_27.png" border="0" alt="Add watermark to image 给图片添加水印" width="224" height="244" /></a></p>
<p>我们最后一步就是要把源图片用新的加了水印的图片替换掉，并销毁两个Graphics对象，再将Image保存到文件系统。</p>
<pre class="brush: csharp">            photo = bitmapWatermark;
            g.Dispose();
            gWatermark.Dispose();

            
            photo.Save(workingDirectory + "\\watermark_final.jpg", ImageFormat.Jpeg);
            photo.Dispose();
            imgWatermark.Dispose();</pre>
<p>成功了！编译整个工程，运行它，你就会看见发生了什么！整个代码是相当的直观的，这些技术可以应用在数以百计的不同的图像操作上。可能性是没有止境的。</p>
<hr />
<h2><span style="color: #800080; font-size: x-large;"><strong>后面的博文将对在图片上添加水印做更深入的探讨。</strong></span></h2>
<p>附：<a href="/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f7%2fAddWatermark.zip">本程序源代码</a>是一个Windows Console工程，其Program.cs源代码如下：</p>
<pre class="brush: csharp">using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

namespace AddWatermark
{
    class Program
    {
        static void Main(string[] args)
        {
            string workingDirectory = @"C:\";
            string copyright = "www.zizhujy.com";

            Image photo = Image.FromFile(workingDirectory + "\\1305211066-1784_600-0_6-0.jpg");
            int width = photo.Width;
            int height = photo.Height;

            Bitmap bitmap = new Bitmap(width, height, PixelFormat.Format24bppRgb);
            Graphics g = Graphics.FromImage(bitmap);

            Image imgWatermark = new Bitmap(workingDirectory + "\\logo.png");
            int widthWatermark = imgWatermark.Width;
            int heightWatermark = imgWatermark.Height;

            g.SmoothingMode = SmoothingMode.AntiAlias;
            g.DrawImage(photo, new Rectangle(0, 0, width, height), 0, 0, width, height, GraphicsUnit.Pixel);

            int[] sizes = new int[] { 16, 14, 12, 10, 8, 6, 4 };
            Font font = null;
            SizeF size = new SizeF();
            for (int i = 0; i &lt; 7; i++)
            {
                font = new Font("arial", sizes[i], FontStyle.Bold);
                size = g.MeasureString(copyright,font);

                if ((ushort)size.Width &lt; (ushort)width)
                    break;
            }

            int yPixlesFromBottom = (int)(height * .05);
            float yPosFromBottom = ((height - yPixlesFromBottom) - (size.Height / 2));
            float xCenterOfImg = (width / 2);

            StringFormat strFormat = new StringFormat();
            strFormat.Alignment = StringAlignment.Center;

            SolidBrush semiTransBrushShadow =   new SolidBrush(Color.FromArgb(153, 0, 0, 0));

            g.DrawString(copyright, font, semiTransBrushShadow, new PointF(xCenterOfImg + 1, yPosFromBottom + 1), strFormat);

            SolidBrush semiTransBrush = new SolidBrush(Color.FromArgb(153, 255, 255, 255));

            g.DrawString(copyright, font, semiTransBrush, new PointF(xCenterOfImg, yPosFromBottom), strFormat);

            Bitmap bitmapWatermark = new Bitmap(bitmap);

            Graphics gWatermark = Graphics.FromImage(bitmapWatermark);

            ImageAttributes imageAttributes = new ImageAttributes();
            ColorMap colorMap = new ColorMap();

            colorMap.OldColor = Color.FromArgb(255, 0, 255, 0);
            colorMap.NewColor = Color.FromArgb(0, 0, 0, 0);
            ColorMap[] remapTable = { colorMap };

            imageAttributes.SetRemapTable(remapTable, ColorAdjustType.Bitmap);

            float[][] colorMatrixElements = { 
               new float[] {1.0f,  0.0f,  0.0f,  0.0f, 0.0f},
               new float[] {0.0f,  1.0f,  0.0f,  0.0f, 0.0f},
               new float[] {0.0f,  0.0f,  1.0f,  0.0f, 0.0f},
               new float[] {0.0f,  0.0f,  0.0f,  0.5f, 0.0f},
               new float[] {0.0f,  0.0f,  0.0f,  0.0f, 1.0f}
            };

            ColorMatrix wmColorMatrix = new ColorMatrix(colorMatrixElements);

            imageAttributes.SetColorMatrix(wmColorMatrix, ColorMatrixFlag.Default, ColorAdjustType.Bitmap);


            int xPosOfWatermark = ((width - widthWatermark) - 10);
            int yPosOfWatermark = 10;

            gWatermark.DrawImage(imgWatermark, new Rectangle(xPosOfWatermark, yPosOfWatermark, widthWatermark, heightWatermark), 0, 0, widthWatermark, heightWatermark, GraphicsUnit.Pixel, imageAttributes);

            photo = bitmapWatermark;
            g.Dispose();
            gWatermark.Dispose();

            photo.Save(workingDirectory + "\\watermark_final.jpg", ImageFormat.Jpeg);
            
            photo.Dispose();
            bitmapWatermark.Dispose();
            imgWatermark.Dispose();
        }
    }
}</pre>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f7%2fAddWatermark.zip">AddWatermark.zip (370.41 kb)</a></p>
<p>&nbsp;</p>
<p>[donate:www.zizhujy.com]</p>