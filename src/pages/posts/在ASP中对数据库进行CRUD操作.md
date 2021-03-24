---
stackbit_url_path: >-
  posts/在ASP中对数据库进行CRUD操作
title: '在ASP中对数据库进行CRUD操作'
date: '2010-03-16 10:17:20'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>我曾经写过一个数据库类CDatabase.asp，封装了ASP与数据库进行连接等的操作（见：<a href="http://www.myfootprints.cn/blog/post/14.html">http://www.myfootprints.cn/blog/post/14.html</a>）。</p>
<p>一般在网站中，会有固定的数据库配置，在这样的配置下，会进行一系列的固定的数据库操作，可以统称为CRUD（Create、Read、Update、Delete）操作。对此可以结合CDatabase.asp和相关的SQL语句，再写一些函数，或者把这些函数也封装成一个类。来专门完成这些操作。</p>
<p>以下是这些函数的示例：</p>
<p>第一个GetInfo()和第二个GetInfoWithoutCursorAndLockType()都用来执行 Read 操作，而第三个函数 SaveInfo() 用来执行 Create 即创建数据(Insert) 操作、Update 和 Delete操作。第一个与第二个基本一样，只是对游标类型的约束稍有区别。对于游标类型，可以参考其他说明，大致来说，第一个函数取得的数据集，游标只能向前，即使用了数据集后面的数据后，就不能再回到更前面的数据了。而第二个函数就更加自由。</p>
<div style="text-indent: 0;">
<pre class="brush:vb">    ' 获取信息
    Public Function GetInfo(ByRef db, ByRef sSQL, ByRef sAction)
        Dim lState
        
        On Error Resume Next
        lState = db.Connect2Access(Server.MapPath(&lt;yourDatabaseVirtualPath&gt;), &lt;yourDatabaseUserID&gt;, &lt;yourDatabasePassword&gt;)
        On Error Goto 0
        If lState = 0 Then
            GetInfo = "连接数据库失败; " &amp; "连接数据库时所用的路径为：" &amp; Server.MapPath(sMF_WebSiteRootFolder &amp; sMF_WebSiteDatabaseFullPath) &amp; "；"
            Set db = Nothing
            GetInfo = sAction &amp; " 时发生错误;" &amp; GetInfo
            Exit Function
        Else
            On Error Resume Next
            lState = db.OpenRecordset(sSQL)
            If Err.number &lt;&gt; 0 Then
                Set db = Nothing
                GetInfo = sAction &amp; " 时发生错误, Err.Number: " &amp; Err.number &amp; ", Err.Description: " &amp; Err.Description &amp; "; SQL: " &amp; sSQL &amp; ";" &amp; GetInfo
                Exit Function
            End If
            On Error Goto 0
            
            If lState = 0 Then
                GetInfo = "SQL：" &amp; sSQL &amp; ";"
                Set db = Nothing
                GetInfo = sAction &amp; " 时发生错误; " &amp; GetInfo
                Exit Function
            Else
                GetInfo = "OK"
                Exit Function
            End If
        End If
        
        If Err.number &lt;&gt; 0 Then
            Set db = Nothing
            GetInfo = sAction &amp; " 时发生错误; SQL: " &amp; sSQL &amp; ";" &amp; GetInfo
            Exit Function
        End If
        GetInfo = "OK"
        Exit Function
    End Function
    
    ' 获取信息
    Public Function GetInfoWithoutCursorAndLockType(ByRef db, ByRef sSQL, ByRef sAction)
        Dim lState
        
        On Error Resume Next
        lState = db.Connect2Access(Server.MapPath(&lt;yourDatabaseVirtualPath&gt;), &lt;yourDatabaseUserID&gt;, &lt;yourDatabasePassword&gt;)
        On Error Goto 0
        If lState = 0 Then
            GetInfoWithoutCursorAndLockType = "连接数据库失败; "
            Set db = Nothing
            GetInfoWithoutCursorAndLockType = sAction &amp; " 时发生错误;" &amp; GetInfoWithoutCursorAndLockType
            Exit Function
        Else
            On Error Resume Next
            lState = db.OpenRecordsetWithoutCursorAndLockType(sSQL)
            If Err.number &lt;&gt; 0 Then
                Set db = Nothing
                GetInfoWithoutCursorAndLockType = sAction &amp; " 时发生错误, Err.Number: " &amp; Err.number &amp; ", Err.Description: " &amp; Err.Description &amp; "; SQL: " &amp; sSQL &amp; ";" &amp; GetInfoWithoutCursorAndLockType
                Exit Function
            End If
            On Error Goto 0
            
            If lState = 0 Then
                GetInfoWithoutCursorAndLockType = "查询时发生错误;"
                Set db = Nothing
                GetInfoWithoutCursorAndLockType = sAction &amp; " 时发生错误;" &amp; GetInfoWithoutCursorAndLockType
                Exit Function
            Else
                GetInfoWithoutCursorAndLockType = "OK"
                Exit Function
            End If
        End If
        
        If Err.number &lt;&gt; 0 Then
            Set db = Nothing
            GetInfoWithoutCursorAndLockType = sAction &amp; " 时发生错误; SQL: " &amp; sSQL &amp; ";" &amp; GetInfoWithoutCursorAndLockType
            Exit Function
        End If
        GetInfoWithoutCursorAndLockType = "OK"
        Exit Function
    End Function
    
    ' 保存信息
    Public Function SaveInfo(ByRef db, ByRef sSQL, ByRef sAction)
        Dim lState, lRecordsAffected
        
        On Error Resume Next
        lState = db.Connect2Access(Server.MapPath(&lt;yourDatabaseVirtualPath&gt;), &lt;yourDatabaseUserID&gt;, &lt;yourDatabasePassword&gt;)
        
        If lState = 0 Then
            SaveInfo = "连接数据库失败；"
            Set db = Nothing
            SaveInfo = sAction &amp; " 时发生错误;" &amp; GetInfo
            Exit Function
        Else
            On Error Resume Next
            lState = db.Execute(sSQL, lRecordsAffected)
            If Err.number &lt;&gt; 0 Then
                Set db = Nothing
                SaveInfo = sAction &amp; " 时发生错误, Err.Number: " &amp; Err.number &amp; ", Err.Description: " &amp; Err.Description &amp; "; SQL: " &amp; sSQL &amp; ";" &amp; SaveInfo
                Exit Function
            End If
            On Error Goto 0
            
            If lState = 0 Then
                SaveInfo = "执行SQL语句时发生错误;"
                Set db = Nothing
                SaveInfo = sAction &amp; " 时发生错误;" &amp; GetInfo
                Exit Function
            Else
                If lRecordsAffected &lt;= 0 Then
                    SaveInfo = "执行SQL语句时，没有影响任何记录;"
                    Set db = Nothing
                    SaveInfo = sAction &amp; " 时可能有错误, SQL: " &amp; sSQL &amp; ";" &amp; SaveInfo
                    Exit Function
                Else
                    SaveInfo = "OK"
                    Exit Function
                End If
            End If
        End If
        
        If Err.number &lt;&gt; 0 Then
            Set db = Nothing
            SaveInfo = sAction &amp; " 时发生错误;" &amp; GetInfo
            Exit Function
        End If
        
        SaveInfo = "OK"
        Exit Function
    End Function
</pre>
</div>
</div>
      