---
title: Tối ưu siêu tham số mô hình với RandomizedSearchCV
slug: 2025/03/hyperparameter-tuning-RandomizedSearchCV
description: Trong bài viết này, chúng ta sẽ tìm hiểu về RandomizedSearchCV - một phương pháp hiệu quả hơn để tối ưu siêu tham số.
authors: lhduc
tags: [Data Science]
keywords: [data science, hyperparameter tuning, python, ml, siêu tham số, machine learning, máy học, tối ưu, RandomizedSearchCV]
image: /img/blog/20250304_1_cover.jpg
hide_table_of_contents: false
draft: true
---
![](cover.jpg)

## Giới thiệu
Trong bài viết trước, chúng ta đã tìm hiểu về GridSearchCV - một phương pháp tối ưu siêu tham số bằng cách thử tất cả các tổ hợp có thể. Tuy nhiên, GridSearch có nhược điểm là tốn nhiều thời gian khi không gian tìm kiếm lớn. Trong bài viết này, chúng ta sẽ tìm hiểu về RandomizedSearchCV - một phương pháp hiệu quả hơn để tối ưu siêu tham số.

## RandomSearch là gì?

RandomSearch là phương pháp tối ưu siêu tham số bằng cách chọn ngẫu nhiên các tổ hợp giá trị từ không gian tìm kiếm, thay vì thử tất cả các tổ hợp như GridSearch. 

### Ưu điểm của RandomSearch so với GridSearch:

**:one:** **Hiệu quả về thời gian**: Chỉ thử một số lượng tổ hợp được chỉ định trước, thay vì tất cả các tổ hợp có thể.

**:two:** **Linh hoạt với phân phối tham số**: Có thể định nghĩa phân phối xác suất cho các tham số (ví dụ: phân phối đều, phân phối chuẩn).

**:three:**. **Hiệu quả với không gian tham số lớn**: Đặc biệt tốt khi có nhiều tham số cần tối ưu.

<!-- ![](random_vs_grid.png) -->

Hình trên minh họa sự khác biệt giữa GridSearch (trái) và RandomizedSearch (phải). RandomizedSearch có thể tìm thấy giải pháp tốt với ít lần thử hơn.

### So sánh RandomSearchCV với GridSearchCV

| Tiêu chí | **GridSearchCV** | **RandomSearchCV** |
|----------|------------------|-------------------|
| **Cách hoạt động** | Thử tất cả tổ hợp tham số có thể | Chọn ngẫu nhiên n tổ hợp tham số |
| **Thời gian thực thi** | 🐢 Chậm với không gian lớn | ⚡ Nhanh hơn, có thể kiểm soát số lần thử |
| **Không gian tham số** | Rời rạc, cố định | Linh hoạt, có thể dùng phân phối xác suất |
| **Hiệu quả** | Tốt với ít tham số | Tốt với nhiều tham số |
| **Tài nguyên** | Tốn nhiều tài nguyên | Tiết kiệm tài nguyên hơn |
| **Khi nào nên dùng?** | ✅ Ít tham số, muốn thử tất cả tổ hợp | ✅ Nhiều tham số, thời gian/tài nguyên hạn chế |
## Triển khai RandomSearch

### Triển khai thủ công

Trước tiên, chúng ta sẽ thử triển khai RandomSearch một cách thủ công để hiểu rõ cách hoạt động của nó.

**Chuẩn bị dữ liệu**
```python
from sklearn.model_selection import train_test_split
from ucimlrepo import fetch_ucirepo 
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import numpy as np

# fetch dataset 
phishing_websites = fetch_ucirepo(id=327) 
  
# data (as pandas dataframes) 
X = phishing_websites.data.features 
y = phishing_websites.data.targets

# Chia tập train và test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# Chia tập train và valid
X_train, X_valid, y_train, y_valid = train_test_split(X_train, y_train, test_size=0.25, random_state=42, stratify=y_train)

print(f"Train size: {X_train.shape}, Valid size: {X_valid.shape}, Test size: {X_test.shape}")
```
<pythonoutput>
```
Train size: (6633, 30), Valid size: (2211, 30), Test size: (2211, 30)
```
</pythonoutput>

**Tạo các tổ hợp tham số ngẫu nhiên**
```python
import numpy as np

# Đặt seed cho ngẫu nhiên
np.random.seed(42)

# Định nghĩa không gian tham số, trong bài trước mình dùng list để liệt kê ra cụ thể, trong ví dụ lần này mình dùng np.arrange để sinh ra dãy tham số
param_space = {
    'n_estimators': np.arange(50, 201, 50),  # [50, 100, 150, 200]
    'max_depth': np.arange(3, 11, 2),        # [3, 5, 7, 9]
}

# Số lần thử ngẫu nhiên
n_iter = 10

# Tạo các tổ hợp tham số ngẫu nhiên
random_params = []
for _ in range(n_iter):
    params = {
        'n_estimators': np.random.choice(param_space['n_estimators']),
        'max_depth': np.random.choice(param_space['max_depth'])
    }
    random_params.append(params)

# In ra các tổ hợp được chọn
for params in random_params:
    print(f"n_estimators={params['n_estimators']},\t max_depth={params['max_depth']}")
```

<pythonoutput>
```
n_estimators=150,	 max_depth=9
n_estimators=50,	 max_depth=7
n_estimators=150,	 max_depth=9
n_estimators=50,	 max_depth=3
n_estimators=150,	 max_depth=5
n_estimators=150,	 max_depth=7
n_estimators=150,	 max_depth=7
n_estimators=200,	 max_depth=3
n_estimators=200,	 max_depth=9
n_estimators=200,	 max_depth=7
```
</pythonoutput>

**Huấn luyện mô hình với từng tổ hợp tham số**

```python
# Lưu kết quả
best_score = 0
best_params = None
best_model = None

# Thử từng bộ tham số ngẫu nhiên
for params in random_params:
    # Train model
    model = RandomForestClassifier(**params, random_state=42)
    model.fit(X_train, y_train)
    
    # Dự đoán và đánh giá
    y_pred = model.predict(X_valid)
    accuracy = accuracy_score(y_valid, y_pred)
    
    print(f"Parameters: {params}, Accuracy: {accuracy:.4f}")
    
    # Lưu lại bộ tham số tốt nhất
    if accuracy > best_score:
        best_score = accuracy
        best_params = params
        best_model = model

# In kết quả tốt nhất
print("\nBest Parameters:", best_params)
print("Best Model Accuracy on Valid Set:", best_score)
```

**Đánh giá mô hình trên tập test**
```python
# Dự đoán và đánh giá
y_pred = best_model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Tuned Model Accuracy on Test Set: {accuracy:.4f}")
```
<pythonoutput>
```
Best Parameters: {'n_estimators': np.int64(150), 'max_depth': np.int64(9)}
Best Model Accuracy on Valid Set: 0.9466304839439168
```
</pythonoutput>



### Triển khai RandomizedSearchCV

Chúng ta sẽ sử dụng bộ dữ liệu [Phishing Websites](https://archive.ics.uci.edu/dataset/327/phishing+websites) như trong ví dụ GridSearchCV.

**Chuẩn bị dữ liệu**

```python
from sklearn.model_selection import train_test_split, RandomizedSearchCV
from ucimlrepo import fetch_ucirepo 
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import numpy as np

# fetch dataset 
phishing_websites = fetch_ucirepo(id=327) 
  
# data (as pandas dataframes) 
X = phishing_websites.data.features 
y = phishing_websites.data.targets

# Chia tập train và test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

print(f"Train size: {X_train.shape}, Test size: {X_test.shape}")
```

**Định nghĩa không gian tham số**

Với RandomSearch, chúng ta có thể định nghĩa phân phối cho các tham số:

```python
from scipy.stats import randint, uniform

# Định nghĩa không gian tham số với phân phối
param_distributions = {
    'n_estimators': randint(50, 300),  # Số nguyên từ 50 đến 300
    'max_depth': randint(3, 15),       # Số nguyên từ 3 đến 15
    'min_samples_split': randint(2, 20),
    'min_samples_leaf': randint(1, 10),
    'max_features': uniform(0.1, 0.9)   # Số thực từ 0.1 đến 1.0
}
```

**Thực hiện RandomSearchCV**

```python
# Khởi tạo mô hình
rf = RandomForestClassifier(random_state=42)

# RandomSearchCV với 100 lần thử
random_search = RandomizedSearchCV(
    rf, 
    param_distributions=param_distributions,
    n_iter=100,  # Số lần thử ngẫu nhiên
    cv=5,        # K-fold cross validation
    scoring='accuracy',
    n_jobs=-1,   # Sử dụng tất cả CPU cores
    verbose=1,
    random_state=42
)

# Huấn luyện
random_search.fit(X_train, y_train)

# In kết quả tốt nhất
print("Best Parameters:", random_search.best_params_)
print("Best CV Accuracy:", random_search.best_score_)
```

***Đánh giá mô hình trên tập test***

```python
# Dự đoán và đánh giá
y_pred = random_search.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Tuned Model Accuracy on Test Set: {accuracy:.4f}")
```



## Kết hợp RandomSearch và GridSearch

Một chiến lược hiệu quả là kết hợp cả hai phương pháp:
1. Dùng RandomSearch để khám phá nhanh không gian tham số rộng
2. Sau đó dùng GridSearch để tìm kiếm chi tiết xung quanh các giá trị tốt nhất từ RandomSearch

### Ví dụ triển khai

```python
from sklearn.model_selection import RandomizedSearchCV, GridSearchCV

# Bước 1: RandomSearch với không gian tham số rộng
param_distributions = {
    'n_estimators': randint(50, 300),
    'max_depth': randint(3, 15),
    'min_samples_split': randint(2, 20),
    'min_samples_leaf': randint(1, 10),
    'max_features': uniform(0.1, 0.9)
}

# RandomSearch đầu tiên
random_search = RandomizedSearchCV(
    RandomForestClassifier(random_state=42),
    param_distributions=param_distributions,
    n_iter=100,
    cv=5,
    random_state=42,
    n_jobs=-1
)

random_search.fit(X_train, y_train)
print("Best parameters from RandomSearch:", random_search.best_params_)

# Bước 2: GridSearch xung quanh kết quả tốt nhất của RandomSearch
# Tạo không gian tham số hẹp hơn xung quanh giá trị tốt nhất
best_params = random_search.best_params_
fine_tune_params = {
    'n_estimators': [best_params['n_estimators'] - 20, 
                    best_params['n_estimators'],
                    best_params['n_estimators'] + 20],
    'max_depth': [best_params['max_depth'] - 1,
                 best_params['max_depth'],
                 best_params['max_depth'] + 1],
    'min_samples_split': [best_params['min_samples_split'] - 1,
                         best_params['min_samples_split'],
                         best_params['min_samples_split'] + 1],
    'min_samples_leaf': [best_params['min_samples_leaf'] - 1,
                        best_params['min_samples_leaf'],
                        best_params['min_samples_leaf'] + 1],
    'max_features': [max(0.1, best_params['max_features'] - 0.1),
                    best_params['max_features'],
                    min(0.9, best_params['max_features'] + 0.1)]
}

# GridSearch để tinh chỉnh
grid_search = GridSearchCV(
    RandomForestClassifier(random_state=42),
    fine_tune_params,
    cv=5,
    n_jobs=-1
)

grid_search.fit(X_train, y_train)
print("\nBest parameters after fine-tuning:", grid_search.best_params_)

# Đánh giá mô hình cuối cùng
final_accuracy = accuracy_score(y_test, grid_search.predict(X_test))
print(f"\nFinal Model Accuracy on Test Set: {final_accuracy:.4f}")
```

### Ưu điểm của phương pháp kết hợp

1. **Hiệu quả về thời gian**: 
   - RandomSearch giúp khám phá nhanh không gian tham số rộng
   - GridSearch chỉ tập trung vào vùng hẹp có triển vọng

2. **Độ chính xác cao**: 
   - Tận dụng được ưu điểm của cả hai phương pháp
   - GridSearch giúp tinh chỉnh chi tiết các tham số tốt nhất

3. **Cân bằng giữa khám phá và khai thác**:
   - RandomSearch đảm nhiệm vai trò khám phá (exploration)
   - GridSearch đảm nhiệm vai trò khai thác (exploitation)

### Khi nào nên dùng phương pháp kết hợp?

- Khi có nhiều tài nguyên tính toán
- Khi cần độ chính xác cao
- Khi không gian tham số rộng và phức tạp
- Khi có đủ thời gian để thực hiện cả hai phương pháp

### Lưu ý khi triển khai

1. Đảm bảo không gian tham số trong GridSearch không quá rộng
2. Chọn số lượng thử nghiệm (n_iter) phù hợp trong RandomSearch
3. Có thể điều chỉnh phạm vi tìm kiếm trong GridSearch tùy theo kết quả RandomSearch
4. Nên lưu lại kết quả của cả hai giai đoạn để so sánh

## Kết luận

RandomSearchCV là một phương pháp hiệu quả để tối ưu siêu tham số, đặc biệt khi:
- Có nhiều tham số cần tối ưu
- Thời gian và tài nguyên tính toán hạn chế
- Muốn linh hoạt trong việc định nghĩa không gian tìm kiếm

Tuy nhiên, không có phương pháp nào là hoàn hảo. Việc lựa chọn giữa GridSearch và RandomSearch phụ thuộc vào bài toán cụ thể, tài nguyên có sẵn và yêu cầu về độ chính xác.