---
stackbit_url_path: >-
  posts/ASP-发送邮件的代码
title: 'ASP 发送邮件的代码'
date: '2010-03-09 03:00:48'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>使用ASP发送邮件的代码示例：</p>
<p>首先，建立一个Email的类文件，用来封装相关的邮件发送准备操作（如建立CDO.Message对象，以及做一些邮件服务器的配置工作等），命名为 CEmail.asp。</p>
<div style="text-indent: 0;">
<pre class="brush: vb">&lt;%
    Class CEmail
        Private sFromEmail
        Private sToEmail
        Private sMessage 
        Private sBCCEmail
        Private sSubject
        Private sBody
        ' 配置
        Private sOrigSenderEmail
        Private lSendUsing
        Private lSmtpServerPort
        Private sSmtpServer
        Private lSmtpAuthenticate
        Private sSendUserName
        Private sSendPassword
        Private bSmtpUseSSL
        
        Private Function bValidateExp(ByRef sPattern, ByRef s)
            Dim regEx
            Set regEx = Server.CreateObject("VBScript.RegExp")
            regEx.Global = True
            regEx.IgnoreCase = True
            regEx.Pattern = sPattern
            bValidateExp = regEx.Test(s)
            Set regEx = Nothing
        End Function 
        
        Private Sub Class_Initialize()
            sOrigSenderEmail = "***@myfootprints.cn"
            ' 2 - cdoSendUsingPort
            lSendUsing = 2
            lSmtpServerPort = 25
            sSmtpServer = "smtp.qq.com"
            ' 1 - cdoBasic
            lSmtpAuthenticate = 1
            sSendUserName = "***@myfootprints.cn"
            sSendPassword = "***"
            bSmtpUseSSL = False
        End Sub
        
        Public Sub GetRequest()
        End Sub
        
        Public Function SendTextMail()
            Dim oMail
            On Error Resume Next
            Set oMail = Server.CreateObject("CDO.Message")
            ' 设置
            With oMail.Configuration.Fields       
                'Original sender email address 
                .Item("http://schemas.microsoft.com/cdo/configuration/sendemailaddress") = Me.OrigSenderEmail

                'SMTP settings - without authentication, using standard port 25 on host smtp
                ' 2 - cdoSendUsingPort 
                .Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = Me.SendUsing
                .Item("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = Me.SmtpServerPort
                .Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") = Me.SmtpServer

                'SMTP Authentication
                ' 0 - cdoAnonymous 
                ' 1 - cdoBasic 
                .Item("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = Me.SmtpAuthenticate                 
                .Item("http://schemas.microsoft.com/cdo/configuration/sendusername") = Me.SendUserName
                .Item("http://schemas.microsoft.com/cdo/configuration/sendpassword") = Me.SendPassword
                .Item("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = Me.SmtpUseSSL

                .Update
            End With
            
            oMail.To = Me.ToEmail
            oMail.From = Me.OrigSenderEmail
            oMail.BCC = Me.BCCEmail
            oMail.Subject = Me.Subject
            oMail.Textbody = Me.Body
            oMail.Send
            Set oMail = Nothing
            If Err.number = 0 Then
                SendTextMail = True
            Else            
                AddInfo2 "发生错误：" &amp; Err.Description, "ssnInfo_SendToFriend"
                SendTextMail = False
            End If
            On Error Goto 0
        End Function
        
        Public Function Validate()
            Validate = True
            If Len(Me.FromEmail) &lt;= 0 Then
                AddInfo2 "发送Email不能为空", "ssnInfo_SendToFriend"
                Validate = False
            End If
            If Len(Me.ToEmail) &lt;= 0 Then
                AddInfo2 "接收Email不能为空", "ssnInfo_SendToFriend"
                Validate = False
            End If
        End Function
        
        Public Property Get FromEmail()
            FromEmail = sFromEmail
        End Property
        
        Public Property Let FromEmail(ByRef s)
            sFromEmail = s
        End Property
        
        Public Property Get ToEmail()
            ToEmail = sToEmail
        End Property
        
        Public Property Let ToEmail(ByRef s)
            sToEmail = s
        End Property 
        
        Public Property Get Message()
            Message = sMessage
        End Property
        
        Public Property Let Message(ByRef s)
            sMessage = s
        End Property
        
        Public Property Get BCCEmail()
            BCCEmail = sBCCEmail
        End Property
        
        Public Property Let BCCEmail(ByRef s)
            sBCCEmail = s
        End Property
        
        Public Property Get Subject()
            Subject = sSubject
        End Property
        
        Public Property Let Subject(ByRef s)
            sSubject = s
        End Property
        
        Public Property Get URL()
            URL = sURL
        End Property
        
        Public Property Let URL(ByRef s)
            sURL = s
        End Property
        
        Public Property Get Body()
            Body = sBody
        End Property
        
        Public Property Let Body(ByRef s)
            sBody = s
        End Property
        
        Public Property Get OrigSenderEmail()
            OrigSenderEmail = sOrigSenderEmail
        End Property
        
        Public Property Let OrigSenderEmail(ByRef s)
            sOrigSenderEmail = s
        End Property
        
        Public Property Get SendUsing()
            SendUsing = lSendUsing
        End Property
        
        Public Property Let SendUsing(ByVal l)
            lSendUsing = l
        End Property
        
        Public Property Get SmtpServerPort()
            SmtpSErverPort = lSmtpServerPort
        ENd Property
        
        Public Property Let SmtpServerPort(ByVal l)
            lSmtpServerPort = l
        End Property
        
        Public Property Get SmtpServer()
            SmtpServer = sSmtpSErver
        End Property
        
        Public Property Let SmtpServer(ByRef s)
            sSmtpServer = s
        End Property
        
        Public Property Get SmtpAuthenticate()
            SmtpAuthenticate = lSmtpAuthenticate
        End Property
        
        Public Property Let SmtpAuthenticate(ByVal l)
            lSmtpAuthenticate = l
        End Property
        
        Public Property Get SendUserName()
            SendUserName = sSendUserName
        End Property
        
        Public Property Let SendUserName(ByRef s)
            sSendUserName = s
        End Property
        
        Public Property Get SendPassword()
            SendPassword = sSendPassword
        End Property 
        
        Public Property Let SendPassword(ByRef s)
            sSendPassword = s
        End Property 
        
        Public Property Get SmtpUseSSL()
            SmtpUseSSL = bSmtpUseSSL
        End Property
        
        Public Property Let SmtpUseSSL(ByVal b)
            bSmtpUseSSL = b
        ENd Property
    End Class
%&gt;
</pre>
</div>
<p>然后就可以使用CMail来发送邮件了。比如在一个网页界面上提供一个填写发件人姓名，收件人邮件地址，以及消息内容的表单，表单提交后，可以使用类似如下的后台代码来利用CEmail来发送邮件：</p>
<div style="text-indent: 0;">
<pre class="brush: vb">&lt;!--#include file="CEmail.asp"--&gt;
&lt;%
    Class CBeanSendToFriend
        Private sFromEmail
        Private sToEmail
        Private sMessage 
        Private sBCCEmail
        Private sSubject
        Private sURL
        Private sHeader
        Private sFooter
        Private sBody
        
        Private Function bValidateExp(ByRef sPattern, ByRef s)
            Dim regEx
            Set regEx = Server.CreateObject("VBScript.RegExp")
            regEx.Global = True
            regEx.IgnoreCase = True
            regEx.Pattern = sPattern
            bValidateExp = regEx.Test(s)
            Set regEx = Nothing
        End Function 
        
        Private Sub Class_Initialize()
            Me.GetRequest
        End Sub
        
        Public Sub GetRequest()
            Me.FromEmail = Replace(Trim(Request.Form("FromEmail")), "'", "")
            Me.ToEmail = Replace(Trim(Request.Form("ToEmail")), "'", "")
            Me.Message = Trim(Request.Form("Message"))
            Me.URL = Trim(Request.Form("URL"))
            Me.BCCEmail = "***@myfootprints.cn"
            Me.Subject = Trim(Request.Form("Subject"))
            Me.Header = (Request.Form("Header"))
            Me.Footer = Request.Form("Footer")
        End Sub
        
        Public Function Validate()
            Validate = True
            If Len(Me.ToEmail) &lt;= 0 Then
                AddInfo2 "接收Email不能为空", "ssnInfo_SendToFriend"
                Validate = False
            End If
            If Validate Then
                Dim oEmail
                Set oEmail = New CEmail
                oEmail.FromEmail = Me.FromEmail
                oEmail.ToEmail = Me.ToEmail
                oEmail.BCCEmail = Me.BCCEmail
                oEmail.Subject = Me.Subject
                'Me.Body = "您的朋友 " &amp; Me.FromEmail &amp; " 推荐您访问［我的涂鸦］网站：" &amp; vbCrLf &amp; vbCrLf &amp; Me.URL &amp; vbCrLf &amp; vbCrLf &amp; Me.Message &amp; vbCrLf &amp; vbCrLf &amp; "此页面由涂鸦发送链接服务发送。您的 Email 地址没有被添加到任何清单里，也没有被记录到我的网站里。"
                Me.Body = "您的朋友 " &amp; Me.FromEmail &amp; " " &amp; Me.Header &amp; vbCrLf &amp; vbCrLf &amp; Me.Message &amp; vbCrLf &amp; Me.Footer
                oEmail.Body = Me.Body
                If oEmail.SendTextMail() Then
                Else
                    Validate = False
                End If
                Set oEmail = Nothing
            End If
        End Function
        
        Public Property Get FromEmail()
            FromEmail = sFromEmail
        End Property
        
        Public Property Let FromEmail(ByRef s)
            sFromEmail = s
        End Property
        
        Public Property Get ToEmail()
            ToEmail = sToEmail
        End Property
        
        Public Property Let ToEmail(ByRef s)
            sToEmail = s
        End Property 
        
        Public Property Get Message()
            Message = sMessage
        End Property
        
        Public Property Let Message(ByRef s)
            sMessage = s
        End Property
        
        Public Property Get BCCEmail()
            BCCEmail = sBCCEmail
        End Property
        
        Public Property Let BCCEmail(ByRef s)
            sBCCEmail = s
        End Property
        
        Public Property Get Subject()
            Subject = sSubject
        End Property
        
        Public Property Let Subject(ByRef s)
            sSubject = s
        End Property
        
        Public Property Get URL()
            URL = sURL
        End Property
        
        Public Property Let URL(ByRef s)
            sURL = s
        End Property
        
        Public Property Get Body()
            Body = sBody
        End Property
        
        Public Property Let Body(ByRef s)
            sBody = s
        End Property
        
        Public Property Get Header()
            Header = sHeader
        End Property
        
        Public Property Let Header(ByRef s)
            sHeader = s
        End Property
        
        Public Property Get Footer()
            Footer = sFooter
        End Property 
        
        Public Property Let Footer(ByRef s)
            sFooter = s
        End Property
    End Class
%&gt;
</pre>
</div>
</div>
      