"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[8221],{426:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>h,toc:()=>d});var t=e(4848),a=e(8453);const s={title:"T\u1ed1i \u01b0u si\xeau tham s\u1ed1 m\xf4 h\xecnh v\u1edbi RandomizedSearchCV",slug:"2025/03/hyperparameter-tuning-RandomizedSearchCV",description:"Trong b\xe0i vi\u1ebft n\xe0y, ch\xfang ta s\u1ebd t\xecm hi\u1ec3u v\u1ec1 RandomizedSearchCV - m\u1ed9t ph\u01b0\u01a1ng ph\xe1p hi\u1ec7u qu\u1ea3 h\u01a1n \u0111\u1ec3 t\u1ed1i \u01b0u si\xeau tham s\u1ed1.",authors:"lhduc",tags:["Data Science"],keywords:["data science","hyperparameter tuning","python","ml","si\xeau tham s\u1ed1","machine learning","m\xe1y h\u1ecdc","t\u1ed1i \u01b0u","RandomizedSearchCV"],image:"/img/blog/20250304_1_cover.jpg",hide_table_of_contents:!1},i="T\u1ed1i \u01b0u si\xeau tham s\u1ed1 m\xf4 h\xecnh v\u1edbi RandomizedSearchCV",h={permalink:"/blog/2025/03/hyperparameter-tuning-RandomizedSearchCV",source:"@site/blog/2025/03/14/hyperparameter-tuning-RandomizedsearchCV.md",title:"T\u1ed1i \u01b0u si\xeau tham s\u1ed1 m\xf4 h\xecnh v\u1edbi RandomizedSearchCV",description:"Trong b\xe0i vi\u1ebft n\xe0y, ch\xfang ta s\u1ebd t\xecm hi\u1ec3u v\u1ec1 RandomizedSearchCV - m\u1ed9t ph\u01b0\u01a1ng ph\xe1p hi\u1ec7u qu\u1ea3 h\u01a1n \u0111\u1ec3 t\u1ed1i \u01b0u si\xeau tham s\u1ed1.",date:"2025-03-14T00:00:00.000Z",formattedDate:"14 th\xe1ng 3, 2025",tags:[{label:"Data Science",permalink:"/blog/tags/data-science"}],readingTime:12.285,hasTruncateMarker:!1,authors:[{name:"L\xea Hu\u1ef3nh \u0110\u1ee9c",title:"Data Scientist",url:"https://www.linkedin.com/in/lhduc94/",imageURL:"https://i.pinimg.com/1200x/94/8c/1d/948c1d9c51227296803919f227eb4cdf.jpg",key:"lhduc"}],frontMatter:{title:"T\u1ed1i \u01b0u si\xeau tham s\u1ed1 m\xf4 h\xecnh v\u1edbi RandomizedSearchCV",slug:"2025/03/hyperparameter-tuning-RandomizedSearchCV",description:"Trong b\xe0i vi\u1ebft n\xe0y, ch\xfang ta s\u1ebd t\xecm hi\u1ec3u v\u1ec1 RandomizedSearchCV - m\u1ed9t ph\u01b0\u01a1ng ph\xe1p hi\u1ec7u qu\u1ea3 h\u01a1n \u0111\u1ec3 t\u1ed1i \u01b0u si\xeau tham s\u1ed1.",authors:"lhduc",tags:["Data Science"],keywords:["data science","hyperparameter tuning","python","ml","si\xeau tham s\u1ed1","machine learning","m\xe1y h\u1ecdc","t\u1ed1i \u01b0u","RandomizedSearchCV"],image:"/img/blog/20250304_1_cover.jpg",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"T\u1ed1i \u01b0u si\xeau tham s\u1ed1 m\xf4 h\xecnh v\u1edbi Hyperband",permalink:"/blog/2025/04/hyperparameter-tuning-hyperband"},nextItem:{title:"T\u1ed1i \u01b0u si\xeau tham s\u1ed1 m\xf4 h\xecnh v\u1edbi GridSearchCV",permalink:"/blog/2025/03/hyperparameter-tuning-gridsearchCV"}},c={authorsImageUrls:[void 0]},d=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"Randomized Search l\xe0 g\xec?",id:"randomized-search-l\xe0-g\xec",level:2},{value:"Tri\u1ec3n khai Randomized Search",id:"tri\u1ec3n-khai-randomized-search",level:2},{value:"T\u1ef1 x\xe2y d\u1ef1ng phi\xean b\u1ea3n Randomized SearchCV",id:"t\u1ef1-x\xe2y-d\u1ef1ng-phi\xean-b\u1ea3n-randomized-searchcv",level:3},{value:"S\u1eed d\u1ee5ng <code>RandomizedsearchCV</code> c\u1ee7a <code>scikit-learn</code>",id:"s\u1eed-d\u1ee5ng-randomizedsearchcv-c\u1ee7a-scikit-learn",level:3},{value:"K\u1ebft h\u1ee3p RandomizedSearch v\xe0 GridSearch",id:"k\u1ebft-h\u1ee3p-randomizedsearch-v\xe0-gridsearch",level:2},{value:"V\xed d\u1ee5 tri\u1ec3n khai",id:"v\xed-d\u1ee5-tri\u1ec3n-khai",level:3},{value:"K\u1ebft lu\u1eadn",id:"k\u1ebft-lu\u1eadn",level:2}];function o(n){const r={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:e(8731).A+"",width:"1024",height:"1024"})}),"\n",(0,t.jsx)(r.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,t.jsx)(r.p,{children:"\u1ede b\xe0i vi\u1ebft tr\u01b0\u1edbc, GridSearchCV \u0111\xe3 \u0111\u01b0\u1ee3c gi\u1edbi thi\u1ec7u nh\u01b0 m\u1ed9t c\xf4ng c\u1ee5 t\u1ed1i \u01b0u si\xeau tham s\u1ed1 b\u1eb1ng c\xe1ch duy\u1ec7t qua to\xe0n b\u1ed9 t\u1ed5 h\u1ee3p c\xf3 th\u1ec3. Tuy nhi\xean, khi kh\xf4ng gian t\xecm ki\u1ebfm tr\u1edf n\xean qu\xe1 r\u1ed9ng, ph\u01b0\u01a1ng ph\xe1p n\xe0y nhanh ch\xf3ng b\u1ed9c l\u1ed9 \u0111i\u1ec3m y\u1ebfu: t\u1ed1n th\u1eddi gian, t\u1ed1n t\xe0i nguy\xean v\xe0 \u0111\xf4i khi\u2026 kh\xf4ng hi\u1ec7u qu\u1ea3."}),"\n",(0,t.jsx)(r.p,{children:"Trong b\xe0i vi\u1ebft n\xe0y, ta s\u1ebd ti\u1ebfp c\u1eadn m\u1ed9t ph\u01b0\u01a1ng ph\xe1p kh\xe1c \u2014 RandomizedSearchCV \u2014 linh ho\u1ea1t h\u01a1n, nhanh h\u01a1n v\xe0 \u0111\u1eb7c bi\u1ec7t ph\xf9 h\u1ee3p v\u1edbi nh\u1eefng t\xecnh hu\u1ed1ng th\u1ef1c t\u1ebf n\u01a1i th\u1eddi gian v\xe0 hi\u1ec7u n\u0103ng l\xe0 y\u1ebfu t\u1ed1 quan tr\u1ecdng."}),"\n",(0,t.jsx)(r.h2,{id:"randomized-search-l\xe0-g\xec",children:"Randomized Search l\xe0 g\xec?"}),"\n",(0,t.jsxs)(r.p,{children:['Thay v\xec "l\u1ea7n l\u01b0\u1ee3t th\u1eed h\u1ebft nh\u01b0 GridSearch, Randomized Search ch\u1ecdn ng\u1eabu nhi\xean m\u1ed9t s\u1ed1 t\u1ed5 h\u1ee3p si\xeau tham s\u1ed1 trong kh\xf4ng gian t\xecm ki\u1ebfm. \u0110i\u1ec1u n\xe0y nghe c\xf3 v\u1ebb \u0111\u01a1n gi\u1ea3n, nh\u01b0ng l\u1ea1i mang \u0111\u1ebfn nhi\u1ec1u l\u1ee3i \xedch b\u1ea5t ng\u1edd\r\n',(0,t.jsx)(r.img,{src:e(3420).A+"",width:"914",height:"465"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Ng\u1eabu nhi\xean nh\u01b0ng hi\u1ec7u qu\u1ea3 \u2013 v\xec sao n\xean th\u1eed Randomized Search?"})}),"\n",(0,t.jsx)(r.p,{children:"So v\u1edbi GridSearch, Randomized Search mang l\u1ea1i hi\u1ec7u qu\u1ea3 cao h\u01a1n v\u1edbi chi ph\xed t\xednh to\xe1n th\u1ea5p h\u01a1n \u0111\xe1ng k\u1ec3. H\xe3y h\xecnh dung: n\u1ebfu c\u1ea7n t\u1ed1i \u01b0u 3 si\xeau tham s\u1ed1, m\u1ed7i tham s\u1ed1 c\xf3 5 gi\xe1 tr\u1ecb, GridSearch s\u1ebd ph\u1ea3i th\u1eed to\xe0n b\u1ed9 125 t\u1ed5 h\u1ee3p. Trong khi \u0111\xf3, Randomized Search ch\u1ec9 c\u1ea7n ch\u1ea1y kho\u1ea3ng 50 \u0111\u1ebfn 100 l\u01b0\u1ee3t l\xe0 \u0111\xe3 c\xf3 th\u1ec3 ti\u1ebfp c\u1eadn k\u1ebft qu\u1ea3 t\u1ed1i \u01b0u \u2014 ti\u1ebft ki\u1ec7m th\u1eddi gian m\xe0 v\u1eabn \u0111\u1ea1t \u0111\u01b0\u1ee3c hi\u1ec7u qu\u1ea3 t\u01b0\u01a1ng \u0111\u01b0\u01a1ng."}),"\n",(0,t.jsx)(r.p,{children:"Kh\xf4ng d\u1eebng l\u1ea1i \u1edf \u0111\xf3, vi\u1ec7c l\u1ef1a ch\u1ecdn t\u1ed5 h\u1ee3p tham s\u1ed1 m\u1ed9t c\xe1ch ng\u1eabu nhi\xean gi\xfap Randomized Search c\xf3 kh\u1ea3 n\u0103ng \u201cch\u1ea1m v\xe0o\u201d nh\u1eefng v\xf9ng t\u1ed1i \u01b0u m\xe0 GridSearch d\u1ec5 b\u1ecf l\u1ee1, nh\u1ea5t l\xe0 khi kho\u1ea3ng c\xe1ch gi\u1eefa c\xe1c gi\xe1 tr\u1ecb trong Grid kh\xf4ng \u0111\u1ee7 nh\u1ecf \u0111\u1ec3 bao ph\u1ee7 to\xe0n di\u1ec7n kh\xf4ng gian tham s\u1ed1."}),"\n",(0,t.jsxs)(r.p,{children:["Th\xeam v\xe0o \u0111\xf3, Randomized Search \u0111\u1eb7c bi\u1ec7t ph\xf9 h\u1ee3p trong m\xf4i tr\u01b0\u1eddng c\xf3 gi\u1edbi h\u1ea1n v\u1ec1 t\xe0i nguy\xean \u2014 t\u1eeb th\u1eddi gian \u0111\u1ebfn kh\u1ea3 n\u0103ng x\u1eed l\xfd c\u1ee7a ph\u1ea7n c\u1ee9ng. Thay v\xec ph\u1ea3i ho\xe0n t\u1ea5t to\xe0n b\u1ed9 ph\xe9p th\u1eed nh\u01b0 GridSearch, ta c\xf3 th\u1ec3 ch\u1ee7 \u0111\u1ed9ng c\u1ea5u h\xecnh s\u1ed1 l\u1ea7n th\u1eed (",(0,t.jsx)(r.code,{children:"n_iter"}),") \u0111\u1ec3 ki\u1ec3m so\xe1t qu\xe1 tr\xecnh t\xecm ki\u1ebfm theo th\u1eddi gian ho\u1eb7c n\u0103ng l\u1ef1c t\xednh to\xe1n s\u1eb5n c\xf3."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Khi n\xe0o GridSearch v\u1eabn h\u1eefu \xedch?"})}),"\n",(0,t.jsx)(r.p,{children:"D\xf9 Randomized Search mang l\u1ea1i nhi\u1ec1u l\u1ee3i th\u1ebf, GridSearch kh\xf4ng h\u1eb3n \u0111\xe3 l\u1ed7i th\u1eddi. Ph\u01b0\u01a1ng ph\xe1p n\xe0y v\u1eabn t\u1ecf ra h\u1eefu d\u1ee5ng trong m\u1ed9t s\u1ed1 t\xecnh hu\u1ed1ng c\u1ee5 th\u1ec3: ch\u1eb3ng h\u1ea1n khi kh\xf4ng gian tham s\u1ed1 nh\u1ecf v\xe0 c\xf3 th\u1ec3 ki\u1ec3m tra to\xe0n di\u1ec7n, ho\u1eb7c khi \u0111\xe3 hi\u1ec3u r\xf5 t\u1eebng si\xeau tham s\u1ed1 v\xe0 c\xf3 kh\u1ea3 n\u0103ng x\xe1c \u0111\u1ecbnh ph\u1ea1m vi t\u1ed1i \u01b0u t\u01b0\u01a1ng \u0111\u1ed1i ch\xednh x\xe1c. Ngo\xe0i ra, n\u1ebfu c\xf3 trong tay h\u1ec7 th\u1ed1ng m\xe1y t\xednh m\u1ea1nh m\u1ebd, h\u1ed7 tr\u1ee3 x\u1eed l\xfd song song, v\xe0 m\u1ee5c ti\xeau l\xe0 t\xecm l\u1eddi gi\u1ea3i t\u1ed1i \u01b0u to\xe0n c\u1ee5c, GridSearch v\u1eabn l\xe0 m\u1ed9t l\u1ef1a ch\u1ecdn \u0111\xe1ng c\xe2n nh\u1eafc."}),"\n",(0,t.jsx)(r.h2,{id:"tri\u1ec3n-khai-randomized-search",children:"Tri\u1ec3n khai Randomized Search"}),"\n",(0,t.jsxs)(r.p,{children:["N\u1ebfu \u1edf b\xe0i vi\u1ebft tr\u01b0\u1edbc c\xe1c b\u1ea1n \u0111\xe3 quen v\u1edbi ",(0,t.jsx)(r.a,{href:"https://datasciencedances.com/blog/2025/03/hyperparameter-tuning-gridsearchCV",children:"T\u1ed1i \u01b0u si\xeau tham s\u1ed1 m\xf4 h\xecnh v\u1edbi GridSearchCV"}),"  l\u1ea7n n\xe0y ta s\u1ebd c\xf9ng nhau tri\u1ec3n khai Randomized Search t\u1eeb \u0111\u1ea7u (from scratch) \u0111\u1ec3 hi\u1ec3u r\xf5 c\xe1ch ho\u1ea1t \u0111\u1ed9ng b\xean trong c\u1ee7a n\xf3 \u2014 c\xe1ch ch\u1ecdn t\u1ed5 h\u1ee3p tham s\u1ed1 ng\u1eabu nhi\xean, c\xe1ch t\xednh \u0111i\u1ec3m \u0111\xe1nh gi\xe1 v\xe0 c\xe1ch t\xecm ra b\u1ed9 tham s\u1ed1 t\u1ed1t nh\u1ea5t."]}),"\n",(0,t.jsxs)(r.p,{children:["Sau khi n\u1eafm \u0111\u01b0\u1ee3c nguy\xean l\xfd, ta s\u1ebd chuy\u1ec3n sang ph\u1ea7n th\u1ee9 hai: s\u1eed d\u1ee5ng ",(0,t.jsx)(r.code,{children:"RandomizedSearchCV"})," t\u1eeb th\u01b0 vi\u1ec7n scikit-learn \u0111\u1ec3 t\u1eadn d\u1ee5ng c\xe1c ti\u1ec7n \xedch c\xf3 s\u1eb5n, \u0111\xe1nh gi\xe1 hi\u1ec7u qu\u1ea3 v\xe0 so s\xe1nh k\u1ebft qu\u1ea3 v\u1edbi phi\xean b\u1ea3n t\u1ef1 vi\u1ebft."]}),"\n",(0,t.jsxs)(r.p,{children:["B\u1ed9 d\u1eef li\u1ec7u l\xe0 ",(0,t.jsx)(r.a,{href:"https://archive.ics.uci.edu/dataset/327/phishing+websites",children:"Phising Websites Dataset"})," t\u1eeb UCI \u2014 quen thu\u1ed9c nh\u01b0ng v\u1eabn \u0111\u1ee7 th\xe1ch th\u1ee9c \u0111\u1ec3 th\u1eed nghi\u1ec7m c\xe1c k\u1ef9 thu\u1eadt tinh ch\u1ec9nh m\xf4 h\xecnh"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'from sklearn.model_selection import train_test_split, RandomizedSearchCV\r\nfrom ucimlrepo import fetch_ucirepo \r\nfrom sklearn.ensemble import RandomForestClassifier\r\nfrom sklearn.metrics import accuracy_score\r\nimport numpy as np\r\n\r\n# fetch dataset \r\nphishing_websites = fetch_ucirepo(id=327) \r\n  \r\n# data (as pandas dataframes) \r\nX = phishing_websites.data.features \r\ny = phishing_websites.data.targets\r\n\r\n# Chia t\u1eadp train v\xe0 test\r\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)\r\n\r\nprint(f"Train size: {X_train.shape}, Test size: {X_test.shape}")\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Train size: (8844, 30), Test size: (2211, 30)\n"})})}),"\n",(0,t.jsxs)(r.p,{children:["Ta s\u1ebd tune 2 si\xeau tham s\u1ed1 ",(0,t.jsx)(r.code,{children:"n_estimators"})," v\xe0 ",(0,t.jsx)(r.code,{children:"max_depth"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"from scipy.stats import randint, uniform\r\n\r\nparam_distributions = {\r\n    'n_estimators': randint(50, 300),\r\n    'max_depth': randint(3, 15)\r\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["D\u01b0\u1edbi \u0111\xe2y l\xe0 h\xe0m ",(0,t.jsx)(r.code,{children:"sample_params d\xf9ng"})," \u0111\u1ec3 l\u1ea5y ng\u1eabu nhi\xean m\u1ed9t b\u1ed9 tham s\u1ed1 t\u1eeb ",(0,t.jsx)(r.code,{children:"param_distributions"})," theo \u0111\xfang ki\u1ec3u ph\xe2n ph\u1ed1i c\u1ee7a ",(0,t.jsx)(r.code,{children:"scipy.stats"})," nh\u01b0 randint, uniform, v.v.:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"def sample_params(param_distributions):\r\n    sampled_params = {}\r\n    for param, dist in param_distributions.items():\r\n        sampled_params[param] = dist.rvs()\r\n    return sampled_params\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u0110\u1ec3 t\xe1i l\u1eadp k\u1ebft qu\u1ea3 v\xe0 \u0111\u1ea3m b\u1ea3o t\xednh nh\u1ea5t qu\xe1n trong th\u1eed nghi\u1ec7m, c\xf3 th\u1ec3 \u0111\u1eb7t seed tr\u01b0\u1edbc b\u1eb1ng ",(0,t.jsx)(r.code,{children:"np.random.seed(42)"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import numpy as np\r\nnp.random.seed(42)\r\nfor _ in range(10):\r\n    sampled_params = sample_params(param_distributions)\r\n    print(sampled_params)\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"{'n_estimators': 152, 'max_depth': 6}\r\n{'n_estimators': 142, 'max_depth': 13}\r\n{'n_estimators': 121, 'max_depth': 7}\r\n{'n_estimators': 152, 'max_depth': 12}\r\n{'n_estimators': 260, 'max_depth': 9}\r\n{'n_estimators': 124, 'max_depth': 13}\r\n{'n_estimators': 137, 'max_depth': 7}\r\n{'n_estimators': 149, 'max_depth': 10}\r\n{'n_estimators': 201, 'max_depth': 5}\r\n{'n_estimators': 199, 'max_depth': 7}\n"})})}),"\n",(0,t.jsx)(r.p,{children:"Nh\u01b0 v\u1eady, ta v\u1eeba t\u1ea1o ra 10 b\u1ed9 si\xeau tham s\u1ed1 ho\xe0n to\xe0n ng\u1eabu nhi\xean. C\xe1c b\u01b0\u1edbc ti\u1ebfp theo s\u1ebd bao g\u1ed3m hu\u1ea5n luy\u1ec7n m\xf4 h\xecnh v\u1edbi t\u1eebng b\u1ed9, \u0111\xe1nh gi\xe1 b\u1eb1ng cross-validation v\xe0 ch\u1ecdn ra b\u1ed9 t\u1ed1t nh\u1ea5t \u2014 c\u0169ng s\u1ebd \u0111\u01b0\u1ee3c vi\u1ebft th\u1ee7 c\xf4ng tr\u01b0\u1edbc khi chuy\u1ec3n sang d\xf9ng RandomizedSearchCV trong th\u01b0 vi\u1ec7n scikit-learn \u0111\u1ec3 so s\xe1nh hi\u1ec7u qu\u1ea3."}),"\n",(0,t.jsx)(r.h3,{id:"t\u1ef1-x\xe2y-d\u1ef1ng-phi\xean-b\u1ea3n-randomized-searchcv",children:"T\u1ef1 x\xe2y d\u1ef1ng phi\xean b\u1ea3n Randomized SearchCV"}),"\n",(0,t.jsxs)(r.p,{children:["Thay v\xec ch\u1ec9 g\u1ecdi ",(0,t.jsx)(r.code,{children:"RandomizedSearchCV"})," t\u1eeb ",(0,t.jsx)(r.code,{children:"scikit-learn"}),", ta s\u1ebd b\u1eaft \u0111\u1ea7u t\u1eeb con s\u1ed1 0: t\u1ea1o m\u1ed9t class t\u1ef1 \u0111\u1ecbnh ngh\u0129a \u0111\u1ec3 m\xf4 ph\u1ecfng l\u1ea1i to\xe0n b\u1ed9 quy tr\xecnh t\xecm ki\u1ebfm ng\u1eabu nhi\xean. C\xe1ch ti\u1ebfp c\u1eadn n\xe0y kh\xf4ng ch\u1ec9 gi\xfap b\u1ea1n hi\u1ec3u s\xe2u h\u01a1n v\u1ec1 c\u01a1 ch\u1ebf ho\u1ea1t \u0111\u1ed9ng, m\xe0 c\xf2n m\u1edf ra kh\u1ea3 n\u0103ng t\xf9y ch\u1ec9nh theo nhu c\u1ea7u ri\xeang sau n\xe0y."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.strong,{children:["T\u1ea1o class ",(0,t.jsx)(r.code,{children:"RandomizedSearchCV_from_scratch"})]})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'class RandomizedSearchCV_from_scratch:\r\n    def __init__(self, estimator, param_distributions, n_iter=10, cv=5, random_state=None):\r\n        self.estimator = estimator  # M\xf4 h\xecnh c\u1ea7n t\u1ed1i \u01b0u h\xf3a\r\n        self.param_distributions = param_distributions  # Ph\xe2n ph\u1ed1i tham s\u1ed1\r\n        self.n_iter = n_iter  # S\u1ed1 l\u1ea7n th\u1eed nghi\u1ec7m\r\n        self.cv = cv  # S\u1ed1 fold cho cross-validation\r\n        self.random_state = random_state  # Seed cho t\xe1i l\u1eadp\r\n\r\n        # Thi\u1ebft l\u1eadp seed n\u1ebfu c\u1ea7n\r\n        if self.random_state is not None:\r\n            np.random.seed(self.random_state)\r\n    def sample_params(self):\r\n        ## TODO\r\n        """\r\n        L\u1ea5y m\u1eabu ng\u1eabu nhi\xean c\xe1c tham s\u1ed1 t\u1eeb ph\xe2n ph\u1ed1i \u0111\xe3 cho\r\n        """\r\n        \r\n    def cross_val_score(self, X, y, params):\r\n        ## TODO\r\n        """\r\n        Th\u1ef1c hi\u1ec7n cross-validation tr\u1ea3 v\u1ec1 \u0111i\u1ec3m s\u1ed1 trung b\xecnh c\xe1c fold\r\n        """\r\n    def fit(self, X, y):\r\n        ## TODO\r\n        """\r\n        Th\u1ef1c hi\u1ec7n hu\u1ea5n luy\u1ec7n tr\xean t\u1eebng b\u1ed9 tham s\u1ed1\r\n        """\r\n \n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u0110\u1ea7u ti\xean ta vi\u1ebft method ",(0,t.jsx)(r.code,{children:"sample_params"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'def sample_params(self):\r\n    """\r\n    L\u1ea5y m\u1eabu ng\u1eabu nhi\xean c\xe1c tham s\u1ed1 t\u1eeb ph\xe2n ph\u1ed1i \u0111\xe3 cho.\r\n    """\r\n    sampled_params = {}\r\n    for param, dist in self.param_distributions.items():\r\n        sampled_params[param] = dist.rvs()\r\n    return sampled_params\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Ti\u1ebfp theo ta vi\u1ebft ",(0,t.jsx)(r.code,{children:"cross_val_score"}),", v\xec trong b\xe0i vi\u1ebft n\xe0y d\xf9ng d\u1eef li\u1ec7u d\u1ea1ng classification n\xean ta s\u1ebd d\xf9ng ",(0,t.jsx)(r.code,{children:"StratifiedKfold"}),".\r\n\u0110\u1ed1i v\u1edbi d\u1eef li\u1ec7u ",(0,t.jsx)(r.code,{children:"Phising_website"})," l\xe0 d\u1eef li\u1ec7u kh\xf4ng b\u1ecb m\u1ea5t c\xe2n b\u1eb1ng n\xean ta \u0111\u01a1n gi\u1ea3n d\xf9ng ",(0,t.jsx)(r.code,{children:"accuracy_score"})," l\xe0m metric \u0111\xe1nh gi\xe1."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'def cross_val_score(self, X, y, params):\r\n    """\r\n    Th\u1ef1c hi\u1ec7n cross-validation (StratifiedKFold) \u0111\u1ec3 t\xednh \u0111i\u1ec3m cho m\xf4 h\xecnh v\u1edbi tham s\u1ed1 \u0111\xe3 cho.\r\n    """\r\n    skf = StratifiedKFold(n_splits=self.cv, shuffle=True, random_state=self.random_state)\r\n    scores = []\r\n\r\n    # Ch\u1ea1y CV\r\n    for train_idx, valid_idx in skf.split(X, y):\r\n        _X_train, _X_valid = X.iloc[train_idx], X.iloc[valid_idx]\r\n        _y_train, _y_valid = y.iloc[train_idx], y.iloc[valid_idx]\r\n\r\n        # Hu\u1ea5n luy\u1ec7n m\xf4 h\xecnh v\u1edbi tham s\u1ed1 \u0111\xe3 ch\u1ecdn\r\n        self.estimator.set_params(**params)\r\n        self.estimator.fit(_X_train, _y_train)\r\n\r\n        # D\u1ef1 \u0111o\xe1n v\xe0 t\xednh \u0111i\u1ec3m accuracy\r\n        y_pred = self.estimator.predict(_X_valid)\r\n        score = accuracy_score(_y_valid, y_pred)\r\n        scores.append(score)\r\n\r\n    return np.mean(scores), np.std(scores)  # \n'})}),"\n",(0,t.jsxs)(r.p,{children:["sau \u0111\xf3 l\xe0 vi\u1ebft ph\u01b0\u01a1ng th\u1ee9c ",(0,t.jsx)(r.code,{children:"fit"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"def fit(self, X, y):\r\n        \"\"\"\r\n        Ti\u1ebfn h\xe0nh t\xecm ki\u1ebfm ng\u1eabu nhi\xean c\xe1c tham s\u1ed1 v\xe0 hu\u1ea5n luy\u1ec7n m\xf4 h\xecnh v\u1edbi Cross-Validation.\r\n        \"\"\"\r\n        best_score = -np.inf\r\n        best_params = None\r\n        results = []\r\n\r\n        for i in range(self.n_iter):\r\n            # L\u1ea5y m\u1eabu c\xe1c tham s\u1ed1\r\n            sampled_params = self.sample_params()\r\n\r\n            # T\xednh \u0111i\u1ec3m cho tham s\u1ed1 hi\u1ec7n t\u1ea1i v\u1edbi Cross-Validation\r\n            mean_score, std_score = self.cross_val_score(X, y, sampled_params)\r\n\r\n            results.append({'params': sampled_params, 'mean_score': mean_score, 'std_score': std_score})\r\n\r\n            # C\u1eadp nh\u1eadt n\u1ebfu \u0111i\u1ec3m s\u1ed1 hi\u1ec7n t\u1ea1i l\xe0 t\u1ed1t nh\u1ea5t\r\n            if mean_score > best_score:\r\n                best_score = mean_score\r\n                best_params = sampled_params\r\n\r\n        # L\u01b0u k\u1ebft qu\u1ea3 v\xe0 tr\u1ea3 v\u1ec1 tham s\u1ed1 t\u1ed1t nh\u1ea5t\r\n        self.results_ = results\r\n        self.best_score_ = best_score\r\n        self.best_params_ = best_params\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Hu\u1ea5n luy\u1ec7n m\xf4 h\xecnh"})}),"\n",(0,t.jsxs)(r.p,{children:["Sau khi \u0111\xe3 \u0111\u1ecbnh ngh\u0129a class, ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng gi\u1ed1ng nh\u01b0 ",(0,t.jsx)(r.code,{children:"RandomizedSearchCV"})," trong scikit-learn, nh\u01b0ng t\u1ea5t nhi\xean l\xe0 phi\xean b\u1ea3n \u0111\u01a1n gi\u1ea3n do ta t\u1ef1 tay x\xe2y d\u1ef1ng:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"rf = RandomForestClassifier(random_state=42)\r\n\r\nsearch = RandomizedSearchCV_from_scratch(rf, param_distributions, n_iter=10, cv=5, random_state=42)\r\nsearch.fit(X_train, y_train)\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Ph\xe2n t\xedch k\u1ebft qu\u1ea3 t\xecm ki\u1ebfm"})}),"\n",(0,t.jsxs)(r.p,{children:["Sau khi ch\u1ea1y search.fit(X_train, y_train), to\xe0n b\u1ed9 k\u1ebft qu\u1ea3 \u0111\u01b0\u1ee3c l\u01b0u trong ",(0,t.jsx)(r.code,{children:"search.results_"}),". M\u1ed7i ph\u1ea7n t\u1eed trong danh s\xe1ch ch\u1ee9a:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"params"}),": b\u1ed9 si\xeau tham s\u1ed1 \u0111\xe3 th\u1eed"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"mean_score"}),": \u0111i\u1ec3m trung b\xecnh c\u1ee7a m\xf4 h\xecnh tr\xean 5-fold cross-validation"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"std_score"}),": \u0111\u1ed9 l\u1ec7ch chu\u1ea9n gi\u1eefa c\xe1c fold"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"results = search.results_\r\nresults\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"[{'params': {'n_estimators': 152, 'max_depth': 6},\r\n  'mean_score': np.float64(0.9337398228413425),\r\n  'std_score': np.float64(0.005562064595556827)},\r\n {'params': {'n_estimators': 142, 'max_depth': 13},\r\n  'mean_score': np.float64(0.9614432445152692),\r\n  'std_score': np.float64(0.0032797031601484255)},\r\n {'params': {'n_estimators': 121, 'max_depth': 7},\r\n  'mean_score': np.float64(0.9362274235258307),\r\n  'std_score': np.float64(0.0032954692818318917)},\r\n {'params': {'n_estimators': 152, 'max_depth': 12},\r\n  'mean_score': np.float64(0.9601992843056255),\r\n  'std_score': np.float64(0.003000547059202927)},\r\n {'params': {'n_estimators': 260, 'max_depth': 9},\r\n  'mean_score': np.float64(0.946969937255243),\r\n  'std_score': np.float64(0.003280785232637579)},\r\n {'params': {'n_estimators': 124, 'max_depth': 13},\r\n  'mean_score': np.float64(0.9608778254964202),\r\n  'std_score': np.float64(0.002995073924076509)},\r\n {'params': {'n_estimators': 137, 'max_depth': 7},\r\n  'mean_score': np.float64(0.9369059007696656),\r\n  'std_score': np.float64(0.0031595655596408823)},\r\n {'params': {'n_estimators': 149, 'max_depth': 10},\r\n  'mean_score': np.float64(0.9514931615121155),\r\n  'std_score': np.float64(0.00452203888505248)},\r\n {'params': {'n_estimators': 201, 'max_depth': 5},\r\n  'mean_score': np.float64(0.9306874426076035),\r\n  'std_score': np.float64(0.004488707183069916)},\r\n {'params': {'n_estimators': 199, 'max_depth': 7},\r\n  'mean_score': np.float64(0.9378106223573919),\r\n  'std_score': np.float64(0.0033790400495528968)}]\n"})})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Hi\u1ec3n th\u1ecb k\u1ebft qu\u1ea3 \u0111\u1ea7y \u0111\u1ee7"})}),"\n",(0,t.jsxs)(r.p,{children:["\u0110\u1ec3 xem k\u1ebft qu\u1ea3 m\u1ed9t c\xe1ch tr\u1ef1c quan h\u01a1n, ta c\xf3 th\u1ec3 \u0111\u01b0a ch\xfang v\xe0o m\u1ed9t ",(0,t.jsx)(r.code,{children:"DataFrame"})," v\xe0 s\u1eafp x\u1ebfp theo ",(0,t.jsx)(r.code,{children:"mean_score"})," gi\u1ea3m d\u1ea7n:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"results = search.results_\r\n# T\u1ea1o DataFrame t\u1eeb list c\xe1c k\u1ebft qu\u1ea3\r\nimport pandas as pd\r\ndf = pd.DataFrame(results)\r\nparams_df = pd.DataFrame(df['params'].tolist())\r\nfinal_df = pd.concat([params_df, df[['mean_score','std_score']]], axis=1).sort_values(by='mean_score', ascending=False)\r\nfinal_df.reset_index(drop=True, inplace=True)\r\nfinal_df\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"   n_estimators  max_depth  mean_score  std_score\r\n0           142         13    0.961443   0.003280\r\n1           124         13    0.960878   0.002995\r\n2           152         12    0.960199   0.003001\r\n3           149         10    0.951493   0.004522\r\n4           260          9    0.946970   0.003281\r\n5           199          7    0.937811   0.003379\r\n6           137          7    0.936906   0.003160\r\n7           121          7    0.936227   0.003295\r\n8           152          6    0.933740   0.005562\r\n9           201          5    0.930687   0.004489\n"})})}),"\n",(0,t.jsxs)(r.p,{children:["T\u1eeb b\u1ea3ng tr\xean, c\xf3 th\u1ec3 th\u1ea5y m\xf4 h\xecnh \u0111\u1ea1t hi\u1ec7u su\u1ea5t cao nh\u1ea5t v\u1edbi ",(0,t.jsx)(r.code,{children:"n_estimators=142"})," v\xe0 ",(0,t.jsx)(r.code,{children:"max_depth=13"}),", v\u1edbi \u0111\u1ed9 ch\xednh x\xe1c trung b\xecnh kho\u1ea3ng ",(0,t.jsx)(r.code,{children:"96.14%"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Tham s\u1ed1 t\u1ed1i \u01b0u v\xe0 \u0111i\u1ec3m s\u1ed1 cao nh\u1ea5t"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'print("Best Parameters:", search.best_params_)\r\nprint("Best Cross-Val Score:", search.best_score_)\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Best Parameters: {'n_estimators': 142, 'max_depth': 13}\r\nBest Cross-Val Score: 0.9614432445152692\n"})})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"\u0110\xe1nh gi\xe1 tr\xean t\u1eadp test"})}),"\n",(0,t.jsxs)(r.p,{children:["Sau khi \u0111\xe3 c\xf3 b\u1ed9 tham s\u1ed1 t\u1ed1i \u01b0u, ta hu\u1ea5n luy\u1ec7n l\u1ea1i m\xf4 h\xecnh tr\xean to\xe0n b\u1ed9 ",(0,t.jsx)(r.code,{children:"X_train"})," v\xe0 \u0111\xe1nh gi\xe1 tr\xean ",(0,t.jsx)(r.code,{children:"X_test"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'rf = RandomForestClassifier(random_state=42)\r\nrf.set_params(**search.best_params_)\r\nrf.fit(X_train, y_train)\r\ny_pred = rf.predict(X_test)\r\nprint("Test accuracy", accuracy_score(y_test, y_pred))\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Test accuracy 0.9638172772501131\n"})})}),"\n",(0,t.jsx)(r.p,{children:"V\u1edbi \u0111\u1ed9 ch\xednh x\xe1c g\u1ea7n 96.4% tr\xean t\u1eadp test, ta c\xf3 th\u1ec3 kh\u1eb3ng \u0111\u1ecbnh ph\u01b0\u01a1ng ph\xe1p Randomized Search kh\xf4ng ch\u1ec9 nhanh h\u01a1n m\xe0 c\xf2n mang l\u1ea1i k\u1ebft qu\u1ea3 g\u1ea7n nh\u01b0 t\u01b0\u01a1ng \u0111\u01b0\u01a1ng (th\u1eadm ch\xed t\u1ed1t h\u01a1n) so v\u1edbi Grid Search trong nhi\u1ec1u tr\u01b0\u1eddng h\u1ee3p th\u1ef1c t\u1ebf."}),"\n",(0,t.jsx)(r.p,{children:"Sau khi hi\u1ec3u c\u01a1 ch\u1ebf ho\u1ea1t \u0111\u1ed9ng t\u1eeb b\xean trong, ta chuy\u1ec3n sang c\xe1ch d\xf9ng th\u01b0 vi\u1ec7n scikit-learn \u0111\u1ec3 t\u1eadn d\u1ee5ng hi\u1ec7u su\u1ea5t t\u1ed1i \u01b0u v\xe0 \u0111\u1ed9 tin c\u1eady cao trong th\u1ef1c t\u1ebf."}),"\n",(0,t.jsxs)(r.h3,{id:"s\u1eed-d\u1ee5ng-randomizedsearchcv-c\u1ee7a-scikit-learn",children:["S\u1eed d\u1ee5ng ",(0,t.jsx)(r.code,{children:"RandomizedsearchCV"})," c\u1ee7a ",(0,t.jsx)(r.code,{children:"scikit-learn"})]}),"\n",(0,t.jsx)(r.p,{children:"\u1ede ph\u1ea7n tr\u01b0\u1edbc, ta \u0111\xe3 t\u1ef1 x\xe2y d\u1ef1ng m\u1ed9t phi\xean b\u1ea3n thu nh\u1ecf c\u1ee7a Randomized Search \u0111\u1ec3 hi\u1ec3u r\xf5 t\u1eebng b\u01b0\u1edbc ho\u1ea1t \u0111\u1ed9ng. Gi\u1edd \u0111\xe2y, h\xe3y chuy\u1ec3n sang c\xe1ch d\xf9ng c\xf4ng c\u1ee5 ch\xednh th\u1ed1ng trong th\u01b0 vi\u1ec7n scikit-learn \u2014 nhanh ch\xf3ng, \u0111\xe1ng tin c\u1eady v\xe0 r\u1ea5t ph\xf9 h\u1ee3p khi \xe1p d\u1ee5ng v\xe0o d\u1ef1 \xe1n th\u1ef1c t\u1ebf."}),"\n",(0,t.jsxs)(r.p,{children:["Ch\xfang ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ",(0,t.jsx)(r.code,{children:"RandomizedSearchCV"})," c\u1ee7a  ",(0,t.jsx)(r.code,{children:"scikit-learn"})," nh\u01b0 sau"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"from sklearn.ensemble import RandomForestClassifier\r\n\r\nrf = RandomForestClassifier(random_state=42)\r\ncv_strategy = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\r\nnp.random.seed(43)\r\nclf = RandomizedSearchCV(rf, param_distributions=param_distributions, random_state=42,  scoring='accuracy',cv=cv_strategy, n_iter=10)\r\nsklearn_rdsearch = clf.fit(X_train, y_train)\r\nprint(sklearn_rdsearch.best_params_)\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"{'max_depth': 13, 'n_estimators': 137}\n"})})}),"\n",(0,t.jsx)(r.p,{children:"\u0110\u1ec3 xem to\xe0n b\u1ed9 k\u1ebft qu\u1ea3 ta g\xf5 l\u1ec7nh nh\u01b0 sau"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"pd.DataFrame(sklearn_rdsearch.cv_results_)\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"\u0110\xe1nh gi\xe1 tr\xean t\u1eadp test"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'rf = RandomForestClassifier(random_state=42)\r\nrf.set_params(**sklearn_rdsearch.best_params_)\r\nrf.fit(X_train, y_train)\r\ny_pred = rf.predict(X_test)\r\nprint("Test accuracy", accuracy_score(y_test, y_pred))\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Test accuracy 0.9633649932157394\n"})})}),"\n",(0,t.jsx)(r.h2,{id:"k\u1ebft-h\u1ee3p-randomizedsearch-v\xe0-gridsearch",children:"K\u1ebft h\u1ee3p RandomizedSearch v\xe0 GridSearch"}),"\n",(0,t.jsx)(r.p,{children:"Trong th\u1ef1c t\u1ebf, k\u1ebft h\u1ee3p hai ph\u01b0\u01a1ng ph\xe1p n\xe0y s\u1ebd gi\xfap ta t\u1eadn d\u1ee5ng \u01b0u \u0111i\u1ec3m c\u1ee7a c\u1ea3 hai: Randomized Search gi\xfap kh\xe1m ph\xe1 nhanh, GridSearch gi\xfap tinh ch\u1ec9nh s\xe2u. C\xe1c b\u01b0\u1edbc k\u1ebft h\u1ee3p c\u1ea3 hai ph\u01b0\u01a1ng ph\xe1p nh\u01b0 sau:"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"1\ufe0f\u20e3"})," D\xf9ng Randomized Search \u0111\u1ec3 kh\xe1m ph\xe1 nhanh kh\xf4ng gian tham s\u1ed1 r\u1ed9ng"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"2\ufe0f\u20e3"})," Sau \u0111\xf3 d\xf9ng GridSearch \u0111\u1ec3 t\xecm ki\u1ebfm chi ti\u1ebft xung quanh c\xe1c gi\xe1 tr\u1ecb t\u1ed1t nh\u1ea5t t\u1eeb Randomized Search"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:e(5906).A+"",width:"1159",height:"464"})}),"\n",(0,t.jsx)(r.h3,{id:"v\xed-d\u1ee5-tri\u1ec3n-khai",children:"V\xed d\u1ee5 tri\u1ec3n khai"}),"\n",(0,t.jsxs)(r.p,{children:["Kh\u1edfi t\u1ea1o ",(0,t.jsx)(r.code,{children:"param_distributions"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"from sklearn.model_selection import RandomizedSearchCV, GridSearchCV\r\n\r\n# B\u01b0\u1edbc 1: Randomized Search v\u1edbi kh\xf4ng gian tham s\u1ed1 r\u1ed9ng\r\nparam_distributions = {\r\n    'n_estimators': randint(50, 300),\r\n    'max_depth': randint(3, 15)\r\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"B\u01b0\u1edbc 1"}),": S\u1eed d\u1ee5ng ",(0,t.jsx)(r.code,{children:"RandomizedSearchCV"})," \u0111\u1ea7u ti\xean \u0111\u1ec3 t\xecm best_params"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'rf = RandomForestClassifier(random_state=42)\r\ncv_strategy = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\r\nrandom_search = RandomizedSearchCV(\r\n    RandomForestClassifier(random_state=42),\r\n    param_distributions=param_distributions,\r\n    n_iter=10,\r\n    cv=cv_strategy,\r\n    scoring=\'accuracy\',\r\n    random_state=42,\r\n    n_jobs=-1\r\n)\r\n\r\nrandom_search.fit(X_train, y_train)\r\nprint("Best parameters from Randomized Search:", random_search.best_params_)\r\nprint("Best_score",random_search.best_score_)\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Best parameters from Randomized Search: {'max_depth': 13, 'n_estimators': 137}\r\nBest_score 0.9613301223433235\n"})})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"B\u01b0\u1edbc 2"}),": ",(0,t.jsx)(r.code,{children:"GridSearch"})," xung quanh k\u1ebft qu\u1ea3 t\u1ed1t nh\u1ea5t c\u1ee7a ",(0,t.jsx)(r.code,{children:"RandomizedSearch"})]}),"\n",(0,t.jsx)(r.p,{children:"T\u1ea1o kh\xf4ng gian tham s\u1ed1 h\u1eb9p h\u01a1n xung quanh gi\xe1 tr\u1ecb t\u1ed1t nh\u1ea5t"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"best_params = random_search.best_params_\r\nfine_tune_params = {\r\n    'n_estimators': np.arange(\r\n        max(100, best_params['n_estimators'] - 5),  # Gi\u1ea3m 5 nh\u01b0ng kh\xf4ng nh\u1ecf h\u01a1n 100\r\n        best_params['n_estimators'] + 6,  # T\u0103ng t\u1ed1i \u0111a 5\r\n        step=2  # Kho\u1ea3ng c\xe1ch gi\u1eefa c\xe1c gi\xe1 tr\u1ecb\r\n    ).tolist(),\r\n    \r\n    'max_depth': np.arange(\r\n        max(4, best_params['max_depth'] - 3),  # Gi\u1ea3m t\u1ed1i \u0111a 3 nh\u01b0ng kh\xf4ng nh\u1ecf h\u01a1n 4\r\n        best_params['max_depth'] + 4,  # T\u0103ng t\u1ed1i \u0111a 3\r\n        step=1\r\n    ).tolist()}\n"})}),"\n",(0,t.jsx)(r.p,{children:"S\u1eed d\u1ee5ng GridSearchCV"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'grid_search = GridSearchCV(\r\n    RandomForestClassifier(random_state=42),\r\n    fine_tune_params,\r\n    cv=5,\r\n    n_jobs=-1\r\n)\r\ngrid_search.fit(X_train, y_train)\r\nprint("\\nBest parameters after fine-tuning:", grid_search.best_params_)\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Best parameters after fine-tuning: {'max_depth': 16, 'n_estimators': 132}\n"})})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"\u0110\xe1nh gi\xe1 tr\xean t\u1eadp test"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'rf = RandomForestClassifier(random_state=42)\r\nrf.set_params(**grid_search.best_params_)\r\nrf.fit(X_train, y_train)\r\ny_pred = rf.predict(X_test)\r\nprint("Test accuracy", accuracy_score(y_test, y_pred))\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Test accuracy 0.9751243781094527\n"})})}),"\n",(0,t.jsxs)(r.p,{children:["K\u1ebft qu\u1ea3 n\xe0y cao h\u01a1n ph\u01b0\u01a1ng ph\xe1p ch\u1ec9 s\u1eed d\u1ee5ng m\u1ed7i ",(0,t.jsx)(r.code,{children:"RandomizedSearchCV"})]}),"\n",(0,t.jsx)(r.h2,{id:"k\u1ebft-lu\u1eadn",children:"K\u1ebft lu\u1eadn"}),"\n",(0,t.jsx)(r.p,{children:"Randomized SearchCV l\xe0 m\u1ed9t ph\u01b0\u01a1ng ph\xe1p hi\u1ec7u qu\u1ea3 \u0111\u1ec3 t\u1ed1i \u01b0u si\xeau tham s\u1ed1, \u0111\u1eb7c bi\u1ec7t khi:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"C\xf3 nhi\u1ec1u tham s\u1ed1 c\u1ea7n t\u1ed1i \u01b0u"}),"\n",(0,t.jsx)(r.li,{children:"Th\u1eddi gian v\xe0 t\xe0i nguy\xean t\xednh to\xe1n h\u1ea1n ch\u1ebf"}),"\n",(0,t.jsx)(r.li,{children:"Mu\u1ed1n linh ho\u1ea1t trong vi\u1ec7c \u0111\u1ecbnh ngh\u0129a kh\xf4ng gian t\xecm ki\u1ebfm"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Tuy nhi\xean, kh\xf4ng c\xf3 ph\u01b0\u01a1ng ph\xe1p n\xe0o l\xe0 ho\xe0n h\u1ea3o. Vi\u1ec7c l\u1ef1a ch\u1ecdn gi\u1eefa GridSearch v\xe0 Randomized Search ph\u1ee5 thu\u1ed9c v\xe0o b\xe0i to\xe1n c\u1ee5 th\u1ec3, t\xe0i nguy\xean c\xf3 s\u1eb5n v\xe0 y\xeau c\u1ea7u v\u1ec1 \u0111\u1ed9 ch\xednh x\xe1c."})]})}function m(n={}){const{wrapper:r}={...(0,a.R)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},3420:(n,r,e)=>{e.d(r,{A:()=>t});const t=e.p+"assets/images/randomized-search-and-grid-search-776e179f819ca2e541e1615bebc00d4c.png"},5906:(n,r,e)=>{e.d(r,{A:()=>t});const t=e.p+"assets/images/hybrid-197be17df08c7cac14f6621a358babce.png"},8453:(n,r,e)=>{e.d(r,{R:()=>i,x:()=>h});var t=e(6540);const a={},s=t.createContext(a);function i(n){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function h(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),t.createElement(s.Provider,{value:r},n.children)}},8731:(n,r,e)=>{e.d(r,{A:()=>t});const t=e.p+"assets/images/cover-b42392d1fa445deb6af7f389721bde84.jpg"}}]);