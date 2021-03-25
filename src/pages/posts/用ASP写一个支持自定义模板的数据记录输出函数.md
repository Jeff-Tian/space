---
stackbit_url_path: >-
  posts/用ASP写一个支持自定义模板的数据记录输出函数
title: '用ASP写一个支持自定义模板的数据记录输出函数'
date: '2010-03-11 06:53:12'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/11/用ASP写一个支持自定义模板的数据记录输出函数
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>在.NET中，可以使用多种DATA服务器控件如ListView来显示数据库记录，并且能自定义模板。</p>
<p>在ASP中，没有服务器控件的概念，不过我们可以自己来写一些程序来实现这样的功能。</p>
<p>对于数据库记录的输出，我们可以写这样的函数来完成。它接受4个参数，分别是：</p>
<ol style="text-indent: 0;">
    <li>一个数据库记录集对象 Recordset</li>
    <li>模板标签的头部</li>
    <li>模板标签的重复项目部分</li>
    <li>模板标签的底部</li>
</ol>
<p>代码示例如下：</p>
<div style="text-indent: 0;">
<pre class="brush: vb">    '
    ' 输出结果集，支持自定义模板
    '
    Public Function OutputRSWithTemplate(objRS, header, itemRepeater, footer)
        Dim i, regEx, matches, repeater, j
        
        'On Error Resume Next
        OutputRSWithTemplate = ""
        OutputRSWithTemplate = OutputRSWithTemplate &amp; header
        Set regEx = Server.CreateObject("VBScript.RegExp")
        Set matches = Nothing
        regEx.Global = True
        regEx.IgnoreCase = True
        regEx.Pattern = "&lt;#=\s*([^&lt;#&gt;]*)\s*#&gt;"
        
        '数据行
        If objRS.State &gt; 0 And objRS.RecordCount &gt; 0 Then
            ' 以下这句在分页中必须去掉！！！
            'objRS.MoveFirst
            Set matches = regEx.Execute(itemRepeater)
            For i = 1 To objRS.PageSize
                If objRS.EOF Then
                    Exit For
                End If
                
                repeater = itemRepeater
                For j = 0 To matches.Count - 1 
                    If matches(j).SubMatches.Count &gt; 0 Then
                        repeater = Replace(repeater, matches(j), objRS(Trim(matches(j).SubMatches(0))))
                    Else
                        repeater = Replace(repeater, matches(j), "***")
                    End If
                Next
                
                OutputRSWithTemplate = OutputRSWithTemplate &amp; repeater
                
                If objRS.EOF Then
                    Exit For
                Else
                    objRS.MoveNext
                End If
            Next            
        End If
        
        If Not matches Is Nothing Then
            Set matches = Nothing
        End If
        Set regEx = Nothing
        OutputRSWithTemplate = OutputRSWithTemplate &amp; footer
        
        On Error Goto 0
    End Function
</pre>
</div>
<p>比如在数据库中有一个友情链接表，我们已经将里面的数据查询出来，并放在了一个数据记录集（Recordset）对象（rs）中。我们现在要将这些信息以列表形式显示出来，就可以如下来调用上面的自定义函数：</p>
<div style="text-indent: 0;">
<pre class="brush: vb">Dim header, itemRepeater, footer

header = "&lt;div&gt;&lt;ul&gt;" 
itemRepeater = "&lt;li&gt;&lt;a href=""&gt;&lt;#= SiteURL #&gt;"" target=""_blank"" title=""&lt;#= SiteIntro #&gt;""&gt;&lt;#= SiteName #&gt;&lt;/a&gt;&lt;/li&gt;" 
footer = "&lt;/ul&gt;&lt;/div&gt;"
Response.Write OutputRSWithTemplate(rs, header, itemRepeater, footer)
</pre>
</div>
<p>函数 OutputRSWithTemplate 返回一个字符串，它由我们自己定义的头部、重复项目部分以及底部组成，传递给它的重复项目部分参数itemRepeater，凡是要使用数据库记录集中的数据的，就用 &lt;#= 字段名 #&gt; 的格式来标记，这样，它就能使用数据库记录集中对应的字段的值来替换该标记。</p>
</div>
      