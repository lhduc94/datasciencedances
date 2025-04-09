"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[9580],{3128:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>t});var s=c(4848),i=c(8453);const l={sidebar_label:"CSV v\xe0 TSV",sidebar_position:2},d="CSV v\xe0 TSV",r={id:"kungfupandas/IO/Csv_Tsv",title:"CSV v\xe0 TSV",description:"Gi\u1edbi thi\u1ec7u",source:"@site/docs/kungfupandas/02-IO/01-Csv_Tsv.mdx",sourceDirName:"kungfupandas/02-IO",slug:"/kungfupandas/IO/Csv_Tsv",permalink:"/docs/kungfupandas/IO/Csv_Tsv",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"CSV v\xe0 TSV",sidebar_position:2},sidebar:"kungfupandasSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/docs/kungfupandas/IO/Introduction"},next:{title:"Excel",permalink:"/docs/kungfupandas/IO/Excel"}},h={},t=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"CSV",id:"csv",level:3},{value:"TSV",id:"tsv",level:3},{value:"\u0110\u1ecdc File",id:"\u0111\u1ecdc-file",level:2},{value:"Xu\u1ea5t file",id:"xu\u1ea5t-file",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"csv-v\xe0-tsv",children:"CSV v\xe0 TSV"}),"\n",(0,s.jsx)(e.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,s.jsx)(e.p,{children:"CSV v\xe0 TSV l\xe0 hai \u0111\u1ecbnh d\u1ea1ng ph\u1ed5 bi\u1ebfn d\xf9ng \u0111\u1ec3 l\u01b0u tr\u1eef d\u1eef li\u1ec7u trong c\xe1c b\u1ea3ng.\r\nC\u1ea3 hai \u0111\u1ec1u l\xe0 d\u1ea1ng v\u0103n b\u1ea3n thu\u1ea7n, v\u1edbi c\xe1c gi\xe1 tr\u1ecb trong m\u1ed7i d\xf2ng \u0111\u01b0\u1ee3c ph\xe2n t\xe1ch b\u1edfi d\u1ea5u ph\xe2n c\xe1ch.\r\nD\u01b0\u1edbi \u0111\xe2y l\xe0 s\u1ef1 kh\xe1c bi\u1ec7t v\xe0 c\xe1ch l\xe0m vi\u1ec7c v\u1edbi hai \u0111\u1ecbnh d\u1ea1ng n\xe0y"}),"\n",(0,s.jsx)(e.h3,{id:"csv",children:"CSV"}),"\n",(0,s.jsxs)(e.p,{children:["D\u1eef li\u1ec7u trong t\u1ec7p CSV \u0111\u01b0\u1ee3c ph\xe2n t\xe1ch b\u1edfi d\u1ea5u ph\u1ea9y ",(0,s.jsx)(e.code,{children:"','"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"V\xed d\u1ee5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"id,name,age\r\n1,John,25\r\n2,Jane,30\r\n3,Bob,22\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u01afu \u0111i\u1ec3m"}),": \u0110\u01b0\u1ee3c h\u1ed7 tr\u1ee3 r\u1ed9ng r\xe3i trong c\xe1c c\xf4ng c\u1ee5 ph\xe2n t\xedch d\u1eef li\u1ec7u, nh\u01b0 Excel, Python (Pandas), c\u01a1 s\u1edf d\u1eef li\u1ec7u."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Nh\u01b0\u1ee3c \u0111i\u1ec3m"}),': N\u1ebfu d\u1eef li\u1ec7u c\xf3 d\u1ea5u ph\u1ea9y (,), ph\u1ea3i d\xf9ng d\u1ea5u ngo\u1eb7c k\xe9p (") \u0111\u1ec3 bao quanh d\u1eef li\u1ec7u \u0111\xf3 (v\xed d\u1ee5: ',(0,s.jsx)(e.code,{children:'"John, Doe"'}),")."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"tsv",children:"TSV"}),"\n",(0,s.jsxs)(e.p,{children:["D\u1eef li\u1ec7u trong t\u1ec7p TSV \u0111\u01b0\u1ee3c ph\xe2n t\xe1ch b\u1edfi d\u1ea5u tab ",(0,s.jsx)(e.code,{children:"'\\t'"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"V\xed d\u1ee5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"id\tname\tage\r\n1\tJohn\t25\r\n2\tJane\t30\r\n3\tBob     22\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u01afu \u0111i\u1ec3m"}),": Kh\xf4ng c\xf3 v\u1ea5n \u0111\u1ec1 v\u1edbi d\u1ea5u ph\u1ea9y trong d\u1eef li\u1ec7u, v\xec tab (",(0,s.jsx)(e.code,{children:"\\t"}),") l\xe0 m\u1ed9t k\xfd t\u1ef1 \xedt \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong c\xe1c gi\xe1 tr\u1ecb."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Nh\u01b0\u1ee3c \u0111i\u1ec3m"}),": \xcdt ph\u1ed5 bi\u1ebfn h\u01a1n CSV, do \u0111\xf3 c\xf3 th\u1ec3 kh\xf4ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 b\u1edfi c\xe1c c\xf4ng c\u1ee5 ho\u1eb7c n\u1ec1n t\u1ea3ng m\xe0 CSV h\u1ed7 tr\u1ee3."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u0111\u1ecdc-file",children:"\u0110\u1ecdc File"}),"\n",(0,s.jsx)(e.p,{children:"Ch\xfang ta c\xf3 th\u1ec3 \u0111\u1ecdc file csv v\u1edbi pandas theo l\u1ec7nh sau"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"df = pd.read_csv(filepath, sep=',', names=NoDefault.no_default, index_col=None, usecols=None, dtype=None, skiprows=None, skipfooter=0, nrows=None)\n"})}),"\n",(0,s.jsx)(e.p,{children:"Trong \u0111\xf3:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"filepath"})," l\xe0 \u0111\u01b0\u1eddng d\u1eabn \u0111\u1ebfn file trong m\xe1y ho\u1eb7c \u0111\u01b0\u1eddng link URL"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"sep"})," d\xf9ng \u0111\u1ec3 nh\u1eadn di\u1ec7n c\xe1ch chia th\xe0nh c\u1ed9t, n\u1ebfu kh\xf4ng truy\u1ec1n tham s\u1ed1 n\xe0y th\xec ",(0,s.jsx)(e.code,{children:"pandas"})," t\u1ef1 hi\u1ec3u l\xe0 chia theo ",(0,s.jsx)(e.code,{children:"','"}),", ngo\xe0i ra c\xf3 th\u1ec3 chia theo ",(0,s.jsx)(e.code,{children:"';'"})," \u0111\u1ed1i v\u1edbi macOS v\xe0 ",(0,s.jsx)(e.code,{children:"'\\t'"})," v\u1edbi file c\xf3 \u0111\u1ecbnh d\u1ea1ng ",(0,s.jsx)(e.code,{children:".tsv"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"names"})," l\xe0 t\xean c\xe1c c\u1ed9t c\u1ee7a b\u1ea3ng. N\u1ebfu b\u1ea3ng \u0111\xe3 c\xf3 t\xean c\u1ed9t th\xec n\xean b\u1ecf qua tham s\u1ed1 n\xe0y, ",(0,s.jsx)(e.code,{children:"pandas"})," s\u1ebd l\u1ea5y d\xf2ng \u0111\u1ea7u ti\xean c\u1ee7a file l\xe0m t\xean c\u1ed9t."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"index_col"})," d\xf9ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh v\u1ecb tr\xed c\xe1c c\u1ed9t d\xf9ng \u0111\u1ec3 l\xe0m index cho b\u1ea3ng."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"usecols"})," d\xf9ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh v\u1ecb tr\xed ho\u1eb7c t\xean c\xe1c c\u1ed9t c\u1ea7n \u0111\u1ecdc."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"dtype"})," d\xf9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a c\xe1c c\u1ed9t."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"skiprows"})," \u0111\u01b0\u1ee3c d\xf9ng khi mu\u1ed1n b\u1ecf qua m\u1ed9t s\u1ed1 d\xf2ng \u0111\u1ea7u c\u1ee7a b\u1ea3ng."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"skipfooter"})," t\u01b0\u01a1ng t\u1ef1 nh\u01b0 ",(0,s.jsx)(e.code,{children:"skiprows"})," nh\u01b0ng s\u1ebd b\u1ecf qua c\xe1c d\xf2ng cu\u1ed1i c\xf9ng c\u1ee7a b\u1ea3ng."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"nrows"})," d\xf9ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh s\u1ed1 l\u01b0\u1ee3ng d\xf2ng c\u1ee7a b\u1ea1n m\xe0 b\u1ea1n s\u1ebd \u0111\u1ecdc b\u1eb1ng ",(0,s.jsx)(e.code,{children:"pandas"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"V\xed d\u1ee5"})}),"\n",(0,s.jsxs)(e.p,{children:["\u0110\u1ecdc file d\u1eef li\u1ec7u sale \u0111\u01b0\u1ee3c cho t\u1ea1i ",(0,s.jsx)(e.a,{href:"https://raw.githubusercontent.com/lhduc94/kungfupandas/master/data/sales_subset.csv",children:"\u0111\xe2y"}),".\r\nC\xe1c b\u1ea1n c\xf3 th\u1ec3 xem qua d\u1eef li\u1ec7u m\u1eabu"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:",store,type,department,date,weekly_sales,is_holiday,temperature_c,fuel_price_usd_per_l,unemployment\r\n0,1,A,1,2010-02-05,24924.5,False,5.727777777777779,0.6794508388787476,8.106\r\n1,1,A,1,2010-03-05,21827.9,False,8.055555555555555,0.693451964252221,8.106\r\n2,1,A,1,2010-04-02,57258.43,False,16.81666666666667,0.718284148876872,7.808\r\n3,1,A,1,2010-05-07,17413.94,False,22.52777777777778,0.7489281213923986,7.808\r\n4,1,A,1,2010-06-04,17558.09,False,27.049999999999997,0.7145857384008601,7.808\r\n5,1,A,1,2010-07-02,16333.14,False,27.17222222222222,0.7050755400339724,7.787000000000001\r\n6,1,A,1,2010-08-06,17508.41,False,30.64444444444444,0.693980308605937,7.787000000000001\r\n7,1,A,1,2010-09-03,16241.78,False,27.338888888888885,0.6807716997630375,7.787000000000001\r\n8,1,A,1,2010-10-01,20094.19,False,22.16111111111111,0.6876401763613453,7.837999999999999\r\n9,1,A,1,2010-11-05,34238.88,False,14.855555555555558,0.7103589835711321,7.837999999999999\r\n10,1,A,1,2010-12-03,22517.56,False,9.594444444444447,0.7153782549314341,7.837999999999999\r\n11,1,A,1,2011-01-07,15984.24,False,9.038888888888891,0.7861763983293752,7.742000000000001\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Gi\u1ea3 s\u1eed ta ch\u1ec9 l\u1ea5y c\xe1c c\u1ed9t ",(0,s.jsx)(e.code,{children:"date"}),", ",(0,s.jsx)(e.code,{children:"weekly_sales"})," v\xe0 ",(0,s.jsx)(e.code,{children:"is_holiday"})," v\xe0 l\u1ea5y c\u1ed9t ",(0,s.jsx)(e.code,{children:"date"})," l\xe0m ",(0,s.jsx)(e.code,{children:"index"})," v\xe0 ch\u1ec9 l\u1ea5y 6 d\xf2ng \u0111\u1ea7u"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"df = pd.read_csv('https://raw.githubusercontent.com/lhduc94/kungfupandas/master/data/sales_subset.csv', index_col=['date'], usecols=['date','weekly_sales','is_holiday'], nrows=6)\r\ndf\n"})}),"\n",(0,s.jsx)("pythonoutput",{children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"            weekly_sales  is_holiday\r\ndate                                \r\n2010-02-05      24924.50       False\r\n2010-03-05      21827.90       False\r\n2010-04-02      57258.43       False\r\n2010-05-07      17413.94       False\r\n2010-06-04      17558.09       False\r\n2010-07-02      16333.14       False\n"})})}),"\n",(0,s.jsx)(e.h2,{id:"xu\u1ea5t-file",children:"Xu\u1ea5t file"}),"\n",(0,s.jsxs)(e.p,{children:["\u0110\u1ec3 l\u01b0u ",(0,s.jsx)(e.code,{children:"DataFrame"})," d\u01b0\u1edbi d\u1ea1ng file ta c\xf3 th\u1ec3 d\xf9ng c\xe2u l\u1ec7nh ",(0,s.jsx)(e.code,{children:".to_csv()"})," theo c\xfa ph\xe1p sau"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"df.to_csv(filename, sep=',', columns=None, header=True, index=True)\n"})}),"\n",(0,s.jsx)(e.p,{children:"Trong \u0111\xf3:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"filename"})," l\xe0 \u0111\u1ecba ch\u1ec9 file m\xe0 b\u1ea1n mu\u1ed1n l\u01b0u l\u1ea1i"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"sep"})," t\u01b0\u01a1ng t\u1ef1 nh\u01b0 l\xfac \u0111\u1ecdc file"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"columns"})," l\xe0 t\xean c\xe1c c\u1ed9t b\u1ea1n mu\u1ed1n l\u01b0u xu\u1ed1ng, n\u1ebfu mu\u1ed1n l\u01b0u t\u1ea5t c\u1ea3 c\xe1c c\u1ed9t th\xec\r\nb\u1ea1n c\xf3 th\u1ec3 b\u1ecf qua tham s\u1ed1 n\xe0y."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"header"})," m\u1eb7c \u0111\u1ecbnh l\xe0 ",(0,s.jsx)(e.code,{children:"True"})," n\u1ebfu b\u1ea1n mu\u1ed1n l\u01b0u t\xean c\u1ed9t"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"index"})," m\u1eb7c \u0111\u1ecbnh l\xe0 ",(0,s.jsx)(e.code,{children:"True"})," n\u1ebfu b\u1ea1n mu\u1ed1n l\u01b0u index c\u1ee7a b\u1ea3ng."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"V\xed d\u1ee5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"df.to_csv('sales.csv', columns='weekly_sales', index=False)\n"})})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,c)=>{c.d(e,{R:()=>d,x:()=>r});var s=c(6540);const i={},l=s.createContext(i);function d(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);