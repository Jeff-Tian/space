---
stackbit_url_path: >-
  posts/自己写一个基于UDP的Ping客户机与服务器程序
title: '自己写一个基于UDP的Ping客户机与服务器程序'
date: '2011-06-18 06:30:51'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Java
  - Network programming
  - UDP
  - ping
  - 网络编程
canonical_url: >-
template: post
---
<p>这是一个《计算机网络 自顶向下方法》中的编程实验。在本实验中，你将实现一个简单的基于UDP的Ping客户机和服务器。由这些程序提供的功能类似于现代操作系统中使用的标准Ping程序。标准的Ping工作时发送因特网控制报文协议（ICMP）ECHO报文，远程机器对发送方返回响应。该发送方则能够决定它自己和被探测的计算机之间的往返时延。</p>  <p>Java不提供发送和接收ICMP报文的任何功能，所以本实验需要在应用层用标准的UDP套接字和报文实现Ping。</p>  <p>在编译并部署后，客户机的一个运行结果如下：</p>  <pre style="background-color: black; color: #00cc00">F:\EclipseWorkspace\UDPPinger\bin&gt;java PingClient 192.168.173.240 7890
FROM SERVER: PING 0 2010-06-20 20:29:07
FROM SERVER: No reply.
FROM SERVER: PING 2 2010-06-20 20:29:09
FROM SERVER: No reply.
FROM SERVER: PING 4 2010-06-20 20:29:10
FROM SERVER: No reply.
FROM SERVER: PING 6 2010-06-20 20:29:11
FROM SERVER: PING 7 2010-06-20 20:29:11
FROM SERVER: PING 8 2010-06-20 20:29:11
FROM SERVER: PING 9 2010-06-20 20:29:11</pre>

<p>可见第1个、第3个与第5个PING报文没有得到响应。</p>

<p>以下是服务器端对应的运行结果：</p>

<pre style="background-color: black; color: #00cc00">D:\jie.tian\Java\UDP Pinger&gt;java PingServer 7890
Received from + 192.168.172.9: PING 0 2010-06-20 20:29:07
        Reply sent.
Received from + 192.168.172.9: PING 1 2010-06-20 20:29:08
        Reply not send.
Received from + 192.168.172.9: PING 2 2010-06-20 20:29:09
        Reply sent.
Received from + 192.168.172.9: PING 4 2010-06-20 20:29:10
        Reply sent.
Received from + 192.168.172.9: PING 6 2010-06-20 20:29:11
        Reply sent.
Received from + 192.168.172.9: PING 7 2010-06-20 20:29:11
        Reply sent.
Received from + 192.168.172.9: PING 8 2010-06-20 20:29:11
        Reply sent.
Received from + 192.168.172.9: PING 9 2010-06-20 20:29:11
        Reply sent.
Received from + 192.168.172.9: PING 3 2010-06-20 20:29:09
        Reply sent.
Received from + 192.168.172.9: PING 5 2010-06-20 20:29:10
        Reply sent.</pre>

<p>以下分别是服务器程序和客户机程序的Java源代码。</p>

<pre class="brush: java;">import java.io.*;
import java.net.*;
import java.util.*;

/**
 * Server to process ping requests over UDP.
 * @author 涂鸦
 *
 */
public class PingServer {
	private static final double LOSS_RATE = 0.3;
	private static final int AVERAGE_DELAY = 100; 		// milliseconds
	
	public static void main(String[] args) throws Exception {
		// Get command line argument.
		if (args.length != 1) {
			System.out.println(&quot;Required arguments: port&quot;); 
			return;
		}
		
		int port = Integer.parseInt(args[0]);
		
		// Create random number generator for use in simulating packet loss and network delay.
		Random random = new Random();
		
		// Create a datagram socket for receiving and sending UDP packets through the port specified
		// on the command line.
		DatagramSocket socket = new DatagramSocket(port);
		
		// Processing loop.
		while (true) {
			// Create a datagram packet to hold incoming UDP packet.
			DatagramPacket request= new DatagramPacket(new byte[1024], 1024);
			
			// Block until the host receives a UDP packet.
			socket.receive(request);
			
			// Print the received data.
			printData(request);
			
			// Decide whether to reply, or simulate packet loss.
			if (random.nextDouble() &lt; LOSS_RATE) {
				System.out.println(&quot;	Reply not send.&quot;);
				continue;
			}
			
			// Simulate network delay.
			Thread.sleep((int) (random.nextDouble() * 2 * AVERAGE_DELAY));
			
			// Send reply.
			InetAddress clientHost = request.getAddress();
			int clientPort = request.getPort();
			byte[] buf = request.getData();
			DatagramPacket reply = new DatagramPacket(buf, buf.length, clientHost, clientPort);
			socket.send(reply);
			
			System.out.println(&quot;	Reply sent.&quot;);
		}
	}
	
	/**
	 * Print ping data to the standard output stream.
	 */
	private static void printData(DatagramPacket request) throws Exception {
		// Obtain references to the packet's array of bytes.
		byte[] buf = request.getData();
		
		// Wrap the bytes in a byte array input stream, so that you can read the data as a stream
		// of bytes.
		ByteArrayInputStream bais = new ByteArrayInputStream(buf);
		
		// Wrap the byte array output stream in an input stream reader, 
		// so you can read the data as a stream of characters.
		InputStreamReader isr = new InputStreamReader(bais);
		
		// Wrap the input stream reader in a buffered reader, 
		// so you can read the character data a line at a time.
		// (A line is a sequence of chars terminated by any combination of \r and \n.)
		BufferedReader br = new BufferedReader(isr);
		
		// The message data is contained in a single line, so read this line.
		String line = br.readLine();
		
		// Print host address and data received from it.
		System.out.println(&quot;Received from + &quot; + request.getAddress().getHostAddress() + &quot;: &quot; + new String(line));
	}
}</pre>

<pre class="brush: java">import java.io.*;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class PingClient {
	private static final double LOSS_RATE = 0.3;
	private static final int AVERAGE_DELAY = 100; 		// milliseconds
	
	public static void main(String[] args) throws Exception {
		// Get command line argument.
		if (args.length == 0) {
			System.out.println(&quot;Required arguments: host port&quot;); 
			return;
		}
		
		if(args.length == 1) {
			System.out.println(&quot;Required arguments: port&quot;);
			return;
		}
		
		String host = args[0].toString();
		int port = Integer.parseInt(args[1]);
		
		// 发起向服务器的连接		
		DatagramSocket clientSocket = new DatagramSocket();
		// 等待1秒钟
		clientSocket.setSoTimeout(1000);

		InetAddress IPAddress = InetAddress.getByName(host);
		
		for(int i = 0; i &lt; 10; i++) {
			// 发送报文
			byte[] sendData = new byte[1024];
			byte[] receiveData = new byte[1024];
			Date currentTime = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);
			String timeStamp = formatter.format(currentTime);
			String pingMessage = &quot;PING &quot; + i + &quot; &quot; + timeStamp + &quot; &quot; + &quot;\r\n&quot;;
			sendData = pingMessage.getBytes();
			DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, IPAddress, port);
			try{
				clientSocket.send(sendPacket);
				
				DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
				clientSocket.receive(receivePacket);
				String reply = new String(receivePacket.getData());
				System.out.println(&quot;FROM SERVER: &quot; + reply);
			} catch (java.net.SocketTimeoutException ex) {
				String reply = &quot;No reply.&quot;;
				System.out.println(&quot;FROM SERVER: &quot; + reply);
			}
		}
		// 关闭与服务器的UDP连接
		clientSocket.close();
	}
}</pre>

<p>最后是《计算机网络 自顶向下方法》教材附带的关于本实验的网络教辅资料：</p>

<hr />

<h3>Programming Assignment 3: UDP Pinger Lab</h3>
In this lab, you will study a simple Internet ping server written in the Java language, and implement a corresponding client. The functionality provided by these programs are similar to the standard ping programs available in modern operating systems, except that they use UDP rather than Internet Control Message Protocol (ICMP) to communicate with each other. (Java does not provide a straightforward means to interact with ICMP.) 

<br />The ping protocol allows a client machine to send a packet of data to a remote machine, and have the remote machine return the data back to the client unchanged (an action referred to as echoing). Among other uses, the ping protocol allows hosts to determine round-trip times to other machines. 

<p>You are given the complete code for the Ping server below. Your job is to write the Ping client.</p>

<h4>Server Code</h4>
The following code fully implements a ping server. You need to compile and run this code. You should study this code carefully, as it will help you write your Ping client. 

<pre class="brush: java">import java.io.*;
import java.net.*;
import java.util.*;

/*
 * Server to process ping requests over UDP.
 */
public class PingServer
{
   private static final double LOSS_RATE = 0.3;
   private static final int AVERAGE_DELAY = 100;  // milliseconds

   public static void main(String[] args) throws Exception
   {
      // Get command line argument.
      if (args.length != 1) {
         System.out.println(&quot;Required arguments: port&quot;);
         return;
      }
      int port = Integer.parseInt(args[0]);

      // Create random number generator for use in simulating 
      // packet loss and network delay.
      Random random = new Random();

      // Create a datagram socket for receiving and sending UDP packets
      // through the port specified on the command line.
      DatagramSocket socket = new DatagramSocket(port);

      // Processing loop.
      while (true) {
         // Create a datagram packet to hold incomming UDP packet.
         DatagramPacket request = new DatagramPacket(new byte[1024], 1024);

         // Block until the host receives a UDP packet.
         socket.receive(request);
         
         // Print the recieved data.
         printData(request);

         // Decide whether to reply, or simulate packet loss.
         if (random.nextDouble() &lt; LOSS_RATE) {
            System.out.println(&quot;   Reply not sent.&quot;);
            continue; 
         }

         // Simulate network delay.
         Thread.sleep((int) (random.nextDouble() * 2 * AVERAGE_DELAY));

         // Send reply.
         InetAddress clientHost = request.getAddress();
         int clientPort = request.getPort();
         byte[] buf = request.getData();
         DatagramPacket reply = new DatagramPacket(buf, buf.length, clientHost, clientPort);
         socket.send(reply);

         System.out.println(&quot;   Reply sent.&quot;);
      }
   }

   /* 
    * Print ping data to the standard output stream.
    */
   private static void printData(DatagramPacket request) throws Exception
   {
      // Obtain references to the packet's array of bytes.
      byte[] buf = request.getData();

      // Wrap the bytes in a byte array input stream,
      // so that you can read the data as a stream of bytes.
      ByteArrayInputStream bais = new ByteArrayInputStream(buf);

      // Wrap the byte array output stream in an input stream reader,
      // so you can read the data as a stream of characters.
      InputStreamReader isr = new InputStreamReader(bais);

      // Wrap the input stream reader in a bufferred reader,
      // so you can read the character data a line at a time.
      // (A line is a sequence of chars terminated by any combination of \r and \n.)
      BufferedReader br = new BufferedReader(isr);

      // The message data is contained in a single line, so read this line.
      String line = br.readLine();

      // Print host address and data received from it.
      System.out.println(
         &quot;Received from &quot; + 
         request.getAddress().getHostAddress() + 
         &quot;: &quot; +
         new String(line) );
   }
}</pre>

<p>The server sits in an infinite loop listening for incoming UDP packets. When a packet comes in, the server simply sends the encapsulated data back to the client.</p>

<p>Packet Loss</p>

<p>UDP provides applications with an unreliable transport service, because messages may get lost in the network due to router queue overflows or other reasons. In contrast, TCP provides applications with a reliable transport service and takes care of any lost packets by retransmitting them until they are successfully received. Applications using UDP for communication must therefore implement any reliability they need separately in the application level (each application can implement a different policy, according to its specific needs).&#160; <br />Because packet loss is rare or even non-existent in typical campus networks, the server in this lab injects artificial loss to simulate the effects of network packet loss. The server has a parameter LOSS_RATE that determines which percentage of packets should be lost.&#160; <br />The server also has another parameter AVERAGE_DELAY that is used to simulate transmission delay from sending a packet across the Internet. You should set AVERAGE_DELAY to a positive value when testing your client and server on the same machine, or when machines are close by on the network. You can set AVERAGE_DELAY to 0 to find out the true round trip times of your packets.</p>

<p>Compiling and Running Server 
  <br />To compile the server, do the following:</p>

<pre style="background-color: black; color: #00cc00">   javac PingServer.java</pre>
To run the server, do the following: 

<pre style="background-color: black; color: #00cc00">   java PingServer port</pre>
where port is the port number the server listens on. Remember that you have to pick a port number greater than 1024, because only processes running with root (administrator) privilege can bind to ports less than 1024. 

<br />Note: if you get a class not found error when running the above command, then you may need to tell Java to look in the current directory in order to resolve class references. In this case, the commands will be as follows: 

<pre style="background-color: black; color: #00cc00">   java -classpath . PingServer port</pre>
Your Job: The Client 

<p>You should write the client so that it sends 10 ping requests to the server, separated by approximately one second. Each message contains a payload of data that includes the keyword PING, a sequence number, and a timestamp. After sending each packet, the client waits up to one second to receive a reply. If one seconds goes by without a reply from the server, then the client assumes that its packet or the server's reply packet has been lost in the network.</p>

<p><i>Hint: Cut and paste PingServer, rename the code PingClient, and then modify the code.</i></p>

<p>You should write the client so that it starts with the following command:</p>

<pre style="background-color: black; color: green">   java PingClient host port</pre>
where host is the name of the computer the server is running on and port is the port number it is listening to. Note that you can run the client and server either on different machines or on the same machine. 

<br />The client should send 10 pings to the server. Because UDP is an unreliable protocol, some of the packets sent to the server may be lost, or some of the packets sent from server to client may be lost. For this reason, the client can not wait indefinitely for a reply to a ping message. You should have the client wait up to one second for a reply; if no reply is received, then the client should assume that the packet was lost during transmission across the network. You will need to research the API for DatagramSocket to find out how to set the timeout value on a datagram socket. 

<br />When developing your code, you should run the ping server on your machine, and test your client by sending packets to localhost (or, 127.0.0.1). After you have fully debugged your code, you should see how your application communicates across the network with a ping server run by another member of the class. 

<p>Message Format</p>

<p>The ping messages in this lab are formatted in a simple way. Each message contains a sequence of characters terminated by a carriage return character (<a href="http://drturner.net/wikisite/view?title=r">r</a>) and a line feed character (<a href="http://drturner.net/wikisite/view?title=n">n</a>). The message contains the following string:</p>

<pre style="background-color: black; color: #00cc00">   PING sequence_number time CRLF</pre>
where sequence_number starts at 0 and progresses to 9 for each successive ping message sent by the client, time is the time when the client sent the message, and CRLF represent the carriage return and line feed characters that terminate the line. 

<p>Optional Exercises</p>

<p>When you are finished writing the client, you may wish to try one of the following exercises.&#160; <br />1) Currently the program calculates the round-trip time for each packet and prints them out individually. Modify this to correspond to the way the standard ping program works. You will need to report the minimum, maximum, and average RTTs. (easy)&#160; <br />2) The basic program sends a new ping immediately when it receives a reply. Modify the program so that it sends exactly 1 ping per second, similar to how the standard ping program works. Hint: Use the Timer and TimerTask classes in java.util. (difficult)&#160; <br />3) Develop two new classes ReliableUdpSender and ReliableUdpReceiver, which are used to send and receive data reliably over UDP. To do this, you will need to devise a protocol (such as TCP) in which the recipient of data sends acknowledgements back to the sender to indicate that the data has arrived. You can simplify the problem by only providing one-way transport of application data from sender to recipient. Because your experiments may be in a network environment with little or no loss of IP packets, you should simulate packet loss. (difficult)</p>