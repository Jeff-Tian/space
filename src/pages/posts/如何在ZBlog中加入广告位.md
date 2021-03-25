---
stackbit_url_path: >-
  posts/如何在ZBlog中加入广告位
title: '如何在ZBlog中加入广告位'
date: '2010-03-11 01:10:38'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/11/如何在ZBlog中加入广告位
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>本文以在ZBlog中加入阿里妈妈的广告位作为示例，来说明如何在ZBlog中加入广告位的方法。加入其他广告位，方法类似。</p>
<p>在获取到广告位代码后，需要将代码部署到网站中去，就是将代码插入到网站代码当中。对于ZBlog，使用了主题管理模式，所以，我们要定位到博客网站当前使用的主题文件夹，比如为 ~/Themes/default/Template/（~ 代表博客网站的根目录），然后，将广告代码插入该文件夹下的以下五个文件中去，即：</p>
<ol style="text-indent: 0;">
    <li>catalog.html - 博客类别页面模板</li>
    <li>default.html - 博客首页模板</li>
    <li>search.html - 博客文章搜索页面模板</li>
    <li>single.html - 博客文章内页模板</li>
    <li>tags.html - 博客标签云集网页模板</li>
</ol>
<p>以上说要修改5个文件的源代码，隐含了说使广告全站开启，如果你只想广告在首页显示，而其他页面不显示，那么，仅需要修改 default.html 文件就行了。</p>
<p>确定了目标文件，现在要确定广告代码将要插入的目标位置。比如让广告位出现在页面最顶部并靠右显示，那么就可以分别去以上5个文件的顶部层中，进入插入操作。即插入在ID为divTop的层（div）中。在插入之前，先给广告代码一个包装的层，给它一个ID比如说叫divAd，以便在后面更好地控制其显示位置。即插入之后，页面的顶部层看起来是这样的格式：</p>
<div style="text-indent: 0;">
<pre class="brush: html">&lt;div id="divTop"&gt;
    原来的代码
    &lt;!-- 加入的广告位 --&gt;
    &lt;div id="divAd"&gt;
        这里是从阿里妈妈那里复制过来的广告代码
    &lt;/div&gt;
    &amp;lgt;!-- 加入的广告位 结束 --&gt;
&lt;/div&gt;
</pre>
</div>
<p>比如一个实际的例子是这样的：</p>
<div style="text-indent: 0;">
<pre class="brush: html">		&lt;div id="divTop"&gt;
		    &lt;div id="BlogLogo"&gt;&lt;a href="&lt;#ZC_BLOG_HOST#&gt;"&gt;&lt;img src="&lt;#ZC_BLOG_HOST#&gt;../images/logo_new.gif"&lt;/a&gt;&amp;lgt;/div&gt;
			&lt;h1 id="BlogTitle"&gt;&lt;a href="&lt;#ZC_BLOG_HOST#&gt;"&gt;&lt;#ZC_BLOG_NAME#&gt;&lt;/a&gt;&lt;/h1&gt;
			&lt;h2 id="BlogSubTitle"&gt;&lt;#ZC_BLOG_SUB_NAME#&gt;&lt;/h2&gt;
				&lt;!-- 广告 --&gt;
				&lt;div id="divAd"&gt;
					&lt;script type="text/javascript"&gt;
					alimama_pid="mm_10091974_2073071_8620269"; 
					alimama_titlecolor="0000FF"; 
					alimama_descolor ="000000"; 
					alimama_bgcolor="FFFFFF"; 
					alimama_bordercolor="E6E6E6"; 
					alimama_linkcolor="008000"; 
					alimama_bottomcolor="FFFFFF"; 
					alimama_anglesize="0"; 
					alimama_bgpic="0"; 
					alimama_icon="0"; 
					alimama_sizecode="16"; 
					alimama_width=658; 
					alimama_height=60; 
					alimama_type=2; 
				&lt;/script&gt;
				&lt;script src="http://a.alimama.cn/inf.js" type="text/javascript"&gt;
				&lt;/script&gt;
			&lt;/div&gt;
			&lt;!-- 广告结束 --&gt;
		&lt;/div&gt;
</pre>
</div>
<p>如果是开启广告全站显示，那么上述的插入操作要在五个文件中重复。好了后，广告位就已经插入到5个模板文件中了。而且你这时打开首页，已经可以看到广告位了，但是文章内页还没有，因为文章内页是已经建立好的文件。而模板修改之后，需要点击“文件重建”才能更新。所以如果开启广告全站显示之后，你需要点击“文件重建”。你可以这时就点，或者呆会儿再点击。</p>
<p>你打开首页，已经看到了，广告位显示在了导航栏之上，可能比较丑，我们希望它显示在页面的最顶部，并靠右。那么，现在需要定位到 ~/Themes/default/Template/STYLE/ 文件夹下，来修改控制页面显示样式的CSS文件，比如你的主题当前使用的样式是default.css，那么现在打开它，在它的最底下添加如下的代码，就可以控制广告位显示在想要的位置上了。</p>
<div style="text-indent: 0;">
<pre class="brush: css">/********** 广告 ******************/
#divAd {
position: absolute;
right: 0;
top: 0;
}
</pre>
</div>
<p>好了，现在大功告成！如果你刚才没有点击“文件重建”，那么可以现在点击它，让广告位全站显示了。</p>
</div>
      