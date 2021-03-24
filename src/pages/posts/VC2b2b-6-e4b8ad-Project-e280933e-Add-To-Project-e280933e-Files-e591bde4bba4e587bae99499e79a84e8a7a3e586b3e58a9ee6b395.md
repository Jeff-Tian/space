---
stackbit_url_path: >-
  posts/VC2b2b-6-e4b8ad-Project-e280933e-Add-To-Project-e280933e-Files-e591bde4bba4e587bae99499e79a84e8a7a3e586b3e58a9ee6b395
title: 'VC++ 6 中 Project –> Add To Project –> Files 命令出错的解决办法'
date: '2010-11-27 21:20:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - VC++
  - 技术
canonical_url: >-
template: post
---
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_70.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="VC 6" border="0" alt="VC 6" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_70.png" width="244" height="196" /></a></p>  <p>我使用的Windows XP系统，安装了 VC++ 6 之后，每次执行Project –&gt; Add To Project –&gt; Files （工程 –&gt; 添加到工程 –&gt; 文件）时，VC++ 6 就会报错。重装了好几遍，仍然如此。后来从网上得知，是因为VC++ 6 和 Office 2007 冲突。</p>  <p>我装的Office 2007，不想删除。后来找到一种解决方案，记录下来，备忘。</p>  <hr />  <p>不能打开的原因是因为vc6.0和office2007冲突，卸了2007就好了，但是这个有点不实际，毕竟office经常会用，那另一种方法就是用filetool，去这里下载 <a href="http://support.microsoft.com/kb/241396/zh-cn">http://support.microsoft.com/kb/241396/zh-cn</a></p>  <p>下载完后就可以开始解决问题啦。</p>  <p>最好把filetool解压到VC6.0的安装目录下一个filetool文件夹，在build后去filetool文件夹的debug中找 filetool.dll文件（注：filetool这个文件夹 不要给删了！）</p>  <p>1. 下载FileTool.exe，并解压    <br />2. 打开VC6.0，点击File-Open Workspace，选择刚解压出来的FileTool.dsw，并确定     <br />3. 点击Bulid-Build FileTool.dll，生成FileTool.dll文件     <br />4. 把生成的FileTool.dll文件拷贝到合适的地方（避免误删），在VC6.0中点击Tools-Customize     <br />5. 在出现的“Customize”对话框中，点击Add-Ins and Macro Files标签     <br />6. 点击Browse，在文件类型下选 dll ， 定位刚才生成的dll文件，点击确定，然后点击OK保存设置     <br />7. 此时VC中会出现一个上面只有两个图标的工具栏，点击其右上角的“X”按钮将其关闭，然后关闭VC6.0并重新启动程序     <br />8. 还是在VC6.0中点击Tools-Customize     <br />9. 在Customize对话框中点击Keboard标签     <br />10. 从Category的下拉菜单框中选择File     <br />11.在Commands窗口中选择FileOpen     <br />12.在Current keys窗口中选择CTRL+O条目，并点击Remove     <br />13.从Category的下拉菜单框中选择Project     <br />14.在Commands窗口中选择InsertFilesIntoProject，如果之前给它注册了快捷键，则按照上面所说步骤移除之，默认情况下它是没有快捷键的.     <br />15.从Category的下拉菜单框中选择Add-Ins     <br />16.这时Commands窗口中应该已经多出了AddFileToProject和OpenFile两个条目，可以给它们分配快捷键了，选择OpenFile条目，然后点击Press New Shortcut Key输入框，按下想设置的快捷键或快捷键组合（如打开文件默认的快捷键CTRL+O），点击Assign     <br />可以以同样的方法为其它的命令设置快捷键</p>  <p>最后，还应该在菜单栏内做相应的改动，移除无法使用的旧Open命令，换上新的：    <br />1. 在VC6.0中点击Tools-Customize（然后点击一下Toolbars或者Commands,这样才能下一步）     <br />2. 点击vc6.0工具栏上的File菜单，并将弹出菜单中的Open命令拖拽至弹出菜单之外（出现一个减号时释放，别弄错了给它拖到其他菜单中去了）并释放     <br />3. 点击Project菜单，并将弹出菜单中的Add To Project命令拖拽至弹出菜单之外并释放     <br />4. 在Customize对话框中选择Commands标签     <br />5. 在Category列表中选择Add-ins     <br />6. 点击File菜单，将OpenFile命令（图标为字母O）拖动到之前Open命令所在位置点击Project菜单，将AddFileToProject命令（图标为字母A）拖动到之前Add To Projec命令所在位置</p>  <p>这样，VC6.0中无法打开文件和无法向工程中添加文件的问题就解决了。</p>