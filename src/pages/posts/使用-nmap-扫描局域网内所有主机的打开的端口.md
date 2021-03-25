---
stackbit_url_path: >-
  posts/使用-nmap-扫描局域网内所有主机的打开的端口
title: '使用 nmap 扫描局域网内所有主机的打开的端口'
date: '2010-01-30 12:52:40'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/01/30/使用-nmap-扫描局域网内所有主机的打开的端口
template: post
---

        <div style="text-indent: 2em;"><p>&nbsp;以下为使用 nmap 工具扫描局域网内所有主机的打开的端口的例子。nmap 工具可以上 http://insecure.org/nmap 网站下载。</p>
<pre style="text-indent: 0; padding: 10px; background-color: black; color: white; margin-left: 4em;">D:\Program Files\nmap-5.21&gt;nmap -sT 192.168.1.0/24 | more

Starting Nmap 5.21 ( http://nmap.org ) at 2010-01-30 20:45 中国标准时间
Nmap scan report for 192.168.1.1
Host is up (0.00018s latency).
Not shown: 997 filtered ports
PORT    STATE SERVICE
21/tcp  open  ftp
80/tcp  open  http
110/tcp open  pop3
MAC Address: 00:21:27:29:D0:F0 (Tp-link Technology Co.)

Nmap scan report for 192.168.1.12
Host is up (1.0s latency).
Not shown: 989 closed ports
PORT     STATE SERVICE
25/tcp   open  smtp
80/tcp   open  http
110/tcp  open  pop3
135/tcp  open  msrpc
139/tcp  open  netbios-ssn
443/tcp  open  https
445/tcp  open  microsoft-ds
1025/tcp open  NFS-or-IIS
1026/tcp open  LSA-or-nterm
1085/tcp open  unknown
6059/tcp open  X11:59

Stats: 0:05:02 elapsed; 255 hosts completed (3 up), 1 undergoing Connect Scan
Connect Scan Timing: About 99.99% done; ETC: 20:50 (0:00:00 remaining)
Nmap scan report for 192.168.1.20
Host is up (0.000012s latency).
Not shown: 994 filtered ports
PORT     STATE SERVICE
21/tcp   open  ftp
80/tcp   open  http
110/tcp  open  pop3
5357/tcp open  unknown
6001/tcp open  X11:1
8383/tcp open  unknown
MAC Address: 00:1D:72:2E:F7:64 (Wistron)

Nmap done: 256 IP addresses (3 hosts up) scanned in 302.77 seconds
</pre></div>
      