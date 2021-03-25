---
stackbit_url_path: >-
  posts/【转】令人不解的-roles-属性
title: '【转】令人不解的 roles 属性'
date: '2010-06-03 10:29:03'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/06/03/【转】令人不解的-roles-属性
template: post
---

        <p>&nbsp;以下文章转载自：<a href="http://blog.joycode.com/">http://blog.joycode.com</a></p>
<div style="background-color: #20375F;">
<h1 style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 5px; font-size: 1.8em; "><a style="color: rgb(255, 255, 255); text-decoration: none; margin-top: 10px; " href="http://blog.joycode.com/moslem">纯技术视点</a></h1>
<p style="color: white;"><span id="subtitle">PTV-Pure Technology View</span></p>
</div>
<p>&nbsp;原文地址：<a href="http://blog.joycode.com/moslem/archive/2006/09/19/83842.joy">http://blog.joycode.com/moslem/archive/2006/09/19/83842.joy</a></p>
<hr>
<p>&nbsp;</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">在 ASP.NET 2.0 的 Web.sitemap 文件中，siteMapNode 有个属性 roles ，乍一看，就象是设置此结点允许哪些角色可以访问/显示，如：</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">&lt;siteMapNode url="~/Admin/Default.aspx" title="系统管理" description="" roles="Manager"&gt; 好象就表示属于 Manager 角色的用户可以访问/显示。但我在使用的时候却发现，无论当前用户是否登录，是否属于 Manager 角色，这个菜单项都能正常显示，且能正常进入，那这个 roles 属性的意义到底在哪里呢？</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">&nbsp;</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">后来查了一下才发现，要想达到我说的效果（即根据用户的角色自动显示/隐藏菜单项），必须进行如下两个步骤：</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">1）&nbsp;Web.Config 的 SiteMap 中启用安全修整，完成后如下所示：</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">&lt;siteMap defaultProvider="default"&gt;<br>
&nbsp; &lt;providers&gt;<br>
&nbsp;&nbsp;&nbsp; &lt;clear/&gt;<br>
&nbsp;&nbsp;&nbsp; &lt;add name="default" type="System.Web.XmlSiteMapProvider" siteMapFile="web.sitemap"&nbsp;<font color="#0000ff">securityTrimmingEnabled="true"</font>&nbsp;/&gt;<br>
&nbsp; &lt;/providers&gt;<br>
&lt;/siteMap&gt;</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">2）利用 Web.config 来实现文件或URL授权，即对 Admin 目录下的设置访问规则（可以利用 VS 2005 中的&nbsp;ASP.NET 配置来实现），完成后如下所示：</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">&lt;system.web&gt;<br>
&nbsp; &lt;authorization&gt;<br>
&nbsp;&nbsp;&nbsp; &lt;allow roles="Manager" /&gt;<br>
&nbsp;&nbsp;&nbsp; &lt;deny users="*" /&gt;<br>
&nbsp; &lt;/authorization&gt;<br>
&lt;/system.web&gt;</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">现在菜单终于可以自动根据用户的角色是否属于 Manager 来显示/隐藏了，但问题是，这好象完全是 Web.config 来设置的，和 siteMapNode 中的 roles 一点关系也没有，那这么 roles 的意义在哪里呢？</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">从 MSDN 中找出这么一段话：“<font color="#0000ff">当用户属于 roles 属性中列出的某一角色时，使用该属性后，ASP.NET 可避开与 siteMapNode 关联的 URL 授权限制。</font>”，可是如果我想避开限制的话，我就根本不用在 Web.config 中设置。既然在 Web.config 中设置了限制，却又在这里用 roles 绕开限制，是不是吃饱没事干了？</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">现在唯一能为这个 roles 找到一个很小的用处就是，如果结点上不指定 url 属性，可以利用此属性（roles="*"）来强制显示此结点，以便能够显示下一级结点，如：</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">&lt;siteMapNode url="" title="系统管理" description=""&nbsp;<font color="#0000ff">roles="*"</font>&gt;<br>
&nbsp;&nbsp;&nbsp; &lt;siteMapNode url="~/Admin/Member_List.aspx" title="用户管理" description=""/&gt;<br>
&nbsp;&nbsp;&nbsp; &lt;siteMapNode url="~/Admin/Role_List.aspx" title="角色配置" description="" /&gt;<br>
&lt;/siteMapNode&gt;</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">由于 url 没有值，所以只要 Admin 目录下利用 web.config 设置了授权规则，安全调整在检查时会隐藏“系统管理”这个结点，但设置了 roles="*" 后，可以强制显示此结点，这样下面的两个子结点（菜单项）也能正常根据角色来显示。但是，这个理由也不充分，因为将 url 设置成 "~/Admin" ，也能达到上述效果。</p>
<p style="margin-top: 0px; margin-right: 0px; margin-bottom: 14px; margin-left: 0px; font-family: Arial, sans-serif; line-height: normal; font-size: small; ">那么，siteMapNode 结点中的这个 roles 属性的作用到底在哪里呢？</p>
<p>&nbsp;</p>
      