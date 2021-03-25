---
stackbit_url_path: >-
  posts/IPv4的数据报格式
title: 'IPv4的数据报格式'
date: '2009-12-01 15:16:35'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/12/01/IPv4的数据报格式
template: post
---

        <div style="text-indent: 2em;"><p>下图显示了IPv4的数据报格式。</p><p><span class="Apple-style-span" style="background-color: rgb(255, 255, 255); "><img onload="ResizeImage(this,520)" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_390.png" alt="" title=""></span></p><p>用 C++ 语言定义它的源代码如下：</p>
<pre class="brush: c">typedef struct ip_hdr // 定义 IP 首部
{
	// 第一个32比特
	unsigned char h_verlen;	// 4 位首部长度，4 位 IP版本号
	unsigned char tos;		// 8 位服务类型 TOS
	unsigned short total_len;	// 16 位总长度（字节）

	// 第二个32比特
	unsigned short ident;		// 16 位标识
	unsigned short frag_and_flags;	// 3 位标识位 ＋ 13 比特片偏移

	// 第三个32比特
	unsigned char ttl;				// 8 位生存时间 ttl
	unsigned char proto;			// 8 位协议（TCP、UDP 或其他）
	unsigned short checksum;		// 16 位 IP 首部校验和

	// 第四个32比特
	unsigned int sourceIP;			// 32 位源 IP 地址

	// 第五个32比特
	unsigned int destIP;			// 32 位目的 IP 地址
} IPHEADER;
</pre>
</div>
      