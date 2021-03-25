---
stackbit_url_path: >-
  posts/ASP-无组件上传图片到数据库一例
title: 'ASP 无组件上传图片到数据库一例'
date: '2010-04-04 18:37:10'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/04/ASP-无组件上传图片到数据库一例
template: post
---

        <p>准备工作：</p>
<ul>
    <li>数据库类文件CDatabase.asp，见<a href="http://www.myfootprints.cn/blog/post/14.html">http://www.myfootprints.cn/blog/post/14.html</a>；</li>
    <li>文件类文件CFile.asp，见<a href="http://www.myfootprints.cn/blog/post/329.html">http://www.myfootprints.cn/blog/post/329.html</a>；</li>
    <li>图像类文件CImage.asp，见<a href="http://www.myfootprints.cn/blog/post/331.html">http://www.myfootprints.cn/blog/post/331.html</a>；</li>
    <li>表单获取类文件CFormDataGetter.asp，见<a href="http://www.myfootprints.cn/blog/post/330.html">http://www.myfootprints.cn/blog/post/330.html</a>。</li>
</ul>
<p>&nbsp;假设上传界面仅有一个字段，即图片。那么后台将该图片存储到数据库中去的处理代码示例如下：</p>
<pre class="brush: vb">&lt;%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%&gt;
&lt;%
    Option Explicit
    
    Session.CodePage = 65001
%&gt;
&lt;!--#include file="../ClassModule/CFormDataGetter.asp"--&gt;
&lt;!--#include file="../ClassModule/CImage.asp"--&gt;
&lt;!--#include file="../ClassModule/CDatabase.asp"--&gt;

&lt;%
    Dim form, image
    Set form = New CFormDataGetter
    Set image = New CImage
    
    If form.FormSize &gt; 0 Then    
        image.CFile2Image form.GetFile("image")
        
        Response.Write "&lt;p&gt;image.ImageType = " &amp; image.ImageType &amp; "&lt;/p&gt;"
        Response.Write "&lt;p&gt;image.ImageVersion = " &amp; image.ImageVersion &amp; "&lt;/p&gt;"
        Response.Write "&lt;p&gt;image.ImageWidth = " &amp; image.ImageWidth &amp; "&lt;/p&gt;"
        
        Dim db, lState, sInfo    
        Const sDBUID = ""
        Const sDBPWD = ""

        
        Set db = New CDatabase    
        
        lState = db.Connect2Access(Server.MapPath("MyDeskCity.mdb"), sDBUID, sDBPWD)
        If lState = 0 Then
            Response.Write "数据库连接失败！"
        Else
            ' 存储图片到数据库
            Dim cmd, sSQL
            sSQL = "Insert Into MyDeskCity (Image, ImageWidth, ImageHeight, ImageType) Values (?, " &amp; Clng(image.ImageWidth) &amp; ", " &amp; CLng(image.ImageHeight) &amp; ", '" &amp; image.ImageType &amp; "')"
            Set cmd = Server.CreateObject("ADODB.Command")
            cmd.ActiveConnection = db.oConn
            cmd.CommandText = sSQL
            
            cmd.Parameters.Append cmd.CreateParameter("@Image", 205, 1, image.Size)
            cmd("@Image").AppendChunk image.BinaryStream
            
            cmd.Execute
        End If
        
        db.Disconnect
        Set db = Nothing
    
        If Err.Number = 0 Then
            sInfo = "上传图片成功！"
        Else
            sInfo = "上传图片失败！"
        End If
    Else
        sInfo = "没有选择图片"
    End If
    
    Session("ssnsInfo") = sInfo
    Response.Redirect Request.ServerVariables("HTTP_REFERER")
%&gt;
</pre>
<p>&nbsp;</p>
      