---
stackbit_url_path: >-
  posts/Solved-Error-resizing-the-VirtualBox-VMs-disk
title: 'Solved: Error resizing the VirtualBox VM’s disk'
date: '2013-11-20 21:59:44.0386852'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - VM
  - VirutalBox
canonical_url: >-
template: post
---
<h2><font color="#9b00d3">Problem:</font></h2>  <p>When executing the following command to resize the disk for a VirtualBox VM’s disk:</p>  <pre style="color: white; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; padding-right: 5px; background-color: black">VBoxManage modifyhd JeffTian-Linux.vdi --resize 80000</pre>

<p>The following error occurred:</p>

<pre style="color: white; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; padding-right: 5px; background-color: black">VBoxManage.exe: error: Failed to create the VirtualBox object!
VBoxManage.exe: error: Code CO_E_SERVER_EXEC_FAILURE (0x80080005) - Server execu
tion failed (extended info not available)
VBoxManage.exe: error: Most likely, the VirtualBox COM server is not running or
failed to start.</pre>

<h2><font color="#9b00d3">Solution:</font></h2>

<p>1. Open the Oracle VM VirtualBox Manager as Administrator;</p>

<p>2. Try the command again, it will success with the following output:</p>

<pre style="color: white; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; padding-right: 5px; background-color: black">0%...10%...20%...30%...40%...50%...60%...70%...80%...90%...100%</pre>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_620.png"><img title="Solved: Error resizing the VirtualBox VM’s disk" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="Solved: Error resizing the VirtualBox VM’s disk" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_339.png" width="674" height="448" /></a></p>

<h2><font color="#9b00d3">Remark:</font></h2>

<p>If you want to always start the Oracle VM VirtualBox Manager as Administrator by default, you can set the following steps:</p>

<p>1. Right click the Oracle VM Virtual BOX Icon on the desk and select “Properties”:</p>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_621.png"><img title="Select Properties on the context menu of Oracle VM VirtualBox Icon" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="Select Properties on the context menu of Oracle VM VirtualBox Icon" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_340.png" width="523" height="570" /></a></p>

<p>2. On the pop up Oracle VM VirtualBox Properties Window, click “Advanced…” button.</p>

<p>3. On the next pop up Advanced Properties window, check the “Run as administrator” checkbox, and click OK, click OK again on the parent window. </p>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_622.png"><img title="Check &quot;Run as administrator&quot; checkbox" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="Check &quot;Run as administrator&quot; checkbox" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_341.png" width="661" height="598" /></a></p>

<p>4. Done.</p>