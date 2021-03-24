---
stackbit_url_path: >-
  posts/如何在Zblog中加入Google内容广告
title: '如何在Zblog中加入Google内容广告'
date: '2010-03-16 02:42:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>本文以示例来说明如何在ZBlog中加入Google内容广告。即让广告出现在博客中的每篇文章的正文中。</p>
<p style="margin-top: 10px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; word-break: break-all; ">在获取到广告位代码后，需要将代码部署到网站中去，就是将代码插入到网站代码当中。对于ZBlog，使用了主题管理模式，所以，我们要定位到博客网站当前使用的主题文件夹，比如为 ~/Themes/default/Template/（~ 代表博客网站的根目录），然后，将广告代码插入该文件夹下的以下的这个文件：</p>
<ul style="text-indent: 0px; ">
    <li style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; ">b_article-single.html - 博客文章模板页面</li>
</ul>
<p style="margin-top: 10px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; word-break: break-all; ">确定了目标文件，现在要确定广告代码将要插入的目标位置。比如让广告位出现在文章页面顶部并靠右显示，那么就先找到如下代码块：</p>
<div style="text-indent: 0px; ">
<pre class="brush: html">&lt;div class="post-body"&gt;&lt;#article/content#&gt;&lt;/div&gt;
</pre>
</div>
<p>如上代码中&lt;#article/content#&gt;即为你的文章内容的占位符。在它的前面我们插入Google的内容广告代码，给这个广告代码用一个层包围，并给这个层一个样式类别名，如googleAds，以方便我们对广告的显示样式进行控制。并在它的后面添加一个清除浮动的层（在后面我们会让内容广告层的样式居右显示即向右浮动，为了在所有浏览器中保证此向右浮动显示不会影响页面其他内容原来的布局，加上此清除浮动的层很有必要）。最后代码如下：</p>
<div style="text-indent: 0;">
<pre class="brush: html">&lt;div class="post-body"&gt;
		&lt;!-- 这里是你添加的内容广告代码--&gt;
		&lt;div id="divGoogleAds" class="googleAds"&gt;
&lt;script type="text/javascript"&gt;&lt;!--
google_ad_client = "pub-9332882982479681";
/* 300x250, created 3/14/10 */
google_ad_slot = "5337741735";
google_ad_width = 300;
google_ad_height = 250;
//--&gt;
&lt;/script&gt;
&lt;script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js"&gt;
&lt;/script&gt;
		&lt;/div&gt;
		&lt;!-- 内容广告代码层 结束 --&gt;
		&lt;#article/content#&gt;
		&lt;!-- 以下是添加的清除浮动的层 --&gt;
		&lt;div style="clear: both; float: none;"&gt;&lt;/div&gt;
		&lt;!-- 清除浮动层 结束 --&gt;
	&lt;/div&gt;
</pre>
</div>
<p>将以上更改保存，工作就基本完成了！</p>
<p>你现在发布文章，就可以看到，内容广告已经加上去了。只是以前发布的文章里没有广告。如果想让广告也出现在以前的文章里，则需要点击文件重建。</p>
<p>还有一个问题，就是它没有居右显示，我们再定位到主题文件夹下的样式表中，打开你当前使用的样式表，比如~/Themes/default/STYLE/default.css 文件，打开它后，定位到文件的最后，加入如下的代码，关联我们给广告层的样式类别名。</p>
<div style="text-indent: 0;">
<pre class="brush: css">.googleAds {
float: right; /* 居右显示 */
margin: auto 1em auto 1em; /* 与左边和下边的内容空一个字符的间隔 */
}
</pre>
</div>
<p style="margin-top: 10px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; word-break: break-all; ">好了，现在大功告成！如果你刚才没有点击“文件重建”，那么可以现在点击它，让广告显示在每篇文章当中了。</p>
</div>
      