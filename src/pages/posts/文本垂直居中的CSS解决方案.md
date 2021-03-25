---
stackbit_url_path: >-
  posts/文本垂直居中的CSS解决方案
title: '文本垂直居中的CSS解决方案'
date: '2010-03-09 06:29:34'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/09/文本垂直居中的CSS解决方案
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>如何让一行短的文本在一个大的容器如层（div）或者高度值远比文本内容高度值要大的段落（p）中垂直居中呢？这个问题困扰了我好久，因为无论我怎么去设置层（div）或者段落（p）的vertical-align属性都无济于事，它们看起来仍然是像下面的效果，顽固地顶端对齐着。</p>
<p style="height: 3em; border: solid 1px black; vertical-align: center;">想让我垂直居中？没门！</p>
<p style="font-size: smaller;">上面的源码是：&lt;p style="height: 3em; border: solid 1px black; vertical-align: center;"&gt;想让我垂直居中？没门！&lt;/p&gt;</p>
<p>今天才看到别人使用这样的策略来使文本垂直居中，真是妙极了。这个策略就是，同时设置容器的height与line-height属性，让它们相等。这样就有了下面的效果：</p>
<p style="height: 3em; border: solid 1px black; line-height: 3em;">好吧，你赢了，我垂直居中了。</p>
<p style="font-size: smaller;">上面的源码是：&lt;p style="height: 3em; border: solid 1px black; line-height: 3em;"&gt;好吧，你赢了，我垂直居中了。&lt;/p&gt;</p>
</div>
      