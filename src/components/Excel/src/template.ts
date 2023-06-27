/**
 * dom 导出 Excel 的模板注释
 * 特别注意：模板字符串内的空格、换行非常重要，不要改动
 */
export const html_start = `<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">`;
export const template_ExcelWorksheet = `<x:ExcelWorksheet><x:Name>{SheetName}</x:Name><x:WorksheetSource HRef="sheet{SheetIndex}.htm"/></x:ExcelWorksheet>`;
export const template_WorkBook = `MIME-Version: 1.0
X-Document-Type: Workbook
Content-Type: multipart/related; boundary="----=_NextPart_dummy"

------=_NextPart_dummy
Content-Location: WorkBook.htm
Content-Type: text/html; charset=utf-8

${html_start}
<head>
<meta name="Excel Workbook Frameset">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="File-List" href="filelist.xml">
<!--[if gte mso 9]><xml>
<x:ExcelWorkbook>
   <x:ExcelWorksheets>{ExcelWorksheets}</x:ExcelWorksheets>
   <x:ActiveSheet>0</x:ActiveSheet>
</x:ExcelWorkbook>
</xml><![endif]-->
</head>
<frameset>
   <frame src="sheet0.htm" name="frSheet">
   <noframes><body><p>This page uses frames, but your browser does not support them.</p></body></noframes>
</frameset>
</html>
{HTMLWorksheets}
Content-Location: filelist.xml
Content-Type: text/xml; charset="utf-8"

<xml xmlns:o="urn:schemas-microsoft-com:office:office">
   <o:MainFile HRef="../WorkBook.htm"/>
   {ListWorksheets}
   <o:File HRef="filelist.xml"/>
</xml>
------=_NextPart_dummy--
`;
export const template_ListWorksheet = `<o:File HRef="sheet{SheetIndex}.htm"/>`;
export const template_HTMLWorksheet = `
------=_NextPart_dummy
Content-Location: sheet{SheetIndex}.htm
Content-Type: text/html; charset=utf-8

${html_start}
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <link id="Main-File" rel="Main-File" href="../WorkBook.htm">
   <link rel="File-List" href="filelist.xml">
</head>
<body><table>{SheetContent}</table></body>
</html>`;
