---
title: Data Scientist sẽ làm gì khi bị áp deadline
description: Data Scientist sẽ làm gì khi bị áp deadline
slug: Data-Scientist-se-lam-gi-khi-bi-ap-deadline
authors: lhduc
tags: [datasciene, deadline, howto]
image: https://i.pinimg.com/564x/3b/29/50/3b2950afe79ddc47c21125285f3ff1f6.jpg
hide_table_of_contents: false
---
![](https://i.pinimg.com/564x/3b/29/50/3b2950afe79ddc47c21125285f3ff1f6.jpg)

<!-- truncate -->


## Lên kế hoạch trước

Việc đầu tiên để tránh việc hoảng loạn khi bị dí deadline là lên kế hoạch trước. Trước khi bạn bắt đầu một dự án Khoa học Dữ liệu, hay đảm bảo rằng bạn hiểu được scope của dự án, mục tiêu của dự án và kỳ vọng của khách hàng hoặc các bên liên quan đối với dự án của bạn như thế nào.

Sau đó, bạn cần chia dự án của bạn thành các bước nhỏ hơn có thể quản lý được, dưới đây là một số bước

- Thu thập dữ liệu
- Làm sạch dữ liệu
- Khai phá dữ liệu
- Phân tích dữ liệu
- Mô hình hóa dữ liệu
- Đánh giá mô hình
- Trình bày kết quả

Sau đó ước lượng thời gian đối với từng bước và phân bổ nguồn lực phù hợp, bạn có thể sử dụng các tool quản lý hoặc đơn giản là lên lịch cho nó trong google calendar để quản lý và thay đổi khi cần thiết

Có thể sử dụng [MoSCoW prioritisation method](https://en.wikipedia.org/wiki/MoSCoW_method) để lên ý tưởng

## Tập trung vào những gì cần thiết

Khi bạn bị dí deadline, bạn không có đủ thời gian để đi khám phá từng ngóc ngách của dữ liệu, do đó cần có chiến lược khám phá dữ liệu phù hợp. Thay vì khám phá tất cả các biến dữ liệu, chúng ta nên đưa ra một số câu hỏi quan trọng, sau đó liệt kê các loại dữ liệu có thể phục vụ cho việc phân tích và trả lời cho câu hỏi đó.

Đối với việc xây dựng mô hình dự báo, thay vì sử dụng các mô hình phức tạp như DeepLearning, chúng ta nên dùng các mô hình đơn giản như **LinearRegression** hoặc các mô hình dạng cây như **LightGBM, XGBoost hoặc CatBoost** . Thời gian huấn luyện của các mô hình này tương đối ngắn và cũng không mất quá nhiều thời gian để viết code, do đó các mô hình này thích hợp để huấn luyện khi bạn bị áp deadline. 

Ngoài ra, chúng ta không nhất thiết phải thiết lập tối ưu *hyperparameters(siêu tham số)* bằng các thuật toán phức tạp vì các thuật toán này cần chạy lại mô hình rất nhiều lần do đó chúng sẽ làm lãng phí thời gian của bạn khá nhiều trong khi độ chính xác không tăng thêm bao nhiêu. Nếu vẫn muốn thực hiện tối ưu siêu tham số, bạn có thể xem xét các phương pháp đơn giản như **GridSearchCV** thay vì dùng các thư viện như **hyperopt** hoặc **optuna**

## Viết mã tự động và có thể tái sử dụng được

Một lỗi khiến bạn mất nhiều thời gian khi làm dự án Data Science là việc viết mã không tái sử dụng được. Mình đã gặp rất nhiều bạn background non-IT viết những dòng code mà không đóng gói lại thành các function.

 Hầu hết các bạn sử dụng Jupyter Notebook và viết các dòng xử lý dữ liệu theo cách line-by-line. Việc viết code như thế này sẽ làm mất khá nhiều thời gian khi bạn xử lý tương tự cho các chiều dữ liệu. Thông thường các bạn hay copy nguyên đoạn code lặp lại và thay tên chiều dữ liệu để xử lý, việc làm này cũng nảy sinh vấn đề khi bạn muốn cập nhật phương pháp xử lý mới, bạn phải sửa tất cả những đoạn code "copy" ấy và việc bạn bỏ sót việc cập nhật có thể sẽ còn làm tốn thời gian nhiều hơn bạn viết **function**


Khi xây dựng mô hình, bạn nên dùng các thư viện như Sklearn, LightGBM ... để huấn luyện mô hình một cách nhanh chóng thay vì viết lại các thuật toán từ đầu. Ngoài ra, các bạn có thể sử dụng các thư viện như **pycaret**, **autogluon** để thực hiện huấn luyện tự động. Các thư viện này hỗ trợ chạy nhiều thuật toán khác nhau một cách tự động, qua đó giúp bạn giảm thiểu thời gian viết code từng thuật toán và so sánh kết quả với nhau để chọn thuật toán nào tối ưu.

![](https://www.kdnuggets.com/wp-content/uploads/pycaret-automl-0.jpg)