---
stackbit_url_path: >-
  posts/Java-TCP-网络编程示例
title: 'Java TCP 网络编程示例'
date: '2010-01-01 02:37:41'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>分别创建两个文件，TCPServer.java 和 TCPClient.java，先运行 TCPServer，开始监听。再运行 TCPClient，在 TCPClient 中输入字符串，TCPServer 接收到后将它转换成大写，传回 TCPClient。如果 TCPClient 输入了 "quit"，则退出程序。而 TCPServer 继续监听。</p>
<p>TCPServer.java：</p>
<pre class="brush: java" style="text-indent: 0;">import java.io.*;
import java.net.*;

public class TCPServer {
	public static void main(String argv[]) throws Exception
	{
		String sClientSentence;
		String sCapitalizedSentence;
		System.out.println("Server Started.");
		ServerSocket oWelcomeSocket = new ServerSocket(6789);
		System.out.println("Server started a welcome socket in port 6789.");
		while (true) {
			Socket oConnectionSocket = oWelcomeSocket.accept();
			long i;
			BufferedReader oInFromClient = new BufferedReader(new InputStreamReader(oConnectionSocket.getInputStream()));
			DataOutputStream oOutToClient = new DataOutputStream(oConnectionSocket.getOutputStream());
			System.out.println("A new client connected. ");
			i = 0;
			while (true) {
				sCapitalizedSentence = "";
				sClientSentence = "";
				try {
					System.out.println("Try Count: " + i++);
					sClientSentence = oInFromClient.readLine();
					sCapitalizedSentence = sClientSentence.toUpperCase() + '\n';					
					System.out.println("Client: " + sClientSentence);
					if (sClientSentence.equals("quit")) {
						System.out.println("Client want to leave.");
						sCapitalizedSentence = "OK, I will let you go.\n";
					}
					oOutToClient.writeBytes(sCapitalizedSentence);
					System.out.println("Me: " + sCapitalizedSentence);
					if (sClientSentence.equals("quit")) {
						break;
					}
				} catch (Exception oError) {
					sCapitalizedSentence = "QUIT" + '\n';
					System.out.println("Client closed the connection.");
					break;
				} finally {
				}
			}
			System.out.println("Connection closed.\n");
		}
	}
}
</pre>
<p>TCPClient.java</p>
<pre class="brush: java" style="text-indent: 0;">import java.io.*;
import java.net.*;

public class TCPClient {
	public static void main(String argv[]) throws Exception
	{
		String sSentence;
		String sModifiedSentence;
		BufferedReader oInFromUser = new BufferedReader(new InputStreamReader(System.in));
		Socket oClientSocket = new Socket("192.168.1.20", 6789);
		sModifiedSentence = "Initialize";
		System.out.println("Connected.");
		while (sModifiedSentence != "QUIT") {
			DataOutputStream oOutToServer = new DataOutputStream(oClientSocket.getOutputStream());
			BufferedReader oInFromServer = new BufferedReader(new InputStreamReader(oClientSocket.getInputStream()));
			sSentence = oInFromUser.readLine();
			oOutToServer.writeBytes(sSentence + '\n');
			sModifiedSentence = oInFromServer.readLine();
			System.out.println("FROM SERVER: " + sModifiedSentence);
			if (sSentence.equals("quit")) {
				System.out.println("OK, I quited.");
				break;
			}
		}
		oClientSocket.close();
		System.out.println("Program terminated.");
	}
}
</pre>
</div>
      