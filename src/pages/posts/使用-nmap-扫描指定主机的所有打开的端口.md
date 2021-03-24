---
stackbit_url_path: >-
  posts/使用-nmap-扫描指定主机的所有打开的端口
title: '使用 nmap 扫描指定主机的所有打开的端口'
date: '2010-02-04 20:20:23'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;"><p>&nbsp;以下为使用 nmap 工具扫描局域网内所有主机的打开的端口的例子。nmap 工具可以上 http://insecure.org/nmap 网站下载。</p><pre style="text-indent: 0; padding: 10px; background-color: black; color: #00FF00; margin-left: 4em;">C:\Program Files\nmap-5.21&gt;nmap -sT 110.75.164.1 | more

Starting Nmap 5.21 ( http://nmap.org ) at 2010-02-05 04:19 中国标准时间
Nmap scan report for 110.75.164.1
Host is up (0.00s latency).
Not shown: 999 filtered ports
PORT   STATE SERVICE
21/tcp open  ftp

Nmap done: 1 IP address (1 host up) scanned in 50.42 seconds
</pre></div>
      