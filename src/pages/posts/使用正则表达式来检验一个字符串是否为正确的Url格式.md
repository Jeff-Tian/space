---
stackbit_url_path: >-
  posts/使用正则表达式来检验一个字符串是否为正确的Url格式
title: '使用正则表达式来检验一个字符串是否为正确的Url格式'
date: '2009-12-13 05:09:28'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/12/13/使用正则表达式来检验一个字符串是否为正确的Url格式
template: post
---

        <div style="text-indent: 2em;">
<p>匹配一个字符串是否为一个格式正确的网址，可以构建如下的正则表达式。</p>
<pre class="brush: javascript" style="text-indent: 0;">var re = /^(http:\/\/)?(\w+\.)?([\w|-]+)\.\w+.*[^.]$/;
</pre>
<p>第一个分组检验待匹配的字符串是否是以http://开头，而第一个问号代表http://可以出现0次或者1次。然后第二个分组是检验待匹配字符串是否是一些单词字符后接一个点，然后是一些单词字符与中划线-的组合后面带一个点，最后是任意字符但不能以点.结尾。</p>
<p>使用示例：</p>
<pre class="brush: javascript" style="text-indent: 0;">var s = "www.myfootprints.cn";
var re = /^(http:\/\/)?(\w+\.)?([\w|-]+)\.\w+.*[^.]$/;
alert(re.test(s));
</pre>
<p><a href="http://www.myfootprints.cn/javascript/default.asp?s=var%20s%20%3D%20%22www.myfootprints.cn%22%3B%0Avar%20re%20%3D%20%2F%5E(http%3A%5C%2F%5C%2F)%3F(%5Cw%2B%5C.)%3F(%5B%5Cw%7C-%5D%2B)%5C.%5Cw%2B.*%5B%5E.%5D%24%2F%3B%0Aalert(re.test(s))%3B" title="点击这里运行" target="_blank">点击这里运行</a></p>
</div>
      