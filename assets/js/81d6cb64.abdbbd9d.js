"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[5053],{711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>_});var i=t(4848),s=t(8453);const a={sidebar_label:"C\xe1c lo\u1ea1i Pooling"},d="C\xe1c lo\u1ea1i Pooling",o={id:"pytorch/Deberta/Pooling",title:"C\xe1c lo\u1ea1i Pooling",description:"",source:"@site/docs/pytorch/00-Deberta/Pooling.md",sourceDirName:"pytorch/00-Deberta",slug:"/pytorch/Deberta/Pooling",permalink:"/docs/pytorch/Deberta/Pooling",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"C\xe1c lo\u1ea1i Pooling"},sidebar:"tailieuSidebar",previous:{title:"Ph\xe2n lo\u1ea1i d\u1eef li\u1ec7u text v\u1edbi Deberta Sequence Classification",permalink:"/docs/pytorch/Deberta/DebertaForSequenceClassification"}},l={},_=[];function r(e){const n={code:"code",h1:"h1",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"c\xe1c-lo\u1ea1i-pooling",children:"C\xe1c lo\u1ea1i Pooling"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class MeanPooling(nn.Module):\n    def __init__(self):\n        super(MeanPooling, self).__init__()\n        \n    def forward(self, last_hidden_state, attention_mask):\n        input_mask_expanded = attention_mask.unsqueeze(-1).expand(last_hidden_state.size()).float()\n        sum_embeddings = torch.sum(last_hidden_state * input_mask_expanded, 1)\n        sum_mask = input_mask_expanded.sum(1)\n        sum_mask = torch.clamp(sum_mask, min = 1e-9)\n        mean_embeddings = sum_embeddings/sum_mask\n        return mean_embeddings\n\nclass MaxPooling(nn.Module):\n    def __init__(self):\n        super(MaxPooling, self).__init__()\n        \n    def forward(self, last_hidden_state, attention_mask):\n        input_mask_expanded = attention_mask.unsqueeze(-1).expand(last_hidden_state.size()).float()\n        embeddings = last_hidden_state.clone()\n        embeddings[input_mask_expanded == 0] = -1e4\n        max_embeddings, _ = torch.max(embeddings, dim = 1)\n        return max_embeddings\n    \nclass MinPooling(nn.Module):\n    def __init__(self):\n        super(MinPooling, self).__init__()\n        \n    def forward(self, last_hidden_state, attention_mask):\n        input_mask_expanded = attention_mask.unsqueeze(-1).expand(last_hidden_state.size()).float()\n        embeddings = last_hidden_state.clone()\n        embeddings[input_mask_expanded == 0] = 1e-4\n        min_embeddings, _ = torch.min(embeddings, dim = 1)\n        return min_embeddings\n\n#Attention pooling\nclass AttentionPooling(nn.Module):\n    def __init__(self, in_dim):\n        super().__init__()\n        self.attention = nn.Sequential(\n        nn.Linear(in_dim, in_dim),\n        nn.LayerNorm(in_dim),\n        nn.GELU(),\n        nn.Linear(in_dim, 1),\n        )\n\n    def forward(self, last_hidden_state, attention_mask):\n        w = self.attention(last_hidden_state).float()\n        w[attention_mask==0]=float('-inf')\n        w = torch.softmax(w,1)\n        attention_embeddings = torch.sum(w * last_hidden_state, dim=1)\n        return attention_embeddings\n\n#There may be a bug in my implementation because it does not work well.\nclass WeightedLayerPooling(nn.Module):\n    def __init__(self, num_hidden_layers, layer_start: int = 4, layer_weights = None):\n        super(WeightedLayerPooling, self).__init__()\n        self.layer_start = layer_start\n        self.num_hidden_layers = num_hidden_layers\n        self.layer_weights = layer_weights if layer_weights is not None \\\n            else nn.Parameter(\n                torch.tensor([1] * (num_hidden_layers+1 - layer_start), dtype=torch.float)\n            )\n\n    def forward(self, ft_all_layers):\n        all_layer_embedding = torch.stack(ft_all_layers)\n        all_layer_embedding = all_layer_embedding[self.layer_start:, :, :, :]\n\n        weight_factor = self.layer_weights.unsqueeze(-1).unsqueeze(-1).unsqueeze(-1).expand(all_layer_embedding.size())\n        weighted_average = (weight_factor*all_layer_embedding).sum(dim=0) / self.layer_weights.sum()\n\n        return weighted_average\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function d(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);