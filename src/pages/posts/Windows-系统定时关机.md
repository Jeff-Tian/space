---
stackbit_url_path: >-
  posts/Windows-系统定时关机
title: 'Windows 系统定时关机'
date: '2011-08-13 19:47:00'
excerpt: >-
  在网上看到有很多小软件，有一些居然能够很流行。比如网上有很多定时关机的小软件。其实Windows系统自带了此功能啊。
comments_count: 0
positive_reactions_count: 0
tags: 
  - shutdown
  - 定时关机
  - 自动关机
canonical_url: >-
template: post
---
<style type="text/css">
	.cmd {
		border-top: solid 2px gray;
		border-left: solid 2px gray;
		border-right: solid 2px black;
		border-bottom: solid 2px black;
		width: 450px;
	}

	.cmd .titleBar {
		background-color: blue;
		background-image: url('/BlogEngine/BlogEngine/BlogEngine.NET/image.axd?picture=2011%2f8%2fcommandIcon.PNG');
		background-repeat: no-repeat;
		background-position: left center;
		color: white;
		font-weight: bold;
		font-size: larger;
		margin: 0;
		padding: 5px 0 5px 2em;
	}

	.cmd .mainBody {
		background-color: black;
		color: white;
		margin: 0;
		
	}


	.cmd .mainBody pre {
		padding: 5px;
	}

</style>  <h1><font color="#800080">背景</font></h1>  <p>在网上看到有很多小软件，有一些居然能够很流行。比如网上有很多定时关机的小软件。其实Windows系统自带了此功能啊。</p>  <h1><font color="#800080">步骤</font></h1>  <h2>一、开始/运行/输入“cmd”，回车：</h2>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_45.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_45.png" width="289" height="156" /></a> </p>  <h2>二、在命令行下输入“shutdown -i”，回车：</h2>  <div class="cmd">   <div class="titleBar">http://www.zizhujy.com/cmd.exe </div>    <div class="mainBody">     <pre>http://www.zizhujy.com/&gt;shutdown -i</pre>
  </div>
</div>

<h2>三、在弹出的“远程关机对话框”中的计算机一栏里，点击添加，并输入“127.0.0.1”（127.0.0.1这个IP地址代表本机）：</h2>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_46.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_46.png" width="356" height="465" /></a> </p>

<p></p>

<h2>四、在“您想让这些计算机做什么”下拉框中选择“关机”；在“显示警告”文本框中输入你想要的时间，比如2个小时，就写7200（秒）；在“选项”中随便选个，比如“应用程序：维护（计划中）”，点击确定：</h2>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_47.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_47.png" width="313" height="459" /></a> </p>

<h2>五、这时屏幕上弹出一个框框，搞定啦！</h2>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_48.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_48.png" width="244" height="218" /></a> </p>

<h2>六、如果你想撤销，可以在命令行中输入“shutdown -a”来解除这个定时关机任务（如果时间够多， 还来得及输入的话）：</h2>

<div class="cmd">
  <div class="titleBar">http://www.zizhujy.com/cmd.exe </div>

  <div class="mainBody">
    <pre>http://www.zizhujy.com/&gt;shutdown -a</pre>
  </div>
</div>

<h1><font color="#800080">附</font></h1>

<p>如果你想更快捷地定时关机，则可以直接在命令行下输入一行命令，而不用操纵复杂的图形界面（但也许有人认为命令更复杂，呵呵）。</p>

<div class="cmd">
  <div class="titleBar">http://www.zizhujy.com/cmd.exe </div>

  <div class="mainBody">
    <pre>http://www.zizhujy.com/&gt;shutdown -s -t 7200</pre>
  </div>
</div>