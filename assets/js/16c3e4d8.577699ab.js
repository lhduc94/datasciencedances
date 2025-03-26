"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[843],{2354:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(4848),d=n(8453);const o={},c="Groupby c\u01a1 b\u1ea3n",s={id:"kungfupandas/Groupby-Aggregation/Groupby-base",title:"Groupby c\u01a1 b\u1ea3n",description:"C\xfa ph\xe1p",source:"@site/docs/kungfupandas/07-Groupby-Aggregation/01-Groupby-base.mdx",sourceDirName:"kungfupandas/07-Groupby-Aggregation",slug:"/kungfupandas/Groupby-Aggregation/Groupby-base",permalink:"/docs/kungfupandas/Groupby-Aggregation/Groupby-base",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tailieuSidebar",previous:{title:"Groupby",permalink:"/docs/kungfupandas/Groupby-Aggregation/Introduction"},next:{title:"H\u01b0\u1edbng d\u1eabn c\xe0i \u0111\u1eb7t Postgres",permalink:"/docs/postgres/"}},a={},i=[{value:"C\xfa ph\xe1p",id:"c\xfa-ph\xe1p",level:2},{value:"C\xe1c ph\u01b0\u01a1ng th\u1ee9c trong Groupby Object",id:"c\xe1c-ph\u01b0\u01a1ng-th\u1ee9c-trong-groupby-object",level:2},{value:"<code>head()</code>",id:"head",level:3},{value:"<code>count()</code>",id:"count",level:3},{value:"<code>size()</code>",id:"size",level:3}];function h(t){const e={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"groupby-c\u01a1-b\u1ea3n",children:"Groupby c\u01a1 b\u1ea3n"}),"\n",(0,r.jsx)(e.h2,{id:"c\xfa-ph\xe1p",children:"C\xfa ph\xe1p"}),"\n",(0,r.jsxs)(e.p,{children:["Ph\u01b0\u01a1ng th\u1ee9c",(0,r.jsx)(e.code,{children:".groupby"})," s\u1ebd gom c\xe1c d\xf2ng ho\u1eb7c c\xe1c c\u1ed9t th\xe0nh c\xe1c nh\xf3m kh\xe1c nhau. C\xfa ph\xe1p c\u01a1 b\u1ea3n c\u1ee7a",(0,r.jsx)(e.code,{children:".groupby"}),"nh\u01b0 sau"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"DataFrame.groupby(by=None, axis=0, dropna=True)\n"})}),"\n",(0,r.jsx)(e.p,{children:"Trong \u0111\xf3:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"by: c\xf3 th\u1ec3 l\xe0 d\u1ea1ng mapping, nh\xe3n, danh s\xe1ch nh\xe3n ho\u1eb7c m\u1ed9t h\xe0m tr\u1ea3 v\u1ec1 danh s\xe1ch c\xe1c index"}),"\n",(0,r.jsxs)(e.li,{children:["axis: T\xf9y ch\u1ecdn group theo d\xf2ng ",(0,r.jsx)(e.code,{children:"{0 ho\u1eb7c index}"})," ho\u1eb7c c\u1ed9t ",(0,r.jsx)(e.code,{children:"{1 ho\u1eb7c columns}"}),", m\u1eb7c \u0111\u1ecbnh l\xe0 d\xf2ng."]}),"\n",(0,r.jsx)(e.li,{children:"dropna: M\u1eb7c \u0111\u1ecbnh l\xe0 True s\u1ebd b\u1ecf qua nh\u1eefng d\xf2ng ch\u1ee9a NA v\xe0 False s\u1ebd th\xeam NA l\xe0 m\u1ed9t kh\xf3a trong nh\xf3m, t\u01b0\u01a1ng t\u1ef1 nh\u01b0 .value_counts()"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"df = pd.read_csv('https://raw.githubusercontent.com/lhduc94/kungfupandas/master/data/bigmart-sale-data/train.csv',\r\n                 usecols=['Item_Identifier','Item_Type','Outlet_Size','Item_Outlet_Sales'])\r\ndf.head()\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\tItem_Identifier\t            Item_Type\tOutlet_Size\t    Item_Outlet_Sales\r\n0\t          FDA15\t                Dairy\t     Medium\t            3735.1380\r\n1\t          DRC01\t          Soft Drinks\t     Medium\t             443.4228\r\n2\t          FDN15\t                 Meat\t     Medium\t            2097.2700\r\n3\t          FDX07\tFruits and Vegetables\t        NaN\t             732.3800\r\n4\t          NCD19\t            Household\t       High\t             994.7052\n"})})}),"\n",(0,r.jsxs)(e.p,{children:["K\xea\u0301t qua\u0309 tra\u0309 v\xea\u0300 cu\u0309a ph\u01b0\u01a1ng th\u01b0\u0301c ",(0,r.jsx)(e.code,{children:"groupby"})," la\u0300 m\xf4\u0323t \u0111\xf4\u0301i t\u01b0\u01a1\u0323ng thu\xf4\u0323c l\u01a1\u0301p ",(0,r.jsx)(e.code,{children:"pandas.core.groupby.generic.DataFrameGroupBy"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'grouped = df.groupby("Item_Type")\r\nprint(type(grouped))\n'})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"<class 'pandas.core.groupby.generic.DataFrameGroupBy'>\n"})})}),"\n",(0,r.jsxs)(e.p,{children:["\u0110\u1ec3 xem t\u1eebng nh\xf3m trong group, ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ",(0,r.jsx)(e.code,{children:".get_groups()"})," v\xe0 truy\u1ec1n key v\xe0o \u0111\xf3. V\xed d\u1ee5 v\u1edbi key ",(0,r.jsx)(e.code,{children:"Dairy"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'grouped.get_group("Dairy").head()\n'})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\r\n    Item_Identifier\tItem_Type\tOutlet_Size\tItem_Outlet_Sales\r\n0\t          FDA15\t    Dairy\t     Medium\t        3735.1380\r\n11\t          FDA03\t    Dairy\t      Small\t        2187.1530\r\n19\t          FDU02\t    Dairy\t      Small\t        2748.4224\r\n28\t          FDE51\t    Dairy               NaN\t         178.4344\r\n30\t          FDV38\t    Dairy               NaN\t         163.7868\n"})})}),"\n",(0,r.jsxs)(e.p,{children:["Khi ch\u1ecdn 1 column sau khi .groupby s\u1ebd tr\u1ea3 \u0111\xf4\u0301i t\u01b0\u01a1\u0309ng thu\xf4\u0323c l\u01a1\u0301p ",(0,r.jsx)(e.code,{children:"pandas.core.groupby.generic.SeriesGroupBy"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"df.groupby(\"Item_Type\")['Item_Outlet_Sales']\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"<pandas.core.groupby.generic.SeriesGroupBy object at 0x0000021D41248A00>\n"})})}),"\n",(0,r.jsx)(e.h2,{id:"c\xe1c-ph\u01b0\u01a1ng-th\u1ee9c-trong-groupby-object",children:"C\xe1c ph\u01b0\u01a1ng th\u1ee9c trong Groupby Object"}),"\n",(0,r.jsx)(e.h3,{id:"head",children:(0,r.jsx)(e.code,{children:"head()"})}),"\n",(0,r.jsxs)(e.p,{children:["k\xea\u0301t qua\u0309 tra\u0309 v\xea\u0300 la\u0300 m\xf4\u0323t dataframe v\u01a1\u0301i n do\u0300ng \u0111\xe2\u0300u ti\xean cu\u0309a m\xf4\u0303i group. ",(0,r.jsx)(e.br,{}),"\n","L\u01b0u y\u0301, k\xea\u0301t qua\u0309 tra\u0309 v\xea\u0300 theo th\u01b0\u0301 t\u01b0\u0323 index, kh\xf4ng theo th\u01b0\u0301 t\u01b0\u0323 cu\u0309a ",(0,r.jsx)(e.code,{children:"by"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"df.groupby(['Item_Type']).head(n=2)\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\tItem_Identifier\tItem_Type\tOutlet_Size\tItem_Outlet_Sales\r\n0\tFDA15\tDairy\tMedium\t3735.1380\r\n1\tDRC01\tSoft Drinks\tMedium\t443.4228\r\n2\tFDN15\tMeat\tMedium\t2097.2700\r\n3\tFDX07\tFruits and Vegetables\tNaN\t732.3800\r\n4\tNCD19\tHousehold\tHigh\t994.7052\r\n5\tFDP36\tBaking Goods\tMedium\t556.6088\r\n6\tFDO10\tSnack Foods\tHigh\t343.5528\r\n7\tFDP10\tSnack Foods\tMedium\t4022.7636\r\n8\tFDH17\tFrozen Foods\tNaN\t1076.5986\r\n9\tFDU28\tFrozen Foods\tNaN\t4710.5350\r\n10\tFDY07\tFruits and Vegetables\tMedium\t1516.0266\r\n11\tFDA03\tDairy\tSmall\t2187.1530\r\n15\tFDP49\tBreakfast\tSmall\t1547.3192\r\n16\tNCB42\tHealth and Hygiene\tMedium\t1621.8888\r\n17\tFDP49\tBreakfast\tMedium\t718.3982\r\n18\tDRI11\tHard Drinks\tMedium\t2303.6680\r\n21\tFDW12\tBaking Goods\tMedium\t4064.0432\r\n22\tNCB30\tHousehold\tSmall\t1587.2672\r\n27\tDRJ59\tHard Drinks\tHigh\t308.9312\r\n29\tFDC14\tCanned\tSmall\t125.8362\r\n31\tNCS17\tHealth and Hygiene\tMedium\t2741.7644\r\n33\tFDO23\tBreads\tNaN\t2174.5028\r\n34\tDRH01\tSoft Drinks\tSmall\t2085.2856\r\n41\tFDK43\tMeat\tHigh\t2150.5340\r\n43\tFDC02\tCanned\tMedium\t6768.5228\r\n72\tFDH35\tStarchy Foods\tNaN\t4604.6728\r\n114\tFDV11\tBreads\tNaN\t3151.8972\r\n136\tFDH35\tStarchy Foods\tMedium\t5262.4832\r\n139\tNCN07\tOthers\tNaN\t263.6568\r\n142\tNCO55\tOthers\tNaN\t2143.8760\r\n231\tFDG33\tSeafood\tMedium\t3435.5280\r\n713\tFDH21\tSeafood\tMedium\t1267.6832\n"})})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"df.groupby(['Item_Type']).head(n=2).sort_values(['Item_Type'])\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{})})}),"\n",(0,r.jsx)(e.h3,{id:"count",children:(0,r.jsx)(e.code,{children:"count()"})}),"\n",(0,r.jsx)(e.p,{children:"Ph\u01b0\u01a1ng th\u1ee9c n\xe0y tr\u1ea3 v\u1ec1 s\u1ed1 l\u01b0\u1ee3ng c\xe1c ph\u1ea7n t\u1eed trong m\u1ed7i nh\xf3m."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'df.groupby("Item_Type").count()\n'})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{})})}),"\n",(0,r.jsx)(e.p,{children:"Ch\xfang ta c\xf3 th\u1ec3 th\u1ea5y h\xe0m count() \u0111\xe3 \u0111\u1ebfm s\u1ed1 l\u01b0\u1ee3ng c\xe1c ph\u1ea7n t\u1eed Not nUll trong m\u1ed7i nh\xf3m."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"df.groupby('Outlet_Size').count()\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{})})}),"\n",(0,r.jsx)(e.h3,{id:"size",children:(0,r.jsx)(e.code,{children:"size()"})}),"\n",(0,r.jsx)(e.p,{children:"Ph\u01b0\u01a1ng th\u1ee9c n\xe0y tr\u1ea3 v\u1ec1 s\u1ed1 l\u01b0\u1ee3ng c\xe1c ph\u1ea7n t\u1eed trong m\u1ed7i nh\xf3m."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'df.groupby("Item_Type").size()\n'})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Item_Type\r\nBaking Goods              648\r\nBreads                    251\r\nBreakfast                 110\r\nCanned                    649\r\nDairy                     682\r\nFrozen Foods              856\r\nFruits and Vegetables    1232\r\nHard Drinks               214\r\nHealth and Hygiene        520\r\nHousehold                 910\r\nMeat                      425\r\nOthers                    169\r\nSeafood                    64\r\nSnack Foods              1200\r\nSoft Drinks               445\r\nStarchy Foods             148\r\ndtype: int64\n"})})})]})}function l(t={}){const{wrapper:e}={...(0,d.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>s});var r=n(6540);const d={},o=r.createContext(d);function c(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(d):t.components||d:c(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);