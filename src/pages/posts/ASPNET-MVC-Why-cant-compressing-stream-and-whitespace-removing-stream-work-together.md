---
stackbit_url_path: >-
  posts/ASPNET-MVC-Why-cant-compressing-stream-and-whitespace-removing-stream-work-together
title: 'ASP.NET MVC: Why can’t compressing stream and whitespace removing stream work together?'
date: '2013-09-02 07:53:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Compress
  - Stream
canonical_url: >-
template: post
---
<h2><span style="color: #9b00d3;">Problem:</span></h2>
<p>The other day, I wanted to employ some ActionFilterAttributes to totally compress my dynamically generated HTML before sending it to the client for network bandwidth saving and so improving the Page Load Time. So I searched on the internet and implemented 2 ActionFilterAttributes &ndash; RemoveWhitespacesAttribute and CompressContentAttribute. Both override the OnActionExecuted() method, the 1st one intercepts the filterContext that passed in and removes all the unnecessary whitespaces that contained in it, and the 2nd one intercepts the filterContext that passed in and gzips it. Very straight forward, I applied them to my controllers.</p>
<pre class="brush: csharp">...
    [CompressContent]
    [RemoveWhitespaces]
    public class HomeController : Controller
...</pre>
<p>The result astonished me that the page only shows as blank! I used Fiddler the inspect the response, and the fiddler detected the response seemed Gzip enabled, but when trying to decompress the stream, it said that the Gzip magic number is not valid!</p>
<p>Then I tried only apply one of the ActionFilterAttributes, and both scenarios worked. But if I applied them at the same time, the response would be a invalid stream and the web page can&rsquo;t be displayed.</p>
<h2><span style="color: #9b00d3;">Analyzing:</span></h2>
<p>At first I couldn&rsquo;t understand why can&rsquo;t the 2 ActionFilterAttributes work together, after a while, I looked into the constructors of the 2 streams that the 2 ActionFilterAttributes use and finally I figured out why.</p>
<pre class="brush: csharp">...
public class GZipStream : Stream {
	public GZipStream(Stream stream, CompressionMode mode);
...
public class HtmlWhitespaceRemovingHelper : Stream {
	public HtmlWhitespaceRemovingHelper(Stream responseStream)
...</pre>
<p>Both streams take a stream as the parameter, and they both are derived from Stream class, and they both override the Stream&rsquo;s Write() method. So here implements a decorator pattern. Both streams add extra logic to the original stream&rsquo;s Write() method. And unfortunately, when they were working together in the manner as the above shows, or as the following way:</p>
<pre class="brush: csharp">...
    [CompressContent]
    [RemoveWhitespaces]
    public class HomeController : Controller
...</pre>
<p>The Gzip stream firstly took in the original response stream, and gzipped it and then passed out the new wrapped stream. And then the HtmlWhitespaceRemovingHelper stream caught the Gzip wrapped stream, and removed the characters that smells like extra whitespaces, and then passed out the wrapped again stream, so oops, the gzipped stream were polluted and finally the client side received an invalid stream.</p>
<h2><span style="color: #9b00d3;">Conclusion:</span></h2>
<p>To make them can be working together, we have to make sure that the HtmlWhitespaceRemovingHelper stream firstly catch the original clean response stream, after it removing the redundant whitespaces, then pass the sanitized stream to the Gzip stream. Finally the client side would receive a valid gzipped stream, and after it ungzipped the stream, it would see a valid compact html without extra whitespaces. In a word, the rough picture should be like this:</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/WP_000249%20(1).jpg"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="ASP.NET MVC: Why can&rsquo;t compressing stream and whitespace removing stream work together?" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/WP_000249%20(1)_thumb.jpg" alt="ASP.NET MVC: Why can&rsquo;t compressing stream and whitespace removing stream work together?" width="663" height="480" border="0" /></a>&nbsp;</p>
<h2><span style="color: #9b00d3;">Solution:</span></h2>
<p>We can make them working together by applying them with specifying an execution order:</p>
<pre class="brush: csharp">...
    [CompressContent(Order = 9999)]
    [RemoveWhitespaces(Order = -1)]
    public class HomeController : Controller
...</pre>
<p>The Order = &ndash;1 makes RemoveWhitespace ActionFilterAttribte executes firstly and then other filters comes next, and finally the CompressContent ActionFilterAttribute by Order = 9999 which gzip the stream it gets.</p>
<p>The source code of the 2 ActionFilterAttributes are pasted in the last part. One thing worth noticing is in the code, I make the 2 streams detect the type of the stream they get, and only do their actions if the stream they get is the pure original response stream. The intent is to make sure to either gzip it or remove its unnecessary whitespaces. So finally I realized that I don&rsquo;t need to let both of them working together at all, because if the server has already enabled Gzip, then there is no need to do compressing nor whitespace removing any more. In other words, it is worthless of removing whitespaces if the stream would be gzipped before sending to client side. However, the whitespace removing can be regarded as kind of a failsafe option. So whatever happened, the client side would receive either a gzip compressed stream or a normal stream with whitespaces removed.</p>
<h2><span style="color: #9b00d3;">Source code:</span></h2>
<p><strong>RemoveWhitespacesAttribute.cs:</strong></p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using zizhujy.Utility;

namespace zizhujy.Attributes
{
    public class RemoveWhitespacesAttribute : ActionFilterAttribute 
    {
        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            var response = filterContext.HttpContext.Response;
            
            if (string.Equals(response.ContentType, "text/html", StringComparison.InvariantCultureIgnoreCase) &amp;&amp; response.Filter != null)
            {
                if (!(response.Filter is System.IO.Compression.GZipStream)
                    &amp;&amp; !(response.Filter is System.IO.Compression.DeflateStream)
                    &amp;&amp; !(response.Filter is zizhujy.Utility.HtmlWhitespaceRemovingHelper))
                {
                    response.Filter = new HtmlWhitespaceRemovingHelper(response.Filter);
                }
            }

            //base.OnActionExecuted(filterContext);
        }

        //public override void OnActionExecuting(ActionExecutingContext filterContext)
        //{
        //    ZiZhuJY.Helpers.Log.Info("Removing whitespaces");

        //    var response = filterContext.HttpContext.Response;

        //    if (string.Equals(response.ContentType, "text/html", StringComparison.InvariantCultureIgnoreCase) &amp;&amp; response.Filter != null)
        //    {
        //        response.Filter = new HtmlWhitespaceRemovingHelper(response.Filter);
        //    }

        //    ZiZhuJY.Helpers.Log.Info("Removed whitespaces");
        //}
    }
}</pre>
<p><strong>HtmlWhitespaceRemovingHelper.cs</strong></p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

namespace zizhujy.Utility
{
    public class HtmlWhitespaceRemovingHelper : Stream
    {
        private Stream @base;
        private StringBuilder sb = new StringBuilder();

        public HtmlWhitespaceRemovingHelper(Stream responseStream)
        {
            if (responseStream == null)
                throw new ArgumentNullException("responseStream");

            this.@base = responseStream;
        }

        public override void Write(byte[] buffer, int offset, int count)
        {
            string html = Encoding.UTF8.GetString(buffer, offset, count);

            //Thanks to Qtax
            //http://stackoverflow.com/questions/8762993/remove-white-space-from-entire-html-but-inside-pre-with-regular-expressions
            Regex regex = new Regex(@"(?&lt;=\s)\s+(?![^&lt;&gt;]*&lt;/textarea&gt;|[^&lt;&gt;]*&lt;/pre&gt;)", RegexOptions.IgnoreCase | RegexOptions.Singleline);
            //html = regex.Replace(html, match =&gt; string.Format("{0}", new string('_', match.Groups[0].Value.Length)));
            html = regex.Replace(html, string.Empty);

            buffer = Encoding.UTF8.GetBytes(html);
            this.@base.Write(buffer, 0, buffer.Length);
        }

        #region Other Members
        public override int Read(byte[] buffer, int offset, int count)
        {
            throw new NotSupportedException();
        }

        public override bool CanRead
        {
            get { return false; }
        }

        public override bool CanSeek
        {
            get { return false; }
        }

        public override bool CanWrite
        {
            get { return true; }
        }

        public override long Length
        {
            get { throw new NotSupportedException(); }
        }

        public override long Position
        {
            get
            {
                throw new NotSupportedException();
            }
            set
            {
                throw new NotSupportedException();
            }
        }

        public override void Flush()
        {
            this.@base.Flush();
        }

        public override long Seek(long offset, SeekOrigin origin)
        {
            throw new NotSupportedException();
        }

        public override void SetLength(long value)
        {
            throw new NotSupportedException();
        }
        #endregion
    }
}</pre>
<p><strong>CompressContentAttribute.cs</strong></p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using zizhujy.Utility;

namespace zizhujy.Attributes
{
    public class CompressContentAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            CompressResponse(filterContext);

            //base.OnActionExecuted(filterContext);
        }

        public static void CompressResponse(ActionExecutedContext filterContext)
        {
            ZiZhuJY.Helpers.Log.Info("Compressing Response");

            HttpResponse response = HttpContext.Current.Response;

            string acceptEncoding = HttpContext.Current.Request.Headers["Accept-Encoding"];

            if (!string.IsNullOrEmpty(acceptEncoding))
            {
                if (!(response.Filter is System.IO.Compression.GZipStream)
                    &amp;&amp; !(response.Filter is System.IO.Compression.DeflateStream)
                    &amp;&amp; !(response.Filter is zizhujy.Utility.HtmlWhitespaceRemovingHelper))
                {
                    if (acceptEncoding.Contains("gzip", StringComparison.InvariantCultureIgnoreCase))
                    {
                        response.Filter = new System.IO.Compression.GZipStream(response.Filter, System.IO.Compression.CompressionMode.Compress);
                        try
                        {
                            response.Headers.Remove("Content-Encoding");
                            response.AppendHeader("Content-Encoding", "gzip");
                        }
                        catch
                        {
                            try
                            {
                                response.AppendHeader("Content-Encoding", "gzip");
                                response.Headers["Content-Encoding"] = "gzip";
                            }
                            catch
                            {
                            }
                            finally
                            {
                                //filterContext.Exception = null;
                                //filterContext.ExceptionHandled = false;
                            }
                        }
                        finally { }

                        return;
                    }

                    if (acceptEncoding.Contains("deflate", StringComparison.InvariantCultureIgnoreCase))
                    {
                        response.Filter = new System.IO.Compression.DeflateStream(response.Filter, System.IO.Compression.CompressionMode.Compress);
                        try
                        {
                            response.Headers.Remove("Content-Encoding");
                            response.AppendHeader("Content-Encoding", "deflate");
                        }
                        catch
                        {
                            try
                            {
                                response.AppendHeader("Content-Encoding", "gzip");
                                response.Headers["Content-Encoding"] = "deflate";
                            }
                            catch
                            {
                            }
                            finally
                            {
                            }
                        }
                        finally { }

                        return;
                    }
                }
            }

        }
    }
}</pre>