---
stackbit_url_path: >-
  posts/VB中的几种打印方法-
title: 'VB中的几种打印方法  '
date: '2010-03-05 08:12:49'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/05/VB中的几种打印方法-
template: post
---

        <p><style type="text/css">
<!--
ol li {
    margin: 1em 0;
}
-->
</style></p>
<div style="text-indent: 2em; font-size: larger;">
<p>此文章摘自：<a href="http://zhidao.baidu.com/question/91845529.html">http://zhidao.baidu.com/question/91845529.html</a></p>
<h2>VB中的几种打印方法</h2>
<ol style="text-indent: 0;">
    <li>&nbsp;采用Visual Basic 提供的简单打印函数PrintForm 方法。应用程序窗体的PrintForm 方法时，Visual Basic 把窗体的位图送到当前打印机。该方法的优点在于它几乎不需要任何编程，但也有很大缺陷。最为突出的是当低分辨率图形在高分辨率打印机上打印时，其结果令人无法满意，会产生锯齿。下面代码将在打印机上打印窗体。
    <pre class="brush: vb">Private Sub Command1_Click() ' 用PrintForm 打印 
    Me.PrintForm ' 打印窗体的可见区域 
End Sub </pre>
    </li>
    <li>用Printer 对象进行高分辨率输出。但要想产生复杂的打印输出，编程较为烦琐。Printer 对象代表系统缺省的打印机，Printer 对象支持许多由窗体和图形框所支持的属性和方法，三种对象都有画线和画方框。应用程序可用以下代码在Printer 对象上画出一平方英寸的方框。它离左上角二英寸。注意：打印机以twips 来测量距离。每英寸有1440 个twips。
    <pre class="brush: vb">Printer.Line(2 *1440,2 *1440) －Step(1440,1440), ,B 
</pre>
    打印机、从窗体和图形框都有Circle、PaintPicture、Print、Pset、TextHeight、TextWidth 方法。使用这些方法，应用程序可以为打印机生成高分辨率输出。  打印文本直接用Print 方法，见下列代码：
    <pre class="brush: vb">Printer.Print "Hello,China ComputerWorld!" ' 打印字符串 
</pre>
    Printer 对象还有一些窗体和图形框都没有的方法：
    <ul>
        <li>NewPage 告诉打印机，程序对当前输出页的发送已经结束，Printer 对象应开始新的一页。</li>
        <li>EndDoc 告诉VB，程序创建文档结束，VB 应将它发送到物理打印机上打印。</li>
        <li>KillDoc 取消当前打印作业。应用程序应该终止由EndDoc 和KillDoc 所设定的每个打印作业。</li>
        <li>Zoom 属性用于定义打印输出的缩放因子。</li>
        <li>Copies 属性用于定义打印的副本数目。</li>
    </ul>
    </li>
    <li>采用直接将数据传送打印机的方法进行打印输出。有两种方法将数据送往打印机。第一种是用Print ＃方法，就像将数据写入一个文件一样。另一种方法写端口，但不是送文本，而是送特定的PCL 语言，PCL 表示打印控制语言，它是一种特殊语言，用转义代码来控制打印机的具体动作。因为此方法太烦琐，本文不做太多介绍。</li>
    <li>如果你在编程时用到了RichTextBox 控制，那么你可以使用该控件的SelPrint 方法来打印，使用非常简单。下面一段代码即用RichTextBox 控件的SelPrint 方法来完成打印。
    <pre class="brush: vb">Private Sub Command3_Click() 'SelPrint 方法 
    CommonDialog1.Flags=cdlPDReturnDC ＋cdlPDNoPageNums 
    If RTF1.SelLength = 0 Then 
        'RTF1 为窗体的RichTextBox 控制 
        CommonDialog1.Flags = CommonDialog1.Flags ＋cdlPDAllPages 
    Else 
        CommonDialog1.Flags = CommonDialog1.Flags ＋ cdlPDSelection 
    End If 
    CommonDialog1.CancelError = True 
    On Error Resume Next 
        CommonDialog1.ShowPrinter 
        If Err.Number = cdlCancel Then Exit Sub 
        If Err.Number &lt;&gt; 0 Then 
            Beep 
            MsgBox "Error printing file."  ＆vbCrLf ＋Err.Description, vbOKOnly ＋vbExclamation,  “Printing Error!" 
            Exit Sub 
        End If 
        Printer.Print "" 
        RTF1.SelPrint CommonDialog1.hDC ' 打印RTF1 控件的可见区域 
End Sub 
</pre>
    上面代码先进行打进设置，再进行打印。如果不需要设置，采用下面代码更为简单:
    <pre class="vb">RTF1.SelPrint Printer.hDC  ' 打印RTF1 控件的可见区域 
</pre>
    </li>
    <li>可以在VB 中调用Word 97 提供的OLE 自动化服务，利用Word 97 强大的打印功能来完成VB 打印，笔者认为这是最令人满意的方法。下面代码说明VB 如何与Word 集成。
    <pre class="brush: vb">Private Sub Command4_Click() ' 调用Word 打印 
    Dim objWord As Object 
    Const CLASSOBJECT = "Word.Application" 
    On Error GoTo objError 
    Set objWord = CreateObject(CLASSOBJECT) 
    objWord.Visible = True 
    objWord.Documents.Add 
    With objWord 
        .ActiveDocument.Paragraphs.Last.Range.Bold = False 
        .ActiveDocument.Paragraphs.Last.Range.Font.Size =20 
        .ActiveDocument.Paragraphs.Last.Range.Font.Name = "黑体" 
        .ActiveDocument.Paragraphs.Last.Range.Font.ColorIndex==4 
        .ActiveDocument.Paragraphs.Last.Range.Text = "我是计算机世界读者!" 
    End With 
    Clipboard.Clear 
    Clipboard.SetText "通过剪切板向WORD 传送数据!" 
    objWord.Selection.Paste 
    objWord.PrintPreview = True ' 预览方式 
    objWord.PrintOut' 执行打印 
    objWord.Quit' 退出Word 
    Exit Sub 
objError: 
    If Err &lt;&gt; 429 Then 
        MsgBox Str ＄(Err) ＆Error ＄ 
        Set objWord = Nothing 
        ' 不能创建Word 对象则退出 
        Exit Sub 
    Else 
        Resume Next 
    End If 
End Sub 
</pre>
    </li>
</ol>
</div>
      