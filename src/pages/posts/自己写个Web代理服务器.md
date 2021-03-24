---
stackbit_url_path: >-
  posts/自己写个Web代理服务器
title: '自己写个Web代理服务器'
date: '2010-06-24 03:53:19'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>这是《计算机网络 自顶向下方法》一书中的编程实验。</p>
<p><strong><a target="_blank" href="http://www.myfootprints.cn/OldWeb/blog/upload/ProxyCache.rar">下载源码与可执行文件</a> --&gt;&nbsp;</strong><a href="http://www.myfootprints.cn/OldWeb/blog/upload/ProxyCache.rar" target="_blank">ProxyCache.rar</a></p>
<p>这个实验研发一个简单的Web代理服务器，该服务器将接收来自浏览器的GET报文，向目的地Web服务器转发GET报文，从目的地服务器接收HTTP响应报文，向浏览器转发HTTP响应报文。这是一个非常简单的代理服务器，它仅能理解简单的GET请求。然而，该服务器能够处理各种对象，并不仅仅是HTML页面，而且也包括图像。</p>
<p>以下是Java代码，共分为三个类，分别是ProxyCache.java，HttpRequest.java，HttpResponse.java。</p>
<p>编译后，要运行，只需在命令行中输入：java ProxyCache 9999，其中9999为端口号，你可以指定为6899等别的端口号。</p>
<p>然后，在浏览器中需要配置代理服务器，IP地址为运行该程序的机器的IP地址，端口号为你刚才指定的，如9999。</p>
<p>ProxyCache.java :</p>
<pre class="brush: c++">/**
 * ProxyCache.java	-	Simple caching proxy
 * 
 * $Id:	ProxyCache.java, v 1.3 2004/02/16 15:22:00	kangasha Exp $
 *
 */

import java.net.*;
import java.io.*;
import java.util.*;

public class ProxyCache {
	/** Port for the proxy */
	private static int port;
	/** Socket for client connections */
	private static ServerSocket socket;
	
	/** Create the ProxyCache object and the socket */
	public static void init(int p) {
		port = p;
		try {
			socket = new ServerSocket(port);
		} catch (IOException e) {
			System.out.println("Error creating socket: " + e);
			System.exit(-1);
		}
	}
	
	public static void handle(Socket client) {
		Socket server = null;
		HttpRequest request = null;
		HttpResponse response = null;
		
		/* Process request. If there are any exceptions, then simply
		 * return and end this request. This  unfortunately means the 
		 * client will hang for a while, until it timeouts.
		 */
		
		/* Read request */
		try {
			BufferedReader fromClient = new BufferedReader(new InputStreamReader(client.getInputStream()));
			request = new HttpRequest(fromClient);
			
		} catch (IOException e) {
			System.out.println("Error reading request from client: " + e);
			return ;
		}
		
		/* Send request to server */
		try {
			/* Open socket and write request to socket */
			server = new Socket(request.getHost(), request.getPort());
			DataOutputStream toServer = new DataOutputStream(server.getOutputStream());
			toServer.writeBytes(request.toString());
			// 以下toServer不能够close，它关闭会导致连接server也会关闭
//			toServer.close();
			System.out.println("Request forwarded.");

		} catch (UnknownHostException e) {
			System.out.println("Unknown host: " + request.getHost());
			System.out.println(e);
			return;
		} catch (IOException e) {
			System.out.println("Error writing request to server: " + e);
			return ;
		}
		
		/* Read response and forward it to client */
		try {
			DataInputStream fromServer = new DataInputStream(server.getInputStream());
			response = new HttpResponse(fromServer);
			DataOutputStream toClient = new DataOutputStream(client.getOutputStream());
			toClient.writeBytes(response.toString());
			toClient.write(response.body);
			/* Write response to client. First headers, then body */
			client.close();
			server.close();
			/* Insert object into the cache */
			/* Fill in (optional exercise only) */
		} catch (IOException e) {
			System.out.println("Error writing response to client: " + e);
		}
	}
	
	/** Read command line arguments and start proxy */
	public static void main (String args[]) {
		int myPort = 0;
		
		try {
			myPort = Integer.parseInt(args[0]);
		} catch (ArrayIndexOutOfBoundsException e) {
			System.out.println("Need port number as argument");
			System.exit(-1);
		} catch (NumberFormatException e) {
			System.out.println("Please give port number as integer.");
			System.exit(-1);
		}
		
		init(myPort);
		
		/** Main loop. Listen for incoming connections and spawn a new 
		 * thread for handling them 
		 */
		Socket client = null;
		
		while (true) {
			try {
				client = socket.accept();
				handle(client);
			} catch (IOException e) {
				System.out.println("Error reading request from client: " + e);
				/* Definitely cannot continue processing this request, 
				 * so skip to next iteration of while loop.
				 */
				continue;
			}
		}
	}
}
</pre>
<div>&nbsp;</div>
<p>HttpRequest.java :</p>
<pre class="brush: c++">/**
 * HttpRequest - HTTP request container and parser
 * 
 * $Id: HttpRequest.java, v 1.2 2003/11/26 18:11:53	kangasha Exp$
 *
 */
import java.io.*;
import java.net.*;
import java.util.*;

public class HttpRequest {
	/** Help variables */
	final static String CRLF = "\r\n";
	final static int HTTP_PORT = 80;
	/** Store the request parameters */
	String method;
	String URI;
	String version;
	String headers = "";
	/** Server and port */
	private String host;
	private int port;
	
	/** Create HttpRequest by reading it from the client socket */
	public HttpRequest(BufferedReader from) {
		String firstLine = "";
		try {
			firstLine = from.readLine();
		} catch (IOException e) {
			System.out.println("Error reading request line: " + e);
		}
		
		String[] tmp = firstLine.split(" ");
		method = tmp[0];
		URI = tmp[1];
		version = tmp[2];
		
		System.out.println("URI is: " + URI);
		
		if (!method.equals("GET")) {
			System.out.println("Error: Method not GET");
		}
		
		try {
			String line = from.readLine();
			while (line.length() != 0) {
				headers += line + CRLF;
				/* We need to find host header to know which server to 
				 * contact in case the request URI is not complete.
				 */
				if (line.startsWith("Host:")) {
					tmp = line.split(" ");
					if (tmp[1].indexOf(':') &gt; 0 ) {
						String[] tmp2 = tmp[1].split(":");
						host = tmp2[0];
						port = Integer.parseInt(tmp2[1]);
					} else {
						host = tmp[1];
						port = HTTP_PORT;
					}
				}
				line = from.readLine();
			}
		} catch (IOException e) {
			System.out.println("Error reading from socket: " + e);
			return;
		}
		System.out.println("Host to contact is: " + host + " at port " + port);
	}
	
	/** Return host for which this request is intended */
	public String getHost() {
		return host;
	}
	
	/** Return port for server */
	public int getPort() {
		return port;
	}
	
	/**
	 * Convert request into a string for easy re-sending.
	 */
	public String toString() {
		String req = "";
		
		req = method  + " " + URI + " " + version + CRLF;
		req += headers;
		/* This proxy does not support persistent connections */
		req += "Connection: close" + CRLF;
		req += CRLF;
		
		return req;
	}
}
</pre>
<div>&nbsp;</div>
<p>HttpResponse.java :</p>
<pre class="brush: c++">/**
 * HttpResponse - Handle HTTP replies
 * 
 * $Id: HttpResponse.java, v 1.2 2003/11/26 18:12:42 kangasha Exp $
 *
 */

import java.io.*;
import java.net.*;
import java.util.*;

public class HttpResponse {
	final static String CRLF = "\r\n";
	/** How big is the buffer used for reading the object */
	final static int BUF_SIZE = 8192;
	/** Maximum size of objects that this proxy can handle. For the
	 * moment set to 100KB. You can adjust this as needed. 
	 */
	final static int MAX_OBJECT_SIZE = 100000;
	/** Reply status and headers */
	String version;
	int status;
	String statusLine = "";
	String headers = "";
	/* Body of reply */
	byte[] body = new byte[MAX_OBJECT_SIZE];
	
	/** Read response from server. */
	public HttpResponse(DataInputStream fromServer) {
		/* Length of the object */
		int length = -1;
		boolean gotStatusLine = false;
		
		/* First read status line and response headers */
		try {
			String line = fromServer.readLine();
			while (line.length() != 0) {
				if (!gotStatusLine) {
					statusLine = line;
					gotStatusLine = true;
				} else {
					headers += line + CRLF;
				}
				
				/* Get length of content as indicated by
				 * Content-Length header. Unfortunately this is not 
				 * present in every response. Some servers return the 
				 * header "Content-Length", others return 
				 * "Content-length". You need to check for both 
				 * here.
				 */
				if (line.startsWith("Content-Length") || 
						line.startsWith("Content-length")) {
					String[] tmp = line.split(" ");
					length = Integer.parseInt(tmp[1]);
				}
				line = fromServer.readLine();
			}
			
		} catch (IOException e) {
			System.out.println("Error reading headers from server: " + e);
			return;
		}
		
		try {
			int bytesRead = 0;
			byte buf[] = new byte[BUF_SIZE];
			boolean loop = false;
			
			/* If we didn't get Content-Length header, just loop until 
			 * the connection is closed.
			 */
			if (length == -1) {
				loop = true;
			}
			
			/* Read the body in chunks of BUF_SIZE and copy the chunk
			 * into body. Usually replies come back in smaller chunks 
			 * than BUF_SIZE. The while-loop ends when  either we have
			 * read Content-Length bytes or when the connection is 
			 * closed (when there is no Content-Length in the 
			 * response.
			 */
			while (bytesRead &lt; length || loop) {
				/* Read it in as binary data */
				int res = fromServer.read(buf);
				if (res == -1) {
					break;
				}
				/* Copy the bytes into body. Make sure we don't exceed 
				 * the maximum object size. 
				 */
				for (int i = 0; i &lt; res &amp;&amp; (i + bytesRead)  &lt; MAX_OBJECT_SIZE; i++) {
					body[i+bytesRead] = buf[i];
				}
				bytesRead += res;
			}
		} catch (IOException e) {
			System.out.println("Error reading response body: " + e);
			return;
		}
	}
	
	/**
	 * Convert response into a string for easy re-sending. Only 
	 * converts the response headers, body is not converted to a 
	 * string.
	 */
	public String toString() {
		String res = "";
		
		res = statusLine + CRLF;
		res += headers;
		res += CRLF;
		
		return res;
	}
}
</pre>
<p><strong><a target="_blank" href="http://www.myfootprints.cn/OldWeb/blog/upload/ProxyCache.rar">下载源码与可执行文件</a>&nbsp;--&gt;&nbsp;</strong><a href="http://www.myfootprints.cn/OldWeb/blog/upload/ProxyCache.rar" target="_blank">ProxyCache.rar</a></p>
<p>以下是原书的教辅材料上的提示：</p>
<hr>
<p>&nbsp;</p>
<h1 style="font-weight: normal; font-size: 19pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Programming Assignment 4: Proxy Cache</h1>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">In this lab you will develop a small web proxy server which is also able to cache web pages. This is a very simple proxy server which only understands simple GET-requests, but is able to handle all kinds of objects, not just HTML pages, but also images.</p>
<h2 style="font-weight: bold; font-size: 16pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Code</h2>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The code is divided into three classes as follows:</p>
<ul style="font-family: Simsun; line-height: normal; font-size: medium; ">
    <li><a target="_blank" style="color: rgb(0, 0, 102); " href="http://media.pearsoncmg.com/aw/aw_kurose_network_3/labs/lab4/code.html#ProxyCache"><code>ProxyCache</code></a>&nbsp;holds the start-up code for the proxy and code for handling the requests.</li>
    <li><a target="_blank" style="color: rgb(0, 0, 102); " href="http://media.pearsoncmg.com/aw/aw_kurose_network_3/labs/lab4/code.html#HttpRequest"><code>HttpRequest</code></a>&nbsp;contains the routines for parsing and processing the incoming requests from clients.</li>
    <li><a target="_blank" style="color: rgb(0, 0, 102); " href="http://media.pearsoncmg.com/aw/aw_kurose_network_3/labs/lab4/code.html#HttpResponse"><code>HttpResponse</code></a>&nbsp;takes care of reading the replies from servers and processing them.</li>
</ul>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Your work will be to complete the proxy so that it is able to receive requests, forward them, read replies, and return those to the clients. You will need to complete the classes&nbsp;<code>ProxyCache</code>,&nbsp;<code>HttpRequest</code>, and&nbsp;<code>HttpResponse</code>. The places where you need to fill in code are marked with&nbsp;<tt>/* Fill in */</tt>. Each place may require one or more lines of code.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; "><b><i>NOTE:</i></b>&nbsp;As explained below, the proxy uses DataInputStreams for processing the replies from servers. This is because the replies are a mixture of textual and binary data and the only input streams in Java which allow treating both at the same time are DataInputStreams. To get the code to compile, you must use the -deprecation argument for the compiler as follows:</p>
<pre>        javac -deprecation *.java
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">If you do not use the -deprecation flag, the compiler will refuse to compile your code!</p>
<h3 style="font-weight: bold; font-size: 14pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Running the Proxy</h3>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Running the proxy is as follows:</p>
<pre>       java ProxyCache <i>port</i>
</pre>
<p>where&nbsp;<i>port</i>&nbsp;is the port number on which you want the proxy to listen for incoming connections from clients.</p>
<h3 style="font-weight: bold; font-size: 14pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Configuring Your Browser</h3>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">You will also need to configure your web browser to use your proxy. This depends on your browser. In Internet Explorer, you can set the proxy in "Internet Options" in the Connections tab under LAN Settings. In Netscape (and derived browsers, such as Mozilla), you can set the proxy in Edit-&gt;Preferences and then select Advanced and Proxies.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">In both cases you need to give the address of the proxy and the port number which you gave when you started the proxy. You can run the proxy and browser on the same computer without any problems.</p>
<h2 style="font-weight: bold; font-size: 16pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Proxy Functionality</h2>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The proxy works as follows.</p>
<ol style="font-family: Simsun; line-height: normal; font-size: medium; ">
    <li>The proxy listens for requests from clients</li>
    <li>When there is a request, the proxy spawns a new thread for handling the request and creates an HttpRequest-object which contains the request.</li>
    <li>The new thread sends the request to the server and reads the server's reply into an HttpResponse-object.</li>
    <li>The thread sends the response back to the requesting client.</li>
</ol>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Your task is to complete the code which handles the above process. Most of the error handling in the proxy is very simple and it does not inform the client about errors. When there are errors, the proxy will simply stop processing the request and the client will eventually get a timeout.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Some browsers also send their requests one at a time, without using parallel connections. Especially in pages with lot of inlined images, this may cause the page to load very slowly.</p>
<h3 style="font-weight: bold; font-size: 14pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Caching</h3>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Caching the responses in the proxy is left as an optional exercise, since it demands a significant amount of additional work. The basic functionality of caching goes as follows.</p>
<ol style="font-family: Simsun; line-height: normal; font-size: medium; ">
    <li>When the proxy gets a request, it checks if the requested object is cached, and if yes, then returns the object from the cache, without contacting the server.</li>
    <li>If the object is not cached, the proxy retrieves the object from the server, returns it to the client, and caches a copy for future requests.</li>
</ol>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">In practice, the proxy must verify that the cached responses are still valid and that they are the correct response to the client's request. You can read more about caching and how it is handled in HTTP in RFC 2068. For this lab, it is sufficient to implement the above simple policy.</p>
<h2 style="font-weight: bold; font-size: 16pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Programming Hints</h2>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Most of the code you need to write relates to processing HTTP requests and responses as well as handling Java sockets.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">One point worth noting is the processing of replies from the server. In an HTTP response, the headers are sent as ASCII lines, separated by CRLF character sequences. The headers are followed by an empty line and the response body, which can be binary data in the case of images, for example.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Java separates the input streams according to whether they are text-based or binary, which presents a small problem in this case. Only DataInputStreams are able to handle both text and binary data simultaneously; all other streams are either pure text (e.g., BufferedReader), or pure binary (e.g., BufferedInputStream), and mixing them on the same socket does not generally work.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The DataInputStream has a small gotcha, because it is not able to guarantee that the data it reads can be correctly converted to the correct characters on every platform (DataInputStream.readLine() function). In the case of this lab, the conversion usually works, but the compiler will flag the DataInputStream.readLine()-method as deprecated and will refuse to compile without the -deprecation flag.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">It is highly recommended that you use the DataInputStream for reading the response.</p>
<h2 style="font-weight: bold; font-size: 16pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Optional Exercises</h2>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">When you have finished the basic exercises, you can try the following optional exercises.</p>
<ol style="font-family: Simsun; line-height: normal; font-size: medium; ">
    <li>Better error handling. Currently the proxy does no error handling. This can be a problem especially when the client requests an object which is not available, since the "404 Not found" response usually has no response body and the proxy assumes there is a body and tries to read it.</li>
    <li>Support for POST-method. The simple proxy supports only GET-method. Add support for POST, by including the request body sent in the POST-request.</li>
    <li>Add caching. Add the simple caching functionality described above. You do not need to implement any replacement or validation policies. Your implementation will need to be able to write responses to the disk (i.e., the cache) and fetch them from disk when you get a cache hit. For this you need to implement some internal data structure in the proxy to keep track of which objects are cached and where they are on disk. You can keep this data structure in main memory; there is no need to make it persist across shutdowns.</li>
</ol>
<hr style="font-family: Simsun; line-height: normal; font-size: medium; ">
<p>&nbsp;</p>
<p>下载源码与可执行文件：<a href="http://www.myfootprints.cn/OldWeb/blog/upload/ProxyCache.rar" target="_blank">ProxyCache.rar</a></p>
      