---
stackbit_url_path: >-
  posts/SQL-Server-2008-编程入门经典-第八章练习
title: 'SQL Server 2008 编程入门经典 第八章练习'
date: '2010-04-08 10:01:51'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>&nbsp;</p>
<div style="background-color: rgb(255, 255, 255); padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 160%; ">
<p>8.9 练习</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>1. 将表 8-13 中的数据规范化为第三范式。</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<table border="1" cellpadding="1" cellspacing="1">
    <caption>表 8-13</caption>
    <tbody>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Patient</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">SSN</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Physician</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Hospital</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Treatment</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">AdminDate</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">ReleaseDate</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Sam Spade</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">555-55-5555</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">
            <p>Albert</p>
            <p>Schweitzer</p>
            </td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">
            <p>Mayo</p>
            <p>Clinic</p>
            </td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Lobotomy</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">10/01/2005</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">11/07/2005</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Sally Nally</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">333-33-3333</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">
            <p>Albert</p>
            <p>Schweitzer</p>
            </td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">NULL</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">
            <p>Cortizone</p>
            <p>Injection</p>
            </td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">10/10/2005</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">10/10/2005</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Peter Piper</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">222-22-2222</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Mo Betta</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">
            <p>Mustard</p>
            <p>Clinic</p>
            </td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">
            <p>Pickle</p>
            <p>Extraction</p>
            </td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">11/07/2005</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">11/07/2005</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">
            <p>Nicki</p>
            <p>Doohichey</p>
            </td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">123-45-6789</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">
            <p>Sheeze</p>
            <p>Sheila</p>
            </td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">
            <p>Musard</p>
            <p>Clinic</p>
            </td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">
            <p>Cortizone</p>
            <p>Injection</p>
            </td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">11/07/2005</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">11/07/2005</td>
        </tr>
    </tbody>
</table>
<hr>
<p>先建立一个病人的社会安全账号信息的表Patients，并以社会安全账号SSN为主键：</p>
<table border="1" cellpadding="1" cellspacing="1">
    <caption>Patients</caption>
    <tbody>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">SSN</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Patient</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">555-55-5555</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Sam Spade</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">333-33-3333</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Sally Nally</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">222-22-2222</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Peter Piper</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">123-45-6789</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Nicki Doohichey</td>
        </tr>
    </tbody>
</table>
<p>然后建立一张医院信息表Hospitals，并以医院编号HospitalID为主键：</p>
<table border="1" cellpadding="1" cellspacing="1">
    <caption>Hospitals</caption>
    <tbody>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">HospitalID</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Hospital</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">1</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Mayo Clinic</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">2</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Mustard Clinic</td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<p>然后建立一张医生信息Physicians表，并以医生编号PhysicianID为主键：</p>
<table border="1" cellpadding="1" cellspacing="1">
    <caption>Physicians</caption>
    <tbody>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">PhysicianID</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Physician</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">HospitalID</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">1</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Albert Schweitzer</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">1</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">2</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Mo Betta</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">2</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">3</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Sheeze Sheila</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">2</td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<p>最后建立一个疗疹记录表，它以整个字段组为主键：</p>
<table border="1" cellpadding="1" cellspacing="1">
    <caption>Treatments</caption>
    <tbody>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">PatientID</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">PhysicianID</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Treatment</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">AdminDate</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">ReleaseDate</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">1</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">1</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Lobotomy</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">10/01/2005</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">11/07/2005</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">2</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">1</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Cortizone Injection</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">10/10/2005</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">10/10/2005</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">3</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">2</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Pickle Extraction</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">11/07/2005</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">11/07/2005</td>
        </tr>
        <tr>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">4</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">3</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">Cortizone Injection</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">11/07/2005</td>
            <td style="font-family: Arial, Verdana, sans-serif; font-size: 12px; line-height: 19px; ">11/07/2005</td>
        </tr>
    </tbody>
</table>
</div>
<p>&nbsp;</p>
<p>&nbsp;</p>
      