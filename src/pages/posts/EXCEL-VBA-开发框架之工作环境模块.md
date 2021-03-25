---
stackbit_url_path: >-
  posts/EXCEL-VBA-开发框架之工作环境模块
title: 'EXCEL VBA 开发框架之工作环境模块'
date: '2009-12-09 14:12:30'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/12/09/EXCEL-VBA-开发框架之工作环境模块
template: post
---

        <div style="text-indent: 2em;"><p>这个模块(MWorkspace.bas)主要用来配置EXCEL VBA独立应用程序的环境，摘抄自《Excel专业开发》，分享下，也备自己不时之需。</p>
<p>其中有一些常量或者函数是定义在其他模块文件中的，使用时需要自己定义。如 gsREG_XL_ENV 就是定义在MGlobals.bas中。</p>
<pre class="brush: vb" style="text-indent: 0;">'
' Description:  This module holds code to save and restore the Excel workspace.
'
' Authors:      Stephen Bullen, www.oaltd.co.uk
'               Rob Bovey, www.appspro.com
'
' Chapter Change Overview
' Ch#   Comment
' --------------------------------------------------------------
' 06    Initial version
' 07    Kill the application event handler at shutdown
' 08    Adding the commandbar builder meant a change in a procedure name
'       Moved code to re-enable toolbars here from the old ResetMenus
' 09    Added call to SetIcon in new MAPIWrappers module
'
Option Explicit
Option Private Module
 
 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Store the Excel workspace settings in the Registry
'
' Arguments:    None
'
' Date          Developer       Chap    Action
' --------------------------------------------------------------
' 02 Jun 04     Stephen Bullen  Ch06    Initial version
'
Sub StoreExcelSettings()
 
    Dim cbBar As CommandBar
    Dim sBarNames As String
    Dim objTemp As Object
    Dim wkbTemp As Workbook
 
    'Some properties require a workbook open, so create one
    If ActiveWorkbook Is Nothing Then Set wkbTemp = Workbooks.Add
 
    'Write a value to indicate that the settings have been stored.
    SaveSetting gsREG_APP, gsREG_XL_ENV, "Stored", "Yes"
 
    'Store the current Excel settings in the registry,
    'for safe crash-recovery
    With Application
 
        SaveSetting gsREG_APP, gsREG_XL_ENV, "DisplayStatusBar", CStr(.DisplayStatusBar)
        SaveSetting gsREG_APP, gsREG_XL_ENV, "DisplayFormulaBar", CStr(.DisplayFormulaBar)
        SaveSetting gsREG_APP, gsREG_XL_ENV, "Calculation", CStr(.Calculation)
        SaveSetting gsREG_APP, gsREG_XL_ENV, "IgnoreRemoteRequests", CStr(.IgnoreRemoteRequests)
        SaveSetting gsREG_APP, gsREG_XL_ENV, "Iteration", CStr(.Iteration)
        SaveSetting gsREG_APP, gsREG_XL_ENV, "MaxIterations", CStr(.MaxIterations)
 
        'Which commandbars are visible
        For Each cbBar In .CommandBars
            If cbBar.Visible Then sBarNames = sBarNames &amp; "," &amp; cbBar.Name
        Next
        SaveSetting gsREG_APP, gsREG_XL_ENV, "VisibleCommandBars", sBarNames
 
        'Special items for Excel 2000 and up
        If Val(.Version) &gt;= 9 Then
            SaveSetting gsREG_APP, gsREG_XL_ENV, "ShowWindowsInTaskbar", CStr(.ShowWindowsInTaskbar)
        End If
 
        'Special items for Excel 2002 and up
        If Val(.Version) &gt;= 10 Then
            Set objTemp = .CommandBars
            SaveSetting gsREG_APP, gsREG_XL_ENV, "DisableAskAQuestion", CStr(objTemp.DisableAskAQuestionDropdown)
            SaveSetting gsREG_APP, gsREG_XL_ENV, "AutoRecover", CStr(.AutoRecover.Enabled)
        End If
    End With
 
    If Not wkbTemp Is Nothing Then wkbTemp.Close False
 
End Sub
 
 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Restore the Excel workspace settings, reading them
'           from the Registry
'
' Arguments:    None
'
' Date          Developer       Chap    Action
' --------------------------------------------------------------
' 02 Jun 04     Stephen Bullen  Ch06    Initial version
' 02 Jun 04     Stephen Bullen  Ch07    Kill the event handler at shutdown
' 03 Jun 04     Stephen Bullen  Ch08    Renamed RestoreMenus to ResetCommandBars and moved re-enabling toolbars to here
'
Sub RestoreExcelSettings()
 
    Dim vKey As Variant
    Dim vBarName As Variant
    Dim objTemp As Object
    Dim cbCommandbar As CommandBar
 
    'Kill our event handler
    Set gclsEventHandler = Nothing
 
    'Restore the original Excel settings from the registry
    With Application
 
        'Ch08+
        'Ensure all menus are enabled
        EnableDisableMenus gsCONTEXT_ENABLE_ALL
 
        'Enable all the toolbars
        On Error Resume Next
        For Each cbCommandbar In .CommandBars
            cbCommandbar.Enabled = True
        Next
        On Error GoTo 0
 
        'Restore the Excel menus
        ResetCommandBars
        'Ch08-
 
        'Check that we have some settings to restore
        If GetSetting(gsREG_APP, gsREG_XL_ENV, "Stored", "No") = "Yes" Then
 
            .DisplayStatusBar = CBool(GetSetting(gsREG_APP, gsREG_XL_ENV, "DisplayStatusBar", CStr(.DisplayStatusBar)))
            .DisplayFormulaBar = CBool(GetSetting(gsREG_APP, gsREG_XL_ENV, "DisplayFormulaBar", CStr(.DisplayFormulaBar)))
            .IgnoreRemoteRequests = CBool(GetSetting(gsREG_APP, gsREG_XL_ENV, "IgnoreRemoteRequests", CStr(.IgnoreRemoteRequests)))
            .Calculation = CLng(GetSetting(gsREG_APP, gsREG_XL_ENV, "Calculation", CStr(.Calculation)))
            .Iteration = CBool(GetSetting(gsREG_APP, gsREG_XL_ENV, "Iteration", CStr(.Iteration)))
            .MaxIterations = CLng(GetSetting(gsREG_APP, gsREG_XL_ENV, "MaxIterations", CStr(.MaxIterations)))
 
            'Show the correct toolbars
            On Error Resume Next
            For Each vBarName In Split(GetSetting(gsREG_APP, gsREG_XL_ENV, "VisibleCommandBars"), ",")
                Application.CommandBars(vBarName).Visible = True
            Next
            On Error GoTo 0
 
            'Specific stuff for Excel 2000 and up
            If Val(.Version) &gt;= 9 Then
                .ShowWindowsInTaskbar = CBool(GetSetting(gsREG_APP, gsREG_XL_ENV, "ShowWindowsInTaskbar", CStr(.ShowWindowsInTaskbar)))
            End If
 
            'Specific stuff for Excel 2002 and up
            If Val(.Version) &gt;= 10 Then
                Set objTemp = .CommandBars
                objTemp.DisableAskAQuestionDropdown = CBool(GetSetting(gsREG_APP, gsREG_XL_ENV, "DisableAskAQuestion", CStr(objTemp.DisableAskAQuestionDropdown)))
                .AutoRecover.Enabled = CBool(GetSetting(gsREG_APP, gsREG_XL_ENV, "AutoRecover", CStr(.AutoRecover.Enabled)))
            End If
        End If
 
        'Reenable the shortcut keys we disabled
        If IsArray(gvaKeysToDisable) Then
            For Each vKey In gvaKeysToDisable
                .OnKey vKey
            Next
        End If
    End With
 
    'Unprotect the backdrop workbook, if it still exists
    If WorkbookAlive(gwbkBackDrop) Then
        gwbkBackDrop.Unprotect
        gwbkBackDrop.Saved = True
    End If
 
End Sub
 
 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Configure the Excel workspace for our application
'
' Arguments:    None
'
' Date          Developer       Chap    Action
' --------------------------------------------------------------
' 02 Jun 04     Stephen Bullen  Ch06    Initial version
' 03 Jun 04     Stephen Bullen  Ch08    Moved menu OnKey assignments to here
'                                       Moved toolbar hiding to here
' 03 Jun 04     Stephen Bullen  Ch09    Added call to SetIcon in new MAPIWrappers module
 
Sub ConfigureExcelEnvironment()
 
    Dim objTemp As Object
    Dim vKey As Variant
    Dim cbCommandbar As CommandBar
 
    With Application
        'Set the Application properties we want
        .Caption = gsAPP_TITLE
        .DisplayStatusBar = True
        .DisplayFormulaBar = False
        .Calculation = xlManual
 
        .DisplayAlerts = False
        .IgnoreRemoteRequests = True
        .DisplayAlerts = True
 
        .Iteration = True
        .MaxIterations = 100
 
        'Specific items for Excel 2000 and up
        If Val(.Version) &gt;= 9 Then
            .ShowWindowsInTaskbar = False
        End If
 
        'Specific items for Excel 2002 and up
        If Val(.Version) &gt;= 10 Then
            Set objTemp = .CommandBars
            objTemp.DisableAskAQuestionDropdown = True
            objTemp.DisableCustomize = True
            .AutoRecover.Enabled = False
        End If
 
        'We'll have slighly different environment states, depending on whether we're debugging or not
        If gbDEBUGMODE Then
            ' Since we have blitzed the environment, we should set a hot key combination to restore it.
            ' That key combination is Shift+Ctrl+R
            .OnKey "+^R", "RestoreExcelSettings"
        Else
            'Make sure the VBE isn't visible
            On Error Resume Next
            .VBE.MainWindow.Visible = False
            On Error GoTo 0
 
            'Disable a whole host of shortcut keys
            For Each vKey In gvaKeysToDisable
                .OnKey vKey, ""
            Next
        End If
 
        'Ch08+
        'Hide all the toolbars
        On Error Resume Next
        For Each cbCommandbar In Application.CommandBars
            cbCommandbar.Visible = False
            cbCommandbar.Enabled = False
        Next
        On Error GoTo 0
 
        'Set up keyboard equivalents for some key menu items
'        .OnKey "^N", "MenuFileNew"
'        .OnKey "^n", "MenuFileNew"
'        .OnKey "^O", "MenuFileOpen"
'        .OnKey "^o", "MenuFileOpen"
    End With
 
    'Ch09
    SetIcon ApphWnd, ThisWorkbook.Path &amp; "\" &amp; gsICON_FILE
 
End Sub
 
 
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Comments: Copies the backdrop workbook from the addin to a
'           new workbook and configures it
'
' Arguments:    None
'
' Date          Developer       Chap    Action
' --------------------------------------------------------------
' 02 Jun 04     Stephen Bullen  Ch06    Initial version
'
Sub PrepareBackDrop()
 
    Dim wkbBook As Workbook
 
    'Do we already have a backdrop object?
    If Not WorkbookAlive(gwbkBackDrop) Then
 
        'See if there's already a backdrop workbook out there
        Set gwbkBackDrop = Nothing
        For Each wkbBook In Workbooks
            If wkbBook.BuiltinDocumentProperties("Title") = gsBACKDROP_TITLE Then
                Set gwbkBackDrop = wkbBook
                Exit For
            End If
        Next
 
        If gwbkBackDrop Is Nothing Then
            'Copy the backdrop sheet out of this workbook
            'into a new one for display
            wksBackdrop.Copy
            Set gwbkBackDrop = ActiveWorkbook
            gwbkBackDrop.BuiltinDocumentProperties("Title") = gsBACKDROP_TITLE
        End If
    End If
 
    With gwbkBackDrop
        .Activate
 
        'Select the full region that encompasses the backdrop
        'graphic, so we can use Zoom = True to size it to fit
        .Worksheets(1).Range("rgnBackDrop").Select
 
        'Set the Window View options to hide everything
        With .Windows(1)
            .WindowState = xlMaximized
            .Caption = ""
            .DisplayHorizontalScrollBar = False
            .DisplayVerticalScrollBar = False
            .DisplayHeadings = False
            .DisplayWorkbookTabs = False
 
            'Zoom the selected area to fit the screen
            .Zoom = True
        End With
 
        'Prevent selection or editing of any cells on the backdrop
        With .Worksheets(1)
            .Range("ptrCursor").Select
            .ScrollArea = .Range("ptrCursor").Address
            .EnableSelection = xlNoSelection
            .Protect DrawingObjects:=True, UserInterfaceOnly:=True
        End With
 
        'Protect the backdrop workbook, to remove the
        'control menu
        .Protect Windows:=True
        .Saved = True
    End With
 
End Sub
</pre>
</div>
      