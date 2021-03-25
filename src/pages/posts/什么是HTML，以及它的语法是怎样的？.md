---
stackbit_url_path: >-
  posts/什么是HTML，以及它的语法是怎样的？
title: '什么是HTML，以及它的语法是怎样的？'
date: '2009-11-26 14:07:06'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/11/26/什么是HTML，以及它的语法是怎样的？
template: post
---

        <div style="text-indent: 2em;">
<p>HTML是Hyper Text Markup Language的缩写，即超文本标记语言。</p>
<p>所谓超文本，它最大的特征就是改变了传统文本的线性链接方式。比如说你看一本书，一般都是依章节次序从前往后阅读，而超文本，则允许你从一个页面任意跳转到你需要去的那个页面，只要在跳转的地方插入一个超级链接。比如你在阅读一篇以超文本组织的文章时，遇到一个不明白的词汇，只需用鼠标点它一下，即可跳转到对它的解释页面，待你阅读完之后，又可方便地回到刚刚阅读到的那个词汇，只要用鼠标点击一个做好的“后退”按钮。</p>
<p>超文本标记语言，即是用来组织超文本的。用这种语言在普通的文本上做上标记，再用浏览器对它进行阅读，便可以在这些文本间自由的跳转了。</p>
<p>HTML语言不是一门编程语言，只是一种标记，它没有编程语言的流程结构，只是在需要标记的文字前加一个开始标记，在后面加上一个结束标记，然后浏览器就知道了在这两个标记之间的文字应该怎样显示了。开始与结束标记总是成对出现，像这样的形式：</p>
<pre class="brush: html" style="text-indent: 0;">你好，&lt;b&gt;世界。&lt;/b&gt;我爱你！
</pre>
<p>其中你好，世界。我爱你！是显示在画面上的文字，而<b>,</b>则是HTML语言标记，b是bold的缩写，粗体字的意思。上面那段话就是告诉浏览器，“世界”要加粗显示。浏览器按顺序读取超文本的源代码，并解释和将它显示在屏幕上。正常现实显示完“你好，”之后，读到“&lt;b&gt;”便准备好了加粗后面的文字，直到它读到标记“&lt;/b&gt;”，采取消加粗。于是“世界。”被加粗之后，“我爱你！”又回到了正常字体。</p>
<p>HTML的大体结构如下所示：</p>
<div style="text-indent: 0;">
<pre class="brush: html" style="text-indent: 0;">&lt;html&gt;
       &lt;head&gt;
              &lt;title&gt;这里的文字会出现在浏览器的标题栏上&lt;/title&gt;
       &lt;/head&gt;
       &lt;body&gt;
              这里及以下的文字会出现在浏览器的窗体上。&lt;br&gt;
              &lt;font color="red"&gt;这段话会显示成红颜色。&lt;/font&gt;&lt;br&gt;
              &lt;a href="http://www.baidu.com"”&gt;我被定义了一个超级链接，点击一下我就页面就会跳转到百度网站上去哦。&lt;/a&gt;
       &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>
<p>将上面的文字复制到文本文档里，并将后缀名改成“.htm”，双击打开，就能以超文本形式或者说网页形式浏览了。</p>
<p>如上所示，可以看到，HTML标记是嵌套形式的。分为头部和身体。超级链接是通过这样的标记&lt;a href="”要链接到的网页或文件地址”"&gt;文字&lt;/a&gt;来定义的。</p>
<p>当然，要了解更多，就需要找相关书籍来看了，不过它真的很简单哦，它不是编程。</p>
</div>
      