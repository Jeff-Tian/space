---
stackbit_url_path: >-
  posts/如何使用JavaScript来判断当前文档有没有加载完成
title: '如何使用JavaScript来判断当前文档有没有加载完成'
date: '2009-12-17 12:08:19'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/12/17/如何使用JavaScript来判断当前文档有没有加载完成
template: post
---

        <div style="text-indent: 2em;">
<p>如何使用JavaScript来判断当前页面（即当前HTML文档）是否已经另载完成了呢？有人提出如下方案(此方案来自<a href="http://faq.csdn.net/read/216705.html" target="_blank">http://faq.csdn.net/read/216705.html</a>)：</p>
<pre class="brush: javascript" style="text-indent: 0;">function on(){ 
if ( window.onload ) 
{ 
alert( "page onload." ); 
} 
else{ 
window.setTimeout( on, 1000); 
} 
} 
on(); 
</pre>
<p><a href="http://www.myfootprints.cn/javascript/default.asp?s=function%20on()%7B%20%0Aif%20(%20window.onload%20)%20%0A%7B%20%0Aalert(%20%22page%20onload.%22%20)%3B%20%0A%7D%20%0Aelse%7B%20%0Awindow.setTimeout(%20on%2C%201000)%3B%20%0A%7D%20%0A%7D%20%0Aon()%3B%20" target="_blank" title="点击这里运行">点击这里运行</a></p>
<p>可惜的是，我在Google Chrome浏览器测试后发现以上代码不能正常工作。因为在HTML文档加载完成之前，window.onload的值是undefined，在加载完成之后，如果仅用以上代码，它会是null，那么通过if(window.onload)来判断，会发现页面一直没有加载完成，于是每过一秒再检查一次，如此直到永远，都不会发现页面已经加载完成。</p>
<p>只有当你为window.onload添加了事件处理函数之后，window.onload的值才不为null。比如在&lt;body&gt;标签中添加onload="handler();"。</p>
<p>正确的解决方案应该是，在页面加载完成后，给window对象设置一个通知变量，然后通过检查该通知变量，就可以知道当前页面是否加载完成了。如下：</p>
<pre class="brush: javascript" style="text-indent: 0;">// wantToDoSth()是一个必须在当前页面加载完成后才能正常工作的函数
function wantToDoSth() {
	if (window.isReady) {
		// 正式的工作 ...
		alert(window.isReady);
	} else {
		setTimeout(wantToDoSth, 1000);
	}
}

wantToDoSth();

addEventHandler(window, 'load', function() {
	// 就是在这里设置好通知变量，作为其他函数可以使用的“钩子”
	window.isReady = true;
});

// 以下函数用来给window对象的load事件添加事件处理函数。
function addEventHandler(oTarget, sEventType, fnHandler, vArgument /* optional */) {
    //# 生成handler函数
    var handler;
    if (typeof (vArgument) == 'undefined') {
        handler = fnHandler;
    } else {
        handler = function() {
            fnHandler(vArgument);
        };
    }
    if (oTarget.addEventListener) {         // for DOM-compliant browsers
        oTarget.addEventListener(sEventType, handler, false);
    } else if (oTarget.attachEvent) {       // for IE
        oTarget.attachEvent("on" + sEventType, handler);
    } else {                                // for all others
        oTarget["on" + sEventType] = handler;
    }
}
</pre>
<p><a href="http://www.myfootprints.cn/javascript/default.asp?s=%2F%2F%20wantToDoSth()%E6%98%AF%E4%B8%80%E4%B8%AA%E5%BF%85%E9%A1%BB%E5%9C%A8%E5%BD%93%E5%89%8D%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E5%AE%8C%E6%88%90%E5%90%8E%E6%89%8D%E8%83%BD%E6%AD%A3%E5%B8%B8%E5%B7%A5%E4%BD%9C%E7%9A%84%E5%87%BD%E6%95%B0%0Afunction%20wantToDoSth()%20%7B%0A%09if%20(window.isReady)%20%7B%0A%09%09%2F%2F%20%E6%AD%A3%E5%BC%8F%E7%9A%84%E5%B7%A5%E4%BD%9C%20...%0A%09%09alert(window.isReady)%3B%0A%09%7D%20else%20%7B%0A%09%09setTimeout(wantToDoSth%2C%201000)%3B%0A%09%09%2F%2F%20%E6%B3%A8%E6%84%8F%EF%BC%9A%E4%BB%A5%E4%B8%8B%E8%BF%99%E5%8F%A5%E4%BB%85%E5%9C%A8%E4%BD%BF%E7%94%A8%E6%9C%ACJavaScript%E7%BB%83%E5%85%B5%E5%9C%BA%E6%97%B6%E4%BD%BF%E7%94%A8%EF%BC%8C%E5%9C%A8%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%9C%BA%E5%90%88%E5%B0%B1%E4%B8%8D%E9%9C%80%E8%A6%81%E4%BA%86%E3%80%82%0A%09%09window.isReady%20%3D%20true%3B%0A%09%7D%0A%7D%0A%0AwantToDoSth()%3B%0A%0AaddEventHandler(window%2C%20'load'%2C%20function()%20%7B%0A%09%2F%2F%20%E5%B0%B1%E6%98%AF%E5%9C%A8%E8%BF%99%E9%87%8C%E8%AE%BE%E7%BD%AE%E5%A5%BD%E9%80%9A%E7%9F%A5%E5%8F%98%E9%87%8F%EF%BC%8C%E4%BD%9C%E4%B8%BA%E5%85%B6%E4%BB%96%E5%87%BD%E6%95%B0%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E7%9A%84%E2%80%9C%E9%92%A9%E5%AD%90%E2%80%9D%0A%09window.isReady%20%3D%20true%3B%0A%7D)%3B%0A%0A%2F%2F%20%E4%BB%A5%E4%B8%8B%E5%87%BD%E6%95%B0%E7%94%A8%E6%9D%A5%E7%BB%99window%E5%AF%B9%E8%B1%A1%E7%9A%84load%E4%BA%8B%E4%BB%B6%E6%B7%BB%E5%8A%A0%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0%E3%80%82%0Afunction%20addEventHandler(oTarget%2C%20sEventType%2C%20fnHandler%2C%20vArgument%20%2F*%20optional%20*%2F)%20%7B%0A%20%20%20%20%2F%2F%23%20%E7%94%9F%E6%88%90handler%E5%87%BD%E6%95%B0%0A%20%20%20%20var%20handler%3B%0A%20%20%20%20if%20(typeof%20(vArgument)%20%3D%3D%20'undefined')%20%7B%0A%20%20%20%20%20%20%20%20handler%20%3D%20fnHandler%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20handler%20%3D%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fnHandler(vArgument)%3B%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%7D%0A%20%20%20%20if%20(oTarget.addEventListener)%20%7B%20%20%20%20%20%20%20%20%20%2F%2F%20for%20DOM-compliant%20browsers%0A%20%20%20%20%20%20%20%20oTarget.addEventListener(sEventType%2C%20handler%2C%20false)%3B%0A%20%20%20%20%7D%20else%20if%20(oTarget.attachEvent)%20%7B%20%20%20%20%20%20%20%2F%2F%20for%20IE%0A%20%20%20%20%20%20%20%20oTarget.attachEvent(%22on%22%20%2B%20sEventType%2C%20handler)%3B%0A%20%20%20%20%7D%20else%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20for%20all%20others%0A%20%20%20%20%20%20%20%20oTarget%5B%22on%22%20%2B%20sEventType%5D%20%3D%20handler%3B%0A%20%20%20%20%7D%0A%7D" target="_blank" title="点击这里运行">点击这里运行</a></p>
<p>还有一个方法，就是检查 window.document.body 属性，如果它可以使用了，那么，在大部分情况下，这时都可以使用 JavaScript 来操作 DOM 对象了，也就相当于整个 HTML 文档已经加载结束了。即</p>
<pre class="brush: javascript" style="text-indent: 0">// wantToDoSth()是一个必须在当前页面加载完成后才能正常工作的函数
function wantToDoSth() {
	if (window.document.body) {
		// 正式的工作 ...
		alert('好了');
	} else {
		setTimeout(wantToDoSth, 1000);
	}
}

wantToDoSth();
</pre>
<p><a href="http://www.myfootprints.cn/javascript/default.asp?s=%2F%2F%20wantToDoSth()%E6%98%AF%E4%B8%80%E4%B8%AA%E5%BF%85%E9%A1%BB%E5%9C%A8%E5%BD%93%E5%89%8D%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E5%AE%8C%E6%88%90%E5%90%8E%E6%89%8D%E8%83%BD%E6%AD%A3%E5%B8%B8%E5%B7%A5%E4%BD%9C%E7%9A%84%E5%87%BD%E6%95%B0%0Afunction%20wantToDoSth()%20%7B%0A%09if%20(window.document.body)%20%7B%0A%09%09%2F%2F%20%E6%AD%A3%E5%BC%8F%E7%9A%84%E5%B7%A5%E4%BD%9C%20...%0A%09%09alert('%E5%A5%BD%E4%BA%86')%3B%0A%09%7D%20else%20%7B%0A%09%09setTimeout(wantToDoSth%2C%201000)%3B%0A%09%7D%0A%7D%0A%0AwantToDoSth()%3B" target="_blank" title="点击这里运行">点击这里运行</a></p>
</div>
      