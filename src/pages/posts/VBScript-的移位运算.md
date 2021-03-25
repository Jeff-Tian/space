---
stackbit_url_path: >-
  posts/VBScript-的移位运算
title: 'VBScript 的移位运算'
date: '2009-11-24 14:48:53'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/11/24/VBScript-的移位运算
template: post
---

        <div style="text-indent: 2em;">
<p>在C和Java等编程语言中，可以方便地对变量进行移位运算，但是在VB中，却没有内置的移位运算符或者函数。</p>
<p>于是，我们得自己动手编写移位的运算函数。原理很简单，<strong>每向右移一位，就将被移位的变量的二进制除以2；每向左移一位，就将被移位的变量的二进制乘以2</strong>。于是可以写出以下函数：</p>
<pre class="brush: vb" style="text-indent: 0;">    '
    ' 按位左移
    '
    Public Function LShift(ByVal val, ByVal n)
        LShift = val * 2 ^ n
    End Function
    
    '
    ' 按位右移
    '
    Public Function RShift(ByVal val, Byval n) 
        RShift = val \ (2 ^ n)
    End Function
</pre>
<p>以上写的两个左移和右移函数，非常简单，没有考虑机器字长以及传过来的变量类型等。</p>
<p>后来看到在VBS的MD5加密算法中，包含左移右移的函数，在这里，将它们单独拧出来，以作为左移右移函数的升级版本：</p>
<pre class="brush: vb" style="text-indent: 0;">Private&nbsp;m_lOnBits(30)
Private&nbsp;m_l2Power(30)
 
Private&nbsp;Function&nbsp;Initialize()&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(0)&nbsp;=&nbsp;CLng(1)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(1)&nbsp;=&nbsp;CLng(3)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(2)&nbsp;=&nbsp;CLng(7)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(3)&nbsp;=&nbsp;CLng(15)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(4)&nbsp;=&nbsp;CLng(31)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(5)&nbsp;=&nbsp;CLng(63)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(6)&nbsp;=&nbsp;CLng(127)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(7)&nbsp;=&nbsp;CLng(255)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(8)&nbsp;=&nbsp;CLng(511)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(9)&nbsp;=&nbsp;CLng(1023)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(10)&nbsp;=&nbsp;CLng(2047)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(11)&nbsp;=&nbsp;CLng(4095)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(12)&nbsp;=&nbsp;CLng(8191)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(13)&nbsp;=&nbsp;CLng(16383)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(14)&nbsp;=&nbsp;CLng(32767)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(15)&nbsp;=&nbsp;CLng(65535)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(16)&nbsp;=&nbsp;CLng(131071)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(17)&nbsp;=&nbsp;CLng(262143)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(18)&nbsp;=&nbsp;CLng(524287)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(19)&nbsp;=&nbsp;CLng(1048575)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(20)&nbsp;=&nbsp;CLng(2097151)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(21)&nbsp;=&nbsp;CLng(4194303)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(22)&nbsp;=&nbsp;CLng(8388607)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(23)&nbsp;=&nbsp;CLng(16777215)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(24)&nbsp;=&nbsp;CLng(33554431)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(25)&nbsp;=&nbsp;CLng(67108863)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(26)&nbsp;=&nbsp;CLng(134217727)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(27)&nbsp;=&nbsp;CLng(268435455)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(28)&nbsp;=&nbsp;CLng(536870911)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(29)&nbsp;=&nbsp;CLng(1073741823)
&nbsp;&nbsp;&nbsp;&nbsp;m_lOnBits(30)&nbsp;=&nbsp;CLng(2147483647)
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(0)&nbsp;=&nbsp;CLng(1)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(1)&nbsp;=&nbsp;CLng(2)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(2)&nbsp;=&nbsp;CLng(4)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(3)&nbsp;=&nbsp;CLng(8)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(4)&nbsp;=&nbsp;CLng(16)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(5)&nbsp;=&nbsp;CLng(32)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(6)&nbsp;=&nbsp;CLng(64)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(7)&nbsp;=&nbsp;CLng(128)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(8)&nbsp;=&nbsp;CLng(256)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(9)&nbsp;=&nbsp;CLng(512)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(10)&nbsp;=&nbsp;CLng(1024)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(11)&nbsp;=&nbsp;CLng(2048)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(12)&nbsp;=&nbsp;CLng(4096)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(13)&nbsp;=&nbsp;CLng(8192)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(14)&nbsp;=&nbsp;CLng(16384)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(15)&nbsp;=&nbsp;CLng(32768)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(16)&nbsp;=&nbsp;CLng(65536)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(17)&nbsp;=&nbsp;CLng(131072)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(18)&nbsp;=&nbsp;CLng(262144)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(19)&nbsp;=&nbsp;CLng(524288)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(20)&nbsp;=&nbsp;CLng(1048576)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(21)&nbsp;=&nbsp;CLng(2097152)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(22)&nbsp;=&nbsp;CLng(4194304)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(23)&nbsp;=&nbsp;CLng(8388608)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(24)&nbsp;=&nbsp;CLng(16777216)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(25)&nbsp;=&nbsp;CLng(33554432)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(26)&nbsp;=&nbsp;CLng(67108864)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(27)&nbsp;=&nbsp;CLng(134217728)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(28)&nbsp;=&nbsp;CLng(268435456)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(29)&nbsp;=&nbsp;CLng(536870912)
&nbsp;&nbsp;&nbsp;&nbsp;m_l2Power(30)&nbsp;=&nbsp;CLng(1073741824)
End&nbsp;Function&nbsp;
 
Private&nbsp;Function&nbsp;LShift(lValue,&nbsp;iShiftBits)
&nbsp;&nbsp;&nbsp;&nbsp;If&nbsp;iShiftBits&nbsp;=&nbsp;0&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LShift&nbsp;=&nbsp;lValue
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exit&nbsp;Function
&nbsp;&nbsp;&nbsp;&nbsp;ElseIf&nbsp;iShiftBits&nbsp;=&nbsp;31&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If&nbsp;lValue&nbsp;And&nbsp;1&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LShift&nbsp;=&nbsp;&amp;H80000000
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Else
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LShift&nbsp;=&nbsp;0
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End&nbsp;If
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exit&nbsp;Function
&nbsp;&nbsp;&nbsp;&nbsp;ElseIf&nbsp;iShiftBits&nbsp;&lt;&nbsp;0&nbsp;Or&nbsp;iShiftBits&nbsp;&gt;&nbsp;31&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Err.Raise&nbsp;6
&nbsp;&nbsp;&nbsp;&nbsp;End&nbsp;If
 
&nbsp;&nbsp;&nbsp;&nbsp;If&nbsp;(lValue&nbsp;And&nbsp;m_l2Power(31&nbsp;-&nbsp;iShiftBits))&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LShift&nbsp;=&nbsp;((lValue&nbsp;And&nbsp;m_lOnBits(31&nbsp;-&nbsp;(iShiftBits&nbsp;+&nbsp;1)))&nbsp;*&nbsp;m_l2Power(iShiftBits))&nbsp;Or&nbsp;&amp;H80000000
&nbsp;&nbsp;&nbsp;&nbsp;Else
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LShift&nbsp;=&nbsp;((lValue&nbsp;And&nbsp;m_lOnBits(31&nbsp;-&nbsp;iShiftBits))&nbsp;*&nbsp;m_l2Power(iShiftBits))
&nbsp;&nbsp;&nbsp;&nbsp;End&nbsp;If
End&nbsp;Function
 
Private&nbsp;Function&nbsp;RShift(lValue,&nbsp;iShiftBits)
&nbsp;&nbsp;&nbsp;&nbsp;If&nbsp;iShiftBits&nbsp;=&nbsp;0&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RShift&nbsp;=&nbsp;lValue
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exit&nbsp;Function
&nbsp;&nbsp;&nbsp;&nbsp;ElseIf&nbsp;iShiftBits&nbsp;=&nbsp;31&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If&nbsp;lValue&nbsp;And&nbsp;&amp;H80000000&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RShift&nbsp;=&nbsp;1
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Else
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RShift&nbsp;=&nbsp;0
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End&nbsp;If
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exit&nbsp;Function
&nbsp;&nbsp;&nbsp;&nbsp;ElseIf&nbsp;iShiftBits&nbsp;&lt;&nbsp;0&nbsp;Or&nbsp;iShiftBits&nbsp;&gt;&nbsp;31&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Err.Raise&nbsp;6
&nbsp;&nbsp;&nbsp;&nbsp;End&nbsp;If
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;RShift&nbsp;=&nbsp;(lValue&nbsp;And&nbsp;&amp;H7FFFFFFE)&nbsp;\&nbsp;m_l2Power(iShiftBits)
 
&nbsp;&nbsp;&nbsp;&nbsp;If&nbsp;(lValue&nbsp;And&nbsp;&amp;H80000000)&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RShift&nbsp;=&nbsp;(RShift&nbsp;Or&nbsp;(&amp;H40000000&nbsp;\&nbsp;m_l2Power(iShiftBits&nbsp;-&nbsp;1)))
&nbsp;&nbsp;&nbsp;&nbsp;End&nbsp;If
End&nbsp;Function
</pre>
<p>另外，在此基础上再添加两个位运算函数：循环左移和无符号数的加法运算。</p>
<pre class="brush: vb" style="text-indent: 0;">Private&nbsp;Function&nbsp;RotateLeft(lValue,&nbsp;iShiftBits)
&nbsp;&nbsp;&nbsp;&nbsp;RotateLeft&nbsp;=&nbsp;LShift(lValue,&nbsp;iShiftBits)&nbsp;Or&nbsp;RShift(lValue,&nbsp;(32&nbsp;-&nbsp;iShiftBits))
End&nbsp;Function
 
Private&nbsp;Function&nbsp;AddUnsigned(lX,&nbsp;lY)
&nbsp;&nbsp;&nbsp;&nbsp;Dim&nbsp;lX4
&nbsp;&nbsp;&nbsp;&nbsp;Dim&nbsp;lY4
&nbsp;&nbsp;&nbsp;&nbsp;Dim&nbsp;lX8
&nbsp;&nbsp;&nbsp;&nbsp;Dim&nbsp;lY8
&nbsp;&nbsp;&nbsp;&nbsp;Dim&nbsp;lResult
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;lX8&nbsp;=&nbsp;lX&nbsp;And&nbsp;&amp;H80000000
&nbsp;&nbsp;&nbsp;&nbsp;lY8&nbsp;=&nbsp;lY&nbsp;And&nbsp;&amp;H80000000
&nbsp;&nbsp;&nbsp;&nbsp;lX4&nbsp;=&nbsp;lX&nbsp;And&nbsp;&amp;H40000000
&nbsp;&nbsp;&nbsp;&nbsp;lY4&nbsp;=&nbsp;lY&nbsp;And&nbsp;&amp;H40000000
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;lResult&nbsp;=&nbsp;(lX&nbsp;And&nbsp;&amp;H3FFFFFFF)&nbsp;+&nbsp;(lY&nbsp;And&nbsp;&amp;H3FFFFFFF)
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;If&nbsp;lX4&nbsp;And&nbsp;lY4&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lResult&nbsp;=&nbsp;lResult&nbsp;Xor&nbsp;&amp;H80000000&nbsp;Xor&nbsp;lX8&nbsp;Xor&nbsp;lY8
&nbsp;&nbsp;&nbsp;&nbsp;ElseIf&nbsp;lX4&nbsp;Or&nbsp;lY4&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If&nbsp;lResult&nbsp;And&nbsp;&amp;H40000000&nbsp;Then
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lResult&nbsp;=&nbsp;lResult&nbsp;Xor&nbsp;&amp;HC0000000&nbsp;Xor&nbsp;lX8&nbsp;Xor&nbsp;lY8
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Else
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lResult&nbsp;=&nbsp;lResult&nbsp;Xor&nbsp;&amp;H40000000&nbsp;Xor&nbsp;lX8&nbsp;Xor&nbsp;lY8
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End&nbsp;If
&nbsp;&nbsp;&nbsp;&nbsp;Else
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lResult&nbsp;=&nbsp;lResult&nbsp;Xor&nbsp;lX8&nbsp;Xor&nbsp;lY8
&nbsp;&nbsp;&nbsp;&nbsp;End&nbsp;If
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;AddUnsigned&nbsp;=&nbsp;lResult
End&nbsp;Function
</pre>
</div>
      