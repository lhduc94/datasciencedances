---
title: "Rời rạc hóa dữ liệu liên tục"
slug: 2025/07/discretization-binning
description: "Discretization & Binning: Chia nhỏ để hiểu sâu – Công cụ mạnh mẽ nhưng thường bị bỏ quên trong tiền xử lý dữ liệu."
authors: lhduc
tags: [Data Science]
level: Cơ bản
keywords: [data science]
image: img/blog/013-hyperparameter-tuning-hyperband-cover.png
draft: true
---

# Discretization & Binning 

## Tại sao cần chuyển đổi biến liên tục thành rời rạc

Giả sử bạn đang phân tích dữ liệu khách hàng cho một công ty bảo hiểm. Bạn có một cột tên là age (tuổi). Tuổi là một biến liên tục – có thể là 21, 23.5, 48, 60…

**Câu hỏi đặt ra:**

Bạn sẽ đưa nguyên giá trị tuổi đó vào mô hình, hay bạn sẽ chia thành các nhóm như:
- Dưới 25 tuổi (trẻ)
- Từ 25–45 (trung niên)
- Trên 45 tuổi (cao tuổi)?

Nếu bạn chọn nhóm tuổi, tức là bạn đã thực hiện discretization – chuyển giá trị liên tục thành rời rạc.

## Discretization là gì.

Discretization (phân nhóm rời rạc) là quá trình chuyển đổi một biến liên tục (continuous variable) thành một biến rời rạc (categorical hoặc ordinal) bằng cách chia nó thành các đoạn (bins) hoặc nhóm.

Ví dụ:
- Chuyển tuổi = 23 thành nhóm "trẻ"
- Chuyển thu nhập = 8 triệu thành nhóm "thu nhập thấp"

## Tại sao nên dùng Discretization?

### Tăng khả năng giải thích mô hình
- Một mô hình dự đoán churn cho biết: “Khách hàng trên 45 tuổi có xác suất nghỉ cao gấp đôi nhóm dưới 25 tuổi”.

- Dễ hiểu hơn rất nhiều so với: “hệ số của tuổi là 0.037 trong hồi quy logistic”.

Việc chia nhóm giúp con người dễ hiểu và trực quan hóa kết quả mô hình.


### Giảm ảnh hưởng của outlier

Nếu bạn có một khách hàng 90 tuổi trong dữ liệu, mô hình có thể bị ảnh hưởng nếu tuổi được dùng ở dạng số liên tục.

Khi rời rạc hóa, tất cả những người trên 65 tuổi có thể được xếp chung nhóm "cao tuổi", giúp giảm nhiễu từ các điểm cực đoan.

### Hỗ trợ một số thuật toán 
Một số thuật toán hoạt động tốt hơn hoặc yêu cầu biến rời rạc:

Thuật toán |	Vai trò của biến rời rạc
|-----|----
Naive Bayes	|Giả định biến rời rạc/có xác suất rời rạc
Decision Tree|	Chia nhánh theo giá trị phân tách → dễ dùng nếu đã discretize
Rule-based model|	Các luật như: “nếu tuổi > 40 và thu nhập thấp…” dễ tạo hơn khi có nhóm

## Các phương pháp Rời rạc hóa phổ biến

Có hai nhóm chính là Unsupervised và Supervised

### Custom binning
### Equal-width binning (chặn bằng nhau)

### Equal-frequency binning (chia theo tứ phân vị)

### Standard Deviation-based Binning (Dựa trên độ lệch chuẩn)

### Kmeans-based binning

### Decision Tree Binning

### ChiMerge / Entropy Binning / MDLP

## Cách dùng với Scikit-learn

## Khi nào nên dùng Rời rạc hóa, Khi nào không nên