---
sidebar_label: CSV và TSV
sidebar_position: 2
---
# CSV và TSV

## Giới thiệu
CSV và TSV là hai định dạng phổ biến dùng để lưu trữ dữ liệu trong các bảng. 
Cả hai đều là dạng văn bản thuần, với các giá trị trong mỗi dòng được phân tách bởi dấu phân cách. 
Dưới đây là sự khác biệt và cách làm việc với hai định dạng này

### CSV

Dữ liệu trong tệp CSV được phân tách bởi dấu phẩy `','`.

Ví dụ
```
id,name,age
1,John,25
2,Jane,30
3,Bob,22
```

- **Ưu điểm**: Được hỗ trợ rộng rãi trong các công cụ phân tích dữ liệu, như Excel, Python (Pandas), cơ sở dữ liệu.
- **Nhược điểm**: Nếu dữ liệu có dấu phẩy (,), phải dùng dấu ngoặc kép (") để bao quanh dữ liệu đó (ví dụ: `"John, Doe"`).

### TSV

Dữ liệu trong tệp TSV được phân tách bởi dấu tab `'\t'`.

Ví dụ
```
id	name	age
1	John	25
2	Jane	30
3	Bob     22
```
- **Ưu điểm**: Không có vấn đề với dấu phẩy trong dữ liệu, vì tab (`\t`) là một ký tự ít được sử dụng trong các giá trị.
- **Nhược điểm**: Ít phổ biến hơn CSV, do đó có thể không được hỗ trợ bởi các công cụ hoặc nền tảng mà CSV hỗ trợ.

## Đọc File
Chúng ta có thể đọc file csv với pandas theo lệnh sau

```python
df = pd.read_csv(filepath, sep=',', names=NoDefault.no_default, index_col=None, usecols=None, dtype=None, skiprows=None, skipfooter=0, nrows=None)
```

Trong đó:

- `filepath` là đường dẫn đến file trong máy hoặc đường link URL

- `sep` dùng để nhận diện cách chia thành cột, nếu không truyền tham số này thì `pandas` tự hiểu là chia theo `','`, ngoài ra có thể chia theo `';'` đối với macOS và `'\t'` với file có định dạng `.tsv`

- `names` là tên các cột của bảng. Nếu bảng đã có tên cột thì nên bỏ qua tham số này, `pandas` sẽ lấy dòng đầu tiên của file làm tên cột.

- `index_col` dùng để chỉ định vị trí các cột dùng để làm index cho bảng.

- `usecols` dùng để chỉ định vị trí hoặc tên các cột cần đọc.

- `dtype` dùng để định dạng kiểu dữ liệu của các cột.

- `skiprows` được dùng khi muốn bỏ qua một số dòng đầu của bảng.

- `skipfooter` tương tự như `skiprows` nhưng sẽ bỏ qua các dòng cuối cùng của bảng. 

- `nrows` dùng để chỉ định số lượng dòng của bạn mà bạn sẽ đọc bằng `pandas`

**Ví dụ** 

Đọc file dữ liệu sale được cho tại [đây](https://raw.githubusercontent.com/lhduc94/kungfupandas/master/data/sales_subset.csv). 
Các bạn có thể xem qua dữ liệu mẫu 
```
,store,type,department,date,weekly_sales,is_holiday,temperature_c,fuel_price_usd_per_l,unemployment
0,1,A,1,2010-02-05,24924.5,False,5.727777777777779,0.6794508388787476,8.106
1,1,A,1,2010-03-05,21827.9,False,8.055555555555555,0.693451964252221,8.106
2,1,A,1,2010-04-02,57258.43,False,16.81666666666667,0.718284148876872,7.808
3,1,A,1,2010-05-07,17413.94,False,22.52777777777778,0.7489281213923986,7.808
4,1,A,1,2010-06-04,17558.09,False,27.049999999999997,0.7145857384008601,7.808
5,1,A,1,2010-07-02,16333.14,False,27.17222222222222,0.7050755400339724,7.787000000000001
6,1,A,1,2010-08-06,17508.41,False,30.64444444444444,0.693980308605937,7.787000000000001
7,1,A,1,2010-09-03,16241.78,False,27.338888888888885,0.6807716997630375,7.787000000000001
8,1,A,1,2010-10-01,20094.19,False,22.16111111111111,0.6876401763613453,7.837999999999999
9,1,A,1,2010-11-05,34238.88,False,14.855555555555558,0.7103589835711321,7.837999999999999
10,1,A,1,2010-12-03,22517.56,False,9.594444444444447,0.7153782549314341,7.837999999999999
11,1,A,1,2011-01-07,15984.24,False,9.038888888888891,0.7861763983293752,7.742000000000001
```

Giả sử ta chỉ lấy các cột `date`, `weekly_sales` và `is_holiday` và lấy cột `date` làm `index` và chỉ lấy 6 dòng đầu
```python
df = pd.read_csv('https://raw.githubusercontent.com/lhduc94/kungfupandas/master/data/sales_subset.csv', index_col=['date'], usecols=['date','weekly_sales','is_holiday'], nrows=6)
df
```

<pythonoutput>
```
            weekly_sales  is_holiday
date                                
2010-02-05      24924.50       False
2010-03-05      21827.90       False
2010-04-02      57258.43       False
2010-05-07      17413.94       False
2010-06-04      17558.09       False
2010-07-02      16333.14       False
```
</pythonoutput>
## Xuất file
Để lưu `DataFrame` dưới dạng file ta có thể dùng câu lệnh `.to_csv()` theo cú pháp sau

```python
df.to_csv(filename, sep=',', columns=None, header=True, index=True)
```
Trong đó:

- `filename` là địa chỉ file mà bạn muốn lưu lại

- `sep` tương tự như lúc đọc file

- `columns` là tên các cột bạn muốn lưu xuống, nếu muốn lưu tất cả các cột thì 
bạn có thể bỏ qua tham số này.

- `header` mặc định là `True` nếu bạn muốn lưu tên cột

- `index` mặc định là `True` nếu bạn muốn lưu index của bảng.

Ví dụ

```python
df.to_csv('sales.csv', columns='weekly_sales', index=False)
```