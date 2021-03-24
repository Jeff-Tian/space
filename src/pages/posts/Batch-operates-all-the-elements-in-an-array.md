---
stackbit_url_path: >-
  posts/Batch-operates-all-the-elements-in-an-array
title: 'Batch operates all the elements in an array'
date: '2012-08-01 03:24:12.6440944'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - array
  - linq
canonical_url: >-
template: post
---
<h2><font color="#9b00d3">Problem:</font></h2>  <p>You have an array consists of a series of numbers, and you want to have all the numbers subtract 1 by themselves.</p>  <h2><font color="#9b00d3">Solution:</font></h2>  <p>Use &lt;object&gt;.Select() extension method provided by System.Linq.</p>  <pre class="brush: csharp">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Learning
{
    class ArrayTesting
    {
        static void Main()
        {
            int[] a = new int[] { 1, 2, 3, 4, 5 };
            // Have each element in the array subtract 1.
            a = a.Select(i =&gt; i - 1).ToArray();

            Console.WriteLine(string.Join(&quot;, &quot;, a));
            Console.ReadKey();
        }
    }
}</pre>

<h2><font color="#9b00d3">Output:</font></h2>

<p><a href="http://zizhujy.com/blog/image.axd?picture=image_601.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="batch operates the elements of an array" border="0" alt="batch operates the elements of an array" src="http://zizhujy.com/blog/image.axd?picture=image_thumb_292.png" width="634" height="78" /></a></p>