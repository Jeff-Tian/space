---
stackbit_url_path: >-
  posts/使用ASP批量删除文件
title: '使用ASP批量删除文件'
date: '2010-03-28 04:27:50'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/28/使用ASP批量删除文件
template: post
---

        <p>今天不小心，由运行的一个系统生成了大量文件到了一个文件夹下，而该文件夹下原本就存在一些文件。我不得不要将新生成的文件们清理掉，可是，太多了。</p>
<p>不过还好，该系统有一个它所生成的文件的列表。于是使用ASP制作了一个批量删除文件的程序，完成了这一任务。</p>
<p>先在前台页面弄个文本框，用来接收文件列表的输入。</p>
<p>再在后台使用程序将文件列表中的文件，一一删除。</p>
<p>前台页面（deleteFile.asp）的html核心代码为：</p>
<pre class="brush: html">                &lt;form name="fmFiles" method="post" action="deleteFile_Process.asp"&gt;
                    &lt;p&gt;文件列表：&lt;/p&gt;
                    &lt;textarea rows="20" cols="80" name="files"&gt;&lt;/textarea&gt;
                    &lt;p&gt;&lt;input type="submit" /&gt;&lt;/p&gt;
                &lt;/form&gt;
</pre>
<p>后台页面(deleteFile_Process.asp)的核心代码为：</p>
<pre class="brush: vb">
&lt;%
    Dim files, aFiles, i 
    files = Request.Form("files")
    aFiles = Split(files, vbCrLf)
    
    Dim oFS
    Set oFS = Server.CreateObject("Scripting.FileSystemObject")
    
    For i = LBound(aFiles) To UBound(aFiles) - 1
        aFiles(i) = Server.MapPath(Mid(aFiles(i), 5))
        
        oFS.DeleteFile aFiles(i)
        Response.Write aFiles(i) &amp; " 删除成功！&lt;br&gt;"
    Next 
    
    Set oFS = Nothing
%&gt;
</pre>
<div>&nbsp;</div>
<p>&nbsp;</p>
      