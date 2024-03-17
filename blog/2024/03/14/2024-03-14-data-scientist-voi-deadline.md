---
title: Data Scientist sẽ làm gì khi bị áp deadline
description: Dự án Data Science cũng tương tự các dự án khác, luôn có giới hạn thời gian hoàn thành (deadline). Vậy chúng ta sẽ làm gì để tránh việc hoảng loạn khi bí ép deadline như thế, làm sao để tối ưu thời gian nhất có thể. Bài viết dưới đây của mình sẽ đưa ra một số kinh nghiệm khi bị áp deadline.
slug: Data-Scientist-se-lam-gi-khi-bi-ap-deadline
authors: lhduc
tags: [datasciene, deadline, howto]
image: https://i.pinimg.com/736x/5a/bd/f6/5abdf650a165307df13e1ed94e51687b.jpg
hide_table_of_contents: false
---
![](https://i.pinimg.com/564x/3b/29/50/3b2950afe79ddc47c21125285f3ff1f6.jpg)

*Dự án Data Science cũng tương tự các dự án khác, luôn có giới hạn thời gian hoàn thành (deadline), và thông thường một dự án thường có thời gian khoảng 6 tháng. Tuy nhiên đôi khi chúng ta bị ép deadline xuống còn 3 tháng (1 Quý) chẳng hạn. Vậy chúng ta sẽ làm gì để tránh việc hoảng loạn khi bí ép deadline như thế, làm sao để tối ưu thời gian nhất có thể. Bài viết dưới đây của mình sẽ đưa ra một số kinh nghiệm khi bị áp deadline.*

<!-- truncate -->
<div class="dot">. . .</div>


##  Lên kế hoạch trước 

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


## Tập trung vào những gì cần thiết

Khi bạn bị dí deadline, bạn không có đủ thời gian để đi khám phá từng ngóc ngách của dữ liệu, do đó cần có chiến lược khám phá dữ liệu phù hợp. Thay vì khám phá tất cả các biến dữ liệu, chúng ta nên đưa ra một số câu hỏi quan trọng, sau đó liệt kê các loại dữ liệu có thể phục vụ cho việc phân tích và trả lời cho câu hỏi đó.

Khác với các dự án với dữ liệu sẵn có trên mạng, việc dữ liệu bị khuyết thiếu hầu hết được xử lý bằng các phương pháp tính trung bình, tính trung vị
hoặc được thay thế bằng các giá trị cố định như 0 hoặc -999. Dữ liệu bị khuyết thiếu trong các dự án thực tế có thể được điền bằng cách thu thập dữ liệu bên ngoài, ví dụ như dữ liệu về vị trí địa lý của một cửa hàng có thể được thu thập bằng Google API hay dữ liệu về dân số có thể được thu thập thông qua các trang thống kê. Hoặc có thể nằm một trong bảng nào đấy trên Data Warehouse của công ty mà chúng ta chưa lấy được (ví dụ bị ràng buộc bởi quyền hạn truy cập chẳng hạn).
Việc tìm kiếm các bảng này có thể tốn nhiều thời gian, do đó nếu cột dữ liệu bị khuyết thiếu không quá cần thiết trong việc huấn luyện mô hình, chúng ta có thể bỏ qua dữ liệu này. 

Lưu ý rằng bạn vẫn có thể điền bằng phương pháp trung bình(trung vị) như cách làm với dự liệu trên mạng nhưng chỉ nên áp dụng cho phần huấn luyện mô hình dự đoán, còn trong quá trình phân tích dữ liệu, chúng ta ưu tiên độ chính xác của báo cáo do đó không nên thay thế các dữ liệu đó bằng một giá trị không chính xác. Lúc này, trong lúc trình bày, bạn cần đưa ra số lượng các điểm dữ liệu bị thiếu, chiếm bao nhiêu phần trăm và đưa ra lưu ý cho người nghe rằng dữ liệu chỉ thống kê trên các quan sát không bị thiếu dữ liệu.

![](target.jpg)



Đối với việc xây dựng mô hình dự báo, thay vì sử dụng các mô hình phức tạp như DeepLearning, bạn nên dùng các mô hình đơn giản như **LinearRegression** hoặc các mô hình dạng cây như **LightGBM, XGBoost** hoặc **CatBoost** . Thời gian huấn luyện của các mô hình này tương đối ngắn và cũng không mất quá nhiều thời gian để viết code, do đó các mô hình này thích hợp để huấn luyện khi bạn bị áp deadline. 

Ngoài ra, chúng ta không nhất thiết phải thiết lập tối ưu *hyperparameters(siêu tham số)* bằng các thuật toán phức tạp vì các thuật toán này cần chạy lại mô hình rất nhiều lần do đó chúng sẽ làm lãng phí thời gian của bạn khá nhiều trong khi độ chính xác không tăng thêm bao nhiêu. Nếu vẫn muốn thực hiện tối ưu siêu tham số, bạn có thể xem xét các phương pháp đơn giản như **GridSearchCV** thay vì dùng các thư viện như **hyperopt** hoặc **optuna**

Một lỗi sai mà chúng ta hay mắc phải là cố gắng tối ưu hiệu suất của mô hình và "sa lầy" vào công việc này. Hãy đặt ra một giới hạn thời gian cho việc tối 
ưu hiệu suất của mô hình. Ví dụ khi chạy thử nghiệm các mô hình trong vòng một tuần mà hiệu suất không tăng thêm 5% thì chúng ta nên dừng lại và tập trung
vào các công việc khác như viết bảng trình bày hoặc xây dựng service cho mô hình của mình.

Đối với một số dự án Data science, bạn cần phải cung cấp một API Service cho người dùng thay vì chỉ là một kết quả dưới dạng file hoặc lưu xuống Database, bạn nên ưu tiên xây dựng serivce ngay khi đã chạy được một mô hình đơn giản. Sau khi service đã được thiết lập đầy đủ, lúc đó bạn có thể quay lại quá trình thử nghiệm các mô hình.

## Viết mã tự động và có thể tái sử dụng được

Một lỗi khiến bạn mất nhiều thời gian khi làm dự án Data Science là việc viết mã không tái sử dụng được. Mình đã gặp rất nhiều bạn background non-IT viết những dòng code mà không đóng gói lại thành các function.

Hầu hết các bạn sử dụng Jupyter Notebook và viết các dòng xử lý dữ liệu theo cách line-by-line. Việc viết code như thế này sẽ làm mất khá nhiều thời gian khi bạn xử lý tương tự cho các chiều dữ liệu. Thông thường các bạn hay copy nguyên đoạn code lặp lại và thay tên chiều dữ liệu để xử lý, việc làm này cũng nảy sinh vấn đề khi bạn muốn cập nhật phương pháp xử lý mới, bạn phải sửa tất cả những đoạn code "copy" ấy và việc bạn bỏ sót việc cập nhật có thể sẽ còn làm tốn thời gian nhiều hơn bạn viết **function**

Dữ liệu thực tế đôi khi gặp phải sai sót do quá trình người dùng nhập sai, và dữ liệu này bạn thường sử dụng cho nhiều dự án khác nhau. Bạn không thể phàn nàn với đội dữ liệu rằng dữ liệu trong bảng bị sai và bắt họ cập nhật lại dữ liệu cho bạn để sau này bạn dùng không sai nữa, điều này khá tốn thời gian và công sức (Dĩ nhiên theo quy tắc là phải cập nhật dữ liệu bị sai vào bảng rồi). Do đó bạn cần viết các function xử lý lỗi sai này để tái sử dụng. Ví dụ như người dùng nhập tuổi của khách hàng là 130 hay 1 tuổi, bạn có thể viết thành một function xử lý cho cột dữ liệu tuổi và có thể đóng gói nó thành package để tái sử dụng trong các dự án khác cần tới cột tuổi.


Khi xây dựng mô hình, bạn nên dùng các thư viện như Sklearn, LightGBM ... để huấn luyện mô hình một cách nhanh chóng thay vì viết lại các thuật toán từ đầu. Ngoài ra, các bạn có thể sử dụng các thư viện như **pycaret**, **autogluon** để thực hiện huấn luyện tự động. Các thư viện này hỗ trợ chạy nhiều thuật toán khác nhau một cách tự động, qua đó giúp bạn giảm thiểu thời gian viết code từng thuật toán và so sánh kết quả với nhau để chọn thuật toán nào tối ưu.

![](https://www.kdnuggets.com/wp-content/uploads/pycaret-automl-0.jpg)


Đối với việc trình bày báo cáo, bạn cần chuẩn bị template sẵn các bước trình bày của một dự án Data Science, việc này giúp giảm thiểu thời gian chuẩn bị báo cáo của bạn. Một điều mình rút ra trong quá trình báo cáo dự án Khoa học dữ liệu và cũng là sự khác biệt đối với hai loại hình công ty Production và Outsourcing đó là các công ty Production chuộng các biểu đồ đơn giản và tập trung vào kết quả của dữ liệu, bạn có thể trình bày một slide không cần quá đẹp, miễn số liệu là chính xác và hợp lý. Ngược lại đối với công ty Outsourcing thì người nghe của bạn là Khách hàng bên ngoài và cần trình bày nội dung một cách bắt mắt. Bạn hãy chuẩn bị sẵn nhưng template phù hợp với loại hình công ty bạn làm.

Khi xây dựng service, việc viết mã có thể tái sử dụng được là một yêu cầu gần như là bắt buộc. Như phần trên mình đã đề cập, chúng ta xây dựng service ngay khi có mô hình cơ bản, do đó khi xây dựng các mô hình phức tạp hơn bạn cần phải xây dựng các phương thức, các module sao cho khi service gọi các mô hình phức tạp đó không nảy sinh ra lỗi. Bạn có thể thấy trong thư viện sklearn hay những thư viện khác khi dự đoán mô hình đều gọi phương thức **predict**, điều này giúp chúng ta dễ quản lý hơn khi xây dựng các thuật toán khác nhau. Vì vậy một lời khuyên mình dành cho các bạn là hãy dành thời gian ít nhất một tháng để học Lập trình hướng đối tượng để có thể hiểu rõ hơn.

## Chúng ta không làm việc một mình

Có một sự thật đáng buồn là dự án hầu hết của mình đều là làm việc một mình, nhưng khi gặp dự án bị áp deadline gấp gáp thì tốt nhất vẫn là yêu cầu quản lý dự án của bạn thêm người hỗ trợ. Bạn có thể nhờ các bạn Data Engineer hỗ trợ thu thập dữ liệu bên ngoài hoặc xử lý các tác vụ lấy dữ liệu trên Data Warehouse.
Data Analyst có thể giúp bạn biết được các logic tính toán các thông tin của dữ liệu một cách chính xác và đẩy đủ, đôi khi bạn chẳng biết hết được dữ liệu của bạn có gì bằng Data Analyst đâu. Machine Learning Engineer sẽ giúp bạn triển khai các serving dễ dàng hơn, tất nhiên là bạn phải cung cấp định nghĩa đầu vào và đầu ra cho họ. 

![](meo_hop.jpg)
Luôn nhớ chia sẻ ý tưởng và suy nghĩ của bạn khi làm việc nhóm, việc chia sẻ giúp người khác nhìn xem bạn có đang sai lầm trong quá trình phân tích dữ liệu hay không. Càng nhiều ý tưởng được chia sẻ bởi mọi người, bạn càng có nhiều cơ hội tối ưu mô hình của mình hơn và nhanh chóng hơn. Mình đã từng làm việc một mình và đôi khi "bí" ý tưởng về việc tìm ra các feature mới để tối ưu hiệu suất mô hình, và một bạn DA đã góp ý mình thêm các feature liên quan vì bạn ấy đã từng làm báo cáo thống kê về lĩnh vực này ở công ty cũ.

Họp hành cũng là một điều rất quan trọng khi bạn bị dí deadline, chúng ta nên dành ra mỗi tuần khoảng 1~2 buổi để trao đổi công việc với nhau, tránh trường hợp đi quá xa scope đã định ra (tập trung quá nhiều vào việc thu thập dữ liệu thay vì xây luồng dự đoán chẳng hạn). Nên trình bày các yếu tố làm cản trở công việc của bạn cho quản lý để cùng tìm cách giải quyết vấn đề (bạn đang tập trung vào làm deadline nhưng có một yêu cầu làm báo cáo thống kê cho một đơn vị khác)

Ngoài ra, bạn có thể chia sẻ những câu hỏi bạn thắc mắc lên các cộng đồng Data Science để có thể nhận được những ý kiến đóng góp về giải pháp cho bạn. Việc đặt câu hỏi như thế nào cũng là một yếu tố quan trọng giúp bạn có được câu trả lời mong muốn. Hãy đặt những câu hỏi rõ ràng và chi tiết nhất có thể để mọi người hiểu được bạn đang gặp phải vấn đề gì, tốt nhất là kèm cả dữ liệu mẫu hoặc hình ảnh minh họa một cách cụ thể để người khác có thể hình dung được.


## Tổng kết

Deadline là một phần của dự án. Hãy bình tĩnh và cùng nhảy với nó như một nghệ sĩ!