---
stackbit_url_path: >-
  posts/VBA-使用表格驱动来建立独立应用程序的菜单（自定义菜单）
title: 'VBA 使用表格驱动来建立独立应用程序的菜单（自定义菜单）'
date: '2010-02-04 07:33:55'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/02/04/VBA-使用表格驱动来建立独立应用程序的菜单（自定义菜单）
template: post
---

        <style type="text/css">
<!--
/* 仿Google的表格样式; 涂鸦， 2010-1-21 */
table.tbLikeGoogle 
{
	border: solid 1px #CCCCCC;
	border-collapse: collapse;
	width: 99%;
	background-color: White;
}

table.tbLikeGoogle tr
{
	border: solid 1px #CCCCCC;
}

/* 鼠标经过的样式 */
table.tbLikeGoogle tr:hover
{
	background-color: #F1FCFF;
}    

table.tbLikeGoogle thead tr 
{
	border-bottom: solid 1px #a6a6a6;
}

/* 表头当鼠标经过时样式不变 */
table.tbLikeGoogle thead tr:hover
{
	border-bottom: solid 1px #a6a6a6;
	background-color: transparent;
}

table.tbLikeGoogle tr td 
{
	padding: 6px 0 6px 3px;
	/* IE 7 及以下不支持 tr 的border属性 */
	border-top: solid 1px #CCCCCC;
	border-bottom: solid 1px #CCCCCC;
	border-right: solid 1px #cccccc;
	text-align: left;
}

/* 链接样式 */
table.tbLikeGoogle tr td a:link 
{
	padding: 0!important;
	margin: 0!important;
	color: #2244DD!important;
	text-decoration: underline!important;
}

table.tbLikeGoogle tr td a:link 
{
	padding: 0!important;
	margin: 0!important;
	color: #2244DD!important;
	text-decoration: underline!important;
}

table.tbLikeGoogle tr td a:link 
{
	padding: 0!important;
	margin: 0!important;
	color: #2244DD!important;
	text-decoration: underline!important;
}

table.tbLikeGoogle tr td a:link 
{
	padding: 0!important;
	margin: 0!important;
	color: #2244DD!important;
	text-decoration: underline!important;
}

table.tbLikeGoogle thead tr th
{
	/* IE 7 及以下不支持 tr 的border属性 */
	border-bottom: solid 1px #a6a6a6;
	text-align: left;
	padding: 6px 0 6px 3px;
	vertical-align: top;
}

table.tbLikeGoogle thead tr th .filter 
{
	font-weight: normal;
}
/* 仿Google的表格样式；结束 */
-->
</style>
<div style="text-indent: 2em;">
<p>《Excel 专业开发》提供了很多很好的开发框架，以表格驱动来建立自定义菜单就是其中一个很好的框架。</p>
<p>使用表格驱动建立菜单，可以很方便很简单地管理自定义菜单，节约开发与维护成本。</p>
<p>如果要建立如下图所示的菜单项：</p>
<p><img src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_360.png" alt="菜单"></p>
<p>只需要按如下格式输入自定义菜单信息：</p>
<div style="width: 100%; overflow: auto;">
<table x:str="" border="0" cellpadding="0" cellspacing="0" width="2288" style="border-collapse:
 collapse;table-layout:fixed;width:1722pt" class="tbLikeGoogle">
 <colgroup><col class="xl71" width="135" style="mso-width-source:userset;mso-width-alt:4320;
 width:101pt">
 <col class="xl71" width="102" style="mso-width-source:userset;mso-width-alt:3264;
 width:77pt">
 <col class="xl71" width="110" style="mso-width-source:userset;mso-width-alt:3520;
 width:83pt">
 <col class="xl70" width="116" style="mso-width-source:userset;mso-width-alt:3712;
 width:87pt">
 <col class="xl70" width="58" style="mso-width-source:userset;mso-width-alt:1856;
 width:44pt">
 <col class="xl70" width="76" span="2" style="mso-width-source:userset;mso-width-alt:
 2432;width:57pt">
 <col class="xl70" width="72" style="width:54pt">
 <col class="xl70" width="73" style="mso-width-source:userset;mso-width-alt:2336;
 width:55pt">
 <col class="xl70" width="89" style="mso-width-source:userset;mso-width-alt:2848;
 width:67pt">
 <col class="xl70" width="73" style="mso-width-source:userset;mso-width-alt:2336;
 width:55pt">
 <col class="xl70" width="62" style="mso-width-source:userset;mso-width-alt:1984;
 width:47pt">
 <col class="xl70" width="68" style="mso-width-source:userset;mso-width-alt:2176;
 width:51pt">
 <col class="xl70" width="89" style="mso-width-source:userset;mso-width-alt:2848;
 width:67pt">
 <col class="xl70" width="85" style="mso-width-source:userset;mso-width-alt:2720;
 width:64pt">
 <col class="xl70" width="133" style="mso-width-source:userset;mso-width-alt:4256;
 width:100pt">
 <col class="xl70" width="90" style="mso-width-source:userset;mso-width-alt:2880;
 width:68pt">
 <col class="xl70" width="86" style="mso-width-source:userset;mso-width-alt:2752;
 width:65pt">
 <col class="xl70" width="170" style="mso-width-source:userset;mso-width-alt:5440;
 width:128pt">
 <col class="xl70" width="105" style="mso-width-source:userset;mso-width-alt:3360;
 width:79pt">
 <col class="xl70" width="93" span="2" style="mso-width-source:userset;mso-width-alt:
 2976;width:70pt">
 <col class="xl70" width="72" style="width:54pt">
 <col class="xl70" width="86" style="mso-width-source:userset;mso-width-alt:2752;
 width:65pt">
 <col class="xl70" width="76" style="mso-width-source:userset;mso-width-alt:2432;
 width:57pt">
 </colgroup><tbody><tr class="xl69" height="17" style="height:12.75pt">
  <td height="17" class="xl66" width="135" style="height:12.75pt;width:101pt"><a name="TableStart">Command Bar Name</a><!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_1" onmouseover="msoCommentShow('_com_1','_anchor_1')" onmouseout="msoCommentHide('_com_1')" language="JavaScript"><a class="msocomanch" href="#_msocom_1" name="_msoanchor_1">[1]</a></span></span><!--[endif]--></td>
  <td class="xl66" width="102" style="width:77pt">Control Caption<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_2" onmouseover="msoCommentShow('_com_2','_anchor_2')" onmouseout="msoCommentHide('_com_2')" language="JavaScript"><a class="msocomanch" href="#_msocom_2" name="_msoanchor_2">[2]</a></span></span><!--[endif]--></td>
  <td class="xl66" width="110" style="width:83pt">Control Caption<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_3" onmouseover="msoCommentShow('_com_3','_anchor_3')" onmouseout="msoCommentHide('_com_3')" language="JavaScript"><a class="msocomanch" href="#_msocom_3" name="_msoanchor_3">[3]</a></span></span><!--[endif]--></td>
  <td class="xl66" width="116" style="width:87pt">Control Caption<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_4" onmouseover="msoCommentShow('_com_4','_anchor_4')" onmouseout="msoCommentHide('_com_4')" language="JavaScript"><a class="msocomanch" href="#_msocom_4" name="_msoanchor_4">[4]</a></span></span><!--[endif]--></td>
  <td class="xl67" width="58" style="width:44pt">Position<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_5" onmouseover="msoCommentShow('_com_5','_anchor_5')" onmouseout="msoCommentHide('_com_5')" language="JavaScript"><a class="msocomanch" href="#_msocom_5" name="_msoanchor_5">[5]</a></span></span><!--[endif]--></td>
  <td class="xl68" width="76" style="width:57pt">IsMenubar<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_6" onmouseover="msoCommentShow('_com_6','_anchor_6')" onmouseout="msoCommentHide('_com_6')" language="JavaScript"><a class="msocomanch" href="#_msocom_6" name="_msoanchor_6">[6]</a></span></span><!--[endif]--></td>
  <td class="xl68" width="76" style="width:57pt">Visible<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_7" onmouseover="msoCommentShow('_com_7','_anchor_7')" onmouseout="msoCommentHide('_com_7')" language="JavaScript"><a class="msocomanch" href="#_msocom_7" name="_msoanchor_7">[7]</a></span></span><!--[endif]--></td>
  <td class="xl67" width="72" style="width:54pt">Width<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_8" onmouseover="msoCommentShow('_com_8','_anchor_8')" onmouseout="msoCommentHide('_com_8')" language="JavaScript"><a class="msocomanch" href="#_msocom_8" name="_msoanchor_8">[8]</a></span></span><!--[endif]--></td>
  <td class="xl67" width="73" style="width:55pt">Protection<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_9" onmouseover="msoCommentShow('_com_9','_anchor_9')" onmouseout="msoCommentHide('_com_9')" language="JavaScript"><a class="msocomanch" href="#_msocom_9" name="_msoanchor_9">[9]</a></span></span><!--[endif]--></td>
  <td class="xl68" width="89" style="width:67pt">IsTemporary<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_10" onmouseover="msoCommentShow('_com_10','_anchor_10')" onmouseout="msoCommentHide('_com_10')" language="JavaScript"><a class="msocomanch" href="#_msocom_10" name="_msoanchor_10">[10]</a></span></span><!--[endif]--></td>
  <td class="xl68" width="73" style="width:55pt">IsEnabled<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_11" onmouseover="msoCommentShow('_com_11','_anchor_11')" onmouseout="msoCommentHide('_com_11')" language="JavaScript"><a class="msocomanch" href="#_msocom_11" name="_msoanchor_11">[11]</a></span></span><!--[endif]--></td>
  <td class="xl66" width="62" style="width:47pt">OnAction<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_12" onmouseover="msoCommentShow('_com_12','_anchor_12')" onmouseout="msoCommentHide('_com_12')" language="JavaScript"><a class="msocomanch" href="#_msocom_12" name="_msoanchor_12">[12]</a></span></span><!--[endif]--></td>
  <td class="xl67" width="68" style="width:51pt">Control ID<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_13" onmouseover="msoCommentShow('_com_13','_anchor_13')" onmouseout="msoCommentHide('_com_13')" language="JavaScript"><a class="msocomanch" href="#_msocom_13" name="_msoanchor_13">[13]</a></span></span><!--[endif]--></td>
  <td class="xl67" width="89" style="width:67pt">Control Type<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_14" onmouseover="msoCommentShow('_com_14','_anchor_14')" onmouseout="msoCommentHide('_com_14')" language="JavaScript"><a class="msocomanch" href="#_msocom_14" name="_msoanchor_14">[14]</a></span></span><!--[endif]--></td>
  <td class="xl67" width="85" style="width:64pt">Control Style<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_15" onmouseover="msoCommentShow('_com_15','_anchor_15')" onmouseout="msoCommentHide('_com_15')" language="JavaScript"><a class="msocomanch" href="#_msocom_15" name="_msoanchor_15">[15]</a></span></span><!--[endif]--></td>
  <td class="xl67" width="133" style="width:100pt">Face ID<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_16" onmouseover="msoCommentShow('_com_16','_anchor_16')" onmouseout="msoCommentHide('_com_16')" language="JavaScript"><a class="msocomanch" href="#_msocom_16" name="_msoanchor_16">[16]</a></span></span><!--[endif]--></td>
  <td class="xl68" width="90" style="width:68pt">Begin Group<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_17" onmouseover="msoCommentShow('_com_17','_anchor_17')" onmouseout="msoCommentHide('_com_17')" language="JavaScript"><a class="msocomanch" href="#_msocom_17" name="_msoanchor_17">[17]</a></span></span><!--[endif]--></td>
  <td class="xl68" width="86" style="width:65pt">Before<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_18" onmouseover="msoCommentShow('_com_18','_anchor_18')" onmouseout="msoCommentHide('_com_18')" language="JavaScript"><a class="msocomanch" href="#_msocom_18" name="_msoanchor_18">[18]</a></span></span><!--[endif]--></td>
  <td class="xl66" width="170" style="width:128pt">Tooltip<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_19" onmouseover="msoCommentShow('_com_19','_anchor_19')" onmouseout="msoCommentHide('_com_19')" language="JavaScript"><a class="msocomanch" href="#_msocom_19" name="_msoanchor_19">[19]</a></span></span><!--[endif]--></td>
  <td class="xl66" width="105" style="width:79pt">Shortcut Text<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_20" onmouseover="msoCommentShow('_com_20','_anchor_20')" onmouseout="msoCommentHide('_com_20')" language="JavaScript"><a class="msocomanch" href="#_msocom_20" name="_msoanchor_20">[20]</a></span></span><!--[endif]--></td>
  <td class="xl66" width="93" style="width:70pt">Tag<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_21" onmouseover="msoCommentShow('_com_21','_anchor_21')" onmouseout="msoCommentHide('_com_21')" language="JavaScript"><a class="msocomanch" href="#_msocom_21" name="_msoanchor_21">[21]</a></span></span><!--[endif]--></td>
  <td class="xl66" width="93" style="width:70pt">Parameter<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_22" onmouseover="msoCommentShow('_com_22','_anchor_22')" onmouseout="msoCommentHide('_com_22')" language="JavaScript"><a class="msocomanch" href="#_msocom_22" name="_msoanchor_22">[22]</a></span></span><!--[endif]--></td>
  <td class="xl67" width="72" style="width:54pt">State<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_23" onmouseover="msoCommentShow('_com_23','_anchor_23')" onmouseout="msoCommentHide('_com_23')" language="JavaScript"><a class="msocomanch" href="#_msocom_23" name="_msoanchor_23">[23]</a></span></span><!--[endif]--></td>
  <td class="xl66" width="86" style="width:65pt">ListRange<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_24" onmouseover="msoCommentShow('_com_24','_anchor_24')" onmouseout="msoCommentHide('_com_24')" language="JavaScript"><a class="msocomanch" href="#_msocom_24" name="_msoanchor_24">[24]</a></span></span><!--[endif]--></td>
  <td class="xl68" width="76" style="width:57pt">Lists<!--[if !supportAnnotations]--><span class="msocomspan1"><span class="msocomspan2" id="_anchor_25" onmouseover="msoCommentShow('_com_25','_anchor_25')" onmouseout="msoCommentHide('_com_25')" language="JavaScript"><a class="msocomanch" href="#_msocom_25" name="_msoanchor_25">[25]</a></span></span><!--[endif]--></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" class="xl70" style="height:12.75pt">Worksheet Menu Bar</td>
  <td colspan="24" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" class="xl70" style="height:12.75pt"></td>
  <td class="xl70">mf-Utility</td>
  <td colspan="11" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" align="right" x:num="" x:fmla="=msoControlPopup">10</td>
  <td colspan="3" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70">Window</td>
  <td colspan="7" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" colspan="2" class="xl70" style="height:12.75pt;mso-ignore:colspan"></td>
  <td class="xl72">拆分表格<font class="font5">(&amp;S)</font></td>
  <td colspan="8" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" colspan="2" style="mso-ignore:colspan">M<font class="font5">enuSplitTable</font></td>
  <td colspan="2" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" align="right" x:num="">461</td>
  <td colspan="2" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" colspan="2" style="mso-ignore:colspan">S<font class="font5">plit
  one table to more tables</font></td>
  <td colspan="5" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" colspan="2" class="xl70" style="height:12.75pt;mso-ignore:colspan"></td>
  <td class="xl72" colspan="2" style="mso-ignore:colspan">多表模式拆分记录<font class="font5">(&amp;R)</font></td>
  <td colspan="7" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" colspan="3" style="mso-ignore:colspan">M<font class="font5">enuSplitTable_MultiSheets</font></td>
  <td class="xl70"></td>
  <td class="xl70" align="right" x:num="">461</td>
  <td colspan="2" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" colspan="3" style="mso-ignore:colspan">S<font class="font5">plit
  one table to more tables with multi sheets</font></td>
  <td colspan="4" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" colspan="2" class="xl70" style="height:12.75pt;mso-ignore:colspan"></td>
  <td class="xl72" colspan="2" style="mso-ignore:colspan">多表模式拆分记录二<font class="font5">(&amp;M)</font></td>
  <td colspan="7" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" colspan="3" style="mso-ignore:colspan">MenuSplitTable_MultiSheets_Mode2</td>
  <td class="xl70"></td>
  <td class="xl70" align="right" x:num="">461</td>
  <td colspan="2" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" colspan="3" style="mso-ignore:colspan">S<font class="font5">plit
  one table to more tables with multi sheets</font></td>
  <td colspan="4" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" colspan="2" class="xl70" style="height:12.75pt;mso-ignore:colspan"></td>
  <td class="xl72">导出记录<font class="font5">(&amp;E)</font></td>
  <td colspan="8" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" colspan="2" style="mso-ignore:colspan">M<font class="font5">enuExtractRecords</font></td>
  <td colspan="2" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" align="right" x:num="">659</td>
  <td colspan="2" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70">E<font class="font5">xtract records</font></td>
  <td colspan="6" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" colspan="2" class="xl70" style="height:12.75pt;mso-ignore:colspan"></td>
  <td class="xl72" colspan="2" style="mso-ignore:colspan">多表模式导出记录<font class="font5">(&amp;T)</font></td>
  <td colspan="7" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" colspan="3" style="mso-ignore:colspan">MenuExtractRecords_MultiSheets</td>
  <td class="xl70"></td>
  <td class="xl70" align="right" x:num="">659</td>
  <td colspan="2" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" colspan="2" style="mso-ignore:colspan">Extract records with
  multi-sheets</td>
  <td colspan="5" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" colspan="2" class="xl70" style="height:12.75pt;mso-ignore:colspan"></td>
  <td class="xl72">删除文件夹<font class="font5">(&amp;D)</font></td>
  <td colspan="7" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" align="center" x:bool="FALSE">FALSE</td>
  <td class="xl70" colspan="2" style="mso-ignore:colspan">M<font class="font5">enuDeleteFolders</font></td>
  <td colspan="2" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" align="right" x:num="">2500</td>
  <td class="xl70" align="center" x:bool="TRUE">TRUE</td>
  <td class="xl70"></td>
  <td class="xl70">D<font class="font5">elete folders</font></td>
  <td colspan="6" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" colspan="2" class="xl70" style="height:12.75pt;mso-ignore:colspan"></td>
  <td class="xl72">在线帮助<font class="font5">(&amp;H)</font></td>
  <td colspan="8" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" colspan="2" style="mso-ignore:colspan">MenuOnlineHelp</td>
  <td colspan="2" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" align="right" x:num="">4087</td>
  <td class="xl70" align="center" x:bool="TRUE">TRUE</td>
  <td class="xl70"></td>
  <td class="xl70" colspan="3" style="mso-ignore:colspan">Online help
  (Website:http://www.myfootprints.cn)</td>
  <td colspan="4" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" colspan="2" class="xl70" style="height:12.75pt;mso-ignore:colspan"></td>
  <td class="xl72">退出<font class="font5">(&amp;X)</font></td>
  <td colspan="8" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70">AppExit</td>
  <td colspan="3" class="xl70" style="mso-ignore:colspan"></td>
  <td class="xl70" align="right" x:num="">868</td>
  <td class="xl70" align="center" x:bool="TRUE">TRUE</td>
  <td class="xl70"></td>
  <td class="xl70">E<font class="font5">xit My Footprints Utility</font></td>
  <td colspan="6" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" class="xl71" style="height:12.75pt">Stop</td>
  <td colspan="2" class="xl71" style="mso-ignore:colspan"></td>
  <td colspan="22" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <tr class="xl70" height="17" style="height:12.75pt">
  <td height="17" colspan="3" class="xl71" style="height:12.75pt;mso-ignore:colspan"></td>
  <td colspan="22" class="xl70" style="mso-ignore:colspan"></td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0" style="display:none">
  <td width="135" style="width:101pt"></td>
  <td width="102" style="width:77pt"></td>
  <td width="110" style="width:83pt"></td>
  <td width="116" style="width:87pt"></td>
  <td width="58" style="width:44pt"></td>
  <td width="76" style="width:57pt"></td>
  <td width="76" style="width:57pt"></td>
  <td width="72" style="width:54pt"></td>
  <td width="73" style="width:55pt"></td>
  <td width="89" style="width:67pt"></td>
  <td width="73" style="width:55pt"></td>
  <td width="62" style="width:47pt"></td>
  <td width="68" style="width:51pt"></td>
  <td width="89" style="width:67pt"></td>
  <td width="85" style="width:64pt"></td>
  <td width="133" style="width:100pt"></td>
  <td width="90" style="width:68pt"></td>
  <td width="86" style="width:65pt"></td>
  <td width="170" style="width:128pt"></td>
  <td width="105" style="width:79pt"></td>
  <td width="93" style="width:70pt"></td>
  <td width="93" style="width:70pt"></td>
  <td width="72" style="width:54pt"></td>
  <td width="86" style="width:65pt"></td>
  <td width="76" style="width:57pt"></td>
 </tr>
 <!--[endif]-->
</tbody></table>
</div>
<p>以下程序(MCommandBars.bas)将会根据如上输入的信息，自动构建出自定义的菜单。当需要更改、删除或者添加自定义的菜单项时，只需要在上面的表格中修改即可，而不需要更改程序代码。</p>
<pre class="brush: vb" style="text-indent: 0;">'
' Description:  This module builds the custom CommandBars specified by the
'               entries in the wksCommandBars worksheet table.
'
' Authors:      Stephen Bullen, www.oaltd.co.uk
'               Rob Bovey, www.appspro.com
'
' Chapter Change Overview
' Ch#   Comment
' --------------------------------------------------------------
' 06    Initial version
' 07    Added Window menu to support multiple-document interface
' 08    Replaced the item-by-item method of v7 with a new table-driven
'       commandbar builder. The wksCommandBars worksheet contains the table.
' 12    Added error handling to all non-trivial procedures.
'
Option Explicit
Option Private Module

' ****************************************************************************
' Module Constant Declarations Follow
' ****************************************************************************
Private Const msMODULE As String = "MCommandBars"

Private Const mlMAX_TABLE_ROWS As Long = 10000      ' The maximum number of rows the routine will use (just a safety precaution).
Private Const mlPROPERTY_NOT_SET As Long = -9999    ' Indicates that a Long data type property was not specified (0 is a valid setting for many CommandBarControl Long properties).
Private Const mlCUSTOM_CONTROL As Long = 1          ' Indicates that the control will be a custom control, not a built-in control.

'''''' wksCommandBars worksheet table range name constants. ''''''''''''''''''
' Marks the first cell in the CommandBar definition table.
Private Const msRNG_TABLE_START As String = "TableStart"

' These properties apply only to CommandBars.
Private Const msCOL_POSITION As String = "Position"
Private Const msCOL_IS_MENU_BAR As String = "IsMenubar"
Private Const msCOL_VISIBLE As String = "Visible"
Private Const msCOL_PROTECTION As String = "Protection"

' These properties apply to both CommandBars and CommandBarControls.
Private Const msCOL_WIDTH As String = "Width"
Private Const msCOL_IS_TEMPORARY As String = "IsTemporary"
Private Const msCOL_IS_ENABLED As String = "IsEnabled"

' These properties apply only to CommandBarControls.
Private Const msCOL_ONACTION As String = "OnAction"
Private Const msCOL_CONTROL_ID As String = "ControlID"
Private Const msCOL_CONTROL_TYPE As String = "ControlType"
Private Const msCOL_CONTROL_STYLE As String = "ControlStyle"
Private Const msCOL_FACE_ID As String = "FaceID"
Private Const msCOL_BEGIN_GROUP As String = "BeginGroup"
Private Const msCOL_BEFORE As String = "Before"
Private Const msCOL_TOOLTIP As String = "Tooltip"
Private Const msCOL_SHORTCUT_TEXT As String = "ShortcutText"
Private Const msCOL_TAG As String = "Tag"
Private Const msCOL_PARAMETER As String = "Parameter"
Private Const msCOL_STATE As String = "State"
Private Const msCOL_LIST_RANGE As String = "ListRange"


' ****************************************************************************
' Module Type Declaractions Follow
' ****************************************************************************
' This type structure holds the data for a single command bar. The elements
' are listed in the order in which they appear in the wksCommandBars table.
Private Type COMMANDBAR_PROPERTIES
    sBarName As String      ' The name of the CommandBar.
    lPosition As Long       ' The location of the CommandBar.
    bIsMenuBar As Boolean   ' Whether or not the CommandBar will be a menu bar.
    bVisible As Boolean     ' Whether or not the CommandBar will be made immediately visible.
    lWidth As Long          ' You can specify a width for msoBarFloating command bars.
    lProtection As Long     ' Controls what kinds of changes the user will be allowed to make to the CommandBar.
    bIsTemporary As Boolean ' Whether the CommandBar will persist between sessions.
    bIsEnabled As Boolean   ' Whether the CommandBar will be enabled upon creation. Disabled CommandBars are not visible to the user.
End Type


' This type structure holds the data for a single command bar control.
' The elements are listed in the order in which they appear in the wksCommandBars table.
Private Type CONTROL_PROPERTIES
    sControlName As String  ' The name of the control.
    lWidth As Long          ' The width of the control.
    bIsTemporary As Boolean ' Whether the control will persist between sessions.
    bIsEnabled As Boolean   ' Whether the control will be enabled upon creation.
    sOnAction As String     ' The macro assigned to the control.
    lControlID As Long      ' Used to specify a built-in control.
    lControlType As Long    ' What kind of control this is.
    lControlStyle As Long   ' Applies only to controls of lControlType msoControlButton. Specifies the appearance of the control.
    vFaceID As Variant      ' Used to specify the control face to be used.
    bBeginGroup As Boolean  ' Whether this control has a separator bar above/left of it.
    lBefore As Long         ' The index of the control to add the control before.
    sTooltip As String      ' The tootip for this control.
    sShortcutKey As String  ' The shortcut key, if any. This just displays the shortcut key. The shortcut key must be *set* in the caption.
    sTag As String          ' String data type storage for the programmer's use.
    vParameter As Variant   ' Variant data type storage for the programmer's use.
    lState As Long          ' Specifies whether the button should be depressed or normal upon creation.
    rngListRange As Excel.Range   ' The list used to populate dropdown and combobox controls.
End Type


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Creates a set of CommandBars based on the entries in the
'           wksCommandBars worksheet table.
'
' Date          Developer       Chap    Action
' ----------------------------------------------------------------------------
' 04/29/04      Rob Bovey       Ch08    Initial version
' 05/14/04      Stephen Bullen  Ch08    Set protection after all controls have been added
'                                       Also added initial call to ResetCommandBars
' 05/28/04      Rob Bovey       Ch12    Added error handling
'
Public Function bBuildCommandBars() As Boolean
    
    Const sSOURCE As String = "bBuildCommandBars()"
    
    Dim bReturn As Boolean                          ' The function return value.
    Dim uCommandBarAtr As COMMANDBAR_PROPERTIES     ' The attribute type structures for the CommandBars.
    Dim uCtlProperties As CONTROL_PROPERTIES        ' The attribute type structures for the CommandBarControls.
    Dim rngCurrentBarStart As Excel.Range           ' The first cell of the current command bar definition.
    Dim rngCurrentBarStop As Excel.Range            ' The first cell of the current command bar definition.
    Dim rngCurrentControlStart As Excel.Range       ' The cell holding the name of the control currently being added to the command bar.
    Dim rngCurrentRow As Excel.Range                ' The current CommandBar definition table row being read.
    Dim rngTemp As Excel.Range
    Dim cbrCurrentBar As Office.CommandBar          ' The commandbar currently being built or modified.
    Dim ctlTopControl As Office.CommandBarControl   ' Used to test the return value of ctlAddNewControl.
    
    On Error GoTo ErrorHandler
    
    ' Assume success until an error is encountered.
    bReturn = True
    
    ' Remove any previous command bars that may be left over from a crash.
    ResetCommandBars
    
    ' Set a reference to the starting cell of the first command bar definition.
    Set rngCurrentBarStart = wksCommandBars.Range(msRNG_TABLE_START).Offset(1, 0)
    
    '# Edit By myfootprints.cn@gmail.com 2008-12-01
    If rngCurrentBarStart Is Nothing Then
        'Set rngCurrentBarStart = wksCommandBars.Range("A1").Offset(1, 0)
        Err.Raise -1, sSOURCE, "The worksheet wksCommandBars is not been set correctly. Please check the name defenition."
    End If
    '# Edit End

    ' Start the Add CommandBar loop.
    Do While rngCurrentBarStart.Row &lt; mlMAX_TABLE_ROWS

        ' Find the last cell in the current CommandBar definition.
        Set rngCurrentBarStop = rngCurrentBarStart.End(xlDown)
        Set rngCurrentRow = rngCurrentBarStart.EntireRow
        
        ' Get the name of the CommandBar.
        uCommandBarAtr.sBarName = Trim$(rngCurrentBarStart.value)
        
        ' If a CommandBar by the name of sCurrentBar doesn't already exist then add one.
        If Not bCommandbarExists(uCommandBarAtr.sBarName, cbrCurrentBar) Then
        
            ' Load the CommandBar type structure with the properties of the CommandBar
            ' being added. Default values are loaded for unspecified properties.
            With uCommandBarAtr
                Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_POSITION))
                If IsEmpty(rngTemp.value) Then .lPosition = msoBarTop Else .lPosition = CLng(rngTemp.value)
                If .lPosition = msoBarPopup Then
                    .bIsMenuBar = False
                Else
                    .bIsMenuBar = CBool(Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_IS_MENU_BAR)).value)
                End If
                Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_VISIBLE))
                ' The Visible property *must* be false for msoBarPopup type CommandBars.
                If .lPosition = msoBarPopup Then .bVisible = False Else .bVisible = CBool(rngTemp.value)
                Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_WIDTH))
                ' The Width property only applies to msoBarFloating type CommandBars.
                If IsEmpty(rngTemp.value) Or .lPosition &lt;&gt; msoBarFloating Then .lWidth = mlPROPERTY_NOT_SET Else .lWidth = CLng(rngTemp.value)
                Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_PROTECTION))
                If IsEmpty(rngTemp.value) Then .lProtection = msoBarNoCustomize Else .lProtection = CLng(rngTemp.value)
                Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_IS_TEMPORARY))
                If IsEmpty(rngTemp.value) Then .bIsTemporary = True Else .bIsTemporary = CBool(rngTemp.value)
                Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_IS_ENABLED))
                If IsEmpty(rngTemp.value) Then .bIsEnabled = True Else .bIsEnabled = CBool(rngTemp.value)
            End With
            
            If Not bAddNewCommandBar(uCommandBarAtr) Then Err.Raise glHANDLED_ERROR
            
            Set cbrCurrentBar = Application.CommandBars(uCommandBarAtr.sBarName)
        
        End If

        ' Set a reference to the postion of the first control for sCurrentBar
        Set rngCurrentControlStart = rngCurrentBarStart.Offset(0, 1).End(xlDown)

        ' The add controls loop.
        Do While rngCurrentControlStart.Row &lt; rngCurrentBarStop.Row
        
            ' Load the control attribute type structure.
            If Not bLoadControlAttributes(rngCurrentControlStart, uCtlProperties, cbrCurrentBar) Then Err.Raise glHANDLED_ERROR
            
            ' If sCurrentControl has sub-controls it will be a CommandBarPopup.
            If Len(rngCurrentControlStart.Offset(1, 1).value) &gt; 0 Then
            
                ' Check to see if it exists already. Add it if it doesn't.
                If Not bControlExists(cbrCurrentBar, uCtlProperties.sControlName) Then
                    Set ctlTopControl = Nothing
                    Set ctlTopControl = ctlAddNewControl(cbrCurrentBar, uCtlProperties)
                    If ctlTopControl Is Nothing Then Err.Raise glHANDLED_ERROR
                Else
                    Set ctlTopControl = cbrCurrentBar.Controls(uCtlProperties.sControlName)
                End If
                
                ' Add the sub-controls the the CommandBarPopup.
                If Not bAddSubControls(ctlTopControl, rngCurrentControlStart, rngCurrentBarStop.Row) Then Err.Raise glHANDLED_ERROR
                
            Else    ' If sCurrentControl has no sub-controls then set its properties directly.
            
                ' Only add it if it doesn't already exist.
                If Not bControlExists(cbrCurrentBar, uCtlProperties.sControlName) Then
                    Set ctlTopControl = Nothing
                    Set ctlTopControl = ctlAddNewControl(cbrCurrentBar, uCtlProperties)
                    If ctlTopControl Is Nothing Then Err.Raise glHANDLED_ERROR
                End If
                
            End If
            
            ' Reset the starting point for the next control.
            If Len(rngCurrentControlStart.Offset(1, 0).value) &gt; 0 Then
                Set rngCurrentControlStart = rngCurrentControlStart.Offset(1, 0)
            Else
                Set rngCurrentControlStart = rngCurrentControlStart.End(xlDown)
            End If
            
        Loop
    
        ' CommandBar width and protection can't be set until after the controls have been added.
        If uCommandBarAtr.lWidth &gt; 0 Then cbrCurrentBar.Width = uCommandBarAtr.lWidth
        If Not cbrCurrentBar.BuiltIn Then cbrCurrentBar.Protection = uCommandBarAtr.lProtection
    
        ' Reset the starting point for the next command bar.
        Set rngCurrentBarStart = rngCurrentBarStop.End(xlDown)
   
    Loop
   
ErrorExit:

    ' This is required to get any FaceID pictures that we've copied out of
    ' the clipboard (Application.CutCopyMode = False alone doesn't work).
    wksCommandBars.Range("A1").Copy
    Application.CutCopyMode = False
    bBuildCommandBars = bReturn
    Exit Function
   
ErrorHandler:
    If Err.Number &lt;&gt; glHANDLED_ERROR Then Err.Description = Err.Description &amp; " (" &amp; sSOURCE &amp; ")"
    bReturn = False
    If bCentralErrorHandler(msMODULE, sSOURCE) Then
        Stop
        Resume
    Else
        Resume ErrorExit
    End If
End Function


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Reads the CommandBars table and removes all custom CommandBars and
'           controls defined there.
'           This code makes the implicit assumption that cascading submenus
'           are either 100% built-in or 100% custom.
'
' Date          Developer       Chap    Action
' --------------------------------------------------------------------------
' 04/29/04      Rob Bovey       Ch08    Initial version
' 05/28/04      Rob Bovey       Ch12    Added error handling
'
Public Sub ResetCommandBars()
    
    Dim rngCurrentBarStart As Excel.Range       ' The first cell of the current command bar definition.
    Dim rngCurrentBarStop As Excel.Range        ' The first cell of the current command bar definition.
    Dim rngCurrentControlStart As Excel.Range   ' The cell holding the name of the control currently being added to the command bar.
    Dim lSubMenuCount As Long
    Dim cbrBar As Office.CommandBar
    Dim ctlMenuControl As Office.CommandBarControl
    Dim sCurrentBar As String                   ' Holds the name of the command bar currently being built.
    Dim sCurrentControl As String               ' The name of the Control currently being deleted.
    Dim sSubMenu As String                      ' The current submenu.
    
    If gbDEBUG_MODE Then
        On Error GoTo 0
    Else
        On Error Resume Next
    End If

    ' Set a reference to the starting cell of the first command bar definition.
    Set rngCurrentBarStart = wksCommandBars.Range(msRNG_TABLE_START).Offset(1, 0)
    
    '# Edit By myfootprints.cn@gmail.com 2088-8-2
    If rngCurrentBarStart Is Nothing Then
        ' If rngCurrentBarStart is still nothing, give it a default value
        Set rngCurrentBarStart = wksCommandBars.Range("A1").Offset(1, 0)
    End If
    '# Edit End

    ' Start processing the CommandBars table.
    Do While rngCurrentBarStart.Row &lt; mlMAX_TABLE_ROWS

        ' Find the last cell in the current command bar definition.
        Set rngCurrentBarStop = rngCurrentBarStart.End(xlDown)
        
        ' Grab the name of the current command bar.
        sCurrentBar = Trim$(rngCurrentBarStart.value)

        ' Only continue if the CommandBar has not already been deleted.
        If bCommandbarExists(sCurrentBar, cbrBar) Then

            ' If the whole CommandBar is custom then just delete it.
            If Not cbrBar.BuiltIn Then
                cbrBar.Delete
            Else    ' Otherwise loop through and check each control.
            
                ' Set a reference to the postion of the first control for sCurrentBar
                Set rngCurrentControlStart = rngCurrentBarStart.Offset(0, 1).End(xlDown)
        
                ' Loop the top-level controls.
                Do While rngCurrentControlStart.Row &lt; rngCurrentBarStop.Row
                
                    ' The name of the control to check.
                    sCurrentControl = Trim$(rngCurrentControlStart.value)

                    ' Only continue if the control has not already been deleted.
                    If bControlExists(cbrBar, sCurrentControl) Then
                    
                        Set ctlMenuControl = cbrBar.Controls(sCurrentControl)
                                
                        ' If it's custom delete it, otherwise continue.
                        If Not ctlMenuControl.BuiltIn Then
                            ctlMenuControl.Delete
                        Else
                        
                            ' If the top-level control has sub-controls, loop them.
                            If Len(rngCurrentControlStart.Offset(1, 1).value) &gt; 0 Then
                            
                                lSubMenuCount = 1
                                
                                Do While rngCurrentControlStart.Offset(lSubMenuCount, 1).Row &lt; rngCurrentBarStop.Row
                                    sSubMenu = Trim$(rngCurrentControlStart.Offset(lSubMenuCount, 1).value)
                                    If Len(sSubMenu) &gt; 0 Then
                                        ' Delete the submenu if it isn't built-in.
                                        With ctlMenuControl.Controls(sSubMenu)
                                            If Not .BuiltIn Then .Delete
                                        End With
                                    End If
                                    lSubMenuCount = lSubMenuCount + 1
                                Loop
                                
                            End If
                        
                        End If
                    
                    End If
                    
                    ' Reset the starting point for the next control.
                    If Len(rngCurrentControlStart.Offset(1, 0).value) &gt; 0 Then
                        Set rngCurrentControlStart = rngCurrentControlStart.Offset(1, 0)
                    Else
                        Set rngCurrentControlStart = rngCurrentControlStart.End(xlDown)
                    End If
                    
                Loop
            
            End If
            
        End If
        
        ' Reset the starting point for the next command bar.
        Set rngCurrentBarStart = rngCurrentBarStop.End(xlDown)
       
    Loop
       
End Sub


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Adds sub-controls to a CommandBarPopup control.
'
' Arguments:    ctlTopControl       The CommandBarPopup to which controls will
'                                   be added.
'               rngCurControlStart  The cell in wksCommandBars at which the
'                                   definition of ctlTopControl begins.
'               lBarStopRow         The last row in the current CommandBar
'                                   definition.
'
' Date          Developer       Chap    Action
' ----------------------------------------------------------------------------
' 04/29/04      Rob Bovey       Ch08    Initial version
' 05/28/04      Rob Bovey       Ch12    Added error handling
'
Private Function bAddSubControls(ByRef ctlTopControl As Office.CommandBarPopup, ByRef rngCurControlStart As Excel.Range, ByVal lBarStopRow As Long) As Boolean

    Const sSOURCE As String = "bAddSubControls()"
    
    Dim bReturn As Boolean
    Dim uCtlProperties As CONTROL_PROPERTIES
    Dim rngCurLevel1Control As Excel.Range          ' The table definition range of the Level1Control being added.
    Dim rngCurLevel2Control As Excel.Range          ' The table definition range of the Level2Control being added.
    Dim lTopControlStopRow As Long                  ' The last row in the top control's table definition.
    Dim lSubMenuItemStopRow As Long                 ' The last row in the Level2Control control's table definition.
    Dim ctlControlItem As Office.CommandBarControl  ' A reference to the first level control being added (used when level 2 controls are specified).
    Dim ctlReturn As Office.CommandBarControl       ' Tests the return value of the ctlAddNewControl function.
    
    On Error GoTo ErrorHandler
    
    ' Assume success until an error is encountered.
    bReturn = True
    
    ' Set a reference to the table definition range of the Level1Control being added.
    Set rngCurLevel1Control = rngCurControlStart.Offset(1, 1)
    
    ' Grab the number of the last row in the top control's table definition.
    lTopControlStopRow = rngCurControlStart.End(xlDown).Row
    
    ' Make sure we don't read past the end of the command bar definition
    If lTopControlStopRow &gt; lBarStopRow Then lTopControlStopRow = lBarStopRow
    
    ' Add sub-controls loop.
    Do While rngCurLevel1Control.Row &lt; lTopControlStopRow
        
        ' Load the control attribute type structure.
        If Not bLoadControlAttributes(rngCurLevel1Control, uCtlProperties, ctlTopControl) Then Err.Raise glHANDLED_ERROR
        
        ' If True, it's an msoControlPopup, otherwise it's an msoControlButton.
        If Len(rngCurLevel1Control.Offset(1, 0).value) = 0 And Len(rngCurLevel1Control.Offset(1, 1).value) &gt; 0 Then
        
            ' Add the msoControlPopup.
            If Not bControlExists(ctlTopControl, uCtlProperties.sControlName) Then
                Set ctlControlItem = Nothing
                Set ctlControlItem = ctlAddNewControl(ctlTopControl, uCtlProperties)
                If ctlControlItem Is Nothing Then Err.Raise glHANDLED_ERROR
            Else
                ' Set a reference to the existing control
                Set ctlControlItem = ctlTopControl.Controls(uCtlProperties.sControlName)
            End If
            
            ' Grab the last row in the Level 2 control's table definition.
            If Len(rngCurLevel1Control.Offset(2, 1).value) = 0 Then
                ' Only a single level 2 control.
                lSubMenuItemStopRow = rngCurLevel1Control.Offset(1, 1).Row
            Else
                ' Multiple level 2 controls.
                lSubMenuItemStopRow = rngCurLevel1Control.Offset(1, 1).End(xlDown).Row
            End If
            
            ' Add the msoControlPopup sub-controls.
            If lSubMenuItemStopRow &lt; lTopControlStopRow Then
            
                ' Set a reference to the table definition range of the Level2Control being added.
                Set rngCurLevel2Control = rngCurLevel1Control.Offset(1, 1)
                
                ' msoControlPopup sub-controls loop.
                Do While rngCurLevel2Control.Row &lt;= lSubMenuItemStopRow
                
                    ' Load the control attribute type structure.
                    If Not bLoadControlAttributes(rngCurLevel2Control, uCtlProperties, ctlControlItem) Then Err.Raise glHANDLED_ERROR
                    
                    ' Add the sub-control.
                    Set ctlReturn = Nothing
                    Set ctlReturn = ctlAddNewControl(ctlControlItem, uCtlProperties)
                    If ctlReturn Is Nothing Then Err.Raise glHANDLED_ERROR
                    
                    ' Increment the range for the next sub-control.
                    Set rngCurLevel2Control = rngCurLevel2Control.Offset(1, 0)
                    
                Loop
        
            End If
                
            ' Increment the range for the next level 1 control.
            Set rngCurLevel1Control = rngCurLevel1Control.End(xlDown)
            
        Else    ' It's an msoControlButton, assign all properties directly.
    
            If Not bControlExists(ctlTopControl, uCtlProperties.sControlName) Then
                Set ctlControlItem = Nothing
                Set ctlControlItem = ctlAddNewControl(ctlTopControl, uCtlProperties)
                If ctlControlItem Is Nothing Then Err.Raise glHANDLED_ERROR
            End If
            
            ' Increment the range for the next level 1 control.
            Set rngCurLevel1Control = rngCurLevel1Control.Offset(1, 0)
            
        End If
    
    Loop
    
ErrorExit:

    bAddSubControls = bReturn
    Exit Function

ErrorHandler:
    If Err.Number &lt;&gt; glHANDLED_ERROR Then Err.Description = Err.Description &amp; " (" &amp; sSOURCE &amp; ")"
    bReturn = False
    If bCentralErrorHandler(msMODULE, sSOURCE) Then
        Stop
        Resume
    Else
        Resume ErrorExit
    End If
End Function


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Adds a new CommandBar.
'
' Arguments:    uBarProperties  The type structure containing all the
'                               CommandBar's properties.
'
' Date          Developer       Chap    Action
' ----------------------------------------------------------------------------
' 04/29/04      Rob Bovey       Ch08    Initial version
' 05/14/04      Stephen Bullen  Ch08    Moved Protection setting to the end of main
'                                       procedure to avoid crash when pasting pictures.
' 05/28/04      Rob Bovey       Ch12    Added error handling
'
Private Function bAddNewCommandBar(ByRef uBarProperties As COMMANDBAR_PROPERTIES) As Boolean

    Const sSOURCE As String = "bAddNewCommandBar()"
    
    Dim bReturn As Boolean
    Dim cbrBar As Office.CommandBar
    
    On Error GoTo ErrorHandler
    
    ' Assume success until an error is encountered.
    bReturn = True
    
    Set cbrBar = Nothing
    
    With uBarProperties
        Set cbrBar = Application.CommandBars.Add(.sBarName, .lPosition, .bIsMenuBar, .bIsTemporary)
    End With
    
    ' Set any properties that could not be set during CommandBar creation.
    With uBarProperties
        ' You can't set the visible property for Popup CommandBars.
        If .lPosition &lt;&gt; msoBarPopup Then cbrBar.Visible = .bVisible
        If .lWidth &lt;&gt; mlPROPERTY_NOT_SET Then cbrBar.Width = .lWidth
        cbrBar.Enabled = .bIsEnabled
    End With
    
ErrorExit:

    bAddNewCommandBar = bReturn
    Exit Function
    
ErrorHandler:
    If Err.Number &lt;&gt; glHANDLED_ERROR Then Err.Description = Err.Description &amp; " (" &amp; sSOURCE &amp; ")"
    bReturn = False
    If bCentralErrorHandler(msMODULE, sSOURCE) Then
        Stop
        Resume
    Else
        Resume ErrorExit
    End If
End Function


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Determines if the specified CommandBar already exists.
'
' Arguments:    sBarName    The name of the CommandBar to look for.
'               cbrBar      Returns a reference to the CommandBar if it exists.
'
' Returns:      Boolean     True if the CommandBar already exists,
'                           False otherwise.
'
' Date          Developer       Chap    Action
' ----------------------------------------------------------------------------
' 04/29/04      Rob Bovey       Ch08    Initial version
'
Private Function bCommandbarExists(ByVal sBarName As String, ByRef cbrBar As Office.CommandBar) As Boolean

    If IsNumeric(sBarName) Then
        ' If an index was passed for the CommandBar name, check for it directly.
        On Error Resume Next
            Set cbrBar = Application.CommandBars(CLng(sBarName))
        On Error GoTo 0
    Else
        ' Otherwise loop the CommandBars collection and look for a name match.
        For Each cbrBar In Application.CommandBars
            ' If a match is located, exit the loop.
            If StrComp(cbrBar.Name, sBarName, vbTextCompare) = 0 Then Exit For
        Next cbrBar
    End If
    
    bCommandbarExists = Not cbrBar Is Nothing

End Function


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Adds a CommandBarControl to a CommandBar or CommandBarPopup.
'
' Arguments:    objTarget           The CommandBar or CommandBarPopup to add the
'                                   control to.
'               uCtlProperties      A type structure containing the properties
'                                   of the control to be added.
'
' Returns:      CommandBarControl   An object reference to the control that was
'                                   created.
'
' Date          Developer       Chap    Action
' ----------------------------------------------------------------------------
' 04/29/04      Rob Bovey       Ch08    Initial version
' 05/13/04      Stephen Bullen  Ch08    Allow built-in controls to have custom faces.
' 05/28/04      Rob Bovey       Ch12    Added error handling
'
Private Function ctlAddNewControl(ByRef objTarget As Object, ByRef uCtlProperties As CONTROL_PROPERTIES) As Office.CommandBarControl

    Const sSOURCE As String = "ctlAddNewControl()"
    Const sDOUBLE As String = "Double"
    Const sSTRING As String = "String"

    Static bSetOnce As Boolean
    
    Dim rngCell As Excel.Range
    Dim lSeparator As Long
    Dim objButton As Object
    Dim ctlControl As Office.CommandBarControl
    
    If gbDEBUG_MODE Then
        On Error GoTo 0
    Else
        On Error GoTo ErrorHandler
    End If
    
    With uCtlProperties
        ' Different .Add calls are required depending on whether the control is a
        ' custom control and whether or not the Before property was specified.
        If .lControlID = mlCUSTOM_CONTROL Then
            ' This is a custom control, specify its Parameter property.
            If .lBefore = mlPROPERTY_NOT_SET Then
                ' Before not specified.
                Set ctlControl = objTarget.Controls.Add(.lControlType, .lControlID, .vParameter, , .bIsTemporary)
            Else
                ' Before was specified.
                Set ctlControl = objTarget.Controls.Add(.lControlType, .lControlID, .vParameter, .lBefore, .bIsTemporary)
            End If
        Else
            ' This is a built-in control, do not specify its Type property.
            If .lBefore = mlPROPERTY_NOT_SET Then
                ' Before not specified.
                Set ctlControl = objTarget.Controls.Add(, .lControlID, .vParameter, , .bIsTemporary)
            Else
                ' Before was specified.
                Set ctlControl = objTarget.Controls.Add(, .lControlID, .vParameter, .lBefore, .bIsTemporary)
            End If
        End If
    End With
    
    If uCtlProperties.lControlID = mlCUSTOM_CONTROL Then ctlControl.Caption = uCtlProperties.sControlName
    If uCtlProperties.lControlStyle &lt;&gt; mlPROPERTY_NOT_SET Then ctlControl.Style = uCtlProperties.lControlStyle
    If uCtlProperties.lWidth &lt;&gt; mlPROPERTY_NOT_SET Then ctlControl.Width = uCtlProperties.lWidth
    
    ' These properties are set for all controls.
    ctlControl.BeginGroup = uCtlProperties.bBeginGroup
    ctlControl.Enabled = uCtlProperties.bIsEnabled
    If Len(uCtlProperties.sTooltip) &gt; 0 Then ctlControl.TooltipText = uCtlProperties.sTooltip
    If Len(uCtlProperties.sShortcutKey) &gt; 0 Then
        ctlControl.ShortcutText = uCtlProperties.sShortcutKey
        If Not bSetOnce Then
            ' The ShortcutText property will have no effect unless these two
            ' CommandBar properties are turned on. This only needs to be done
            ' once, hence the static bSetOnce flag variable.
            With Application.CommandBars
                .DisplayTooltips = True
                .DisplayKeysInTooltips = True
            End With
            bSetOnce = True
        End If
    End If
    If Len(uCtlProperties.sTag) &gt; 0 Then ctlControl.Tag = uCtlProperties.sTag
    
    If TypeName(uCtlProperties.vFaceID) = sDOUBLE Then
        ' The ID number of a built-in button FaceID.
        ctlControl.FaceId = CLng(uCtlProperties.vFaceID)
    ElseIf TypeName(uCtlProperties.vFaceID) = sSTRING Then
    
        ' A bitmap (and maybe mask) which must be located on the CommandBar definition worksheet.
        lSeparator = InStr(1, uCtlProperties.vFaceID, "/")
        
        If lSeparator &gt; 0 Then  ' A picture and a transparency mask, separated by a /.

            ' Setting the picture and mask is only supported in Excel 2002 and up, so check here.
            If Val(Application.Version) &gt;= 10 Then
            
                ' Excel 2002 or higher, we can set the picture and mask.
                Set objButton = ctlControl

                ' Copy the picture to the clipboard and set as the Picture.
                wksCommandBars.Shapes(Trim$(Left$(uCtlProperties.vFaceID, lSeparator - 1))).CopyPicture xlScreen, xlBitmap
                objButton.Picture = PastePicture(xlBitmap)

                ' Copy the mask to the clipboard and set as the Mask.
                wksCommandBars.Shapes(Trim$(Mid$(uCtlProperties.vFaceID, lSeparator + 1))).CopyPicture xlScreen, xlBitmap
                objButton.Mask = PastePicture(xlBitmap)
                
            Else
                ' Excel 97/2000, so just copy/paste the picture.
                wksCommandBars.Shapes(Trim$(Left$(uCtlProperties.vFaceID, lSeparator - 1))).CopyPicture
                ctlControl.PasteFace
            End If
            
        Else
            ' Just a picture, so copy to the clipboard and paste to the button.
            wksCommandBars.Shapes(Trim$(uCtlProperties.vFaceID)).CopyPicture
            ctlControl.PasteFace
        End If
        
    End If

    ' These properties are set for custom controls only.
    If uCtlProperties.lControlID = mlCUSTOM_CONTROL Then
    
        If Len(uCtlProperties.sOnAction) &gt; 0 Then ctlControl.OnAction = uCtlProperties.sOnAction

        If uCtlProperties.lState &lt;&gt; mlPROPERTY_NOT_SET Then ctlControl.State = uCtlProperties.lState
        
        If uCtlProperties.lControlType = msoControlComboBox Or uCtlProperties.lControlType = msoControlDropdown Then
            If Not uCtlProperties.rngListRange Is Nothing Then
                For Each rngCell In uCtlProperties.rngListRange
                    ctlControl.AddItem rngCell.value
                Next rngCell
            End If
        End If
            
    End If

    ' Return an object reference to the new control.
    Set ctlAddNewControl = ctlControl
    Exit Function

ErrorHandler:
    If Err.Number &lt;&gt; glHANDLED_ERROR Then Err.Description = Err.Description &amp; " (" &amp; sSOURCE &amp; ")"
    Set ctlAddNewControl = Nothing
End Function


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Determines whether a CommandBarControl with the specified caption
'           exists on the specified CommandBar or CommandBarPopup.
'
' Arguments:    objTarget       The CommandBar or CommandBarPopup to look for
'                               the control on.
'               sFindCaption    The caption of the control to look for.
'
' Returns:      Boolean         True if the control exists, False otherwise.
'
' Date          Developer       Chap    Action
' ----------------------------------------------------------------------------
' 04/29/04      Rob Bovey       Ch08    Initial version
'
Private Function bControlExists(ByRef objTarget As Object, ByVal sFindCaption As String) As Boolean

    Const sAMPERSAND As String = "&amp;"

    Dim bLocated As Boolean
    Dim objFunc As Excel.WorksheetFunction
    Dim ctlControls As Office.CommandBarControls    ' The collection being searched.
    Dim ctlControl As Office.CommandBarControl      ' Collection counter.
    Dim sCompareCaption As String                  ' The caption on the current control in the loop.
    
    Set objFunc = Application.WorksheetFunction
    
    ' Remove the accelerator symbol if there is one.
    sFindCaption = objFunc.Substitute(sFindCaption, sAMPERSAND, "")
    
    Set ctlControls = objTarget.Controls
    
    ' Loop through each control on the specified object and try to match sFindCaption.
    For Each ctlControl In ctlControls
        ' Remove the accelerator symbol if there is one.
        sCompareCaption = objFunc.Substitute(ctlControl.Caption, sAMPERSAND, "")
        ' If a match is located, return True and exit.
        If StrComp(sCompareCaption, sFindCaption, vbTextCompare) = 0 Then
            bLocated = True
            Exit For
        End If
    Next ctlControl
    
    bControlExists = bLocated
    
End Function


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Loads a CONTROL_PROPERTIES type structure with values for a
'           CommandBarControl from the wksCommandBars table.
'
' Arguments:    rngStartCell    The cell containing the name of the control
'               uCtlProperties  The type structure to be loaded with the control
'                               properties.
'               objParent       A reference to the parent control of the control
'                               being loaded.
'
' Date          Developer       Chap    Action
' --------------------------------------------------------------------------
' 04/29/04      Rob Bovey       Ch08    Initial version
' 05/28/04      Rob Bovey       Ch12    Added error handling
'
Private Function bLoadControlAttributes(ByRef rngStartCell As Excel.Range, ByRef uCtlProperties As CONTROL_PROPERTIES, ByRef objParent As Object) As Boolean

    Const sSOURCE As String = "bLoadControlAttributes()"
    
    Dim bReturn As Boolean
    Dim rngCurrentRow As Excel.Range
    Dim rngTemp As Excel.Range
    Dim sTemp As String
    
    On Error GoTo ErrorHandler
    
    ' Assume success until an error is encountered.
    bReturn = True
    
    Set rngCurrentRow = rngStartCell.EntireRow
    
    ' Load the control properties type structure. Default values are loaded here for
    ' unspecified properties.
    With uCtlProperties
    
        .sControlName = Trim$(rngStartCell.value)
        
        Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_WIDTH))
        If IsEmpty(rngTemp.value) Then .lWidth = mlPROPERTY_NOT_SET Else .lWidth = CLng(rngTemp.value)
        
        Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_IS_TEMPORARY))
        If IsEmpty(rngTemp.value) Then .bIsTemporary = True Else .bIsTemporary = CBool(rngTemp.value)
        
        Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_IS_ENABLED))
        If IsEmpty(rngTemp.value) Then .bIsEnabled = True Else .bIsEnabled = CBool(rngTemp.value)
        
        ' If no workbook was specified in the OnAction entry, assume ThisWorkbook.
        sTemp = Trim$(Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_ONACTION)))
        If Len(sTemp) = 0 Then
            .sOnAction = vbNullString
        ElseIf InStr(sTemp, "!") = 0 Then
            .sOnAction = ThisWorkbook.Name &amp; "!" &amp; sTemp
        Else
            .sOnAction = sTemp
        End If
        
        Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_CONTROL_ID))
        If IsEmpty(rngTemp.value) Then .lControlID = mlCUSTOM_CONTROL Else .lControlID = CLng(rngTemp.value)
        
        If .lControlID = mlCUSTOM_CONTROL Then
            Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_CONTROL_TYPE))
            If IsEmpty(rngTemp.value) Then .lControlType = msoControlButton Else .lControlType = CLng(rngTemp.value)
        Else
            .lControlType = mlPROPERTY_NOT_SET
        End If
        
        If .lControlType &lt;&gt; mlPROPERTY_NOT_SET Then
            ' The Style property only applies to controls of type msoControlButton, msoControlComboBox, and msoControlDropdown.
            Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_CONTROL_STYLE))
            If .lControlType &lt;&gt; msoControlButton And .lControlType &lt;&gt; msoControlComboBox And .lControlType &lt;&gt; msoControlDropdown Then
                .lControlStyle = mlPROPERTY_NOT_SET
            ElseIf IsEmpty(rngTemp.value) Then
                If .lControlType = msoControlButton Then
                    .lControlStyle = msoButtonAutomatic
                ElseIf .lControlType = msoControlComboBox Then
                    .lControlStyle = msoComboNormal
                End If
            Else
                .lControlStyle = CLng(rngTemp.value)
            End If
        Else
            .lControlStyle = mlPROPERTY_NOT_SET
        End If
        
        .vFaceID = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_FACE_ID)).value
        .bBeginGroup = CBool(Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_BEGIN_GROUP)).value)
        
        Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_BEFORE))
        .lBefore = lConvertBefore(objParent, rngTemp.value)
        
        .sTooltip = Trim$(Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_TOOLTIP)).value)
        
        If .lControlID = mlCUSTOM_CONTROL Then
            .sShortcutKey = Trim$(Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_SHORTCUT_TEXT)).value)
        Else
            .sShortcutKey = vbNullString
        End If
        
        .sTag = Trim$(Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_TAG)).value)
        .vParameter = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_PARAMETER)).value
        
        ' The State property only applies to custom controls of type msoControlButton.
        If (.lControlID = mlCUSTOM_CONTROL) And (.lControlType = msoControlButton) Then
            Set rngTemp = Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_STATE))
            If IsEmpty(rngTemp.value) Then
                .lState = msoButtonUp
            Else
                .lState = CLng(rngTemp.value)
            End If
        Else
            .lState = mlPROPERTY_NOT_SET
        End If
        
        ' The ListRange property only applies to controls of type msoControlComboBox or msoControlDropDown.
        If .lControlType = msoControlComboBox Or .lControlType = msoControlDropdown Then
            sTemp = Trim$(Application.Intersect(rngCurrentRow, wksCommandBars.Range(msCOL_LIST_RANGE)).value)
            If Len(sTemp) &gt; 0 Then
                Set .rngListRange = wksCommandBars.Range(sTemp)
            Else
                Set .rngListRange = Nothing
            End If
        End If
        
    End With
    
ErrorExit:

    bLoadControlAttributes = bReturn
    Exit Function

ErrorHandler:
    If Err.Number &lt;&gt; glHANDLED_ERROR Then Err.Description = Err.Description &amp; " (" &amp; sSOURCE &amp; ")"
    bReturn = False
    If bCentralErrorHandler(msMODULE, sSOURCE) Then
        Stop
        Resume
    Else
        Resume ErrorExit
    End If
End Function


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Converts a control name into its position index on the CommandBar.
'
' Arguments:    objBar  The CommandBar or CommandBarPopup that the control is
'                       located on.
'               vBefore The name to convert.
'
' Returns:      Long    If vBefore is a String, the function returns the
'                       position index of the control with that name.
'                       If vBefore is numeric, the function returns it converted
'                       to a Long data type. If vBefore is empty, the function
'                       returns mlPROPERTY_NOT_SET.
'
' Date          Developer       Chap    Action
' --------------------------------------------------------------------------
' 04/29/04      Rob Bovey       Ch08    Initial version
'
Private Function lConvertBefore(ByRef objBar As Object, ByVal vBefore As Variant) As Long

    ' This is the default.
    lConvertBefore = mlPROPERTY_NOT_SET
    
    If Len(vBefore) = 0 Then
        ' If it's empty, return not set.
        lConvertBefore = mlPROPERTY_NOT_SET
    ElseIf IsNumeric(vBefore) Then
        ' If it's already numeric, just return it as a long.
        lConvertBefore = CLng(vBefore)
    Else    ' Look for a control with that name. Return mlPROPERTY_NOT_SET if not found.
        On Error Resume Next
            lConvertBefore = mlPROPERTY_NOT_SET
            lConvertBefore = objBar.Controls(Trim$(CStr(vBefore))).Index
        On Error GoTo 0
    End If
    
End Function

</pre>
</div>
      