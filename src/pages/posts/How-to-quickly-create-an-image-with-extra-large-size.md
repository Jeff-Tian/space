---
stackbit_url_path: >-
  posts/How-to-quickly-create-an-image-with-extra-large-size
title: 'How to quickly create an image with extra-large size'
date: '2011-12-30 21:29:11.0510606'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - compress
  - image
  - large
  - size
  - zip
canonical_url: https://be-net.azurewebsites.net/post/2011/12/30/How-to-quickly-create-an-image-with-extra-large-size
template: post
---
<h1><font color="#9b00d3"><font style="font-weight: bold">Background:</font></font></h1>  <p>Two weeks ago, we need to test an image cropping tool’s functionality. This cropping tool is used by a web site to processing the images uploaded by user, it can accept images with up to 100 MB size. So we need to collect many format images in many different sizes.</p>  <p>But how to create an extra-large image, say size in 60 MB, 86MB or even 99 MB? MSPaint.exe will not be response with image files which in size larger than 20 MB. (at least with 2G memory machine)</p>  <h1><font color="#9b00d3"><font style="font-weight: bold">Solution:</font></font></h1>  <p>Photoshop has much much better performance than MSPaint.exe, you can create images as large as you want. But if you really use it, you will find that creating large bmp files is just a piece of cake. However, creating large jpg files is kind of a challenge task. You will find that the jpg compressing algorithm is so powerful if you try to create a 100 MB jpg file.</p>  <p>But you can still try to paste many high resolution images to the single image file to produce a large file by using Photoshop. You need to repeat saving and checking file size many times to produce an ideal size image.</p>  <h1><font color="#9b00d3"><font style="font-weight: bold">Quick Solution:</font></font></h1>  <p>Hey, there is another quick approach to produce a specified size image. </p>  <p>You can put a zipped file into the image bits. It sounds like kind of cheating. But it really works!</p>  <p>Steps:</p>  <ol>   <li>Put jpg and zipped file in the same folder, for example, D:\pet.jpg and D:\zippedFile.zip</li>    <li>Open cmd and change path to D: disk</li>    <li>Enter the command:</li>    <ul>     <li>copy /b &lt;originalImageFileName&gt;+&lt;zippedFileName&gt; &lt;newImageFileName&gt;</li>      <li>For example: copy /b pet.jpg+zippedFile.zip newImage.jpg</li>   </ul>    <li>Done. You can check in D: disk, find the newImage.jpg is out there.</li> </ol>  <p>Because you can always easily find a specified size zip file, so via the above approach, you can quickly produce an image file with the exact size you want.</p>