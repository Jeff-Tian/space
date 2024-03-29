---
stackbit_url_path: >-
  posts/ASP版ArrayList类
title: 'ASP版ArrayList类'
date: '2010-04-04 17:58:53'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/04/ASP版ArrayList类
template: post
---

        <p>一个ASP版的ArrayList类，写得很好。</p>
<p>我今天为了找到它，在网上的搜索结果里，往后翻了n页！因为排在前面的，全是垃圾站，贴出来的代码已经不成样子，很多ASP中的关键字符如注释的单引号等，都显示成了&amp;quot;等之类的HTML转义标签。粘贴到项目中，根本无法直接使用，还需要大量的查找替换操作。</p>
<p>我不理解为什么质量好的网站都排到后面去了？为了省去后来者再搜索此ArrayList类时，需要大量翻页的痛苦，我在我的这篇文章里放上一个格式良好的版本，因为我的博文往往是靠前的。</p>
<pre class="brush: vb">&lt;%
'/******************************
'类名：CArrayList
'名称：数组操作类
'日期：2007-11-6
'作者：西楼冷月
'网址：www.xilou.net | www.chinaCMS.org
'描述：对数组的各种操作
'版权：转载请注名出处，作者
'******************************
'最后修改：2007-11-6
'修改次数：0
'修改说明：
'目前版本：v1.0
'******************************/
Class CArrayList
        Private arrList'//内部数组
    Private arrLength'//记录数组的长度
    
    Private Sub Class_Initialize()
        arrList=Array()
        arrLength=0
    End Sub
    
    Private Sub Class_Terminate()
        Erase arrList
        End Sub
    
    '//数组长度,只读
    Public Property Get Length
        Length=arrLength
    End Property
    
    '//取得某个索引的值
    Public Function GetValue(index)
        On Error Resume Next
        GetValue=arrList(index)
        If Err Then showErr "ArrayList.GetValue()"&amp;Err.Description:Err.Clear:Exit Function
    End Function
    
        '//返回整个Array数组
        Public Function GetArray()
        GetArray=arrList
    End Function
    
    '//添加元素,将值添加到ArrayList的结尾处
    Public Sub Add(v)
            ReDim Preserve arrList(arrLength)
        arrList(arrLength)=v
        arrLength=arrLength+1
    End Sub
    '//将数组添加到ArrayList的结尾处
    Public Sub AddArray(arr)
        If Not IsArray(arr) Then showErr "参数不是数组(arr):ArrayList.AddArray()":Exit Sub
        Dim I,L,J
        On Error Resume Next
            If arrLength = 0 Then '//如果ArrayList为空则直接附值
            arrList=arr
            arrLength=arrLength+UBound(arr)+1
        Else
                L=arrLength+UBound(arr)'//新的数组长度
            J=0
                ReDim Preserve arrList(L)
            For I = arrLength To L
                arrList(I)=arr(J)
                J=J+1
            Next
            arrLength=arrLength+UBound(arr)+1
        End If
        If Err Then showErr "ArrayList.AddArray()"&amp;Err.Description:Err.Clear:Exit Sub
        
    End Sub
    '//将元素插入ArrayList的指定index索引处,原有的arrList(index)及后面的元素都往后排
    Public Sub Insert(index,v)
        Dim I,v2
        If index&lt;arrLength And index&gt;=0 Then
            ReDim Preserve arrList(arrLength)
        arrLength=arrLength+1
        For I = index To arrLength - 1
            v2=arrList(I)'//交换值
            arrList(I)=v
            v=v2
        Next
        Else
                showErr "下标越界:ArrayList.Insert()"
        End If
    End Sub
    '//将一组数组插入到指定的index处
    Public Sub InsertArray(index,arr)
        If index = "" Or Not IsNumeric(index) Then 
            showErr "非法的参数:ArrayList.InsertArray()":Exit Sub
        End If
        If index &lt; 0 Or index &gt; arrLength-1 Then
            showErr "下标越界:ArrayList.InsertArray()":Exit Sub
        End If
        If Not IsArray(arr) Then showErr "参数不是数组:ArrayList.InsertArray()":Exit Sub
        Dim I,L1,L2,J:J=0
        On Error Resume Next
        L1=UBound(arr)
        L2=arrLength+L1
        ReDim Preserve arrList(L2)
        For I = arrLength -1 To index Step -1
            arrList(I+L1+1)=arrList(I)'//把index之后的值往后移
        Next
        For I = index To index+L1
            arrList(I)=arr(J)
        J=J+1
        Next
        If Err Then showErr "ArrayList.InsertArray()"&amp;Err.Description:Err.Clear:Exit Sub
        arrLength=arrLength+L1+1'//新的数组长度
    End Sub
    '//更新数组中索引为index的对应值
    '//by xilou 39949376
    Public Sub Update(index,v)
        If index = "" Or Not IsNumeric(index) Then 
            showErr "非法的参数(index):ArrayList.Update()":Exit Sub
        End If
        If index &lt; 0 Or index &gt; arrLength-1 Then
            showErr "下标越界(index):ArrayList.Update()":Exit Sub
        End If
        arrList(index)=v
    End Sub
    
    '//从ArrayList中删除第一个匹配项,注意是第一个,将会得到一新的数组
    Public Sub Remove(v)
        Dim I,index
        index = -1 '//第一个匹配的索引
        For I = 0 To arrLength - 1
            If arrList(I)=v Then index = I : Exit For
        Next
        If index &lt;&gt; -1 Then
            For I = index To arrLength - 2
            arrList(I) = arrList(I+1)'//值向前填充
        Next
        ReDim Preserve arrList(arrLength-1)'//收缩数组
        arrLength = arrLength - 1
        End If
    End Sub
    '//移除ArrayList的指定索引处的元素,将会得到一新的数组
    Public Sub RemoveAt(index)
        If index = "" Or Not IsNumeric(index) Then 
            showErr "非法的参数(index):ArrayList.RemoveAt()":Exit Sub
        End If
        If index &lt; 0 Or index &gt; arrLength-1 Then
            showErr "下标越界(index):ArrayList.RemoveAt()":Exit Sub
        End If
        If index &gt; 0 Then
            For I = index To arrLength - 2
            arrList(I) = arrList(I+1)'//值向前填充
            Next
            ReDim Preserve arrList(arrLength-1)'//收缩数组
            arrLength = arrLength - 1
        End If
    End Sub
    '//从一个数组中移除从索引m到索引n的一段元素,并返回这段移除的数组
    Public Function Splice(m,n)
        If m = "" Or n = "" Or Not IsNumeric(m) Or Not IsNumeric(n) Then 
            showErr "非法的参数(m,n):ArrayList.Splice()":Exit Function
        End If
        If m &lt; 0 Or m &gt; arrLength-1 Or n &lt; 0 Or n &gt; arrLength-1 Then
            showErr "下标越界(m,n):ArrayList.Splice()":Exit Function
        End If
        Dim newArr,x,L,I,J
        newArr=Array()
        If m &gt; n Then x=m:m=n:n=x '//交换数值
        L=n-m
        ReDim Preserve newArr(L)
        For I = m To n
            newArr(J)=arrList(I)'要移除的元素
        J=J+1
        Next
        '//把n后面的元素的值移前
        For I = (n+1) To arrLength -1
            arrList(I-L-1)=arrList(I)
        Next
        arrLength=arrLength-L-1
        ReDim Preserve arrList(arrLength)
        Splice=newArr
    End Function
    '//清空数组,数组将变为空,长度Length=0
    Public Sub Clear()
        Erase arrList
        arrLength=0
    End Sub
    '//将整个 ArrayList 中元素的顺序反转
    Public Sub Reverse()
        Dim L,I,J,v
        J=arrLength-1
            If arrLength &gt; 0 Then
            L=Int(arrLength/2)
        For I = 0 To L-1
            v=arrList(I)
            arrList(I)=arrList(J)
            arrList(J)=v
            J=J-1
        Next
        End If
    End Sub
    '//返回字符串值，其中包含了连接到一起的数组的所有元素，元素由指定的分隔符分隔开来
    Public Function Implode(separator)
        Implode=Join(arrList,separator)
    End Function
    '//返回ArrayList从m到n的一段数组
    Public Function Slice(m,n)
        If m = "" Or n = "" Or Not IsNumeric(m) Or Not IsNumeric(n) Then 
            showErr "非法的参数:ArrayList.Slice()":Exit Function
        End If
        If m &lt; 0 Or m &gt; arrLength-1 Or n &lt; 0 Or n &gt; arrLength-1 Then
            showErr "下标越界:ArrayList.Slice()":Exit Function
        End If
        Dim I,J,newArr()
        J=0
        If m&lt;=n Then
            ReDim Preserve newArr(n-m)
        For I = m To n
            newArr(J)=arrList(I)
            J=J+1
        Next
        Else
            ReDim Preserve newArr(m-n)
        For I = n To m
            newArr(J)=arrList(I)
            J=J+1
        Next
        End If
        Slice=newArr
        Erase newArr
    End Function
    
    '//查找,返回ArrayList第一个匹配项的从零开始的索引。没找到返回-1。
    '//by xilou 39949376
    Public Function IndexOf(v)
        Dim I
        For I = 0 To arrLength - 1
        If arrList(I)=v Then IndexOf=I:Exit Function
        Next
        IndexOf=-1
    End Function
    '//返回ArrayList的最后一个匹配项的从零开始的索引。没找到返回-1。
    Public Function LastIndexOf(v)
        Dim I
        If arrLength=0 Then
            LastIndexOf=-1:Exit Function
        Else
            For I = (arrLength-1) To 0 Step -1
            If arrList(I)=v Then LastIndexOf=I:Exit Function
            Next
        End If
        LastIndexOf=-1
    End Function
    
    '//显示错误
    Private Sub showErr(errInfo)
        Response.Write "&lt;div id=""ERRORINFO"" style=""font-size:12px;color:#990000;font-family:""新宋体"", Arial""&gt;"
        Response.Write errInfo
        Response.Write "&lt;/div&gt;"
        Response.End()
    End Sub
End Class
%&gt;
</pre>
      