"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[150],{7389:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var c=i(4848),l=i(8453);const r={sidebar_label:"Ch\u1ecdn d\u1eef li\u1ec7u",sidebar_position:2},d="Ch\u1ecdn d\u1eef li\u1ec7u",s={id:"kungfupandas/SelectingAndFiltering/Select",title:"Ch\u1ecdn d\u1eef li\u1ec7u",description:"Ch\u1ecdn d\u1eef li\u1ec7u d\xf9ng []",source:"@site/docs/kungfupandas/04-SelectingAndFiltering/01-Select.mdx",sourceDirName:"kungfupandas/04-SelectingAndFiltering",slug:"/kungfupandas/SelectingAndFiltering/Select",permalink:"/docs/kungfupandas/SelectingAndFiltering/Select",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Ch\u1ecdn d\u1eef li\u1ec7u",sidebar_position:2},sidebar:"tailieuSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/docs/kungfupandas/SelectingAndFiltering/Introduction"},next:{title:"H\u01b0\u1edbng d\u1eabn c\xe0i \u0111\u1eb7t Postgres",permalink:"/docs/postgres/"}},a={},o=[{value:"Ch\u1ecdn d\u1eef li\u1ec7u d\xf9ng <code>[]</code>",id:"ch\u1ecdn-d\u1eef-li\u1ec7u-d\xf9ng-",level:2},{value:"Ch\u1ecdn d\u1eef li\u1ec7u d\xf9ng <code>.loc</code>",id:"ch\u1ecdn-d\u1eef-li\u1ec7u-d\xf9ng-loc",level:2},{value:"Ch\u1ecdn d\u1eef li\u1ec7u d\xf9ng <code>.iloc</code>",id:"ch\u1ecdn-d\u1eef-li\u1ec7u-d\xf9ng-iloc",level:2}];function t(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"ch\u1ecdn-d\u1eef-li\u1ec7u",children:"Ch\u1ecdn d\u1eef li\u1ec7u"}),"\n",(0,c.jsxs)(e.h2,{id:"ch\u1ecdn-d\u1eef-li\u1ec7u-d\xf9ng-",children:["Ch\u1ecdn d\u1eef li\u1ec7u d\xf9ng ",(0,c.jsx)(e.code,{children:"[]"})]}),"\n",(0,c.jsxs)(e.p,{children:["C\xfa ph\xe1p ",(0,c.jsx)(e.code,{children:"[]"})," l\xe0 c\xfa ph\xe1p \u0111\u01a1n gi\u1ea3n nh\u1ea5t \u0111\u1ec3 l\u1ea5y b\u1ea3ng con c\u1ee7a 1 b\u1ea3ng cho tr\u01b0\u1edbc.\r\nV\u1edbi 1 ",(0,c.jsx)(e.code,{children:"df"})," l\xe0 1 ",(0,c.jsx)(e.code,{children:"DataFrame"})," c\xf3 index l\xe0 ",(0,c.jsx)(e.code,{children:"region"})," v\xe0 d\u1eef li\u1ec7u nh\u01b0 sau"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"                         state  individuals  family_members  state_pop\r\nregion                                                                \r\nEast South Central     Alabama       2570.0           864.0    4887681\r\nPacific                 Alaska       1434.0           582.0     735139\r\nMountain               Arizona       7259.0          2606.0    7158024\r\nWest South Central    Arkansas       2280.0           432.0    3009733\r\nPacific             California     109008.0         20964.0   39461588\r\nMountain              Colorado       7607.0          3250.0    5691287\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u0110\u1ec3 ch\u1ecdn 1 b\u1ea3ng con c\xf3 2 c\u1ed9t ",(0,c.jsx)(e.code,{children:"['state', 'family_members']"})," ta l\xe0m nh\u01b0 sau"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df[['state', 'family_members']]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                         state  family_members\r\nregion                                        \r\nEast South Central     Alabama           864.0\r\nPacific                 Alaska           582.0\r\nMountain               Arizona          2606.0\r\nWest South Central    Arkansas           432.0\r\nPacific             California         20964.0\r\nMountain              Colorado          3250.0\n"})})}),"\n",(0,c.jsxs)(e.p,{children:["\u0110\u1ec3 l\u1ea5y theo d\xf2ng ta d\xf9ng t\u01b0\u01a1ng t\u1ef1 ",(0,c.jsx)(e.code,{children:"Series"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df[:3]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                      state  individuals  family_members  state_pop\r\nregion                                                             \r\nEast South Central  Alabama       2570.0           864.0    4887681\r\nPacific              Alaska       1434.0           582.0     735139\r\nMountain            Arizona       7259.0          2606.0    7158024\r\n\n"})})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df[2:5]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                         state  individuals  family_members  state_pop\r\nregion                                                                \r\nMountain               Arizona       7259.0          2606.0    7158024\r\nWest South Central    Arkansas       2280.0           432.0    3009733\r\nPacific             California     109008.0         20964.0   39461588\n"})})}),"\n",(0,c.jsx)(e.admonition,{title:"L\u01b0u \xfd",type:"info",children:(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"df[['state']]"})," s\u1ebd tr\u1ea3 v\u1ec1 ",(0,c.jsx)(e.code,{children:"DataFrame"})," trong khi ",(0,c.jsx)(e.code,{children:"df['state']"})," tr\u1ea3 v\u1ec1 ",(0,c.jsx)(e.code,{children:"Series"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u0110\u1ed1i v\u1edbi l\u1ea5y theo d\xf2ng, ",(0,c.jsx)(e.code,{children:"[]"})," kh\xf4ng l\u1ea5y \u0111\u01b0\u1ee3c theo d\xf2ng ri\xeang bi\u1ec7t."]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"[]"})," ch\u1ec9 l\u1ea5y d\u1eef li\u1ec7u theo d\xf2ng ho\u1eb7c c\u1ed9t, kh\xf4ng th\u1ef1c hi\u1ec7n \u0111\u01b0\u1ee3c c\xf9ng l\xfac c\u1ea3 hai thao t\xe1c."]}),"\n"]}),"\n"]})}),"\n",(0,c.jsxs)(e.p,{children:["V\xed d\u1ee5 khi g\u1ecdi ",(0,c.jsx)(e.code,{children:"df[3]"})," hay ",(0,c.jsx)(e.code,{children:"df[[1, 2, 3]]"})," s\u1ebd b\xe1o l\u1ed7i ",(0,c.jsx)(e.code,{children:"KeyError"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df[3]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"KeyError\n"})})}),"\n",(0,c.jsxs)(e.h2,{id:"ch\u1ecdn-d\u1eef-li\u1ec7u-d\xf9ng-loc",children:["Ch\u1ecdn d\u1eef li\u1ec7u d\xf9ng ",(0,c.jsx)(e.code,{children:".loc"})]}),"\n",(0,c.jsxs)(e.p,{children:["Ph\u01b0\u01a1ng th\u1ee9c ",(0,c.jsx)(e.code,{children:".loc"})," d\xf9ng \u0111\u1ec3 l\u1ea5y d\u1eef li\u1ec7u theo c\u1ed9t ho\u1eb7c h\xe0ng d\u1ef1a theo nh\xe3n \u0111\u1ecbnh s\u1eb5n (T\xean h\xe0ng, t\xean c\u1ed9t), ngo\xe0i ra ",(0,c.jsx)(e.code,{children:".loc"})," c\xf2n nh\u1eadn c\xe1c gi\xe1 tr\u1ecb boolean."]}),"\n",(0,c.jsxs)(e.p,{children:["\u0110\u1ea7u v\xe0o c\u1ee7a ",(0,c.jsx)(e.code,{children:".loc"})," c\xf3 th\u1ec3 g\u1ed3m:"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["Nh\xe3n \u0111\u01a1n: l\xe0 1 s\u1ed1 ",(0,c.jsx)(e.code,{children:"3"})," ho\u1eb7c d\u1ea1ng ch\u1eef ",(0,c.jsx)(e.code,{children:"a"}),", l\u01b0u \xfd r\u1eb1ng s\u1ed1 n\xe0y l\xe0 nh\xe3n c\u1ee7a ",(0,c.jsx)(e.code,{children:"index"})," ch\u1ee9 kh\xf4ng ph\u1ea3i v\u1ecb tr\xed c\u1ee7a d\xf2ng."]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["Danh s\xe1ch c\xe1c nh\xe3n : ",(0,c.jsx)(e.code,{children:"['a', 'b', 'c']"})]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u0110\u1ed1i t\u01b0\u1ee3ng d\u1ea1ng slice v\xed d\u1ee5 ",(0,c.jsx)(e.code,{children:"'a':'e'"})]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["Danh s\xe1ch ki\u1ec3u ",(0,c.jsx)(e.code,{children:"bool"})," c\xf3 \u0111\u1ed9 d\xe0i b\u1eb1ng v\u1edbi s\u1ed1 l\u01b0\u1ee3ng d\xf2ng"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"Series"})," d\u1ea1ng ",(0,c.jsx)(e.code,{children:"bool"})]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"pd.Index"})}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["S\u1eed d\u1ee5ng nh\xe3n \u0111\u01a1n, k\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1 l\xe0 c\xe1c d\xf2ng c\xf3 nh\xe3n gi\u1ed1ng nh\u01b0 nh\xe3n trong ",(0,c.jsx)(e.code,{children:".loc"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc['Pacific']\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"              state  individuals  family_members  state_pop\r\nregion                                                     \r\nPacific      Alaska       1434.0           582.0     735139\r\nPacific  California     109008.0         20964.0   39461588\n"})})}),"\n",(0,c.jsx)(e.admonition,{title:"L\u01b0u \xfd",type:"info",children:(0,c.jsxs)(e.p,{children:["Khi k\u1ebft qu\u1ea3 l\xe0 nhi\u1ec1u d\xf2ng th\xec d\u1eef li\u1ec7u tr\u1ea3 v\u1ec1 c\xf3 ki\u1ec3u ",(0,c.jsx)(e.code,{children:"DataFrame"}),", trong khi n\u1ebfu ch\u1ec9 c\xf3 1 d\xf2ng duy nh\u1ea5t th\xec k\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1 s\u1ebd theo ki\u1ec3u ",(0,c.jsx)(e.code,{children:"Series"})]})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"type(df.loc['Pacific'])\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"<class 'pandas.core.frame.DataFrame'>\n"})})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"type(df.loc['West South Central'])\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"<class 'pandas.core.series.Series'>\n"})})}),"\n",(0,c.jsxs)(e.p,{children:["Khi \u0111\u01b0a danh s\xe1ch c\xe1c nh\xe3n d\xf9ng ",(0,c.jsx)(e.code,{children:".loc[[]]"})," th\xec nh\xe3n \u0111\u01b0a v\xe0o l\xe0 nh\xe3n c\u1ee7a ",(0,c.jsx)(e.code,{children:"index"}),". N\u1ebfu \u0111\u01b0a t\xean c\xe1c c\u1ed9t s\u1ebd b\u1ecb b\xe1o l\u1ed7i ",(0,c.jsx)(e.code,{children:"KeyError"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc[['Pacific', 'Mountain']]\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-{.python_output}",children:"               state  individuals  family_members  state_pop\r\nregion                                                      \r\nPacific       Alaska       1434.0           582.0     735139\r\nPacific   California     109008.0         20964.0   39461588\r\nMountain     Arizona       7259.0          2606.0    7158024\r\nMountain    Colorado       7607.0          3250.0    5691287\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u0110\u1ec3 l\u1ea5y nh\xe3n \u0111\u01a1n theo nh\xe3n c\u1ee7a ",(0,c.jsx)(e.code,{children:"index"})," v\xe0 t\xean ",(0,c.jsx)(e.code,{children:"column"})," ta truy\u1ec1n v\xe0o ph\u1ea7n nh\xe3n c\u1ee7a ",(0,c.jsx)(e.code,{children:"index"})," tr\u01b0\u1edbc v\xe0 nh\xe3n c\u1ee7a ",(0,c.jsx)(e.code,{children:"column"})," sau v\xe0 ph\xe2n bi\u1ec7t b\u1edfi d\u1ea5u ph\u1ea9y"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc['Pacific', 'state']\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"region\r\nPacific        Alaska\r\nPacific    California\r\nName: state, dtype: object\n"})})}),"\n",(0,c.jsxs)(e.p,{children:["\u0110\u1ec3 l\u1ea5y nhi\u1ec1u h\u01a1n 1 nh\xe3n c\u1ee7a ",(0,c.jsx)(e.code,{children:"index"})," ho\u1eb7c nhi\u1ec1u h\u01a1n 1 nh\xe3n c\u1ee7a ",(0,c.jsx)(e.code,{children:"column"})," ta ch\u1ec9 c\u1ea7n thay th\u1ebf nh\xe3n \u0111\u01a1n c\u1ee7a ",(0,c.jsx)(e.code,{children:"index"})," th\xe0nh danh s\xe1ch ho\u1eb7c slice, t\u01b0\u01a1ng t\u1ef1 ta c\xf3 th\u1ebf thay th\u1ebf nh\xe3n \u0111\u01a1n th\xe0nh danh s\xe1ch ho\u1eb7c slice c\u1ee7a ",(0,c.jsx)(e.code,{children:"column"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc['Pacific', ['individuals', 'family_members']])\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"         individuals  family_members\r\nregion                              \r\nPacific       1434.0           582.0\r\nPacific     109008.0         20964.0\n"})})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc['Pacific', 'individuals':'state_pop']\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"         individuals  family_members  state_pop\r\nregion                                         \r\nPacific       1434.0           582.0     735139\r\nPacific     109008.0         20964.0   39461588\n"})})}),"\n",(0,c.jsx)(e.admonition,{title:"L\u01b0u \xfd",type:"info",children:(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["D\xf9ng slice s\u1ebd l\u1ea5y theo th\u1ee9 t\u1ef1 xu\u1ea5t hi\u1ec7n ch\u1ee9 kh\xf4ng l\u1ea5y theo th\u1ee9 t\u1ef1 s\u1eafp x\u1ebfp t\u1eeb \u0111i\u1ec3n, nh\u01b0 v\xed d\u1ee5 tr\xean th\xec m\u1eb7c d\xf9 ",(0,c.jsx)(e.code,{children:"family_members"})," > ",(0,c.jsx)(e.code,{children:"individuals"})," nh\u01b0ng v\u1eabn x\u1ebfp sau."]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["Slice kh\xf4ng \xe1p d\u1ee5ng \u0111\u01b0\u1ee3c cho ",(0,c.jsx)(e.code,{children:"index"})," c\xf3 nh\xe3n tr\xf9ng nhau, n\u1ebfu d\xf9ng s\u1ebd b\xe1o l\u1ed7i ",(0,c.jsx)(e.code,{children:'KeyError: "Cannot get right slice bound for non-unique label:'})]}),"\n"]}),"\n"]})}),"\n",(0,c.jsxs)(e.p,{children:["Danh s\xe1ch d\u1ea1ng ",(0,c.jsx)(e.code,{children:"boolean"}),", ch\u1ec9 s\u1eed d\u1ee5ng cho ",(0,c.jsx)(e.code,{children:"index"}),", kh\xf4ng d\xf9ng cho ",(0,c.jsx)(e.code,{children:"column"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc[[False, True, False, True, False, False]]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                       state  individuals  family_members  state_pop\r\nregion                                                              \r\nPacific               Alaska       1434.0           582.0     735139\r\nWest South Central  Arkansas       2280.0           432.0    3009733\n"})})}),"\n",(0,c.jsx)(e.p,{children:"Series boolean"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"s = pd.Series([False, True, False, True, False, False],\r\n              index=['East South Central', 'Pacific', 'Mountain', 'West South Central', 'Pacific', 'Mountain'])\r\ndf.loc[s]\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-{.python_output}",children:"                       state  individuals  family_members  state_pop\r\nregion                                                              \r\nPacific               Alaska       1434.0           582.0     735139\r\nWest South Central  Arkansas       2280.0           432.0    3009733\n"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"pd.Index"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:'df.loc[pd.Index(["Pacific", "East South Central"], name="meow")]\n'})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-{.python_output}",children:"                         state  individuals  family_members  state_pop\r\nmeow                                                                   \r\nPacific                 Alaska       1434.0           582.0     735139\r\nPacific             California     109008.0         20964.0   39461588\r\nEast South Central     Alabama       2570.0           864.0    4887681\n"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsxs)(e.strong,{children:["Select v\u1edbi ",(0,c.jsx)(e.code,{children:"MultiIndex"})]})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"                     individuals  family_members  state_pop\r\nregion   state                                             \r\nMountain Arizona          7259.0          2606.0    7158024\r\n         Colorado         7607.0          3250.0    5691287\r\n         Idaho            1297.0           715.0    1750536\r\nPacific  Alaska           1434.0           582.0     735139\r\n         California     109008.0         20964.0   39461588\r\n         Hawaii           4131.0          2399.0    1420593\n"})}),"\n",(0,c.jsx)(e.p,{children:"V\u1edbi nh\xe3n \u0111\u01a1n"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc['Mountain']\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-{.python_output}",children:"          individuals  family_members  state_pop\r\nstate                                           \r\nArizona        7259.0          2606.0    7158024\r\nColorado       7607.0          3250.0    5691287\r\nIdaho          1297.0           715.0    1750536\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-{block2,",metastring:"type='rmdnote'}",children:"**_L\u01b0u \xfd:_** \r\nV\u1edbi `MultiIndex`,c\xe1c index s\u1ebd x\u1ebfp theo th\u1ee9 t\u1ef1 t\u1eeb level 0 \u0111\u1ebfn n (`level 0` cao h\u01a1n `level 1` ...),  v\u1edbi nh\xe3n \u0111\u01a1n l\xe0 nh\xe3n c\u1ee7a 1 `index` th\xec ch\u1ec9 th\u1ef1c hi\u1ec7n \u0111\u01b0\u1ee3c index level \u0111\u1ea7u ti\xean, c\xe1c index level sau s\u1ebd b\xe1o l\u1ed7i.\r\nTheo nh\u01b0 v\xed d\u1ee5 tr\xean th\xec `region` c\xf3 level cao h\u01a1n 'state' n\xean ch\u1ec9 g\u1ecdi \u0111\u01b0\u1ee3c `.loc['Mountain']` c\xf2n `.loc['Arizona']` s\u1ebd b\xe1o l\u1ed7i\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u0110\u1ec3 select nhi\u1ec1u index c\xf9ng l\xfac, ta truy\u1ec1n v\xe0o ",(0,c.jsx)(e.code,{children:"tuple(label1, label2...)"})," theo th\u1ee9 t\u1ef1 index c\xf3 level t\u1eeb cao \u0111\u1ebfn th\u1ea5p"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc[('Mountain', 'Colorado')]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"individuals          7607.0\r\nfamily_members       3250.0\r\nstate_pop         5691287.0\r\nName: (Mountain, Colorado), dtype: float64\n"})})}),"\n",(0,c.jsx)(e.p,{children:"T\u01b0\u01a1ng t\u1ef1 ta c\xf9ng c\xf3 select theo c\xe1c column cho tr\u01b0\u1edbc"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc[('Mountain', 'Colorado'), ['individuals', 'family_members']]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"individuals       7607.0\r\nfamily_members    3250.0\r\nName: (Mountain, Colorado), dtype: float64\n"})})}),"\n",(0,c.jsx)(e.admonition,{title:"M\u1eb9o",type:"tip",children:(0,c.jsxs)(e.p,{children:["C\xf3 th\u1ec3 select ",(0,c.jsx)(e.code,{children:"index"})," \u1edf c\xe1c level sau b\u1eb1ng c\xe1ch d\xf9ng ",(0,c.jsx)(e.code,{children:"slice"})]})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc[(slice(None), 'Arizona'), :]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                  individuals  family_members  state_pop\r\nregion   state                                          \r\nMountain Arizona       7259.0          2606.0    7158024\n"})})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"Slice cho MultiIndex"})}),"\n",(0,c.jsx)(e.p,{children:"Slice t\u1eeb 1 tuple nh\xe3n \u0111\u1ebfn m\u1ed9t nh\xe3n \u0111\u01a1n"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc[('Mountain', 'Colorado'):'Pacific']\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-{.python_output}",children:"                     individuals  family_members  state_pop\r\nregion   state                                             \r\nMountain Colorado         7607.0          3250.0    5691287\r\n         Idaho            1297.0           715.0    1750536\r\nPacific  Alaska           1434.0           582.0     735139\r\n         California     109008.0         20964.0   39461588\r\n         Hawaii           4131.0          2399.0    1420593\n"})}),"\n",(0,c.jsx)(e.admonition,{title:"L\u01b0u \xfd",type:"info",children:(0,c.jsxs)(e.p,{children:["Nh\xe3n \u0111\u01a1n ph\xeda sau ph\u1ea3i c\xf3 c\xf9ng level v\u1edbi nh\xe3n \u0111\u1ea7u ti\xean trong tuple. Trong v\xed d\u1ee5 tr\xean n\u1ebfu thay ",(0,c.jsx)(e.code,{children:"Pacific"})," th\xe0nh ",(0,c.jsx)(e.code,{children:"Hawaii"})," s\u1ebd tr\u1ea3 v\u1ec1 r\u1ed7ng. Nh\u01b0ng khi truy\u1ec1n nh\xe3n kh\xf4ng n\u1eb1m trong c\xe1c nh\xe3n c\u1ee7a index th\xec v\u1eabn c\xf3 k\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1"]})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc[('Mountain', 'Colorado'): 'meow']\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                     individuals  family_members  state_pop\r\nregion   state                                             \r\nMountain Colorado         7607.0          3250.0    5691287\r\n         Idaho            1297.0           715.0    1750536\r\nPacific  Alaska           1434.0           582.0     735139\r\n         California     109008.0         20964.0   39461588\r\n         Hawaii           4131.0          2399.0    1420593\n"})})}),"\n",(0,c.jsx)(e.p,{children:"Slice t\u1eeb 1 tuple nh\xe3n \u0111\u1ebfn m\u1ed9t tuple nh\xe3n"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.loc[('Mountain', 'Colorado'):('Pacific', 'California')]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                     individuals  family_members  state_pop\r\nregion   state                                             \r\nMountain Colorado         7607.0          3250.0    5691287\r\n         Idaho            1297.0           715.0    1750536\r\nPacific  Alaska           1434.0           582.0     735139\r\n         California     109008.0         20964.0   39461588\n"})})}),"\n",(0,c.jsxs)(e.h2,{id:"ch\u1ecdn-d\u1eef-li\u1ec7u-d\xf9ng-iloc",children:["Ch\u1ecdn d\u1eef li\u1ec7u d\xf9ng ",(0,c.jsx)(e.code,{children:".iloc"})]}),"\n",(0,c.jsxs)(e.p,{children:["Ph\u01b0\u01a1ng th\u1ee9c ",(0,c.jsx)(e.code,{children:".iloc"})," d\xf9ng \u0111\u1ec3 l\u1ea5y d\u1eef li\u1ec7u theo c\u1ed9t ho\u1eb7c h\xe0ng d\u1ef1a theo index c\u1ee7a n\xf3, ngo\xe0i ra ",(0,c.jsx)(e.code,{children:".iloc"})," c\xf2n nh\u1eadn c\xe1c gi\xe1 tr\u1ecb boolean."]}),"\n",(0,c.jsxs)(e.p,{children:["\u0110\u1ea7u v\xe0o c\u1ee7a ",(0,c.jsx)(e.code,{children:".iloc"})," c\xf3 th\u1ec3 g\u1ed3m:"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["Nh\xe3n \u0111\u01a1n: l\xe0 1 s\u1ed1 ",(0,c.jsx)(e.code,{children:"3"})]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["Danh s\xe1ch c\xe1c s\u1ed1 : ",(0,c.jsx)(e.code,{children:"[1, 2, 3]"})]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u0110\u1ed1i t\u01b0\u1ee3ng d\u1ea1ng slice v\xed d\u1ee5 ",(0,c.jsx)(e.code,{children:"1:5"})]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["Danh s\xe1ch ki\u1ec3u ",(0,c.jsx)(e.code,{children:"bool"})," c\xf3 \u0111\u1ed9 d\xe0i b\u1eb1ng v\u1edbi s\u1ed1 l\u01b0\u1ee3ng d\xf2ng"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"V\xed d\u1ee5 v\u1edbi DataFrame"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"                         state  individuals  family_members  state_pop\r\nregion                                                                \r\nEast South Central     Alabama       2570.0           864.0    4887681\r\nPacific                 Alaska       1434.0           582.0     735139\r\nMountain               Arizona       7259.0          2606.0    7158024\r\nWest South Central    Arkansas       2280.0           432.0    3009733\r\nPacific             California     109008.0         20964.0   39461588\r\nMountain              Colorado       7607.0          3250.0    5691287\n"})}),"\n",(0,c.jsxs)(e.p,{children:["Khi truy\u1ec1n 1 gi\xe1 tr\u1ecb nguy\xean, ",(0,c.jsx)(e.code,{children:".iloc"})," tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb c\u1ee7a d\xf2ng t\u1ea1i v\u1ecb tr\xed truy\u1ec1n v\xe0o v\u1edbi ki\u1ec3u ",(0,c.jsx)(e.code,{children:"Series"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.iloc[0]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"state             Alabama\r\nindividuals        2570.0\r\nfamily_members      864.0\r\nstate_pop         4887681\r\nName: East South Central, dtype: object\n"})})}),"\n",(0,c.jsx)(e.admonition,{title:"L\u01b0u \xfd",type:"info",children:(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"Series"})," tr\u1ea3 v\u1ec1 kh\xf4ng ch\u1ee9a nh\xe3n c\u1ee7a index, \u1edf \u0111\xe2y l\xe0 nh\xe3n ",(0,c.jsx)(e.code,{children:"East South Central"})," c\u1ee7a index ",(0,c.jsx)(e.code,{children:"region"})]})}),"\n",(0,c.jsxs)(e.p,{children:["\u0110\u1ec3 l\u1ea5y d\u1eef li\u1ec7u theo c\u1ed9t, v\xed d\u1ee5 mu\u1ed1n l\u1ea5y c\u1ed9t ",(0,c.jsx)(e.code,{children:"family_members"})," th\xec s\u1ebd truy\u1ec1n index c\u1ed9t l\xe0 ",(0,c.jsx)(e.code,{children:"2"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.iloc[:, 2]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"region\r\nEast South Central      864.0\r\nPacific                 582.0\r\nMountain               2606.0\r\nWest South Central      432.0\r\nPacific               20964.0\r\nMountain               3250.0\r\nName: family_members, dtype: float64\n"})})}),"\n",(0,c.jsx)(e.admonition,{title:"M\u1eb9o",type:"tip",children:(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:".iloc"})," b\u1eaft bu\u1ed9c truy\u1ec1n v\xe0o v\u1ecb tr\xed c\u1ee7a c\u1ed9t, kh\xf4ng cho ph\xe9p t\xean c\u1ed9t."]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["S\u1eed d\u1ee5ng ",(0,c.jsx)(e.code,{children:".columns.get_loc(<t\xean c\u1ed9t>)"})," \u0111\u1ec3 l\u1ea5y v\u1ecb tr\xed c\u1ee7a c\u1ed9t"]}),"\n"]}),"\n"]})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.iloc[:, df.columns.get_loc('family_members')]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"region\r\nEast South Central      864.0\r\nPacific                 582.0\r\nMountain               2606.0\r\nWest South Central      432.0\r\nPacific               20964.0\r\nMountain               3250.0\r\nName: family_members, dtype: float64\n"})})}),"\n",(0,c.jsxs)(e.p,{children:["Select theo danh s\xe1ch, m\u1eb7c \u0111\u1ecbnh \u0111\u01b0a v\xe0o 1 danh s\xe1ch ",(0,c.jsx)(e.code,{children:"Pandas"})," s\u1ebd hi\u1ec3u l\xe0 l\u1ea5y theo c\xe1c d\xf2ng"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.iloc[[1, 3 ,5]]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                   individuals  family_members  state_pop\r\nregion   state                                           \r\nMountain Colorado       7607.0          3250.0    5691287\r\nPacific  Alaska         1434.0           582.0     735139\r\n         Hawaii         4131.0          2399.0    1420593\n"})})}),"\n",(0,c.jsx)(e.admonition,{title:"M\u1eb9o",type:"tip",children:(0,c.jsxs)(e.p,{children:["D\xf2ng l\u1ec7nh tr\xean c\u0169ng t\u01b0\u01a1ng \u0111\u01b0\u01a1ng v\u1edbi ",(0,c.jsx)(e.code,{children:"df.iloc[[1, 3 ,5], :]"}),", trong \u0111\xf3 ",(0,c.jsx)(e.code,{children:":"})," d\xf9ng \u0111\u1ec3 l\u1ea5y to\xe0n b\u1ed9"]})}),"\n",(0,c.jsx)(e.p,{children:"T\u01b0\u01a1ng t\u1ef1 \u0111\u1ec3 l\u1ea5y theo danh s\xe1ch index c\xe1c c\u1ed9t"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.iloc[:, [0, 2]]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                     individuals  state_pop\r\nregion   state                             \r\nMountain Arizona          7259.0    7158024\r\n         Colorado         7607.0    5691287\r\n         Idaho            1297.0    1750536\r\nPacific  Alaska           1434.0     735139\r\n         California     109008.0   39461588\r\n         Hawaii           4131.0    1420593\n"})})}),"\n",(0,c.jsx)(e.p,{children:"Slice c\u1ea3 2 chi\u1ec1u"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.iloc[2:4, 0:2]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                 individuals  family_members\r\nregion   state                              \r\nMountain Idaho        1297.0           715.0\r\nPacific  Alaska       1434.0           582.0\n"})})}),"\n",(0,c.jsx)(e.p,{children:"S\u1eed d\u1ee5ng danh s\xe1ch c\xe1c boolean"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"# Theo d\xf2ng\r\ndf.iloc[[True, False, True, False, False, True], :]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                  individuals  family_members  state_pop\r\nregion   state                                          \r\nMountain Arizona       7259.0          2606.0    7158024\r\n         Idaho         1297.0           715.0    1750536\r\nPacific  Hawaii        4131.0          2399.0    1420593\n"})})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"df.iloc[:, [False, True,False]]\n"})}),"\n",(0,c.jsx)("pythonoutput",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"                     family_members\r\nregion   state                     \r\nMountain Arizona             2606.0\r\n         Colorado            3250.0\r\n         Idaho                715.0\r\nPacific  Alaska               582.0\r\n         California         20964.0\r\n         Hawaii              2399.0\n"})})})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(t,{...n})}):t(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>s});var c=i(6540);const l={},r=c.createContext(l);function d(n){const e=c.useContext(r);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),c.createElement(r.Provider,{value:e},n.children)}}}]);