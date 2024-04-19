# Chương 2: Đọc và lưu file trong Pandas
Ở Chương 1 chúng ta đã biết cách khởi tạo DataFrame từ các dữ liệu cho trước. 
Trong chương này sẽ hướng dẫn cách đọc dữ liệu từ file bằng pandas, một số kiểu file thường thấy cho dữ liệu dạng bảng là `.csv` và `.xlsx`.
Bạn cũng có thể đọc dữ liệu bán cấu trúc như `JSON` bằng cách load file bằng Python sau đó dùng các cách khởi tạo như ở Chương 1 hoặc có thể dùng
hàm phụ trợ của Pandas. 

Ở phần thứ hai của chương, bạn sẽ được hướng dẫn một số cách cấu hình cho Pandas như thay đổi số dòng, số cột hiển thị...

## csv, tsv

### Đọc file csv, tsv
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

Đọc file dữ liệu sale được cho tại [đây](https://raw.githubusercontent.com/lhduc94/kungfupandas/master/data/sales_subset.csv). Giả sử ta chỉ lấy các cột `date`, `weekly_sales` và `is_holiday` và lấy cột `date` làm `index` và chỉ lấy 6 dòng đầu
```python
df = pd.read_csv('https://raw.githubusercontent.com/lhduc94/kungfupandas/master/data/sales_subset.csv', index_col=['date'], usecols=['date','weekly_sales','is_holiday'], nrows=6)
df
```

```{.python_output}
            weekly_sales  is_holiday
date                                
2010-02-05      24924.50       False
2010-03-05      21827.90       False
2010-04-02      57258.43       False
2010-05-07      17413.94       False
2010-06-04      17558.09       False
2010-07-02      16333.14       False
```

### Xuất file csv, tsv
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

## Excel
### Đọc file Excel
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

### Xuất file Excel
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

```{block2, type='rmdnote'}
**_Lưu ý_:** 
`mode='w'` không được sử dụng với engine `xlsxwriter`, khi khai báo engine này sẽ báo lỗi.

`if_sheet_exists` chỉ sử dụng với `mode='a'`

`overlay` chỉ hỗ trợ với phiên bản `1.4.0` trở lên.
```

Để ghi từng sheet bạn dùng lệnh `.to_excel()`. Sau khi ghi tất cả các sheet bạn kết thúc với `writer.save()` để lưu file

```python
writer = pd.ExcelWriter('mul_sheets.xlsx', mode='w', engine='openpyxl')
df1.to_excel(writer, sheet_name='Sheet1')
df2.to_excel(writer, sheet_name='Sheet2')
df3.to_excel(writer, sheet_name='Sheet3')
writer.save()
```

```{block2, type='rmdtip'}
**_Mẹo:_**
Có thể dùng `with` để mở file để tránh trường hợp quên gọi lệnh `.save()`, lệnh `with` sẽ tự động lưu file sau khi kết thúc các lệnh con trong nó
``` 

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

## JSON

### Đọc file JSON

`JSON` là 1 dạng dữ liệu khá phổ biến trong thực tế. `Pandas` hỗ trợ đọc file `JSON` theo phương thức sau

```python
pd.read_json(path_or_buf=None, orient=None,...)
```

Trong đó:

- `path_or_buf`: là đường dẫn đến file json hoặc Object cho trước

- `orient`:  Kiểu cấu trúc của json
    - `split`:  Dữ liệu có dạng dictionary theo cấu trúc `{index -> [index], columns - [columns], data -> [values]}`
    - `records`: Dữ liệu có dạng danh sách các dictionary theo cấu trúc ` [{column -> value}, ... , {column -> value}]`
    - `index`: Dữ liệu dạng dictionary theo cấu trúc `{"index" -> {"column" -> "value"}}`
    - `columns`: Dữ liệu dạng dictionary theo cấu trúc `{column -> {index -> value}}`
    - `values`: danh sách các giá trị
- Ngoài ra còn các tham số khác nữa như `chunksize`, `nrow`, các bạn có thể tham khảo tại [pd.read_json()](https://pandas.pydata.org/docs/reference/api/pandas.read_json.html)

Dưới đây là file `sample_pokemon.json` với các cấu trúc như sau

**Cấu trúc `records`**

```json
[{"name":"Bulbasaur","type":["Grass","Poison"],"height":"0.71 m","weight":"6.9 kg"},
 {"name":"Ivysaur","type":["Grass","Poison"],"height":"0.99 m","weight":"13.0 kg"},
 {"name":"Venusaur","type":["Grass","Poison"],"height":"2.01 m","weight":"100.0 kg"},
 {"name":"Charmander","type":["Fire"],"height":"0.61 m","weight":"8.5 kg"},
 {"name":"Charmeleon","type":["Fire"],"height":"1.09 m","weight":"19.0 kg"}]
 ```

 ta có thể gọi

 ```python
 df = pd.read_json('sample_pokemon.json', orient='records')
 df.head()
 ```

 ```{.python_output}
          name             type  height    weight
0   Bulbasaur  [Grass, Poison]  0.71 m    6.9 kg
1     Ivysaur  [Grass, Poison]  0.99 m   13.0 kg
2    Venusaur  [Grass, Poison]  2.01 m  100.0 kg
3  Charmander           [Fire]  0.61 m    8.5 kg
4  Charmeleon           [Fire]  1.09 m   19.0 kg
 ```

Tương tự với cấu trúc `split`

```json
{"index":   [0,1,2,3,4],
 "columns": ["name","type","height","weight"],
 "data":    [["Bulbasaur",["Grass","Poison"],"0.71 m","6.9 kg"],
             ["Ivysaur",["Grass","Poison"],"0.99 m","13.0 kg"],
             ["Venusaur",["Grass","Poison"],"2.01 m","100.0 kg"],
             ["Charmander",["Fire"],"0.61 m","8.5 kg"],
             ["Charmeleon",["Fire"],"1.09 m","19.0 kg"]]}
```

 ta có thể gọi

 ```python
 df = pd.read_json('sample_pokemon.json', orient='split')
 df.head()
 ```


**Cấu trúc `index`**

 ```json
 {"0":{"name":"Bulbasaur","type":["Grass","Poison"],"height":"0.71 m","weight":"6.9 kg"},
 "1":{"name":"Ivysaur","type":["Grass","Poison"],"height":"0.99 m","weight":"13.0 kg"},
 "2":{"name":"Venusaur","type":["Grass","Poison"],"height":"2.01 m","weight":"100.0 kg"},
 "3":{"name":"Charmander","type":["Fire"],"height":"0.61 m","weight":"8.5 kg"},
 "4":{"name":"Charmeleon","type":["Fire"],"height":"1.09 m","weight":"19.0 kg"}}
 ```

`columns`

```json
{"name":{"0":"Bulbasaur",
         "1":"Ivysaur",
         "2":"Venusaur",
         "3":"Charmander"
         "4":"Charmeleon"},
 "type":{"0":["Grass","Poison"],
         "1":["Grass","Poison"],
         "2":["Grass","Poison"],
         "3":["Fire"],
         "4":["Fire"]},
 "height":{"0":"0.71 m",
           "1":"0.99 m",
           "2":"2.01 m",
           "3":"0.61 m",
           "4":"1.09 m"},
 "weight":{"0":"6.9 kg",
           "1":"13.0 kg",
           "2":"100.0 kg",
           "3":"8.5 kg",
           "4":"19.0 kg"}}
```

`values`

```json
[["Bulbasaur",["Grass","Poison"],"0.71 m","6.9 kg"],
 ["Ivysaur",["Grass","Poison"],"0.99 m","13.0 kg"],
 ["Venusaur",["Grass","Poison"],"2.01 m","100.0 kg"],
 ["Charmander",["Fire"],"0.61 m","8.5 kg"],
 ["Charmeleon",["Fire"],"1.09 m","19.0 kg"]]
```
 

```{block2, type='rmdnote'}
**_Lưu ý_:** 

- `pd.read_json()` mặc định `orient='records'`. Các cấu trúc `records` và `index` là các cấu trúc JSON thường gặp.

- `values` không phải cấu trúc JSON.

- có thể truyền link file thay vì file được lưu ở máy.

```
### Xuất file JSON