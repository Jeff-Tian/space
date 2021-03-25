---
stackbit_url_path: >-
  posts/请先将SQL-Server升级到SP1再安装SQL-Server-2008
title: '请先将SQL Server升级到SP1再安装SQL Server 2008'
date: '2010-03-27 06:49:01'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/27/请先将SQL-Server升级到SP1再安装SQL-Server-2008
template: post
---

        <p>这个问题遇到过两次了，现在把它记录下来。以备自己以后碰到这个问题时，或者别人碰到这个问题时，不用再花大力气去寻找解决办法。</p>
<p>在安装Microsoft SQL Server 2008的过程中，跳出如下对话框说：“规则‘以前版本的 Microsoft Visual Studio 2008’ 失败。 本计算机安装了以前版本的 Microsoft Visual Studio 2008。请先将 Microsoft Visual Studio 2008 升级到 SP1 再安装 SQL Server 2008。”</p>
<p>&nbsp;</p>
<p><img onload="ResizeImage(this,520)" alt="" title="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_218.png"></p>
<p>这是由于电脑上安装的Microsoft Visual Studio 2008还需要加一个补丁，即所谓的SP1（Service Pack 1）。</p>
<p>要解决它很简单，去微软网站上下载这个补丁并安装。这个补丁比较大，下载和安装需要耗费比较长的时间，因此，在下载前一定要先检查你所安装的Visual Studio 2008是中文版还是英文版，因为SP1补丁也相应地分为中文版和英文版，而且它们之间是不兼容的！即如果你安装的是英文版的Visual Studio 2008，而下载了中文版的SP1，那么下载的时间就浪费了，而且还得重新下载英文版的SP1，因为中文版SP1安装不上去。</p>
<p>中文（中文简体）版 SP1 下载地址：<a target="_blank" href="http://download.microsoft.com/download/1/9/d/19d22169-a4b2-455f-8c28-ed137bd91487/VS2008SP1CHSX1512981.iso">http://download.microsoft.com/download/1/9/d/19d22169-a4b2-455f-8c28-ed137bd91487/VS2008SP1CHSX1512981.iso</a></p>
<p>英文版 SP1 下载地址：&nbsp;<a target="_blank" href="http://download.microsoft.com/download/a/3/7/a371b6d1-fc5e-44f7-914c-cb452b4043a9/VS2008SP1ENUX1512962.iso">http://download.microsoft.com/download/a/3/7/a371b6d1-fc5e-44f7-914c-cb452b4043a9/VS2008SP1ENUX1512962.iso</a></p>
<p>当然，你可以在&nbsp;<a href="http://www.microsoft.com/downloads/details.aspx?displaylang=zh-cn&amp;FamilyID=27673c47-b3b5-4c67-bd99-84e525b5ce61">http://www.microsoft.com/downloads/details.aspx?displaylang=zh-cn&amp;FamilyID=27673c47-b3b5-4c67-bd99-84e525b5ce61</a>&nbsp;主页面选择各种语言的版本。</p>
<p>下载下来后，即可以开始安装，如下：</p>
<p>&nbsp;</p>
<p><img onload="ResizeImage(this,520)" alt="" title="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_219.png"></p>
<p>SP1 安装成功界面：</p>
<p>&nbsp;</p>
<p><img onload="ResizeImage(this,520)" alt="" title="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_220.png"></p>
<p>点击Finish（完成），就可以开始重新安装SQL Server 2008了。如果在SQL Server 2008安装跳出错误时，你没有取消退出安装的话，现在只需要回到上一步，再次点击下一步，就可以看到，所有检查均以通过，可以顺利进行后面的安装了。</p>
<p>继续等待，直到成功完成。</p>
<p><img alt="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_221.png"></p>
      