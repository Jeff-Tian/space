---
stackbit_url_path: >-
  posts/How-to-remove-the-password-of-a-VBA-project-如何移除VBA工程密码
title: 'How to remove the password of a VBA project 如何移除VBA工程密码'
date: '2011-05-25 23:22:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Password
  - VBA
  - breaker
  - 密码
  - 破解
canonical_url: https://be-net.azurewebsites.net/post/2011/05/25/How-to-remove-the-password-of-a-VBA-project-如何移除VBA工程密码
template: post
---
<p>Years ago I found an excellent article about how to remove the password of a VBA project, which taught me built an Excel add-in. After the add-in run, you can open the password protected Excel file in it, and break all the passwords that the Excel file has, worksheet password, workbook password, VBA project password, and whatever, by just one click on the menu.</p>
<p>The other day a friend asked me if I can help him to remove a VBA project password, I began to search on the web immediately, trying to find the excellent article, and copy the codes which can do everything I need. But unfortunately, that article just disappeared from the web!</p>
<p>Today I found a way to break the VBA project password manually, boring though, but the most important thing is that it did work!</p>
<p>The origin url &nbsp;is&nbsp;<span style="font-family: Simsun; font-size: medium;"><a href="http://www.zorvek.com/excel/removing-an-excel-workbook-vba-password.htm">http://www.zorvek.com/excel/removing-an-excel-workbook-vba-password.htm</a>.</span></p>
<p>The article is very short, which displays as below:</p>
<p>&nbsp;</p>
<p class="MsoNormal" style="margin-top: 0in; margin-right: 0in; margin-left: 0in; margin-bottom: 0.0001pt; font-size: 12pt; font-family: 'Times New Roman';"><span style="font-size: 8.5pt; font-family: Tahoma;">Removing an Excel Workbook VBA Password</span></p>
<p class="MsoNormal" style="margin-top: 0in; margin-right: 0in; margin-left: 0in; margin-bottom: 0.0001pt; font-size: 12pt; font-family: 'Times New Roman';"><span style="font-size: 8.5pt; font-family: Tahoma;">&nbsp;</span></p>
<p class="MsoNormal" style="margin-top: 0in; margin-right: 0in; margin-left: 0in; margin-bottom: 0.0001pt; font-size: 12pt; font-family: 'Times New Roman';"><span style="font-size: 8.5pt; font-family: Tahoma;">A VBA project password can be removed with a hex editor. Close the workbook and open the workbook file in the hex editor. Find the string "DPB" and change it to "<span class="SpellE">DPx</span>". Save the file. Open the workbook and click OK until the workbook is open (one or more dialogs are displayed describing various problems with the VBA project). Press ALT+F11, choose the menu command Tools-&gt;<span class="SpellE">VBAProject</span>&nbsp;Properties, navigate to the Protection tab, and change the password but do not remove it (note the new password). Save, close, and re-open the workbook. Press ALT+F11 and enter the new password. Choose Tools-&gt;<span class="SpellE">VBAProject</span>&nbsp;Properties, navigate to the Protection tab, and remove the password. Save the workbook.</span></p>
<p>&nbsp;</p>
<p>Let's do this step by step:</p>
<p>&nbsp;</p>
<p>1&gt; Open a hex editor. You can download one from <a href="http://www.hhdsoftware.com/free-hex-editor">http://www.hhdsoftware.com/free-hex-editor</a> in case you don't have a hex editor;</p>
<p>2&gt; Open the workbook you want to break its VBA password in that editor;</p>
<p>3&gt; Find the string "DPB" and replace it to "DPx";&nbsp;</p>
<p>4&gt; Save the file;&nbsp;</p>
<p>5&gt; Open the workbook and click OK until the workbook is open (one or more dialogs are displayed describing various problems with the VBA project);</p>
<p>6&gt; Press ALT+F11, enter the VBA Editor;</p>
<p>7&gt; Choose the menu command Tools -&gt; VBAProject Properties, navigate to the Protection tab, and change the password but do not remove it (note the new password);</p>
<p>8&gt; Save and close the workbook;</p>
<p>9&gt; Re-open it, press ALT+F11, enter the new password in VBA Editor;</p>
<p>10&gt; You can see the VBA Project source code now. Choose Tools -&gt; VBAProject Properties, navigate to the Protection tab, and remove the password;</p>
<p>11&gt; Save the workbook. Now you succeeded in removing the password!</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<div style="text-indent: 2em;">
<p>几年前我曾在网上发现过一篇出色的文章，它教会我建立一个自己的Excel加载宏，可以用它来移除VBA工程密码。怎样做到呢？很简单，在运行那个加载宏后，直接从里面打开需要移除密码的Excel文件，然后点击一下&ldquo;移除密码&rdquo;菜单项，接着那个Excel文件中所有的密码都被移除了（工作薄密码、工作表密码、VBA工程密码等等）。</p>
<p>前几天一个朋友问我能不能帮他破除一个VBA工程的密码，我自然想到了几年前的那篇文章，便去网上重新搜索。但不幸的是，那篇优秀的文章竟莫名地从网上消失了，我找了几天也没找到。如果找到了，只需要拷贝它的代码，在VBA编辑器中粘贴一下运行便可完成所有需要的工作。</p>
<p>不过，今天我找到了另一种手动移除VBA工程密码的方法，虽然繁琐，但最重要的是，它能行！</p>
<p>原文在此：<span style="font-family: Simsun; font-size: medium;">&nbsp;</span></p>
<p style="display: inline !important;">&nbsp;</p>
<p><span style="font-family: Simsun; font-size: medium;"> </span></p>
<p style="font-family: Simsun; font-size: medium; display: inline !important;"><span style="font-family: Simsun; font-size: medium;"><a href="http://www.zorvek.com/excel/removing-an-excel-workbook-vba-password.htm">http://www.zorvek.com/excel/removing-an-excel-workbook-vba-password.htm</a></span></p>
<p>&nbsp;</p>
<p style="font-family: Simsun; font-size: medium;">&nbsp;</p>
<p>&nbsp;</p>
<p>让我们一步一步来做：</p>
<p>1&gt; 打开一个Hex编辑器。你可以到&nbsp;<span style="font-family: Simsun; font-size: medium;">&nbsp;</span></p>
<p style="display: inline !important;">&nbsp;</p>
<p><span style="font-family: Simsun; font-size: medium;"> </span></p>
<p style="font-family: Simsun; font-size: medium; display: inline !important;"><a href="http://www.hhdsoftware.com/free-hex-editor">http://www.hhdsoftware.com/free-hex-editor</a></p>
<p>&nbsp;</p>
<p style="display: inline !important;">&nbsp;</p>
<p style="display: inline !important;">&nbsp;下载，如果你还没有一个Hex编辑器的话；</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>2&gt; 在Hex编辑器中打开你要破解密码的Excel工作薄或者加载宏文件；</p>
<p>3&gt; 找到"DPB"字符串，并将它替换成为"DPx"；</p>
<p>4&gt; 保存文件；</p>
<p>5&gt; 打开刚才保存的那个Excel文件，如果有对话框弹出，点击确定，直到文件完全打开；</p>
<p>6&gt; 按ALT+F11，进入VBA编辑器；</p>
<p>7&gt; 依次选择菜单项中的 工具-&gt;VBA工程，浏览到保护选项卡，然后修改密码（注意不是删除密码），记下新的密码；</p>
<p>8&gt; 保存并关闭文件；</p>
<p>9&gt; 重新打开刚才的文件，按ALT+F11，在VBA编辑器中输入新的密码；</p>
<p>10&gt; 你现在可以查看VBA工程的源代码了。选择 工具 -&gt; VBA工程属性，浏览到保护选项卡，然后删除密码；</p>
<p>11&gt; 保存文件，你成功了！</p>
</div>