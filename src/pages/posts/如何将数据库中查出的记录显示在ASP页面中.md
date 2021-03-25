---
stackbit_url_path: >-
  posts/如何将数据库中查出的记录显示在ASP页面中
title: '如何将数据库中查出的记录显示在ASP页面中'
date: '2010-04-29 09:42:36'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/29/如何将数据库中查出的记录显示在ASP页面中
template: post
---

        <p>最直接的一个思路是，将查询得到的记录集，以HTML表格的形式显示在网页中。那么只需要写一个循环，依次将记录集中的每一行每一列的值，对应写到HTML表格的每一行每一列中即可。</p>
<p>具体来说，假设记录集一共有n行数据，m个字段。</p>
<p>先用一个循环处理字段，即写出m个表头。</p>
<p>再用一个大循环处理n行数据，对其中每行数据，又要用一个小循环，处理m个字段值。这里有一个2层的循环嵌套。</p>
<p>下面是具体的实现代码，它接受一个参数，即记录集变量。返回一个字符串，即HTML表格标签代码。</p>
<pre class="brush: vb">    '
    ' 输出结果集
    '
    Public Function OutputRS(objRS)
        Dim i, j

        '标题行（表头）
        OutputRS = OutputRS &amp; "&lt;table class=""tbRS""&gt;"
        OutputRS = OutputRS &amp; "&lt;thead&gt;&lt;tr&gt;"
        For i = 0 To objRS.Fields.Count - 1
            OutputRS = OutputRS &amp; "&lt;th&gt;" &amp; " " &amp; objRS.Fields(i).Name &amp; "&lt;/th&gt;"
        Next
        OutputRS = OutputRS &amp; "&lt;/tr&gt;&lt;/thead&gt;"
        
        '数据行
        If objRS.State &gt; 0 And objRS.RecordCount &gt; 0 Then
            objRS.MoveFirst
            OutputRS = OutputRS &amp; "&lt;tbody&gt;"
            For i = 0 To objRS.RecordCount - 1
                OutputRS = OutputRS &amp; "&lt;tr&gt;"
                For j = 0 To objRS.Fields.Count - 1
                    OutputRS = OutputRS &amp; "&lt;td&gt;"
                    On Error Resume Next
                    OutputRS = OutputRS &amp; " " &amp; objRS.Fields(j).Value
                    '如果发生错误，则可能是因为结果集里的数据不是文本类型等，而是二进制类型引起的。
                    If Err.number &lt;&gt; 0 Then
                        OutputRS = OutputRS &amp; "非文本数据"
                    End If
                    On Error Goto 0
                    OutputRS = OutputRS &amp; "&lt;/td&gt;"
                Next
                OutputRS = OutputRS &amp; "&lt;/tr&gt;"
                objRS.MoveNext
            Next
            OutputRS = OutputRS &amp; "&lt;/tbody&gt;"
        End If
        
        OutputRS = OutputRS &amp; "&lt;/table&gt;"
        On Error Goto 0
    End Function</pre>
<p>至于如何在ASP中将数据库中的查询出来，那么需要使用数据库连接。如果使用涂鸦博客中的CDatabase数据库类，那么可以很简单的实现，如：</p>
<pre class="brush: vb">Dim db, state, sql

Set db = New CDatabase ' CDatabase 就是那个数据库类，位于CDatabase.asp 文件中。

' 连接到你的数据库
state = db.Connect2Access("你的数据库路径", "", "")
If state = 1 Then
  '连接成功，指定查询语句
  sql = "SELECT '你的具体查询语句'"

  ' 打开查询结果记录集
  db.OpenRecordset sql

  ' 显示结果记录集
  Response.Write OutputRS(db.oRS)
Else
  Response.Write "数据库连接失败。"
End If

Set db = Nothing</pre>
<p>你可以使用自己的记录集。</p>
<p>如果你要用CDatabase类的话，还需要在代码中使用&lt;!--#include file="CDatabase.asp"--&gt;的方式将 CDatabase.asp 包含进来。</p>
<p>CDatabase.asp 文件源代码在<a target="_blank" href="http://www.myfootprints.cn/blog/post/14.html">http://www.myfootprints.cn/blog/post/14.html</a>，你只需要复制就行了。</p>
      