---
stackbit_url_path: >-
  posts/自己动手编写一个Web服务器
title: '自己动手编写一个Web服务器'
date: '2010-05-22 13:01:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>以下代码是我自己写的第一个Web服务器。它支持纯文本的英文字符的静态HTML页面。复制并将代码编译成.class文件后，运行它即可。它的监听端口是6789，网站根目录为C:\Inetpub，如果该目录下有一个test.html文件，那么，运行它后，在浏览器中输入：</p>
<p>http://localhost:6789/test.html，即可实现访问。</p>
<p>它还可以作为一个查看浏览器请求报文（HTTP请求报文）的工具，要实现这点，只需要在浏览器中输入一个并不存在的网页文件（如 http://localhost:6789/notexists.html），服务器程序便把客户端浏览器的请求报文回显出来。</p>
<p>源代码如下：</p>
<pre class="brush: java">
import java.io.*;
import java.net.*;

public class MyWebServer {
	public static String WebRoot = "C:\\Inetpub";
	
	/**
	 * 将虚拟路径转换成实际物理路径
	 * @param virtualPath
	 * @return
	 * @throws Exception
	 */
	private static String mapPath(String virtualPath) throws Exception {
		
		return WebRoot + virtualPath.replace("/", "\\");
	}
	
	private static String parseVirtualPathFromRequest(String request) throws Exception {
		return request.substring(4, request.indexOf(" HTTP/1.1"));
	}
	
	public static void main(String argv[]) throws Exception {
		// 客户端来的请求字符串
		String request;
		String requestLine;
		// 响应字符串
		String response;
		// HTML 模板
		String htmlTemplate = "&lt;html&gt;&lt;head&gt;&lt;meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/&gt;&lt;title&gt;&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;/body&gt;&lt;/html&gt;";
		
		long count;
		
		// 显示启动信息
		printInfo("我的网页服务器启动了。");
		
		// 定义端口值
		int portNo;
		
		portNo = 6789;
		// 定义欢迎套接字
		ServerSocket welcomeSocket = new ServerSocket(portNo);
		// 输入信息
		printInfo("我的网页服务器在端口 " + portNo + " 处开启了一个欢迎套接字。");
		
		// 不断接收来自客户端的请求
		count = 0L;
		while (true) {
			// 建立新的连接套接字
			Socket connectionSocket = welcomeSocket.accept();
			if (connectionSocket != null) {
				printInfo("我的网页服务器收到来自客户端的请求，连接套接字已经建立。");
				BufferedReader inFromClient = new BufferedReader(new InputStreamReader(connectionSocket.getInputStream()));
				DataOutputStream outToClient = new DataOutputStream(connectionSocket.getOutputStream());

				request = "";
				response = "";
				requestLine = "";
				while (true) {					
					try {
						printInfo("我的网页服务器开始读入客户端的请求字符串……");
						requestLine = inFromClient.readLine();
						if (! requestLine.equals("")) {
							request += requestLine + "\n";
							printInfo("客户端请求：" + requestLine);
							if (request.contains("quit") || request.contains("exit")) {
								printInfo("客户端请求退出。");
							}

							if (request.contains("quit") || request.contains("exit")) {
								break;
							}
						} else {
							printInfo("客户端请求为空。我的网页服务器准备关闭该TCP连接。");
							// 关闭连接前，给予一个响应
							String filePath = mapPath(parseVirtualPathFromRequest(request));
							File file = new File(filePath);
							if (file.exists()) {
								FileReader myFile = new FileReader(filePath);
								BufferedReader myReader = new BufferedReader(myFile);
								String fileStream = myReader.readLine();
								while (fileStream != null) {
									response += fileStream + "\n";
									fileStream = myReader.readLine();
								}
								myReader.close();
								myFile.close();
							} else {
							
								response = htmlTemplate.replace("&lt;title&gt;&lt;/title&gt;", "&lt;title&gt;Response Frome MyWebServer&lt;/title&gt;").replace("&lt;body&gt;&lt;/body&gt;", "&lt;body&gt;&lt;h1&gt;Echo your request: &lt;/h1&gt;&lt;pre&gt;" + request + "&lt;/pre&gt;&lt;p&gt;You request " + filePath + ", which is not exists.&lt;/p&gt;&lt;/body&gt;");
							}
							outToClient.writeBytes(response);
							printInfo("我的网页服务器响应： " + response);
							
							connectionSocket.close();
							break;
						}
					} catch (Exception e) {
						response = "退出" + "\n";
						printInfo("连接断开了，可能是客户端离开。详细信息为：\n" + e.toString());
						break;
					} finally {
					}
				} 
				printInfo("连接关闭了。");
				inFromClient.close();
				outToClient.close();
			} else {
				printInfo("我的网页服务器收到来自客户端的请求，但是连接套接字未能建立。");
			}
			connectionSocket.close();
		}		
	}
	
	/**
	 * 在控制板中输入信息
	 * @param info
	 * @throws Exception
	 */
	private static void printInfo(String info) throws Exception {
		System.out.println(info);
	}
}
</pre>
<div>&nbsp;</div>
      