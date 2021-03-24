---
stackbit_url_path: >-
  posts/NET中的邮件发送配置
title: '.NET中的邮件发送配置'
date: '2010-03-09 03:36:32'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>在.NET中实现发送邮件功能，需要在web.config中作好配置，配置项位于&lt;configuration&gt;节点之间。如：</p>
<div style="text-indent: 0;">
<pre class="brush: xml">&lt;?xml version="1.0"?&gt;
&lt;configuration&gt;
    ...
    &lt;system.net&gt;
        &lt;mailSettings&gt;
            &lt;smtp deliveryMethod="Network" from="someone&lt;someone@myfootprints.cn&gt;"&gt;
                &lt;network host="smtp.qq.com" userName="***@myfootprints.cn" password="***"/&gt;
            &lt;/smtp&gt;
        &lt;/mailSettings&gt;
    &lt;/system.net&gt;
&lt;/configuration&gt;
</pre>
</div>
</div>
      