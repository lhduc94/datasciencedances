---
sidebar_label: Excel
sidebar_position: 3
---
# Excel

## Giới thiệu
Excel là một phần mềm quản lý dữ liệu phổ biến, được sử dụng để lưu trữ và xử lý dữ liệu trong các bảng. 
Excel có thể lưu dữ liệu dưới dạng file `.xlsx` hoặc `.xls`.


## Đọc file Excel
Để đọc file Excel ta dùng cú pháp sau

```python
x = pd.ExcelFile(filename)
```

Với `filename` là đường dẫn đến file

Để xem tên các sheets của `x` ta có thể dùng `x.sheet_names`. Sau đó để đọc từng sheet của `x` ta có thể dùng `.parse()`
```python
df = x.parse(sheet_name, header=0, names=None, index_col=None, usecols=None, skiprows=None, skipfooter=0, nrows=None)
```
Trong đó `sheet_name` là tên sheet cần đọc, các thông số còn lại tương tự như phần đọc file `csv` và `tsv`. Một cách khác để đọc file excel là dùng hàm [pandas.read_excel](https://pandas.pydata.org/docs/reference/api/pandas.read_excel.html) với tham số `io` là tên file.

## Xuất file Excel
Giả sử ta có các `DataFrame` df1, df2, df3 cần được lưu vào 1 file Excel duy nhất

```python
import pandas as pd

df1 = pd.DataFrame({'col_1': [1, 2, 3, 4]})
df2 = pd.DataFrame({'col_1': ['a', 'b', 'c', 'd']})
df3 = pd.DataFrame({'col_1': [True, True, False, False]})
```
Để ghi các bảng vào file Excel, bước đầu tiên là khởi tạo biến `writer` theo cú pháp

```python
writer = pd.ExcelWriter('pandas_multiple.xlsx', mode='w',  if_sheet_exists=None, engine=None)
```

Trong đó:

- `filename` là tên file excel

- `mode` là phương thức ghi file với `w` là viết file mới và `a` là viết thêm vào file. Mặc định là `w`

- `if_sheet_exists` là phương thức ghi file nếu file hoặc sheet đã tồn tại, bao gồm các phương thức dưới đây (mặc định là error)

    - `error`: hiện ValueError nếu đã tồn tại sheet

    - `new`: Tạo sheet mới với tên phụ thuộc vào `engine`

    - `replace`: Xóa nội dung của sheet trước khi viết.

    - `overlay`: Viết lên sheet đã tồn tại mà không xóa các sheet cũ

- `engine`: Một số kiểu hỗ trợ ghi file như `xlsxwriter`, `openpyxl`, `openpyxl`, `odswriter`

:::info Lưu ý
`mode='w'` không được sử dụng với engine `xlsxwriter`, khi khai báo engine này sẽ báo lỗi.

`if_sheet_exists` chỉ sử dụng với `mode='a'`

`overlay` chỉ hỗ trợ với phiên bản `1.4.0` trở lên.
:::

Để ghi từng sheet bạn dùng lệnh `.to_excel()`. Sau khi ghi tất cả các sheet bạn kết thúc với `writer.save()` để lưu file

```python
writer = pd.ExcelWriter('mul_sheets.xlsx', mode='w', engine='openpyxl')
df1.to_excel(writer, sheet_name='Sheet1')
df2.to_excel(writer, sheet_name='Sheet2')
df3.to_excel(writer, sheet_name='Sheet3')
writer.save()
```

:::tip Mẹo
Có thể dùng `with` để mở file để tránh trường hợp quên gọi lệnh `.save()`, lệnh `with` sẽ tự động lưu file sau khi kết thúc các lệnh con trong nó
:::

```python
import pandas as pd
df1 = pd.DataFrame({'col_1': [2, 3, 4, 5]})
df2 = pd.DataFrame({'col_1': ['a', 'b', 'c', 'd']})
df3 = pd.DataFrame({'col_1': [True, True, False, False]})
sheet_names = ['Sheet1','Sheet2', 'Sheet3']

with pd.ExcelWriter('mul_sheets.xlsx', mode='a', if_sheet_exists='new', engine='openpyxl') as writer:
    for df, sheet_name in zip([df1, df2, df3], sheet_names):
        df.to_excel(writer, sheet_name)
```
