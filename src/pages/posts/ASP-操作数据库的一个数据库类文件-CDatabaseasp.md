---
stackbit_url_path: >-
  posts/ASP-操作数据库的一个数据库类文件-CDatabaseasp
title: 'ASP 操作数据库的一个数据库类文件 CDatabase.asp'
date: '2009-11-16 15:59:46'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/11/16/ASP-操作数据库的一个数据库类文件-CDatabaseasp
template: post
---

        <div style="text-indent: 2em;">
<p>为了能在世界各地方便地管理服务器上的数据库,我建立了一个基于网页的数据库管理系统。</p>
<p>为了能方便地对数据库进行操作,我建立了一个基于ASP的数据库类。用来封装与数据库相关的常用操作，如连接数据库，关闭数据库连接，获取一个查询记录，或者执行指定的SQL语句等。</p>
<p>代码如下:</p>
<div style="text-indent: 0;">
<pre class="brush: vb">&lt;!--#include file="adovbs.inc"--&gt;
&lt;%
'
' Author:       Jeff Tian, admin@myfootprints.cn
'

'#* Using ../inc/adovbs.inc *#
Class CError
    Public Number
    Public Description
    Public Source
    
    Public Sub CopyErrorObject(oErr)
        Number = oErr.number
        Description = oErr.Description
        Source = oErr.Source
    End Sub
End Class

Class CDatabase
    ' 数据库连接对象
    Public oConn
    ' 数据集对象
    Public oRS
    ' 错误对象，用来记录最近的一次错误
    Public oError

    Private Sub Class_Initialize()
        Set oConn = CreateObject("ADODB.Connection")
        Set oRS = CreateObject("ADODB.Recordset")
        Set oError = New CError
    End Sub

    Private Sub Class_Terminate()
        CloseRecordset
        Disconnect
        Set oConn = Nothing
        Set oRS = Nothing
        Set oError = Nothing
    End Sub

    '
    ' 获取数据集对象的记录数
    '
    Public Property Get RecordCount()
        If Me.oRS.State &gt; 0 Then
            RecordCount = Me.oRS.RecordCount
        Else
            RecordCount = 0
        End If
    End Property
    
    '
    ' 将游标回到记录集的第一行
    '
    Public Sub MoveFirst()
        If Me.oRS.State &gt; 0 Then
            If Me.oRS.RecordCount &gt; 0 Then
                Me.oRS.MoveFirst
            End If
        End If
    End Sub

    '
    ' 获取连接SQL Server数据库的字符串
    '
    Public Function GetConnectionString2SQLServer(ByVal sIP, ByVal sUID, ByVal sPwd, ByVal sDB)
        GetConnectionString2SQLServer = "Driver={SQL Server};Server=" &amp; sIP &amp; ";UID=" &amp; sUID &amp; ";PWD=" &amp; sPWD &amp; ";database=" &amp; sDB &amp; ";"
    End Function

    '
    ' Get base connection string syntax.
    '
    Public Function GetBaseConnectionString2SQLServer(ByVal sIP, ByVal sDB)
        GetBaseConnectionString2SQLServer = "Provider=SQLOLEDB;" &amp; _
                                            "Data Source=" &amp; sIP &amp; ";" &amp; _
                                            "Initial Catalog=" &amp; sDB &amp; ";"
    End Function

    '
    ' Get standard security connection string
    '
    Public Function GetStandardSecurityConnectionString2SQLServer(ByVal sIP, ByVal sUID, ByVal sPwd, ByVal sDB)
        GetStandardSecurityConnectionString2SQLServer = "Provider=SQLOLEDB;" &amp; _
                                                        "Data Source=" &amp; sIP &amp; ";" &amp; _
                                                        "Initial Catalog=" &amp; sDB &amp; ";" &amp; _
                                                        "User ID=" &amp; sUID &amp; ";" &amp; _
                                                        "Password=" &amp; sPwd &amp; ";"
    End Function

    '
    ' Get Windows integrated security connection string
    '
    Public Function GetWindowsIntegratedSecurityConnectionString2SQLServer(ByVal sIP, ByVal sDB)
        GetWindowsIntegratedSecurityConnectionString2SQLServer = "Provider=SQLOLEDB;" &amp; _
                                                                    "Data Source=" &amp; sIP &amp; ";" &amp; _
                                                                    "Initial Catalog=" &amp; sDB &amp; ":" &amp; _
                                                                    "Integrated Security=SSIP"
    End Function

    '
    ' Get an ADO connection string to Access database.
    '
    Public Function GetADOConnectionString2Access(ByVal sDBPath, ByVal sUID, ByVal sPwd)
        GetADOConnectionString2Access = "Provider=Microsoft.Jet.OLEDB.4.0;" &amp; _
                                        "Data Source=" &amp; sDBPath &amp; ";" &amp; _
                                        "User ID=" &amp; sUID &amp; ";" &amp; _
                                        "Password=" &amp; sPwd &amp; ";"
    End Function

    '
    ' Get an ADO Connection String to an Excel workbook
    '
    Public Function GetADOConnectionString2Excel(ByVal sDBPath)
        GetADOConnectionString2Excel = "Provider=Microsoft.Jet.OLEDB.4.0;" &amp; _
                                        "Data Source=" &amp; sDBPath &amp; ";" &amp; _
                                        "Extended Properties=""Excel 8.0;HDR=YES"";"
    End Function

    '
    ' Get an DBQ Connection String to an MSAccess
    '
    Public Function GetDBQConnectionString2Access(ByVal sDBPath, ByVal sUID, ByVal sPwd)
        GetDBQConnectionString2Access = "Driver={Microsoft Access Driver (*.mdb)};Dbq=" &amp; sDBPath &amp; ";Uid=" &amp; sUID &amp; ";Pwd=" &amp; sPwd &amp; ";"
    End Function

    '
    ' Connect to Access
    '
    Public Function Connect2Access(ByVal sDBPath, ByVal sUID, ByVal sPwd)
        Const sSOURCE = "Connect2Acess()"
    On Error Resume Next
            ' 如果不是关闭状态，则先关闭它
            If oConn.State &lt;&gt; adStateClosed Then
                Me.Disconnect
            End If
            Me.oConn.Open GetDBQConnectionString2Access(sDBPath, sUID, sPwd)
    'ErrorExit:
            Connect2Access = oConn.State
            Exit Function
    End Function

    '
    ' 连接到SQL Server
    '
    Public Function Connect2SQLServer(ByVal sIP, ByVal sUID, ByVal sPwd, ByVal sDB)
        Const sSOURCE = "Connect2SQLServer()"
        'On Error Resume Next
            ' 如果不是关闭状态，则先关闭
            If oConn.State &lt;&gt; adStateClosed Then
                Me.Disconnect
            End If
            oConn.Open GetConnectionString2SQLServer(sIP, sUID, sPwd, sDB)
    ErrorExit:
        ' 将数据库连接对象的状态值作为返回值
            Connect2SQLServer = oConn.State
            Exit Function
    End Function

    '
    ' 从当前SQL Server连接断开
    '
    Public Function Disconnect()
        If oConn.State &lt;&gt; adStateClosed Then
            oConn.Close
        End If
        Disconnect = oConn.State
    End Function

    '
    ' 执行查询
    '
    Public Function OpenRecordset(ByVal sSQL)
        ' 当数据集对象不是关闭状态时，先关闭
        CloseRecordset
        ' 当数据库连接对象是关闭状态时，不能打开
        If oConn.State = adStateClosed Then
            OpenRecordset = oConn.State
            Exit Function
        End If
        On Error Resume Next
        oRS.Open sSQL, oConn, AdOpenKeyset, AdLockReadOnly
        If Err.number &lt;&gt; 0 Then
            oError.CopyErrorObject Err
        End If
        On Error Goto 0
        OpenRecordset = oRS.State
    End Function
    
    '
    ' 执行查询，不指定Cursor类型和Lock类型
    ' 
    Public Function OpenRecordsetWithoutCursorAndLockType(ByVal sSQL)
        CloseRecordset
        If oConn.State = adStateClosed Then
            OpenRecordsetWithoutCursorAndLockType = oConn.State
            Exit Function
        End If
        On Error Resume Next
        oRS.Open sSQL, oConn
        If Err.number &lt;&gt; 0 Then
            oError.CopyErrorObject Err
        End If
        On Error Goto 0
        OpenRecordsetWithoutCursorAndLockType = oRS.State
    End Function

    '
    ' HTML格式化错误信息
    '
    Public Function FormatError(oError)
        dim sErr
        
        sErr = "错误号： " &amp; oError.Number
        sErr = sErr &amp; "错误描述： " &amp; oError.Description
        
        FormatError = sErr
    End Function

    '
    ' 执行指定的SQL语句
    '
    Public Function Execute(ByRef sSQL, ByRef lRecordsAffected)
        If oConn.State = adStateClosed Then
            Execute = Me.oConn.State
            Exit Function
        End If
        
        On Error Resume Next
        Set Me.oRS = Me.oConn.Execute(sSQL, lRecordsAffected)
        If Err.number &lt;&gt; 0 Then
            oError.CopyErrorObject Err
        End If
        On Error Goto 0
        Execute = Me.oConn.State
        Exit Function
    End Function

    '
    ' 关闭数据集
    '
    Public Function CloseRecordset()
        If oRS.State &lt;&gt; adStateClosed Then
            oRS.Close
        End If
        
        CloseRecordset = oRS.State
    End Function

    '
    ' 输出数据集
    ' 本想用回调函数，可是在VB里实现起来很困难
    '
    'Public Function OutputRecordset(ByVal CallBack, ByRef vDest)
    '    If orS.State = adStateClosed Then
    '        OutputRecordset = orS.State
    '        Exit Function
    '    Else
    '        CallBack orS, vDest
    '    End If
    'End Function
End Class
%&gt;
</pre>
</div>
<p>其中有用到一个常用的常量集合，即包含文件adovbs.inc。该文件的源代码为：</p>
<div style="text-indent: 0;">
<pre class="brush: vb">&lt;%
'--------------------------------------------------------------------
' Microsoft ADO
'
' Copyright (c) 1996-1998 Microsoft Corporation.
'
'
'
' ADO constants include file for VBScript
'
'--------------------------------------------------------------------

'---- CursorTypeEnum Values ----
Const adOpenForwardOnly = 0
Const adOpenKeyset = 1
Const adOpenDynamic = 2
Const adOpenStatic = 3

'---- CursorOptionEnum Values ----
Const adHoldRecords = &amp;H00000100
Const adMovePrevious = &amp;H00000200
Const adAddNew = &amp;H01000400
Const adDelete = &amp;H01000800
Const adUpdate = &amp;H01008000
Const adBookmark = &amp;H00002000
Const adApproxPosition = &amp;H00004000
Const adUpdateBatch = &amp;H00010000
Const adResync = &amp;H00020000
Const adNotify = &amp;H00040000
Const adFind = &amp;H00080000
Const adSeek = &amp;H00400000
Const adIndex = &amp;H00800000

'---- LockTypeEnum Values ----
Const adLockReadOnly = 1
Const adLockPessimistic = 2
Const adLockOptimistic = 3
Const adLockBatchOptimistic = 4

'---- ExecuteOptionEnum Values ----
Const adAsyncExecute = &amp;H00000010
Const adAsyncFetch = &amp;H00000020
Const adAsyncFetchNonBlocking = &amp;H00000040
Const adExecuteNoRecords = &amp;H00000080
Const adExecuteStream = &amp;H00000400

'---- ConnectOptionEnum Values ----
Const adAsyncConnect = &amp;H00000010

'---- ObjectStateEnum Values ----
Const adStateClosed = &amp;H00000000
Const adStateOpen = &amp;H00000001
Const adStateConnecting = &amp;H00000002
Const adStateExecuting = &amp;H00000004
Const adStateFetching = &amp;H00000008

'---- CursorLocationEnum Values ----
Const adUseServer = 2
Const adUseClient = 3

'---- DataTypeEnum Values ----
Const adEmpty = 0
Const adTinyInt = 16
Const adSmallInt = 2
Const adInteger = 3
Const adBigInt = 20
Const adUnsignedTinyInt = 17
Const adUnsignedSmallInt = 18
Const adUnsignedInt = 19
Const adUnsignedBigInt = 21
Const adSingle = 4
Const adDouble = 5
Const adCurrency = 6
Const adDecimal = 14
Const adNumeric = 131
Const adBoolean = 11
Const adError = 10
Const adUserDefined = 132
Const adVariant = 12
Const adIDispatch = 9
Const adIUnknown = 13
Const adGUID = 72
Const adDate = 7
Const adDBDate = 133
Const adDBTime = 134
Const adDBTimeStamp = 135
Const adBSTR = 8
Const adChar = 129
Const adVarChar = 200
Const adLongVarChar = 201
Const adWChar = 130
Const adVarWChar = 202
Const adLongVarWChar = 203
Const adBinary = 128
Const adVarBinary = 204
Const adLongVarBinary = 205
Const adChapter = 136
Const adFileTime = 64
Const adPropVariant = 138
Const adVarNumeric = 139
Const adArray = &amp;H2000

'---- FieldAttributeEnum Values ----
Const adFldMayDefer = &amp;H00000002
Const adFldUpdatable = &amp;H00000004
Const adFldUnknownUpdatable = &amp;H00000008
Const adFldFixed = &amp;H00000010
Const adFldIsNullable = &amp;H00000020
Const adFldMayBeNull = &amp;H00000040
Const adFldLong = &amp;H00000080
Const adFldRowID = &amp;H00000100
Const adFldRowVersion = &amp;H00000200
Const adFldCacheDeferred = &amp;H00001000
Const adFldIsChapter = &amp;H00002000
Const adFldNegativeScale = &amp;H00004000
Const adFldKeyColumn = &amp;H00008000
Const adFldIsRowURL = &amp;H00010000
Const adFldIsDefaultStream = &amp;H00020000
Const adFldIsCollection = &amp;H00040000

'---- EditModeEnum Values ----
Const adEditNone = &amp;H0000
Const adEditInProgress = &amp;H0001
Const adEditAdd = &amp;H0002
Const adEditDelete = &amp;H0004

'---- RecordStatusEnum Values ----
Const adRecOK = &amp;H0000000
Const adRecNew = &amp;H0000001
Const adRecModified = &amp;H0000002
Const adRecDeleted = &amp;H0000004
Const adRecUnmodified = &amp;H0000008
Const adRecInvalid = &amp;H0000010
Const adRecMultipleChanges = &amp;H0000040
Const adRecPendingChanges = &amp;H0000080
Const adRecCanceled = &amp;H0000100
Const adRecCantRelease = &amp;H0000400
Const adRecConcurrencyViolation = &amp;H0000800
Const adRecIntegrityViolation = &amp;H0001000
Const adRecMaxChangesExceeded = &amp;H0002000
Const adRecObjectOpen = &amp;H0004000
Const adRecOutOfMemory = &amp;H0008000
Const adRecPermissionDenied = &amp;H0010000
Const adRecSchemaViolation = &amp;H0020000
Const adRecDBDeleted = &amp;H0040000

'---- GetRowsOptionEnum Values ----
Const adGetRowsRest = -1

'---- PositionEnum Values ----
Const adPosUnknown = -1
Const adPosBOF = -2
Const adPosEOF = -3

'---- BookmarkEnum Values ----
Const adBookmarkCurrent = 0
Const adBookmarkFirst = 1
Const adBookmarkLast = 2

'---- MarshalOptionsEnum Values ----
Const adMarshalAll = 0
Const adMarshalModifiedOnly = 1

'---- AffectEnum Values ----
Const adAffectCurrent = 1
Const adAffectGroup = 2
Const adAffectAllChapters = 4

'---- ResyncEnum Values ----
Const adResyncUnderlyingValues = 1
Const adResyncAllValues = 2

'---- CompareEnum Values ----
Const adCompareLessThan = 0
Const adCompareEqual = 1
Const adCompareGreaterThan = 2
Const adCompareNotEqual = 3
Const adCompareNotComparable = 4

'---- FilterGroupEnum Values ----
Const adFilterNone = 0
Const adFilterPendingRecords = 1
Const adFilterAffectedRecords = 2
Const adFilterFetchedRecords = 3
Const adFilterConflictingRecords = 5

'---- SearchDirectionEnum Values ----
Const adSearchForward = 1
Const adSearchBackward = -1

'---- PersistFormatEnum Values ----
Const adPersistADTG = 0
Const adPersistXML = 1

'---- StringFormatEnum Values ----
Const adClipString = 2

'---- ConnectPromptEnum Values ----
Const adPromptAlways = 1
Const adPromptComplete = 2
Const adPromptCompleteRequired = 3
Const adPromptNever = 4

'---- ConnectModeEnum Values ----
Const adModeUnknown = 0
Const adModeRead = 1
Const adModeWrite = 2
Const adModeReadWrite = 3
Const adModeShareDenyRead = 4
Const adModeShareDenyWrite = 8
Const adModeShareExclusive = &amp;Hc
Const adModeShareDenyNone = &amp;H10
Const adModeRecursive = &amp;H400000

'---- RecordCreateOptionsEnum Values ----
Const adCreateCollection = &amp;H00002000
Const adCreateStructDoc = &amp;H80000000
Const adCreateNonCollection = &amp;H00000000
Const adOpenIfExists = &amp;H02000000
Const adCreateOverwrite = &amp;H04000000
Const adFailIfNotExists = -1

'---- RecordOpenOptionsEnum Values ----
Const adOpenRecordUnspecified = -1
Const adOpenOutput = &amp;H00800000
Const adOpenAsync = &amp;H00001000
Const adDelayFetchStream = &amp;H00004000
Const adDelayFetchFields = &amp;H00008000
Const adOpenExecuteCommand = &amp;H00010000

'---- IsolationLevelEnum Values ----
Const adXactUnspecified = &amp;Hffffffff
Const adXactChaos = &amp;H00000010
Const adXactReadUncommitted = &amp;H00000100
Const adXactBrowse = &amp;H00000100
Const adXactCursorStability = &amp;H00001000
Const adXactReadCommitted = &amp;H00001000
Const adXactRepeatableRead = &amp;H00010000
Const adXactSerializable = &amp;H00100000
Const adXactIsolated = &amp;H00100000

'---- XactAttributeEnum Values ----
Const adXactCommitRetaining = &amp;H00020000
Const adXactAbortRetaining = &amp;H00040000

'---- PropertyAttributesEnum Values ----
Const adPropNotSupported = &amp;H0000
Const adPropRequired = &amp;H0001
Const adPropOptional = &amp;H0002
Const adPropRead = &amp;H0200
Const adPropWrite = &amp;H0400

'---- ErrorValueEnum Values ----
Const adErrProviderFailed = &amp;Hbb8
Const adErrInvalidArgument = &amp;Hbb9
Const adErrOpeningFile = &amp;Hbba
Const adErrReadFile = &amp;Hbbb
Const adErrWriteFile = &amp;Hbbc
Const adErrNoCurrentRecord = &amp;Hbcd
Const adErrIllegalOperation = &amp;Hc93
Const adErrCantChangeProvider = &amp;Hc94
Const adErrInTransaction = &amp;Hcae
Const adErrFeatureNotAvailable = &amp;Hcb3
Const adErrItemNotFound = &amp;Hcc1
Const adErrObjectInCollection = &amp;Hd27
Const adErrObjectNotSet = &amp;Hd5c
Const adErrDataConversion = &amp;Hd5d
Const adErrObjectClosed = &amp;He78
Const adErrObjectOpen = &amp;He79
Const adErrProviderNotFound = &amp;He7a
Const adErrBoundToCommand = &amp;He7b
Const adErrInvalidParamInfo = &amp;He7c
Const adErrInvalidConnection = &amp;He7d
Const adErrNotReentrant = &amp;He7e
Const adErrStillExecuting = &amp;He7f
Const adErrOperationCancelled = &amp;He80
Const adErrStillConnecting = &amp;He81
Const adErrInvalidTransaction = &amp;He82
Const adErrUnsafeOperation = &amp;He84
Const adwrnSecurityDialog = &amp;He85
Const adwrnSecurityDialogHeader = &amp;He86
Const adErrIntegrityViolation = &amp;He87
Const adErrPermissionDenied = &amp;He88
Const adErrDataOverflow = &amp;He89
Const adErrSchemaViolation = &amp;He8a
Const adErrSignMismatch = &amp;He8b
Const adErrCantConvertvalue = &amp;He8c
Const adErrCantCreate = &amp;He8d
Const adErrColumnNotOnThisRow = &amp;He8e
Const adErrURLIntegrViolSetColumns = &amp;He8f
Const adErrURLDoesNotExist = &amp;He8f
Const adErrTreePermissionDenied = &amp;He90
Const adErrInvalidURL = &amp;He91
Const adErrResourceLocked = &amp;He92
Const adErrResourceExists = &amp;He93
Const adErrCannotComplete = &amp;He94
Const adErrVolumeNotFound = &amp;He95
Const adErrOutOfSpace = &amp;He96
Const adErrResourceOutOfScope = &amp;He97
Const adErrUnavailable = &amp;He98
Const adErrURLNamedRowDoesNotExist = &amp;He99
Const adErrDelResOutOfScope = &amp;He9a
Const adErrPropInvalidColumn = &amp;He9b
Const adErrPropInvalidOption = &amp;He9c
Const adErrPropInvalidValue = &amp;He9d
Const adErrPropConflicting = &amp;He9e
Const adErrPropNotAllSettable = &amp;He9f
Const adErrPropNotSet = &amp;Hea0
Const adErrPropNotSettable = &amp;Hea1
Const adErrPropNotSupported = &amp;Hea2
Const adErrCatalogNotSet = &amp;Hea3
Const adErrCantChangeConnection = &amp;Hea4
Const adErrFieldsUpdateFailed = &amp;Hea5
Const adErrDenyNotSupported = &amp;Hea6
Const adErrDenyTypeNotSupported = &amp;Hea7
Const adErrProviderNotSpecified = &amp;Hea9
Const adErrConnectionStringTooLong = &amp;Heaa

'---- ParameterAttributesEnum Values ----
Const adParamSigned = &amp;H0010
Const adParamNullable = &amp;H0040
Const adParamLong = &amp;H0080

'---- ParameterDirectionEnum Values ----
Const adParamUnknown = &amp;H0000
Const adParamInput = &amp;H0001
Const adParamOutput = &amp;H0002
Const adParamInputOutput = &amp;H0003
Const adParamReturnValue = &amp;H0004

'---- CommandTypeEnum Values ----
Const adCmdUnknown = &amp;H0008
Const adCmdText = &amp;H0001
Const adCmdTable = &amp;H0002
Const adCmdStoredProc = &amp;H0004
Const adCmdFile = &amp;H0100
Const adCmdTableDirect = &amp;H0200

'---- EventStatusEnum Values ----
Const adStatusOK = &amp;H0000001
Const adStatusErrorsOccurred = &amp;H0000002
Const adStatusCantDeny = &amp;H0000003
Const adStatusCancel = &amp;H0000004
Const adStatusUnwantedEvent = &amp;H0000005

'---- EventReasonEnum Values ----
Const adRsnAddNew = 1
Const adRsnDelete = 2
Const adRsnUpdate = 3
Const adRsnUndoUpdate = 4
Const adRsnUndoAddNew = 5
Const adRsnUndoDelete = 6
Const adRsnRequery = 7
Const adRsnResynch = 8
Const adRsnClose = 9
Const adRsnMove = 10
Const adRsnFirstChange = 11
Const adRsnMoveFirst = 12
Const adRsnMoveNext = 13
Const adRsnMovePrevious = 14
Const adRsnMoveLast = 15

'---- SchemaEnum Values ----
Const adSchemaProviderSpecific = -1
Const adSchemaAsserts = 0
Const adSchemaCatalogs = 1
Const adSchemaCharacterSets = 2
Const adSchemaCollations = 3
Const adSchemaColumns = 4
Const adSchemaCheckConstraints = 5
Const adSchemaConstraintColumnUsage = 6
Const adSchemaConstraintTableUsage = 7
Const adSchemaKeyColumnUsage = 8
Const adSchemaReferentialConstraints = 9
Const adSchemaTableConstraints = 10
Const adSchemaColumnsDomainUsage = 11
Const adSchemaIndexes = 12
Const adSchemaColumnPrivileges = 13
Const adSchemaTablePrivileges = 14
Const adSchemaUsagePrivileges = 15
Const adSchemaProcedures = 16
Const adSchemaSchemata = 17
Const adSchemaSQLLanguages = 18
Const adSchemaStatistics = 19
Const adSchemaTables = 20
Const adSchemaTranslations = 21
Const adSchemaProviderTypes = 22
Const adSchemaViews = 23
Const adSchemaViewColumnUsage = 24
Const adSchemaViewTableUsage = 25
Const adSchemaProcedureParameters = 26
Const adSchemaForeignKeys = 27
Const adSchemaPrimaryKeys = 28
Const adSchemaProcedureColumns = 29
Const adSchemaDBInfoKeywords = 30
Const adSchemaDBInfoLiterals = 31
Const adSchemaCubes = 32
Const adSchemaDimensions = 33
Const adSchemaHierarchies = 34
Const adSchemaLevels = 35
Const adSchemaMeasures = 36
Const adSchemaProperties = 37
Const adSchemaMembers = 38
Const adSchemaTrustees = 39
Const adSchemaFunctions = 40
Const adSchemaActions = 41
Const adSchemaCommands = 42
Const adSchemaSets = 43

'---- FieldStatusEnum Values ----
Const adFieldOK = 0
Const adFieldCantConvertValue = 2
Const adFieldIsNull = 3
Const adFieldTruncated = 4
Const adFieldSignMismatch = 5
Const adFieldDataOverflow = 6
Const adFieldCantCreate = 7
Const adFieldUnavailable = 8
Const adFieldPermissionDenied = 9
Const adFieldIntegrityViolation = 10
Const adFieldSchemaViolation = 11
Const adFieldBadStatus = 12
Const adFieldDefault = 13
Const adFieldIgnore = 15
Const adFieldDoesNotExist = 16
Const adFieldInvalidURL = 17
Const adFieldResourceLocked = 18
Const adFieldResourceExists = 19
Const adFieldCannotComplete = 20
Const adFieldVolumeNotFound = 21
Const adFieldOutOfSpace = 22
Const adFieldCannotDeleteSource = 23
Const adFieldReadOnly = 24
Const adFieldResourceOutOfScope = 25
Const adFieldAlreadyExists = 26
Const adFieldPendingInsert = &amp;H10000
Const adFieldPendingDelete = &amp;H20000
Const adFieldPendingChange = &amp;H40000
Const adFieldPendingUnknown = &amp;H80000
Const adFieldPendingUnknownDelete = &amp;H100000

'---- SeekEnum Values ----
Const adSeekFirstEQ = &amp;H1
Const adSeekLastEQ = &amp;H2
Const adSeekAfterEQ = &amp;H4
Const adSeekAfter = &amp;H8
Const adSeekBeforeEQ = &amp;H10
Const adSeekBefore = &amp;H20

'---- ADCPROP_UPDATECRITERIA_ENUM Values ----
Const adCriteriaKey = 0
Const adCriteriaAllCols = 1
Const adCriteriaUpdCols = 2
Const adCriteriaTimeStamp = 3

'---- ADCPROP_ASYNCTHREADPRIORITY_ENUM Values ----
Const adPriorityLowest = 1
Const adPriorityBelowNormal = 2
Const adPriorityNormal = 3
Const adPriorityAboveNormal = 4
Const adPriorityHighest = 5

'---- ADCPROP_AUTORECALC_ENUM Values ----
Const adRecalcUpFront = 0
Const adRecalcAlways = 1

'---- ADCPROP_UPDATERESYNC_ENUM Values ----
Const adResyncNone = 0
Const adResyncAutoIncrement = 1
Const adResyncConflicts = 2
Const adResyncUpdates = 4
Const adResyncInserts = 8
Const adResyncAll = 15

'---- MoveRecordOptionsEnum Values ----
Const adMoveUnspecified = -1
Const adMoveOverWrite = 1
Const adMoveDontUpdateLinks = 2
Const adMoveAllowEmulation = 4

'---- CopyRecordOptionsEnum Values ----
Const adCopyUnspecified = -1
Const adCopyOverWrite = 1
Const adCopyAllowEmulation = 4
Const adCopyNonRecursive = 2

'---- StreamTypeEnum Values ----
Const adTypeBinary = 1
Const adTypeText = 2

'---- LineSeparatorEnum Values ----
Const adLF = 10
Const adCR = 13
Const adCRLF = -1

'---- StreamOpenOptionsEnum Values ----
Const adOpenStreamUnspecified = -1
Const adOpenStreamAsync = 1
Const adOpenStreamFromRecord = 4

'---- StreamWriteEnum Values ----
Const adWriteChar = 0
Const adWriteLine = 1

'---- SaveOptionsEnum Values ----
Const adSaveCreateNotExist = 1
Const adSaveCreateOverWrite = 2

'---- FieldEnum Values ----
Const adDefaultStream = -1
Const adRecordURL = -2

'---- StreamReadEnum Values ----
Const adReadAll = -1
Const adReadLine = -2

'---- RecordTypeEnum Values ----
Const adSimpleRecord = 0
Const adCollectionRecord = 1
Const adStructDoc = 2
%&gt;
</pre>
</div>
</div>
      