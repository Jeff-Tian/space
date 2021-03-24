---
stackbit_url_path: >-
  posts/An-extension-for-C-built-in-Random-class
title: 'An extension for C# built-in Random class'
date: '2012-07-29 20:24:21.3533667'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Extension
  - Random
canonical_url: >-
template: post
---
<p>For testing purpose, I need to generate some random string (contains only letters without any other special characters) with customized length. So I extends the C# built-in Random class like this:</p>  <pre class="brush: csharp">#region Random's Extension
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

<p><a href="http://zizhujy.com/blog/image.axd?picture=image_600.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="Random string" border="0" alt="Random String" src="http://zizhujy.com/blog/image.axd?picture=image_thumb_291.png" width="224" height="223" /></a></p>