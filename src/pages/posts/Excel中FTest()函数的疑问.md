---
stackbit_url_path: >-
  posts/Excel中FTest()函数的疑问
title: 'Excel中FTest()函数的疑问'
date: '2010-03-19 10:10:31'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
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
<div style="text-indent: 2em; font-size: larger;">
<p>今天看到Excel中的FTest()函数，帮助文件中对它是这样解释的。</p>
<p>&nbsp;</p>
<hr>
<p>&nbsp;</p>
FTEST    <!--cstransform awsenduser.xsl date 2006-12-10 --><!--csautotext date 2007-03-23 number --><!--csglossary date 2007-03-23 number --><!--csglobalstrings date 2007-05-31 number --><!-- defs in --><!-- META NAME="lcid" CONTENT="2052" -->
<div style="DISPLAY: none" id="divShowAll" align="right"><a class="DropDown" href="http://office.microsoft.com/assistance/hfws.aspx?AssetID=HP052090982052&amp;CTT=1&amp;Origin=EC010229842052&amp;QueryID=c_8Hzemxc&amp;respos=1&amp;rt=2"><img id="picHeader" border="0" alt="全部显示" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_235.png">全部显示</a></div>
<div style="DISPLAY: block" id="divHideAll" align="right"><a class="DropDown" href="http://office.microsoft.com/assistance/hfws.aspx?AssetID=HP052090982052&amp;CTT=1&amp;Origin=EC010229842052&amp;QueryID=c_8Hzemxc&amp;respos=1&amp;rt=2"><img id="hide" border="0" alt="全部隐藏" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_236.png">全部隐藏</a></div>
<p>返回 F 检验的结果。F 检验返回的是当数组 1 和数组 2  的方差无明显差异时的单尾概率。可以使用此函数来判断两个样本的方差是否不同。例如，给定公立和私立学校的测试成绩，可以检验各学校间测试成绩的差别程度。</p>
<p><b class="bterm">语法</b></p>
<p><b class="bterm">FTEST</b>(<b class="bterm">array1</b>,<b class="bterm">array2</b>)</p>
<p><b class="runinhead">Array1</b>&nbsp;&nbsp; 第一个数组或数据区域。</p>
<p><b class="runinhead">Array2</b>&nbsp;&nbsp; 第二个数组或数据区域。</p>
<p><b class="bterm">说明</b></p>
<ul>
    <li>参数可以是数字，或者是包含数字的名称、数组或引用。</li>
    <li>如果数组或引用参数包含文本、逻辑值或空白单元格，则这些值将被忽略；但包含零值的单元格将计算在内。</li>
    <li>如果数组 1 或数组 2 中数据点的个数小于 2 个，或者数组 1 或数组 2 的方差为零，函数 FTEST 返回错误值 #DIV/0!。</li>
</ul>
<p><b class="bterm">示例</b></p>
<p>如果您将示例复制到空白工作表中，可能会更易于理解该示例。</p>
<div class="alert">
<p><a class="DropDown" href="http://office.microsoft.com/assistance/hfws.aspx?AssetID=HP052090982052&amp;CTT=1&amp;Origin=EC010229842052&amp;QueryID=c_8Hzemxc&amp;respos=1&amp;rt=2"><img id="divExpCollAsst_1_img" border="0" alt="隐藏" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_237.png">操作方法</a></p>
<span style="DISPLAY: block" id="divExpCollAsst_1" class="ACECollapsed" border="0">
<ol>
    <li>创建空白工作簿或工作表。</li>
    <li>请在“帮助”主题中选取示例。不要选取行或列标题。
    <p><img border="0" alt="从“帮助”中选取示例" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_238.png"></p>
    <div class="ac">从“帮助”中选取示例</div>
    </li>
    <li>按 Ctrl+C。</li>
    <li>在工作表中，选中单元格 A1，再按 Ctrl+V。</li>
    <li>若要在查看结果和查看返回结果的公式之间切换，请按 Ctrl+`（重音符），或在<b class="ui">“工具”</b>菜单上，指向<b class="ui">“公式审核”</b>，再单击<b class="ui">“公式审核模式”</b>。</li>
</ol>
</span></div>
<table border="1">
    <tbody>
        <tr class="trbgodd">
            <td>
            <table>
                <tbody>
                    <tr class="trbgodd">
                        <td class="noborder">&nbsp;</td>
                    </tr>
                    <tr class="trbgeven">
                        <th>1</th>
                    </tr>
                    <tr class="trbgodd">
                        <th>2</th>
                    </tr>
                    <tr class="trbgeven">
                        <th>3</th>
                    </tr>
                    <tr class="trbgodd">
                        <th>4</th>
                    </tr>
                    <tr class="trbgeven">
                        <th>5</th>
                    </tr>
                    <tr class="trbgodd">
                        <th>6</th>
                    </tr>
                </tbody>
            </table>
            </td>
            <td>
            <table>
                <tbody>
                    <tr class="trbgeven">
                        <th>A</th>
                        <th>B</th>
                    </tr>
                    <tr class="trbgodd">
                        <th>数据 1</th>
                        <th>数据 2</th>
                    </tr>
                    <tr class="trbgeven">
                        <td>6</td>
                        <td>20</td>
                    </tr>
                    <tr class="trbgodd">
                        <td>7</td>
                        <td>28</td>
                    </tr>
                    <tr class="trbgeven">
                        <td>9</td>
                        <td>31</td>
                    </tr>
                    <tr class="trbgodd">
                        <td>15</td>
                        <td>38</td>
                    </tr>
                    <tr class="trbgeven">
                        <td>21</td>
                        <td>40</td>
                    </tr>
                    <tr class="trbgodd">
                        <th>公式</th>
                        <th>说明（结果）</th>
                    </tr>
                    <tr class="trbgeven">
                        <td>=FTEST(A2:A6,B2:B6)</td>
                        <td>返回上述数据的 F 检验结果  (0.648318)</td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<hr>
<p><!--@@FEEDBACKWIZ@@--></p>
<p>这个说明实在太大略了！</p>
<p>它的计算结果是怎样的？对于最后示例的结果，0.648318 应该怎样解读？</p>
<p>&nbsp;</p>
<p>又，对于以下这个例子，使用FTest()计算出来的P值，为什么正好是用FDist()计算出来的P值2倍？</p>
<hr>
<table class="tbLikeGoogle"><colgroup><col width="119" style="mso-width-source:userset;mso-width-alt:3808;width:89pt">  <col width="111" style="mso-width-source:userset;mso-width-alt:3552;width:83pt">  <col width="102" style="mso-width-source:userset;mso-width-alt:3264;width:77pt">
</colgroup><tbody><tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" width="119" style="height:14.25pt;width:89pt">运用FTEST函数进行双样本方差分析</td>
    <td class="xl24" width="111" style="border-left:none;width:83pt">　</td>
    <td class="xl24" width="102" style="border-left:none;width:77pt">　</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" style="height:14.25pt;border-top:none">　</td>
    <td colspan="2" class="xl25" style="border-left:none">收益率</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" style="height:14.25pt;border-top:none">day</td>
    <td class="xl24" style="border-top:none;border-left:none">深发展</td>
    <td class="xl24" style="border-top:none;border-left:none">万科A</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040601</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="3.0999999999999999E-3">0.0031</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="9.9000000000000008E-3">0.0099</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040602</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="3.0099999999999998E-2">0.0301</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-1.37E-2">-0.0137</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040603</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-2.3099999999999999E-2">-0.0231</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-1.3899999999999999E-2">-0.0139</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040604</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-8.2000000000000007E-3">-0.0082</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="6.0000000000000001E-3">0.006</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040607</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-2.2800000000000001E-2">-0.0228</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-8.0000000000000002E-3">-0.008</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040608</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-2.23E-2">-0.0223</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="2E-3">0.002</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040609</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-1.09E-2">-0.0109</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-2.0199999999999999E-2">-0.0202</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040610</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-2.2000000000000001E-3">-0.0022</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="4.1000000000000003E-3">0.0041</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040611</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="">0</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="2E-3">0.002</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040614</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-2.0899999999999998E-2">-0.0209</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-1.23E-2">-0.0123</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040615</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="4.6100000000000002E-2">0.0461</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="1.8599999999999998E-2">0.0186</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040616</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-9.7000000000000003E-3">-0.0097</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-2E-3">-0.002</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040617</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-2.2800000000000001E-2">-0.0228</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-4.2799999999999998E-2">-0.0428</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040618</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="1.11E-2">0.0111</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-2.5499999999999998E-2">-0.0255</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040621</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-2.2000000000000001E-3">-0.0022</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-2.2000000000000001E-3">-0.0022</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040622</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="3.3E-3">0.0033</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="3.3E-3">0.0033</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040623</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-6.6E-3">-0.0066</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-6.6E-3">-0.0066</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040624</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-1.44E-2">-0.0144</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-1.44E-2">-0.0144</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040625</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-5.5999999999999999E-3">-0.0056</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-5.5999999999999999E-3">-0.0056</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040628</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-5.1900000000000002E-2">-0.0519</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="-5.1900000000000002E-2">-0.0519</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" align="right" style="height:14.25pt;border-top:none" x:num="">20040629</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="2.2599999999999999E-2">0.0226</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="2.2599999999999999E-2">0.0226</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" style="height:14.25pt;border-top:none">方差</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="4.4552690476190474E-4" x:fmla="=STDEV(B4:B24)^2">0.000445527</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="3.2087314285714278E-4" x:fmla="=STDEV(C4:C24)^2">0.000320873</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" style="height:14.25pt;border-top:none">运用FTEST进行检验</td>
    <td class="xl24" style="border-top:none;border-left:none">　</td>
    <td class="xl24" style="border-top:none;border-left:none">　</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" style="height:14.25pt;border-top:none">alpha</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="">0.05</td>
    <td class="xl24" style="border-top:none;border-left:none">　</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" style="height:14.25pt;border-top:none">使用Ftest的P值</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="0.46956021530198394" x:fmla="=FTEST(B4:B24,C4:C24)">0.469560215</td>
    <td class="xl24" style="border-top:none;border-left:none">　</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" style="height:14.25pt;border-top:none">F统计量</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="1.3884830023317332" x:fmla="=B25/C25">1.388483002</td>
    <td class="xl24" style="border-top:none;border-left:none">　</td>
</tr>
<tr height="19" style="height:14.25pt">
    <td height="19" class="xl24" style="height:14.25pt;border-top:none">P值</td>
    <td class="xl24" align="right" style="border-top:none;border-left:none" x:num="0.23478010765099197" x:fmla="=FDIST(B29,COUNT(B4:B24)-1,COUNT(C4:C24)-1)">0.234780108</td>
    <td class="xl24" style="border-top:none;border-left:none">　</td>
</tr>
</tbody></table>
<hr>
<p>&nbsp;</p>
</div>
      