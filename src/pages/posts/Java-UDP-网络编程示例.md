---
stackbit_url_path: >-
  posts/Java-UDP-网络编程示例
title: 'Java UDP 网络编程示例'
date: '2010-04-26 12:02:56'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>分别创建两个文件，UDPServer.java 和 UDPClient.java，先运行 UDPServer，开始监<span style="display: none;">|敏感词分隔符|</span>听。再运行 UDPClient，在 UDPClient 中输入字符串，UDPServer 接收到后将它转换成大写，传回 UDPClient。</p>
<p>UDPServer.java：</p>
<pre class="brush: java">import java.io.*;
import java.net.*;

public class UDPServer {
	public static void main(String args[]) throws Exception {
		DatagramSocket serverSocket = new DatagramSocket(9876);
		byte[] receiveData = new byte[1024];
		byte[] sendData = new byte[1024];
		
		while(true) {
			DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
			serverSocket.receive(receivePacket);
			String sentence = new String(receivePacket.getData());
			InetAddress IPAddress = receivePacket.getAddress();
			int port = receivePacket.getPort();
			String capitalizedSentence = "Your port: " + port + "\n" + sentence.toUpperCase();
			sendData = capitalizedSentence.getBytes();
			DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, IPAddress, port);
			serverSocket.send(sendPacket);
		}
	}
}

</pre>
<p>UDPClient.java：</p>
<pre class="brush: java">import java.io.*;
import java.net.*;

public class UDPClient {
	public static void main(String args[]) throws Exception {
		BufferedReader inFromUser = 
			new BufferedReader(new InputStreamReader(System.in));
		DatagramSocket clientSocket = new DatagramSocket();
		InetAddress IPAddress = InetAddress.getByName("localhost");
		byte[] sendData = new byte[1024];
		byte[] receiveData = new byte[1024];
		String sentence = inFromUser.readLine();
		sendData = sentence.getBytes();
		DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, IPAddress, 9876);
		clientSocket.send(sendPacket);
		DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
		clientSocket.receive(receivePacket);
		String modifiedSentence = new String(receivePacket.getData());
		System.out.println("FROM SERVER: " + modifiedSentence);
		clientSocket.close();
	}
}

</pre>
      