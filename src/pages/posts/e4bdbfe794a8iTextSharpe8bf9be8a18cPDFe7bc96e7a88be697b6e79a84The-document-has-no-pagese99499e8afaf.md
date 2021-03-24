---
stackbit_url_path: >-
  posts/e4bdbfe794a8iTextSharpe8bf9be8a18cPDFe7bc96e7a88be697b6e79a84The-document-has-no-pagese99499e8afaf
title: '使用iTextSharp进行PDF编程时的The document has no pages.错误'
date: '2010-12-17 02:31:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - ASP.NET
  - iTextSharp
canonical_url: >-
template: post
---
<h1><font color="#9b00d3"><font style="font-weight: bold">一、问题</font></font></h1>  <p>我使用iTextSharp生成PDF文件，今天碰到一个The document has no pages.的错误。它发生于</p>  <p>document.Close()</p>  <p>语句处。</p>  <h1><font style="font-weight: bold" color="#9b00d3">二、原因</font></h1>  <p>经排查，报告这个错误，是由于在PDF页中插入了表格，但是插入表格中的单元格数量与行列数的乘积不相等引起的。比如插入了一个2行2列的表格，但是在使用循环插入单元格的过程中，只插入了3个单元格，就会引发此错误。</p>  <h1><font color="#9b00d3"><font style="font-weight: bold">三、解决方案</font></font></h1>  <p>所以解决方案是，一定要保证插入的单元格数量 = 行数 * 列数。</p>  <p>比如你建了一个2列的表格，但是要插入其中的信息，使用5个单元格就够了。那么在最后，你还必需得添加一个空的单元格进去，以使总的单元格数量为6（=3&lt;行&gt; * 2&lt;列&gt;）。</p>