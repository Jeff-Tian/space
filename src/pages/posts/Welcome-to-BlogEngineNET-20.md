---
stackbit_url_path: >-
  posts/Welcome-to-BlogEngineNET-20
title: 'Welcome to BlogEngine.NET 2.0'
date: '2010-11-13 00:00:00'
excerpt: >-
  The description is used as the meta description as well as shown in the related posts. It is recommended that you write a description, but not mandatory
comments_count: 0
positive_reactions_count: 0
tags: 
  - blog
  - welcome
canonical_url: https://be-net.azurewebsites.net/post/2010/11/13/Welcome-to-BlogEngineNET-20
template: post
---
<p>If you see this post it means that BlogEngine.NET 2.0 is running and the hard part of creating your own blog is done. There is only a few things left to do.</p>
<h2>Write Permissions</h2>
<p>To be able to log in to the blog and writing posts, you need to enable write permissions on the App_Data folder. If you&rsquo;re blog is hosted at a hosting provider, you can either log into your account&rsquo;s admin page or call the support. You need write permissions on the App_Data folder because all posts, comments, and blog attachments are saved as XML files and placed in the App_Data folder.&nbsp;</p>
<p>If you wish to use a database to to store your blog data, we still encourage you to enable this write access for an images you may wish to store for your blog posts.&nbsp; If you are interested in using Microsoft SQL Server, MySQL, SQL CE, or other databases, please see the <a href="http://blogengine.codeplex.com/documentation">BlogEngine wiki</a> to get started.</p>
<h2>Security</h2>
<p>When you've got write permissions to the App_Data folder, you need to change the username and password. Find the sign-in link located either at the bottom or top of the page depending on your current theme and click it. Now enter "admin" in both the username and password fields and click the button. You will now see an admin menu appear. It has a link to the "Users" admin page. From there you can change the username and password.&nbsp; Passwords are hashed by default so if you lose your password, please see the <a href="http://blogengine.codeplex.com/documentation">BlogEngine wiki</a> for information on recovery.</p>
<h2>Configuration and Profile</h2>
<p>Now that you have your blog secured, take a look through the settings and give your new blog a title.&nbsp; BlogEngine.NET 1.4 is set up to take full advantage of of many semantic formats and technologies such as FOAF, SIOC and APML. It means that the content stored in your BlogEngine.NET installation will be fully portable and auto-discoverable.&nbsp; Be sure to fill in your author profile to take better advantage of this.</p>
<h2>Themes and Widgets</h2>
<p>One last thing to consider is customizing the look of your blog.&nbsp; We have a few themes available right out of the box including two fully setup to use our new widget framework.&nbsp; The widget framework allows drop and drag placement on your side bar as well as editing and configuration right in the widget while you are logged in.&nbsp; Be sure to check out <a href="http://dotnetblogengine.net">our home page</a> for more theme choices and downloadable widgets to add to your blog.</p>
<h2>Try Out New Features</h2>
<p>BlogEngine now supports code syntax highlighting and HTML5 video out of the box. To add a video, click the "Insert video" button just above the post editor. Once your video is uploaded, use the following syntax to show it: [&shy;video src="be-sample.mp4"]. Make sure to add "video/mp4" as a MIME type to your IIS.</p>
<p>[video src="http://dotnetblogengine.net/media/blogengine-welcome.mp4" type="video/mp4" width="600" height="480"]</p>
<p>You can add formatted code by pressing the "Insert Code" button on the post editor toolbar. Here is a small sample:</p>
<pre class="brush: c-sharp;">// Hello1.cs
public class Hello1
{
   public static void Main()
   {
      System.Console.WriteLine("Hello, World!");
   }
}</pre>
<p>&nbsp;</p>
<h2>On the web</h2>
<p>You can find BlogEngine.NET on the <a href="http://www.dotnetblogengine.net">official website</a>. Here you'll find tutorials, documentation, tips and tricks and much more. The ongoing development of BlogEngine.NET can be followed at <a href="http://blogengine.codeplex.com/">CodePlex</a> where the daily builds will be published for anyone to download.</p>
<p>Good luck and happy writing.</p>
<p>The BlogEngine.NET team</p>