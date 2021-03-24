---
stackbit_url_path: >-
  posts/Java-中Long型变量赋值问题
title: 'Java 中Long型变量赋值问题'
date: '2010-01-19 14:33:10'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>今天在写Java程序时，写到</p>
<pre class="brush: java" style="text-indent: 0;">		Long lPortNo;		
		lPortNo = 6789;
</pre>
<p>居然出错，错误信息为：“Type mismatch: cannot convert from int to Long”。原来，6789只是int型的字面量，而长整型字面量，是在数字后面加一个大写的L。</p>
<p>这样写就没有问题了。</p>
<pre class="brush: java" style="text-indent: 0;">		Long lPortNo;		
		lPortNo = 6789L;
</pre>
</div>
      