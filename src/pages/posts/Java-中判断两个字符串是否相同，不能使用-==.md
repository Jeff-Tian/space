---
stackbit_url_path: >-
  posts/Java-中判断两个字符串是否相同，不能使用-==
title: 'Java 中判断两个字符串是否相同，不能使用 =='
date: '2010-01-01 02:42:51'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>由于多年的 JavaScript 编程，养成了一个习惯，在判断两个字符串是否相等时，喜欢使用 sStringA == sStringB。今天在 Java 中编程，也这样写了。后来发现即使 sStringA 与 sStringB 的内容都为 "quit"，可是程序判断 sStringA 与 sStringB 的结果仍然为假。百思不得其解，后来才想到，在 Java 中，sStringA == sStringB 的意思是判断两个变量的存储的内存地址是否相同，一般当然是不相同的。</p>
<p>在 Java 中，判断两个字符串相等的需要使用 String 类的 equals() 方法，即要使用 sStringA.equals(sStringB) 的方式来判断。</p>
</div>
      