---
stackbit_url_path: >-
  posts/解决IIS中的组件ScriptingFileSystemObject不支持
title: '解决IIS中的组件"Scripting.FileSystemObject"不支持'
date: '2009-11-27 04:40:14'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---
<div style="text-indent: 2em;"><p>我的电脑里，IIS服务器一直是支持 Scripting.FileSystemObject 组件的，也一直用着这个组件进行文件系统的操作。</p><p>可是前天删除了一些Windows更新，今天一下子发现我的IIS服务器不支持Scripting.FileSystemObject组件了。于是百度了一下，解决了问题。</p><p><span style="font-family: 黑体; "><span style="color: rgb(128, 128, 128); "><span style="font-size: xx-large; "><strong>“</strong></span></span></span></p><p>1、首先在系统盘中（如我的是C:\Windows\System32\）查找scrrun.dll，如果存在这个文件，请跳到第三步，如果没有，请执行第二步。</p><p>2、在安装文件目录i386中找到scrrun.dl_，用winrar解压缩，得scrrun.dll，然后复制到x（你的系统盘）:\windows\system32\目录中。如果你找不到系统盘，也可以在<a target="_blank" title="scrrun.rar" href="http://www.myfootprints.cn/OldWeb/blog/upload/scrrun.rar">这里</a>下载rar文件，解压后复制到（你的系统盘）:\windows\system32\目录下。</p><p>3、运行 regsvr32 scrrun.dll</p><p><span style="font-family: 黑体; "><span style="font-size: xx-large; "><span style="color: rgb(128, 128, 128); ">”</span></span></span></p><p>如果是原本可以正常使用 Scripting.FileSystemObject 组件的，那么一般只需要直接做第三步就可以了。</p></div><p>&nbsp;</p><p><a href="http://www.myfootprints.cn/OldWeb/blog/upload/scrrun.rar" target="_blank">scrrun.rar</a></p>