---
stackbit_url_path: >-
  posts/给JavaScript的String对象添加startsWith()-endsWith()等方法
title: '给JavaScript的String对象添加startsWith(), endsWith()等方法'
date: '2012-02-25 20:50:45.7794348'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - String
  - javascript
canonical_url: https://be-net.azurewebsites.net/post/2012/02/25/给JavaScript的String对象添加startsWith()-endsWith()等方法
template: post
---
<p>用C#用习惯了，在写JavaScript代码时，用字符串时没有了startsWith()和endsWith()方法颇感不适应。于是自己给JavaScript的String对象添加两个，顺便再添加一个删除所有空白字符的方法。</p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_482.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="给JavaScript的String对象添加startsWith(), endsWith()等方法" border="0" alt="给JavaScript的String对象添加startsWith(), endsWith()等方法" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_210.png" width="184" height="160" /></a></p> <pre class="brush: javascript">
    //
    // 给字符串对象添加一个startsWith()方法
    //
    String.prototype.startsWith = function (substring) {
        var reg = new RegExp("^" + substring);
        return reg.test(this);
    };

    //
    // 给字符串对象添加一个endsWith()方法
    //
    String.prototype.endsWith = function (substring) {
        var reg = new RegExp(substring + "$");
        return reg.test(this);
    };

    //
    // 删除所有空白字符
    //
    String.prototype.deleteWhiteSpaces = function () {
        var extraSpace = /[\s\n\r]+/g;

        return this.replace(extraSpace, "");
    };
</pre>