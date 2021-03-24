---
stackbit_url_path: >-
  posts/Solved-Creating-Dynamics-CRM-organization-error
title: 'Solved: Creating Dynamics CRM organization error'
date: '2013-08-07 01:17:41.0607205'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - CRM
canonical_url: >-
template: post
---
<h2><font color="#9b00d3">Problem:</font></h2>  <p>On a Microsoft Dynamics CRM 2011 Server, creating an organization met the following error:</p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_647.png"><img title="Solved: Creating Dynamics CRM organization error" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="Solved: Creating Dynamics CRM organization error" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_335.png" width="605" height="445" /></a></p>  <p>The log:</p>  <pre style="border-top: black 1px solid; border-right: black 1px solid; border-bottom: black 1px solid; color: red; padding-bottom: 10px; padding-top: 10px; padding-left: 10px; border-left: black 1px solid; padding-right: 10px">16:52:20|   Info| Grant access for ServiceAccount: NT AUTHORITY\NetworkService, WebAppAccount: NT AUTHORITY\NETWORK SERVICE.
16:52:20|   Info| CrmAction execution time; GrantCrmDatabaseAccessAction; 00:00:04.4684354
16:52:20|   Info| Executing Install action: Microsoft.Crm.Tools.Admin.SetReportsUnpublishedAction
16:52:20|   Info| CrmAction execution time; SetReportsUnpublishedAction; 00:00:00.0156239
16:52:20|   Info| Executing Install action: Microsoft.Crm.Tools.Admin.FlushMetadataCacheAction
16:52:20|   Info| CrmAction execution time; FlushMetadataCacheAction; 00:00:00.1093673
16:52:20|   Info| Executing Install action: Microsoft.Crm.Tools.Admin.ProvisionBusinessAction
16:52:34|   Info| CrmAction execution time; ProvisionBusinessAction; 00:00:14.6085307
16:52:34|  Error| Installer Complete: OrganizationCreator - Error encountered
16:52:34|  Error| Exception occured during Microsoft.Crm.Tools.Admin.OrganizationCreator: Action Microsoft.Crm.Tools.Admin.ProvisionBusinessAction failed.
InnerException:
System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; System.DirectoryServices.DirectoryServicesCOMException: The server is unwilling to process the request. (Exception from HRESULT: 0x80072035)
   --- End of inner exception stack trace ---
   at System.DirectoryServices.DirectoryEntry.Invoke(String methodName, Object[] args)
   at Microsoft.Crm.SecurityUtils.AddPrincipalToGroup(SecurityIdentifier sid, DirectoryEntry groupEntry)
   at Microsoft.Crm.SecurityUtils.AddPrincipalToGroup(Guid principalId, SecurityIdentifier sid, Guid groupId)
   at Microsoft.Crm.BusinessEntities.SecurityLibrary.AddPrincipalToGroup(Guid principalId, SecurityIdentifier sid, Guid groupId)
   at Microsoft.Crm.Authentication.UserManagementFactory.ManageGroupMembership(Guid activeDirectoryId, SecurityIdentifier identifier, Boolean remove, ExecutionContext context)
   at Microsoft.Crm.Authentication.UserManagementFactory.AddPrincipalToGroup(UserAuthenticationInformation userInformation, ExecutionContext context)
   at Microsoft.Crm.Authentication.UserManagementFactory.CreateUser(IBusinessEntity systemUser, Boolean setupUser, ExecutionContext context)
   at Microsoft.Crm.ObjectModel.SystemUserServiceInternal`1.CreateInternal(Guid organizationId, IBusinessEntity systemuser, ExecutionContext context)
   at Microsoft.Crm.ObjectModel.OrganizationServiceInternal`1.CreateRootBusiness(IBusinessEntity organization, IBusinessEntity business, IBusinessEntity systemUser, ExecutionContext context)
   at Microsoft.Crm.Setup.Server.Utility.NewOrgUtility.OrganizationCreateNew(String organizationId, String organizationName, String userAccountName, String userFirstName, String userLastName, String userEmail, String featureSetFile, String languageCode, String privilegedUserGroup, String sqlAccessGroup, String reportingGroup, String privilegedReportingGroup, Boolean grantNetworkServiceAccess, OrganizationResourceHelper orgSettingsHelper)
   at Microsoft.Crm.Tools.Admin.ProvisionBusinessAction.Do(IDictionary parameters)
   at Microsoft.Crm.Setup.Common.CrmAction.ExecuteAction(CrmAction action, IDictionary parameters, Boolean undo)
InnerException:
System.DirectoryServices.DirectoryServicesCOMException (0x80072035): The server is unwilling to process the request. (Exception from HRESULT: 0x80072035)

16:52:34|   Info| Setting organization state.  New state = Failed
16:52:34|  Error| Create new Organization (Name=46c00c53-3ef4-e211-aa9b-00155d79e868, Id=JeffTian2) failed with Exception:
System.Exception: Action Microsoft.Crm.Tools.Admin.ProvisionBusinessAction failed. ---&gt; System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---&gt; System.DirectoryServices.DirectoryServicesCOMException: The server is unwilling to process the request. (Exception from HRESULT: 0x80072035)
   --- End of inner exception stack trace ---
   at System.DirectoryServices.DirectoryEntry.Invoke(String methodName, Object[] args)
   at Microsoft.Crm.SecurityUtils.AddPrincipalToGroup(SecurityIdentifier sid, DirectoryEntry groupEntry)
   at Microsoft.Crm.SecurityUtils.AddPrincipalToGroup(Guid principalId, SecurityIdentifier sid, Guid groupId)
   at Microsoft.Crm.BusinessEntities.SecurityLibrary.AddPrincipalToGroup(Guid principalId, SecurityIdentifier sid, Guid groupId)
   at Microsoft.Crm.Authentication.UserManagementFactory.ManageGroupMembership(Guid activeDirectoryId, SecurityIdentifier identifier, Boolean remove, ExecutionContext context)
   at Microsoft.Crm.Authentication.UserManagementFactory.AddPrincipalToGroup(UserAuthenticationInformation userInformation, ExecutionContext context)
   at Microsoft.Crm.Authentication.UserManagementFactory.CreateUser(IBusinessEntity systemUser, Boolean setupUser, ExecutionContext context)
   at Microsoft.Crm.ObjectModel.SystemUserServiceInternal`1.CreateInternal(Guid organizationId, IBusinessEntity systemuser, ExecutionContext context)
   at Microsoft.Crm.ObjectModel.OrganizationServiceInternal`1.CreateRootBusiness(IBusinessEntity organization, IBusinessEntity business, IBusinessEntity systemUser, ExecutionContext context)
   at Microsoft.Crm.Setup.Server.Utility.NewOrgUtility.OrganizationCreateNew(String organizationId, String organizationName, String userAccountName, String userFirstName, String userLastName, String userEmail, String featureSetFile, String languageCode, String privilegedUserGroup, String sqlAccessGroup, String reportingGroup, String privilegedReportingGroup, Boolean grantNetworkServiceAccess, OrganizationResourceHelper orgSettingsHelper)
   at Microsoft.Crm.Tools.Admin.ProvisionBusinessAction.Do(IDictionary parameters)
   at Microsoft.Crm.Setup.Common.CrmAction.ExecuteAction(CrmAction action, IDictionary parameters, Boolean undo)
   --- End of inner exception stack trace ---
   at Microsoft.Crm.Setup.Common.CrmAction.ExecuteAction(CrmAction action, IDictionary parameters, Boolean undo)
   at Microsoft.Crm.Setup.Common.Installer.Install(IDictionary stateSaver)
   at Microsoft.Crm.Tools.Admin.OrganizationOperation.Install(IDictionary stateSaver)
   at Microsoft.Crm.Tools.Admin.OrganizationCreator.Install(IDictionary stateSaver)
   at Microsoft.Crm.Tools.Admin.OrganizationOperation.Execute()
   at Microsoft.Crm.Tools.Admin.OrganizationCreator.Execute()
   at Microsoft.Crm.Tools.Admin.CreateOrganizationInstaller.Create(ICreateOrganizationInfo organizationInfo)
16:52:34|   Info| GetDBUpdateRevisionThresholdForServer(): Threshold = 3448.</pre>

<h2><font color="#9b00d3">Solution:</font></h2>

<p>Set <em>Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MSCRM\<strong>AutoGroupManagementOff</strong></em> = <strong>1</strong></p>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_648.png"><img title="Set Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MSCRM\AutoGroupManagementOff = 1" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="Set Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MSCRM\AutoGroupManagementOff = 1" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_336.png" width="657" height="249" /></a></p>

<p>Retry creating again, it will succeed.</p>