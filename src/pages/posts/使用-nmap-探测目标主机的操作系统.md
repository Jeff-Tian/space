---
stackbit_url_path: >-
  posts/使用-nmap-探测目标主机的操作系统
title: '使用 nmap 探测目标主机的操作系统'
date: '2010-01-30 14:27:10'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>以下是使用 nmap 探测目标主机的操作系统的两个实例（两种方法都没有探测到）。nmap 工具可以上 <a href="http://insecure.org/nmap" title="nmap 下载" target="_blank">http://insecure.org/nmap</a> 网站下载。</p>
<p>一、</p>
<pre style="text-indent: 0; background-color: black; color: #00FF00; padding: 10px; margin-left: 4em;">D:\Program Files\nmap-5.21&gt;nmap -A 192.168.1.20 | more

Starting Nmap 5.21 ( http://nmap.org ) at 2010-01-30 22:31 中国标准时间
Nmap scan report for 192.168.1.20
Host is up (0.00s latency).
All 1000 scanned ports on 192.168.1.20 are filtered
MAC Address: 00:1D:72:2E:F7:64 (Wistron)
Too many fingerprints match this host to give specific OS details
Network Distance: 1 hop

HOP RTT     ADDRESS
1   0.00 ms 192.168.1.20

OS and Service detection performed. Please report any incorrect results at http:
//nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 30.05 seconds
</pre>
<p>二、</p>
<pre style="text-indent: 0; background-color: black; color: #00FF00; padding: 10px; margin-left: 4em;">D:\Program Files\nmap-5.21&gt;nmap -O 192.168.1.20 | more

Starting Nmap 5.21 ( http://nmap.org ) at 2010-01-30 22:34 中国标准时间
Nmap scan report for 192.168.1.20
Host is up (0.00s latency).
All 1000 scanned ports on 192.168.1.20 are filtered
MAC Address: 00:1D:72:2E:F7:64 (Wistron)
Too many fingerprints match this host to give specific OS details
Network Distance: 1 hop

OS detection performed. Please report any incorrect results at http://nmap.org/s
ubmit/ .
Nmap done: 1 IP address (1 host up) scanned in 27.27 seconds
</pre>
</div>
      