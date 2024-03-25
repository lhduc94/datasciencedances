---
title: Data Envelopment Analysis
slug: data-envelopment-analysis-phan-tich-hieu-suat
authors: lhduc
tags: [Data Science, Math]
keywords: [ata visualization, histogram, seaborn, plot]
image: /img/blog/20240115_1_cover.jpg
hide_table_of_contents: false
draft: true
---
![](cover.jpg)
<!-- **Đánh giá Hiệu suất là gì​?** -->

Khi chúng ta có đầu vào, và nhận được kết quả, chúng ta hay đánh giá hiệu suất của kết quả xem với đầu vào như thế thì kết quả liệu có tốt không.​ Một số ví dụ cơ bản: Giá thành/sản phẩm, Lợi nhuận/sản phẩm.​
<!-- truncate -->

$$
\frac{Output}{Input}
$$

Công thức trên được gọi là thước đo hiệu quả.​
Chúng ta có thể mở rộng công thức trên với Nhiều đầu vào (Inputs) và nhiều đầu ra (Outputs)​

![](efficient_frontier.png)
Độ dốc của đường nối với mỗi điểm và gốc tọa độ tương ứng với Sales/ Employee ( hiệu quả).​

Đường có độ dốc cao nhất (nối với điểm B) được gọi là Efficient  Frontier (Đường biên hiệu quả).​

Các điểm sẽ nằm cùng 1 phía so với đường thẳng, hoặc ở trên, hoặc ở dưới.​

Vì đường biên này bao bọc các điểm dữ liệu, nên phân tích này được gọi là Data Envelopment Analysis.​



Chúng ta có thể  vẽ một đường thống kê hồi quy $y=0.622x$ để ước lượng mối quan hệ tuyến tính giữa input và output.​

Đường hồi quy này đi qua chính giữa của tập dữ liệu, do đó chúng ta có thể xem các điểm ở phía trên đường là hiệu quả tốt và điểm dưới là chưa tốt, khoảng cách giữa điểm tới đường hồi quy chính ta mức độ hiệu quả/không hiệu quả​

Khoảng cách từ các điểm đến đường Efficient Frontier nêu lên độ lệch so với điểm tốt nhất​

![](efficiente_frontier_regression_line.png)








