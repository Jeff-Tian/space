---
stackbit_url_path: >-
  posts/使用Java编写一个邮件发信客户端
title: '使用Java编写一个邮件发信客户端'
date: '2010-05-26 01:57:49'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>要写这个客户端，需要先了解SMTP协议。了解了这个协议后，可以先直接在cmd界面下，通过telnet命令，使用本地的SMTP服务器，向任意邮箱发送一封测试信，以加深对SMTP协议的直观理解。详细步骤可见：<a href="http://www.myfootprints.cn/blog/post/HowToUseSMTP.html">http://www.myfootprints.cn/blog/post/HowToUseSMTP.html</a>。</p>
<p>现在来通过Java编写一个使用本地SMTP服务器发送电子邮件的客户端，它无非是将在cmd界面下通过telnet命令来完成的工作变得更加友好一点。可以下载运行一下查看示例。在界面的Local MailServer一栏中，填写本地的邮件服务器地址，如果安装了IIS，那么可以填写Localhost。</p>
<p>&nbsp;通过此工具发邮件，可以实现伪装发件人的效果，即在发件人一栏中，可以填写任何想要填写的邮件地址，只要它符合邮件地址格式规范就行（如admin@myfootprints.cn 形式）。</p>
<p><a target="_blank" href="http://www.myfootprints.cn/OldWeb/blog/upload/MailClient.rar">MailClient.rar</a></p>
<p>解压缩后运行MailClient.class即可。</p>
<p>以下是Java代码，主要代码来自《计算机网络自顶向下方法》中的编程实验室作业，某些是由涂鸦填充而成，一共有4个类文件。以下分别贴出：</p>
<p>MailClient.java</p>
<pre class="brush: java">
import java.io.*;
import java.net.*;
import java.awt.*;
import java.awt.event.*;

/**
 * A simple mail client with a GUI for sending mail.
 * @author 涂鸦
 *
 */
public class MailClient extends Frame {
	private Button btSend = new Button("Send");
	private Button btClear = new Button("Clear");
	private Button btQuit = new Button("Quit");
	private Label serverLabel = new Label("Local mailserver:");
	private TextField serverField = new TextField("", 40);
	private Label fromLabel = new Label("From:");
	private TextField fromField = new TextField("", 40);
	private Label toLabel = new Label("To:");
	private TextField toField = new TextField("", 40);
	private Label subjectLabel = new Label("Subject:");
	private TextField subjectField = new TextField("", 40);
	private Label messageLabel = new Label("Message:");
	private TextArea messageText = new TextArea(10, 40);
	
	/**
	 * Create a new MailClient window with fields for entering all the relevant
	 * information (From, To, Subject, and message).
	 */
	public MailClient() {
		super("Java MailClient");
		
		Panel serverPanel = new Panel(new BorderLayout());
		Panel fromPanel = new Panel(new BorderLayout());
		Panel toPanel = new Panel(new BorderLayout());
		Panel subjectPanel = new Panel(new BorderLayout());
		Panel messagePanel = new Panel(new BorderLayout());
		serverPanel.add(serverLabel, BorderLayout.WEST);	
		serverPanel.add(serverField, BorderLayout.CENTER);
		fromPanel.add(fromLabel, BorderLayout.WEST);
		fromPanel.add(fromField, BorderLayout.CENTER);
		toPanel.add(toLabel, BorderLayout.WEST);
		toPanel.add(toField, BorderLayout.CENTER);
		subjectPanel.add(subjectLabel, BorderLayout.WEST);
		subjectPanel.add(subjectField, BorderLayout.CENTER);
		messagePanel.add(messageLabel, BorderLayout.NORTH);
		messagePanel.add(messageText, BorderLayout.CENTER);
		Panel fieldPanel = new Panel(new GridLayout(0, 1));
		fieldPanel.add(serverPanel);
		fieldPanel.add(fromPanel);
		fieldPanel.add(toPanel);
		fieldPanel.add(subjectPanel);
		
		/** Create a panel for the buttons and listeners to the buttons. */
		Panel buttonPanel = new Panel(new GridLayout(1, 0));
		btSend.addActionListener(new SendListener());
		btClear.addActionListener(new ClearListener());
		btQuit.addActionListener(new QuitListener());
		buttonPanel.add(btSend);
		buttonPanel.add(btClear);
		buttonPanel.add(btQuit);
		
		/** Add, pack, and show */
		add(fieldPanel, BorderLayout.NORTH);
		add(messagePanel, BorderLayout.CENTER);
		add(buttonPanel, BorderLayout.SOUTH);
		pack();
		show();
	}
	
	static public void main(String argv[]) {
		new MailClient();
	}
	
	/** Handler for the Send-button. */
	class SendListener implements ActionListener {
		public void actionPerformed(ActionEvent event) {
			System.out.println("Sending mail");
			
			/** Check that we have the local mailserver */
			if ((serverField.getText()).equals("")) {
				System.out.println("Need name of local mailserver!");
				return;
			}
			
			/** Check that we have the sender and recipient */
			if ((fromField.getText()).equals("")) {
				System.out.println("Need sender!");
				return;
			}
			
			if ((toField.getText()).equals("")) {
				System.out.println("Need recipient!");
				return;
			}
			
			/** Create the message */
			Message mailMessage = new Message(fromField.getText(), 
					toField.getText(),
					subjectField.getText(),
					messageText.getText());
			
			/** Check that the message is valid, i.e., sender and recipient addresss look ok. */
			if (!mailMessage.isValid()) {
				System.out.println("Mail is not valid!");
				return;
			}
			
			/** Create the envelope, open the connection and try to send the message. */
			Envelope envelope;
			try 
			{
				envelope = new Envelope(mailMessage, serverField.getText());
			} catch (UnknownHostException e) {
				/** If there is an error, do not go further */
				System.out.println("Unknown host!");
				return;
			}
			
			try {
				SMTPConnection connection = new SMTPConnection(envelope);
				connection.send(envelope);
				connection.close();
			} catch (IOException error) {
				System.out.println("Sending failed: " + error);
				return;
			}
			
			System.out.println("Mail send successfully!");
		}
	}

	/** Clear the fields on the GUI. */
	class ClearListener implements ActionListener {
		public void  actionPerformed(ActionEvent e) {
			System.out.println("Clearing fields");
			fromField.setText("");
			toField.setText("");
			subjectField.setText("");
			messageText.setText("");
		}
	}
	
	/* Quit */
	class QuitListener implements ActionListener {
		public void actionPerformed(ActionEvent e) {
			System.exit(0);
		}
	}
}
</pre>
<p>Message.java</p>
<pre class="brush: java">
import java.util.*;
import java.text.*;

/**
 * Mail message
 * @author 涂鸦
 *
 */
public class Message {
	public String Headers;
	public String Body;
	
	private String From;
	private String To;
	
	/** To make it look nicer */
	private static final String CRLF = "\r\n";
	
	/** Create the message object by inserting the required headers from RFC 822 (From, To, Date). */
	public Message(String from, String to, String subject, String text) {
		/** Remove whitespace */
		From = from.trim();
		To = to.trim();
		Headers = "From: " + From + CRLF;
		Headers += "To: " + To + CRLF;
		Headers += "Subject: " + subject.trim() + CRLF;
		
		/** A close approximation of the required format. Unfortunately only GMT. */
		SimpleDateFormat format = new SimpleDateFormat("EEE, dd MMM yyyy HH:mm:ss 'GMT'");
		String dateString = format.format(new Date());
		Headers += "Date: " + dateString + CRLF;
		Body = text;
	}
	
	/** Two functions to access the sender and recipient. */
	public String getFrom() {
		return From;
	}
	
	public String getTo() {
		return To;
	}
	
	/** Check whether the message is valid. In other words, check that both sender and recipient 
	 * contains only one @-sign. */
	public boolean isValid() {
		int fromat = From.indexOf('@');
		int toat = To.indexOf('@');
		
		if (fromat &lt; 1 || (From.length() - fromat) &lt;= 1) {
			System.out.println("Sender address is invalid.");
			return false;
		}
		
		if (toat &lt; 1 || (To.length() - toat) &lt;= 1) {
			System.out.println("Recipient address is invalid.");
			return false;
		}
		
		if (fromat != From.lastIndexOf('@')) {
			System.out.println("Sender address is invalid.");
			return false;
		}
		
		if (toat != To.lastIndexOf('@')) {
			System.out.println("Recipient address is invalid.");
			return false;
		}
		
		return true;
	}
	
	/** For printing the message. */ 
	public String toString() {
		String res;
		
		res = Headers + CRLF;
		res += Body;
		return res;
	}
}
</pre>
<div>&nbsp;</div>
<p>Envelope.java</p>
<pre class="brush: java">
import java.io.*;
import java.net.*;
import java.util.*;

/**
 * SMTP envelope for one mail message
 * @author 涂鸦
 *
 */
public class Envelope {
	public String Sender;
	
	/** SMTP-recipient, or contents of To-header. */
	public String Recipient;
	
	/** Target MX-host */
	public String DestHost;
	public InetAddress DestAddr;
	
	/** The actual message. */
	public Message Message;
	
	/** Create the envelope. */
	public Envelope(Message message, String localServer) throws UnknownHostException {
		/** Get sender and recipient. */
		Sender = message.getFrom();
		Recipient = message.getTo();
		
		/** Get message. We must escape the message to make sure that there are no single periods on 
		 * a line. This would mess up sending the Mail. */
		Message = escapeMessage(message);
		
		/** Take the name of the local mailserver and map it into an Inet Address */
		DestHost = localServer;
		try {
			DestAddr = InetAddress.getByName(DestHost);
		} catch (UnknownHostException e) {
			System.out.println("Unknown Host: " + DestHost);
			System.out.println(e);
			throw e;
		}
		return;
	}
	
	/** Escape the message by doubling all periods at the beginning of a line. */
	private Message escapeMessage(Message message) {
		String escapeBody = "";
		String token;
		StringTokenizer parser = new StringTokenizer(message.Body, "\n", true);
		
		while (parser.hasMoreTokens()) {
			token = parser.nextToken();
			if (token.startsWith(".")) {
				token = "." + token;
			}
			
			escapeBody += token;
		}
		
		message.Body = escapeBody;
		return message;
	}
	
	/** For printing the envelope. Only for debug. */
	public String toString() {
		String res = "Sender: " + Sender + "\n";
		res += "Recipient: " + Recipient +"\n";
		res += "MX-host: " + DestHost + ", address: " + DestAddr + "\n";
		res += "Message: " + "\n";
		res += Message.toString();
		
		return res;
	}
}
</pre>
<div>&nbsp;</div>
<p>SMTPConnection.java</p>
<pre class="brush: java">
import java.net.*;
import java.io.*;
import java.util.*;

/**
 * Open an SMTP connection to a mailserver and send one mail
 * @author 涂鸦
 *
 */
public class SMTPConnection {
	private Socket connection;
	
	/** Streams for reading and writing the socket */
	private BufferedReader fromServer;
	private DataOutputStream toServer;
	
	private static final int SMTP_PORT = 25;
	private static final String CRLF = "\r\n";
	
	/** Are we connected? Used in close() to determine what to do. */
	private boolean isConnected = false;
	
	/** Create an SMTPConnection object. Create the socket and the associated streams. Initialize 
	 * SMTP connection.
	 */
	public SMTPConnection(Envelope envelope) throws IOException {
		connection = new Socket(envelope.DestAddr, SMTP_PORT);
		fromServer = new BufferedReader(new InputStreamReader(connection.getInputStream()));
		toServer = new DataOutputStream(connection.getOutputStream());
		
		
		/** Read a line from server and check that the reply code is 220. If not, throw an IOException. */
		String reply = fromServer.readLine();
		if (reply.startsWith("220")) {
			
		} else {
			throw new IOException("Server reply" + reply);
		}
		
		/** SMTP handshake. We need the name of the local machine.
		 * Send the appropriate SMTP handshake command. */
		String localhost = envelope.DestHost;
		try {
			sendCommand("HELO " + localhost, 250);
		} catch (IOException error) {
			System.out.println(error);
			System.exit(1);
		} catch (Exception e) {
			System.out.println(e);
			System.exit(1);
		}
		
		isConnected = true;
	}
	
	/** Send the message. Write the correct SMTP-commands in the correct order. No checking for errors,
	 * just throw them to the caller.
	 */
	public void send(Envelope envelope) throws IOException {
		/** Send all the necessary commands to send a message. Call sendCommand() to do the dirty 
		 * work. Do _not_ catch the exception thrown from sendCommand().
		 */
		sendCommand("MAIL FROM: " + envelope.Sender + CRLF, 250);
		sendCommand("RCPT TO: " + envelope.Recipient + CRLF, 250);
		sendCommand("DATA" + CRLF + envelope.Message.Headers + envelope.Message.Body + CRLF + "." + CRLF, 354);
	}
	
	/** Close the connection. First, terminate on SMTP level, then close the socket. */
	public void close() {
		isConnected = false;
		try {
			/**
			sendCommand("QUIT", 221);*/
			// 我的机器localhost对于QUIT的返回码是250
			sendCommand("QUIT", 250);
			connection.close();
		} catch (IOException e) {
			System.out.println("Unable to close connection: " + e);
			isConnected = true;
		}
	}
	
	/** Send an SMTP command to the server. Check that the reply code is what is is supposed to be 
	 * according to RFC 821.
	 */
	private void sendCommand(String command, int rc) throws IOException {
		String reply;
		
		toServer.writeBytes(command);
		toServer.writeBytes(CRLF);
		System.out.println("Me: " + command + '\n');
		reply = fromServer.readLine();
		System.out.println("Server: " + reply + '\n');
		if(!reply.startsWith(String.valueOf(rc))) {
			throw new IOException("Server reply: " + reply);
		}
		/**
		if(rc != parseReply(reply)) {
			throw new IOException("Server reply" + reply);
		}*/
		/**
		if ((command.equalsIgnoreCase("HELO") &amp;&amp; rc != 250) 
				|| (command.equalsIgnoreCase("MAIL FROM") &amp;&amp; rc != 250) 
				|| (command.equalsIgnoreCase("RCPT TO") &amp;&amp; rc != 250)
				|| (command.equalsIgnoreCase("DATA") &amp;&amp; rc != 354)
				|| (command.equalsIgnoreCase("QUIT") &amp;&amp; rc != 221)) {
			throw new IOException("Server replys " + rc);
		}*/
	}
	
	/** Parse the reply line from the server. Returns the reply code. */
	private int parseReply(String reply) {
		return Integer.parseInt(reply);
	}
	
	/** Destructor. Closes the connection if something bad happens. */
	protected void finalize() throws Throwable {
		if (isConnected) {
			close();
		}
		
		super.finalize();
	}
}
</pre>
<p>以下是原书的作业提示：</p>
<hr>
<p>&nbsp;</p>
<h1 style="font-weight: normal; font-size: 19pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Programming Assignment 2: A Mail User Agent in Java</h1>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">In this lab you will implement a mail user agent that sends mail to other users. Your task is to program the SMTP interaction between the MUA and the local SMTP server. The client provides a graphical user interface containing fields for entering the sender and recipient addresses, the subject of the message and the message itself. Here's what the user interface looks like:<br>
&nbsp;</p>
<center style="font-family: Simsun; line-height: normal; font-size: medium; "><img height="342" alt="[Interface]" width="420" src="http://www.plaust.edu.cn/networks/jiaofuziyuan/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C4/labsite2/Programming%20Assignments/Programming%20Assignment%202%20%20A%20Mail%20User%20Agent%20in%20Java.files/interface.gif"></center>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">With this interface, when you want to send a mail, you must fill in complete addresses for both the sender and the recipient, i.e.,<code>user@someschool.edu</code>, not just simply&nbsp;<code>user</code>. You can send mail to only one recipient. You will also need to give the name (or IP address) of your local mailserver. If you do not know the name of your local mailserver, see&nbsp;<a style="color: rgb(0, 0, 102); " href="http://media.pearsoncmg.com/aw/aw_kurose_network_3/labs/lab2/lab2.html#dns">Querying the DNS</a>&nbsp;below for more information on how to obtain the address of the local mailserver.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">When you have finished composing your mail, press&nbsp;<i>Send</i>&nbsp;to send it.</p>
<h2 style="font-weight: bold; font-size: 16pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">The Code</h2>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The program consists of four classes:<br>
<br>
</p><table>
    <tbody>
        <tr>
            <td width="150">MailClient</td>
            <td width="300">The user interface</td>
        </tr>
        <tr>
            <td width="150">Message</td>
            <td width="300">Mail message</td>
        </tr>
        <tr>
            <td width="150">Envelope</td>
            <td width="300">SMTP envelope around the Message</td>
        </tr>
        <tr>
            <td width="150">SMTPConnection</td>
            <td width="300">Connection to the SMTP server</td>
        </tr>
    </tbody>
</table>
<p></p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">You will need to complete the code in the&nbsp;<code>SMTPConnection</code>&nbsp;class so that in the end you will have a program that is capable of sending mail to any recipient. The code for the&nbsp;<code>SMTPConnection</code>&nbsp;class is at the&nbsp;<a style="color: rgb(0, 0, 102); " href="http://media.pearsoncmg.com/aw/aw_kurose_network_3/labs/lab2/lab2.html#smtpconnection">end of this page</a>. The code for the other three classes is provided&nbsp;<a style="color: rgb(0, 0, 102); " href="http://media.pearsoncmg.com/aw/aw_kurose_network_3/labs/lab2/othercode.html">on this page</a>.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The places where you need to complete the code have been marked with the comments&nbsp;<code>/* Fill in */</code>. Each of the places requires one or more lines of code.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The&nbsp;<code>MailClient</code>&nbsp;class provides the user interface and calls the other classes as needed. When you press&nbsp;<i>Send</i>, the&nbsp;<code>MailClient</code>class constructs a&nbsp;<code>Message</code>&nbsp;class object to hold the mail message. The&nbsp;<code>Message</code>&nbsp;object holds the actual message headers and body. Then the&nbsp;<code>MailClient</code>&nbsp;object builds the SMTP envelope using the&nbsp;<code>Envelope</code>&nbsp;class. This class holds the SMTP sender and recipient information, the SMTP server of the recipient's domain, and the&nbsp;<code>Message</code>&nbsp;object. Then the&nbsp;<code>MailClient</code>&nbsp;object creates the<code>SMTPConnection</code>&nbsp;object which opens a connection to the SMTP server and the&nbsp;<code>MailClient</code>&nbsp;object sends the message over the connection. The sending of the mail happens in three phases:</p>
<ol style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">
    <li>The&nbsp;<code>MailClient</code>&nbsp;object creates the&nbsp;<code>SMTPConnection</code>&nbsp;object and opens the connection to the SMTP server.</li>
    <li>The&nbsp;<code>MailClient</code>&nbsp;object sends the message using the function&nbsp;<code>SMTPConnection.send()</code>.</li>
    <li>The&nbsp;<code>MailClient</code>&nbsp;object closes the SMTP connection.</li>
</ol>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The&nbsp;<code>Message</code>&nbsp;class contains the function&nbsp;<code>isValid()</code>&nbsp;which is used to check the addresses of the sender and recipient to make sure that there is only one address and that the address contains the @-sign. The provided code does not do any other error checking.</p>
<hr style="font-family: Simsun; line-height: normal; font-size: medium; ">
<h2 style="font-weight: bold; font-size: 16pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Reply Codes</h2>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">For the basic interaction of sending one message, you will only need to implement a part of SMTP. In this lab you need only to implement the following SMTP commands:<br>
<br>
</p><table>
    <tbody>
        <tr>
            <th>Command</th>
            <th>Reply Code</th>
        </tr>
        <tr>
            <td>DATA</td>
            <td>354</td>
        </tr>
        <tr>
            <td>HELO</td>
            <td>250</td>
        </tr>
        <tr>
            <td>MAIL FROM</td>
            <td>250</td>
        </tr>
        <tr>
            <td>QUIT</td>
            <td>221</td>
        </tr>
        <tr>
            <td>RCPT TO</td>
            <td>250</td>
        </tr>
    </tbody>
</table>
<p></p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The above table also lists the accepted reply codes for each of the SMTP commands you need to implement. For simplicity, you can assume that any other reply from the server indicates a fatal error and abort the sending of the message. In reality, SMTP distinguishes between transient (reply codes 4xx) and permanent (reply codes 5xx) errors, and the sender is allowed to repeat commands that yielded in a transient error. See Appendix E of&nbsp;<a style="color: rgb(0, 0, 102); " href="http://www.ietf.org/rfc/rfc0821.txt?number=821">RFC 821</a>&nbsp;for more details.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">In addition, when you open a connection to the server, it will reply with the code 220.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; "><em>Note:</em>&nbsp;RFC 821 allows the code 251 as a response to a RCPT TO-command to indicate that the recipient is not a local user. You may want to verify manually with the&nbsp;<code>telnet</code>&nbsp;command what your local SMTP server replies.</p>
<hr style="font-family: Simsun; line-height: normal; font-size: medium; ">
<h2 style="font-weight: bold; font-size: 16pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Hints</h2>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Most of the code you will need to fill in is similar to the code you wrote in the WebServer lab. You may want to use the code you have written there to help you.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">To make it easier to debug your program, do not, at first, include the code that opens the socket, but use the following definitions for<code>fromServer</code>&nbsp;and&nbsp;<code>toServer</code>. This way, your program sends the commands to the terminal. Acting as the SMTP server, you will need to give the correct reply codes. When your program works, add the code to open the socket to the server.</p>
<pre>       fromServer = new BufferedReader(new InputStreamReader(System.in));
       toServer = System.out;
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The lines for opening and closing the socket, i.e., the lines&nbsp;<code>connection = ...</code>&nbsp;in the constructor and the line&nbsp;<code>connection.close()</code>&nbsp;in function&nbsp;<code>close()</code>, have been commented out by default.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Start by completing the function&nbsp;<code>parseReply()</code>. You will need this function in many places. In the function&nbsp;<code>parseReply()</code>, you should use the&nbsp;<code>StringTokenizer</code>-class for parsing the reply strings. You can convert a string to an integer as follows:</p>
<pre>	   int i = Integer.parseInt(argv[0]);
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">In the function&nbsp;<code>sendCommand()</code>, you should use the function&nbsp;<code>writeBytes()</code>&nbsp;to write the commands to the server. The advantage of using&nbsp;<code>writeBytes()</code>&nbsp;instead of&nbsp;<code>write()</code>&nbsp;is that the former automatically converts the strings to bytes which is what the server expects. Do not forget to terminate each command with the string CRLF.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">You can throw exceptions like this:</p>
<pre>           throw new Exception();
</pre>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">You do not need to worry about details, since the exceptions in this lab are only used to signal an error, not to give detailed information about what went wrong.</p>
<hr style="font-family: Simsun; line-height: normal; font-size: medium; ">
<h2 style="font-weight: bold; font-size: 16pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; ">Optional Exercises</h2>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">You may want to try the following optional exercises to make your program more sophisticated. For these exercises, you will need to modify also the other classes (MailClient, Message, and Envelope).</p>
<ul style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">
    <li><b>Verify sender address</b>. Java's System-class contains information about the username and the InetAddress-class contains methods for finding the name of the local host. Use these to construct the sender address for the Envelope instead of using the user-supplied value in the From-header.</li>
    <li><b>Additional headers</b>. The generated mails have only four header fields, From, To, Subject, and Date. Add other header fields from RFC 822, e.g., Message-ID, Keywords. Check the&nbsp;<a style="color: rgb(0, 0, 102); " href="http://info.internet.isi.edu/in-notes/rfc/files/rfc822.txt">RFC</a>&nbsp;for the definitions of the different fields.</li>
    <li><b>Multiple recipients</b>. Currently the program only allows sending mail to a single recipient. Modify the user interface to include a Cc-field and modify the program to send mail to both recipients. For a more challenging exercise, modify the program to send mail to an arbitrary number of recipients.</li>
    <li><b>More error checking</b>. The provided code assumes that all errors that occur during the SMTP connection are fatal. Add code to distinguish between fatal and non-fatal errors and add a mechanism for signaling them to the user. Check the RFC to see what the different reply codes mean. This exercise may require large modifications to the&nbsp;<code>send()</code>,&nbsp;<code>sendCommand()</code>, and<code>parseReply()</code>&nbsp;functions.</li>
</ul>
<hr style="font-family: Simsun; line-height: normal; font-size: medium; ">
<h2 style="font-weight: bold; font-size: 16pt; color: rgb(167, 124, 70); font-family: Arial, sans-serif; line-height: normal; "><a name="dns">Querying the DNS</a></h2>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The Domain Name System (DNS) stores information in resource records. Normal name to IP-address mappings are stored in type A (Address) resource records. Type NS (NameServer) records hold information about nameservers and type MX (Mail eXchange) records tell which server is handling the mail delivery of the domain.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The server you need to find is the server handling the mail for your school's domain. First, you must find the nameserver of your school and then query this nameserver for the MX-host. Assuming you are at Someschool and your domain is&nbsp;<code>someschool.edu</code>, you would do the following:</p>
<ol style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">
    <li>Find the address of a nameserver for the top-level domain&nbsp;<code>.edu</code>&nbsp;(NS query)</li>
    <li>Query the nameserver for .edu about the nameserver for the domain&nbsp;<code>someschool.edu</code>&nbsp;to get the address of Someschool's nameserver. (NS query)</li>
    <li>Query Someschool's nameserver for MX-records for the domain&nbsp;<code>someschool.edu</code>. (MX query)</li>
</ol>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Ask your local system administrator how to perform DNS queries manually.</p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">Under Unix you can query DNS manually with the&nbsp;<code>nslookup</code>-command. The syntax of the&nbsp;<code>nslookup</code>-command is as follows. Note that the argument&nbsp;<code>host</code>&nbsp;can also be a domain.
</p><table>
    <tbody>
        <tr>
            <td>Normal query</td>
            <td><code>nslookup host</code></td>
        </tr>
        <tr>
            <td>Normal query using a given server</td>
            <td><code>nslookup host server</code></td>
        </tr>
        <tr>
            <td>NS-query</td>
            <td><code>nslookup -type=NS host</code></td>
        </tr>
        <tr>
            <td>MX-query</td>
            <td><code>nslookup -type=MX host</code></td>
        </tr>
    </tbody>
</table>
<p></p>
<p style="font-size: 10pt; font-family: Arial, sans-serif; line-height: normal; ">The reply to the MX-query may contain multiple mail exchangers. Each of them is preceded by a number which is the preference value for this server. Lower preference values indicate preferred servers so you should use the server with the lowest preference value.</p>
<p>&nbsp;</p>
      