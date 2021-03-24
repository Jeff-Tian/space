---
stackbit_url_path: >-
  posts/用EXCEL-VBA-计算一组数据的自相关函数和偏自相关函数
title: '用EXCEL VBA 计算一组数据的自相关函数和偏自相关函数'
date: '2009-11-11 07:45:58'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>示例欢迎通过以下网址下载:<br>
<u><a href="http://www.myfootprints.cn/OldWeb/blog/upload/ACF_PACF.xls"><font color="#0240a3">http://www.myfootprints.cn/blog/upload/ACF_PACF.xls</font></a></u></p>
<div>
<p dir="ltr">以下是vba 模块：</p>
<p><strong>注：</strong>传入ACF()函数的参数必须是已经中心化后的数组。而传入PACF()函数的参数是由ACF()函数计算出来的数组序列。</p>
<p>使用中心化后的相同的数据在本Excel文件中和在SAS软件中计算的结果是一致的。</p>
<p>如：下载后示例文件后，将如下数据在SAS软件中计算其自相关函数与偏自相关函数：</p>
<div style="text-indent: 0;">
<pre style="text-indent: 0;">-5.552941176
-3.352941176
-1.552941176
-4.152941176
-1.552941176
-4.152941176
-3.152941176
-2.152941176
-1.152941176
-0.152941176
0.847058824
1.847058824
2.847058824
3.847058824
4.847058824
5.847058824
6.847058824
</pre>
</div>
<p>SAS 程序为：</p>
<div style="text-indent: 0;">
<pre class="brush: c" style="text-indent: 0;">data mydata;
input x;
cards;
-5.552941176
-3.352941176
-1.552941176
-4.152941176
-1.552941176
-4.152941176
-3.152941176
-2.152941176
-1.152941176
-0.152941176
0.847058824
1.847058824
2.847058824
3.847058824
4.847058824
5.847058824
6.847058824
;
run;

proc arima;
identify var = x nlag = 864 outcov = out1;
run;
</pre>
</div>
<p style="margin-right: 0px" dir="ltr">计算自相关函数的的自定义函数是acf()，偏自关函数是pacf()，它们的参数都是一组数据，而这组数据来自excel中的单元格范围，故它们都调用了一个函数，用来将excel的单元格范围转化成一个数组，这个函数就是range2array()。</p>
<p style="margin-right: 0px" dir="ltr">range2array()的算法很简单，用for each循环将range中的每一个数字逐个填充到预先定义好的array()中。而这个array()的大小，与range中的单元格数相同。</p>
<p style="margin-right: 0px" dir="ltr">acf()的算法，即是根据样本自相关函数的定义而实现的。即</p>
<p style="margin-right: 0px" dir="ltr"><img alt="" src="http://www.zizhujy.com/blog/image.axd?picture=image_420.png"></p>
<p style="margin-right: 0px" dir="ltr">而pacf()的算法，也是根据偏自相关函数的定义来的。即</p>
<p style="margin-right: 0px" dir="ltr"><img alt="" src="http://www.zizhujy.com/blog/image.axd?picture=image_421.png"></p>
<p style="margin-right: 0px" dir="ltr">在pacf()中，先根据输入的参数数组，分别得到分母矩阵和分子矩阵，然后分别对分母矩阵和分子矩阵求行列式值。最后相除即可。</p>
<p style="margin-right: 0px" dir="ltr">分母矩阵实际上是一个对称矩阵，而且观察后可以发现有这样的规律，即，<strong>每个元素的下标，都是其行列号的差的绝对值</strong>。</p>
<p style="margin-right: 0px" dir="ltr">而分子矩阵，除了最后一列，其他的元素都与分母矩阵相同。</p>
</div>
<div style="text-indent: 0;">
<pre class="brush: vb" style="text-indent: 0;">Option Explicit
'Option Private Module

''''''''''''''''''''''''''''''''''
' 计算列数据的自相关函数
'
''''''''''''''''''''''''''''''''''
Public Function ACF(ByRef rng As Range, ByVal k As Long) As Double
    Dim dDenominator As Double
    Dim dNumerator As Double
    Dim daX() As Variant
    Dim i As Long
    Dim lUB As Long, lLB As Long
    
    daX = Range2Array(rng)
    
    '计算分子
    dNumerator = 0
    lUB = UBound(daX)
    lLB = LBound(daX)
    For i = lLB + k To lUB
        dNumerator = dNumerator + daX(i) * daX(i - k)
    Next i
    
    '计算分母
    dDenominator = 0
    For i = lLB To lUB
        dDenominator = dDenominator + daX(i) * daX(i)
    Next i
    
    ACF = dNumerator / dDenominator
End Function

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' 计算列数据的偏自相关函数
'
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Public Function PACF(ByRef rng As Range, ByVal k As Long) As Double
    Dim dDenominator As Double
    Dim dNumerator As Double
    Dim dMatrixDenominator() As Double
    Dim dMatrixNumerator() As Double
    Dim vArray() As Variant
    Dim i As Long, j As Long
    Dim sString As String
    
    vArray = Range2Array(rng, 1)
    vArray(LBound(vArray)) = 1
    
    ReDim dMatrixDenominator(0 To k - 1, 0 To k - 1)
    ReDim dMatrixNumerator(0 To k - 1, 0 To k - 1)
    
    '生成分母矩阵
'    sString = "分母矩阵:" &amp; vbCrLf
    
    For i = 0 To k - 1
        For j = 0 To k - 1
            dMatrixDenominator(i, j) = CDbl(vArray(Abs(i - j)))
'            sString = sString &amp; dMatrixDenominator(i, j) &amp; vbTab
        Next j
'        sString = sString &amp; vbCrLf
    Next i
'    Debug.Print sString
    
    '生成分子矩阵
    For i = 0 To k - 1
        For j = 0 To k - 2
            dMatrixNumerator(i, j) = CDbl(vArray(Abs(i - j)))
        Next j
    Next i
    For i = 0 To k - 1
        dMatrixNumerator(i, k - 1) = CDbl(vArray(i + 1))
    Next i
    
'    sString = "分子矩阵:" &amp; vbCrLf
'    For i = 0 To k - 1
'        For j = 0 To k - 1
'            sString = sString &amp; dMatrixNumerator(i, j) &amp; vbTab
'        Next j
'        sString = sString &amp; vbCrLf
'    Next i
'    Debug.Print sString
    
    '计算PACF(k,k)
    PACF = Application.WorksheetFunction.MDeterm(dMatrixNumerator) / Application.WorksheetFunction.MDeterm(dMatrixDenominator)
End Function

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' 求和
'
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Public Function SigmaSum(ByRef rng As Range, ByVal lBegin As Long, ByVal lEnd As Long, ByVal power As Double) As Double
    SigmaSum = 0
    
    Dim i As Long
    
    For i = lBegin To lEnd
        SigmaSum = SigmaSum + CDbl(rng.Cells(i).Value) ^ power
    Next i
End Function

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' 将Range转换成数组 (变体型)
'
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Private Function Range2Array(ByRef rng As Range, Optional ByVal lOffset As Long = 0) As Variant()
    Dim vaRet() As Variant
    Dim i As Long
    Dim rngCell As Range
    
    ReDim vaRet(0 To rng.Cells.Count - 1)
    i = lOffset
    For Each rngCell In rng
        vaRet(i) = rngCell.Value
        If i &gt;= UBound(vaRet) Then
            Exit For
        End If
        i = i + 1
    Next rngCell
    
    Range2Array = vaRet
End Function

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' 将Range转换成数组 (双精度型)
'
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Private Function Range2ArrayDouble(ByRef rng As Range) As Double()
    Dim daRet() As Double
    Dim i As Long
    Dim rngCell As Range
    
    ReDim vaRet(0 To rng.Cells.Count - 1)
    i = 0
    For Each rngCell In rng
        On Error Resume Next
        daRet(i) = CDbl(rngCell.Value)
        If Err.Number &lt;&gt; 0 Then
            daRet(i) = 0
            Err.Clear
        End If
        i = i + 1
    Next rngCell
    
    Range2ArrayDouble = daRet
End Function
</pre>
</div>
<p>&nbsp;</p>
<p>示例文件：<a target="_blank" href="http://www.myfootprints.cn/OldWeb/blog/upload/ACF_PACF.xls">ACF_PACF.xls</a></p>
</div>
      