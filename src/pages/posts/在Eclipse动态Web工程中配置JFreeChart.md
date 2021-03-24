---
stackbit_url_path: >-
  posts/在Eclipse动态Web工程中配置JFreeChart
title: '在Eclipse动态Web工程中配置JFreeChart'
date: '2010-01-07 12:41:10'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>JFreeChart是JFreeChart公司在开源网站SourceForge.net上的一个项目，其主页为：<a href="http://www.jfree.org" target="_blank" title="JFree">http://www.jfree.org</a>。</p>
<p>可以从该网址获取JFreeChart的下载页面。</p>
<p>要在Web应用程序中应用JFreeChart，需在Web应用程序中进行相关配置。首先，可以在Eclipse中建立一个动态Web项目，接着修改工程的WEB-INF目录下的web.xml文件，在该文件中加入JFreeChart的相关配置，修改后的web.xml文件内容如下所示：</p>
<pre class="brush: java" style="text-indent: 0;"><!--?xml version="1.0" encoding="UTF-8"?-->
<web-app id="WebApp_ID" version="2.4" xmlns="http://java.sun.com/xml/ns/j2ee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemalocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">
	<display-name>
	SuperMarket</display-name>
	<welcome-file-list>
		<welcome-file>index.html</welcome-file>
		<welcome-file>index.htm</welcome-file>
		<welcome-file>index.jsp</welcome-file>
		<welcome-file>default.html</welcome-file>
		<welcome-file>default.htm</welcome-file>
		<welcome-file>default.jsp</welcome-file>
	</welcome-file-list>
	<servlet>
		<servlet-name>DisplayChart</servlet-name>
		<servlet-class>org.jfree.chart.servlet.DisplayChart</servlet-class>
	</servlet>
	<servlet-mapping>
		<servlet-name>DisplayChart</servlet-name>
		<url-pattern>/DisplayChart</url-pattern>
	</servlet-mapping>
</web-app>
</pre>
<p>同时，将JFreeChart的lib目录下的jar包复制到WEB-INF的lib目录中，这样就成功的在需要应用JFreeChart的Web项目中配置了JFreeChart。</p>
</div>
      