"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[4197],{7958:(n,i,h)=>{h.r(i),h.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>o,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var e=h(4848),t=h(8453);const c={title:"Gi\u1edbi thi\u1ec7u Graph Database v\xe0 Neo4J",description:"\u0110\u1ed3 th\u1ecb (Graph) l\xe0 t\u1eadp h\u1ee3p c\xe1c \u0111\u1ec9nh (Vertices) v\xe0 c\u1ea1nh (Edges), hay l\xe0 t\u1eadp h\u1ee3p gi\u1eefa c\xe1c n\xfat(Node) v\xe0 m\u1ed1i quan h\u1ec7 (Relationship) gi\u1eefa c\xe1c n\xfat v\u1edbi nhau. M\u1ed1i quan h\u1ec7 c\xf3 th\u1ec3 l\xe0 m\u1ed9t chi\u1ec1u hay hai chi\u1ec1u.",slug:"gioi-thieu-graph-database-va-neo4j",authors:"lhduc",tags:["Database"],keywords:["Graph Database","Neo4J","Cypher"],hide_table_of_contents:!1,image:"/img/blog/20240322_1_cover.jpg"},a=void 0,s={permalink:"/blog/gioi-thieu-graph-database-va-neo4j",source:"@site/blog/2024/03/22/GraphDatabase-Neo4J.md",title:"Gi\u1edbi thi\u1ec7u Graph Database v\xe0 Neo4J",description:"\u0110\u1ed3 th\u1ecb (Graph) l\xe0 t\u1eadp h\u1ee3p c\xe1c \u0111\u1ec9nh (Vertices) v\xe0 c\u1ea1nh (Edges), hay l\xe0 t\u1eadp h\u1ee3p gi\u1eefa c\xe1c n\xfat(Node) v\xe0 m\u1ed1i quan h\u1ec7 (Relationship) gi\u1eefa c\xe1c n\xfat v\u1edbi nhau. M\u1ed1i quan h\u1ec7 c\xf3 th\u1ec3 l\xe0 m\u1ed9t chi\u1ec1u hay hai chi\u1ec1u.",date:"2024-03-22T00:00:00.000Z",formattedDate:"22 th\xe1ng 3, 2024",tags:[{label:"Database",permalink:"/blog/tags/database"}],readingTime:7.13,hasTruncateMarker:!1,authors:[{name:"L\xea Hu\u1ef3nh \u0110\u1ee9c",title:"Data Scientist",url:"https://www.linkedin.com/in/lhduc94/",imageURL:"https://i.pinimg.com/1200x/94/8c/1d/948c1d9c51227296803919f227eb4cdf.jpg",key:"lhduc"}],frontMatter:{title:"Gi\u1edbi thi\u1ec7u Graph Database v\xe0 Neo4J",description:"\u0110\u1ed3 th\u1ecb (Graph) l\xe0 t\u1eadp h\u1ee3p c\xe1c \u0111\u1ec9nh (Vertices) v\xe0 c\u1ea1nh (Edges), hay l\xe0 t\u1eadp h\u1ee3p gi\u1eefa c\xe1c n\xfat(Node) v\xe0 m\u1ed1i quan h\u1ec7 (Relationship) gi\u1eefa c\xe1c n\xfat v\u1edbi nhau. M\u1ed1i quan h\u1ec7 c\xf3 th\u1ec3 l\xe0 m\u1ed9t chi\u1ec1u hay hai chi\u1ec1u.",slug:"gioi-thieu-graph-database-va-neo4j",authors:"lhduc",tags:["Database"],keywords:["Graph Database","Neo4J","Cypher"],hide_table_of_contents:!1,image:"/img/blog/20240322_1_cover.jpg"},unlisted:!1,prevItem:{title:"C\xe1c l\xf4\u0303i sai trong data visualization va\u0300 ca\u0301ch pho\u0300ng tra\u0301nh (Ph\u1ea7n 1)",permalink:"/blog/2024/08/cac-loi-sai-visualization"},nextItem:{title:"Covariance va\u0300 Correlation",permalink:"/blog/2024/03/covariance-correlation"}},r={authorsImageUrls:[void 0]},l=[{value:"Gi\u01a1\u0301i thi\xea\u0323u",id:"gi\u01a1\u0301i-thi\xea\u0323u",level:2},{value:"\u01af\u0301ng du\u0323ng cu\u0309a \u0111\xf4\u0300 thi\u0323",id:"\u01b0\u0301ng-du\u0323ng-cu\u0309a-\u0111\xf4\u0300-thi\u0323",level:2},{value:"Graph Databases",id:"graph-databases",level:2},{value:"Neo4J",id:"neo4j",level:2},{value:"Data Modeling",id:"data-modeling",level:3},{value:"Ta\u0300i li\xea\u0323u tham kha\u0309o",id:"ta\u0300i-li\xea\u0323u-tham-kha\u0309o",level:2}];function d(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:h(1952).A+"",width:"1024",height:"1024"})}),"\n",(0,e.jsx)(i.h2,{id:"gi\u01a1\u0301i-thi\xea\u0323u",children:"Gi\u01a1\u0301i thi\xea\u0323u"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Graph la\u0300 gi\u0300"})}),"\n",(0,e.jsxs)(i.p,{children:["\u0110\u1ed3 th\u1ecb (Graph) l\xe0 t\u1eadp h\u1ee3p c\xe1c \u0111\u1ec9nh (Vertices) v\xe0 c\u1ea1nh (Edges), hay l\xe0 t\u1eadp h\u1ee3p gi\u1eefa c\xe1c n\xfat(Node) v\xe0 m\u1ed1i quan h\u1ec7 (Relationship) gi\u1eefa c\xe1c n\xfat v\u1edbi nhau. M\u1ed1i quan h\u1ec7 c\xf3 th\u1ec3 l\xe0 m\u1ed9t chi\u1ec1u hay hai chi\u1ec1u.\r\n",(0,e.jsx)(i.img,{src:h(6067).A+"",width:"457",height:"358"}),'\r\nV\xed d\u1ee5: A v\xe0 B c\xf3 m\u1ed1i quan h\u1ec7 "FRIEND" v\u1edbi nhau nh\u01b0ng ch\u1ec9 c\xf3 A l\xe0 "FOLLOW" B.']}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"C\xe2\u0301u tru\u0301c d\u01b0\u0303 li\xea\u0323u"})}),"\n",(0,e.jsx)(i.p,{children:"C\xf3 nhi\u1ec1u c\xe1ch bi\u1ec3u di\u1ec5n c\u1ea5u tr\xfac d\u1eef li\u1ec7u c\u1ee7a \u0110\u1ed3 th\u1ecb nh\u01b0 Danh s\xe1ch c\u1ea1nh, Danh s\xe1ch k\u1ec1, Ma tr\u1eadn k\u1ec1, Ma tr\u1eadn li\xean thu\u1ed9c."}),"\n",(0,e.jsx)(i.p,{children:"V\u1edbi Danh s\xe1ch c\u1ea1nh ta c\xf3 th\u1ec3 bi\u1ec3u di\u1ec5n d\u01b0\u1edbi d\u1ea1ng list v\u1edbi m\u1ed7i ph\u1ea7n t\u1eed l\xe0 1 Tuple(Node, Node, Relationship)"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-python",children:"(A, B, Friend)\r\n(B, A, Friend)\r\n(A, B, Follow)\r\n(C, A, Follow)\r\n(C, B, Follow)\n"})}),"\n",(0,e.jsx)(i.p,{children:"Trong khi \u0111\xf3 v\u1edbi Ma tr\u1eadn K\u1ec1 ta ph\u1ea3i bi\u1ec3u di\u1ec5n 2 ma tr\u1eadn kh\xe1c nhau, m\u1ed7i ma tr\u1eadn c\xf3 k\xedch th\u01b0\u1edbc N x N v\u1edbi N l\xe0 s\u1ed1 Node v\xe0 gi\xe1 tr\u1ecb t\u1ea1i (X, Y) th\u1ec3 hi\u1ec7n 1 m\u1ed1i quan h\u1ec7 t\u1eeb X -> Y"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-python",children:"FRIEND\r\nX | A | B | C |\r\nA | 0 | 1 | 0 |\r\nB | 1 | 0 | 0 |\r\nC | 0 | 0 | 0 |\r\nFOLLOW\r\nX | A | B | C |\r\nA | 0 | 1 | 0 |\r\nB | 0 | 0 | 0 |\r\nC | 1 | 1 | 0 |\n"})}),"\n",(0,e.jsx)(i.p,{children:"C\xf3 r\u1ea5t nhi\u1ec1u d\u1ea1ng \u0111\u1ed3 th\u1ecb kh\xe1c nhau, d\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t s\u1ed1 d\u1ea1ng"}),"\n",(0,e.jsx)("figure",{children:(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.img,{src:h(5767).A+"",width:"613",height:"1003"}),"\r\n",(0,e.jsx)("figcaption",{children:"Learning Neo4j"})]})}),"\n",(0,e.jsx)(i.h2,{id:"\u01b0\u0301ng-du\u0323ng-cu\u0309a-\u0111\xf4\u0300-thi\u0323",children:"\u01af\u0301ng du\u0323ng cu\u0309a \u0111\xf4\u0300 thi\u0323"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Khoa ho\u0323c xa\u0303 h\xf4\u0323i"})}),"\n",(0,e.jsx)(i.p,{children:"Nh\u01b0 minh h\u1ecda \u1edf h\xecnh \u0111\u1ea7u ti\xean c\u1ee7a b\xe0i vi\u1ebft, s\u1ef1 t\u01b0\u01a1ng t\xe1c gi\u1eefa ng\u01b0\u1eddi v\xe0 ng\u01b0\u1eddi h\xecnh th\xe0nh n\xean m\u1ed9t m\u1ea1ng x\xe3 h\u1ed9i(social network). Facebook v\xe0 Twitter l\xe0 2 m\u1ea1ng x\xe3 h\u1ed9i l\u1edbn m\xe0 ch\xfang ta c\xf3 th\u1ec3 h\xecnh dung \u0111\u01b0\u1ee3c \u1ee9ng d\u1ee5ng c\u1ee7a \u0111\u1ed3 th\u1ecb trong khoa h\u1ecdc x\xe3 h\u1ed9i."}),"\n",(0,e.jsx)(i.p,{children:"V\xed d\u1ee5: \u0110\u1ec3 t\xecm nh\u1eefng ng\u01b0\u1eddi N\u1ed5i ti\u1ebfng X trong m\u1ea1ng x\xe3 h\u1ed9i, ch\xfang ta c\xf3 th\u1ec3 th\u1ed1ng k\xea s\u1ed1 l\u01b0\u1ee3ng Follow c\u1ee7a X v\xe0 \u0111\u01b0a ra nh\u1eefng ng\u01b0\u1eddi c\xf3 s\u1ed1 l\u01b0\u1ee3ng Follow cao nh\u1ea5t. N\xf3i theo c\xe1ch to\xe1n h\u1ecdc th\xec ta t\xecm b\u1eadc c\u1ee7a \u0111\u1ec9nh hay s\u1ed1 l\u01b0\u1ee3ng c\u1ea1nh n\u1ed1i v\u1edbi \u0111\u1ec9nh \u0111\xf3 (X) v\xe0 t\xecm ra nh\u1eefng \u0111\u1ec9nh c\xf3 b\u1eadc cao nh\u1ea5t."}),"\n",(0,e.jsx)(i.p,{children:"Trong di\u1ec5n \u0111\xe0n, d\u1ef1a v\xe0o nh\u1eefng b\xecnh lu\u1eadn c\u1ee7a ng\u01b0\u1eddi d\xf9ng ta c\xf3 th\u1ec3 ph\xe2n chia nh\xf3m ng\u01b0\u1eddi d\xf9ng c\xf3 c\xf9ng \xfd ki\u1ebfn v\u1edbi nhau."}),"\n",(0,e.jsx)("figure",{children:(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.img,{src:h(842).A+"",width:"596",height:"402"}),"\r\n",(0,e.jsx)("figcaption",{children:"Detecting Subgroups in Online Discussions by Modeling Positive and Negative Relations among Participants"})]})}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Nghi\xean c\u01b0\u0301u sinh ho\u0323c"})}),"\n",(0,e.jsx)(i.p,{children:"C\xe1c th\xe0nh ph\u1ea7n sinh h\u1ecdc(protein, ph\xe2n t\u1eed, gen) v\xe0 c\xe1c t\u01b0\u01a1ng t\xe1c c\u1ee7a ch\xfang c\u0169ng t\u1ea1o n\xean m\u1ed9t \u0111\u1ed3 th\u1ecb sinh h\u1ecdc. D\u1ef1a v\xe0o \u0111\xf3 ng\u01b0\u1eddi ta c\xf3 th\u1ec3 t\xecm hi\u1ec3u \u0111\u01b0\u1ee3c qu\xe1 tr\xecnh trao \u0111\u1ed5i ch\u1ea5t trong c\u01a1 th\u1ec3, s\u1ef1 t\u01b0\u01a1ng t\xe1c gi\u1eefa c\xe1c b\u1ed9 ph\u1eadn kh\xe1c nhau tr\xean c\u01a1 th\u1ec3."}),"\n",(0,e.jsx)("figure",{children:(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.img,{src:h(3128).A+"",width:"3276",height:"2313"}),"\r\n",(0,e.jsx)("figcaption",{children:"Learning Neo4j"})]})}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"B\xe0i to\xe1n t\xecm \u0111\u01b0\u1eddng \u0111i"})}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Websearch"})}),"\n",(0,e.jsx)(i.p,{children:"Pagerank l\xe0 thu\u1eadt to\xe1n ph\xe2n t\xedch c\xe1c li\xean k\u1ebft \u0111\u01b0\u1ee3c d\xf9ng trong Google Search \u0111\u1ec3 x\u1ebfp h\u1ea1ng c\xe1c trang web."}),"\n",(0,e.jsx)("figure",{children:(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.img,{src:h(1323).A+"",width:"556",height:"400"}),"\r\n",(0,e.jsx)("figcaption",{children:"Pagerank"})]})}),"\n",(0,e.jsx)(i.p,{children:"T\xf3m l\u1ea1i, \u0110\u1ed3 th\u1ecb hi\u1ec7n di\u1ec7n \u1edf kh\u1eafp m\u1ecdi n\u01a1i mi\u1ec5n c\xf3 \u0110\u1ed1i t\u01b0\u1ee3ng(Node) v\xe0 C\xe1c t\u01b0\u01a1ng t\xe1c gi\u1eefa c\xe1c \u0110\u1ed1i t\u01b0\u1ee3ng (Relationship) \u0111\u1ec1u c\xf3 th\u1ec3 t\u1ea1o n\xean \u0110\u1ed3 th\u1ecb."}),"\n",(0,e.jsxs)("figure",{children:[(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:h(584).A+"",width:"735",height:"500"})}),(0,e.jsx)("figcaption",{})]}),"\n",(0,e.jsx)(i.h2,{id:"graph-databases",children:"Graph Databases"}),"\n",(0,e.jsx)(i.p,{children:"M\u1ed9t h\u1ec7 th\u1ed1ng qu\u1ea3n l\xfd c\u01a1 s\u1edf d\u1eef li\u1ec7u \u0111\u1ed3 th\u1ecb (graph database management system) l\xe0 m\u1ed9t h\u1ec7 th\u1ed1ng c\xf3 th\u1ec3 Create, Read, Update v\xe0 Delete (CRUD) . Graph Databases th\u01b0\u1eddng \u0111\u01b0\u1ee3c x\xe2y d\u1ef1ng \u0111\u1ec3 \xe1p d\u1ee5ng v\xe0o c\xe1c h\u1ec7 th\u1ed1ng OLTP."}),"\n",(0,e.jsx)(i.p,{children:"C\xf3 2 \u0111\u1eb7c \u0111i\u1ec3m m\xe0 ch\xfang ta c\u1ea7n ph\u1ea3i \u0111\u1ec3 \xfd khi nghi\xean c\u1ee9u v\u1ec1 Graph Database"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"C\xe1ch th\u1ee9c l\u01b0u tr\u1eef c\u01a1 b\u1ea3n: M\u1ed9t s\u1ed1 Graph Database s\u1eed d\u1ee5ng native graph storage (Neo4J)(hi\u1ec3u n\xf4m na l\xe0 g\u1ed3m \u0111\u1ec9nh v\xe0 c\u1ea1nh) v\xe0 m\u1ed9t s\u1ed1 Graph Database s\u1eed d\u1ee5ng c\u01a1 s\u1edf d\u1eef li\u1ec7u quan h\u1ec7 (relational database) (FlockDB)v\xe0 c\u01a1 s\u1edf d\u1eef li\u1ec7u \u0111\u1ed1i t\u01b0\u1ee3ng (object-oriented database)(Sones GraphDB)."}),"\n",(0,e.jsx)(i.li,{children:"Processing Engine: s\u1eed d\u1ee5ng index-free adjacency."}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"neo4j",children:"Neo4J"}),"\n",(0,e.jsx)(i.h3,{id:"data-modeling",children:"Data Modeling"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Nodes"})}),"\n",(0,e.jsx)(i.p,{children:"Node th\u01b0\u1eddng d\xf9ng \u0111\u1ec3 bi\u1ec3u di\u1ec5n th\xf4ng tin c\u1ee7a m\u1ed9t th\u1ef1c th\u1ec3. \u0110\u1ed3 th\u1ecb \u0111\u01a1n gi\u1ea3n nh\u1ea5t l\xe0 \u0111\u1ed3 th\u1ecb m\xe0 trong \u0111\xf3 ch\u1ec9 c\xf3 m\u1ed9t Node."}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:h(9117).A+"",width:"125",height:"126"})}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Labels"})}),"\n",(0,e.jsxs)(i.p,{children:["Label th\u01b0\u1eddng d\xf9ng \u0111\u1ec3 \u0111\u1ecbnh h\xecnh m\u1ed9t nh\xf3m c\xe1c Node c\xf3 c\xf9ng m\u1ed9t mi\u1ec1n v\u1edbi nhau, vi\u1ec7c g\xe1n nh\xe3n gi\xfap chia \u0110\u1ed3 th\u1ecb th\xe0nh nhi\u1ec1u \u0111\u1ed3 th\u1ecb con v\xe0 ti\u1ec7n cho vi\u1ec7c t\xednh to\xe1n. V\xed d\u1ee5 nh\u1eefng Node bi\u1ec3u di\u1ec7n th\xf4ng tin cho User c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c g\xe1n nh\xe3n ",":User"," ."]}),"\n",(0,e.jsx)(i.p,{children:"M\u1ed9t Node c\xf3 th\u1ec3 kh\xf4ng c\xf3 ho\u1eb7c c\xf3 nhi\u1ec1u nh\xe3n."}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:h(2607).A+"",width:"552",height:"365"})}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Relationships"})}),"\n",(0,e.jsx)(i.p,{children:"Relationship th\u1ec3 hi\u1ec7n m\u1ed1i quan h\u1ec7 hay c\xe1c k\u1ebft n\u1ed1i gi\u1eefa c\xe1c Node v\u1edbi nhau. C\xe1c Relationships gi\xfap t\u1ed5 ch\u1ee9c c\xe1c Node th\xe0nh m\u1ed9t c\u1ea5u tr\xfac, Bi\u1ebfn \u0111\u1ed3 th\u1ecb th\xe0nh m\u1ed9t c\u1ea5u tr\xfac nh\u01b0 d\u1ea1ng list, map hay nh\u1eefng c\u1ea5u tr\xfac ph\u1ee9c t\u1ea1p h\u01a1n."}),"\n",(0,e.jsx)(i.p,{children:"Trong Neo4j, m\u1ed7i Relationship l\xe0 m\u1ed9t C\u1ea1nh c\xf3 h\u01b0\u1edbng n\u1ed1i Node ngu\u1ed3n v\xe0 Node \u0111\xedch. M\u1ed9t Node c\xf3 th\u1ec3 c\xf3 C\u1ea1nh n\u1ed1i v\u1edbi ch\xednh n\xf3."}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:h(4831).A+"",width:"563",height:"376"})}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Relationship Types"})}),"\n",(0,e.jsxs)(i.p,{children:["M\u1ed7i Relationship ch\u1ec9 c\xf3 duy nh\u1ea5t m\u1ed9t Relationship Types. Nh\u01b0 v\xed d\u1ee5 tr\xean, ch\xfang ta c\xf3 c\xe1c Relationship ",":IS_FOLLOWING",", ",":IS_ADMIN"," , Relationship Type gi\xfap ta bi\u1ebft \u0111\u01b0\u1ee3c m\u1ed1i quan h\u1ec7 gi\u1eefa c\xe1c Node l\xe0 g\xec. Vi\u1ec7c \u0111\u1eb7t type cho Relationship gi\xfap ch\xfang ta d\u1ec5 h\xecnh dung \u0111\u01b0\u1ee3c Node n\xe0o l\xe0 Node ngu\u1ed3n v\xe0 Node n\xe0o l\xe0 Node \u0111\xedch."]}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Properties"})}),"\n",(0,e.jsxs)(i.p,{children:["Properties l\xe0 m\u1ed9t c\u1eb7p key-value th\u1ec3 hi\u1ec7n c\xe1c thu\u1ed9c t\xednh c\u1ee7a Node ho\u1eb7c Relationship. Trong v\xed d\u1ee5 v\u1ec1 \u0111\u1ed3 th\u1ecb , Node ",":User",' c\xf3 thu\u1ed9c t\xednh l\xe0 "name", "born" v\xe0 Relationship ',":IS_ADMIN",' c\xf3 thu\u1ed9c t\xednh "roles".']}),"\n",(0,e.jsx)(i.p,{children:"C\xe1c value c\xf3 th\u1ec3 c\xf3 c\xe1c ki\u1ec3u d\u1eef li\u1ec7u nh\u01b0 number, string, boolean ho\u1eb7c list."}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Traversals v\xe0 paths"})}),"\n",(0,e.jsx)(i.p,{children:'Traversal l\xe0 c\xe1ch m\xe0 ch\xfang ta truy v\u1ea5n d\u1eef li\u1ec7u \u0111\u1ec3 tr\u1ea3 l\u1eddi cho m\u1ed9t c\xe2u h\u1ecfi V\xed d\u1ee5 nh\u01b0 "Nh\u1eefng page n\xe0o m\xe0 anh Ph\xf3ng theo d\xf5i nh\u01b0ng anh X ch\u01b0a theo d\xf5i". Travesaling m\u1ed9t \u0111\u1ed3 th\u1ecb ngh\u0129a l\xe0 ch\xfang ta b\u1eaft \u0111\u1ea7u t\u1eeb m\u1ed9t Node v\xe0 l\u1ea7n theo c\xe1c Relationship theo c\xe1c quy t\xe1c n\xe0o \u0111\xf3. H\u1ea7u nh\u01b0 ch\xfang ta ch\u1ec9 c\u1ea7n l\u1ea7n theo \u0110\u1ed3 th\u1ecb con c\u1ee7a \u0110\u1ed3 th\u1ecb (d\u1ef1a v\xe0o c\xe1c Label, c\xe1c Relationship Type).'}),"\n",(0,e.jsxs)(i.p,{children:['K\u1ebft qu\u1ea3 c\u1ee7a traversal c\xf3 th\u1ec3 tr\u1ea3 v\u1ec1 l\xe0 m\u1ed9t \u0111\u01b0\u1eddng \u0111i (path) t\u1eeb Node n\xe0y \u0111\u1ebfn Node kia. Nh\u01b0 v\xed d\u1ee5 \u0110\u1ed3 th\u1ecb m\xe0 ch\xfang ta c\xf3, K\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1 cho c\xe2u h\u1ecfi " Anh Ph\xf3ng \u0111ang theo d\xf5i nh\u1eefng Page n\xe0o" l\xe0 m\u1ed9t \u0111\u01b0\u1eddng \u0111i t\u1eeb Node c\xf3 name:"Ph\xf3ng" \u0111i qua c\u1ea1nh ',":IS_FOLLOWING",' v\xe0 \u0111\u1ebfn Node c\xf3 name:"G\xe1i Xinh" .']}),"\n",(0,e.jsx)(i.p,{children:"Path ng\u1eafn nh\u1ea5t c\xf3 \u0111\u1ed9 d\xe0i l\xe0 0 v\u1edbi 1 Node v\xe0 kh\xf4ng c\xf3 Relationship."}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Schema"})}),"\n",(0,e.jsx)(i.p,{children:"Schema trong Neo4j bao g\u1ed3m Indexes v\xe0 Constraints."}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Indexes \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u0103ng hi\u1ec7u su\u1ea5t cho c\xe2u truy v\u1ea5n, l\xfd do ch\xednh cho vi\u1ec7c s\u1eed d\u1ee5ng Indexes l\xe0 khi truy v\u1ea5n d\u1eef li\u1ec7u tr\xean \u0111\u1ed3 th\u1ecb, ch\xfang ta b\u1eaft \u0111\u1ea7u b\u1eb1ng m\u1ed9t Node v\xe0 \u0111i qua c\xe1c Node, vi\u1ec7c index gi\xfap cho t\xecm ki\u1ebfm c\xe1c Node m\u1ed9t c\xe1ch nhanh ch\xf3ng. C\xf3 th\u1ec3 \u0111\xe1nh index trong b\u1ea5t c\u1ee9 th\u1eddi \u0111i\u1ec3m n\xe0o, tuy nhi\xean khi c\xf3 d\u1eef li\u1ec7u, vi\u1ec7c \u0111\xe1nh index s\u1ebd t\u1ed1n nhi\u1ec1u th\u1eddi gian h\u01a1n."}),"\n",(0,e.jsxs)(i.li,{children:["Constraints \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ch\u1eafc ch\u1eafn r\u1eb1ng c\xe1c thu\u1ed9c t\xednh tu\xe2n th\u1ee7 c\xe1c lu\u1eadt n\xe0o \u0111\xf3. V\xed d\u1ee5 nh\u01b0 s\u1ed1 CMND c\u1ee7a ",":User"," l\xe0 duy nh\u1ea5t."]}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Cypher"})}),"\n",(0,e.jsx)(i.p,{children:"Cypher l\xe0 ng\xf4n ng\u1eef truy v\u1ea5n trong Neo4J. C\xe1c c\xe2u query l\xe0 t\u1eadp h\u1ee3p c\xe1c m\u1ec7nh \u0111\u1ec1 \u0111\u01b0\u1ee3c li\xean k\u1ebft v\u1edbi nhau. D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t s\u1ed1 m\u1ec7nh \u0111\u1ec1 th\u01b0\u1eddng d\xf9ng:"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Patterns"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Node"}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{children:'()\r\n(p)\r\n(:User)\r\n(p:User)\r\n(p:User {name: "Ph\xf3ng"}) \n'})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Relationship"}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{children:'--\x3e\r\n-[r]->\r\n-[:IS_ADMIN]->\r\n-[r:IS_ADMIN]->\r\n-[r:IS_ADMIN {roles: ["Upload Image"]}]->\n'})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Path"}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{children:"(p:User{CMND:12})-[r:IS_FOLLOWING]->(p:Page{Id:1})\n"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Path variables"}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{children:"path = (p:User{CMND:12})-[r:IS_FOLLOWING]->(p:Page{Id:1})\n"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"Clauses"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"MATCH: t\xecm ki\u1ebfm theo pattern. OPTIONAL MATCH t\u01b0\u01a1ng t\u1ef1 MATCH nh\u01b0ng s\u1ebd tr\u1ea3 v\u1ec1 k\u1ebft qu\u1ea3 Null n\u1ebfu c\xf3 missing trong pattern."}),"\n",(0,e.jsx)(i.li,{children:"MERGE: \u0111\u1ea3m b\u1ea3o pattern lu\xf4n t\u1ed3n t\u1ea1i trong \u0111\u1ed3 th\u1ecb, n\u1ebfu kh\xf4ng t\u1ed3n t\u1ea1i, MERGE s\u1ebd gi\xfap t\u1ea1o pattern \u0111\xf3."}),"\n",(0,e.jsx)(i.li,{children:"WITH: th\u1ef1c hi\u1ec7n c\xe1c thao t\xe1c v\u1edbi c\xe1c output tr\u01b0\u1edbc khi sang c\xe1c m\u1ec7nh \u0111\u1ec1 kh\xe1c."}),"\n",(0,e.jsx)(i.li,{children:"WHERE: Th\xeam c\xe1c r\xe0ng bu\u1ed9c cho pattern"}),"\n",(0,e.jsx)(i.li,{children:"RETURN: \u0110\u1ecbnh ngh\u0129a k\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1"}),"\n",(0,e.jsx)(i.li,{children:"CREATE: T\u1ea1o Node, Relationship ho\u1eb7c m\u1ed9t Path."}),"\n",(0,e.jsx)(i.li,{children:"DELETE: X\xf3a Node, Relationship"}),"\n",(0,e.jsx)(i.li,{children:"SET: D\xf9ng \u0111\u1ec3 c\u1eadp nh\u1eadt Labels, Properties"}),"\n",(0,e.jsx)(i.li,{children:"LIMIT, ORDER BY : t\u01b0\u01a1ng t\u1ef1 nh\u01b0 SQL."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"ta\u0300i-li\xea\u0323u-tham-kha\u0309o",children:"Ta\u0300i li\xea\u0323u tham kha\u0309o"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://www.packtpub.com/product/learning-neo4j-3x-second-edition/9781786466143",children:"Learning Neo4j - https://www.packtpub.com/product/learning-neo4j-3x-second-edition/9781786466143"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://www.oreilly.com/library/view/graph-databases-2nd/9781491930885/",children:"Graph Database- https://www.oreilly.com/library/view/graph-databases-2nd/9781491930885/"})}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},5767:(n,i,h)=>{h.d(i,{A:()=>e});const e=h.p+"assets/images/cac_dang_do_thi-f5d6e92a2fa2521f3c3d65d828e1e5a8.jpg"},1952:(n,i,h)=>{h.d(i,{A:()=>e});const e=h.p+"assets/images/cover-c63ad63fa46d8bc5490ed8fd43c64464.jpg"},584:(n,i,h)=>{h.d(i,{A:()=>e});const e=h.p+"assets/images/graph_everywhere-23743d880d2b70a8d75b55e38c5fd11c.jpg"},6067:(n,i,h)=>{h.d(i,{A:()=>e});const e=h.p+"assets/images/intro-e42f5e75483b0c485e98a441f4a1bdaa.png"},2607:(n,i,h)=>{h.d(i,{A:()=>e});const e=h.p+"assets/images/label-cd081970fcbbbe11fb01943cb04832bf.png"},9117:(n,i,h)=>{h.d(i,{A:()=>e});const e="data:image/png;base64,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"},1323:(n,i,h)=>{h.d(i,{A:()=>e});const e=h.p+"assets/images/page_rank-c6257981859c9ca1853db658148d52d6.png"},3128:(n,i,h)=>{h.d(i,{A:()=>e});const e=h.p+"assets/images/protein-442f301ee124404f5c5e62d772405377.jpg"},4831:(n,i,h)=>{h.d(i,{A:()=>e});const e=h.p+"assets/images/relationship-de92daed9717375e6bcc7eb5465ea17f.png"},842:(n,i,h)=>{h.d(i,{A:()=>e});const e=h.p+"assets/images/subgroup_detection-758776dd6e90814c97959e313806e347.png"},8453:(n,i,h)=>{h.d(i,{R:()=>a,x:()=>s});var e=h(6540);const t={},c=e.createContext(t);function a(n){const i=e.useContext(c);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),e.createElement(c.Provider,{value:i},n.children)}}}]);