---
stackbit_url_path: >-
  posts/可以灵活扩展的-DIV＋CSS-框模型
title: '可以灵活扩展的 DIV＋CSS 框模型'
date: '2010-03-11 02:34:52'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <style type="text/css"> 
    <!--
        #content p {
            text-indent: 2em;
        }
        
        #content h2 
        {
            font-weight: bold;
        }
        
        .catWrapper 
        {
            border: none;
            width: 400px;
            background-color: #336699;
            position: relative;
        }
        
        .catWrapper .catWrapper_Header 
        {
            height: auto;
            color: White;
            font-weight: bold;
            padding: 3px 10px;
        }
        
        .catWrapper .catWrapper_Content 
        {
            height: auto;
            background-color: White;
            border: solid 1px gray;
        }
        
        .catWrapper .catWrapper_Bottom 
        {
            height: 5px;
        }
        
        .catWrapper .catWrapper_TL 
        {
            background: url('http://www.myfootprints.cn/images/lt.gif') no-repeat left top;
            left: 0;
            top: 0;
            width: 5px;
            height: 5px;
            position: absolute;
        }
        
        .catWrapper .catWrapper_TR 
        {
            background: url('http://www.myfootprints.cn/images/rt.gif') no-repeat right top;
            right: 0;
            top: 0;
            width: 5px;
            height: 5px;
            position: absolute;
        }
        
        .catWrapper .catWrapper_BL 
        {
            background: url('http://www.myfootprints.cn/images/lb.gif') no-repeat left bottom;
            left: 0;
            bottom: 0;
            width: 5px;
            height: 5px;
            position: absolute;
        }
        
        .catWrapper .catWrapper_BR 
        {
            background: url('http://www.myfootprints.cn/images/rb.gif') no-repeat right bottom;
            right: 0;
            bottom: 0;
            width: 5px;
            height: 5px;
            position: absolute;
        }
    -->
    </style>
<div style="text-indent: 0; font-size: larger;">
<p>从网站&nbsp;<a target="_blank" href="http://dpwn.jobpartner.com/?404=Y">http://dpwn.jobpartner.com/?404=Y</a>&nbsp;的布局上看到了这种框模型，觉得不错，于是自己弄了个，分享一下，也备自己随时调来重用哈哈。</p>
<div class="catWrapper">
<div class="catWrapper_Header">Header</div>
<div class="catWrapper_Content">
<p>Content.</p>
<p><a href="http://www.myfootprints.cn/">http://www.myfootprints.cn</a></p>
</div>
<div class="catWrapper_Bottom">&nbsp;</div>
<div class="catWrapper_TL">&nbsp;</div>
<div class="catWrapper_TR">&nbsp;</div>
<div class="catWrapper_BL">&nbsp;</div>
<div class="catWrapper_BR">&nbsp;</div>
</div>
<p>&nbsp;</p>
<div class="catWrapper" style="background-color: #0099D1;">
<div class="catWrapper_Header">Header</div>
<div class="catWrapper_Content">
<p>Content.</p>
<p><a href="http://www.myfootprints.cn/">http://www.myfootprints.cn</a></p>
</div>
<div class="catWrapper_Bottom">&nbsp;</div>
<div class="catWrapper_TL">&nbsp;</div>
<div class="catWrapper_TR">&nbsp;</div>
<div class="catWrapper_BL">&nbsp;</div>
<div class="catWrapper_BR">&nbsp;</div>
</div>
<p>&nbsp;</p>
<div class="catWrapper" style="background-color: #FF6669;">
<div class="catWrapper_Header">Header</div>
<div class="catWrapper_Content">
<p>Content.</p>
<p><a href="http://www.myfootprints.cn/">http://www.myfootprints.cn</a></p>
</div>
<div class="catWrapper_Bottom">&nbsp;</div>
<div class="catWrapper_TL">&nbsp;</div>
<div class="catWrapper_TR">&nbsp;</div>
<div class="catWrapper_BL">&nbsp;</div>
<div class="catWrapper_BR">&nbsp;</div>
</div>
<p>&nbsp;</p>
<div class="catWrapper" style="background-color: #66CC66;">
<div class="catWrapper_Header">Header</div>
<div class="catWrapper_Content">
<p>Content.</p>
<p><a href="http://www.myfootprints.cn/">http://www.myfootprints.cn</a></p>
</div>
<div class="catWrapper_Bottom">&nbsp;</div>
<div class="catWrapper_TL">&nbsp;</div>
<div class="catWrapper_TR">&nbsp;</div>
<div class="catWrapper_BL">&nbsp;</div>
<div class="catWrapper_BR">&nbsp;</div>
</div>
<p>CSS 源代码：</p>
<div stle="text-indent: 0;">
<pre class="brush: css">        #content p {
            text-indent: 2em;
        }
        
        #content h2 
        {
            font-weight: bold;
        }
        
        .catWrapper 
        {
            border: none;
            width: 400px;
            background-color: #336699;
            position: relative;
        }
        
        .catWrapper .catWrapper_Header 
        {
            height: auto;
            color: White;
            font-weight: bold;
            padding: 3px 10px;
        }
        
        .catWrapper .catWrapper_Content 
        {
            height: auto;
            background-color: White;
            border: solid 1px gray;
        }
        
        .catWrapper .catWrapper_Bottom 
        {
            height: 5px;
        }
        
        .catWrapper .catWrapper_TL 
        {
            background: url('http://www.myfootprints.cn/images/lt.gif') no-repeat left top;
            left: 0;
            top: 0;
            width: 5px;
            height: 5px;
            position: absolute;
        }
        
        .catWrapper .catWrapper_TR 
        {
            background: url('http://www.myfootprints.cn/images/rt.gif') no-repeat right top;
            right: 0;
            top: 0;
            width: 5px;
            height: 5px;
            position: absolute;
        }
        
        .catWrapper .catWrapper_BL 
        {
            background: url('http://www.myfootprints.cn/images/lb.gif') no-repeat left bottom;
            left: 0;
            bottom: 0;
            width: 5px;
            height: 5px;
            position: absolute;
        }
        
        .catWrapper .catWrapper_BR 
        {
            background: url('http://www.myfootprints.cn/images/rb.gif') no-repeat right bottom;
            right: 0;
            bottom: 0;
            width: 5px;
            height: 5px;
            position: absolute;
        }
</pre>
</div>
</div>
      