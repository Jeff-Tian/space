---
stackbit_url_path: >-
  posts/如何允许-Windows-7-主机与-Ubuntu-虚拟机互相-ping-通
title: '如何允许 Windows 7 主机与 Ubuntu 虚拟机互相 ping 通'
date: '2014-05-26 03:49:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Ubuntu
  - Virtual Box
  - Windows 7
canonical_url: >-
template: post
---
<h2><span style="color: #9b00d3;">问题：</span></h2>
<p>在 Windows 7 主机里的 Virtual Box 中安装了 Ubuntu，然后发现主机能够 Ping 通虚拟机，但反过来不行。</p>
<h2><span style="color: #9b00d3;">解决方案：</span></h2>
<p>在 Virtual Box 中的设置里，将网络连接方式改成 Host-only Adapter 之后就可以互相 Ping 通了。</p>
<p><a href="http://zizhujy.com/blog/image.axd?picture=image_626.png"><img style="max-width: 100%; background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="http://zizhujy.com/blog/image.axd?picture=image_thumb_345.png" alt="image" border="0" /></a></p>
<p>顺便说一句，在 Windows 的 cmd 里查看 IP 设置，命令为 ipconfig，但在 Ubuntu 中默认没有这个命令，不过可以使用 ifconfig 来查看 Ubuntu 的 IP 设置。</p>
<pre class="cmd auto-wrap">jeff@Jeff-Ubuntu:~$ ifconfig
eth0      Link encap:Ethernet  HWaddr 08:00:27:6c:3b:bc  
          inet addr:192.168.56.101  Bcast:192.168.56.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe6c:3bbc/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:32 errors:0 dropped:0 overruns:0 frame:0
          TX packets:53 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:3844 (3.8 KB)  TX bytes:9924 (9.9 KB)

lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:146 errors:0 dropped:0 overruns:0 frame:0
          TX packets:146 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:396020 (396.0 KB)  TX bytes:396020 (396.0 KB)
</pre>