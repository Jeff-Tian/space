---
stackbit_url_path: >-
  posts/JavaScript-练兵场
title: 'JavaScript 练兵场'
date: '2009-11-13 12:20:08'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/11/13/JavaScript-练兵场
template: post
---

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

                        <textarea name="code" class="js" id="idCode" rows="13" cols="60" style="width: 100%; overflow: auto;">/* 示例 */
/* 验证是否是有效的 Email 地址格式 */
var reEmail = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/;
var sEmail = 'admin@myfootprints.cn';
var sValid = reEmail.test(sEmail) ? '正确' : '不正确';
alert(sEmail + ' 是一个 ' + sValid + ' 的Email地址格式。');</textarea>
                        
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
<div style="text-indent: 2em;">
<hr>
<p><a target="_blank" href="http://www.myfootprints.cn/JavaScript">进入练兵场</a></p><p>在学习 JavaScript 的过程中，要理解一些自己不熟悉的语句，最好的办法莫过于自己编写小段的代码，并立即运行它。通过“编写－运行结果－修改－再运行”这样的反馈过程，达到透彻理解并掌握这门语言的目的。而传统的编写 JavaScript 代码并运行它的方法是建立一个html文件，在其中写代码，运行网页，查看效果。然而实际上，做为学习之用，我们往往只需要写短短的几行代码，而运行结果的呈现基本都是通过 alert(something) 的形式（不信你去看看那些JavaScript的教材，上面的教学示例代码几乎只有两三行，然后跟着一个 alert(something)。）。我们要为写这几行代码新建文件，为了写两三行JavaScript代码，不得不先写一些与学习无关的HTML代码。写完代码后要保存关闭，再从桌面或其他位置双击文件运行，而做这么多工作仅仅为了看看一两个跳出来的框框！而如果代码有错，要查看错误信息还得做更多工作（在IE中需要双击状态栏的左下角，在其他浏览器中要去工具栏寻找 JavaScript 调试相关的按钮）。而之后这份文件不再有用，所以还要做删除的工作（不删除可能会让你的文件夹里堆满垃圾）。</p><p>为了提高学习效率，我建立了一个在线的 JavaScript 练兵场，解决了上述学习的苦恼。在 <a target="_blank" href="http://www.myfootprints.cn/JavaScript">JavaScript 练兵场</a>，仅需两步即可达到目的。1. 写好代码； 2. 运行它！</p><p>通过在线的 JavaScript 练兵场，不仅可以更快地看到代码的运行结果，还可以即时地在信息窗口看到一些运行的错误提示信息，而不用点更多的按钮来查看。</p><p>这个练兵场的制作虽然相当地简单，但它所具有的功能的确省去了学习者的很多麻烦。可以算是小小的投入，不小的回报。</p><p><a target="_blank" href="http://www.myfootprints.cn/JavaScript">进入练兵场</a></p><p>&nbsp;</p><p>学习 JavaScript 的传统流程与使用 JavaScript 练兵场学习的流程比较</p></div><p>&nbsp;</p><p><a target="_blank" href="http://www.myfootprints.cn/JavaScript"><img onload="ResizeImage(this,520)" alt="学习 JavaScript 的传统流程与使用 JavaScript 练兵场学习的流程比较" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_413.png"></a></p>
      