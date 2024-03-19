---
title: Covariance và Correlation
slug: covariance-correlation
authors: lhduc
tags: [Math]
image: https://i.pinimg.com/736x/5a/bd/f6/5abdf650a165307df13e1ed94e51687b.jpg
hide_table_of_contents: false
---

![](https://i.pinimg.com/736x/5a/bd/f6/5abdf650a165307df13e1ed94e51687b.jpg)

Covariance (Hiệp phương sai) và Correlation (Hệ số tương quan) là hai khái niệm trong lĩnh vực xác suất thống kê. Cả hai khái niệm này đều nói về mối quan hệ giữa hai biến với nhau, hay nói cách khác hai chỉ số này dùng để thể hiện sự phụ thuộc giữa hai biến.
<!-- truncate -->


## Covariance là gì?
Covariance thể hiện mối quan hệ giữa hai biến với nhau, có thể là đồng biến (positive covariance) hoặc nghịch biến (negative covariance).

Định nghĩa : Cho 2 biến ngẫu nhiên X, Y với kì vọng $\mu_X$ và $\mu_Y$  covariance của X, Y được tính bằng công thức :

$$
Cov(X, Y)=E[(X−\mu_X)*(Y−\mu_Y)]
$$
Các tính chất của Covariance :

1. $Cov(aX + b, cY + d)=acCov(X, Y)$ với $a, b, c, d$ cho trước
2. $Cov(X1 + X2 ,Y)=Cov(X1, Y) + Cov(X2, Y)$
3. $Cov(X, X)=Var(X)$
4. $Cov(X, Y)=E(XY)−\mu_X * \mu_Y$
5. $Var(X, Y)=Var(X) + Var(Y) + 2 * Cov(X, Y)$
6. $X, Y$ độc lập thì $Cov(X, Y)=0$ .

Lưu ý :

Từ $(3)$ và $(4)$ ta có $Var(X) = E(X^2) − (\mu_X)^2$. Nếu X, Y độc lập từ 5 có thể suy ra được $Var(X, Y)=Var(X) + Var(Y)$.

Với Tính chất $(6)$, điều ngược lại không đúng, nghĩa là $Cov(X, Y)=0$ không có nghĩa là X, Y độc lập với nhau. 
Ví dụ $X = [-2 , -1 , 1 , 2]$ và $Y = X^2 = [4 , 1, 1 , 4]$ khi đó $Cov(X, Y)=0$ mặc dù X và Y có mối tương quan với nhau

## Correlation là gì?

Để thể hiện mối quan hệ giữa 2 biến là “mạnh” hay “yếu”, chúng ta sử dụng correlation thay cho covariance.

Định nghĩa : Correlation coefficient của hai biến X và Y được tính theo công thức

$$
Cor(X,Y) = ρ= Cov(X, Y) / (\sigma_X * \sigma_Y)
$$


**Các tính chất của Correlation**

1. Correlation là Covariance được chuẩn hóa của hai biến X, Y

2. Correlation thể hiện một tỉ lệ, do đó nó không có đơn vị đo

3. $−1 \le \rho \le 1$ ($\rho = −1$ khi và chỉ khi $Y = aX + b$ và  $a \lt 0$ và $\rho = 1$ khi và chỉ khi $Y = aX + b$ và $a \gt 0$) 

Chứng minh tính chất 3


$$
0 \le Var(\frac{X}{\sigma_X}−\frac{Y}{\sigma_{Y}}) = Var(\frac{X}{\sigma_X}) + Var(\frac{Y}{\sigma_Y}) − 2Cov(\frac{X}{\sigma_X},\frac{Y}{\sigma_Y}) = 2 − 2\rho \Rightarrow  \rho \le 1 
$$

Tương tự $0 \le Var(\frac{X}{\sigma_X}+\frac{Y}{\sigma_{Y}}) \Rightarrow  \rho \ge −1$

**Biểu diễn mối quan hệ X, và Y với giá trị $\rho$ (correlation)**
![](https://miro.medium.com/v2/resize:fit:640/format:webp/0*HDrVqgtu3QUN6ltX.png)

## So sánh giữa covariance và correlation


1. Cả covariance và correlation đều thể hiện mối quan hệ giữa hai biến.
2. Covariance có range từ $-\infty$ đến $+\infty$ . Correlation nằm trong khoảng từ - 1 đến 1.
3. Covariance thể hiện mối quan hệ giữa hai biến, correlation thể hiện được mối quan hệ giữa hai hoặc nhiều biến.

**Ví dụ**

Tập dữ liệu view của 2 kênh truyền hình tại 1 thời điểm (20h - 21h thứ năm mỗi tuần) trong 1 tháng là

$X = [50772, 73756, 74251, 77601]$

$Y = [102492, 100406, 97762, 98191]$

Ta tiến hành tính các thông số cơ bản

$\mu_X = \frac{50772 + 73756 + 74251 + 77601}{4} = 69095.00$

$\mu_Y = \frac{102492 + 100406 + 97762 + 98191}{4} = 99712.75$

$\sigma_X^2 = \frac{(50772 - \mu_X)^2 +(73756 - \mu_X)^2 + ... }{4} = 114098405.5 \Rightarrow  \sigma_X = 10681.69$

$\sigma_Y^2 = \frac{(102492 - \mu_Y)^2 +(100406 - \mu_Y)^2 + ... }{4} = 114098405.5 \Rightarrow  \sigma_Y = 1892.48$

Từ đó ta tính covariance và correlation

$Cov(X,Y) = \frac{(50772 - 69095.00) * (102492- 99712.75) + (73756- 69095.00) * (100406- 99712.75) + ... }{4} = -17673758.0$

$Corr(X,Y) = \frac{Cov(X,Y)}{\sigma_X * \sigma_Y} = \frac{-17673758.0} {10681.69 * 1892.48} = -0.87$




Follow Fanpage của mình để nhận được các bài viết mới nhất nhé!!  https://www.facebook.com/datasciencedances/