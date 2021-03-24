---
stackbit_url_path: >-
  posts/ASPNET-MVC-3-本地化最佳实践
title: 'ASP.NET MVC 3 本地化最佳实践'
date: '2011-06-12 06:43:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - ASP.NET
  - MVC
  - Razor
  - 国际化
  - 最佳实践
  - 本地化
  - 资源
canonical_url: >-
template: post
---
<p>[<a title="Localization in ASP.NET MVC 3 Best Practice" href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/post/2011/06/13/Localization-in-ASPNET-MVC-3-Best-Practice.aspx">English version</a>]</p>
<p>注意：原文在这儿：<a href="http://geekswithblogs.net/shaunxu/archive/2010/05/06/localization-in-asp.net-mvc-ndash-3-days-investigation-1-day.aspx">http://geekswithblogs.net/shaunxu/archive/2010/05/06/localization-in-asp.net-mvc-ndash-3-days-investigation-1-day.aspx</a>，是Shaun写的。</p>
<p>这篇文章可以看成是它的升级版。</p>
<h1><span style="color: #800080;">相关文件下载：</span>&nbsp;</h1>
<p>&nbsp;示例工程文件：<a href="/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f7%2fwww.zizhujy.com.zip">www.zizhujy.com.zip (1.25 mb)</a></p>
<hr />
<h1><span style="color: #800080;">摘要</span></h1>
<p>在我们开发世界范围的网站应用时，本地化是一个常见的任务。要使你的应用能够本地化的关键点是将页面内容与逻辑实现分离开来。这就意味着，当你想在页面上显示一些东西时，绝不要将它们直接放在页面文件中（或者后台逻辑中）。你应该给要显示的内容一个键，通过这个键来链接到恰当文化设置所对应的真正的内容。</p>
<p>上周我一直忙着实现自己的ASP.NET MVC应用的本地化。那是我第一次做这样的工作，所以我花了大约3天的时间先研究了一番，经过尝试后，只花了一天的工夫，就打造出了一个最终的解决方案。来看看我做了些什么吧。</p>
<h1><span style="color: #800080;">ASP.NET 的本地化支持</span></h1>
<p>ASP.NET MVC 构建在ASP.NET runtime之上，所以ASP.NET提供的所有特性，都能被用到MVC中去，比如缓存、会话状态和本地化。在传统的ASP.NET网页表单年代我们使用资源文件来存储应用的不同文化的内容并且使用能够由Visual Studio自动生成的资源管理类来获取它们。在ASP.NET MVC中它们依然能够很好的工作。</p>
<p>举个例子，首先创建一个标准的ASP.NET MVC应用。我们可以看到，在视图页面与控制器类中，所有内容都是硬编码的。</p>
<p>现在我需要做的就是将所有的内容拿到页面与控制器的外头去。ASP.NET给了我们一个特殊的文件夹名叫App_GlobalResources，它里面放着各种不同文化内容的资源文件。在解决方案窗口中鼠标右击工程然后在添加ASP.NET文件夹菜单下点击创建相应的文件夹。</p>
<p>我创建了两个全局的资源文件，分别对应两种文化：英文和中文。因为准备将英文设置为该应用的默认文化，所以我首先创建了Application.resx文件，然后再创建了Application.zh-CN.resx。中间名&ldquo;zh-CN&rdquo;是中文（中华人民共和国）的文化名称。如果以后我需要这个应用的法国版本，那么我只需要简单地创建一个Application.fr-FR.resx文件即可。Visual Studio将帮助我们生成它们的访问类。</p>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_4.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_4.png" border="0" alt="image" width="267" height="405" /></a></p>
<p>然后让我们添加一些应用级别的文本信息到资源文件里。这里仅仅只需要一个应用名称。</p>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_5.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_5.png" border="0" alt="image" width="651" height="139" /></a></p>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_6.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_6.png" border="0" alt="image" width="650" height="147" /></a></p>
<p>然后我为所有的视图创建了一些本地资源文件，每个视图有2个本地资源文件（英文版和中文版）。截图如下：</p>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_7.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_7.png" border="0" alt="image" width="347" height="453" /></a></p>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_8.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_8.png" border="0" alt="image" width="639" height="126" /></a></p>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_9.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_9.png" border="0" alt="image" width="640" height="129" /></a></p>
<p>然后修改每个视图页面，这只需要将硬编码的文本信息替换相关资源文件中的内容即可。截图如下，注意标题与信息分别是从全局资源文件和本地资源文件中获取的（从不同资源文件中获取资源的代码有所不同）。</p>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_10.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_10.png" border="0" alt="image" width="642" height="150" /></a></p>
<p>如果你要复制上图中的代码，可以从下面复制。</p>
<pre class="brush: csharp">@{
    ViewBag.Title = HttpContext.GetLocalResourceObject("~/Views/Home/Index.cshtml", "Title").ToString();
    ViewBag.Message = Resources.Application.Name;
}

&lt;h2&gt;@ViewBag.Message&lt;/h2&gt;
&lt;p&gt;
    
&lt;/p&gt;</pre>
<p>&nbsp;</p>
<p>你也可以在控制器类中定义ViewBag的变量然后传递到视图页面中。比如，可以移除上图中的第三行代码，再在HomeController控制器类中定义ViewBag.Message变量，截图如下：</p>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_11.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_11.png" border="0" alt="image" width="495" height="493" /></a></p>
<p>上图中的代码你可以从下面复制：</p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using zizhujy.Attributes;

namespace zizhujy.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = Resources.Application.Name;

            return View();
        }

        public ActionResult About()
        {
            return View();
        }
    }
}</pre>
<h1><span style="color: #800080;">通过URL指定文化</span></h1>
<p>我们已经将内容移到了资源文件，但是我们的应用仍不支持本地化，因为还没有让我们指定文化设置的地方。为了尽可能地简单我们将使用URL来指明当前所选择的文化设置，这意味着如果我的URL是<a href="http://localhost/en-US/Home/Index">http://localhost/en-US/Home/Index</a>，那么页面将显示为英文，而如果URL为<a href="http://localhost/zh-CN/Home/Index">http://localhost/zh-CN/Home/Index</a>，那么页面就显示为中文。用户能够在他所停留的任何页面修改文化设置，并且能够在它分享URL时，其文化设置也能被传递。</p>
<p>为了达到这个目的，我修改了应用的路由，在工程根目录的Global.asax.cs文件中，我添加了一个有着新的匹配模式被称为culture的路由，它将在所有控制器之前被执行。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public static void RegisterRoutes(RouteCollection routes)   <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; routes.IgnoreRoute("{resource}.axd/{*pathInfo}");    <br /> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; routes.MapRoute(    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Localization", // 路由名称    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "{culture}/{controller}/{action}/{id}", // 带有参数的 URL    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; new { controller = "Home", action = "Index", id = UrlParameter.Optional }, // 参数默认值    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; new { culture = @"\w{2}(?:-\w{2})?" } // 限制culture格式，只有en-US, en, zh, zh-CN, fr, fr-FR, &hellip; 等这样的字符才会被识别为有效的文化路径    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; );    <br /> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; routes.MapRoute(    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Default", // 路由名称    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "{controller}/{action}/{id}", // 带有参数的 URL    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; new { controller = "Home", action = "Index", id = UrlParameter.Optional } // 参数默认值    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; );    <br /> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</p>
<blockquote>
<p>你也许注意到了我是添加了一个新的路由，而不是直接修改默认路由，将它变成{culture}模式。这是因为我们需要默认路由来呈现默认的不带文化设置请求，如<a href="http://localhost">http://localhost</a>或者<a href="http://localhost/Home/Index">http://localhost/Home/Index</a>。</p>
<p>如果我修改了默认路由，<a href="http://localhost/">http://localhost/</a> 就不能被路由了；并且<a href="http://localhost/Home/Index">http://localhost/Home/Index</a>将被路由为culture=Home,controller=Index，而这是不正确的。</p>
</blockquote>
<p>由于我们需要URL来控制文化设置，所以应该在每个Action执行之前先完成一些逻辑。在这种场合下，ActionFilter将是一个好的解决方案。在工程根目录下添加一个文件夹起名为Attribute，然后在该文件夹下添加一个类起名为LocalizationAttribute.cs。LocalizationAttribute.cs的源码如下：</p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading;
using System.Globalization;

namespace zizhujy.Attributes
{
    public class LocalizationAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext.RouteData.Values["culture"] != null &amp;&amp;
                !string.IsNullOrWhiteSpace(filterContext.RouteData.Values["culture"].ToString()))
            {
                // set the culture from the route data (url)
                var lang = filterContext.RouteData.Values["culture"].ToString();
                Thread.CurrentThread.CurrentUICulture = CultureInfo.CreateSpecificCulture(lang);
            }
            else
            {
                // load the culture info from the cookie
                var cookie = filterContext.HttpContext.Request.Cookies["_culture"];
                var langHeader = string.Empty;
                if (cookie != null)
                {
                    // set the culture by the cookie content
                    langHeader = cookie.Value;
                    Thread.CurrentThread.CurrentUICulture = CultureInfo.CreateSpecificCulture(langHeader);
                }
                else
                {
                    // set the culture by the location if not speicified
                    langHeader = filterContext.HttpContext.Request.UserLanguages[0];
                    Thread.CurrentThread.CurrentUICulture = CultureInfo.CreateSpecificCulture(langHeader);
                }
                // set the lang value into route data
                filterContext.RouteData.Values["culture"] = langHeader;
            }

            // save the location into cookie
            HttpCookie cookieToCreate = new HttpCookie("_culture", Thread.CurrentThread.CurrentUICulture.Name);
            cookieToCreate.Expires = DateTime.Now.AddYears(1);
            filterContext.HttpContext.Response.SetCookie(cookieToCreate);

            base.OnActionExecuting(filterContext);
        }
    }
}</pre>
<p>我创建了一个名为LocalizationAttribute的属性，它继承自ActionFilterAttribute并且重载了它的OnActionExecuting方法。我首先检查了RouteData。如果它包含了文化设置信息，那我就将它设置在CurrentThread的CurrentUICulture中，这将指示资源管理类（由Visual Studio根据资源文件生成）去获取相应的值。</p>
<p>如果在RouteData中没有文化设置信息，我就检查cookie并且如果cookie可用，就设置它。否则我就使用HttpRequest请求中的用户端文化，并且将它设置进当前线程中。</p>
<p>最后我将文化设置回RouteData，这样所有过来的action都将能获取到它并且将它保存到cookie中以备下次用户打开浏览器时看见自己上次的文化设定。</p>
<p>然后我将这个属性应用在HomeController控制器上，这样所有的action都将实行我的本地化逻辑。</p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using zizhujy.Attributes;

namespace zizhujy.Controllers
{
    [Localization]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = Resources.Application.Name;

            return View();
        }

        public ActionResult About()
        {
            return View();
        }
    }
}</pre>
<p>这时如果我们运行应用，并且在URL中加入文化设定，我们就会看到如下结果。</p>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_12.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_12.png" border="0" alt="image" width="564" height="212" /></a></p>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_13.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_13.png" border="0" alt="image" width="566" height="213" /></a></p>
<p>&nbsp;</p>
<h1><span style="color: #800080;">文化选择链接</span></h1>
<p>让用户通过URL修改文化不是个好方案。我们需要在页面顶部给他们一些链接来让他们能够随时改变文化。在ASP.NET MVC中最简便的方式就是创建一个HtmlHelper类，来为每种文化呈现出相应的链接。你可以将所有的Helper类放入工程根目录的Utility文件夹中。</p>
<pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Routing;
using System.Web.Mvc;
using System.Web.Mvc.Html;
using System.Threading;

namespace zizhujy.Utility
{
    public static class CultureSelectionHelper
    {
        public class Culture
        {
            public string Url { get; set; }
            public string ActionName { get; set; }
            public string ControllerName { get; set; }
            public RouteValueDictionary RouteValues { get; set; }
            public bool IsSelected { get; set; }

            public MvcHtmlString HtmlSafeUrl
            {
                get
                {
                    return MvcHtmlString.Create(Url);
                }
            }

        }

        public static Culture CultureUrl(this HtmlHelper helper, string cultureName, string cultureRouteName = "culture", bool strictSelected = false)
        {
            // set the input culture to lower
            cultureName = cultureName.ToLower();
            // retrieve the route values from the view context
            var routeValues = new RouteValueDictionary(helper.ViewContext.RouteData.Values);
            // copy the query strings into the route values to generate the link
            var queryString = helper.ViewContext.HttpContext.Request.QueryString;
            foreach (string key in queryString)
            {
                if (queryString[key] != null &amp;&amp; !string.IsNullOrWhiteSpace(key))
                {
                    if (routeValues.ContainsKey(key))
                    {
                        routeValues[key] = queryString[key];
                    }
                    else
                    {
                        routeValues.Add(key, queryString[key]);
                    }
                }
            }
            var actionName = routeValues["action"].ToString();
            var controllerName = routeValues["controller"].ToString();
            // set the culture into route values
            routeValues[cultureRouteName] = cultureName;
            // generate the culture specify url
            var urlHelper = new UrlHelper(helper.ViewContext.RequestContext, helper.RouteCollection);
            var url = urlHelper.RouteUrl("Localization", routeValues);
            // check whether the current thread ui culture is this culture
            var currentCultureName = Thread.CurrentThread.CurrentUICulture.Name.ToLower();
            var isSelected = strictSelected ? currentCultureName == cultureName : currentCultureName.StartsWith(cultureName);

            return new Culture() { Url = url, ActionName = actionName, ControllerName = controllerName, RouteValues = routeValues, IsSelected = isSelected };

        }

        public static MvcHtmlString CultureSelectionLink(this HtmlHelper helper, string cultureName, string selectedText, string unselectedText, IDictionary htmlAttributes, string cultureRouteName = "culture", bool strictSelected = false)
        {
            var culture = helper.CultureUrl(cultureName, cultureRouteName, strictSelected);
            var link = helper.RouteLink(culture.IsSelected ? selectedText : unselectedText, "Localization", culture.RouteValues, htmlAttributes);
            return link;
        }
    }
}</pre>
<p>我创建了一个类来存储文化链接信息。这能够用来为每种文化渲染一个链接，并且也能用来渲染一个链接图标、下拉列表或者任何我们想要的形式，如果需要的话。</p>
<p>CultureUrl方法主要负责生成选择器所需要的信息，如URL、RouteValues等。当用户点击了文化选择器时，它就从过来的请求中装载RouteData和Query String，切换文化部分，然后生成当前页面的包含该文化部分的URL。</p>
<p>CultureSelectionLink方法负责为文化设置渲染一个完整的Html链接，我们将在这个简单的例子中使用它。</p>
<p>因为我们需要能够在所有的页面中使用这个文化选择器，所以我们应该将链接放在共享的布局页面中。</p>
<p>首先我们创建一个部分页面，称为_CultureSelectionPartial.cshtml，它只包含了文化选择器。将它放在工程根目录的~/Views/Shared文件夹中。</p>
<p>@using zizhujy.Utility   <br /> <br />@Html.CultureSelectionLink("en-US", "[English(United States)]", "English(United States)", null)    <br />@Html.CultureSelectionLink("zh-CN", "[中文（简体）]", "中文（简体）", null)</p>
<blockquote>
<p>Don&rsquo;t forget to import the namespace of the CultureSelectionHelper class on top of the _CultureSelectionPartial page otherwise the extension method will not work.</p>
</blockquote>
<p>~/Views/Shared文件夹中的_Layout.cshtml文件的源码摘取如下：</p>
<pre class="brush: csharp">            <div id="logindisplay">
                @Html.Partial("_LogOnPartial") 
                @Html.Partial("_CultureSelectionPartial")
            </div></pre>
<p><a href="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_14.png"><img style="display: inline; border-width: 0px;" title="image" src="http://www.zizhujy.com/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=image_thumb_14.png" border="0" alt="image" width="641" height="264" /></a></p>
<h1><span style="color: #800080;">总结</span></h1>
<p>在这篇文章中，我解释了如何在ASP.NET MVC网页应用中实现本地化。我用资源文件作为本地化信息的容器，它由ASP.NET运行时提供。</p>
<p>本地化信息能够存储在任何地方。在这篇文章中我只是用到了资源文件，这样就能使用ASP.NET本地化支持类。但是我们也能够将它们存储在外部的XML文件中、数据库中或者Web Service中。最最关键的是，将内容与用法分离开来。我们能够隔离提供程序并且创建相关的接口，以使它可灵活多变和方便测试。</p>
<h1><span style="color: #800080;">相关文件下载：</span></h1>
<p>示例工程文件：<a href="/BlogEngine/BlogEngine/BlogEngine.NET/file.axd?file=2011%2f7%2fwww.zizhujy.com.zip">www.zizhujy.com.zip (1.25 mb)</a></p>
<h1><span style="color: #800080;">捐献</span></h1>
<p><span style="color: #800080;">
<p>写这篇文章是件很费时间的工作，如果你觉得本文对你有帮助，欢迎捐献一点银子。</p>
<p>[donate: www.zizhujy.com]</p>
</span></p>