"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[9472],{1974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var r=t(4848),c=t(8453);t(1470),t(9365);const l={sidebar_label:"Data Type",sidebar_position:4},i=void 0,a={id:"kungfupandas/DataStructure/DataType",title:"DataType",description:"\u0110\u1ec3 ki\u1ec3m tra ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a Series hay DataFrame b\u1ea1n c\xf3 th\u1ec3 g\u1ecdi thu\u1ed9c t\xednh dtypes ho\u1eb7c ph\u01b0\u01a1ng th\u1ee9c .info().",source:"@site/docs/kungfupandas/01-DataStructure/03-DataType.mdx",sourceDirName:"kungfupandas/01-DataStructure",slug:"/kungfupandas/DataStructure/DataType",permalink:"/docs/kungfupandas/DataStructure/DataType",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Data Type",sidebar_position:4},sidebar:"tailieuSidebar",previous:{title:"DataFrame",permalink:"/docs/kungfupandas/DataStructure/DataFrame"},next:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/docs/kungfupandas/IO/Introduction"}},s={},o=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u0110\u1ec3 ki\u1ec3m tra ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a ",(0,r.jsx)(n.code,{children:"Series"})," hay ",(0,r.jsx)(n.code,{children:"DataFrame"})," b\u1ea1n c\xf3 th\u1ec3 g\u1ecdi thu\u1ed9c t\xednh ",(0,r.jsx)(n.code,{children:"dtypes"})," ho\u1eb7c ph\u01b0\u01a1ng th\u1ee9c ",(0,r.jsx)(n.code,{children:".info()"}),".\r\nC\xe1c ki\u1ec3u d\u1eef li\u1ec7u th\u01b0\u1eddng g\u1eb7p c\u1ee7a Pandas \u0111\u01b0\u1ee3c m\xf4 t\u1ea3 theo b\u1ea3ng d\u01b0\u1edbi \u0111\xe2y:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"C\xe1c ki\u1ec3u d\u1eef li\u1ec7u ph\xf4\u0309 bi\xea\u0301n"}),(0,r.jsx)(n.th,{children:"Numpy/Pandas"}),(0,r.jsx)(n.th,{children:"Hi\u1ec3n th\u1ecb"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"np.bool"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"bool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["np.int, ",(0,r.jsx)("br",{}),"         np.uint"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"int"})," ",(0,r.jsx)("br",{}),"                     ",(0,r.jsx)(n.em,{children:"uint"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Float"}),(0,r.jsx)(n.td,{children:"np.float"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"float"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"np.object"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"O, object"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Datetime"}),(0,r.jsxs)(n.td,{children:["np.datetime64, ",(0,r.jsx)("br",{})," pd.Timestamp"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"datetime64"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Timedelta"}),(0,r.jsxs)(n.td,{children:["np.timedelta64, ",(0,r.jsx)("br",{})," pd.Timedelta"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"timedelta64"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Category"}),(0,r.jsx)(n.td,{children:"pd.Categorical"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"category"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Complex"}),(0,r.jsx)(n.td,{children:"np.complex"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"complex"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"V\xed d\u1ee5:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df = pd.DataFrame({\r\n                   'col_1': [1, 0, 1, 0], \r\n                   'col_2': [1.0, 2.0, 3.0, 4.0], \r\n                   'col_3': ['1', '2', '3', '4'],\r\n                   'col_4': ['1', 2, '3', 4],\r\n                   'col_5': [True, False, True, False],\r\n                   'col_6': ['2021-06-01', '2021-06-02', '2021-06-03', '2021-06-04']})\r\ndf\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-{.python_output}",children:"   col_1  col_2 col_3 col_4  col_5       col_6\r\n0      1    1.0     1     1   True  2021-06-01\r\n1      0    2.0     2     2  False  2021-06-02\r\n2      1    3.0     3     3   True  2021-06-03\r\n3      0    4.0     4     4  False  2021-06-04\n"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df.dtypes\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"col_1      int64\r\ncol_2    float64\r\ncol_3     object\r\ncol_4     object\r\ncol_5       bool\r\ncol_6     object\r\ndtype: object\n"})})}),"\n",(0,r.jsx)(n.admonition,{title:"L\u01b0u \xfd",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["N\u1ebfu kh\xf4ng khai b\xe1o ki\u1ec3u d\u1eef li\u1ec7u khi kh\u1edfi t\u1ea1o, pandas s\u1ebd m\u1eb7c \u0111\u1ecbnh ki\u1ec3u d\u1eef li\u1ec7u l\xe0 ",(0,r.jsx)(n.code,{children:"int64"}),", ",(0,r.jsx)(n.code,{children:"float64"}),", ",(0,r.jsx)(n.code,{children:"object"})," v\xe0 ",(0,r.jsx)(n.code,{children:"bool"}),".\r\nPandas s\u1ebd kh\xf4ng bi\u1ebft ki\u1ec3u d\u1eef li\u1ec7u ",(0,r.jsx)(n.code,{children:"timestamp"})," n\u1ebfu kh\xf4ng khai b\xe1o."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Ch\u1ec9 c\xf3 th\u1ec3 khai b\xe1o duy nh\u1ea5t 1 ki\u1ec3u d\u1eef li\u1ec7u khi ",(0,r.jsx)(n.a,{href:"./DataFrame#c%C3%A1c-c%C3%A1ch-kh%E1%BB%9Fi-t%E1%BA%A1o",children:"kh\u1edfi t\u1ea1o pandas"}),".\r\nV\xed d\u1ee5 nh\u01b0 t\u1ea5t c\u1ea3 d\u1eef li\u1ec7u c\u1ee7a b\u1ea1n l\xe0 ",(0,r.jsx)(n.code,{children:"int"})," ho\u1eb7c c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c \xe9p ki\u1ec3u v\u1ec1  ",(0,r.jsx)(n.code,{children:"int"}),"th\xec c\xf3 th\u1ec3 khai b\xe1o  ",(0,r.jsx)(n.code,{children:"dtype=np.int"})]}),"\n"]}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u1ede v\xed d\u1ee5 ph\xeda d\u01b0\u1edbi ",(0,r.jsx)(n.code,{children:"col_1"}),", ",(0,r.jsx)(n.code,{children:"col_2"}),", ",(0,r.jsx)(n.code,{children:"col_3"}),", ",(0,r.jsx)(n.code,{children:"col_4"}),", ",(0,r.jsx)(n.code,{children:"col_5"})," c\xf3 th\u1ec3 \xe9p v\u1ec1 ki\u1ec3u ",(0,r.jsx)(n.code,{children:"int"}),", c\xf2n ",(0,r.jsx)(n.code,{children:"col_6"})," th\xec kh\xf4ng th\u1ec3 \xe9p ki\u1ec3u \u0111\u01b0\u1ee3c."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df = pd.DataFrame({\r\n                   'col_1': [1, 0, 1, 0], \r\n                   'col_2': [1.0, 2.0, 3.0, 4.0], \r\n                   'col_3': ['1', '2', '3', '4'],\r\n                   'col_4': ['1', 2, '3', 4],\r\n                   'col_5': [True, False, True, False],\r\n                   'col_6': ['2021-06-01', '2021-06-02', '2021-06-03', '2021-06-04']},\r\n                   dtype=np.int)\r\ndf\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"   col_1  col_2  col_3  col_4  col_5       col_6\r\n0      1      1      1      1      1  2021-06-01\r\n1      0      2      2      2      0  2021-06-02\r\n2      1      3      3      3      1  2021-06-03\r\n3      0      4      4      4      0  2021-06-04\n"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df.dtypes\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"col_1     int64\r\ncol_2     int64\r\ncol_3    object\r\ncol_4     int64\r\ncol_5     int64\r\ncol_6     int64\r\ndtype: object\n"})})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["N\u1ebfu d\u1eef li\u1ec7u c\xf3 kho\u1ea3ng nh\u1ecf th\xec thay v\xec khai b\xe1o ki\u1ec3u ",(0,r.jsx)(n.code,{children:"np.int"}),", ta c\xf3 th\u1ec3 khai b\xe1o ki\u1ec3u ",(0,r.jsx)(n.code,{children:"integer"})," v\u1edbi s\u1ed1 byte ph\xf9 h\u1ee3p \u0111\u1ec3 gi\u1ea3m b\u1ed9 nh\u1edb l\u01b0u tr\u1eef.\r\n\u0110\u1ec3 xem b\u1ed9 nh\u1edb s\u1eed d\u1ee5ng c\u1ee7a DataFrame, ta c\xf3 th\u1ec3 d\xf9ng ",(0,r.jsx)(n.code,{children:".memory_usage()"}),"."]}),(0,r.jsxs)(n.p,{children:["M\u1ed9t s\u1ed1 ki\u1ec3u integer trong numpy nh\u01b0 ",(0,r.jsx)(n.code,{children:"np.int8"}),", ",(0,r.jsx)(n.code,{children:"np.int16"}),", ",(0,r.jsx)(n.code,{children:"np.int32"}),", ",(0,r.jsx)(n.code,{children:"np.int64"}),", ",(0,r.jsx)(n.code,{children:"np.uint8"}),", ",(0,r.jsx)(n.code,{children:"np.uint16"}),", ",(0,r.jsx)(n.code,{children:"np.uint32"}),", ",(0,r.jsx)(n.code,{children:"np.uint64"})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Theo v\xed d\u1ee5 tr\xean, khi ",(0,r.jsx)(n.code,{children:"dtype=np.int"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:" df.memory_usage()\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Index    128\r\ncol_1     32\r\ncol_2     32\r\ncol_3     32\r\ncol_4     32\r\ncol_5     32\r\ncol_6     32\r\ndtype: int64\n"})})}),"\n",(0,r.jsxs)(n.p,{children:["v\xe0 sau khi thay b\u1eb1ng ",(0,r.jsx)(n.code,{children:"dtype=np.int8"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:" df.memory_usage()\n"})}),"\n",(0,r.jsx)("pythonoutput",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Index    128\r\ncol_1      4\r\ncol_2      4\r\ncol_3      4\r\ncol_4      4\r\ncol_5      4\r\ncol_6     32\r\ndtype: int64\n"})})}),"\n",(0,r.jsxs)(n.p,{children:["Ph\u01b0\u01a1ng th\u1ee9c \xe9p ki\u1ec3u n\xe0y \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng khi b\u1ea1n kh\u1edfi t\u1ea1o DataFrame, ngo\xe0i ra c\xf2n c\xf3 h\xe0m \xe9p ki\u1ec3u kh\xe1c \u0111\u1ed1i v\u1edbi DataFrame cho tr\u01b0\u1edbc, n\u1ed9i dung n\xe0y s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1ec1 c\u1eadp \u1edf ",(0,r.jsx)(n.a,{href:"#Chuong-3",children:"Ch\u01b0\u01a1ng 3"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var r=t(4164);const c={tabItem:"tabItem_Ymn6"};var l=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(c.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(6540),c=t(4164),l=t(3104),i=t(6347),a=t(205),s=t(7485),o=t(1682),d=t(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:c}}=e;return{value:n,label:t,attributes:r,default:c}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const c=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(c.location.search);n.set(l,e),c.replace({...c.location,search:n.toString()})}),[l,c])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:c}=e,l=h(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[o,u]=x({queryString:t,groupId:c}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[c,l]=(0,d.Dv)(t);return[c,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:c}),b=(()=>{const e=o??j;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:a}=e;const s=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),c=a[t].value;c!==r&&(o(n),i(c))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...l,className:(0,c.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:c}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===c));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function _(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,c.A)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function k(e){const n=(0,m.A)();return(0,f.jsx)(_,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const c={},l=r.createContext(c);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);