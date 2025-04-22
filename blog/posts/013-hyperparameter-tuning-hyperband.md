---
title: Tối ưu siêu tham số mô hình với Hyperband
slug: 2025/04/hyperparameter-tuning-hyperband
description: Trong bài viết này, chúng ta sẽ tìm hiểu về Hyperband - một phương pháp hiệu quả để tối ưu siêu tham số dựa trên nguyên lý Early Stopping.
authors: lhduc
tags: [Data Science]
keywords: [data science, hyperparameter tuning, python, ml, siêu tham số, machine learning, máy học, tối ưu, Hyperband, Early Stopping]
hide_table_of_contents: false
draft: true
---

# Tối ưu siêu tham số mô hình với Hyperband


## Giới thiệu

Trong bài viết trước, chúng ta đã tìm hiểu về RandomizedSearchCV - một phương pháp tối ưu siêu tham số hiệu quả bằng cách lấy mẫu ngẫu nhiên từ không gian tham số. Tuy nhiên, phương pháp này vẫn có một hạn chế: nó phải chạy toàn bộ quá trình huấn luyện cho mỗi bộ tham số được chọn, ngay cả khi chúng ta có thể dự đoán sớm rằng một số bộ tham số sẽ không cho kết quả tốt.

Trong bài viết này, chúng ta sẽ tìm hiểu về Hyperband - một phương pháp tối ưu siêu tham số thông minh hơn, kết hợp giữa Randomized Search và Early Stopping để loại bỏ các bộ tham số không triển vọng sớm hơn, từ đó tiết kiệm thời gian và tài nguyên tính toán.

## Hyperband là gì?

Hyperband là một thuật toán tối ưu siêu tham số được phát triển bởi Li và cộng sự vào năm 2017. Nó kết hợp hai ý tưởng chính:

1. **Randomized Search**: Lấy mẫu ngẫu nhiên các bộ tham số từ không gian tìm kiếm
2. **Early Stopping**: Dừng sớm việc huấn luyện các bộ tham số không triển vọng

<!-- ![](hyperband-concept.png) -->

**Tại sao nên sử dụng Hyperband?**

So với RandomizedSearchCV, Hyperband mang lại nhiều lợi ích:

- **Tiết kiệm thời gian**: Bằng cách dừng sớm các thử nghiệm không triển vọng, Hyperband có thể tiết kiệm đáng kể thời gian tính toán
- **Hiệu quả hơn**: Với cùng một ngân sách thời gian, Hyperband có thể thử nhiều bộ tham số hơn
- **Thích ứng**: Tự động điều chỉnh số lượng tài nguyên dành cho mỗi bộ tham số dựa trên hiệu suất ban đầu

## Cách hoạt động của Hyperband

Hyperband hoạt động thông qua một quy trình lặp lại gồm hai giai đoạn chính:

### 1. Successive Halving (SH)

Successive Halving là cốt lõi của Hyperband. Nó hoạt động như sau:

1. Bắt đầu với n bộ tham số ngẫu nhiên
2. Huấn luyện mỗi bộ tham số trong một khoảng thời gian ngắn
3. Chọn một nửa số bộ tham số có hiệu suất tốt nhất
4. Tiếp tục huấn luyện các bộ tham số được chọn với thời gian dài hơn
5. Lặp lại quá trình cho đến khi chỉ còn một bộ tham số

<!-- ![](successive-halving.png) -->

### 2. Hyperband

Hyperband mở rộng Successive Halving bằng cách:

1. Thử nhiều cấu hình khác nhau của SH (với các giá trị n khác nhau)
2. Tự động điều chỉnh ngân sách thời gian cho mỗi cấu hình
3. Chọn cấu hình tốt nhất dựa trên kết quả

## Triển khai Hyperband

Chúng ta sẽ triển khai Hyperband từ đầu để hiểu rõ cách hoạt động của nó. Sau đó, chúng ta sẽ sử dụng thư viện `scikit-optimize` để có một triển khai hoàn chỉnh hơn.

### Triển khai từ đầu

```python
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score
import pandas as pd

# Tải dữ liệu
from ucimlrepo import fetch_ucirepo
phishing_websites = fetch_ucirepo(id=327)
X = phishing_websites.data.features
y = phishing_websites.data.targets

# Chia tập train và test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
```

Định nghĩa class Hyperband:

```python
class Hyperband:
    def __init__(self, estimator, param_distributions, max_iter=81, eta=3, random_state=None):
        self.estimator = estimator
        self.param_distributions = param_distributions
        self.max_iter = max_iter  # Số lần lặp tối đa
        self.eta = eta  # Hệ số giảm
        self.random_state = random_state
        
        if self.random_state is not None:
            np.random.seed(self.random_state)
            
    def get_hyperband_configs(self):
        """Tính toán các cấu hình cho Hyperband
        
        Hàm này tính toán các cấu hình (n,r) cho mỗi bracket của Hyperband, trong đó:
        - n: số lượng cấu hình ban đầu cần thử nghiệm
        - r: số lượng tài nguyên được phân bổ cho mỗi cấu hình
        
        Công thức tính:
        - s_max = ⌊log_η(max_iter)⌋
        - B = (s_max + 1) * max_iter
        - Với mỗi s từ s_max đến 0:
            + n = ⌈(B/max_iter) * η^s/(s+1)⌉
            + r = max_iter * η^(-s)
        
        Returns:
            list: Danh sách các tuple (n,r) cho mỗi bracket của Hyperband.
                  Mỗi tuple chứa:
                  - n: số lượng cấu hình cần thử
                  - r: số lượng tài nguyên cho mỗi cấu hình
        
        Example:
            >>> hb = Hyperband(...)
            >>> configs = hb.get_hyperband_configs()
            >>> print(configs)
            [(81, 1), (27, 3), (9, 9), (6, 27), (5, 81)]  # Ví dụ với max_iter=81, eta=3
        """
        s_max = int(np.log(self.max_iter) / np.log(self.eta))
        B = (s_max + 1) * self.max_iter
        
        configs = []
        for s in range(s_max, -1, -1):
            n = int(np.ceil(B / self.max_iter * (self.eta ** s) / (s + 1)))
            r = self.max_iter * (self.eta ** (-s))
            configs.append((n, r))
            
        return configs
    
    def sample_params(self):
            """
        Lấy mẫu tham số từ các phân phối hoặc danh sách giá trị.
        Hỗ trợ:
            - scipy.stats distributions (randint, uniform,...)
            - list giá trị rời rạc
        """
        sampled_params = {}
        for param, dist in self.param_distributions.items():
            if isinstance(dist, (rv_continuous, rv_discrete)):
                sampled_params[param] = dist.rvs()
            elif isinstance(dist, list):
                sampled_params[param] = np.random.choice(dist)
            else:
                raise ValueError(f"Không hỗ trợ loại phân phối: {param}: {type(dist)}")
        return sampled_params
    
    def successive_halving(self, n, r):
        """
        Thực hiện Successive Halving với:
        
        Args:
            n: số lượng cấu hình ban đầu (số lượng bộ siêu tham số được lấy mẫu ngẫu nhiên)
            r: số lượng tài nguyên tối đa cho mỗi cấu hình (có thể là số epochs hoặc kích thước dữ liệu)
        
        Returns:
            tuple: (final_params, final_score) - bộ tham số tốt nhất và điểm số tương ứng
        """
        # Lấy mẫu n bộ tham số
        params_list = [self.sample_params() for _ in range(n)]
        
        # Bắt đầu với r_min = r/eta^(log_eta(r)) tài nguyên
        r_k = r / self.eta ** int(np.log(r) / np.log(self.eta))
        n_k = n
        
        remaining_params = params_list
        
        while n_k > 1:  # Tiếp tục cho đến khi chỉ còn 1 cấu hình
            # Tính kích thước subset của dữ liệu dựa trên r_k
            n_samples = int(min(r_k, len(X_train)))
            indices = np.random.choice(len(X_train), n_samples, replace=False)
            X_subset = X_train.iloc[indices]
            y_subset = y_train.iloc[indices]
            
            # Huấn luyện và đánh giá từng cấu hình
            scores = []
            for params in remaining_params:
                # Đặt n_estimators dựa trên r_k nếu là tham số của mô hình
                if 'n_estimators' in params:
                    params['n_estimators'] = max(10, int(r_k))
                    
                self.estimator.set_params(**params)
                self.estimator.fit(X_subset, y_subset)
                
                # Đánh giá trên validation set
                val_indices = np.random.choice(len(X_train), min(1000, len(X_train)), replace=False)
                X_val = X_train.iloc[val_indices]
                y_val = y_train.iloc[val_indices]
                score = self.estimator.score(X_val, y_val)
                scores.append((params, score))
            
            # Sắp xếp và chọn top n_k/eta cấu hình
            scores.sort(key=lambda x: x[1], reverse=True)
            n_k = max(1, int(n_k / self.eta))
            remaining_params = [p for p, _ in scores[:n_k]]
            
            # Tăng tài nguyên cho vòng tiếp theo
            r_k *= self.eta
        
        # Huấn luyện lại cấu hình cuối cùng với toàn bộ dữ liệu và tài nguyên
        final_params = remaining_params[0]
        if 'n_estimators' in final_params:
            final_params['n_estimators'] = int(r)
        
        self.estimator.set_params(**final_params)
        self.estimator.fit(X_train, y_train)
        final_score = self.estimator.score(X_train, y_train)
        
        return final_params, final_score
    
    def fit(self, X, y):
        """Thực hiện tối ưu hóa siêu tham số với Hyperband"""
        configs = self.get_hyperband_configs()
        best_score = -np.inf
        best_params = None
        
        for n, r in configs:
            params, score = self.successive_halving(n, r)
            if score > best_score:
                best_score = score
                best_params = params
                
        self.best_params_ = best_params
        self.best_score_ = best_score
        return self
```

### Sử dụng Hyperband với LightGBM

```python
from scipy.stats import randint, uniform

# Định nghĩa không gian tham số rộng hơn cho LightGBM
param_space = {
    'num_leaves': randint(20, 100),  # Số lá trong cây
    'max_depth': randint(3, 12),     # Độ sâu tối đa
    'learning_rate': uniform(0.01, 0.3),  # Tốc độ học
    'n_estimators': randint(50, 300), # Số cây
    'min_child_samples': randint(10, 50),  # Số mẫu tối thiểu trong mỗi lá
    'subsample': uniform(0.6, 0.4),   # Tỷ lệ mẫu sử dụng cho mỗi cây
    'colsample_bytree': uniform(0.6, 0.4),  # Tỷ lệ features sử dụng cho mỗi cây
    'reg_alpha': uniform(0, 1),       # L1 regularization
    'reg_lambda': uniform(0, 1),      # L2 regularization
    'min_child_weight': uniform(0, 1)  # Trọng số tối thiểu cho mỗi lá
}

# Khởi tạo và chạy Hyperband
hb = Hyperband(
    estimator=lgb.LGBMClassifier(random_state=42),
    param_space=param_space,
    max_iter=81,
    eta=3,
    random_state=42
)

hb.fit(X_train, y_train)

print("Best parameters:", hb.best_params_)
print("Best score:", hb.best_score_)
```


## So sánh với các phương pháp khác

Hãy so sánh hiệu suất của Hyperband với RandomizedSearchCV và GridSearchCV:

```python
from sklearn.model_selection import RandomizedSearchCV, GridSearchCV
import time

# RandomizedSearchCV
start_time = time.time()
random_search = RandomizedSearchCV(
    lgb.LGBMClassifier(random_state=42),
    param_distributions=param_space,
    n_iter=50,
    cv=5,
    n_jobs=-1,
    random_state=42,
    scoring='f1'
)
random_search.fit(X_train, y_train)
random_time = time.time() - start_time

# GridSearchCV với một tập con của tham số
param_grid = {
    'num_leaves': [30, 50, 70],
    'max_depth': [5, 7, 9],
    'learning_rate': [0.01, 0.1, 0.3],
    'n_estimators': [100, 200, 300],
    'subsample': [0.6, 0.8, 1.0],
    'colsample_bytree': [0.6, 0.8, 1.0]
}
start_time = time.time()
grid_search = GridSearchCV(
    lgb.LGBMClassifier(random_state=42),
    param_grid,
    cv=5,
    n_jobs=-1,
    scoring='f1'
)
grid_search.fit(X_train, y_train)
grid_time = time.time() - start_time

# Hyperband
start_time = time.time()
hb = Hyperband(
    estimator=lgb.LGBMClassifier(random_state=42),
    param_space=param_space,
    max_iter=81,
    eta=3,
    random_state=42
)
hb.fit(X_train, y_train)
hyperband_time = time.time() - start_time

# So sánh kết quả
results = pd.DataFrame({
    'Method': ['RandomizedSearchCV', 'GridSearchCV', 'Hyperband'],
    'Best F1 Score': [random_search.best_score_, grid_search.best_score_, hb.best_score_],
    'Time (s)': [random_time, grid_time, hyperband_time]
})
print(results)

# Đánh giá trên tập test với mô hình tốt nhất
best_model = lgb.LGBMClassifier(**hb.best_params_, random_state=42)
best_model.fit(X_train, y_train)
y_pred = best_model.predict(X_test)
print("\nTest F1 Score:", f1_score(y_test, y_pred))
print("Test Accuracy:", accuracy_score(y_test, y_pred))
```

## Kết luận

Hyperband là một phương pháp tối ưu siêu tham số hiệu quả, đặc biệt phù hợp khi:

- Có nhiều tham số cần tối ưu
- Thời gian và tài nguyên tính toán hạn chế
- Cần tự động điều chỉnh ngân sách thời gian cho mỗi bộ tham số

Tuy nhiên, cũng như các phương pháp khác, Hyperband không phải là giải pháp hoàn hảo cho mọi trường hợp. Việc lựa chọn phương pháp tối ưu siêu tham số phụ thuộc vào:

- Kích thước và độ phức tạp của dữ liệu
- Số lượng và loại siêu tham số cần tối ưu
- Tài nguyên tính toán có sẵn
- Yêu cầu về độ chính xác và thời gian

Trong thực tế, việc kết hợp nhiều phương pháp (như đã thấy trong bài viết trước về việc kết hợp RandomizedSearch và GridSearch) thường mang lại kết quả tốt nhất.