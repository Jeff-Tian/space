---
stackbit_url_path: >-
  posts/如何在发布JavaScript代码时，在代码下方添加一个“点击这里运行”的快捷链接？
title: '如何在发布JavaScript代码时，在代码下方添加一个“点击这里运行”的快捷链接？'
date: '2009-12-15 06:15:44'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/12/15/如何在发布JavaScript代码时，在代码下方添加一个“点击这里运行”的快捷链接？
template: post
---

        <div id="intro" style="text-indent: 2em;">
<p>在博客里发布一些JavaScript代码时，为了让读者更方便地阅读，可以使用语法高亮器插件来增强其可读性。</p>
<p>我们再为读者多考虑一点，如果读者在看到代码时，还能够通过提供给他/她的快捷链接来方便地试运行一下代码，并且可以根据自己的需要来修改代码，然后再运行的话，那么他/她将获得对代码更直观和深刻地理解。</p>
<p>通过使用 <a href="http://www.myfootprints.cn/javascript/default.asp" target="_blank" title="涂鸦JavaScript练兵场">JavaScript 练兵场</a> 可以很容易地让读者修改代码并运行。现在的问题是如何随时方便地在自己的博客或者网站中嵌入到 <a href="http://www.myfootprints.cn/javascript/default.asp" target="_blank" title="涂鸦JavaScript练兵场">JavaScript 练兵场</a> 的链接呢？而且希望链接过去后页面应该显示我们指定的代码？</p>
<p>例如：</p>
<pre class="brush: javascript" style="text-indent: 0">// 我的代码：
alert('hello, world!');
</pre>
<p><a href="http://www.myfootprints.cn/javascript/default.asp?s=%2F%2F%20%E6%88%91%E7%9A%84%E4%BB%A3%E7%A0%81%EF%BC%9A%0Aalert('hello%2C%20world!')%3B" target="_blank" title="点击这里运行">点击这里运行</a></p>
<p>这里便提供一个向导，只需要填入指定的代码，再点击一下“嵌入到我的网站”按钮，即可获取到相应的链接。</p>
<div style="text-indent: 2em;" id="javascriptPractisePlace"> 
    <script type="text/javascript" src="../../jsLib/formUtil.js"></script> 
    <script type="text/javascript" src="../../jsLib/mfMessage.js"></script> 
    <script type="text/javascript" src="../../JavaScript/js/doodleJS.js"></script> 
    <script type="text/javascript" src="../../plugins/editarea/edit_area/edit_area_full.js"></script> 
    <script type="text/javascript"> 
    <!--
        EventUtil.addEventHandler(window, 'load', function() {
            FormUtil.focusOnFirst(); // initialisation
            editAreaLoader.init({
                id: "idCode"	// id of the textarea to transform		
			    , start_highlight: true	// if start with highlight
			    , allow_resize: "both"
			    , allow_toggle: true
			    , word_wrap: true
			    , language: "zh"
			    , syntax: "js"
            });
 
            editAreaLoader.init({
                id: "idEmbededCode"	// id of the textarea to transform		
			    , start_highlight: true	// if start with highlight
			    , allow_resize: "both"
			    , allow_toggle: true
			    , word_wrap: true
			    , language: "zh"
			    , syntax: "js"
            });
            }
        );
 
        function catchKeyUp() {
            var oEvent = EventUtil.formatEvent(window.event);
            if ((oEvent.keyCode == 13) && (oEvent.ctrlKey)) {
                executeCommand();
            }
        }
 
        function getEmbededLink() {
            return getEmbededLinkFrom(document.getElementById('idEmbededCode'));
        }
 
        function getEmbededLinkFrom(o) {
            var sCode = readCommandFrom(o);
            var oEmbededLink = document.getElementById('idEmbededLink');
            var sEmbededLink = 'http://www.myfootprints.cn/javascript/default.asp';
            var sReturnLink = sEmbededLink;
            if (sCode.length > 0) {
                sReturnLink += '?s=' + encodeURIComponent(sCode);
                sEmbededLink = '<a href="' + sReturnLink + '" target="_blank" title="点击这里运行">点击这里运行</a>';
            }
            oEmbededLink.value = sEmbededLink;
            preview(sReturnLink);
            return sReturnLink;
        }
 
        function copyEmbededLink() {
            var oLink = document.getElementById('idEmbededLink');
            var sLink = oLink.value;
            if (sLink.length > 0) {
                oLink.select();
                window.document.execCommand('Copy');
                oInfo.showMessage('嵌入链接代码已经复制成功。您可以粘贴在您的网站上了。', true);
            }
        }
 
        // 一键获取嵌入代码
        function fastGetEmbededLink() {
            var o = document.getElementById('idCode');
            var s = getEmbededLinkFrom(o);
            copyEmbededLink();
            // 焦点回到代码输入框
            try {
                o.focus();
            } catch (oError) {
            try {
                eAL.toggle('idCode');
                eAL.toggle('idCode');
            } catch (oError) {
            }
            }
            return s;
        }
 
        // 预览效果
        function preview(s) {
            oLink = document.getElementById('embededLinkPreview');
            oLink2 = document.getElementById('embededLinkPreview2');
            oLink.setAttribute('href', s);
            oLink2.setAttribute('href', s);
        }
    //-->
    </script> 
<div> 
                        <div class="tip"> 
                            <ol> 
                                <li>输入JavaScript语句；</li> 
                                <li>运行！(在手机上也可以使用哦！)</li> 
                            </ol> 
                        </div> 
 
                        <textarea name="code" class="js" id="idCode" rows="13" cols="60" style="width: 100%; overflow: auto;">// 这里填写你的代码，例如：
alert('hello, world!');</textarea> 
                        
                        <script type="text/javascript"> 
                        <!--
                            FormUtil.focusOnFirst();
                        //-->
                        </script> 
                        <p><input type="button" onclick="executeCommand()" value="运行 (R)" accesskey="r"> <input type="button" onclick="fastGetEmbededLink();" value="嵌入到我的网站 (B)" accesskey="B"></p> 
<div>信息窗</div> 
                        <textarea name="monitorWindow" class="" id="idMonitorWindow" rows="4" cols="80" readonly="readonly" style="width: 100%; overflow: auto;"></textarea> 
</div> 
 
                    <div id="embedIt"> 
                        <hr> 
                        <h2>在你的网站中嵌入JavaScript练兵场</h2> 
                        <p style="text-indent: 2em;">通过以下向导（或者直接通过上面的“嵌入到我的网站”按钮一键搞定），可以在方便地在你的网站中嵌入一个“<a id="embededLinkPreview2" href="http://www.myfootprints.cn/JavaScript/Default.asp" target="_blank" title="点击这里运行">点击这里运行</a>”的链接，通过点击此链接，即可方便地到本页面来执行你的代码。</p> 
                        <p><strong>嵌入步骤</strong></p> 
                        <ol> 
                            <li> 
                                <p>在下面填写你的JavaScript代码：</p> 
                                <textarea name="embededCode" class="js" id="idEmbededCode" rows="13" cols="60" style="width: 100%; overflow: auto;"></textarea> 
                            </li> 
                            <li> 
                                <p>获取嵌入代码：<input type="button" value="获取嵌入代码(G)" accesskey="G" onclick="getEmbededLink()"></p> 
                                <textarea name="embededLink" id="idEmbededLink" rows="4" cols="60" onfocus="copyEmbededLink();" style="width: 100%; overflow: auto;"></textarea> 
                            </li> 
                            <li> 
                                <p>复制嵌入代码：<input type="button" value="复制嵌入代码(C)" accesskey="C" onclick="copyEmbededLink()"> 完成！</p> 
                            </li> 
                        </ol> 
                        <p><strong>效果预览</strong></p> 
                        <p style="text-indent: 2em;"><a id="embededLinkPreview" href="http:/www.myfootprints.cn/JavaScript/Default.asp" target="_blank" title="点击这里运行">点击这里运行</a></p> 
                    </div> 
</div> 
</div>
      