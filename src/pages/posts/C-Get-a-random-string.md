---
stackbit_url_path: >-
  posts/C-Get-a-random-string
title: 'C#: Get a random string'
date: '2012-12-24 23:45:56.6602648'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Random
  - string
canonical_url: >-
template: post
---
<p><a href="http://zizhujy.com/blog/image.axd?picture=image_611.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: right; border-top-width: 0px; border-bottom-width: 0px; margin-left: 0px; border-left-width: 0px; margin-right: 0px; padding-top: 0px" title="Random String methods for C#" border="0" alt="Random String methods for C#" align="right" src="http://zizhujy.com/blog/image.axd?picture=image_thumb_300.png" width="192" height="192" /></a></p>  <h2><font color="#9b00d3">Background:</font></h2>  <p>Sometimes, we need to generate some random strings for testing purpose. When I met this situation, I was surprised that C# has no such built-in methods inside its Random Class. So I had to implemented them as extension methods.</p>  <h2><font color="#9b00d3">Solution:</font></h2>  <pre class="brush: csharp">    #region Random's Extension
    public static class RandomExtension
    {
        /// <summary>
        /// Returns a random character between the start and end characters specified
        /// </summary>
        /// <param name="rnd" /></param>
        /// <param name="start" />The start of the range that the next random character will be generated from</param>
        /// <param name="end" />The end of the range that the next random character will be generated from</param>
        /// <returns>A character whose ASCII code greater than or equal to the start's and less than or equal to the end's</returns>
        public static char NextChar(this Random rnd, char start = 'a', char end = 'z')
        {
            int startCode = (int)start;
            int endCode = (int)end + 1;
            if (startCode &lt;= endCode)
            {
                int code = rnd.Next(startCode, endCode);
                return (char)code;
            }
            else
            {
                throw new ArgumentException(&quot;The 'start' character can NOT be greater than the 'end' charcater&quot;, &quot;start&quot;);
            }
        }

        /// <summary>
        /// Returns a random character among a set of specified characters
        /// </summary>
        /// <param name="rnd" /></param>
        /// <param name="candidates" />A set of the characters that the new random character will be generated from</param>
        /// <returns>A character from the specified character set</returns>
        public static char NextChar(this Random rnd, char[] candidates)
        {
            if (candidates.Length &gt; 0)
                return candidates[rnd.Next(0, candidates.Length)];
            else
                throw new ArgumentException(&quot;Must specify at least 1 character in the array (char[] candidates).&quot;, &quot;candidates&quot;);
        }

        /// <summary>
        /// Returns a random letter character ({'a' - 'z'} + {'A' - 'Z'})
        /// </summary>
        /// <param name="rnd" /></param>
        /// <returns>A character of the 26 English letters ignoring case.</returns>
        public static char NextLetter(this Random rnd)
        {
            return rnd.NextChar(new char[] { rnd.NextChar('a', 'z'), rnd.NextChar('A', 'Z') });
        }

        /// <summary>
        /// Returns a random letter string (a string contains only letters, no other special characters) with customized length
        /// </summary>
        /// <param name="rnd" /></param>
        /// <param name="length" />The length that the random string will be in</param>
        /// <returns>A string contains only letters.</returns>
        public static string NextLetterString(this Random rnd, int length = 10)
        {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i &lt; length; i++)
            {
                sb.Append(rnd.NextLetter());
            }
            return sb.ToString();
        }
    }
    #endregion</pre>

<h2><font color="#9b00d3">Remark:</font></h2>

<p>After I published this post, I just found out that I had already posted this one half a year ago which I totally forgot, and I was amazed by their similarities. The words I used in these 2 posts are almost the same! That indicates I hadn't changed a lot in recent half year. :)</p>

<p>I will keep this post other than update the old one, because I think the similarity is very interesting.</p>