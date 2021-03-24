---
stackbit_url_path: >-
  posts/利用Ajax技术读取RSS新闻源，并构建一个在线的阅读器
title: '利用Ajax技术读取RSS新闻源，并构建一个在线的阅读器'
date: '2009-11-20 14:03:08'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>示例：<a href="http://www.myfootprints.cn/tools/8.asp" target="_blank" title="在线RSS阅读器">点击查看示例</a></p>
<p>本文将讲述如何利用Ajax技术来读取RSS新闻源，如果你对什么Ajax技术不了解，可以参考《<a href="http://www.myfootprints.cn/blog/post/WhatIsAjax.html" title="什么是Ajax？" target="_blank">什么是Ajax？</a>》；如果你对什么RSS不了解，可以参考《<a href="http://www.myfootprints.cn/blog/post/WhatIsRSS.html" title="什么是RSS？" target="_blank">什么是RSS？</a>》。</p>
<p>如果你只想赶紧用起来，在自己的网站上加入想要的RSS内容，那么你可能会惊讶它会是如此的简单，即只需要在HTML文档中加入两行代码即可实现（前提是在按照下面的方法做好一些准备工作后）。为了能将自己感兴趣的RSS内容添加到自己的网站上，你需要这个RSS源的Url，如 http://www.myfootprints.cn/blog/rss.xml；而要此RSS内容添加到网页的哪个位置呢？这需要那个位置的ID，如idReader。有了这两个参数，只需写如下两行代码即可达到目的。</p>
<pre class="brush: javascript" style="text-indent: 0;">var oRssReader = new mfRSSReader('idReader', 'http://www.myfootprints.cn/blog/rss.xml');
oRssReader.loadFeed();
</pre>
<p>需要做哪些准备工作呢？准备两个文件即可。</p>
<ol style="text-indent: 0;">
<li>后台服务器代理查询文件。<p style="text-indent: 2em;">为什么需要这个文件呢？因为Ajax的本质是使用JavaScript查询网站的少量数据，而基于安全原因，客户端的JavaScript不能够跨域请求数据，即www.a.com网站上的JavaScript不可以请求www.b.com网站上的数据。然而，服务端的脚本却不存在这个限制，于是，在自己网站上添加别人的RSS新闻内容的这个需求上，有必要也有可能在客户端与别的服务器之间设置一个代理，它接收客户端JavaScript的请求，转发给目的地服务器，收到回复后将回复再转发给客户端JavaScript。（假如不是由于这个安全原因，就不需要这个文件了。）</p>
<p style="text-indent: 2em;">好了，说了这么多，要记住的就是这个文件仅仅起个传话筒的作用，将目的服务器的回复响应原封不动地转发给客户端JavaScript。它的构建非常简单，也不是重点，但却是个基础。我们的重点在于构建第二个文件，而第二个文件需要通过这个文件来获取目的服务器的数据。如果你的服务器脚本采用ASP，那么建立下面这样一个文件就行了(假设命名为newsfeeder.asp，保存在网站根目录)。</p>
<pre class="brush: vb" style="text-indent: 0;">&lt;%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%&gt;
&lt;% Option Explicit %&gt;
&lt;%Session.CodePage=65001%&gt;
&lt;%
    Response.ContentType = "text/xml"
    Dim sRSSUrl, oHTTP
    sRSSUrl = Request.QueryString("rssurl")
    
    Set oHTTP = Server.CreateObject("Microsoft.XMLHTTP")
    oHTTP.Open "GET", sRSSURL, False
    oHTTP.Send
    
    Response.Write oHTTP.ResponseXML.XML
    Set oHTTP = Nothing
%&gt;
</pre>
<p style="text-indent: 2em;">如果你的服务器脚本是PHP，那么建立如下的文件就可以了（假设命名为newsfeeder.php，保存在网站根目录）。</p>
<pre class="brush: php" style="text-indent: 0;">&lt;?php
header('Content-type: text/xml;');

// 返回RSS源数据
echo file_get_contents($_REQUEST['rssurl']);
?&gt;
</pre>
</li>
<li>获取RSS的核心JavaScript文件。<p style="text-indent: 2em;">此文件由一个mfRSSReader类以及一个辅助函数组成。正是这个mfRSSReader类隐藏了发送异步数据请求的细节，而辅助函数隐藏了如何处理响应数据的细节，使得最终使用它们是如此的简单。</p>
<p style="text-indent: 2em;">在详细展示它的代码前，我再做一些介绍。mfRSSReader类有如下几个属性，通过设置这些属性，你可以按照自己的偏好来使用它。</p>
<ul style="text-indent: 0;">
<li><strong>Request</strong>。这个属性就是XMLHTTP请求对象，它保存着服务器的响应数据，即RSS源的内容。它不需要设置。</li>
<li><strong>ReaderDivId</strong>。这个属性就是HTML文档中的一个层（Div）或者一块其他区域的ID值，通过自定义这个属性，你可以将RSS源内容显示到HTML文档中的指定的地方。</li>
<li><strong>RssUrl</strong>。这个属性保存着RSS源的Url地址。通过自定义这个值，你可以获取指定的RSS源内容。</li>
<li><strong>WaitDesc</strong>。这个属性可以用来设置查询RSS源时的说明文字。它不是必需要进行设置的。</li>
<li><strong>WaitImageSrc</strong>。这个属性是一个Url（可以是相对Url，如images/wait.gif，也可以是绝对Url，如http://www.myfootprints.cn/images/logo.gif）。它可以用来设置查询RSS源时的等待图标。它也不是必需要进行设置的。</li>
<li><strong>AjaxStateId</strong>。这个属性保存了显示Ajax查询状态信息的HTML文档中的层的ID值。它不是必需的，如果进行了设置，那么在HTML文档的指定区域，会显示Ajax的查询状态（如查询是否成功等）。</li>
<li><strong>FeedCount</strong>。这个属性不是必需设置的。它用来指定显示几条新闻。默认是10。它是用来给辅助处理函数（后面会讲到辅助处理函数）用的。</li>
<li><strong>Handler</strong>。它是处理函数的引用。通过设置它的值，你可以选择以何种方式显示RSS源。它不是必需设置的，默认为将RSS源的内容显示为一个标题列表。</li>
<li><strong>ServerFeeder</strong>。它存储着后台服务器查询代理的Url。</li>
<li><strong>TimeoutIds</strong>。它不需要进行设置。</li>
</ul>
<p style="text-indent: 2em;">以上是mfRSSReader类的属性，它还有一些方法，然而你真正会用到的就是loadFeed()方法，在设置好相关属性后（如果你懒得设置，可以一个都不设置），直接调用它，就完成了所有工作。</p>
<p style="text-indent: 2em;">辅助处理函数是干什么的呢？它就是对mfRSSReader类里的Request对象的xml数据（如上所述，Request对象保存着目的服务器的响应数据）进行分析，并以恰当的格式将数据呈现出来。你可以自定义这个函数，以自己的偏好来显示RSS新闻源内容。如果你将这个函数命名为myHandler(oRssReader)，那么，将你的mfRSSReader类的实例的Handler属性指向它即可，如下所示。注意，这个处理函数有一个参数，就是你的mfRSSReader的实例，在处理函数内部对这个参数进行处理。</p>
<pre class="brush: javascript" style="text-indent: 0;">// 定义一个mfRSSReader类的实例
var oRssReader = mfRSSReader();
// 做一些设置，如RSS源是什么，显示在HTML文档的哪个地方等
// 然后，设置自己的处理函数
oRssReader.Handler = myHandler;
// 设置完成后，加载RSS源即可
oRssReader.loadFeed();
</pre>
<p>以下即将展示这个核心JavaScript文件的所有代码，有详细的注释方便阅读，如果你不想深究，那么将复制下来，保存为mfRSSReader.js，即可按照上述介绍使用它了！注意在网页的&lt;head&gt;部分加入对此文件的引用，即：</p>
<pre class="brush: html" style="text-indent: 0;">&lt;script type="text/javascript" src="mfRSSReader.js"&gt;&lt;script/&gt;
</pre>
<p>mfRSSReader.js的代码：</p>
<pre class="brush: javascript" style="text-indent: 0;">/**
 * mfRSSReader.js.
 * 
 * Version 2.0
 * Copyright (C) 2009- admin@myfootprints.cn.
 * http://www.myfootprints.cn
 * 
 *
 * 用途：将指定的RSS源的内容显示在指定的DIV框架中
 */

//
// mfRSSReader 对象
//
// 用途：用来构建 mfRSSReader 对象
// 参数：
//  sReaderDivId, RSS内容将会在HTML文档中的ID为sReaderDivId的Div层中显示
//  sRssUrl, 指定的RSS源
//  sWaitDesc, 可选参数，加载描述文字，如"正在加载"
//  sWaitImageSrc, 可选参数，加载提示图片的Url，可以是相对路径
//  sAjaxStateDivId, 可选参数，用于显示提示Ajax状态的HTML文档中的Div层的Id，一般可以不在文档中放置这个层，这个参数可以省略
//
function mfRSSReader(sReaderDivId, sRssUrl, sWaitDesc, sWaitImageSrc, sAjaxStateDivId) {
    if (sReaderDivId) {
        this.ReaderDivId = sReaderDivId;
    } else {
        this.ReaderDivId = '';
    }
    if (sRssUrl) {
        this.RssUrl = sRssUrl;
    } else {
        this.RssUrl = '';
    }
    if (sWaitDesc) {
        this.WaitDesc = sWaitDesc;
    } else {
        this.WaitDesc = '加载中……';
    }
    if (sWaitImageSrc) {
        this.WaitImageSrc = sWaitImageSrc;
    } else {
        this.WaitImageSrc = 'http://www.myfootprints.cn/jsLib/ajaxtoolkit/wait.gif';
    }
    if (sAjaxStateDivId) {
        this.AjaxStateDivId = sAjaxStateDivId;
    } else {
        this.AjaxStateDivId = null;
    }
    // 以下为默认属性
    // 10条新闻
    this.FeedCount = 10;
    // 处理XML文档的函数
    this.Handler = mfRRA.handleFeedRequest;
    // 由于javascript的HTTP查询不能够跨越不同的服务器，需要配置一个服务器端的HTTP查询代理，在这里写上代理的服务器查询脚本的URL
    this.ServerFeeder = 'newsfeeder.asp?rssurl=';
    // Request 对象
    this.Request = null;
    // 计时器ID
    this.TimeoutIds = null;
}

//
// loadFeed 方法
//
// 用途：用来加载RSS内容
//
mfRSSReader.prototype.loadFeed = function() {
    // 清除上一次的源内容，同时显示加载中的提示信息
    var oReaderDiv = document.getElementById(this.ReaderDivId);
    if (oReaderDiv) {
        var oChilds = oReaderDiv.childNodes;
        for (var i = oChilds.length - 1; i &gt;= 0; i--) {
            oReaderDiv.removeChild(oChilds[i]);
        }
        if (this.WaitImageSrc) {
            var oImg = new Image();
            oImg.src = this.WaitImageSrc;
            if (this.WaitDesc) {
                oImg.alt = this.WaitDesc;
            } else {
                oImg.alt = '加载中……';
            }
            oReaderDiv.appendChild(oImg);
        } else if (this.WaitDesc) {
            var oText = document.createTextNode(this.WaitDesc);
            oReaderDiv.appendChild(oText);
        }
    } else {
        return;
    }
    // 发送 Ajax 请求加载新闻源内容
    var oRSSReader = this;
    this.ajaxSendRequest('GET', this.ServerFeeder + encodeURIComponent(this.RssUrl), function() { oRSSReader.Handler(oRSSReader); });
};

//
// ajaxSendRequest() 方法
//
// 用途：发送HTTP请求
//
mfRSSReader.prototype.ajaxSendRequest = function(sType, sUrl, fnHandler, sPostDataType, vPostData) {
    if (this.Request == null) {
        // 创建一个新的 Request 对象
        this.Request = this.createXMLHTTPRequest();
    } else {
        // 杀掉之前的 Request 对象
        this.Request.abort();
    }

    if (this.Request == null) {
        throw new Error('Ajax 在创建 XMLHTTPRequest 对象时遇到错误。');
    } else {
        try {
//            var sReaderDivId = this.ReaderDivId;
//            var lFeedCount = this.FeedCount;
//            var sAjaxStateDivId = this.AjaxStateDivId;
//            var oRequest = this.Request;

//            if (!fnHandler) {
//                fnHandler = function() { mfRRA.handleFeedRequest(oRequest, sReaderDivId, lFeedCount, sAjaxStateDivId); };
//            }
            this.Request.onreadystatechange = fnHandler;
            // 总是异步 第三个参数设置为true
            this.Request.open(sType, sUrl, true);
            if (sType.toLowerCase() == 'get') {
                // 发送一个GET请求，不涉及到数据
                this.Request.send(null);
            } else {
                // 发送一个POST请求，最后一个参数是数据
                this.Request.setRequestHeader('Content-Type', sPostDataType);
                this.Request.send(vPostData);
            }
        } catch (oError) {
            throw new Error('Ajax 在与服务器的通信中遇到错误。\n' + '详情：' + oError);
        }
    }
};

//
// createXMLHTTPRequest()方法
//
// 用途：创建一个新的Request对象
//
mfRSSReader.prototype.createXMLHTTPRequest = function() {
    if (typeof XMLHttpRequest == 'undefined' &amp;&amp; window.ActiveObject) {
        var arrSignatures = ["MSXML2.XMLHTTP.5.0", "XSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        for (var i = 0; i &lt; arrSignatures.length; i++) {
            try {
                var oRequest = new ActiveXObject(arrSignatures[i]);
                return oRequest;
            } catch (oError) {
                //忽略
                return null;
            }
        }
        //throw new Error("MSXML 没有安装到你的系统中。");
    } else if (window.XMLHttpRequest) {
        try {
            var oRequest = new XMLHttpRequest();
            return oRequest;
        } catch (oError) {
            return null;
        }

    } else {
        return null;
    }
};

//
// 隐藏Ajax状态信息
// 如果给定lDelay参数，则启动计时器，否则不启动
//
mfRSSReader.prototype.toggleAjaxStateInfo = function(bShow, lDelay) {
    var oStateElem = document.getElementById(this.AjaxStateDivId);

    function toggleAjaxStateInfoTo() {
        if (bShow) {
            oStateElem.style.display = 'block';
        } else {
            oStateElem.style.display = 'none';
        }
    }
    if (oStateElem) {
        if (lDelay) {
            if (this.TimeoutIds) {
                this.TimeoutIds[this.TimeoutIds.length] = window.setTimeout(toggleAjaxStateInfoTo, lDelay);
            } else {
                this.TimeoutIds = window.setTimeout(toggleAjaxStateInfoTo, lDelay);
            }
        } else {
            toggleAjaxStateInfoTo();
        }
    }
};

//
// 清除计时器
//
mfRSSReader.prototype.clearHideAjaxStateInfoTimeout = function() {
    if (this.TimeoutIds) {
        for (var i = this.TimeoutIds.length - 1; i &gt;= 0; i--) {
            window.clearTimeout(this.TimeoutIds[i]);
            this.TimeoutIds.splice(i, 1);
        }
    }
};

//
// 更新Ajax状态
//
// 参数：
//  oRequest(*), 更新哪个XMLHttpRequest对象的状态
//  sAjaxStateDivId(*), 更新状态信息到HTML文档中ID为sAjaxStateDivId中
//
mfRSSReader.prototype.ajaxUpdateState = function() {
    var oStateElem = document.getElementById(this.AjaxStateDivId);
    var oRequest = this.Request;
    if (oStateElem) {
        // 修饰一下状态元素
        oStateElem.style.fontSize = 'small';
        oStateElem.style.border = '1px solid';
        oStateElem.style.textAlign = 'center';
        try {
            this.clearHideAjaxStateInfoTimeout();
        } catch (oError) {
        } finally {
            this.toggleAjaxStateInfo(true);
        }
        switch (oRequest.readyState) {
            // UNITIALIZED - Request has not yet been opened                                         
            case 0:
                oStateElem.style.backgroundColor = "#FFFFFF"; // white
                //oStateElem.innerHTML = "Request uninitialized.";
                oStateElem.innerHTML = "查询没有启动。";
                this.toggleAjaxStateInfo(false, 2000);
                break;
            // LOADING - Request has not yet been sent                                         
            case 1:
                oStateElem.style.backgroundColor = "#999999"; // gray
                //oStateElem.innerHTML = "Request initialized.";
                oStateElem.innerHTML = "查询启动了。";
                this.toggleAjaxStateInfo(false, 2000);
                break;
            // LOADED - Request has been sent                                         
            case 2:
                oStateElem.style.backgroundColor = "#FF0000"; // red
                //oStateElem.innerHTML = "Waiting for response...";
                oStateElem.innerHTML = "等待响应……";
                this.toggleAjaxStateInfo(false, 2000);
                break;
            // INTERACTIVE - Response data is being downloaded                                         
            case 3:
                oStateElem.style.backgroundColor = "#FFFF00"; // yellow
                //oStateElem.innerHTML = "Downloading response...";
                oStateElem.innerHTML = "正在加载……";
                this.toggleAjaxStateInfo(false, 2000);
                break;
            // COMPLETE - Request/response is complete                                         
            case 4:
                if (oRequest.status == 200) {
                    // Everything is OK
                    oStateElem.style.backgroundColor = "#00FF00"; // green
                    //oStateElem.innerHTML = "Request complete!";
                    oStateElem.innerHTML = "查询完成！";
                    this.toggleAjaxStateInfo(false, 2000);
                } else {
                    // There was a problem
                    oStateElem.style.backgroundColor = "#FF8800"; // orange
                    //oStateElem.innerHTML = "Request failed!";
                    oStateElem.innerHTML = "查询失败！";
                    // 失败的信息不要隐藏
                    try {
                        this.clearHideAjaxStateInfoTimeout();
                    } catch (oError) {
                    } finally {
                    this.toggleAjaxStateInfo(true, 2000);
                    }
                }
                break;
        }
    }
};

mfRSSReader.prototype.getText = function(oElem) {
    // 获取一个元素的内部文本
    var sText = '';
    if (oElem != null) {
        if (oElem.childNodes) {
            for (var i = 0; i &lt; oElem.childNodes.length; i++) {
                if (oElem.childNodes[i].nodeValue != null) {
                    sText += oElem.childNodes[i].nodeValue;
                }
            }
        }
    }
    return sText;
};

// mfRSSReader 的助手，用来处理获取到的XML文档，你可以添加自定义的处理函数，并在调用mfRSSReader.loadFeed()方法前将 mfRSSReader.Handler 设置成为你自定义的处理函数
// 设置方法如下：
// var oRssReader = new mfRSSReader('rssreader', 'http://www.myfootprints.cn/blog/rss.xml', '正在加载……', 'http://www.myfootprints.cn/jsLib/ajaxtoolkit/wait.gif');
// oRssReader.Handler = mfRRA.myHandleFeedRequest;
//
var mfRSSReaderAssistant = new Object();
var mfRRA = mfRSSReaderAssistant;
//
// handleFeedRequest() 方法 - 默认
//
// 用途：获取到XML对象后的处理过程
//
mfRRA.handleFeedRequest = function(oRSSReader) {
    var oRequest = oRSSReader.Request;
    if (oRequest.readyState == 4 &amp;&amp; oRequest.status == 200) {
        // 保存XML响应数据
        var oXMLData = oRequest.responseXML;
        // 从源标题开始生成源内容
        var sFeedContent = '';
        var oChannelElem = oXMLData.getElementsByTagName('channel')[0];
        sFeedContent += '<div class="feedtitle"><a href="' + oRSSReader.getText(oChannelElem.getElementsByTagName('link')[0]) + '" target="_blank" title="点击查看">' + oRSSReader.getText(oChannelElem.getElementsByTagName('title')[0]) + '</a></div>';

        // 生成源条目组成的列表
        sFeedContent += '<ul>';
        var oFeedItems = oChannelElem.getElementsByTagName('item');
        var lFeedCount = oRSSReader.FeedCount;
        if (lFeedCount == -1) {
            lFeedCount = oFeedItems.length;
        }
        for (var i = 0; i &lt; (oFeedItems.length &lt; lFeedCount ? oFeedItems.length : lFeedCount); i++) {
            var sItemTitle = oRSSReader.getText(oFeedItems[i].getElementsByTagName('title')[0]);
            var sItemLink = oRSSReader.getText(oFeedItems[i].getElementsByTagName('link')[0]);
            var sItemPubDate = oRSSReader.getText(oFeedItems[i].getElementsByTagName('pubDate')[0]);
            if (sItemPubDate == '') {
                sItemPubDate = oRSSReader.getText(oFeedItems[i].getElementsByTagName('date')[0]);
            }
            if (sItemPubDate == '') {
                sFeedContent += '<li><a href="' + sItemLink + '" target="_blank" title="点击查看">' + sItemTitle + '</a></li>';
            } else {
                var sItemPubDateString = sItemPubDate;
                try {
                    var oDate = new Date(Date.parse(sItemPubDate));
                    sItemPubDate = oDate.getFullYear() + '-' + (oDate.getMonth() + 1) + '-' + oDate.getDay();
                } catch (e) {
                    sItemPubDate = sItemPubDateString;
                } finally {
                }
                sFeedContent += '<li><a href="' + sItemLink + '" target="_blank" title="点击查看">' + sItemTitle + '<span class="itemdate">(' + sItemPubDate + ')</span></a></li>';
            }
        }
        sFeedContent += '</ul>';

        // 显示源内容
        document.getElementById(oRSSReader.ReaderDivId).innerHTML = sFeedContent;
    }        
    // 更新 Ajax 状态
    if (oRSSReader.AjaxStateDivId) {
        oRSSReader.ajaxUpdateState();
    }
};

//
// handleFeedRequest_FullText_LikeGoogle() 方法 - 与默认的标题列表不同，这里将每篇新闻的全文显示出来，模仿Google Reader的样式
//
// 用途：获取到XML对象后的处理过程
//
mfRRA.handleFeedRequest_FullText_LikeGoogle = function(oRSSReader) {
    var oRequest = oRSSReader.Request;
    if (oRequest.readyState == 4 &amp;&amp; oRequest.status == 200) {
        // 保存XML响应数据
        var oXMLData = oRequest.responseXML;
        // 从源标题开始生成源内容
        var sFeedContent = '';
        var oChannelElem = oXMLData.getElementsByTagName('channel')[0];
        sFeedContent += '<div class="feedtitle">' + oRSSReader.getText(oChannelElem.getElementsByTagName('title')[0]) + '<a href="' + oRSSReader.getText(oChannelElem.getElementsByTagName('link')[0]) + '" target="_blank" title="点击查看"> »</a></div>';

        // 生成源条目组成的列表
        sFeedContent += '<div class="feedItems"><ul style="margin: 0; padding: 0; list-style-type: none;">';
        var oFeedItems = oChannelElem.getElementsByTagName('item');
        var lFeedCount = oRSSReader.FeedCount;
        if (lFeedCount == -1) {
            lFeedCount = oFeedItems.length;
        }
        for (var i = 0; i &lt; (oFeedItems.length &lt; lFeedCount ? oFeedItems.length : lFeedCount); i++) {
            var sItemTitle = oRSSReader.getText(oFeedItems[i].getElementsByTagName('title')[0]);
            var sItemLink = oRSSReader.getText(oFeedItems[i].getElementsByTagName('link')[0]);
            var sItemPubDate = oRSSReader.getText(oFeedItems[i].getElementsByTagName('pubDate')[0]);
            if (sItemPubDate == '') {
                sItemPubDate = oRSSReader.getText(oFeedItems[i].getElementsByTagName('date')[0]);
            }

            if (sItemPubDate == '') {
                sFeedContent += '<li><div class="feedItem"><div class="itemTitle"><a href="' + sItemLink + '" target="_blank" title="点击查看">' + sItemTitle + '<span class="itemTitleGo"></span></a></div>';
            } else {
                var sItemPubDateString = sItemPubDate;
                try {
                    var oDate = new Date(Date.parse(sItemPubDate));
                    sItemPubDate = oDate.getFullYear() + '-' + (oDate.getMonth() + 1) + '-' + oDate.getDay();
                } catch (e) {
                    sItemPubDate = sItemPubDateString;
                } finally {
                }
                sFeedContent += '</div></li><li><div class="feedItem"><div class="itemTitle"><a href="' + sItemLink + '" target="_blank" title="点击查看">' + sItemTitle + '<span class="itemTitleGo"></span></a><span class="itemdate">' + sItemPubDate + '</span></div>';
                
            }
            var sAuthor = oRSSReader.getText(oFeedItems[i].getElementsByTagName('author')[0]);
            sFeedContent += '<div class="itemAuthor">由 ' + sAuthor + ' 发表</div>';
            var sItemContent = oRSSReader.getText(oFeedItems[i].getElementsByTagName('description')[0]);
            sFeedContent += '<div class="itemDesc">' + sItemContent + '</div></div></li>'
        }
        sFeedContent += '</ul></div>';

        // 显示源内容
        document.getElementById(oRSSReader.ReaderDivId).innerHTML = sFeedContent;
    } 
    // 更新 Ajax 状态
    if (oRSSReader.AjaxStateDivId) {
        oRSSReader.ajaxUpdateState();
    }
};
</pre>
</li>
</ol>
</div>

      