---
stackbit_url_path: >-
  posts/【转】-Eclipse-35-中的jvm-terminatedExit-code=-1错误的解决-
title: '【转】  Eclipse 3.5 中的jvm terminated.Exit code=-1错误的解决 '
date: '2010-04-04 11:27:32'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p><span class="Apple-style-span" style="font-family: verdana, sans-serif; line-height: 21px; font-size: 14px; ">
</span></p><p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; ">今天下了一个Eclipse galileo，不过解压后运行有点问题，出现了jvm terminated.Exit code=-1的错误。如下图所示：<img src="http://www.zizhujy.com/blog/image.axd?picture=image_204.png" alt="" style="border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; "></p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; ">其实之前也遇到过类似的问题，基本上网上大概的意思就是说jvm版本的问题，但是我用java -version看了一下我的jdk，都是1.6的，应该不会有什么问题。</p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; ">后来，还是看到一些关于内存方面的东西。可以解决，方法如下：</p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; ">打开安装目录下的eclipse.config（我的是eclipse.ini，涂鸦注）配置文件，大致的内容如下，</p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; ">&nbsp;-startup<br>
plugins/org.eclipse.equinox.launcher_1.0.200.v20090520.jar<br>
--launcher.library<br>
plugins/org.eclipse.equinox.launcher.win32.win32.x86_1.0.200.v20090519<br>
-product<br>
org.eclipse.epp.package.jee.product<br>
--launcher.XXMaxPermSize<br>
256M<br>
-showsplash<br>
org.eclipse.platform<br>
--launcher.XXMaxPermSize<br>
256m<br>
-vmargs<br>
-Dosgi.requiredJavaVersion=1.5<br>
-Xms40m<br>
-Xmx512m</p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; ">其中的“Xmx512m”&nbsp;改成“Xmx256m”，也就好使了。</p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; ">再次解决，特此记录一下！</p>
<div>&nbsp;</div>
<p></p>
      