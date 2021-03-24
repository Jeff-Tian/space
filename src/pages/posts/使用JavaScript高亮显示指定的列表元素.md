---
stackbit_url_path: >-
  posts/使用JavaScript高亮显示指定的列表元素
title: '使用JavaScript高亮显示指定的列表元素'
date: '2009-12-20 16:23:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <script type="text/javascript" src="../../jsLib/mfHighlighter.js?v=1.1"></script>
<script type="text/javascript">
<!--
function highlight(o) {
var oHighlighter = new mfHighlighter();
oHighlighter.highlight(o, null, 'background-color: blue; color: white;');
delete oHighlighter;
}
//-->
</script>
<div style="text-indent: 2em;">
<p>这里提供了一个通用的代码，用来高亮显示指定的列表元素，所谓指定的元素，是指以下几种：</p>
<ul>
<li onclick="highlight(this);">一列菜单中的某个具体菜单</li>
<li onclick="highlight(this);">一个表格中指定的行</li>
<li onclick="highlight(this);">列表中的某一项</li>
</ul>
<p>要看效果，你可以点击上面的列表项就会看到被点击的列表项会以蓝底白色显示。</p>
<p>其实，这个通用代码不仅可以高亮显示列表元素，它可以用来高亮显示任何对象。只是我们的高亮显示需求，一般表现为突出显示列表中当前选择的元素。</p>
<p>它的用法为：</p>
<pre style="text-indent: 0;" class="brush: javascript">&lt;script type="text/javascript" src="http://www.myfootprints.cn/jsLib/mfHighlighter.js"&gt;&lt;/script&gt;
var oH = new mfHighlighter();
oH.highlight(&lt;你指定的对象&gt;, [指定的高亮CSS类别名], [指定的高亮CSS字符串]);
</pre>
<p>比如，为达到以蓝底白字高亮显示以上列表，调用highlight()方法时的具体代码为：</p>
<pre style="text-indent: 0;" class="brush: javascript">&lt;script type="text/javascript" src="http://www.myfootprints.cn/jsLib/mfHighlighter.js"&gt;&lt;/script&gt;
var oH = new mfHighlighter();
oH.highlight(document.getElmentById('li元素的Id值'), null, 'background-color: blue; color: white;');
</pre>
<ol>
<li>第一个参数&lt;你指定的对象&gt;是一个DOM对象；</li>
<li>第二个参数[指定的高亮CSS类别名]是你为高亮显示的元素所设置的CSS类别名，如selected。
<pre class="brush: css" style="text-indent: 0">.selected {
background-color: blue;
color: white;
}
</pre>，如果省略它，则高亮显示的样式取决于第三个参数；</li>
<li>第三个参数[指定的高亮CSS字符串]是你为高亮显示的元素所设置的CSS样式字符串，如'background-color: blue; color: white;'。如果省略它，则高亮样式取决于第二个参数。</li>
</ol>
<p>你可以将高亮显示代码嵌入在元素的onclick事件中，以便当点击某元素后高亮显示它。这是一般的需求。当然也可以应用在onmouseover事件上。但是对于支持最新CSS标准的浏览器来说，对于这个需求，可以通过设置:hover伪类的CSS特性值来实现高亮，而不需要使用JavaScript。比如以下CSS代码给表格1带来的显示效果：</p>
<pre class="brush: css" style="text-indent: 0">tr:hover {
background-color: #3d80df;
color: #fff;
}
</pre>
<style type="text/css">
<!--
table.tbDoodles 
{
    color: Black;
    border-collapse: collapse;
    width: auto;
    border: solid 1px #666;
    border-spacing: 0; /* 控制单元格之间的距离。IE6及更低版本不理解此属性，需要在<table />元素中添加 cellspacing="0" */
}

table.tbDoodles caption 
{
    font-size: 1.2em;
    font-weight: bold;
    margin: 1em 0;
}

table.tbDoodles col 
{
    border-right: solid 1px #ccc;
}

table.tbDoodles col#idRemark 
{
    border: none;
}

/* 此Style为了通用而设置，其实和上面效果是一样的 */
table.tbDoodles col.LastCol 
{
    border: none;
}

table.tbDoodles th, table.tbDoodles td 
{
    padding: 0.1em 1em;
}

table.tbDoodles .lastColCell 
{
    border: none;
}

table.tbDoodles thead 
{
    background: #ccc url(../../images/bar.gif) repeat-x left center;
    /*border-top: solid 1px #a5a5a5;*/
    border-bottom: solid 1px #a5a5a5;
}

table.tbDoodles th 
{
    font-weight: normal;
    text-align: left;
}

table.tbDoodles #idListPostHead 
{
    text-indent: -1000em;
}

/* 此Style为了通用而设置，其实与上面的效果一样 */
table.tbDoodles .ListPostHead 
{
    text-indent: -1000em;
}

table.tbDoodles .odd 
{
    background-color: #edf5ff;
}

table.tbDoodles tr:nth-child(odd) 
{
    background-color: #edf5ff;
}

table.tbDoodles thead tr:nth-child(odd) 
{
    background-color: Transparent;
}

table.tbDoodles tr.selected 
{
    background-color: #6fb3ff;
    color: #fff;
}

table.tbDoodles tr:hover 
{
    background-color: #3d80df;
    color: #fff;
}

table.tbDoodles thead tr:hover 
{
    background-color: Transparent;
    color: inherit;
}
-->
</style>
<div>
<table width="100%" class="tbDoodles" summary="表1：系统磁盘信息" cellpadding="0" id="tbDriveInfo"> 
<caption>表1：系统磁盘信息</caption> 
<colgroup> 
    <col id="DriveName"> 
    <col id="DriveType"> 
    <col id="DriveTotalSpace"> 
    <col id="DriveAvailableSpace"> 
    <col id="idRemark"> 
</colgroup> 
<thead> 
    <tr> 
        <th>名称</th> 
        <th>类型</th> 
        <th>总大小</th> 
        <th>可用空间</th> 
        <th>是否可用</th> 
    </tr> 
</thead> 
<tbody> 
<tr onclick="highlight(this)" class="odd"><td>系统 (C:)</td><td>硬盘驱动器</td><td>18.22 GB</td><td>2.84 GB</td><td>True<div id="detail_0" style="display: none;"><div class="doodleBox3"><div class="header">详细信息</div><div class="body"><p><strong>系统 (C:)</strong></p></div></div></div></td></tr><tr onclick="highlight(this)"><td>软件 (D:)</td><td>硬盘驱动器</td><td>18.22 GB</td><td>7.85 GB</td><td>True<div id="detail_1" style="display: none;"><div class="doodleBox3"><div class="header">详细信息</div><div class="body"><p><strong>软件 (D:)</strong></p></div></div></div></td></tr><tr onclick="highlight(this)" class="odd"><td>资料 (E:)</td><td>硬盘驱动器</td><td>18.22 GB</td><td>331.81 MB</td><td>True<div id="detail_2" style="display: none;"><div class="doodleBox3"><div class="header">详细信息</div><div class="body"><p><strong>资料 (E:)</strong></p></div></div></div></td></tr><tr onclick="highlight(this)"><td>娱乐 (F:)</td><td>硬盘驱动器</td><td>18.22 GB</td><td>2.77 GB</td><td>True<div id="detail_3" style="display: none;"><div class="doodleBox3"><div class="header">详细信息</div><div class="body"><p><strong>娱乐 (F:)</strong></p></div></div></div></td></tr><tr onclick="highlight(this)" class="odd"><td>光盘驱动器 (G:)</td><td>光盘驱动器</td><td>0</td><td>0</td><td>False<div id="detail_4" style="display: none;"><div class="doodleBox3"><div class="header">详细信息</div><div class="body"><p><strong>光盘驱动器 (G:)</strong></p></div></div></div></td></tr><tr onclick="highlight(this)"><td>光盘驱动器 (H:)</td><td>光盘驱动器</td><td>0</td><td>0</td><td>False<div id="detail_5" style="display: none;"><div class="doodleBox3"><div class="header">详细信息</div><div class="body"><p><strong>光盘驱动器 (H:)</strong></p></div></div></div></td></tr> 
</tbody> 
</table> 
</div>
<p>注意，如果你的浏览器支持最新的CSS标准，那么你看到的鼠标经过时的高亮仅仅是由CSS完成的没有JavaScript的参与。而这样的高亮不能保持，即鼠标移走后，高亮条就消失了。而使用JavaScript完成的就是保持高亮，即你用鼠标点击某一行移走了鼠标，该行仍然突出显示。</p>
<p>好了，说了这么多，最后将高亮显示的JavaScript源代码贴出来(mfHighlighter.js)：</p>
<pre class="brush: javascript;" style="text-indent: 0;">//***********************************************************************************************************************
// mfHighlighter 对象
//
// 日期                 开发者                      行为
// ----------------------------------------------------------------------------------------------------------------------
// 2010-1-27            admin@myfootprints.cn       由于 IE 中会将 style.cssText 中的属性名称大写，以及去掉最后一个分号，
//                                                  导致前一版本的 mfHighter 不能对元素反高亮。此版本1.1修复了这个问题。
//***********************************************************************************************************************

function mfHighlighter() {
    this.version = 1.1;
}

mfHighlighter.prototype.highlight = function(o, sClassName, sCssText) {
    var oParent = o.parentNode;
    var oChilds = oParent.childNodes;

    // 去掉 sCssText 字符串中的最后一个分号（如果有的话）
    sCssText = sCssText.replace(/;$/, '');

    // 首先去掉所有与 o 同节点类型的元素的高亮样式
    for (var i = 0; i &lt; oChilds.length; i++) {
        if (oChilds[i].nodeType == o.nodeType) {
            var re = new RegExp(' *' + sClassName);
            oChilds[i].className = oChilds[i].className.replace(re, '');

            if (sCssText) {
                if (oChilds[i].style.cssText) {
                    if (oChilds[i].style.cssText.toLowerCase().lastIndexOf(sCssText.toLowerCase()) + sCssText.length == oChilds[i].style.cssText.length) {

                        // 如果 sCssText 是该元素的 cssText 字符串的最后一部分
                        oChilds[i].style.cssText = oChilds[i].style.cssText.replace(new RegExp(sCssText, 'gi'), '');
                    } else {
                        // 如果 sCssText 不是该元素的 cssText 字符串的最后一部分，则要连同分号一起去掉
                        oChilds[i].style.cssText = oChilds[i].style.cssText.replace(new RegExp(sCssText + ';', 'gi'), '');
                    }
                }
            }
        }
    }
    // 然后给要高亮的元素一个高亮类
    o.className += ' ' + sClassName;
    if (sCssText) {
        if (o.style.cssText) {
            o.style.cssText += sCssText;
        } else {
            o.style.cssText = sCssText;
        }
    }
}
</pre>
<p><a href="http://www.myfootprints.cn/javascript/default.asp?s=%2F%2F%20%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C%0A%2F%2F%20%E6%AD%A4%E5%87%BD%E6%95%B0%E7%94%A8%E4%BA%8E%E7%BB%99%E6%8C%87%E5%AE%9A%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%B7%BB%E5%8A%A0%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0%0Afunction%20addEventHandler(oTarget%2C%20sEventType%2C%20fnHandler%2C%20vArgument%20%2F*%20optional%20*%2F)%20%7B%0A%20%20%20%20%2F%2F%23%20%E7%94%9F%E6%88%90handler%E5%87%BD%E6%95%B0%0A%20%20%20%20var%20handler%3B%0A%20%20%20%20if%20(typeof(vArgument)%20%3D%3D%20'undefined')%20%7B%0A%20%20%20%20%20%20%20%20handler%20%3D%20fnHandler%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20handler%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fnHandler(vArgument)%3B%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%7D%0A%20%20%20%20if%20(oTarget.addEventListener)%20%7B%20%20%20%20%20%20%20%20%20%2F%2F%20for%20DOM-compliant%20browsers%0A%20%20%20%20%20%20%20%20oTarget.addEventListener(sEventType%2C%20handler%2C%20false)%3B%0A%20%20%20%20%7D%20else%20if%20(oTarget.attachEvent)%20%7B%20%20%20%20%20%20%20%2F%2F%20for%20IE%0A%20%20%20%20%20%20%20%20oTarget.attachEvent(%22on%22%20%2B%20sEventType%2C%20handler)%3B%0A%20%20%20%20%7D%20else%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20for%20all%20others%0A%20%20%20%20%20%20%20%20oTarget%5B%22on%22%20%2B%20sEventType%5D%20%3D%20handler%3B%0A%20%20%20%20%7D%0A%20%7D%0A%20%0A%2F%2F***********************************************************************************************************************%0A%2F%2F%20mfHighlighter%20%E5%AF%B9%E8%B1%A1%0A%2F%2F%0A%2F%2F%20%E6%97%A5%E6%9C%9F%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%BC%80%E5%8F%91%E8%80%85%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E8%A1%8C%E4%B8%BA%0A%2F%2F%20----------------------------------------------------------------------------------------------------------------------%0A%2F%2F%202010-1-27%20%20%20%20%20%20%20%20%20%20%20%20admin%40myfootprints.cn%20%20%20%20%20%20%20%E7%94%B1%E4%BA%8E%20IE%20%E4%B8%AD%E4%BC%9A%E5%B0%86%20style.cssText%20%E4%B8%AD%E7%9A%84%E5%B1%9E%E6%80%A7%E5%90%8D%E7%A7%B0%E5%A4%A7%E5%86%99%EF%BC%8C%E4%BB%A5%E5%8F%8A%E5%8E%BB%E6%8E%89%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%88%86%E5%8F%B7%EF%BC%8C%0A%2F%2F%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%AF%BC%E8%87%B4%E5%89%8D%E4%B8%80%E7%89%88%E6%9C%AC%E7%9A%84%20mfHighter%20%E4%B8%8D%E8%83%BD%E5%AF%B9%E5%85%83%E7%B4%A0%E5%8F%8D%E9%AB%98%E4%BA%AE%E3%80%82%E6%AD%A4%E7%89%88%E6%9C%AC1.1%E4%BF%AE%E5%A4%8D%E4%BA%86%E8%BF%99%E4%B8%AA%E9%97%AE%E9%A2%98%E3%80%82%0A%2F%2F***********************************************************************************************************************%0A%0Afunction%20mfHighlighter()%20%7B%0A%20%20%20%20this.version%20%3D%201.1%3B%0A%7D%0A%0AmfHighlighter.prototype.highlight%20%3D%20function(o%2C%20sClassName%2C%20sCssText)%20%7B%0A%20%20%20%20var%20oParent%20%3D%20o.parentNode%3B%0A%20%20%20%20var%20oChilds%20%3D%20oParent.childNodes%3B%0A%0A%20%20%20%20%2F%2F%20%E5%8E%BB%E6%8E%89%20sCssText%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%88%86%E5%8F%B7%EF%BC%88%E5%A6%82%E6%9E%9C%E6%9C%89%E7%9A%84%E8%AF%9D%EF%BC%89%0A%20%20%20%20sCssText%20%3D%20sCssText.replace(%2F%3B%24%2F%2C%20'')%3B%0A%0A%20%20%20%20%2F%2F%20%E9%A6%96%E5%85%88%E5%8E%BB%E6%8E%89%E6%89%80%E6%9C%89%E4%B8%8E%20o%20%E5%90%8C%E8%8A%82%E7%82%B9%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%85%83%E7%B4%A0%E7%9A%84%E9%AB%98%E4%BA%AE%E6%A0%B7%E5%BC%8F%0A%20%20%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20oChilds.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20if%20(oChilds%5Bi%5D.nodeType%20%3D%3D%20o.nodeType)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20re%20%3D%20new%20RegExp('%20*'%20%2B%20sClassName)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20oChilds%5Bi%5D.className%20%3D%20oChilds%5Bi%5D.className.replace(re%2C%20'')%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(sCssText)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(oChilds%5Bi%5D.style.cssText)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(oChilds%5Bi%5D.style.cssText.toLowerCase().lastIndexOf(sCssText.toLowerCase())%20%2B%20sCssText.length%20%3D%3D%20oChilds%5Bi%5D.style.cssText.length)%20%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%A6%82%E6%9E%9C%20sCssText%20%E6%98%AF%E8%AF%A5%E5%85%83%E7%B4%A0%E7%9A%84%20cssText%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E9%83%A8%E5%88%86%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20oChilds%5Bi%5D.style.cssText%20%3D%20oChilds%5Bi%5D.style.cssText.replace(new%20RegExp(sCssText%2C%20'gi')%2C%20'')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%A6%82%E6%9E%9C%20sCssText%20%E4%B8%8D%E6%98%AF%E8%AF%A5%E5%85%83%E7%B4%A0%E7%9A%84%20cssText%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E9%83%A8%E5%88%86%EF%BC%8C%E5%88%99%E8%A6%81%E8%BF%9E%E5%90%8C%E5%88%86%E5%8F%B7%E4%B8%80%E8%B5%B7%E5%8E%BB%E6%8E%89%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20oChilds%5Bi%5D.style.cssText%20%3D%20oChilds%5Bi%5D.style.cssText.replace(new%20RegExp(sCssText%20%2B%20'%3B'%2C%20'gi')%2C%20'')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20%2F%2F%20%E7%84%B6%E5%90%8E%E7%BB%99%E8%A6%81%E9%AB%98%E4%BA%AE%E7%9A%84%E5%85%83%E7%B4%A0%E4%B8%80%E4%B8%AA%E9%AB%98%E4%BA%AE%E7%B1%BB%0A%20%20%20%20o.className%20%2B%3D%20'%20'%20%2B%20sClassName%3B%0A%20%20%20%20if%20(sCssText)%20%7B%0A%20%20%20%20%20%20%20%20if%20(o.style.cssText)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20o.style.cssText%20%2B%3D%20sCssText%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20o.style.cssText%20%3D%20sCssText%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0A%0A%2F%2F%20%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%88%97%E8%A1%A8%0Afunction%20createAList()%20%7B%0A%09var%20o%20%3D%20document.createElement('div')%3B%0A%09o.innerHTML%20%3D%20'%3Cul%3E%3Cli%20id%3D%22li_1%22%3E%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%EF%BC%9B%3C%2Fli%3E%3Cli%20id%3D%22li_2%22%3E%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%85%83%E7%B4%A0%3C%2Fli%3E%3Cli%20id%3D%22li_3%22%3E%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%85%83%E7%B4%A0%3C%2Fli%3E%3Cli%20id%3D%22li_4%22%3E%E7%AC%AC%E5%9B%9B%E4%B8%AA%E5%85%83%E7%B4%A0%3C%2Fli%3E%3C%2Ful%3E'%3B%0A%09document.body.insertBefore(o%2C%20document.body.firstChild)%3B%0A%7D%0A%0A%2F%2F%20%E7%94%A8%E8%93%9D%E5%BA%95%E9%BB%84%E5%AD%97%E9%AB%98%E4%BA%AE%E6%98%BE%E7%A4%BA%E6%8C%87%E5%AE%9A%E7%9A%84%E5%85%83%E7%B4%A0%0Afunction%20highlight(o)%20%7B%0A%09var%20oH%20%3D%20new%20mfHighlighter()%3B%0A%09oH.highlight(o%2C%20null%2C%20'background-color%3A%20blue%3B%20color%3A%20yellow%3B')%3B%0A%09delete%20oH%3B%0A%7D%0A%0A%2F%2F%20%E8%B0%83%E7%94%A8%E5%88%9B%E5%BB%BA%E5%88%97%E8%A1%A8%E7%9A%84%E5%87%BD%E6%95%B0%EF%BC%8C%E5%9C%A8%E9%A1%B5%E9%9D%A2%E9%A1%B6%E9%83%A8%E6%8F%92%E5%85%A5%E4%B8%80%E4%B8%AA%E5%88%97%E8%A1%A8%0AcreateAList()%3B%0A%2F%2F%20%E7%BB%99%E8%BF%99%E4%B8%AA%E5%88%97%E8%A1%A8%E7%9A%84%E6%AF%8F%E4%B8%AA%E5%85%83%E7%B4%A0%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0%EF%BC%8C%E4%BD%BF%E5%BE%97%E5%BD%93%E9%BC%A0%E6%A0%87%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E4%B8%AD%E7%9A%84%E6%9F%90%E4%B8%AA%E5%85%83%E7%B4%A0%E6%97%B6%EF%BC%8C%E9%AB%98%E4%BA%AE%E6%98%BE%E7%A4%BA%E5%AE%83%E3%80%82%0AaddEventHandler(document.getElementById('li_1')%2C%20'click'%2C%20highlight%2C%20document.getElementById('li_1'))%3B%0AaddEventHandler(document.getElementById('li_2')%2C%20'click'%2C%20highlight%2C%20document.getElementById('li_2'))%3B%0AaddEventHandler(document.getElementById('li_3')%2C%20'click'%2C%20highlight%2C%20document.getElementById('li_3'))%3B%0AaddEventHandler(document.getElementById('li_4')%2C%20'click'%2C%20highlight%2C%20document.getElementById('li_4'))%3B%20%0A" target="_blank" title="点击这里运行">现在就来练习它！</a></p>
</div>
      