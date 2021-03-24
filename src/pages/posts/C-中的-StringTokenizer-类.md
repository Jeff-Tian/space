---
stackbit_url_path: >-
  posts/C-中的-StringTokenizer-类
title: 'C# 中的 StringTokenizer 类'
date: '2010-06-01 11:30:34'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>在Java中，有一个StringTokenizer类，对于分析单词非常有用。</p>
<p>C# 中，似乎没有系统自带的StringTokenizer类，不过，可以自己写一个。</p>
<p>网上搜索到一个非常专业的代码。如下：</p>
<pre class="brush: csharp">
using System;
using System.Collections;
using System.Text;

/// &lt;summary&gt;
/// StringTokenizer. A String Tokenizer that accepts Strings as source and delimiter. Only 1 delimiter is supported (either String or char[]).
/// &lt;/summary&gt;
public class StringTokenizer
{
    private int curIndex;
    private int numTokens;
    private ArrayList tokens;
    private string source;
    private string delimiter;

    /// &lt;summary&gt;
    /// Constructor for StringTokenizer Class.
    /// &lt;/summary&gt;
    /// 
    /// The Source String. 
    /// The Delimiter String. If a 0 length delimiter is given, " " (space) is used by default.
    ///
	public StringTokenizer(string source, string delimiter)
	{
        this.tokens = new ArrayList(10);
        this.source = source;
        this.delimiter = delimiter;

        if (delimiter.Length &lt;= 0)
        {
            this.delimiter = " ";
        }
        this.Tokenize();
	}

    ///
    /// Constructor for StringTokenizer Class.
    /// 
    /// The Source String.
    /// The Delimiter String as a char[]. Note that this is converted into a single String and expects Unicode encoded chars.
    /// 
    public StringTokenizer(string source, char[] delimiter)
        : this(source, new string(delimiter))
    {
    }

    ///
    /// Constructor for StringTokenizer Class. The default delimiter of " " (space) is used.
    /// 
    /// The Source String.
    /// 
    public StringTokenizer(string source)
        : this(source, "")
    {
    }

    ///
    /// Empty Constructor. Will create an empty StringTokenizer with no source, no delimiter, and no tokens.
    /// If you want to use this StringTokenizer you will have to call the NewSource(string s) method. You may
    /// optionally call the NewDelim(string d) or NewDelim(char[] d) methods if you don't with to use the default
    /// delimiter of " " (space).
    /// 
    public StringTokenizer()
        : this("", "")
    {

    }

    private void Tokenize()
    {
        string tempSource = this.source;
        string tok = "";
        this.numTokens = 0;
        this.tokens.Clear();
        this.curIndex = 0;

        if (tempSource.IndexOf(this.delimiter) &lt; 0 &amp;&amp; tempSource.Length &gt; 0) {
            this.numTokens = 1;
            this.curIndex = 0;
            this.tokens.Add(tempSource);
            this.tokens.TrimToSize();
            tempSource = "";
        }
        else if (tempSource.IndexOf(this.delimiter) &lt; 0 &amp;&amp; tempSource.Length &lt;= 0)
        {
            this.numTokens = 0;
            this.curIndex = 0;
            this.tokens.TrimToSize();
        }
        while (tempSource.IndexOf(this.delimiter) &gt;= 0)
        {
            // Delimiter at beginning of source String.
            if (tempSource.IndexOf(this.delimiter) == 0)
            {
                if (tempSource.Length &gt; this.delimiter.Length)
                {
                    tempSource = tempSource.Substring(this.delimiter.Length);
                }
                else
                {
                    tempSource = "";
                }
            }
            else
            {
                tok = tempSource.Substring(0, tempSource.IndexOf(this.delimiter));
                this.tokens.Add(tok);
                if (tempSource.Length &gt; (this.delimiter.Length + tok.Length))
                {
                    tempSource = tempSource.Substring(this.delimiter.Length + tok.Length);
                }
                else
                {
                    tempSource = "";
                }
            }
        }
        // we may have a string leftover.
        if (tempSource.Length &gt; 0)
        {
            this.tokens.Add(tempSource);
        }
        this.tokens.TrimToSize();
        this.numTokens = this.tokens.Count;
    }

    ///
    /// Method to add or change this Instance's Source string. The delimiter will remain the same (either default of " " (space) or whatever you 
    /// constructed this StringTokenizer with or added with NewDelim(string d) or NewDelim(char[] d) ).
    /// 
    /// The new Source String.
    ///
    public void NewSource(string newSource)
    {
        this.source = newSource;
        this.Tokenize();
    }

    ///
    /// Method to add or change this Instance's Delimiter string. The source string will remain the same (either empty if you used Empty Constructor, or 
    /// the previous value of source from the call to a parameterized constructor or NewSource(string s) ).
    /// 
    /// The new Delimiter String
    /// 
    public void NewDelim(string newDel)
    {
        if (newDel.Length == 0)
        {
            this.delimiter = " ";
        }
        else
        {
            this.delimiter = newDel;
        }
        this.Tokenize();
    }

    ///
    /// Method to add or change this Instance's Delimiter string. The source string will remain the same (either empty if you used Empty Constructor, or 
    /// the previous vlaue of source from the call to a parameterized constructor or NewSource(string s) ).
    /// 
    /// The New Delimiter as a char[]. Note that this is converted into a single String and expects Unicode encoded chars.
    /// 
    public void NewDelim(char[] newDel)
    {
        string temp = new String(newDel);
        if (temp.Length == 0)
        {
            this.delimiter = " ";
        }
        else
        {
            this.delimiter = temp;
        }
        this.Tokenize();
    }

    ///
    /// Method to get the number of tokens in this StringTokenizer.
    /// 
    /// The number fo Tokens in the internal ArrayList.
    ///
    public int CountTokens()
    {
        return this.tokens.Count;
    }

    ///
    /// Method to probe for more tokens.
    /// 
    /// true if there are more tokens; false otherwise.
    /// 
    public bool HasMoreTokens() {
        if (this.curIndex &lt;= (this.tokens.Count -1)) {
            return true;
        } else {
            return false;
        }
    }

    ///
    /// Method to get the next (string) token of this StringTokenizer.
    /// 
    /// A string representing the next token; null if no tokens or more tokens.
    /// 
    public string NextToken() {
        string returnString = "";
        if (this.curIndex &lt;= this.tokens.Count -1) {
            returnString = (string)tokens[curIndex];
            this.curIndex ++;
            return returnString;
        } else {
            return null;
        }
    }

    ///
    /// Gets the Source string of this StringTokenizer.
    /// 
    /// A string representing the current Source.
    /// 
    public string Source {
        get {
            return this.source;
        }
    }

    ///
    /// Gets the Delimiter string of this StringTokenizer.
    /// 
    /// A string representing the current Delimiter.
    /// 
    public string Delimeter {
        get {
            return this.delimiter;
        }
    }

    ///
    /// Gets the tokens of this StringTokenizer.
&nbsp;&nbsp;&nbsp; ///
&nbsp;&nbsp;&nbsp;&nbsp;/// 涂鸦添加此属性过程，以便调用。
    /// 
    public ArrayList Tokens {
        get {
            return this.tokens;
        }
    }
}
</pre>
<div>&nbsp;</div>
      