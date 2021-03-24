---
stackbit_url_path: >-
  posts/How-to-iterate-through-all-the-properties-of-a-class-in-C
title: 'How to iterate through all the properties of a class in C#'
date: '2012-09-12 02:10:14.5387634'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Reflection
  - iterate through
  - properties
canonical_url: >-
template: post
---
<p>How to iterate through all the properties of a class in C#? Use Reflection. And there are some differences between iterating through a instance of a class and iterating through a static class.</p>  <h2><font color="#9b00d3">Here are the examples:</font></h2>  <pre class="brush: csharp">using System;
using System.Reflection;

namespace Learning
{
    class Inspector
    {
        static void Main()
        {
            A a = new A() { PropA = &quot;A&quot;, PropB = &quot;B&quot;, PropC = &quot;C&quot; };
            Console.WriteLine(&quot;Information of A:&quot;);
            InspectObject<a>(a);
            Console.WriteLine();
            Console.WriteLine(&quot;Information of B:&quot;);
            InspectObject<b>();
            Console.ReadKey();
        }

        private static void InspectObject<t>(T o)
        {
            foreach (PropertyInfo prop in o.GetType().GetProperties())
            {
                Console.WriteLine(&quot;{0}: {1}&quot;, prop.Name, prop.GetValue(o, null));
            }
        }

        private static void InspectObject<t>()
        {
            foreach (PropertyInfo prop in typeof(T).GetProperties())
            {
                Console.WriteLine(&quot;{0}: {1}&quot;, prop.Name, prop.GetValue(typeof(T), null));
            }
        }
    }

    class A
    {
        public string PropA { get; set; }
        public string PropB { get; set; }
        public string PropC { get; set; }
    }

    class B
    {
        public static string PropA { get { return &quot;A&quot;; } }
        public static string PropB { get { return &quot;B&quot;; } }
        public static string PropC { get { return &quot;C&quot;; } }
    }
}</pre>

<h2><font color="#9b00d3">Result:</font></h2>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_605.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_294.png" width="644" height="172" /></a></p>