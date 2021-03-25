---
stackbit_url_path: >-
  posts/使用-HttpHandler-对-jscss-文件进行压缩
title: '使用 HttpHandler 对 js/css 文件进行压缩'
date: '2011-10-05 07:33:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - HttpHandler
  - css
  - javascript
  - js
  - 压缩
canonical_url: https://be-net.azurewebsites.net/post/2011/10/05/使用-HttpHandler-对-jscss-文件进行压缩
template: post
---
<h1><span style="color: #9b00d3;"><span style="font-weight: bold;">一、简介</span></span></h1>
<p>在对网站进行开发时，为了给开发人员以好的可读性，需要对代码进行良好的排版，给变量起有意义的名字，进行合理的注释。然而，当网页呈现在用户面前时，之前提及的都不再重要，而另一方面，网页的呈现速度则变得很重要，这时候，又需要对代码进行压缩（以减少文件大小，节省网络带宽，从而加快了页面的加载时间），删掉不必要的空白字符，缩短变量名，删除注释等。如果网站上线后仍然一直处于持续更新状态，则每次在发布前压缩代码就变成了重复性的劳动。如何简化甚至省略掉这个重复性劳动呢？</p>
<h1><span style="color: #9b00d3;"><span style="font-weight: bold;">二、解决方案一</span></span></h1>
<h2>使用外置的代码压缩程序，配置它在每次网站编译前执行。（这是一种简化重复性劳动的方法）</h2>
<p>我看到微软项目中使用了一个Crunch.exe的程序，在网站项目配置它在每次编译前执行，专门用来压缩指定的js/css文件。这个方法的确可以奏效，但是我认为它有很多缺点：</p>
<ul>
<li>要引用外置程序，这很讨厌</li>
<li>要在网站项目做配置，使得它在每次编译前执行</li>
<li>要维护一个xml文件，以指定哪些js/css文件需要压缩。这很不灵活，每次新增一个需要压缩的文件，都要去修改这个xml文件</li>
<li>要配置一些难记的命令</li>
<li>由于这个Crunch.exe程序的引入，使得网站项目所在的路径中，任何文件夹名不得含有空格！否则这个程序将会执行失败，导致整个项目的编译失败！这点最令人讨厌！我曾吃过亏，在一个微软项目(给MSN的客户NBC做的网站)中，某一天我发现好端端的网站工程，老是编译失败，百思不得其解，找了很久才发现是由于这个原因！</li>
</ul>
<h1><span style="font-weight: bold; color: #9b00d3;">三、解决方案二</span></h1>
<h2>使用HttpHandler，针对js/css文件的请求，给予压缩响应。（这从根本上省掉了发布网站前的代码压缩工作！）</h2>
<p>这个是我从BlogEngine.NET项目中学来的。分别写好JavaScriptHandler和CssHandler，再在Web.Config中做配置，将对js文件的请求，交由JavaScriptHandler来处理，而将对css文件的请求，交由CssHandler处理。</p>
<h1><span style="font-weight: bold; color: #9b00d3;">四、解决方案二原理剖析</span></h1>
<p>这个解决方案的两个Handler，分别对js文件和css文件进行压缩，不用担心影响服务器性能，因为它设置了缓存，除非源文件有修改，否则就一直调用压缩好的缓存版代码给予响应，所以针对同一代码文件的所有请求，只需要压缩一次。</p>
<p>这两个Handler还会对请求的查询字符串进行检查，看看是否有?minify=true这样的查询字符串存在，如果有才压缩，如果没有就不压缩。这是一个非常灵活的做法，即你可以在网站中灵活地配置是否要压缩某个代码文件。也就是说，只要你配置minify=true，则用户浏览你的网页时会非常快。如果他/她感觉你的网站很酷，想要学习一下，那么它会去查看你的源代码，这时候，他/她只需要将minify=true删除，便能够查看到你的开发版代码（可读性非常好）。（当然，如果你不愿意分享，则不要采用这种方式，你可以采用解决方案一）</p>
<p>对于JavaScriptHandler，这里引用了一个JavascriptMinifier的工具类。在下面的实现一节里给出了它的源代码。</p>
<h1><span style="color: #9b00d3;"><span style="font-weight: bold;">五、解决方案二的实现</span></span></h1>
<p>1. 引用JavaScriptMinifier类，下面给出它的源码，你可以直接添加到你的网站工程中。这里将它封装在了zizhujy.Utility命名空间内，你也可以修改成你自己的命名空间，只要在后面引用时也作相应修改就好。</p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Ajax.Utilities;

namespace zizhujy.Utility
{
    /// &lt;summary&gt;
    /// Helper class for performing minification of Javascript and CSS.
    /// &lt;/summary&gt;
    /// &lt;remarks&gt;
    /// 
    /// This class is basically a wrapper for the AjaxMin library(lib/AjaxMin.dll).
    /// http://ajaxmin.codeplex.com/
    /// 
    /// There are no symbols that come with the AjaxMin dll, so this class gives a bit of intellisense 
    /// help for basic control. AjaxMin is a pretty dense library with lots of different settings, so
    /// everyone's encouraged to use it directly if they want to.
    /// 
    /// &lt;/remarks&gt;
    public sealed class JavascriptMinifier
    {

        private Microsoft.Ajax.Utilities.Minifier ajaxMinifier = new Microsoft.Ajax.Utilities.Minifier();

        /// &lt;summary&gt;
        /// Creates a new Minifier instance.
        /// &lt;/summary&gt;
        public JavascriptMinifier()
        {
            this.RemoveWhitespace = true;
            this.PreserveFunctionNames = true;
            this.VariableMinification = VariableMinification.None;
        }

        #region "Methods"

        /// &lt;summary&gt;
        /// Builds the required CodeSettings class needed for the Ajax Minifier.
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private CodeSettings CreateCodeSettings()
        {
            var codeSettings = new CodeSettings();
            codeSettings.MinifyCode = false;
            codeSettings.OutputMode = (this.RemoveWhitespace ? OutputMode.SingleLine : OutputMode.MultipleLines);

            // MinifyCode needs to be set to true in order for anything besides whitespace removal
            // to be done on a script.
            codeSettings.MinifyCode = this.ShouldMinifyCode;
            if (this.ShouldMinifyCode)
            {

                switch (this.VariableMinification)
                {
                    case VariableMinification.None:
                        codeSettings.LocalRenaming = LocalRenaming.KeepAll;
                        break;

                    case VariableMinification.LocalVariablesOnly:
                        codeSettings.LocalRenaming = LocalRenaming.KeepLocalizationVars;
                        break;

                    case VariableMinification.LocalVariablesAndFunctionArguments:
                        codeSettings.LocalRenaming = LocalRenaming.CrunchAll;
                        break;
                }
                // This is being set by default. A lot of scripts use eval to parse out various functions
                // and objects. These names need to be kept consistant with the actual arguments.
                codeSettings.EvalTreatment = EvalTreatment.MakeAllSafe;


                // This makes sure that function names on objects are kept exactly as they are. This is
                // so functions that other non-minified scripts rely on do not get renamed.
                codeSettings.PreserveFunctionNames = this.PreserveFunctionNames;

            }


            return codeSettings;
        }


        /// &lt;summary&gt;
        /// Gets the minified version of the passed in script.
        /// &lt;/summary&gt;
        /// &lt;param name="script"&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public string Minify(string script)
        {
            if (this.ShouldMinify)
            {
                if (String.IsNullOrEmpty(script))
                {
                    return string.Empty;
                }
                else
                {
                    return this.ajaxMinifier.MinifyJavaScript(script, this.CreateCodeSettings());
                }
            }

            return script;
        }

        #endregion

        #region "Properties"

        /// &lt;summary&gt;
        /// Gets or sets whether this Minifier instance should minify local-scoped variables.
        /// &lt;/summary&gt;
        /// &lt;remarks&gt;
        /// 
        /// Setting this value to LocalVariablesAndFunctionArguments can have a negative impact on some scripts.
        /// Ex: A pre-minified jQuery will fail if passed through this. 
        /// 
        /// &lt;/remarks&gt;
        public VariableMinification VariableMinification { get; set; }

        /// &lt;summary&gt;
        /// Gets or sets whether this Minifier instance should preserve function names when minifying a script.
        /// &lt;/summary&gt;
        /// &lt;remarks&gt;
        /// 
        /// Scripts that have external scripts relying on their functions should leave this set to true. 
        /// 
        /// &lt;/remarks&gt;
        public bool PreserveFunctionNames { get; set; }

        /// &lt;summary&gt;
        /// Gets or sets whether the &lt;see cref="BlogEngine.Core.JavascriptMinifier"/&gt; instance should remove
        /// whitespace from a script.
        /// &lt;/summary&gt;
        public bool RemoveWhitespace { get; set; }

        private bool ShouldMinifyCode
        {
            get
            {
                //  return true;
                return ((!PreserveFunctionNames) || (this.VariableMinification != VariableMinification.None));
            }
        }

        private bool ShouldMinify
        {
            get
            {
                return ((this.RemoveWhitespace) || (this.ShouldMinifyCode));
            }
        }

        #endregion


    }

    /// &lt;summary&gt;
    /// Represents the way variables should be minified by a Minifier instance.
    /// &lt;/summary&gt;
    public enum VariableMinification
    {
        /// &lt;summary&gt;
        /// No minification will take place.
        /// &lt;/summary&gt;
        None = 0,

        /// &lt;summary&gt;
        /// Only variables that are local in scope to a function will be minified.
        /// &lt;/summary&gt;
        LocalVariablesOnly = 1,

        /// &lt;summary&gt;
        /// Local scope variables will be minified, as will function parameter names. This can have a negative impact on some scripts, so test if you use it! 
        /// &lt;/summary&gt;
        LocalVariablesAndFunctionArguments = 2

    }

}</pre>
<p>2. 在网站工程中添加JavaScriptHandler类，下面给出它的源码：</p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Security;
using System.Web.Caching;
using zizhujy.Utility;
using System.Net;

namespace zizhujy.HttpHandlers
{
    /// &lt;summary&gt;
    /// Removes whitespace in all stylesheets added to the handler of the HTML document
    /// &lt;/summary&gt;
    /// &lt;remarks&gt;
    /// 
    /// This handler uses an external library to perform minification of scripts.
    /// See the zizhujy.Utility.JavascriptMinifier class for more details.
    /// 
    /// &lt;/remarks&gt;
    public class JavaScriptHandler : IHttpHandler
    {
        #region Properties

        /// &lt;summary&gt;
        ///     Gets a value indicating whether another request can use the &lt;see cref="T:System.Web.IHttpHandler"&gt;&lt;/see&gt; instance.
        /// &lt;/summary&gt;
        /// &lt;value&gt;&lt;/value&gt;
        /// &lt;returns&gt;true if the &lt;see cref="T:System.Web.IHttpHandler"/&gt; instance is reusable; otherwise, false.&lt;/returns&gt;
        public bool IsReusable
        {
            get { return false; }
        }

        #endregion

        #region Implemented Interfaces

        /// &lt;summary&gt;
        /// Enables processing of HTTP Web requests by a custom
        ///     HttpHandler that implements the &lt;see cref="T:System.Web.IHttpHandler"/&gt; interface.
        /// &lt;/summary&gt;
        /// &lt;param name="context"&gt;
        /// An &lt;see cref="T:System.Web.HttpContext"/&gt; object that provides
        ///     references to the intrinsic server objects
        ///     (for example, Request, Response, Session, and Server) used to service HTTP requests.
        /// &lt;/param&gt;
        public void ProcessRequest(HttpContext context)
        {
            var request = context.Request;
            string path = request.Path;

            if (string.IsNullOrEmpty(path))
            {
                return;
            }

            string rawUrl = request.RawUrl.Trim();
            string cacheKey = context.Server.HtmlDecode(rawUrl);
            string script = (string)context.Cache[cacheKey];
            bool minify = ((request.QueryString["minify"] != null) &amp;&amp; (request.QueryString["minify"].ToString().Trim() != "false"));

            if (string.IsNullOrEmpty(script))
            {
                script = RetrieveLocalScript(path, cacheKey, minify);
            }

            if (string.IsNullOrEmpty(script))
            {
                return;
            }

            SetHeaders(script.GetHashCode(), context);
            context.Response.Write(script);
        }

        #endregion

        #region Methods

        /// &lt;summary&gt;
        /// Retrieves the local script from the disk
        /// &lt;/summary&gt;
        /// &lt;param name="file"&gt;The file name.&lt;/param&gt;
        /// &lt;param name="cacheKey"&gt;The key used to insert this script into the cache.&lt;/param&gt;
        /// &lt;param name="minify"&gt;Whether or not the local script should be minified&lt;/param&gt;
        /// &lt;returns&gt;The retrieved local script.&lt;/returns&gt;
        private static string RetrieveLocalScript(string file, string cacheKey, bool minify)
        {
            if(StringComparer.OrdinalIgnoreCase.Compare(Path.GetExtension(file), ".js") != 0) {
                throw new SecurityException("No access");
            }
            try{
                var path = HttpContext.Current.Server.MapPath(file);
                if(File.Exists(path)){
                    string script;
                    using (var reader = new StreamReader(path)){
                        script = reader.ReadToEnd();
                    }

                    script =ProcessScript(script, file, minify);
                    HttpContext.Current.Cache.Insert(cacheKey, script, new CacheDependency(path));
                    return script;
                }
            }catch(Exception ex) {
            }

            return string.Empty;
        }

        /// &lt;summary&gt;
        /// Call this method for any extra processing that needs to be done on a script resource before
        /// being wriiten to the response.
        /// &lt;/summary&gt;
        /// &lt;param name="script"&gt;&lt;/param&gt;
        /// &lt;param name="filePath"&gt;&lt;/param&gt;
        /// &lt;param name="shouldMinify"&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private static string ProcessScript(string script, string filePath, bool shouldMinify)
        {
            if ((shouldMinify))
            {
                var min = new JavascriptMinifier();
                min.VariableMinification = VariableMinification.LocalVariablesOnly;

                return min.Minify(script);
            }
            else
            {
                return script;
            }
        }

        private static void SetHeaders(int hash, HttpContext context)
        {
            var response = context.Response;
            response.ContentType = "text/jvascript";
            var cache = response.Cache;
            cache.VaryByHeaders["Accept-Encoding"] = true;
            cache.SetExpires(DateTime.Now.ToUniversalTime().AddDays(7));
            cache.SetMaxAge(new TimeSpan(7, 0, 0, 0));
            cache.SetRevalidation(HttpCacheRevalidation.AllCaches);

            var etag = string.Format("\"{0}\"", hash);
            var incomingEtag = context.Request.Headers["If-None-Match"];

            cache.SetETag(etag);
            cache.SetCacheability(HttpCacheability.Public);

            if (string.Compare(incomingEtag, etag) != 0)
            {
                return;
            }

            response.Clear();
            response.StatusCode = (int)HttpStatusCode.NotModified;
            response.SuppressContent = true;
        }

        #endregion
    }
}</pre>
<p>3. 在网站工程中添加CssHandler类，下面给出它的源码：</p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Security;
using System.Web.Caching;
using System.Text.RegularExpressions;
using System.Net;

namespace zizhujy.HttpHandlers
{
    /// &lt;summary&gt;
    /// Removes whitespace in all stylesheets added to the header of the HTML document.
    /// &lt;/summary&gt;
    public class CssHandler : IHttpHandler
    {
        #region Properties

        /// &lt;summary&gt;
        ///     Gets a value indicating whether another request can use the &lt;see cref="T:System.Web.IHttpHandler"&gt;&lt;/see&gt; instance.
        /// &lt;/summary&gt;
        /// &lt;value&gt;&lt;/value&gt;
        /// &lt;returns&gt;true if the &lt;see cref="T:System.Web.IHttpHandler"/&gt; instance is reusable; otherwise, false.&lt;/returns&gt;
        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

        #endregion

        #region Implemented Interfaces

        /// &lt;summary&gt;
        /// Enables processing of HTTP Web request by a custom 
        ///     HttpHandler that implements the &lt;see cref="T:System.Web.IHttpHandler"/&gt; interface.
        /// &lt;/summary&gt;
        /// &lt;param name="context"&gt;
        /// An &lt;see cref="T:System.Web.HttpContext"/&gt; object that provides 
        ///     references to the intrinsic server objects
        ///     (for example, Request, Response, Session, and Server) used to server HTTP requests.
        /// &lt;/param&gt;
        public void ProcessRequest(HttpContext context)
        {
            var request = context.Request;
            string path = request.Path;

            if (!string.IsNullOrEmpty(path))
            {
                if (StringComparer.InvariantCultureIgnoreCase.Compare(Path.GetExtension(path), ".css") != 0)
                {
                    throw new SecurityException("Invalid CSS file extension");
                }

                string cacheKey = request.RawUrl.Trim();
                string css = (string)context.Cache[cacheKey];
                bool minify = ((request.QueryString["minify"] != null) &amp;&amp; (request.QueryString["minify"].ToString().Trim() != "false"));

                if (String.IsNullOrEmpty(css))
                {
                    css = RetrieveLocalCss(path, cacheKey, minify);
                }

                // Make sure css isn't empty
                if (!string.IsNullOrEmpty(css))
                {
                    // Configure response headers
                    SetHeaders(css.GetHashCode(), context);

                    context.Response.Write(css);
                }
                else
                {
                    context.Response.Status = "404 Bad Request";
                }
            }
        }

        #endregion

        #region Methods

        /// &lt;summary&gt;
        /// This will make the browser and server keep the output
        ///     in its cache and thereby improve performance.
        /// &lt;/summary&gt;
        /// &lt;param name="hash"&gt;
        /// The hash number.
        /// &lt;/param&gt;
        /// &lt;param name="context"&gt;
        /// The context.
        /// &lt;/param&gt;
        private static void SetHeaders(int hash, HttpContext context)
        {

            var response = context.Response;
            response.ContentType = "text/css";

            var cache = response.Cache;
            cache.VaryByHeaders["Accept-Encoding"] = true;

            cache.SetExpires(DateTime.Now.ToUniversalTime().AddDays(7));
            cache.SetMaxAge(new TimeSpan(7, 0, 0, 0));
            cache.SetRevalidation(HttpCacheRevalidation.AllCaches);

            var etag = string.Format("\"{0}\"", hash);
            var incomingEtag = context.Request.Headers["If-None-Match"];

            cache.SetETag(etag);
            cache.SetCacheability(HttpCacheability.Public);

            if (String.Compare(incomingEtag, etag) != 0)
            {
                return;
            }

            response.Clear();
            response.StatusCode = (int)HttpStatusCode.NotModified;
            response.SuppressContent = true;
        }

        /// &lt;summary&gt;
        /// Retrieves the local CSS from the disk
        /// &lt;/summary&gt;
        /// &lt;param name="file"&gt;
        /// The file name.
        /// &lt;/param&gt;
        /// &lt;param name="cacheKey"&gt;
        /// The key used to insert this script into the cache.
        /// &lt;/param&gt;
        /// &lt;returns&gt;
        /// The retrieve local css.
        /// &lt;/returns&gt;
        private static string RetrieveLocalCss(string file, string cacheKey, bool minify)
        {
            var path = HttpContext.Current.Server.MapPath(file);
            try
            {
                string css;
                using (var reader = new StreamReader(path))
                {
                    css = reader.ReadToEnd();
                }

                css = ProcessCss(css, minify);
                HttpContext.Current.Cache.Insert(cacheKey, css, new CacheDependency(path));

                return css;
            }
            catch
            {
                return string.Empty;
            }
        }

        /// &lt;summary&gt;
        /// Call this method to do any post-processing on the css before its returned in the context response.
        /// &lt;/summary&gt;
        /// &lt;param name="css"&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private static string ProcessCss(string css, bool minify)
        {
            if (minify)
            {
                css = StripWhitespace(css);
                return css;
            }
            else
            {
                return css;
            }
        }

        /// &lt;summary&gt;
        /// Strips the whitespace from any .css file.
        /// &lt;/summary&gt;
        /// &lt;param name="body"&gt;
        /// The body string.
        /// &lt;/param&gt;
        /// &lt;returns&gt;
        /// The strip whitespace.
        /// &lt;/returns&gt;
        private static string StripWhitespace(string body)
        {

            body = body.Replace("  ", " ");
            body = body.Replace(Environment.NewLine, String.Empty);
            body = body.Replace("\t", string.Empty);
            body = body.Replace(" {", "{");
            body = body.Replace(" :", ":");
            body = body.Replace(": ", ":");
            body = body.Replace(", ", ",");
            body = body.Replace("; ", ";");
            body = body.Replace(";}", "}");

            // sometimes found when retrieving CSS remotely
            body = body.Replace(@"?", string.Empty);

            // body = Regex.Replace(body, @"/\*[^\*]*\*+([^/\*]*\*+)*/", "$1");
            body = Regex.Replace(
                body, @"(?&lt;=[&gt;])\s{2,}(?=[&lt;])|(?&lt;=[&gt;])\s{2,}(?= )|(?&lt;=&amp;ndsp;)\s{2,}(?=[&lt;])", String.Empty);

            // Remove comments from CSS
            body = Regex.Replace(body, @"/\*[\d\D]*?\*/", string.Empty);

            return body;
        }

        #endregion
    }
}</pre>
<p>4. 在Web.Config中作映射配置：</p>
<p>如果是IIS 7.5 或以上，则只需要作如下配置即可：</p>
<pre class="brush: xml">&lt;?xml version="1.0" encoding="utf-8"?&gt;

&lt;!--

  有关如何配置 ASP.NET 应用程序的详细信息，请访问

  http://go.microsoft.com/fwlink/?LinkId=152368

  --&gt;



&lt;configuration&gt;

	...

    &lt;system.webServer&gt;

        &lt;validation validateIntegratedModeConfiguration="false"/&gt;

        &lt;modules runAllManagedModulesForAllRequests="true"/&gt;

        &lt;handlers&gt;

            &lt;add name="ZiZhuJYJavaScriptHandler" path="*.js" verb="*" type="zizhujy.HttpHandlers.JavaScriptHandler, zizhujy" resourceType="Unspecified" preCondition="integratedMode"/&gt;

            &lt;add name="ZiZhuJYCssHandler" path="*.css" verb="*" type="zizhujy.HttpHandlers.CssHandler, zizhujy" resourceType="Unspecified" preCondition="integratedMode"/&gt;

        &lt;/handlers&gt;

    &lt;/system.webServer&gt;

	...

&lt;/configuration&gt;</pre>
<p>如果是IIS 5.1，则要按这样的格式作配置：</p>
<pre class="brush: xml">&lt;?xml version="1.0" encoding="utf-8"?&gt;

&lt;!--

  有关如何配置 ASP.NET 应用程序的详细信息，请访问

  http://go.microsoft.com/fwlink/?LinkId=152368

  --&gt;



&lt;configuration&gt;

	...

    &lt;system.web&gt;

        &lt;httpHandlers&gt;

            &lt;add path="*.js" verb="*" type="zizhujy.HttpHandlers.JavaScriptHandler, zizhujy" validate="false"/&gt;

            &lt;add path="*.css" verb="*" type="zizhujy.HttpHandlers.CssHandler, zizhujy" validate="false"/&gt;

        &lt;/httpHandlers&gt;

    &lt;/system.web&gt;

	...

&lt;/configuration&gt;</pre>
<p>5. 通过在需要压缩的文件名后面添加查询字符串?minify=true来启动压缩：</p>
<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;

&lt;head&gt;
...

    &lt;link href="/Content/css/functionGraffitiStyle.css?minify=true" rel="stylesheet" type="text/css" /&gt;

    &lt;link href="/Scripts/syntaxhighlighter_3.0.83/styles/shCore.css?minify=true" rel="stylesheet" type="text/css" /&gt;

    &lt;link href="/Scripts/syntaxhighlighter_3.0.83/styles/shThemeDefault.css?minify=true" rel="Stylesheet" type="text/css" /&gt;

    &lt;script src="/Scripts/flot/jquery.flot.js?minify=true" type="text/javascript"&gt;&lt;/script&gt;

    &lt;script src="/Scripts/FunctionGraffiti/jGraffiti-Math.js?minify=true" type="text/javascript"&gt;&lt;/script&gt;

    &lt;script src="/Scripts/FunctionGraffiti/jGraffiti.js?minify=true" type="text/javascript"&gt;&lt;/script&gt;

...

&lt;/head&gt;



&lt;body&gt;

...

&lt;/body&gt;

&lt;/html&gt;</pre>
<h1><span style="color: #9b00d3;"><span style="font-weight: bold;">六、解决方案二的总结</span></span></h1>
<p>个人认为解决方案二是代码压缩的最佳实践方案，它同时对开发人员和用户友好。和解决方案一相比，它有这些优点：</p>
<ul>
<li>它是内包的，不需要引用外部的奇怪程序，封装性好</li>
<li>它不插手编译过程，它是在第一次响应请求时进行压缩，之后调用缓存版本</li>
<li>不用维护另外的xml文件，只需要对那些你想要压缩的文件名后面添加一个查询字符串?minify=true即可启动压缩</li>
<li>?minify=true这个查询字符串太直观太好记了</li>
<li>没有格外的文件夹名要求，因此不会因为它的失败引起奇怪的编译过程错误</li>
</ul>
<h1><span style="color: #9b00d3;"><span>七、相关文件下载</span></span></h1>
<p>解决方案二需要在项目中引用一个DLL文件（AjaxMin.dll），请点击下面的链接下载：&nbsp;</p>
<p><a href="/blog/file.axd?file=2011%2f11%2fAjaxMin.zip">AjaxMin.zip (115.25 kb)</a></p>
<p>&nbsp;</p>
<p>[donate: <a href="http://www.zizhujy.com">www.zizhujy.com</a>]</p>