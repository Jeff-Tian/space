---
stackbit_url_path: >-
  posts/自己动手编写一个Web服务器（二）
title: '自己动手编写一个Web服务器（二）'
date: '2010-05-22 16:17:06'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>通过按照《计算机网络自顶向下方法》的提示，使用Java自己动手编写一个Web服务器，简单高效，高人就是高人哪。代码比我自己原先写的更加简洁，更加模块化，而功能也更加强大。哈哈。</p>
<p>将代码编译成.class文件后，将它放在与网站根目录下（一共有两个，分别为WebServer.class和HttpRequest.class，只需要运行WebServer.class，而HttpRequest.class会被前者调用。下载地址：<a href="http://www.myfootprints.cn/OldWeb/blog/upload/WebServer.rar" target="_blank">WebServer.rar</a>），运行它，便可以在浏览器中访问网站了。它支持HTML静态页面（中文、英文，带图片不事图片都行）。</p>
<p>它的监<span style="display: none;">|屏蔽词分隔符|</span>听端口是6789，如果要访问网站中的一个文件test.html，则在浏览器的地址栏中输入：</p>
<p>http://localhost:6789/test.html</p>
<p>即可实现访问。</p>
<p>源代码如下：</p>
<pre class="brush: java">import java.io.*;
import java.net.*;
import java.util.*;

public final class WebServer {
	public static void main(String argv[]) throws Exception {
		// Set the port number
		int port = 6789;
		
		// Establish the listen socket.
		ServerSocket serverSocket = new ServerSocket(port);
		
		// Process HTTP service request in an infinite loop.
		while (true) {
			// Listen for a TCP connection request.
			Socket socket = serverSocket.accept();
			// Construct an object to process the HTTP request message.
			HttpRequest request = new HttpRequest(socket);
			
			// Create a new thread to process the request.
			Thread thread = new Thread(request);
			
			// Start the thread.
			thread.start();
		}
	}
}

final class HttpRequest implements Runnable {
	final static String CRLF = "\r\n";
	Socket socket;
	
	// Constructor
	public HttpRequest(Socket socket) throws Exception {
		this.socket = socket;
	}
	
	// Implements the run() method of the Runnable interface.
	public void run() {
		try {
			processRequest();
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	private void processRequest() throws Exception {
		// Get a reference to the socket's input and output streams.
		InputStream is = this.socket.getInputStream();
		DataOutputStream os = new DataOutputStream(this.socket.getOutputStream());
		
		// Set up input stream filters.
		BufferedReader br = new BufferedReader(new InputStreamReader(is));
		
		// Get the request line of the HTTP request message.
		String requestLine = br.readLine();
		
		// Display the request line.
		System.out.println();
		System.out.println(requestLine);
		
		// Get and display the header lines.
		String headerLine = null;
		while ((headerLine = br.readLine()).length() != 0) {
			System.out.println(headerLine);
		}
		
		// Extract the filename from the request line.
		StringTokenizer tokens = new StringTokenizer(requestLine);
		tokens.nextToken();		// skip over the method, which should be "GET"
		String fileName = tokens.nextToken();
		
		// Prepend a "." so that file request is within the curren directory.
		fileName = "." + fileName;
		
		// Open the requested file.
		FileInputStream fis = null;
		boolean fileExists = true;
		try {
			fis = new FileInputStream(fileName);
			
		} catch (FileNotFoundException e) {
			fileExists = false;
		}
		
		// Construct the response message.
		String statusLine = null;
		String contentTypeLine = null;
		String entityBody = null;
		if (fileExists) {
			statusLine = "HTTP/1.0 200 OK" + CRLF;
			contentTypeLine = "Content-type: " + contentType(fileName) + CRLF;
		} else {
			statusLine = "HTTP/1.0 404 Not Found" + CRLF;
			contentTypeLine = "Content-type: text/html" + CRLF;
			entityBody = "&lt;html&gt;" + 
							"&lt;head&gt;&lt;title&gt;Not Found&lt;/title&gt;&lt;/head&gt;" + 
							"&lt;body&gt;Not Found&lt;/body&gt;&lt;/html&gt;";
		}
		
		// Send the status line.
		os.writeBytes(statusLine);
		// Send the content type line.
		os.writeBytes(contentTypeLine);
		// Send a blank line to indicate the end of the header lines.
		os.writeBytes(CRLF);
		
		// Send the entity body. 
		if (fileExists) {
			sendBytes(fis, os);
			fis.close();
		} else {
			os.writeBytes(entityBody);
		}
		
		os.close();
		is.close();
		br.close();
		socket.close();
	}
	
	private static void sendBytes(FileInputStream fis, OutputStream os) throws Exception {
		// Construct a 1K buffer to hold bytes on their way to the socket.
		byte[] buffer = new byte[1024];
		int bytes = 0;
		
		// Copy requested file into the socket's output stream.
		while((bytes = fis.read(buffer)) != -1) {
			os.write(buffer, 0, bytes);
		}
	}
	
	private static String contentType(String fileName) {
		if (fileName.endsWith(".htm") || fileName.endsWith(".html")) {
			return "text/html";
		} 
		if (fileName.endsWith(".gif")) {
			return "image/gif";
		}
		if (fileName.endsWith(".jpg")) {
			return "image/jpeg";
		}
		
		return "application/octet-stream";
	}
}
</pre>
<p>原书《计算机网络自顶向下方法》的提示可以见下文：</p>
<hr>
<p>&nbsp;</p>
<h1 style="font-weight: normal; font-size: 19pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Programming Assignment 1: Building a Multi-Threaded Web Server</h1>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">In this lab we will develop a Web server in two steps. In the end, you will have built a multi-threaded Web server that is capable of processing multiple simultaneous service requests in parallel. You should be able to demonstrate that your Web server is capable of delivering your home page to a Web browser.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">We are going to implement version 1.0 of HTTP, as defined in&nbsp;<a target="_new" style="color: rgb(0, 0, 102); " href="http://www.rfc-editor.org/rfc/rfc1945.txt">RFC 1945</a>, where separate HTTP requests are sent for each component of the Web page. The server will be able to handle multiple simultaneous service requests in parallel. This means that the Web server is multi-threaded. In the main thread, the server listens to a fixed port. When it receives a TCP connection request, it sets up a TCP connection through another port and services the request in a separate thread. To simplify this programming task, we will develop the code in two stages. In the first stage, you will write a multi-threaded server that simply displays the contents of the HTTP request message that it receives. After this program is running properly, you will add the code required to generate an appropriate response.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">As you are developing the code, you can test your server from a Web browser. But remember that you are not serving through the standard port 80, so you need to specify the port number within the URL that you give to your browser. For example, if your machine's name is&nbsp;<code>host.someschool.edu</code>, your server is listening to port 6789, and you want to retrieve the file&nbsp;<code>index.html</code>, then you would specify the following URL within the browser:</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre><a href="http://host.someschool.edu:6789/index.html" target="_blank">http://host.someschool.edu:6789/index.html</a>
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">If you omit ":6789", the browser will assume port 80 which most likely will not have a server listening on it.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">When the server encounters an error, it sends a response message with the appropriate HTML source so that the error information is displayed in the browser window.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<h3 style="font-weight: bold; font-size: 14pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Web Server in Java: Part A</h3>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">In the following steps, we will go through the code for the first implementation of our Web Server. Wherever you see "?", you will need to supply a missing detail.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Our first implementation of the Web server will be multi-threaded, where the processing of each incoming request will take place inside a separate thread of execution. This allows the server to service multiple clients in parallel, or to perform multiple file transfers to a single client in parallel. When we create a new thread of execution, we need to pass to the Thread's constructor an instance of some class that implements the&nbsp;<code>Runnable</code>&nbsp;interface. This is the reason that we define a separate class called&nbsp;<code>HttpRequest</code>. The structure of the Web server is shown below:</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">import java.io.* ;
import java.net.* ;
import java.util.* ;

public final class WebServer
{
	public static void main(String argv[]) throws Exception
	{
		. . .
	}
}

final class HttpRequest implements Runnable
{
	. . .
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Normally, Web servers process service requests that they receive through well-known port number 80. You can choose any port higher than 1024, but remember to use the same port number when making requests to your Web server from your browser.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">public static void main(String argv[]) throws Exception
{
	// Set the port number.
	int port = 6789;

	. . .
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Next, we open a socket and wait for a TCP connection request. Because we will be servicing request messages indefinitely, we place the listen operation inside of an infinite loop. This means we will have to terminate the Web server by pressing ^C on the keyboard.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">// Establish the listen socket.
       ?

// Process HTTP service requests in an infinite loop.
while (true) {
	// Listen for a TCP connection request.
	?

	. . .
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">When a connection request is received, we create an&nbsp;<code>HttpRequest</code>&nbsp;object, passing to its constructor a reference to the&nbsp;<code>Socket</code>&nbsp;object that represents our established connection with the client.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">// Construct an object to process the HTTP request message.
HttpRequest request = new HttpRequest( ? );

// Create a new thread to process the request.
Thread thread = new Thread(request);

// Start the thread.
thread.start();
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">In order to have the&nbsp;<code>HttpRequest</code>&nbsp;object handle the incoming HTTP service request in a separate thread, we first create a new&nbsp;<code>Thread</code>&nbsp;object, passing to its constructor a reference to the&nbsp;<code>HttpRequest</code>&nbsp;object, and then call the thread's&nbsp;<code>start()</code>&nbsp;method.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">After the new thread has been created and started, execution in the main thread returns to the top of the message processing loop. The main thread will then block, waiting for another TCP connection request, while the new thread continues running. When another TCP connection request is received, the main thread goes through the same process of thread creation regardless of whether the previous thread has finished execution or is still running.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">This completes the code in&nbsp;<code>main()</code>. For the remainder of the lab, it remains to develop the&nbsp;<code>HttpRequest</code>&nbsp;class.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">We declare two variables for the HttpRequest class:&nbsp;<code>CRLF</code>&nbsp;and&nbsp;<code>socket</code>. According to the HTTP specification, we need to terminate each line of the server's response message with a carriage return (CR) and a line feed (LF), so we have defined&nbsp;<code>CRLF</code>&nbsp;as a convenience. The variable&nbsp;<code>socket</code>&nbsp;will be used to store a reference to the connection socket, which is passed to the constructor of this class. The structure of the HttpRequest class is shown below:</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">final class HttpRequest implements Runnable
{
	final static String CRLF = "\r\n";
	Socket socket;

	// Constructor
	public HttpRequest(Socket socket) throws Exception 
	{
		this.socket = socket;
	}

	// Implement the run() method of the Runnable interface.
	public void run()
	{
		. . .
	}

	private void processRequest() throws Exception
	{
		. . .
	}
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">In order to pass an instance of the&nbsp;<code>HttpRequest</code>&nbsp;class to the&nbsp;<code>Thread</code>'s constructor,&nbsp;<code>HttpRequest</code>&nbsp;must implement the&nbsp;<code>Runnable</code>&nbsp;interface, which simply means that we must define a public method called&nbsp;<code>run()</code>&nbsp;that returns&nbsp;<code>void</code>. Most of the processing will take place within&nbsp;<code>processRequest()</code>, which is called from within&nbsp;<code>run()</code>.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Up until this point, we have been throwing exceptions, rather than catching them. However, we can not throw exceptions from&nbsp;<code>run()</code>, because we must strictly adhere to the declaration of&nbsp;<code>run()</code>&nbsp;in the&nbsp;<code>Runnable</code>&nbsp;interface, which does not throw any exceptions. We will place all the processing code in&nbsp;<code>processRequest()</code>, and from there, throw exceptions to&nbsp;<code>run()</code>. Within&nbsp;<code>run()</code>, we explicitly catch and handle exceptions with a try/catch block.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">// Implement the run() method of the Runnable interface.
public void run()
{
	try {
		processRequest();
	} catch (Exception e) {
		System.out.println(e);
	}
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Now, let's develop the code within&nbsp;<code>processRequest()</code>. We first obtain references to the socket's input and output streams. Then we wrap&nbsp;<code>InputStreamReader</code>&nbsp;and&nbsp;<code>BufferedReader</code>&nbsp;filters around the input stream. However, we won't wrap any filters around the output stream, because we will be writing bytes directly into the output stream.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">private void processRequest() throws Exception
{
	// Get a reference to the socket's input and output streams.
	InputStream is = ?;
	DataOutputStream os = ?;

	// Set up input stream filters.
	? 
	BufferedReader br = ?;

	. . .
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Now we are prepared to get the client's request message, which we do by reading from the socket's input stream. The&nbsp;<code>readLine()</code>&nbsp;method of the&nbsp;<code>BufferedReader</code>&nbsp;class will extract characters from the input stream until it reaches an end-of-line character, or in our case, the end-of-line character sequence CRLF.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The first item available in the input stream will be the HTTP request line. (See Section 2.2 of the textbook for a description of this and the following fields.)</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">// Get the request line of the HTTP request message.
String requestLine = <span class="questionMark">?</span>;

// Display the request line.
System.out.println();
System.out.println(requestLine);
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">After obtaining the request line of the message header, we obtain the header lines. Since we don't know ahead of time how many header lines the client will send, we must get these lines within a looping operation.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">// Get and display the header lines.
String headerLine = null;
while ((headerLine = br.readLine()).length() != 0) {
	System.out.println(headerLine);
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">We don't need the header lines, other than to print them to the screen, so we use a temporary String variable,&nbsp;<code>headerLine</code>, to hold a reference to their values. The loop terminates when the expression</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">(headerLine = br.readLine()).length()
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">evaluates to zero, which will occur when&nbsp;<code>headerLine</code>&nbsp;has zero length. This will happen when the empty line terminating the header lines is read. (See the HTTP Request Message diagram in Section 2.2 of the textbook)</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">In the next step of this lab, we will add code to analyze the client's request message and send a response. But before we do this, let's try compiling our program and testing it with a browser. Add the following lines of code to close the streams and socket connection.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">// Close streams and socket.
os.close();
br.close();
socket.close();
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">After your program successfully compiles, run it with an available port number, and try contacting it from a browser. To do this, you should enter into the browser's address text box the IP address of your running server. For example, if your machine name is&nbsp;<code>host.someschool.edu</code>, and you ran the server with port number 6789, then you would specify the following URL:</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre><a href="http://host.someschool.edu:6789/" target="_blank">http://host.someschool.edu:6789/</a>
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The server should display the contents of the HTTP request message. Check that it matches the message format shown in the HTTP Request Message diagram in Section 2.2 of the textbook.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<h3 style="font-weight: bold; font-size: 14pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Web Server in Java: Part B</h3>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Instead of simply terminating the thread after displaying the browser's HTTP request message, we will analyze the request and send an appropriate response. We are going to ignore the information in the header lines, and use only the file name contained in the request line. In fact, we are going to assume that the request line always specifies the GET method, and ignore the fact that the client may be sending some other type of request, such as HEAD or POST.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">We extract the file name from the request line with the aid of the&nbsp;<code>StringTokenizer</code>&nbsp;class. First, we create a&nbsp;<code>StringTokenizer</code>&nbsp;object that contains the string of characters from the request line. Second, we skip over the method specification, which we have assumed to be "GET". Third, we extract the file name.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">// Extract the filename from the request line.
StringTokenizer tokens = new StringTokenizer(requestLine);
tokens.nextToken();  // skip over the method, which should be "GET"
String fileName = tokens.nextToken();

// Prepend a "." so that file request is within the current directory.
fileName = "." + fileName;
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Because the browser precedes the filename with a slash, we prefix a dot so that the resulting pathname starts within the current directory.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Now that we have the file name, we can open the file as the first step in sending it to the client. If the file does not exist, the&nbsp;<code>FileInputStream()</code>&nbsp;constructor will throw the&nbsp;<code>FileNotFoundException</code>. Instead of throwing this possible exception and terminating the thread, we will use a try/catch construction to set the boolean variable&nbsp;<code>fileExists</code>&nbsp;to false. Later in the code, we will use this flag to construct an error response message, rather than try to send a nonexistent file.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">// Open the requested file.
FileInputStream fis = null;
boolean fileExists = true;
try {
	fis = new FileInputStream(fileName);
} catch (FileNotFoundException e) {
	fileExists = false;
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">There are three parts to the response message: the status line, the response headers, and the entity body. The status line and response headers are terminated by the character sequence CRLF. We are going to respond with a status line, which we store in the variable&nbsp;<code>statusLine</code>, and a single response header, which we store in the variable&nbsp;<code>contentTypeLine</code>. In the case of a request for a nonexistent file, we return&nbsp;<i>404 Not Found</i>&nbsp;in the status line of the response message, and include an error message in the form of an HTML document in the entity body.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">// Construct the response message.
String statusLine = null;
String contentTypeLine = null;
String entityBody = null;
if (fileExists) {
	statusLine = <span class="questionMark">?</span>;
	contentTypeLine = "Content-type: " + 
		contentType( fileName ) + CRLF;
} else {
	statusLine = <span class="questionMark">?</span>;
	contentTypeLine = <span class="questionMark">?</span>;
	entityBody = "&lt;HTML&gt;" + 
		"&lt;HEAD&gt;&lt;TITLE&gt;Not Found&lt;/TITLE&gt;&lt;/HEAD&gt;" +
		"&lt;BODY&gt;Not Found&lt;/BODY&gt;&lt;/HTML&gt;";
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">When the file exists, we need to determine the file's MIME type and send the appropriate MIME-type specifier. We make this determination in a separate private method called&nbsp;<code>contentType()</code>, which returns a string that we can include in the content type line that we are constructing.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Now we can send the status line and our single header line to the browser by writing into the socket's output stream.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">// Send the status line.
os.writeBytes(statusLine);

// Send the content type line.
os.writeBytes(?);

// Send a blank line to indicate the end of the header lines.
os.writeBytes(CRLF);
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Now that the status line and header line with delimiting CRLF have been placed into the output stream on their way to the browser, it is time to do the same with the entity body. If the requested file exists, we call a separate method to send the file. If the requested file does not exist, we send the HTML-encoded error message that we have prepared.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">// Send the entity body.
if (fileExists)	{
	sendBytes(fis, os);
	fis.close();
} else {
	os.writeBytes(?);
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">After sending the entity body, the work in this thread has finished, so we close the streams and socket before terminating.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">We still need to code the two methods that we have referenced in the above code, namely, the method that determines the MIME type,&nbsp;<code>contentType()</code>, and the method that writes the requested file onto the socket's output stream. Let's first take a look at the code for sending the file to the client.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">private static void sendBytes(FileInputStream fis, OutputStream os) 
throws Exception
{
   // Construct a 1K buffer to hold bytes on their way to the socket.
   byte[] buffer = new byte[1024];
   int bytes = 0;

   // Copy requested file into the socket's output stream.
   while((bytes = fis.read(buffer)) != -1 ) {
      os.write(buffer, 0, bytes);
   }
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Both&nbsp;<code>read()</code>&nbsp;and&nbsp;<code>write()</code>&nbsp;throw exceptions. Instead of catching these exceptions and handling them in our code, we throw them to be handled by the calling method.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The variable,&nbsp;<code>buffer</code>, is our intermediate storage space for bytes on their way from the file to the output stream. When we read the bytes from the&nbsp;<code>FileInputStream</code>, we check to see if&nbsp;<code>read()</code>&nbsp;returns minus one, indicating that the end of the file has been reached. If the end of the file has not been reached,&nbsp;<code>read()</code>&nbsp;returns the number of bytes that have been placed into&nbsp;<code>buffer</code>. We use the&nbsp;<code>write()</code>&nbsp;method of the&nbsp;<code>OutputStream</code>&nbsp;class to place these bytes into the output stream, passing to it the name of the byte array,&nbsp;<code>buffer</code>, the starting point in the array,&nbsp;<code>0</code>, and the number of bytes in the array to write,&nbsp;<code>bytes</code>.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The final piece of code needed to complete the Web server is a method that will examine the extension of a file name and return a string that represents it's MIME type. If the file extension is unknown, we return the type<code>application/octet-stream</code>.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">&nbsp;</p>
<pre class="brush: java">private static String contentType(String fileName)
{
	if(fileName.endsWith(".htm") || fileName.endsWith(".html")) {
		return "text/html";
	}
	if(?) {
		?;
	}
	if(?) {
		?;
	}
	return "application/octet-stream";
}
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">There is a lot missing from this method. For instance, nothing is returned for GIF or JPEG files. You may want to add the missing file types yourself, so that the components of your home page are sent with the content type correctly specified in the content type header line. For GIFs the MIME type is&nbsp;<code>image/gif</code>&nbsp;and for JPEGs it is&nbsp;<code>image/jpeg</code>.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">This completes the code for the second phase of development of your Web server. Try running the server from the directory where your home page is located, and try viewing your home page files with a browser. Remember to include a port specifier in the URL of your home page, so that your browser doesn't try to connect to the default port 80. When you connect to the running web server with the browser, examine the GET message requests that the web server receives from the browser.</p>
      