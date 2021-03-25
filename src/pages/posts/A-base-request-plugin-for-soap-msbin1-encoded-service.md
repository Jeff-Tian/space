---
stackbit_url_path: >-
  posts/A-base-request-plugin-for-soap-msbin1-encoded-service
title: 'A base request plugin for soap+msbin1 encoded service'
date: '2012-01-29 03:56:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Visual Studio
  - request plugin
  - service
  - soap+msbin1
  - web test
canonical_url: https://be-net.azurewebsites.net/post/2012/01/29/A-base-request-plugin-for-soap-msbin1-encoded-service
template: post
---
<h1><span style="color: #9b00d3"><span style="font-weight: bold">Problem:</span></span></h1>  <p>I need to create a web test for a service method, but the service only accepts <strong>soap+msbin1</strong> encoded message payload. That means even I pass a valid SOAP message to it, the service will still return an error response.</p>  <p>But the web test in Visual Studio 2010 can only pass the plain text message payload!</p>  <h1><span style="color: #9b00d3"><span style="font-weight: bold">Solution:</span></span></h1>  <p>To resolve this problem, we need to hook up the plain text message before sending the request out, and convert the plain text into the targeted soap+msbin1 encoded bytes. Then send the request with converted bytes.</p>  <p>We can create the above converter as a request plugin, and then plug it into the original web test.</p>  <h1><span style="color: #9b00d3"><span style="font-weight: bold">Steps:</span></span></h1>  <ol>   <li><strong><span style="font-size: small">Create a web test request plugin.</span></strong> </li>    <ol>     <li>From Solution, we know we need a method to convert the plain text into a bytes array with a specified encoding method. This is the ConvertStringToMsBin1() method in the plug in source code, which will be present in the following section. </li>      <li>From Solution, we know we need to capture the plain text message before sending the request out, so we do the capturing work inside the PreRequest() method, which is one of the methods provided by the WebTestRequestPlugin base class (Our plug in will inherit from it!). </li>      <li>Source code (MsBin1Editor.cs): </li>      <ul>       <li><pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.VisualStudio.TestTools.WebTesting;
using System.Windows.Forms;
using System.IO;
using System.Xml;
using System.ServiceModel.Channels;

namespace MsBin1Plugin
{
    public class MsBin1Editor : WebTestRequestPlugin
    {
        public override void PreRequest(object sender, PreRequestEventArgs e)
        {
            StringHttpBody stringHttpBody = e.Request.Body as StringHttpBody;
            string originalString = stringHttpBody.BodyString;

            //MessageBox.Show(stringHttpBody.BodyString);

            BinaryHttpBody binaryHttpBody = new BinaryHttpBody();
            binaryHttpBody.Data = ConvertStringToMsBin1(originalString);
            binaryHttpBody.ContentType = stringHttpBody.ContentType;
            e.Request.Body = binaryHttpBody;

            //MessageBox.Show();

            //MessageBox.Show(e.Request.BodyBytes.Length.ToString());

            base.PreRequest(sender, e);
        }

        public byte[] ConvertStringToMsBin1(string text)
        {
            //MessageBox.Show(text);
            try
            {
                MemoryStream memStream = new MemoryStream();
                XmlWriter meWriter = XmlWriter.Create(memStream);
                meWriter.WriteRaw(text);
                meWriter.Flush();
                memStream.Position = 0;

                XmlReader meReader = XmlReader.Create(memStream);
                System.ServiceModel.Channels.Message newMessage = System.ServiceModel.Channels.Message.CreateMessage(meReader, int.MaxValue, System.ServiceModel.Channels.MessageVersion.Soap12WSAddressing10);
                var bindingElement = new BinaryMessageEncodingBindingElement();
                var factory = bindingElement.CreateMessageEncoderFactory();

                using (MemoryStream memoryStream = new MemoryStream())
                {
                    factory.Encoder.WriteMessage(newMessage, memoryStream);
                    return memoryStream.ToArray();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
                throw ex;
            }
            finally
            {
            }
        }

    }
}
</pre></li>
    </ul>
  </ol>

  <li><span style="font-size: small"><strong>Create the web test, and configure the plain text message payload via String Body node of the request.</strong></span> 

    <ul>
      <li><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_432.png"><img style="background-image: none; border-right-width: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="A base request plugin for soap+msbin1 encoded service" border="0" alt="A base request plugin for soap+msbin1 encoded service" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_167.png" width="622" height="351" /></a> </li>
    </ul>
  </li>

  <li><span style="font-size: small"><strong>Add the plugin into the original request created at step 2.</strong></span> 

    <ul>
      <li><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_433.png"><img style="background-image: none; border-right-width: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="A base request plugin for soap+msbin1 encoded service" border="0" alt="A base request plugin for soap+msbin1 encoded service" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_168.png" width="381" height="188" /></a> </li>
    </ul>
  </li>

  <li><span style="font-size: small"><strong>Done! You can run your web test now, it will work.</strong></span> </li>
</ol>