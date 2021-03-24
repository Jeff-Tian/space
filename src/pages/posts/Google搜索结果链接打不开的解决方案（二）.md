---
stackbit_url_path: >-
  posts/Google搜索结果链接打不开的解决方案（二）
title: 'Google搜索结果链接打不开的解决方案（二）'
date: '2012-02-08 04:38:25.7491023'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Google
  - JavaScript
canonical_url: >-
template: post
---
<h1><font color="#800080">一、问题：</font></h1>  <p>在大陆，经常会碰到这个问题，就是使用Google成功搜索出了一堆结果列表，然而在单击其中一条结果时，打开的页面说无法显示此网页（错误 101 (net::ERR_CONNECTION_RESET)：连接已重置。）。如下图：</p>  <p><a href="http://www.zizhujy.com/blog/image.axd?picture=image_438.png"><img title="Google搜索结果链接不能打开的解决方案" border="0" alt="Google搜索结果链接不能打开的解决方案" src="http://www.zizhujy.com/blog/image.axd?picture=image_thumb_172.png" width="551" height="318" /></a></p>  <h1><font color="#800080">二、原因分析：</font></h1>  <p>见：《<a href="http://www.zizhujy.com/blog/post/2012/02/07/Google%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C%E9%93%BE%E6%8E%A5%E4%B8%8D%E8%83%BD%E6%89%93%E5%BC%80%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.aspx">Google搜索结果链接不能打开的解决方案</a>》。</p>  <h1><font color="#800080">三、解决方案：</font></h1>  <ol>   <li>复制没有打开的链接网址，如：http://www.google.com.hk/url?sa=t&amp;rct=j&amp;q=%E5%9C%A8%E7%BA%BF%E5%87%BD%E6%95%B0%E7%94%BB%E5%9B%BE&amp;source=web&amp;cd=4&amp;ved=0CEMQFjAD&amp;url=http%3A%2F%2Fwww.zizhujy.com%2Fzh-cn&amp;ei=GDwxT5ifJYHtrAfyloCIBA&amp;usg=AFQjCNEKfSDp1wJd3CQCKtpBEja0AOI42g&amp;sig2=UaI-trCvcuCRbQRKtUlWTQ&amp;cad=rjt </li>    <li>粘贴到下面的文本区域，然后点击“打开”按钮。      <div style="border-bottom: black 1px solid; border-left: black 1px solid; padding-bottom: 5px; padding-left: 10px; padding-right: 10px; border-top: black 1px solid; border-right: black 1px solid; padding-top: 0px">       <h2 style="text-align: center;">打开Google搜索结果网页小工具</h2>        <p><label for="txtUrl">粘贴打不开的网址：</label></p> 	<p><textarea cols="65" rows="5" id="txtUrl"></textarea></p> 	<p><input id="btnGo" type="button" value=" 打开 " style="padding: 5px;" /></p>       <script type="text/javascript">

$("#btnGo").click(function(){
	var url = $("#txtUrl").val();
	var re = /\?.*url=([^&]*)&/;
	var targetUrl = url.match(re);
		
	if(targetUrl instanceof Array) {
		if(targetUrl.length >= 2) {
			window.open(unescape(targetUrl[1]), "targetWeb");
		} else {
			alert("没有找到目标网页网址，请确认粘贴的是Google搜索结果列表中一项的完整链接。");
		}
	} else {
		alert("没有找到目标网页网址，请确认粘贴的是Google搜索结果列表中一项的完整链接。");
	}
});


</script></div>   </li>    <li>如果还没有打开，说明目标网站也被屏蔽了，或者网站本身出现了问题。 </li> </ol>  <h1><font color="#800080">四、此工具原理：</font></h1>  <p>其实就是使用了一个正则表达式，再加上解码的程序，将目标网页的网址筛选了出来。也就是将《<a href="http://www.zizhujy.com/blog/post/2012/02/07/Google%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C%E9%93%BE%E6%8E%A5%E4%B8%8D%E8%83%BD%E6%89%93%E5%BC%80%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.aspx">Google搜索结果链接不能打开的解决方案</a>》中手动的工作自动化了一下。</p>  <p>全部JavaScript代码为：</p> <pre class="brush: javascript">

$("#btnGo").click(function(){
	var url = $("#txtUrl").val();
	var re = /\?.*url=([^&]*)&/;
	var targetUrl = url.match(re);
		
	if(targetUrl instanceof Array) {
		if(targetUrl.length >= 2) {
			window.open(unescape(targetUrl[1]), "targetWeb");
		} else {
			alert("没有找到目标网页网址，请确认粘贴的是Google搜索结果列表中一项的完整链接。");
		}
	} else {
		alert("没有找到目标网页网址，请确认粘贴的是Google搜索结果列表中一项的完整链接。");
	}
});
</pre>