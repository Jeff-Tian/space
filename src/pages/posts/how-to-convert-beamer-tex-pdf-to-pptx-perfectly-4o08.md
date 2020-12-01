---
stackbit_url_path: posts/how-to-convert-beamer-tex-pdf-to-pptx-perfectly-4o08
title: 'How to convert beamer tex pdf to pptx, perfectly?'
date: '2020-11-30T05:14:57.141Z'
excerpt: >-
  Background   You are making some serious slides show and use LaTex beamer
  template to genera...
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--Y0Dl2S0J--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/o1xchyswyk6tl7tu9esk.png
comments_count: 0
positive_reactions_count: 0
tags:
  - beamer
  - tex
  - pptx
  - pdf
canonical_url: 'https://dev.to/jefftian/how-to-convert-beamer-tex-pdf-to-pptx-perfectly-4o08'
template: post
---
## Background

You are making some serious slides show and use LaTex beamer template to generate a perfect PDF, but you are asked to provide a PPTX file to have the ability to use the time rehearsal.

## Ways tried

There are so many tools that claims they can convert your PDF to pptx, but the results are cumbersome. Either texts get overlapped or fonts skewed ugly. And some tools say they can keep original look and feel 100%, but you just get all the slides in image which can't be accepted at all. 

## A manual but perfect way

Use LibreOffice to open the PDF file, and create a new PPTX file manually. 

Then change the page width and height properties of the PPTX file to match the original PDF's page width and height.

### Then copy slide one by one.

Now your slides look and feel the same as the PDF, and you can keep on editing them.

*[This post is also available on DEV.](https://dev.to/jefftian/how-to-convert-beamer-tex-pdf-to-pptx-perfectly-4o08)*


<script>
const parent = document.getElementsByTagName('head')[0];
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.1.1/iframeResizer.min.js';
script.charset = 'utf-8';
script.onload = function() {
    window.iFrameResize({}, '.liquidTag');
};
parent.appendChild(script);
</script>    
