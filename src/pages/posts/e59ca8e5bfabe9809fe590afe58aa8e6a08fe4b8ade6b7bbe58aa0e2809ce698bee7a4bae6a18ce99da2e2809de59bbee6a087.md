---
stackbit_url_path: >-
  posts/e59ca8e5bfabe9809fe590afe58aa8e6a08fe4b8ade6b7bbe58aa0e2809ce698bee7a4bae6a18ce99da2e2809de59bbee6a087
title: '在快速启动栏中添加“显示桌面”图标'
date: '2011-01-16 05:52:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 技术
  - 显示桌面
canonical_url: https://be-net.azurewebsites.net/post/2011/01/16/e59ca8e5bfabe9809fe590afe58aa8e6a08fe4b8ade6b7bbe58aa0e2809ce698bee7a4bae6a18ce99da2e2809de59bbee6a087
template: post
---
<p>有时会不小心将快速启动栏中的“显示桌面”图标误删掉。这时可以通过在C:\Windows\System\文件夹中去找文件名为“显示桌面.scf”的文件，将它拖到快速启动栏中，就可以了。</p>  <p>如果没有找到该文件，可以新建一个文件文件，输入以下内容：</p>  <pre style="text-indent: 0px">[Shell] <br />Command=2 <br />IconFile=explorer.exe,3 <br />[Taskbar] <br />Command=ToggleDesktop <br /></pre>

<p>保存关闭后，将这个文件重命名为“显示桌面.scf”，然后将它拖到快速启动栏中就可以了。</p>