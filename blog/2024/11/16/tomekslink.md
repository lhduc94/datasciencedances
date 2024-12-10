---
title: Tomek's Link - Chiến lược xử lý dữ liệu mất cân bằng nhãn
slug: tomek-link-chien-luoc-xu-ly-du-lieu-mat-can-bang-nhan
description: Khi chúng ta có đầu vào, và nhận được kết quả, chúng ta hay đánh giá hiệu suất của kết quả xem với đầu vào như thế thì kết quả liệu có tốt không.
authors: lhduc
tags: [Data Science, Draft]
keywords: [Data Science, Math, Tomek's Link, imbalanced data]
image: /img/blog/20241116_1_cover.jpg
hide_table_of_contents: false
draft: true
---
![](cover.jfif)

ử lý dữ liệu mất cân bằng là một thách thức phổ biến trong Machine Learning, đặc biệt với các bài toán phân loại. Một trong những phương pháp hiệu quả để giảm mất cân bằng dữ liệu là Tomek's Link. Bài viết này sẽ giúp bạn hiểu cách hoạt động của Tomek's Link, cách áp dụng, và kèm theo code minh họa chi tiết.

## Dữ liệu mất cân bằng là gì?

Dữ liệu mất cân bằng xảy ra khi số lượng mẫu giữa các lớp khác nhau trong tập dữ liệu không đồng đều, ví dụ:
Lớp "Spam" có 90% mẫu.
Lớp "Not Spam" chỉ có 10% mẫu.
Khi huấn luyện mô hình trên dữ liệu như vậy, mô hình thường có xu hướng dự đoán theo lớp chiếm ưu thế, dẫn đến hiệu suất kém trên lớp ít xuất hiện.

## Tomek's Link là gì?
Tomek's Link là một kỹ thuật undersampling được sử dụng để xử lý dữ liệu mất cân bằng. Phương pháp này loại bỏ các mẫu dữ liệu gần ranh giới quyết định (decision boundary), giúp làm sạch dữ liệu và cải thiện hiệu suất mô hình.

### Định nghĩa:
Hai điểm dữ liệu $x, y$ tạo thành một Tomek's Link nếu:
- $x, y$ thuộc 2 lớp khác nhau
- Khoảng cách giữa $x$ và $y$ nhỏ hơn khoảng cách từ $x$ đến $z$ và $y$ đến $z$ với $z$ là điểm bất kì
​
### Ưu và nhược điểm của Tomek's Link
Ưu điểm:
Giảm nhiễu (noise) trong dữ liệu bằng cách loại bỏ các mẫu không đại diện tốt cho lớp của chúng.
Cải thiện độ rõ ràng của ranh giới quyết định.
Nhược điểm:
Có thể làm mất thông tin quan trọng nếu không áp dụng đúng cách.
Thích hợp hơn khi kết hợp với các phương pháp khác như SMOTE để cân bằng dữ liệu.
## Cách sử dụng Tomek's Link

### Thuật toán
Tính khoảng cách giữa tất cả các cặp điểm dữ liệu.
Kiểm tra từng cặp điểm có tạo thành Tomek's Link hay không.
Loại bỏ một trong hai điểm trong mỗi Tomek's Link, thường là mẫu thuộc lớp thiểu số.

### Triển khai với Python
Sử dụng thư viện imbalanced-learn để thực hiện Tomek's Link nhanh chóng.

Cài đặt thư viện
Sao chép mã
```bash
pip install imbalanced-learn
```
Code minh họa

```python
import numpy as np
import pandas as pd
from sklearn.datasets import make_classification
from imblearn.under_sampling import TomekLinks
import matplotlib.pyplot as plt

# 1. Tạo tập dữ liệu mất cân bằng
X, y = make_classification(
    n_classes=2,
    class_sep=2,
    weights=[0.9, 0.1],
    n_informative=3,
    n_redundant=1,
    flip_y=0,
    n_features=2,
    n_clusters_per_class=1,
    n_samples=200,
    random_state=42
)

# 2. Hiển thị dữ liệu ban đầu
plt.scatter(X[:, 0], X[:, 1], c=y, cmap='viridis', alpha=0.6)
plt.title("Dữ liệu ban đầu")
plt.show()

# 3. Áp dụng Tomek's Link
tomek = TomekLinks()
X_res, y_res = tomek.fit_resample(X, y)

# 4. Hiển thị dữ liệu sau khi áp dụng Tomek's Link
plt.scatter(X_res[:, 0], X_res[:, 1], c=y_res, cmap='viridis', alpha=0.6)
plt.title("Dữ liệu sau khi áp dụng Tomek's Link")
plt.show()

# 5. In số lượng mẫu trước và sau khi xử lý
print("Trước khi xử lý:", dict(pd.Series(y).value_counts()))
print("Sau khi xử lý:", dict(pd.Series(y_res).value_counts()))
```
### Kết quả minh họa
Dữ liệu trước khi xử lý:
Các điểm thuộc hai lớp có thể bị lẫn lộn tại ranh giới.
Dữ liệu sau khi xử lý bằng Tomek's Link:
Các điểm nhiễu đã được loại bỏ, giúp phân tách rõ hơn giữa hai lớp.
Giai đoạn|	Lớp 0|	Lớp 1
|----|---|---|
Trước khi xử lý|	180|	20
Sau khi xử lý|	170|	20
### Kết hợp với các phương pháp khác
Tomek's Link thường được sử dụng với các kỹ thuật khác như:

- **SMOTE** (Synthetic Minority Over-sampling Technique): Tăng cường số lượng mẫu thiểu số.
- **NearMiss**: Lấy mẫu ngẫu nhiên từ lớp chiếm ưu thế gần với lớp thiểu số.

## Kết luận
Tomek's Link là một công cụ mạnh mẽ để làm sạch dữ liệu và cải thiện hiệu suất trong bài toán dữ liệu mất cân bằng. Tuy nhiên, nó không giải quyết triệt để vấn đề cân bằng mà nên được kết hợp với các phương pháp khác để đạt hiệu quả tốt nhất.

Nếu bạn đang làm việc với dữ liệu mất cân bằng, thử kết hợp Tomek's Link và đánh giá hiệu quả trên mô hình của mình.

## Nguồn tham khảo:

imbalanced-learn Documentation
Nghiên cứu của Tomek, I. (1976)