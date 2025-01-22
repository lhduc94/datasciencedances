---
sidebar_label: Data Type
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Để kiểm tra kiểu dữ liệu của `Series` hay `DataFrame` bạn có thể gọi thuộc tính `dtypes` hoặc phương thức `.info()`. 
Các kiểu dữ liệu thường gặp của Pandas được mô tả theo bảng dưới đây:

Các kiểu dữ liệu phổ biến   |    Numpy/Pandas      |Hiển thị        
--------------------|    ---------------- | --------------
Boolean       |          np.bool     |      *bool*
Integer        |         np.int, <br/>         np.uint         |      *int* <br/>                     *uint*
Float             |      np.float     |     *float*
Object             |     np.object     |    *O, object*
Datetime       |     np.datetime64, <br/> pd.Timestamp   |*datetime64*
Timedelta      |         np.timedelta64, <br/> pd.Timedelta  |*timedelta64*
Category        |        pd.Categorical |   *category*                  
Complex          |       np.complex   |     *complex*




Ví dụ:

```python
df = pd.DataFrame({
                   'int': [1, 0, 1, 0], 
                   'float': [1.0, 2.0, 3.0, 4.0], 
                   'object': ['1', '2', '3', '4'],
                   'str_int': ['1', 2, '3', 4],
                   'bool': [True, False, True, False],
                   'date_str': ['2021-06-01', '2021-06-02', '2021-06-03', '2021-06-04']})
df
```

<pythonoutput>
```
   int  float object str_int   bool    date_str
0    1    1.0      1       1   True  2021-06-01
1    0    2.0      2       2  False  2021-06-02
2    1    3.0      3       3   True  2021-06-03
3    0    4.0      4       4  False  2021-06-04
```
</pythonoutput>

```python
print(df.dtypes)
```

<pythonoutput>
```
int           int64
float       float64
object       object
str_int      object
bool           bool
date_str     object
dtype: object
```
</pythonoutput>


:::info Lưu ý

- Nếu không khai báo kiểu dữ liệu khi khởi tạo, pandas sẽ mặc định kiểu dữ liệu là `int64`, `float64`, `object` và `bool`.
Pandas sẽ không biết kiểu dữ liệu có định dạng thời gian nếu không khai báo.

- Khi [khởi tạo pandas](./DataFrame#các-cách-khởi-tạo), chúng ta chỉ có thể khai báo duy nhất 1 kiểu dữ liệu cho tất cả các cột.
Ví dụ như tất cả dữ liệu của bạn là `int` hoặc có thể được ép kiểu về  `int`thì có thể khai báo  `dtype=np.int`

:::

Ta có ví dụ về việc khai báo `dtype=np.int` như sau:

```python
df = pd.DataFrame({
                   'int': [1, 0, 1, 0], 
                   'float': [1.0, 2.0, 3.0, 4.0], 
                   'object': ['1', '2', '3', '4'],
                   'str_int': ['1', 2, '3', 4],
                   'bool': [True, False, True, False]},
                   dtype=np.int64)
df
```

<pythonoutput>
```
   int  float  object  str_int  bool
0    1      1       1        1     1
1    0      2       2        2     0
2    1      3       3        3     1
3    0      4       4        4     0
```
</pythonoutput>

Sau khi khai báo `dtype=np.int64`, kiểu dữ liệu của các cột đã được ép kiểu về `int64`.
```python
print(df.dtypes)
```

<pythonoutput>
```
int        int64
float      int64
object     int64
str_int    int64
bool       int64
dtype: object
```
</pythonoutput>


:::tip 
Nếu dữ liệu có khoảng nhỏ thì thay vì khai báo kiểu `np.int64`, ta có thể khai báo kiểu `integer` với số byte phù hợp để giảm bộ nhớ lưu trữ. 
Để xem bộ nhớ sử dụng của DataFrame, ta có thể dùng `.memory_usage()`.

Một số kiểu integer trong numpy như `np.int8`, `np.int16`, `np.int32`, `np.int64`, `np.uint8`, `np.uint16`, `np.uint32`, `np.uint64`
:::

Theo ví dụ trên, khi `dtype=np.int`

```python
df = pd.DataFrame({
                   'int': [1, 0, 1, 0], 
                   'float': [1.0, 2.0, 3.0, 4.0], 
                   'object': ['1', '2', '3', '4'],
                   'str_int': ['1', 2, '3', 4],
                   'bool': [True, False, True, False]},
                   dtype=np.int64)
print(df.memory_usage())
```

<pythonoutput>
```
Index      132
int         32
float       32
object      32
str_int     32
bool        32
dtype: int64
```
</pythonoutput>

và sau khi thay bằng `dtype=np.int8`

```python
df = pd.DataFrame({
                   'int': [1, 0, 1, 0], 
                   'float': [1.0, 2.0, 3.0, 4.0], 
                   'object': ['1', '2', '3', '4'],
                   'str_int': ['1', 2, '3', 4],
                   'bool': [True, False, True, False]},
                   dtype=np.int8)
print(df.memory_usage())
```

<pythonoutput>
```
Index      132
int          4
float        4
object       4
str_int      4
bool         4
dtype: int64
```
Có thể thấy bộ nhớ sử dụng của DataFrame đã giảm đáng kể từ `32 bytes` xuống còn `4 bytes`.
</pythonoutput>
Phương thức ép kiểu này được áp dụng khi bạn khởi tạo DataFrame, ngoài ra còn có hàm ép kiểu khác đối với DataFrame cho trước, nội dung này sẽ được đề cập ở [Chương 3](#Chuong-3).