---
stackbit_url_path: >-
  posts/无法与报表服务器-httplocalhostReportServer-建立连接
title: '无法与报表服务器 http://localhost/ReportServer 建立连接'
date: '2010-04-29 04:21:13'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>在第一次使用SQL Server 2008的Reporting Services时，部署报表模型的过程中，跳出错误对话框，说：无法与报表服务器 http://localhost/ReportServer 建立连接。</p>
<p>经过探索，找到原因。</p>
<p>一般在本机上，使用SQL Server Business Intelligence Development Studio开发报表模型时，该工具默认TargetServerURL为 http://localhost/ReportServer。</p>
<p>然而，我平时已经使用IIS，其默认的80端口已经用作我的网站了。所以以上默认的设置不再适用。</p>
<p>这时，我使用Reporting Services配置工具（开始--&gt;Microsoft SQL Server 2008--&gt;配置工具--&gt;Reporting Service配置工具），来查看实际服务所在的URL地址及端口。如下图：</p>
<p>&nbsp;</p>
<p><img onload="ResizeImage(this,520)" src="http://www.zizhujy.com/blog/image.axd?picture=image_189.png" alt="" title=""></p>
<p>可以看到，实际上的报表服务器Web服务URL为：<a href="http://pc2010030215wso:8080/ReportServer">http://pc2010030215wso:8080/ReportServer</a>。</p>
<p>于是关掉它，来到SQL Server Business Intelligence Development Studio，在解决方案面板中，右击解决方案，选择属性，将其TargetServerURL属性值改为：<a href="http://pc2010030215wso:8080/ReportServer">http://pc2010030215wso:8080/ReportServer</a>。确定，然后就可以正常部署了。<img alt="" src="http://www.zizhujy.com/blog/image.axd?picture=image_190.png"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><img onload="ResizeImage(this,520)" src="http://www.zizhujy.com/blog/image.axd?picture=image_191.png" alt="" title=""></p>
      