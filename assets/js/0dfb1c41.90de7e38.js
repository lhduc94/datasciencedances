"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[6874],{6656:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>h});var c=i(4848),s=i(8453);const l={sidebar_label:"Excel",sidebar_position:3},d="Excel",r={id:"kungfupandas/IO/Excel",title:"Excel",description:"Gi\u1edbi thi\u1ec7u",source:"@site/docs/kungfupandas/02-IO/02-Excel.mdx",sourceDirName:"kungfupandas/02-IO",slug:"/kungfupandas/IO/Excel",permalink:"/docs/kungfupandas/IO/Excel",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Excel",sidebar_position:3},sidebar:"tailieuSidebar",previous:{title:"CSV v\xe0 TSV",permalink:"/docs/kungfupandas/IO/Csv_Tsv"},next:{title:"JSON",permalink:"/docs/kungfupandas/IO/Json"}},t={},h=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"\u0110\u1ecdc file Excel",id:"\u0111\u1ecdc-file-excel",level:2},{value:"Xu\u1ea5t file Excel",id:"xu\u1ea5t-file-excel",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"excel",children:"Excel"}),"\n",(0,c.jsx)(n.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,c.jsxs)(n.p,{children:["Excel l\xe0 m\u1ed9t ph\u1ea7n m\u1ec1m qu\u1ea3n l\xfd d\u1eef li\u1ec7u ph\u1ed5 bi\u1ebfn, \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 l\u01b0u tr\u1eef v\xe0 x\u1eed l\xfd d\u1eef li\u1ec7u trong c\xe1c b\u1ea3ng.\r\nExcel c\xf3 th\u1ec3 l\u01b0u d\u1eef li\u1ec7u d\u01b0\u1edbi d\u1ea1ng file ",(0,c.jsx)(n.code,{children:".xlsx"})," ho\u1eb7c ",(0,c.jsx)(n.code,{children:".xls"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"\u0111\u1ecdc-file-excel",children:"\u0110\u1ecdc file Excel"}),"\n",(0,c.jsx)(n.p,{children:"\u0110\u1ec3 \u0111\u1ecdc file Excel ta d\xf9ng c\xfa ph\xe1p sau"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"x = pd.ExcelFile(filename)\n"})}),"\n",(0,c.jsxs)(n.p,{children:["V\u1edbi ",(0,c.jsx)(n.code,{children:"filename"})," l\xe0 \u0111\u01b0\u1eddng d\u1eabn \u0111\u1ebfn file"]}),"\n",(0,c.jsxs)(n.p,{children:["\u0110\u1ec3 xem t\xean c\xe1c sheets c\u1ee7a ",(0,c.jsx)(n.code,{children:"x"})," ta c\xf3 th\u1ec3 d\xf9ng ",(0,c.jsx)(n.code,{children:"x.sheet_names"}),". Sau \u0111\xf3 \u0111\u1ec3 \u0111\u1ecdc t\u1eebng sheet c\u1ee7a ",(0,c.jsx)(n.code,{children:"x"})," ta c\xf3 th\u1ec3 d\xf9ng ",(0,c.jsx)(n.code,{children:".parse()"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"df = x.parse(sheet_name, header=0, names=None, index_col=None, usecols=None, skiprows=None, skipfooter=0, nrows=None)\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Trong \u0111\xf3 ",(0,c.jsx)(n.code,{children:"sheet_name"})," l\xe0 t\xean sheet c\u1ea7n \u0111\u1ecdc, c\xe1c th\xf4ng s\u1ed1 c\xf2n l\u1ea1i t\u01b0\u01a1ng t\u1ef1 nh\u01b0 ph\u1ea7n \u0111\u1ecdc file ",(0,c.jsx)(n.code,{children:"csv"})," v\xe0 ",(0,c.jsx)(n.code,{children:"tsv"}),". M\u1ed9t c\xe1ch kh\xe1c \u0111\u1ec3 \u0111\u1ecdc file excel l\xe0 d\xf9ng h\xe0m ",(0,c.jsx)(n.a,{href:"https://pandas.pydata.org/docs/reference/api/pandas.read_excel.html",children:"pandas.read_excel"})," v\u1edbi tham s\u1ed1 ",(0,c.jsx)(n.code,{children:"io"})," l\xe0 t\xean file."]}),"\n",(0,c.jsx)(n.h2,{id:"xu\u1ea5t-file-excel",children:"Xu\u1ea5t file Excel"}),"\n",(0,c.jsxs)(n.p,{children:["Gi\u1ea3 s\u1eed ta c\xf3 c\xe1c ",(0,c.jsx)(n.code,{children:"DataFrame"})," df1, df2, df3 c\u1ea7n \u0111\u01b0\u1ee3c l\u01b0u v\xe0o 1 file Excel duy nh\u1ea5t"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"import pandas as pd\r\n\r\ndf1 = pd.DataFrame({'col_1': [1, 2, 3, 4]})\r\ndf2 = pd.DataFrame({'col_1': ['a', 'b', 'c', 'd']})\r\ndf3 = pd.DataFrame({'col_1': [True, True, False, False]})\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u0110\u1ec3 ghi c\xe1c b\u1ea3ng v\xe0o file Excel, b\u01b0\u1edbc \u0111\u1ea7u ti\xean l\xe0 kh\u1edfi t\u1ea1o bi\u1ebfn ",(0,c.jsx)(n.code,{children:"writer"})," theo c\xfa ph\xe1p"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"writer = pd.ExcelWriter('pandas_multiple.xlsx', mode='w',  if_sheet_exists=None, engine=None)\n"})}),"\n",(0,c.jsx)(n.p,{children:"Trong \u0111\xf3:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"filename"})," l\xe0 t\xean file excel"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"mode"})," l\xe0 ph\u01b0\u01a1ng th\u1ee9c ghi file v\u1edbi ",(0,c.jsx)(n.code,{children:"w"})," l\xe0 vi\u1ebft file m\u1edbi v\xe0 ",(0,c.jsx)(n.code,{children:"a"})," l\xe0 vi\u1ebft th\xeam v\xe0o file. M\u1eb7c \u0111\u1ecbnh l\xe0 ",(0,c.jsx)(n.code,{children:"w"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"if_sheet_exists"})," l\xe0 ph\u01b0\u01a1ng th\u1ee9c ghi file n\u1ebfu file ho\u1eb7c sheet \u0111\xe3 t\u1ed3n t\u1ea1i, bao g\u1ed3m c\xe1c ph\u01b0\u01a1ng th\u1ee9c d\u01b0\u1edbi \u0111\xe2y (m\u1eb7c \u0111\u1ecbnh l\xe0 error)"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"error"}),": hi\u1ec7n ValueError n\u1ebfu \u0111\xe3 t\u1ed3n t\u1ea1i sheet"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"new"}),": T\u1ea1o sheet m\u1edbi v\u1edbi t\xean ph\u1ee5 thu\u1ed9c v\xe0o ",(0,c.jsx)(n.code,{children:"engine"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"replace"}),": X\xf3a n\u1ed9i dung c\u1ee7a sheet tr\u01b0\u1edbc khi vi\u1ebft."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"overlay"}),": Vi\u1ebft l\xean sheet \u0111\xe3 t\u1ed3n t\u1ea1i m\xe0 kh\xf4ng x\xf3a c\xe1c sheet c\u0169"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"engine"}),": M\u1ed9t s\u1ed1 ki\u1ec3u h\u1ed7 tr\u1ee3 ghi file nh\u01b0 ",(0,c.jsx)(n.code,{children:"xlsxwriter"}),", ",(0,c.jsx)(n.code,{children:"openpyxl"}),", ",(0,c.jsx)(n.code,{children:"openpyxl"}),", ",(0,c.jsx)(n.code,{children:"odswriter"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.admonition,{title:"L\u01b0u \xfd",type:"info",children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"mode='w'"})," kh\xf4ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng v\u1edbi engine ",(0,c.jsx)(n.code,{children:"xlsxwriter"}),", khi khai b\xe1o engine n\xe0y s\u1ebd b\xe1o l\u1ed7i."]}),(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"if_sheet_exists"})," ch\u1ec9 s\u1eed d\u1ee5ng v\u1edbi ",(0,c.jsx)(n.code,{children:"mode='a'"})]}),(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"overlay"})," ch\u1ec9 h\u1ed7 tr\u1ee3 v\u1edbi phi\xean b\u1ea3n ",(0,c.jsx)(n.code,{children:"1.4.0"})," tr\u1edf l\xean."]})]}),"\n",(0,c.jsxs)(n.p,{children:["\u0110\u1ec3 ghi t\u1eebng sheet b\u1ea1n d\xf9ng l\u1ec7nh ",(0,c.jsx)(n.code,{children:".to_excel()"}),". Sau khi ghi t\u1ea5t c\u1ea3 c\xe1c sheet b\u1ea1n k\u1ebft th\xfac v\u1edbi ",(0,c.jsx)(n.code,{children:"writer.save()"})," \u0111\u1ec3 l\u01b0u file"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"writer = pd.ExcelWriter('mul_sheets.xlsx', mode='w', engine='openpyxl')\r\ndf1.to_excel(writer, sheet_name='Sheet1')\r\ndf2.to_excel(writer, sheet_name='Sheet2')\r\ndf3.to_excel(writer, sheet_name='Sheet3')\r\nwriter.save()\n"})}),"\n",(0,c.jsx)(n.admonition,{title:"M\u1eb9o",type:"tip",children:(0,c.jsxs)(n.p,{children:["C\xf3 th\u1ec3 d\xf9ng ",(0,c.jsx)(n.code,{children:"with"})," \u0111\u1ec3 m\u1edf file \u0111\u1ec3 tr\xe1nh tr\u01b0\u1eddng h\u1ee3p qu\xean g\u1ecdi l\u1ec7nh ",(0,c.jsx)(n.code,{children:".save()"}),", l\u1ec7nh ",(0,c.jsx)(n.code,{children:"with"})," s\u1ebd t\u1ef1 \u0111\u1ed9ng l\u01b0u file sau khi k\u1ebft th\xfac c\xe1c l\u1ec7nh con trong n\xf3"]})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"import pandas as pd\r\ndf1 = pd.DataFrame({'col_1': [2, 3, 4, 5]})\r\ndf2 = pd.DataFrame({'col_1': ['a', 'b', 'c', 'd']})\r\ndf3 = pd.DataFrame({'col_1': [True, True, False, False]})\r\nsheet_names = ['Sheet1','Sheet2', 'Sheet3']\r\n\r\nwith pd.ExcelWriter('mul_sheets.xlsx', mode='a', if_sheet_exists='new', engine='openpyxl') as writer:\r\n    for df, sheet_name in zip([df1, df2, df3], sheet_names):\r\n        df.to_excel(writer, sheet_name)\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var c=i(6540);const s={},l=c.createContext(s);function d(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);