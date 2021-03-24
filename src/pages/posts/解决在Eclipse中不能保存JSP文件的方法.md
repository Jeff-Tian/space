---
stackbit_url_path: >-
  posts/解决在Eclipse中不能保存JSP文件的方法
title: '解决在Eclipse中不能保存JSP文件的方法'
date: '2010-04-04 13:57:01'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>问题描述：<span class="Apple-style-span" style="font-family: Verdana, 宋体, 新宋体, sans-serif; line-height: 23px; font-size: 14px; ">Eclipse中新建一个jsp文件，如果输入中文保存时就会提示错误： Save could not be completed. Reason： some characters cannot be mapped using “ISO-8859-1“ character encoding. Either change the encoding or remove the characters which are not supported by the “ISO-8859-1“ character encoding.<br>
</span></p>
<p>解决方法：<span class="Apple-style-span" style="font-family: Verdana, 宋体, 新宋体, sans-serif; line-height: 23px; font-size: 14px; ">eclipse --&gt; window --&gt; Preferences --&gt; General --&gt; Content Types --&gt; Text --&gt; 单击 JSP,在底部出现 'Default edcodng:',改成utf-8或GBK，然后update。</span></p>
<p>如果再碰到其他文件也因为编码问题不能保存，也可以类似上述方法，选中相应的条目（而不是JSP），修改其默认编码格式。</p>
      