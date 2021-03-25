---
stackbit_url_path: >-
  posts/IIS-and-webconfig-configurations-for-Large-File-Upload
title: 'IIS and web.config configurations for Large File Upload'
date: '2011-12-13 22:27:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - File Size
  - Request Size
  - Upload
canonical_url: https://be-net.azurewebsites.net/post/2011/12/13/IIS-and-webconfig-configurations-for-Large-File-Upload
template: post
---
<h1><span style="color: #9b00d3;"><span style="font-weight: bold;">1. Background:</span></span></h1>
<p>Generally, an ASP.NET web site may only accept a request with less than 4 Mb size. If you want your site can accept large file uploading, you must modify the default settings in IIS, as well as the web.config file in your web application.</p>
<h1><strong><span style="color: #9b00d3;">2. Steps:</span></strong></h1>
<ol>
<li>
<h2><span style="color: #0000ff;">Increase the upload size limit under Request Filter Setting in IIS (Below steps applies for IIS 7, 7.5).</span></h2>
<ol>
<li>Open IIS Console using INETMGR command (or IIS command) in Run window.
<ul>
<li><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_425.png"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_160.png" alt="image" width="302" height="66" border="0" /></a></li>
</ul>
</li>
<li>In the <strong>Connections</strong> pane, select your web site under <strong>Sites</strong> node.</li>
<li>In the <strong>Feature View</strong> of <strong>IIS</strong> pane, double-click <strong>Request Filtering</strong>.
<ul>
<li><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_426.png"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_161.png" alt="image" width="586" height="400" border="0" /></a></li>
</ul>
</li>
<li>Click <strong>Edit Feature Settings&hellip;</strong> in the <strong>Actions</strong> pane.</li>
<li>Under <strong>Request Limits</strong> set <strong>Maximum allowed content length (Bytes)</strong>: to the value you want, and then click <strong>OK</strong>.
<ul>
<li><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_427.png"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_162.png" alt="image" width="560" height="481" border="0" /></a></li>
</ul>
</li>
</ol></li>
<li>
<h2><span style="color: #0000ff;">Add following code snippet in the web.config file. </span></h2>
<ol>
<li>Define <strong>maxAllowedContentLength</strong> under <strong>&lt;system.webServer&gt;</strong>node.
<ul>
<li>
<pre class="brush: xml">&lt;security&gt;
            &lt;requestFiltering&gt;
                &lt;!-- Setting maximum request size to 6MB --&gt;
                &lt;!-- NOTE: See 'httpRuntime' element above.--&gt;
                &lt;requestLimits maxAllowedContentLength="6291456"/&gt;
            &lt;/requestFiltering&gt;
       &lt;/security&gt;</pre>
</li>
</ul>
</li>
<li>Modify the <strong>maxRequestLength</strong> value under <strong>&lt;httpRuntime&gt;</strong> node. (<span style="color: #ff0000;">Warning: size is mentioned in KB, not bytes</span>)
<ul>
<li>
<pre class="brush: xml">&lt;httpRuntime requestValidationMode="2.0"
                    maxRequestLength="6144" 
                    requestLengthDiskThreshold="6144" /&gt;</pre>
</li>
</ul>
</li>
</ol></li>
</ol>