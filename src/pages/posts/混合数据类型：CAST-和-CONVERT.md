---
stackbit_url_path: >-
  posts/混合数据类型：CAST-和-CONVERT
title: '混合数据类型：CAST 和 CONVERT'
date: '2010-04-06 11:29:01'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>CAST 和 CONVERT 都经常被使用。CAST 和 CONVERT 都可以执行数据类型转换。在大部分情况下，两者执行同样的功能，不同的是CONVERT还提供一些日期格式转换，而CAST没有这个功能。</p>
<p>如果 CONVERT 包括了 CAST 所有功能，而且 CONVERT 还能进行日期转换，那么为什么需要使用 CAST 呢？简单地说，是为了 ANSI/ISO 兼容。CAST 是 ANSI 兼容的，而 CONVERT 不兼容。</p>
<p>以下是各自的语法：</p>
<p>CAST (expression AS data_type)</p>
<p>CONVERT (data_type, expression[, style])&nbsp;</p>
      