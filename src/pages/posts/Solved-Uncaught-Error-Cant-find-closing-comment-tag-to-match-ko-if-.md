---
stackbit_url_path: >-
  posts/Solved-Uncaught-Error-Cant-find-closing-comment-tag-to-match-ko-if-
title: '[Solved] Uncaught Error: Can’t find closing comment tag to match: ko if: ***.'
date: '2014-04-17 23:34:28.5506316'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - JavaScript
  - html
  - knockout
canonical_url: https://be-net.azurewebsites.net/post/2014/04/17/Solved-Uncaught-Error-Cant-find-closing-comment-tag-to-match-ko-if-
template: post
---
<h2><font color="#9b00d3">Background:</font></h2>  <p>I spent a lot of time to debug this knockout js error as the title shows, and finally I found the cause which made me kind of angry because it was not worth wasting so much time on it.</p>  <h2><font color="#9b00d3">Lesson I learned:</font></h2>  <p>Always write the html tags as the basic form.</p>  <h2><font color="#9b00d3">Problem:</font></h2>  <p>Met a javascript error thrown when applying knockout binding to page:</p>  <p><font color="#ff0000">Uncaught Error: Cannot find closing comment tag to match: ko if: ***</font></p>  <h2><font color="#9b00d3">Cause:</font></h2>  <p>Wrote some html tags in a space-saving format. For example:</p>  <pre class="brush: html">&lt;select data-bind=&quot;options: DurationList, optionsValue: 'Value', optionsText: 'Text', value: $parent.MonthDuration&quot; /&gt;</pre>

<h2><font color="#9b00d3">Solution:</font></h2>

<p>Write the tags in the basic form manner. Take the above html tag for example, write it in this way:</p>

<pre class="brush: html">&lt;select data-bind=&quot;options: DurationList, optionsValue: 'Value', optionsText: 'Text', value: $parent.MonthDuration&quot;&gt;&lt;/select&gt;</pre>