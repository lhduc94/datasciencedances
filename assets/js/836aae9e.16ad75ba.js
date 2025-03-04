"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[8275],{8755:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=i(4848),e=i(8453);const s={title:"Ca\u0301ch bi\xea\u0309u di\xea\u0303n s\xf4\u0301 l\u01b0\u01a1\u0323ng va\u0300 khoa\u0309ng d\u01b0\u0303 li\xea\u0323u cho Histogram du\u0300ng Seaborn va\u0300 Numpy",slug:"2024/02/cach-bieu-dien-histogram",authors:"lhduc",tags:["Data Visualization"],keywords:["data visualization","histogram","seaborn","plot"],image:"/img/blog/20240218_1_cover_2.jpg",hide_table_of_contents:!1},r=void 0,o={permalink:"/blog/2024/02/cach-bieu-dien-histogram",source:"@site/blog/2024/02/18/visual-histogram.md",title:"Ca\u0301ch bi\xea\u0309u di\xea\u0303n s\xf4\u0301 l\u01b0\u01a1\u0323ng va\u0300 khoa\u0309ng d\u01b0\u0303 li\xea\u0323u cho Histogram du\u0300ng Seaborn va\u0300 Numpy",description:"Th\xf4ng th\u01b0\u01a1\u0300ng, khi visualize m\u0103\u0323c \u0111i\u0323nh histogram cu\u0309a seaborn se\u0303 kh\xf4ng th\xea\u0309 hi\xea\u0323n t\xe2\u0301t ca\u0309 ca\u0301c nha\u0303n cu\u0309a bins va\u0300 s\xf4\u0301 l\u01b0\u01a1\u0323ng m\xf4\u0303i bin",date:"2024-02-18T00:00:00.000Z",formattedDate:"18 th\xe1ng 2, 2024",tags:[{label:"Data Visualization",permalink:"/blog/tags/data-visualization"}],readingTime:2.05,hasTruncateMarker:!0,authors:[{name:"L\xea Hu\u1ef3nh \u0110\u1ee9c",title:"Data Scientist",url:"https://www.linkedin.com/in/lhduc94/",imageURL:"https://i.pinimg.com/1200x/94/8c/1d/948c1d9c51227296803919f227eb4cdf.jpg",key:"lhduc"}],frontMatter:{title:"Ca\u0301ch bi\xea\u0309u di\xea\u0303n s\xf4\u0301 l\u01b0\u01a1\u0323ng va\u0300 khoa\u0309ng d\u01b0\u0303 li\xea\u0323u cho Histogram du\u0300ng Seaborn va\u0300 Numpy",slug:"2024/02/cach-bieu-dien-histogram",authors:"lhduc",tags:["Data Visualization"],keywords:["data visualization","histogram","seaborn","plot"],image:"/img/blog/20240218_1_cover_2.jpg",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Data Scientist se\u0303 la\u0300m gi\u0300 khi bi\u0323 a\u0301p deadline",permalink:"/blog/2024/03/Data-Scientist-se-lam-gi-khi-bi-ap-deadline"}},c={authorsImageUrls:[void 0]},h=[];function l(n){const t={code:"code",img:"img",p:"p",pre:"pre",...(0,e.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{src:i(7395).A+"",width:"1024",height:"1024"}),"\r\nTh\xf4ng th\u01b0\u01a1\u0300ng, khi visualize m\u0103\u0323c \u0111i\u0323nh histogram cu\u0309a seaborn se\u0303 kh\xf4ng th\xea\u0309 hi\xea\u0323n t\xe2\u0301t ca\u0309 ca\u0301c nha\u0303n cu\u0309a bins va\u0300 s\xf4\u0301 l\u01b0\u01a1\u0323ng m\xf4\u0303i bin\r\nV\u01a1\u0301i ca\u0301ch la\u0300m nh\u01b0 tr\xean se\u0303 r\xe2\u0301t kho\u0301 theo do\u0303i ca\u0301c khoa\u0309ng gia\u0301 tri\u0323 cu\u0309a t\u01b0\u0300ng bin va\u0300 s\xf4\u0301 l\u01b0\u01a1\u0323ng cu\u0309a bin \u0111o\u0301. May m\u0103\u0301n thay seaborn histogram t\u01b0\u01a1ng t\u01b0\u0323 numpy n\xean ta co\u0301 th\xea\u0309 du\u0300ng ha\u0300m np.histogram \u0111\xea\u0309 gia\u0309i quy\xea\u0301t v\xe2\u0301n \u0111\xea\u0300 na\u0300y"]}),"\n",(0,a.jsx)("div",{class:"dot",children:". . ."}),"\n",(0,a.jsx)(t.p,{children:"D\u01b0\u1edbi \u0111\xe2y l\xe0 v\xed d\u1ee5 c\u01a1 b\u1ea3n khi visualize d\u1eef li\u1ec7u b\u1eb1ng histogram m\u1eb7c \u0111\u1ecbnh c\u1ee7a seaborn"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import numpy as np\r\nimport seaborn as sns \r\nnp.random.seed(42)\r\nx = np.random.uniform(size=200)\r\nsns.histplot(x, bins=10)\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Example banner",src:i(890).A+"",width:"562",height:"415"})}),"\n",(0,a.jsxs)(t.p,{children:["K\u1ebft qu\u1ea3 kh\xf4ng cho ta th\u1ea5y \u0111\u01b0\u1ee3c bin \u0111\u1ea7u ti\xean n\u1eb1m trong kho\u1ea3ng gi\xe1 tr\u1ecb n\xe0o, v\xe0 s\u1ed1 l\u01b0\u1ee3ng ph\u1ea7n t\u1eed l\xe0 bao nhi\xeau, \u0111i\u1ec1u n\xe0y d\u1eabn \u0111\u1ebfn kh\xf3 kh\u0103n \u0111\u1ec3 hi\u1ec3u \u0111\u01b0\u1ee3c bi\u1ec3u \u0111\u1ed3 c\u0169ng nh\u01b0 \u0111\xe1nh gi\xe1 k\u1ebft qu\u1ea3. \u0110\u1ec3 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 tr\xean, ch\xfang ta t\xecm c\xe1ch \u0111i\u1ec1n v\xe0o bi\u1ec3u \u0111\u1ed3 b\u1eb1ng ph\u01b0\u01a1ng th\u1ee9c ",(0,a.jsx)(t.code,{children:"plt.text"}),". Tr\u01b0\u1edbc h\u1ebft, ch\xfang ta c\u1ea7n t\xednh \u0111\u01b0\u1ee3c kho\u1ea3ng m\u1ed7i bin v\xe0 s\u1ed1 l\u01b0\u1ee3ng c\xe1c ph\u1ea7n t\u1eed trong bin, may m\u1eafn thay np.histogram c\xf3 th\u1ec3 gi\xfap ta t\xednh \u0111\u01b0\u1ee3c c\xe1c gi\xe1 tr\u1ecb n\xe0y"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"counts, bin_labels = np.histogram(x, bins=10)\r\nprint(len(counts), counts)\r\nprint(len(bin_labels), bin_labels)\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"10 [22 24 20 24 11 19 20 18 18 24]\r\n11 [0.00552212 0.1036586  0.20179508 0.29993156 0.39806804 0.49620453\r\n 0.59434101 0.69247749 0.79061397 0.88875045 0.98688694]\n"})}),"\n",(0,a.jsx)(t.p,{children:"Ca\u0301c ba\u0323n co\u0301 th\xea\u0309 th\xe2\u0301y v\u01a1\u0301i tham s\xf4\u0301 bins \u0111\u01b0a va\u0300o chi\u0309 co\u0301 10 trong khi k\xea\u0301t qua\u0309 nha\u0303n bin_labels la\u0323i co\u0301 11 gia\u0301 tri\u0323, trong \u0111o\u0301 gia\u0301 tri\u0323 \u0111\xe2\u0300u la\u0300 gia\u0301 tri\u0323 nho\u0309 nh\xe2\u0301t cu\u0309a x va\u0300 gia\u0301 tri\u0323 cu\xf4\u0301i la\u0300 gia\u0301 tri\u0323 cao nh\xe2\u0301t cu\u0309a x. Do \u0111o\u0301 khoa\u0309ng \u0111\xe2\u0300u ti\xean cu\u0309a bin \u0111\xe2\u0300u ti\xean co\u0301 gia\u0301 tri\u0323 n\u0103\u0300m t\u01b0\u0300 [0.00552212, 0.1036586)\r\n\u0110\xea\u0309 ki\xea\u0309m tra xem co\u0301 \u0111u\u0301ng th\xea\u0309 kh\xf4ng, vi\u0301 du\u0323 ki\xea\u0309m tra bin \u0111\xe2\u0300u ti\xean co\u0301 pha\u0309i 22 ph\xe2\u0300n t\u01b0\u0309 kh\xf4ng?"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"len(x[(x>=bin_labels[0]) & (x<bin_labels[1])])\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"22\n"})}),"\n",(0,a.jsx)(t.p,{children:"Sau \u0111o\u0301, ta du\u0300ng matplotlib \u0111\xea\u0309 plot text"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import matplotlib.pyplot as plt \r\n\r\nax = sns.histplot(x, bins=10)\r\nbin_heights = [p.get_height() if p.get_height() > 0 else 0.1 for p in ax.patches]\r\n# Hi\u1ec3n th\u1ecb gi\xe1 tr\u1ecb count t\u1eebng bin\r\nfor i in range(len(bin_heights)):\r\n    plt.text(ax.patches[i].get_x() + ax.patches[i].get_width() / 2,\r\n            bin_heights[i],\r\n            str(int(bin_heights[i])),\r\n            fontsize=14,\r\n            ha='center',\r\n            va='bottom')\r\nmids = [rect.get_x() + rect.get_width() / 2 for rect in ax.patches]\r\nlabels = [(round(i,2),round(j,2)) for i,j in zip(bin_labels[:-1], bin_labels[1:])]\r\nax.set_xticks(mids, labels=labels, fontsize=14, rotation=90)\r\nax.set_ylim(0,28)\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Example banner",src:i(2838).A+"",width:"563",height:"513"})})]})}function g(n={}){const{wrapper:t}={...(0,e.R)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},890:(n,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/1709112253837-1fa0ac6a6387c91756523efa79c896c0.jpg"},2838:(n,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/1709112655963-5f9594716614eb2ef7734ae3d92ab7db.png"},7395:(n,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/cover_2-a6d5bb5b93d6bd71f391dfb93ea31d6b.jpg"},8453:(n,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var a=i(6540);const e={},s=a.createContext(e);function r(n){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:r(n.components),a.createElement(s.Provider,{value:t},n.children)}}}]);