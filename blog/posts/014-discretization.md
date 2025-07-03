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

Equal-width binning là phương pháp phân nhóm dữ liệu liên tục bằng cách chia toàn bộ khoảng giá trị (từ giá trị nhỏ nhất đến lớn nhất) thành các đoạn có độ rộng bằng nhau. Mỗi đoạn đó được gọi là một “bin”.

Giả sử bạn có một cột dữ liệu  tuổi với:
- Giá trị nhỏ nhất: min = 10
- Giá trị lớn nhất: max = 90

Bạn muốn chia thành 4 bin, thì khi đó độ rộng mỗi bin sẽ là $\frac{(max - min)}{số\ bin} = \frac{90 - 10}{4} = 20$. Do đó mỗi bin sẽ là
- Bin 1 : $10 \le x \le 30$
- Bin 2: $30 < x \le 50$
- Bin 3: $50 < x \le 70$
- Bin 4: $70 < x \le 90$

Ví dụ dùng pandas

```python
import pandas as pd

data = pd.DataFrame({'age': [10, 25,  30, 31, 33, 45, 51, 49, 61, 70, 83, 90]})
data['age_group'] = pd.cut(data['age'], bins=4, labels=["<=30", "<=50", "<=70", "<=90"])
print(data)
```

<pythonoutput>
```bash
    age age_group
0    10      <=30
1    25      <=30
2    30      <=30
3    31      <=50
4    33      <=50
5    45      <=50
6    51      <=70
7    49      <=50
8    61      <=70
9    70      <=70
10   83      <=90
11   90      <=90
```
</pythonoutput>


Phương pháp này phù hợp nhất với dữ liệu phân bố gần như đồng đều và giá trị nhỏ nhất và lớn nhất có ý nghĩa rõ ràng trong bối cảnh bài toán.

- ✔️ Phù hợp với: tuổi, thu nhập, điểm thi, nhiệt độ

- ⚠️ Không hiệu quả khi: dữ liệu phân bố lệch, có nhiều giá trị tập trung hoặc có outlier

**Ưu điểm**
- Dễ hiểu và dễ dùng, 
- Không cần các thông số liên quan đến thống kê như mean, std, quantile. 

**Nhược điểm**
- Nhạy với outliers, do đó trước khi đưa vào rời rạc hóa, chúng ta nên để riêng các outlier và tìm các điểm min, max mới. Sau đó mới áp dụng phương pháp này. 
- Nếu dữ liệu không phân bố đều có thể dẫn đén các bin bị lệch ( một bin chứa quá nhiều, một bin chứa quá ít)


### Equal-frequency binning (chia theo tứ phân vị)

Equal-frequency binning (hay còn gọi là quantile binning) là phương pháp chia dữ liệu liên tục thành các nhóm (bin) sao cho mỗi nhóm có số lượng điểm dữ liệu gần bằng nhau. Thay vì chia theo khoảng giá trị đều nhau như Equal-width, phương pháp này chia theo phân vị (quantile), ví dụ: tứ phân vị (quartile), bách phân vị (percentile).

**Ví dụ:** nếu bạn có 1000 điểm dữ liệu và muốn chia thành 4 bin, mỗi bin sẽ chứa khoảng 250 điểm


Ví dụ dùng pandas

```python
data = pd.DataFrame({'income': [2, 3, 5, 6, 9, 10, 12, 15, 20, 25]})
data['bin'] = pd.qcut(data['income'], q=4)
print(data)
```

<pythonoutput>
```
   income            bin
0       2  (1.999, 5.25]
1       3  (1.999, 5.25]
2       5  (1.999, 5.25]
3       6    (5.25, 9.5]
4       9    (5.25, 9.5]
5      10   (9.5, 14.25]
6      12   (9.5, 14.25]
7      15  (14.25, 25.0]
8      20  (14.25, 25.0]
9      25  (14.25, 25.0]
```
</pythonoutput>

Phương pháp này phù hợp với dữ liệu phân bố lệch (skewed) và cần đảm bảo mỗi bin có đủ dữ liệu để mô hình học hiệu quả
- ✔️ Phù hợp với: thu nhập, điểm tín dụng, chỉ số tài chính, giá cổ phiếu
- ⚠️ Không phù hợp khi: dữ liệu có quá nhiều giá trị trùng nhau hoặc biến rời rạc (ít giá trị duy nhất)

**Ưu điểm:**

- Mỗi bin có số lượng điểm gần như bằng nhau → mô hình học đều trên các nhóm

- Giảm rủi ro mất cân bằng do outlier


**Nhược điểm:**

- Khoảng giá trị của các bin có thể rất không đều, gây khó hiểu

- Nếu dữ liệu có nhiều giá trị trùng nhau, có thể sinh lỗi hoặc bin không đúng kích thước

### Standard Deviation-based Binning (Dựa trên độ lệch chuẩn)
Phương pháp này chia dữ liệu liên tục thành các nhóm (bin) dựa trên khoảng cách của mỗi điểm so với giá trị trung bình (mean) và độ lệch chuẩn (standard deviation). Ý tưởng là phân loại dữ liệu theo mức độ “lệch” so với trung bình.

Ví dụ, nếu dữ liệu có phân phối chuẩn, ta có thể chia như sau

- Nhóm 1: $x < \mu - \sigma$
- Nhóm 2: $\mu - \sigma \le x < \sigma$
- Nhóm 3: $\mu \le x < \mu + \sigma$
- Nhóm 4: $\mu + \sigma < x$

Chúng ta có thể điều chỉnh ngưỡng bằng cách thay đổi hệ số $(0.5\sigma, 1.5\sigma,...)$

```python
scores = np.array([50, 55, 60, 65, 70, 75, 80, 85, 90, 95])
mean = np.mean(scores)
std = np.std(scores)

# Hàm gán bin dựa trên độ lệch chuẩn
def sd_binning(x, mean, std):
    if x < mean - std:
        return "Rất thấp"
    elif x < mean:
        return "Thấp"
    elif x < mean + std:
        return "Cao"
    else:
        return "Rất cao"
# dùng function
binned = [sd_binning(x, mean, std) for x in scores]
df = pd.DataFrame({'score': scores, 'sd_binning': binned})
# dùng pd.cut
bin_edges = [
    float('-inf'),  
    mean - std,
    mean,
    mean + std,
    float('inf') 
]
df['pdcut'] = pd.cut(df['score'], bins=bin_edges, labels=["Rất thấp", "Thấp", "Cao", "Rất cao"])
print(df)
```
<pythonoutput>
```
   score sd_binning     pdcut
0     50   Rất thấp  Rất thấp
1     55   Rất thấp  Rất thấp
2     60       Thấp      Thấp
3     65       Thấp      Thấp
4     70       Thấp      Thấp
5     75        Cao       Cao
6     80        Cao       Cao
7     85        Cao       Cao
8     90    Rất cao   Rất cao
9     95    Rất cao   Rất cao
```
</pythonoutput>

Phương pháp này phù hợp với các biến số học liên tục có phân phối gần chuẩn, đặc biệt khi Trung bình và độ lệch chuẩn có ý nghĩa thống kê và chúng ta muốn đánh giá mức độ lệch chuẩn của từng điểm dữ liệu.

- ✔️ Phù hợp với: điểm thi, chiều cao, nhịp tim, điểm tín dụng
- ⚠️ Không hiệu quả khi: dữ liệu phân phối lệch mạnh, có nhiều outlier

**Ưu điểm:**

- Phản ánh mức độ “khác biệt” so với trung tâm phân phối

- Dễ hiểu trong bối cảnh thống kê mô tả

- Có thể tùy chỉnh số bin bằng các mốc độ lệch chuẩn

**Nhược điểm:**

- Phụ thuộc vào giả định dữ liệu phân phối chuẩn

- Nếu dữ liệu có phân phối lệch hoặc chứa outlier, các bin có thể mất cân đối


### Kmeans-based binning

Thay vì chia theo độ rộng (equal-width) hay số lượng điểm (equal-frequency), phương pháp này dùng thuật toán phân cụm KMeans để chia giá trị liên tục thành các bin. Ý tưởng là tìm các nhóm giá trị gần nhau nhất dựa trên khoảng cách (Euclidean distance), và gán mỗi nhóm là một bin.

Nói cách khác, KMeans sẽ tự động xác định các trung tâm nhóm (centroid) sao cho tổng bình phương khoảng cách trong nhóm là nhỏ nhất.


```python
from sklearn.cluster import KMeans
import numpy as np

# Dữ liệu mẫu
data = pd.DataFrame({'income': [10, 12, 15, 18, 22, 24, 27, 35, 38, 45]})
X = data[['income']]

# Áp dụng KMeans để chia thành 3 bin
kmeans = KMeans(n_clusters=3, random_state=42)
data['bin'] = kmeans.fit_predict(X)

# Sắp xếp bin theo thứ tự tăng dần
data['bin'] = data.groupby('bin')['income'].transform('mean').rank(method='dense').astype(int) - 1

print(data)
```

<pythonoutput>
```
   income  bin
0      10    0
1      12    0
2      15    0
3      18    1
4      22    1
5      24    1
6      27    1
7      35    2
8      38    2
9      45    2
```
</pythonoutput>
Phù hợp với các dữ liệu có cấu trúc không đều, không phân phối chuẩn và chia thành các nhóm, lúc này kmean mới thể hiện tốt. Tuy nhiên cần xác định các nhóm theo đặc trưng dữ liệu, thay vì chia đều cứng nhắc.
✔️ Phù hợp với: thu nhập, giá sản phẩm, chi tiêu khách hàng, điểm kiểm tra
⚠️ Không phù hợp khi: số lượng điểm dữ liệu quá ít


**Ưu điểm:**
- Linh hoạt: chia bin dựa theo chính phân bố của dữ liệu
- Có thể phát hiện các nhóm tự nhiên (natural groupings) trong dữ liệu
- Có thể tùy chỉnh số lượng bin qua tham số n_clusters

**Nhược điểm:**
- Không đảm bảo số lượng điểm đều trong mỗi bin
- Nhạy cảm với outlier và khởi tạo tâm cụm (k)
- Kết quả có thể không ổn định nếu không set random_state

Lưu ý khi dùng
- Kết quả các bin không theo độ rộng đều hoặc tần suất đều, mà phản ánh phân cụm tự nhiên
- Có thể dùng cho feature engineering, đặc biệt trong phân tích hành vi hoặc phân khúc khách hàng

### Decision Tree Binning

Decision Tree Binning là phương pháp phân bin dựa trên cây quyết định (Decision Tree), trong đó các điểm cắt (split points) được xác định sao cho giảm tối đa độ không thuần khiết (impurity) của biến mục tiêu (target variable). Nói cách khác, đây là một phương pháp supervised discretization – phân nhóm có hướng dẫn bởi nhãn (label).

Thay vì chia đều hay chia theo thống kê đơn giản, Decision Tree sẽ học từ dữ liệu và tìm ra ngưỡng cắt tối ưu để phân biệt tốt nhất giữa các lớp của biến mục tiêu.


https://www.kaggle.com/code/amankr77/decision-tree-based-binning


Phù hợp với Dữ liệu có nhãn (classification or regression target) và Muốn chia bin sao cho giá trị trong cùng bin có hành vi mục tiêu giống nhau

- ✔️ Phù hợp với: điểm tín dụng để phân nhóm rủi ro, số lượt truy cập để dự đoán churn, thu nhập để dự đoán khả năng mua hàng
- ⚠️ Không áp dụng được nếu không có biến mục tiêu


**Ưu điểm:**

- Gán bin một cách thông minh theo nhãn mục tiêu

- Giúp mô hình học nhanh hơn và có khả năng giải thích tốt hơn

- Tự động chọn số lượng và vị trí điểm cắt

**Nhược điểm:**
- Dễ bị overfitting nếu không giới hạn độ sâu hoặc min_samples_leaf
- Không dùng được nếu không có biến mục tiêu (không supervised)
- Bin có thể không đều về số lượng hoặc độ rộng → khó trực quan hóa


📌 Ghi chú:
- Decision Tree Binning thường dùng trong credit scoring, marketing, và churn prediction.
- Có thể thay thế DecisionTreeClassifier bằng DecisionTreeRegressor nếu biến mục tiêu là số liên tục.

### ChiMerge

ChiMerge là phương pháp discretization có giám sát, sử dụng kiểm định Chi-squared để đánh giá mức độ liên quan giữa biến liên tục và biến mục tiêu rời rạc (classification). Ban đầu, mỗi giá trị duy nhất được coi là một bin riêng biệt. Sau đó, các bin được gộp lại tuần tự nếu kiểm định Chi-square cho thấy chúng không khác biệt đáng kể về mặt thống kê.


```bash
pip install optbinning
```

```python
import pandas as pd
from optbinning import BinningProcess, OptimalBinning

# Dữ liệu mẫu
df = pd.DataFrame({
    "age": [23, 25, 28, 31, 35, 37, 40, 45, 50, 55, 60, 65, 70],
    "churn": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
})

# Binning theo biến mục tiêu churn
binning = OptimalBinning(name="age", dtype="numerical", target_dtype="binary")
binning.fit(df["age"], df["churn"])
df["age_bin"] = binning.transform(df["age"], metric="bins")
print(df)
```
Kiểu dữ liệu phổ biến (Common Data Type):
✔️ Biến liên tục (numerical continuous)
✔️ Biến mục tiêu phải là rời rạc (binary hoặc multiclass)

**Ưu điểm:**
- Gộp bin dựa trên sự khác biệt có ý nghĩa thống kê → phù hợp cho mô hình phân loại
- Có thể kiểm soát mức độ "chi tiết" thông qua ngưỡng p-value

**Nhược điểm:**
- Có thể gộp quá mức nếu không cẩn thận với ngưỡng kiểm định
- Tính toán phức tạp hơn các phương pháp đơn giản

### Entropy Binning
### MDLP
MDLP là một phương pháp chọn điểm chia bin dựa trên nguyên lý mô hình hóa tốt nhất với chiều dài mô tả ngắn nhất. Nghĩa là, điểm chia được chọn nếu nó giúp biểu diễn dữ liệu đơn giản hơn, mà vẫn giữ lại đầy đủ thông tin về biến mục tiêu.

Phương pháp này là bản mở rộng và kiểm soát độ phức tạp của Entropy Binning.

## Khi nào nên dùng Rời rạc hóa, Khi nào không nên

### Nên dùng rời rạc hóa khi:
- **Mục tiêu là diễn giải (interpretability)**: Việc chia các biến liên tục thành nhóm giúp mô hình dễ giải thích hơn, nhất là với mô hình dạng rule-based như Decision Tree, hoặc khi trình bày cho người không chuyên.

Ví dụ: dễ nói “Khách hàng từ 30–40 tuổi có rủi ro cao” hơn là giải thích ý nghĩa của hệ số hồi quy với giá trị 37.2.

- **Biến liên tục có phân phối lệch hoặc nhiễu (outlier)**: Discretization giúp giảm ảnh hưởng của outlier vì các điểm cực trị sẽ bị gom chung vào một nhóm.

- **Sử dụng mô hình cần biến rời rạc**: Một số thuật toán như Naive Bayes, Association Rules, hoặc các mô hình logic đơn giản hoạt động tốt hơn khi dữ liệu được rời rạc hóa.

- **Khi có domain knowledge để xác định bin hợp lý**: Ví dụ: chia mức huyết áp thành "thấp", "bình thường", "cao" theo hướng dẫn y khoa.

- **Trong Feature Engineering cho mô hình mạnh hơn**: Một số mô hình phi tuyến như LightGBM, CatBoost đôi khi hoạt động tốt hơn khi có thêm feature được rời rạc hóa (đặc biệt là các phân cụm thông minh như KMeans, Decision Tree binning).

### Không nên rời rạc hóa khi:
- **Dữ liệu phân bố đều, không có outlier rõ rệt** :Nếu chia bin không cẩn thận, bạn có thể mất thông tin chính xác của dữ liệu gốc.
- **Dùng mô hình mạnh, không cần rời rạc hóa**: Các mô hình như XGBoost, Random Forest, Deep Learning đều xử lý tốt dữ liệu liên tục. Việc rời rạc hóa trong trường hợp này có thể không mang lại lợi ích mà còn làm giảm hiệu năng.
- **Khi rời rạc hóa gây mất tính thứ tự, độ phân giải**: Với một biến như “tuổi” hoặc “thu nhập”, nếu chia bin quá ít hoặc sai cách, bạn mất đi độ chi tiết mà mô hình có thể tận dụng.
- **Khi không có nhãn (unsupervised) mà muốn phân bin "tốt"**: Các phương pháp supervised discretization như Decision Tree, MDLP cần biến mục tiêu. Không có nhãn → khó tối ưu việc chia.
- **Không đủ dữ liệu để chia bin hợp lý**: Nếu dữ liệu quá ít, việc chia thành nhiều bin sẽ khiến mỗi bin có rất ít điểm, không đủ ý nghĩa thống kê.

## Kết luận 

Discretization – hay rời rạc hóa dữ liệu – là một kỹ thuật tiền xử lý đơn giản nhưng cực kỳ mạnh mẽ. Dù thường bị bỏ qua, nó có thể tạo ra sự khác biệt lớn trong việc:
- Giải thích mô hình dễ hơn
- Giảm nhiễu và ảnh hưởng của outlier
- Hỗ trợ tốt cho các thuật toán nhạy cảm với dạng dữ liệu


## THam khảo
- https://medium.com/data-science/discretization-explained-a-visual-guide-with-code-examples-for-beginners-f056af9102fa
- https://medium.com/%40adnan.mazraeh1993/comprehensive-guide-to-binning-discretization-in-data-science-from-basics-to-super-advanced-d66d7f199ecd
- https://www.deepchecks.com/glossary/data-binning/
