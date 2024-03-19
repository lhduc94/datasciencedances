---
title: 10 lỗi sai trong data visualization và cách phòng tránh
description: This is my first post on Docusaurus.
slug: 10-loi-sai-visualization
authors: lhduc
tags: [data visualization, histogram, seaborn, plot]
image: https://clauswilke.com/dataviz/pitfalls_of_color_use_files/figure-html/popgrowth-US-rainbow-1.png
hide_table_of_contents: false
draft: true
---

Thông thường, khi visualize mặc định histogram của seaborn sẽ không thể hiện tất cả các nhãn của bins và số lượng mỗi bin
Với cách làm như trên sẽ rất khó theo dõi các khoảng giá trị của từng bin và số lượng của bin đó. May mắn thay seaborn histogram tương tự numpy nên ta có thể dùng hàm np.histogram để giải quyết vấn đề này
<!-- truncate -->

## Dấu hiệu của một biểu đồ trực quan kém 

- Dữ liệu liên quan bị ẩn: Những thông tin cần thiết bị che khuất hoặc không được đánh dấu
- Biểu đồ quá tải: Bao gồm quá nhiều thông tin khiến biểu đồ khó đọc
- Sai lệch dữ liệu: Sử dụng tỉ lệ  hoặc định dạng dữ liệu sai
- Mô tả dữ liệu sai: Mô tả dữ liệu không đúng với hình vẽ
- Hình ảnh khó hiểu: Thiết kế hình ảnh gây khó hiểu làm cho người đọc không nắm được thông tin

## Độ tương phản màu gây hiểu lầm

**Đưa quá nhiều thông tin không liên quan**

Một sai lầm phổ biến là đưa quá nhiều màu vào visualize. Ví dụ vẽ biểu đồ scatter plot về dân số và tốc độ tăng trưởng dân số của Việt Nam, với 63 tỉnh thành ta có 63 màu cho mỗi tỉnh, điều này gây ra vấn đề khó khăn khi nhận biết màu nào là của tỉnh thành nào. Theo nguyên tắc chung, thang màu chất lượng hoạt động tốt nhất khi có ba đến năm loại màu khác nhau. Do đó, thay vì để 63 màu cho 63 tỉnh thành, chúng ta nên phân chia màu theo 7 khu vực kinh tế (hoặc 3 miền) và để xác định từng tỉnh thành, chúng ta thêm các nhãn tỉnh thành vào biểu đồ. Dĩ nhiên chúng ta không cần phải thêm tất cả các nhãn của tất cả tỉnh thành vào biểu đồ mà chỉ cần thêm một vài nhãn tiêu biểu ứng với từng khu vực. Ngoài ra, chúng ta cần nên kèm theo dữ liệu dạng bảng với các thông tin đầy đủ để người đọc có thể truy cập toàn bộ dữ liệu.


Đối với dạng barchart việc sử dụng quá nhiều màu sắc(màu cầu vồng) không thể hiện được mục đích của màu sắc trong biểu đồ này

![image](https://clauswilke.com/dataviz/pitfalls_of_color_use_files/figure-html/popgrowth-US-rainbow-1.png)


**Sử dụng thang màu không đơn điệu(non-monotonic) để mã hóa giá trị dữ liệu**

**Không thiết kế màu cho người giảm thị lực màu sắc**

https://clauswilke.com/dataviz/color-pitfalls.html


**Tác động của lỗi**

- Người dùng hiểu nhầm giá trị nào quan trọng hơn
- Mất thời gian để hiểu thông tin

**Cách giải quyết**

- Sử dụng dải màu ngắn để hiển thị giá trị cao hơn giá trị khác (ví dụ đỏ -> vàng)
- Cách đơn giản nhất là chuyển dài màu đó về mức xám xem màu bạn chọn có thể hiện sự khác biệt không
- Sử dụng tông màu nóng/lạnh để thể hiện giá trị đối nghịch (tiêu cực/tích cực)





Follow Fanpage của mình để nhận được các bài viết mới nhất nhé  https://www.facebook.com/datasciencedances/