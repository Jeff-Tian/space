---
stackbit_url_path: >-
  posts/如何查看HTTP请求报文-
title: '如何查看HTTP请求报文 '
date: '2010-01-19 15:42:18'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/01/19/如何查看HTTP请求报文-
template: post
---

        <div style="text-indent: 2em;">
<p>我曾经写过一篇文章，<a href="http://www.myfootprints.cn/blog/post/16.html" target="_blank" title="如何查看HTTP响应报文">如何查看HTTP响应报文</a>，说的是，通过Windows系统下的命令行，使用Telnet命令来查看服务器返回的HTTP响应报文。在那里，是通过手动输入HTTP请求报文（即自己是客户端），将此报文发送给服务器，然后接收来自服务器的回复报文。</p>
<p>今天，我们将位置反过来，自己是服务器，接受来自客户端的HTTP请求报文，然后给予客户端以响应。与上次相反，上次不关心请求报文，而这次是不关心响应报文（即我们不给客户端合乎HTTP协议的HTTP响应报文，而是随便一个什么响应吧），专门查看来自客户端的规范的HTTP请求报文。</p>
<p>做法是，自己编写一个服务器程序。（我正好在学习Java编程，这里使用Java程序设计语言。）写好这个程序后，编译并运行它，然后在你可以使用的机器的浏览器里，将其设置中的代理服务器的地址设置为正在运行服务器程序的机器的IP地址，然后将端口号填写上服务器程序监听所在的端口号。设置好后，随便在浏览器地址栏里输入一个网址，尝试打开它。这时浏览器便发送了相应的HTTP请求报文，并被自己写好的服务器程序读取到，让服务器将它读到的报文显示出来，我们就可以查看到客户端的请求报文了。</p>
<p>通过此练习后，我还突然理解了网站服务器程序（如IIS、Apache等）的工作方式。原来它们就是一直在一个端口监听来自客户端的连接请求。一旦连接建立，客户向服务器程序请求相关资源（如Web页面），它们就去磁盘里寻找相关的文件，找到后，将文件内容打包到HTTP响应报文中，返回给客户端。我想，我就快要能够自己写一个网站服务器程序了。</p>
<p>通过此练习，我还看到了浏览器的工作方式，它在前一个连接关闭之后，立即又发起了另一个HTTP请求，请求的是该网页中的一个引用对象 favicon.ico。</p>
<p>以下是服务器程序代码(TCPServer.java)：</p>
<pre class="brush: java" style="text-indent: 0;">import java.io.*;
import java.net.*;

public class TCPServer {
	public static void main(String argv[]) throws Exception {
		// 客户端来的请求字符串
		String sClientLine;
		// 处理后的字符串
		String sMyLine;
		Long lCount;
		
		// 显示启动信息
		System.out.println("服务器程序启动了。");
		
		// 定义端口值
		int iPortNo;
		
		iPortNo = 6789;
		// 定义欢迎套接字
		ServerSocket oWelcomeSocket = new ServerSocket(iPortNo);
		// 输出信息
		System.out.println("服务器在端口 " + iPortNo + " 处开启了一个欢迎套接字。");
		// 不断地接收来自客户端的请求
		lCount = 0L;
		while (true) {
			// 新建立连接套接字
			Socket oConnectionSocket = oWelcomeSocket.accept();
			if (oConnectionSocket != null) {
				System.out.println("服务器收到来自客户端的请求，连接套接字已经建立。");
				BufferedReader oInFromClient = new BufferedReader(new InputStreamReader(oConnectionSocket.getInputStream()));
				DataOutputStream oOutToClient = new DataOutputStream(oConnectionSocket.getOutputStream());
				while (true) {
					sClientLine = "";
					sMyLine = "";
					try {
//						if (oInFromClient.ready()) {							
							System.out.println("开始读入客户端的请求字符串……");
							sClientLine = oInFromClient.readLine();
							if (! sClientLine.equals("")) {
								sMyLine = sClientLine + '\n';
								System.out.println("客户端说： " + sClientLine);
								if (sClientLine.equalsIgnoreCase("quit") || sClientLine.equalsIgnoreCase("exit")) {
									System.out.println("客户端想离开。");
									sMyLine = "好的，我会让你走的。";
								}
								oOutToClient.writeBytes(sMyLine);
								System.out.println("我说： " + sMyLine);
								if (sClientLine.equalsIgnoreCase("quit") || sClientLine.equalsIgnoreCase("exit")) {
									break;
								}
							} else {
								System.out.println("客户端什么也没有说。我准备关闭此连接。");
								oConnectionSocket.close();
								break;
							}
//						} else {
//							System.out.println("客户端缓冲数据未准备好。我准备关闭此连接。");
//							oConnectionSocket.close();
//							break;
//						}
					} catch (Exception oError) {
						sMyLine = "退出" + '\n';
						System.out.println("连接断开了，可能是客户端断开的。");
						break;
					} finally {
						
					}
				}
				System.out.println("连接关闭了。");
			} else {
				System.out.println("服务器收到来自客户端的请求，连接套接字建立失败。");
			}
//			lCount ++;
//			if (lCount &gt;= 10) {
//				break;
//			}
		}
		// 服务器程序结束
//		System.out.println("服务器程序结束。");
	}
}
</pre>
<p>以下是运行上面的程序，并截获到HTTP请求报文所显示的相关内容：</p>
<pre style="text-indent: 0; broder: dashed 2px #dedede; padding: 10px;">服务器程序启动了。
服务器在端口 6789 处开启了一个欢迎套接字。
服务器收到来自客户端的请求，连接套接字已经建立。
开始读入客户端的请求字符串……
客户端说： GET http://www.myfootprints.cn/ HTTP/1.1
我说： GET http://www.myfootprints.cn/ HTTP/1.1

开始读入客户端的请求字符串……
客户端说： Accept: image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/x-silverlight, application/x-ms-application, application/x-ms-xbap, application/vnd.ms-xpsdocument, application/xaml+xml, application/x-shockwave-flash, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/msword, */*
我说： Accept: image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/x-silverlight, application/x-ms-application, application/x-ms-xbap, application/vnd.ms-xpsdocument, application/xaml+xml, application/x-shockwave-flash, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/msword, */*

开始读入客户端的请求字符串……
客户端说： Accept-Language: zh-cn
我说： Accept-Language: zh-cn

开始读入客户端的请求字符串……
客户端说： User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; QQWubi 87; QQDownload 609; Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) ; CIBA; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)
我说： User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; QQWubi 87; QQDownload 609; Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) ; CIBA; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)

开始读入客户端的请求字符串……
客户端说： Accept-Encoding: gzip, deflate
我说： Accept-Encoding: gzip, deflate

开始读入客户端的请求字符串……
客户端说： Proxy-Connection: Keep-Alive
我说： Proxy-Connection: Keep-Alive

开始读入客户端的请求字符串……
客户端说： Host: www.myfootprints.cn
我说： Host: www.myfootprints.cn

开始读入客户端的请求字符串……
客户端说： Cookie: lstat_bc_1342022=10971800501034495286
我说： Cookie: lstat_bc_1342022=10971800501034495286

开始读入客户端的请求字符串……
客户端什么也没有说。我准备关闭此连接。
连接关闭了。
服务器收到来自客户端的请求，连接套接字已经建立。
开始读入客户端的请求字符串……
客户端说： GET http://www.myfootprints.cn/favicon.ico HTTP/1.1
我说： GET http://www.myfootprints.cn/favicon.ico HTTP/1.1

开始读入客户端的请求字符串……
客户端说： Accept: */*
我说： Accept: */*

开始读入客户端的请求字符串……
客户端说： Accept-Encoding: gzip, deflate
我说： Accept-Encoding: gzip, deflate

开始读入客户端的请求字符串……
客户端说： User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; QQWubi 87; QQDownload 609; Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) ; CIBA; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)
我说： User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; QQWubi 87; QQDownload 609; Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) ; CIBA; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)

开始读入客户端的请求字符串……
客户端说： Host: www.myfootprints.cn
我说： Host: www.myfootprints.cn

开始读入客户端的请求字符串……
客户端说： Proxy-Connection: Keep-Alive
我说： Proxy-Connection: Keep-Alive

开始读入客户端的请求字符串……
客户端说： Cookie: lstat_bc_1342022=10971800501034495286
我说： Cookie: lstat_bc_1342022=10971800501034495286

开始读入客户端的请求字符串……
客户端什么也没有说。我准备关闭此连接。
连接关闭了。
</pre>
</div>
      