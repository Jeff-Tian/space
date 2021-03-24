---
stackbit_url_path: >-
  posts/在Excel中计算日期对应的星期
title: '在Excel中计算日期对应的星期'
date: '2010-04-13 08:53:46'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>如何在Excel中根据日期计算出相应的星期呢？比如2010-4-13是星期二，2010-4-14是星期三等。</p>
<p>在A1单元格中输入日期，在另一单元格中用此公式：</p>
<p>=CHOOSE(WEEKDAY(A1),"星期天","星期一", "星期二", "星期三", "星期四", "星期五", "星期六")</p>
<p>&nbsp;</p>
      