---
stackbit_url_path: >-
  posts/在ASP中创建一个以指定HTML模板显示字典对象内容的方法
title: '在ASP中创建一个以指定HTML模板显示字典对象内容的方法'
date: '2010-03-17 08:09:48'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/17/在ASP中创建一个以指定HTML模板显示字典对象内容的方法
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

-->
</style>
<div style="text-indent: 2em; font-size: larger">
<p>我曾在《<a target="_blank" href="http://www.myfootprints.cn/blog/post/222.html">用ASP写一个支持自定义模板的数据记录输出函数</a>》中写过一个支持自定义HTML模板显示数据库记录集(Recordset)的方法（函数），现在类推一下，写一个支持自定义HTML模板显示字典对象中的内容的方法（函数）。</p>
<p>这个方法（函数）接受4个参数，分别是：</p>
<ol style="text-indent: 0px">
    <li>一个字典对象</li>
    <li>模板标签的头部</li>
    <li>模板标签的重复项目部分</li>
    <li>模板标签的底部</li>
</ol>
<p>&nbsp;</p>
<p>它返回用参数指定的头部、重复项目部分与底部拼接好完整HTML代码。</p>
<div style="text-indent: 0;">
<pre class="brush: vb">        ' 获取将字典对象中的内容以指定的模板显示出来的HTML代码
        Public Function GetDicListWithTemplate(ByRef oDictionary, ByRef sHeader, ByRef sRepeater, ByRef sFooter)
            Dim i, regEx, matches, repeater, j, aKeys, aItems
            
            'On Error Resume Next
            GetDicListWithTemplate = ""
            GetDicListWithTemplate = GetDicListWithTemplate &amp; sHeader
            Set regEx = Server.CreateObject("VBScript.RegExp")
            Set matches = Nothing
            regEx.Global = True
            regEx.IgnoreCase = True
            
            '数据行
            If Count &gt; 0 Then
                aKeys = oDictionary.Keys
                aItems = oDictionary.Items
                For i = 1 To Count
                    repeater = sRepeater
                    
                    ' 先替换掉&lt;#= Keys #&gt;标签
                    regEx.Pattern = "&lt;#=\s*(Keys)\s*#&gt;"
                    Set matches = regEx.Execute(sRepeater)
                    
                    For j = 0 To matches.Count - 1
                        If matches(j).SubMatches.Count &gt; 0 Then
                            repeater = Replace(repeater, matches(j), aKeys(i-1))
                        Else
                            repeater = Replace(repeater, matches(j), "***")
                        End If
                    Next
                    
                    regEx.Pattern = "&lt;#=\s*(Items)\s*#&gt;"
                    Set matches = regEx.Execute(sRepeater)
                    
                    For j = 0 To matches.Count - 1
                        If matches(j).SubMatches.Count &gt; 0 Then
                            repeater = Replace(repeater, matches(j), aItems(i-1))
                        Else
                            repeater = Replace(repeater, matches(j), "***")
                        End If
                    Next
                    
                    GetDicListWithTemplate = GetDicListWithTemplate &amp; repeater
                Next
            End If
            
            If Not matches Is Nothing Then
                Set matches = Nothing
            End If
            Set regEx = Nothing
            GetDicListWithTemplate = GetDicListWithTemplate &amp; sFooter
            
            On Error Goto 0

        End Function
</pre>
</div>
<p>使用示例：</p>
<p>如果我们将访问网站的在线的活跃用户信息保存在了一个字典对象里，用SessionID作为字典对象的键，而用另外的字符串比如用户名作为字典对象的值。那么，我们现在用一个列表将它显示出来，就可以如下这样写：</p>
<div style="text-indent: 0;">
<pre class="brush: vb">                            Dim sHeader, sRepeater, sFooter
                            
                            sHeader = "&lt;div&gt;&lt;table class=""tbLikeGoogle""&gt;&lt;thead&gt;&lt;tr&gt;&lt;th&gt;用户键值&lt;/th&gt;&lt;th&gt;用户标识&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;"
                            sRepeater = "&lt;tr&gt;&lt;td&gt;&lt;#= Keys #&gt;&lt;/td&gt;&lt;td&gt;&lt;#= Items #&gt;&lt;/td&gt;&lt;/tr&gt;"
                            sFooter = "&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;"
                            
                            Response.Write GetDicListWithTemplate(UserDictionary, sHeader, sRepeater, sFooter)

</pre>
</div>
<p>显示效果如下：</p>
<div><table class="tbLikeGoogle"><thead><tr><th>用户键值</th><th>用户标识</th></tr></thead><tbody><tr><td>38928318</td><td>2052</td></tr><tr><td>asdlkfj</td><td>askdfjsdafj</td></tr></tbody></table></div>
<p>真是太方便啦！</p>
</div>
      