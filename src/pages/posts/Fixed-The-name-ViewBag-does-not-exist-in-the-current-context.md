---
stackbit_url_path: >-
  posts/Fixed-The-name-ViewBag-does-not-exist-in-the-current-context
title: 'Fixed: The name "ViewBag" does not exist in the current context'
date: '2013-07-01 21:22:02.5090697'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - MVC
  - ViewBag
canonical_url: >-
template: post
---
<h2><font color="#9b00d3">Problem:</font></h2>  <p>Newly published a MVC web site, got a error message when trying to visit a page:</p>  <p><b>Compiler Error Message: </b>CS0103: The name 'ViewBag' does not exist in the current context</p>  <p><a href="http://zizhujy.com/blog/image.axd?picture=image_627.png"><img title="The name &#39;ViewBag&#39; does not exist in the current context" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="The name &#39;ViewBag&#39; does not exist in the current context" src="http://zizhujy.com/blog/image.axd?picture=image_thumb_316.png" width="635" height="396" /></a></p>  <h2><font color="#9b00d3">Analyze:</font></h2>  <p>The MVC sdk has already been installed on the host machine. By looking into the ViewBag’s definition, found it resides in the System.Web.Mvc.dll. So I copied this dll to the web folder’s ~\bin folder, but the error message is still there. And then I double checked the cshtml file and the error message, it was saying the ‘ViewBag’ does not exist in the current context, so I must lost the relative referencing statements. But adding these referencing statements in all the cshtml files is quite annoying, there must be a central place for adding these statements once and will take effects on all the cshtml files.</p>  <h2><font color="#9b00d3">Solution:</font></h2>  <p>By double checking the web.config, I found I’ve deleted some nodes that related these referencing statements some days earlier for fixing another issue. So I pasted these lost statements and then revisit the page, and then the error was gone!</p>  <p>If you removed these Razor related settings by purpose not to break some sub-applications, then you can paste these Razor related settings to the web.config under the ~/Views folder.</p>  <pre class="brush: xml">&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;configuration&gt;
  &lt;configSections&gt;
    &lt;sectionGroup name=&quot;system.web.webPages.razor&quot; type=&quot;System.Web.WebPages.Razor.Configuration.RazorWebSectionGroup, System.Web.WebPages.Razor, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35&quot;&gt;
      &lt;section name=&quot;host&quot; type=&quot;System.Web.WebPages.Razor.Configuration.HostSection, System.Web.WebPages.Razor, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35&quot; requirePermission=&quot;false&quot;/&gt;
      &lt;section name=&quot;pages&quot; type=&quot;System.Web.WebPages.Razor.Configuration.RazorPagesSection, System.Web.WebPages.Razor, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35&quot; requirePermission=&quot;false&quot;/&gt;
    &lt;/sectionGroup&gt;
  &lt;/configSections&gt;
  ...
  &lt;system.web.webPages.razor&gt;
    &lt;host factoryType=&quot;System.Web.Mvc.MvcWebRazorHostFactory, System.Web.Mvc, Version=3.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35&quot;/&gt;
    &lt;pages pageBaseType=&quot;System.Web.Mvc.WebViewPage&quot;&gt;
      &lt;namespaces&gt;
	&lt;!-- ViewBag is in this namespace! --&gt;
        &lt;add namespace=&quot;System.Web.Mvc&quot;/&gt;
        &lt;add namespace=&quot;System.Web.Mvc.Ajax&quot;/&gt;
        &lt;add namespace=&quot;System.Web.Mvc.Html&quot;/&gt;
        &lt;add namespace=&quot;System.Web.Routing&quot;/&gt;
      &lt;/namespaces&gt;
    &lt;/pages&gt;
  &lt;/system.web.webPages.razor&gt;
  ...
&lt;/configuration&gt;</pre>

<p><a href="http://zizhujy.com/blog/image.axd?picture=image_628.png"><img title="Fixed: The name &#39;ViewBag&#39; does not exist in the current context" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="Fixed: The name &#39;ViewBag&#39; does not exist in the current context" src="http://zizhujy.com/blog/image.axd?picture=image_thumb_317.png" width="652" height="293" /></a></p>