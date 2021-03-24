---
stackbit_url_path: >-
  posts/JSP-中，不要同时用page指令和HTML标签来指定contentType
title: 'JSP 中，不要同时用page指令和HTML标签来指定contentType'
date: '2010-04-04 17:37:02'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>今天在JSP页面中，既使用了</p>
<p>&lt;%@ page contentType="text/html;charset=UTF-8" %&gt;</p>
<p>，又使用了</p>
<p>&lt;meta http-equiv="Content-Type" content="text/html;charset=UTF-8"&gt;</p>
<p>。导致页面不能正常运行。</p>
<p>删掉其中之一后正常。</p>
      