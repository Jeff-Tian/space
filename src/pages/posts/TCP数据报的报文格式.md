---
stackbit_url_path: >-
  posts/TCP数据报的报文格式
title: 'TCP数据报的报文格式'
date: '2009-12-01 15:29:59'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;"><p>下图显示了TCP数据报的报文格式。</p><p><span class="Apple-style-span" style="background-color: rgb(255, 255, 255); "><img onload="ResizeImage(this,520)" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_389.png" alt="TCP数据报的报文格式" title="TCP数据报的报文格式"></span></p><p>用 C++ 语言定义它的源代码如下：</p>
<pre class="brush: c" style="text-indent: 0;">typedef struct tcp_hdr		// 定义 TCP 首部
{
	USHORT	th_sport;		// 16 位源端口
	USHORT	th_dport;		// 16 位目的端口
	unsigned int th_seq;	// 32 位序列号
	unsigned int th_ack;	// 32 位确认号
	unsigned char th_lenres;	// 4 位首部长度，6 位保留字
	unsigned char th_flag;		// 6 位标志位
	USHORT th_win;				// 16 位窗口大小 
	USHORT th_sum;				// 16 位校验和
	USHORT th_urp;				// 16 位紧急数据偏移量
} TCPHEADER;
</pre>
      </div>