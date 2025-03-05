"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[9472],{1470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(6540),i=t(4164),a=t(3104),s=t(6347),c=t(205),l=t(7485),d=t(1682),o=t(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,u]=j({queryString:t,groupId:i}),[x,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,o.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),m=(()=>{const e=d??x;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=t(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),o=e=>{const n=e.currentTarget,t=l.indexOf(n),i=c[t].value;i!==r&&(d(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:o,...a,className:(0,i.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function v(e){const n=(0,b.A)();return(0,f.jsx)(k,{...e,children:u(e.children)},String(n))}},1974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(4848),i=t(8453);t(1470),t(9365);const a={sidebar_label:"Data Type",sidebar_position:4},s=void 0,c={id:"kungfupandas/DataStructure/DataType",title:"DataType",description:"\u0110\u1ec3 ki\u1ec3m tra ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a Series hay DataFrame b\u1ea1n c\xf3 th\u1ec3 g\u1ecdi thu\u1ed9c t\xednh dtypes ho\u1eb7c ph\u01b0\u01a1ng th\u1ee9c .info().",source:"@site/docs/kungfupandas/01-DataStructure/03-DataType.mdx",sourceDirName:"kungfupandas/01-DataStructure",slug:"/kungfupandas/DataStructure/DataType",permalink:"/docs/kungfupandas/DataStructure/DataType",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Data Type",sidebar_position:4},sidebar:"tailieuSidebar",previous:{title:"DataFrame",permalink:"/docs/kungfupandas/DataStructure/DataFrame"},next:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/docs/kungfupandas/IO/Introduction"}},l={},d=[];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u0110\u1ec3 ki\u1ec3m tra ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a ",(0,r.jsx)(n.code,{children:"Series"})," hay ",(0,r.jsx)(n.code,{children:"DataFrame"})," b\u1ea1n c\xf3 th\u1ec3 g\u1ecdi thu\u1ed9c t\xednh ",(0,r.jsx)(n.code,{children:"dtypes"})," ho\u1eb7c ph\u01b0\u01a1ng th\u1ee9c ",(0,r.jsx)(n.code,{children:".info()"}),".\r\nC\xe1c ki\u1ec3u d\u1eef li\u1ec7u th\u01b0\u1eddng g\u1eb7p c\u1ee7a Pandas \u0111\u01b0\u1ee3c m\xf4 t\u1ea3 theo b\u1ea3ng d\u01b0\u1edbi \u0111\xe2y:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"C\xe1c ki\u1ec3u d\u1eef li\u1ec7u ph\xf4\u0309 bi\xea\u0301n"}),(0,r.jsx)(n.th,{children:"Numpy/Pandas"}),(0,r.jsx)(n.th,{children:"Hi\u1ec3n th\u1ecb"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"np.bool"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"bool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["np.int, ",(0,r.jsx)("br",{}),"         np.uint"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"int"})," ",(0,r.jsx)("br",{}),"                     ",(0,r.jsx)(n.em,{children:"uint"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Float"}),(0,r.jsx)(n.td,{children:"np.float"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"float"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"np.object"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"O, object"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Datetime"}),(0,r.jsxs)(n.td,{children:["np.datetime64, ",(0,r.jsx)("br",{})," pd.Timestamp"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"datetime64"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Timedelta"}),(0,r.jsxs)(n.td,{children:["np.timedelta64, ",(0,r.jsx)("br",{})," pd.Timedelta"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"timedelta64"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Category"}),(0,r.jsx)(n.td,{children:"pd.Categorical"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"category"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Complex"}),(0,r.jsx)(n.td,{children:"np.complex"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"complex"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"V\xed d\u1ee5:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df = pd.DataFrame({\r\n                   'int': [1, 0, 1, 0], \r\n                   'float': [1.0, 2.0, 3.0, 4.0], \r\n                   'object': ['1', '2', '3', '4'],\r\n                   'str_int': ['1', 2, '3', 4],\r\n                   'bool': [True, False, True, False],\r\n                   'date_str': ['2021-06-01', '2021-06-02', '2021-06-03', '2021-06-04']})\r\ndf\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"   int  float object str_int   bool    date_str\r\n0    1    1.0      1       1   True  2021-06-01\r\n1    0    2.0      2       2  False  2021-06-02\r\n2    1    3.0      3       3   True  2021-06-03\r\n3    0    4.0      4       4  False  2021-06-04\n"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"print(df.dtypes)\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"int           int64\r\nfloat       float64\r\nobject       object\r\nstr_int      object\r\nbool           bool\r\ndate_str     object\r\ndtype: object\n"})})}),"\n",(0,r.jsx)(n.admonition,{title:"L\u01b0u \xfd",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["N\u1ebfu kh\xf4ng khai b\xe1o ki\u1ec3u d\u1eef li\u1ec7u khi kh\u1edfi t\u1ea1o, pandas s\u1ebd m\u1eb7c \u0111\u1ecbnh ki\u1ec3u d\u1eef li\u1ec7u l\xe0 ",(0,r.jsx)(n.code,{children:"int64"}),", ",(0,r.jsx)(n.code,{children:"float64"}),", ",(0,r.jsx)(n.code,{children:"object"})," v\xe0 ",(0,r.jsx)(n.code,{children:"bool"}),".\r\nPandas s\u1ebd kh\xf4ng bi\u1ebft ki\u1ec3u d\u1eef li\u1ec7u c\xf3 \u0111\u1ecbnh d\u1ea1ng th\u1eddi gian n\u1ebfu kh\xf4ng khai b\xe1o."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Khi ",(0,r.jsx)(n.a,{href:"./DataFrame#c%C3%A1c-c%C3%A1ch-kh%E1%BB%9Fi-t%E1%BA%A1o",children:"kh\u1edfi t\u1ea1o pandas"}),", ch\xfang ta ch\u1ec9 c\xf3 th\u1ec3 khai b\xe1o duy nh\u1ea5t 1 ki\u1ec3u d\u1eef li\u1ec7u cho t\u1ea5t c\u1ea3 c\xe1c c\u1ed9t.\r\nV\xed d\u1ee5 nh\u01b0 t\u1ea5t c\u1ea3 d\u1eef li\u1ec7u c\u1ee7a b\u1ea1n l\xe0 ",(0,r.jsx)(n.code,{children:"int"})," ho\u1eb7c c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c \xe9p ki\u1ec3u v\u1ec1  ",(0,r.jsx)(n.code,{children:"int"}),"th\xec c\xf3 th\u1ec3 khai b\xe1o  ",(0,r.jsx)(n.code,{children:"dtype=np.int"})]}),"\n"]}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["Ta c\xf3 v\xed d\u1ee5 v\u1ec1 vi\u1ec7c khai b\xe1o ",(0,r.jsx)(n.code,{children:"dtype=np.int"})," nh\u01b0 sau:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df = pd.DataFrame({\r\n                   'int': [1, 0, 1, 0], \r\n                   'float': [1.0, 2.0, 3.0, 4.0], \r\n                   'object': ['1', '2', '3', '4'],\r\n                   'str_int': ['1', 2, '3', 4],\r\n                   'bool': [True, False, True, False]},\r\n                   dtype=np.int64)\r\ndf\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"   int  float  object  str_int  bool\r\n0    1      1       1        1     1\r\n1    0      2       2        2     0\r\n2    1      3       3        3     1\r\n3    0      4       4        4     0\n"})})}),"\n",(0,r.jsxs)(n.p,{children:["Sau khi khai b\xe1o ",(0,r.jsx)(n.code,{children:"dtype=np.int64"}),", ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a c\xe1c c\u1ed9t \u0111\xe3 \u0111\u01b0\u1ee3c \xe9p ki\u1ec3u v\u1ec1 ",(0,r.jsx)(n.code,{children:"int64"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"print(df.dtypes)\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"int        int64\r\nfloat      int64\r\nobject     int64\r\nstr_int    int64\r\nbool       int64\r\ndtype: object\n"})})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["N\u1ebfu d\u1eef li\u1ec7u c\xf3 kho\u1ea3ng nh\u1ecf th\xec thay v\xec khai b\xe1o ki\u1ec3u ",(0,r.jsx)(n.code,{children:"np.int64"}),", ta c\xf3 th\u1ec3 khai b\xe1o ki\u1ec3u ",(0,r.jsx)(n.code,{children:"integer"})," v\u1edbi s\u1ed1 byte ph\xf9 h\u1ee3p \u0111\u1ec3 gi\u1ea3m b\u1ed9 nh\u1edb l\u01b0u tr\u1eef.\r\n\u0110\u1ec3 xem b\u1ed9 nh\u1edb s\u1eed d\u1ee5ng c\u1ee7a DataFrame, ta c\xf3 th\u1ec3 d\xf9ng ",(0,r.jsx)(n.code,{children:".memory_usage()"}),"."]}),(0,r.jsxs)(n.p,{children:["M\u1ed9t s\u1ed1 ki\u1ec3u integer trong numpy nh\u01b0 ",(0,r.jsx)(n.code,{children:"np.int8"}),", ",(0,r.jsx)(n.code,{children:"np.int16"}),", ",(0,r.jsx)(n.code,{children:"np.int32"}),", ",(0,r.jsx)(n.code,{children:"np.int64"}),", ",(0,r.jsx)(n.code,{children:"np.uint8"}),", ",(0,r.jsx)(n.code,{children:"np.uint16"}),", ",(0,r.jsx)(n.code,{children:"np.uint32"}),", ",(0,r.jsx)(n.code,{children:"np.uint64"})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Theo v\xed d\u1ee5 tr\xean, khi ",(0,r.jsx)(n.code,{children:"dtype=np.int"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df = pd.DataFrame({\r\n                   'int': [1, 0, 1, 0], \r\n                   'float': [1.0, 2.0, 3.0, 4.0], \r\n                   'object': ['1', '2', '3', '4'],\r\n                   'str_int': ['1', 2, '3', 4],\r\n                   'bool': [True, False, True, False]},\r\n                   dtype=np.int64)\r\nprint(df.memory_usage())\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Index      132\r\nint         32\r\nfloat       32\r\nobject      32\r\nstr_int     32\r\nbool        32\r\ndtype: int64\n"})})}),"\n",(0,r.jsxs)(n.p,{children:["v\xe0 sau khi thay b\u1eb1ng ",(0,r.jsx)(n.code,{children:"dtype=np.int8"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df = pd.DataFrame({\r\n                   'int': [1, 0, 1, 0], \r\n                   'float': [1.0, 2.0, 3.0, 4.0], \r\n                   'object': ['1', '2', '3', '4'],\r\n                   'str_int': ['1', 2, '3', 4],\r\n                   'bool': [True, False, True, False]},\r\n                   dtype=np.int8)\r\nprint(df.memory_usage())\n"})}),"\n",(0,r.jsxs)("pythonoutput",{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Index      132\r\nint          4\r\nfloat        4\r\nobject       4\r\nstr_int      4\r\nbool         4\r\ndtype: int64\n"})}),(0,r.jsxs)(n.p,{children:["C\xf3 th\u1ec3 th\u1ea5y b\u1ed9 nh\u1edb s\u1eed d\u1ee5ng c\u1ee7a DataFrame \u0111\xe3 gi\u1ea3m \u0111\xe1ng k\u1ec3 t\u1eeb ",(0,r.jsx)(n.code,{children:"32 bytes"})," xu\u1ed1ng c\xf2n ",(0,r.jsx)(n.code,{children:"4 bytes"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["Ph\u01b0\u01a1ng th\u1ee9c \xe9p ki\u1ec3u n\xe0y \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng khi b\u1ea1n kh\u1edfi t\u1ea1o DataFrame, ngo\xe0i ra c\xf2n c\xf3 h\xe0m \xe9p ki\u1ec3u kh\xe1c \u0111\u1ed1i v\u1edbi DataFrame cho tr\u01b0\u1edbc, n\u1ed9i dung n\xe0y s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1ec1 c\u1eadp \u1edf ",(0,r.jsx)(n.a,{href:"#Chuong-3",children:"Ch\u01b0\u01a1ng 3"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(6540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const i={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}}}]);