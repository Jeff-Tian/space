---
stackbit_url_path: >-
  posts/Fixed-unable-to-cast-object-of-type-asp_page_admin_default_cshtml-to-type-systemwebihttphandler-error
title: 'Fixed: unable to cast object of type "asp._page_admin_default_cshtml" to type "system.web.ihttphandler" error'
date: '2013-02-14 18:53:35.7706178'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - BlogEngine.NET
  - Razor
canonical_url: https://be-net.azurewebsites.net/post/2013/02/14/Fixed-unable-to-cast-object-of-type-asp_page_admin_default_cshtml-to-type-systemwebihttphandler-error
template: post
---
<h2><font color="#9b00d3">1. Background:</font></h2>  <p>I host my BlogEngine.NET (this blog) as a sub application under a main ASP.NET MVC 3 web application (zizhujy.com), it runs well until one day I tried to enter the administrator control panel – the following error showed on page:</p>  <h4><em>unable to cast object of type 'asp._page_admin_default_cshtml' to type 'system.web.ihttphandler'.</em></h4> <strong>Description: </strong>An unhandled exception occurred during the execution of the current web request. Please review the stack trace for more information about the error and where it originated in the code.   <br /><strong>Exception Details: </strong>System.InvalidCastException: Unable to cast object of type 'ASP._Page_admin_default_cshtml' to type 'System.Web.IHttpHandler'.   <br /><strong>Source Error:</strong>   <p><code>An unhandled exception was generated during the execution of the current web request. Information regarding the origin and location of the exception can be identified using the exception stack trace below.</code></p>  <p><strong>Stack Trace:</strong></p>  <pre>[InvalidCastException: Unable to cast object of type 'ASP._Page_admin_default_cshtml' to type 'System.Web.IHttpHandler'.]
   System.Web.WebPages.WebPageHttpHandler.CreateFromVirtualPath(String virtualPath, VirtualPathFactoryManager virtualPathFactoryManager) +75
   System.Web.WebPages.WebPageRoute.DoPostResolveRequestCache(HttpContextBase context) +321
   System.Web.SyncEventExecutionStep.System.Web.HttpApplication.IExecutionStep.Execute() +80
   System.Web.HttpApplication.ExecuteStep(IExecutionStep step, Boolean&amp; completedSynchronously) +270</pre>

<h2><font color="#9b00d3">2. Cause:</font></h2>

<p>The error only happens when try to view the pages that associated with .cshtml files. Seems that the BlogEngine.NET application inherited the razor settings from its parent ASP.NET MVC web application.</p>

<h2><font color="#9b00d3">3. Solution:</font></h2>

<p><strong>Step 1.</strong> Open the web.config file under the BlogEngine.NET web root folder.</p>

<p><strong>Step 2.</strong> Add below xml snipet under the &lt;configuration /&gt; node.</p>

<pre class="brush: xml">  &lt;!-- Very important, to clear the main application's settings. Else the cshtml file can't be opened. --&gt;
  &lt;system.web.webPages.razor&gt;
    &lt;pages pageBaseType=&quot;System.Web.Mvc.WebViewPage&quot;&gt;
      &lt;namespaces&gt;
        &lt;clear/&gt;
      &lt;/namespaces&gt;
    &lt;/pages&gt;
  &lt;/system.web.webPages.razor&gt;  </pre>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_612.png"><img title="Fixed: unable to cast object of type &#39;asp._page_admin_default_cshtml&#39; to type &#39;system.web.ihttphandler&#39; error" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="Fixed: unable to cast object of type &#39;asp._page_admin_default_cshtml&#39; to type &#39;system.web.ihttphandler&#39; error" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_301.png" width="648" height="313" /></a></p>

<p><strong>Step 3.</strong> Make sure these dll files exist in the “bin” folder under BlogEngine.NET web root.</p>

<ul>
  <li>System.Web.Helpers.dll </li>

  <li>System.Web.Mvc.dll </li>

  <li>System.Web.Razor.dll </li>

  <li>System.Web.WebPages.dll </li>

  <li>System.Web.WebPages.Razor.dll </li>
</ul>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_613.png"><img title="Make sure these dll files exist in the “bin” folder under BlogEngine.NET web root." style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="Make sure these dll files exist in the “bin” folder under BlogEngine.NET web root." src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_302.png" width="637" height="196" /></a></p>

<p><strong>Step 4.</strong> If you still can’t view your administrator control panels after step 3, then the following steps would save you. First, in your parent web application’s web.config under the root folder, delete the Razor related settings:</p>

<div style="border-top: black 1px solid; border-right: black 1px solid; border-bottom: black 1px solid; border-left: black 1px solid">
  <p><strike>&lt;configSections&gt; 
      <br />&#160; &lt;sectionGroup name=&quot;system.web.webPages.razor&quot; type=&quot;System.Web.WebPages.Razor.Configuration.RazorWebSectionGroup, System.Web.WebPages.Razor, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35&quot;&gt; 

      <br />&#160;&#160;&#160; &lt;section name=&quot;host&quot; type=&quot;System.Web.WebPages.Razor.Configuration.HostSection, System.Web.WebPages.Razor, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35&quot; requirePermission=&quot;false&quot;/&gt; 

      <br />&#160;&#160;&#160; &lt;section name=&quot;pages&quot; type=&quot;System.Web.WebPages.Razor.Configuration.RazorPagesSection, System.Web.WebPages.Razor, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35&quot; requirePermission=&quot;false&quot;/&gt; 

      <br />&#160; &lt;/sectionGroup&gt; 

      <br />&lt;/configSections&gt;</strike></p>

  <p><strike>&lt;system.web.webPages.razor&gt; 
      <br />&#160; &lt;host factoryType=&quot;System.Web.Mvc.MvcWebRazorHostFactory, System.Web.Mvc, Version=3.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35&quot;/&gt; 

      <br />&#160; &lt;pages pageBaseType=&quot;System.Web.Mvc.WebViewPage&quot;&gt; 

      <br />&#160;&#160;&#160; &lt;namespaces&gt; 

      <br />&#160;&#160;&#160;&#160;&#160; &lt;add namespace=&quot;System.Web.Mvc&quot;/&gt; 

      <br />&#160;&#160;&#160;&#160;&#160; &lt;add namespace=&quot;System.Web.Mvc.Ajax&quot;/&gt; 

      <br />&#160;&#160;&#160;&#160;&#160; &lt;add namespace=&quot;System.Web.Mvc.Html&quot;/&gt; 

      <br />&#160;&#160;&#160;&#160;&#160; &lt;add namespace=&quot;System.Web.Routing&quot;/&gt; 

      <br />&#160;&#160;&#160; &lt;/namespaces&gt; 

      <br />&#160; &lt;/pages&gt; 

      <br />&lt;/system.web.webPages.razor&gt;</strike> 

    <br /></p>
</div>

<p><strong>Step 5.</strong> Then you can view the administrator control panels definitely! If you met problems with the cshtml files in your parent application, then you can put the deleted settings to your ~/Views/web.config file, and make mark it build as content to make it be copied to publish folder. 

  <br /><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_650.png"><img title="Fixed: unable to cast object of type &#39;asp._page_admin_default_cshtml&#39; to type &#39;system.web.ihttphandler&#39; error" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="Fixed: unable to cast object of type &#39;asp._page_admin_default_cshtml&#39; to type &#39;system.web.ihttphandler&#39; error" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_338.png" width="659" height="507" /></a></p>

<p>Now you are set to view the administrator control panels without breaking the parent application!</p>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_614.png"><img title="Now you are set to view the administrator control panels!" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="Now you are set to view the administrator control panels!" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_303.png" width="627" height="324" /></a></p>