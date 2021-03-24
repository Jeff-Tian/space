---
stackbit_url_path: >-
  posts/在ASP中使用正则表达式从完整路径中解析出文件名与不含文件名的路径
title: '在ASP中使用正则表达式从完整路径中解析出文件名与不含文件名的路径'
date: '2009-12-29 17:26:19'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <pre style="text-indent: 0;" class="brush: vb">&lt;%
        ' 从文件完整路径中解析文件名
        Public Function ParseName(ByRef sFullPath)
            Dim re, sFileName, oMatches
            Set re = Server.CreateObject("VBScript.RegExp")
            re.Pattern = "[^\\]*{1}quot;
            Set oMatches = re.Execute(sFullPath)
            
            If oMatches.Count &gt; 0 Then
                sFileName = oMatches(0)
            Else
                sFileName = ""
            End If
            Set oMatches = Nothing
            Set re = Nothing
            
            ParseName = sFileName
        End Function
        
        ' 从文件完整路径中去掉文件名
        Public Function ParsePath(ByRef sFullPath)
            Dim re, sFilePath, oMatches
            Set re = Server.CreateObject("VBScript.RegExp")
            re.Pattern = "^.*\\(?=[^\\]*$)"
            Set oMatches = re.Execute(sFullPath)
            
            If oMatches.Count &gt; 0 Then
                sFilePath = oMatches(0)
            Else
                sFilePath = ""
            End If
            Set oMatches = Nothing
            Set re = Nothing
            
            ParsePath = sFilePath
        End Function
%&gt;
</pre>
      