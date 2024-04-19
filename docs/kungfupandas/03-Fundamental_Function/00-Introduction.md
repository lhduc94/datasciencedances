# Chương 3: Một số hàm cơ bản {#Chuong-3}

```python
df = pd.read_csv('https://raw.githubusercontent.com/lhduc94/kungfupandas/master/data/sales_subset.csv',index_col=['Unnamed: 0'])
```

## `.head()` và `.tail()`

Phương thức `.head(n=5)` hiển thị `n` dòng đầu tiên của `DataFrame`, ngược lại phương thức `.tail(n=5)` hiển thị `n` dòng cuối cùng của `DataFrame`

```python
df.head()
```
```{.python_output}
        store type  department        date  weekly_sales  is_holiday  \
0      1    A           1  2010-02-05      24924.50       False   
1      1    A           1  2010-03-05      21827.90       False   
2      1    A           1  2010-04-02      57258.43       False   
3      1    A           1  2010-05-07      17413.94       False   
4      1    A           1  2010-06-04      17558.09       False 

   temperature_c  fuel_price_usd_per_l  unemployment  
0       5.727778              0.679451         8.106  
1       8.055556              0.693452         8.106  
2      16.816667              0.718284         7.808  
3      22.527778              0.748928         7.808  
4      27.050000              0.714586         7.808  
```
```python
df.tail()
```

```{.python_output}
       store type  department        date  weekly_sales  is_holiday  \
10769     39    A          99  2011-12-09        895.00       False   
10770     39    A          99  2012-02-03        350.00       False   
10771     39    A          99  2012-06-08        450.00       False   
10772     39    A          99  2012-07-13          0.06       False   
10773     39    A          99  2012-10-05        915.00       False   

       temperature_c  fuel_price_usd_per_l  unemployment  
10769       9.644444              0.834256         7.716  
10770      15.938889              0.887619         7.244  
10771      27.288889              0.911922         6.989  
10772      25.644444              0.860145         6.623  
10773      22.250000              0.955511         6.228 

```

## `.shape` và `.size`

Phương thức `.shape` cho biết số lượng dòng và cột của bảng

```python
df.shape
```

```{.python_output}
(10774, 9)
```

Trong dó `10774` là số lượng dòng của bảng và `9` là số lượng cột của bảng

Phương thức `.size` cho biết số lượng phần từ của bảng

```python
df.size
```

```{.python_output}
96966
```

## `.info()`

 Phương thức `.info()` dùng để xem một số thông tin cơ bản như
 
 - Index của bảng
 - Tên các cột, số lượng các phần tử Null trong cột và kiểu dữ liệu của chúng
 - Số lượng các kiểu dữ liệu
 - Dung lượng của bảng

 Ví dụ

```python
df.info()
```

```{.python_output}
<class 'pandas.core.frame.DataFrame'>
Int64Index: 10774 entries, 0 to 10773
Data columns (total 9 columns):
 #   Column                Non-Null Count  Dtype  
---  ------                --------------  -----  
 0   store                 10774 non-null  int64  
 1   type                  10774 non-null  object 
 2   department            10774 non-null  int64  
 3   date                  10774 non-null  object 
 4   weekly_sales          10774 non-null  float64
 5   is_holiday            10774 non-null  bool   
 6   temperature_c         10774 non-null  float64
 7   fuel_price_usd_per_l  10774 non-null  float64
 8   unemployment          10774 non-null  float64
dtypes: bool(1), float64(4), int64(2), object(2)
memory usage: 768.1+ KB
```

```{block2, type='rmdtip'}
**_Mẹo:_**
Phương thức `.info()` có các tham số để tùy chỉnh các thông tin có thể xem. Bạn có thể giới hạn các thông tin theo các tham số dưới đây
`info(verbose=None, buf=None, max_cols=None, memory_usage=None, show_counts=None, null_counts=None)`
``` 

## `.describe()`

Phương thức `.describe()` đưa ra một số thống kê đơn giản như `count`, `mean`, `std`, `min`, `max` và `percentiles = [0.25, 0.5, 0.75]`. Phương thức này chỉ áp dụng cho các cột ở dạng `numerical`.

```python
df.describe()
```

```{.python_output}
              store    department   weekly_sales  temperature_c  \
count  10774.000000  10774.000000   10774.000000   10774.000000   
mean      15.441897     45.218118   23843.950149      15.731978   
std       11.534511     29.867779   30220.387557       9.922446   
min        1.000000      1.000000   -1098.000000      -8.366667   
25%        4.000000     20.000000    3867.115000       7.583333   
50%       13.000000     40.000000   12049.065000      16.966667   
75%       20.000000     72.000000   32349.850000      24.166667   
max       39.000000     99.000000  293966.050000      33.827778   

       fuel_price_usd_per_l  unemployment  
count          10774.000000  10774.000000  
mean               0.749746      8.082009  
std                0.059494      0.624355  
min                0.664129      3.879000  
25%                0.708246      7.795000  
50%                0.743381      8.099000  
75%                0.781421      8.360000  
max                1.107674      9.765000  
```

```{block2, type='rmdtip'}
**_Mẹo:_**
Bạn có thể thay đổi thông số percentiles bằng cách truyền tham số này vào trong `.describe()`
```

**Ví dụ** 
```python
df.describe(percentiles=[0.1, 0.99])
```

```{.python_output}
              store    department   weekly_sales  temperature_c  \
count  10774.000000  10774.000000   10774.000000   10774.000000   
mean      15.441897     45.218118   23843.950149      15.731978   
std       11.534511     29.867779   30220.387557       9.922446   
min        1.000000      1.000000   -1098.000000      -8.366667   
10%        2.000000      8.000000     607.695000       2.577778   
50%       13.000000     40.000000   12049.065000      16.966667   
99%       39.000000     99.000000  142193.400300      32.388889   
max       39.000000     99.000000  293966.050000      33.827778   

       fuel_price_usd_per_l  unemployment  
count          10774.000000  10774.000000  
mean               0.749746      8.082009  
std                0.059494      0.624355  
min                0.664129      3.879000  
10%                0.687640      7.127000  
50%                0.743381      8.099000  
99%                0.978565      9.765000  
max                1.107674      9.765000   
``` 

```{block2, type='rmdnote'}
**_Lưu ý:_** 
`pandas` mặc định tính  thêm percentile tại `0.5` dù không truyền vào 
``` 

## `.index`
Thuộc tính `.index` để lấy index của `DataFrame` hoặc `Series`.

Ví dụ

```python
df.index
```

```{.python_output}
Int64Index([    0,     1,     2,     3,     4,     5,     6,     7,     8,
                9,
            ...
            10764, 10765, 10766, 10767, 10768, 10769, 10770, 10771, 10772,
            10773],
           dtype='int64', length=10774)
```

## `.memory_usage()`

Phương thức `.memory_usage(index=True, deep=False)` giúp thông kê dung lượng của từng cột. Trong đó `index` trả về dung lượng của phần đánh index và `deep` nếu đặt giá trị `True` sẽ trả về cách tính toán sâu hơn về bộ nhớ cho kiểu `object`

Ví dụ

```python
df.memory_usage(index=False)
```

```{.python_output}
store                   86192
type                    86192
department              86192
date                    86192
weekly_sales            86192
is_holiday              10774
temperature_c           86192
fuel_price_usd_per_l    86192
unemployment            86192
dtype: int64
```

```python
df.memory_usage(deep=True) 
```

```{.python_output} 
Index                    86192
store                    86192
type                    624892
department               86192
date                    721858
weekly_sales             86192
is_holiday               10774
temperature_c            86192
fuel_price_usd_per_l     86192
unemployment             86192
dtype: int64
```

## `[]`
Sử dụng `[<tên cột>]` để lấy 1 Series của bảng. Ví dụ để lấy Series của cột `department` ta làm như sau

```python
df['department']
```

```{.python_output}
0         1
1         1
2         1
3         1
4         1
         ..
10769    99
10770    99
10771    99
10772    99
10773    99
Name: department, Length: 10774, dtype: int64
```
những Series này cũng có thế áp dụng các phương thức tương tự của `DataFrame` như `.head()`, `.tail()`....

## `.astype()`

Với phương thức `.astype()` ta có thể ép kiểu dữ liệu của cột về dạng khác. Việc ép kiểu này giúp thay đổi kiểu dữ liệu để tiện các thao tác như nối 2 cột có 2 kiểu `str` và `int`, ngoài ra việc ép kiểu cũng giúp giảm được dung lượng bộ nhớ dành cho bảng. 

Ở ví dụ trên, ta thấy cột `department` có giá trị max là `99` nhưng được mặc định là `int64` khá lãng phí, do đó ép kiểu về `int8`

**Trước khi ép kiểu**
```python
df['department'].dtypes
```

```{.python_output}
dtype('int64')
```

```python
df['department'].memory_usage() - df['department'].index.memory_usage()
```

```{.python_output}
86192
```
**Sau khi ép kiểu**

```python
df['department'].astype('int8').memory_usage() - df['department'].index.memory_usage()
```

```{.python_output}
10774
```
Ta thấy sau khi ép kiểu thì bộ nhớ lưu trữ của cột `department` giảm đi `8` lần.

```{block2, type='rmdnote'}
**_Lưu ý:_** 
`df['department'].memory_usage()` trả về dung lượng lưu trữ của cột `department` và dung lượng lưu trữ của `index`
``` 

## `.drop_duplicates()`

Phương thức này trả về `DataFrame` đã được loại bỏ các hàng trùng nhau.
Lệnh thực hiện

```python
DataFrame.drop_duplicates(subset=None, keep='first', inplace=False, ignore_index=False)
```
Trong đó:

- `subset`: tên cột hoặc danh sách các cột cần lọc giá trị trùng lặp, nếu không truyền vào sẽ mặc định chọn tất cả các cột

- `keep`: các kiểu lọc `duplicate` bao gồm các lựa chọn sau:
  - `'first'`: loại bỏ các dòng bản sao, chỉ giữ lại dòng đầu tiên
  - `'last'`: loại bỏ các dòng bản sao, chỉ giữ lại dòng cuối cùng
  - `False`: loại tất cả các dòng trùng lặp

- `inplace`: thao tác trực tiếp trên bảng nếu để giá trị `True` hoặc tạo 1 bản sao với giá trị `False`

- `ignore_index`: Nếu `True` trả về index đánh số lại từ `0` đến `n-1`

**Ví dụ**

```python
df = pd.DataFrame({
    'action': ['view', 'view', 'add to cart', 'add to cart', 'add to cart',],
    'fruit': ['orange', 'orange', 'orange', 'apple', 'apple'],
    'times':   [ 1, 1, 3, 2, 4]
})
df
```

```{.python_output}
        action  fruit   times
0         view  orange      1
1         view  orange      1
2  add to cart  orange      3
3  add to cart   apple      2
4  add to cart   apple      4
```

```python
df.drop_duplicates()
```

```{.python_output}
        action  fruit   times
0         view  orange      1
2  add to cart  orange      3
3  add to cart   apple      2
4  add to cart   apple      4
```

```python
df.drop_duplicates(subset=['action'])
```

```{.python_output}
        action  fruit   times
0         view  orange      1
2  add to cart  orange      3
```

```python
df.drop_duplicates(subset=['action','fruit'], keep='last', ignore_index=True)
```

```{.python_output}
        action   fruit  times
0         view  orange      1
1  add to cart  orange      3
2  add to cart   apple      4

```

## `.value_counts()`

Phương thức này trả số lần xuất hiện của các phần tử trong `Series`. Kết quả trả về mặc định sẽ sắp xếp theo số lần xuất hiện giảm dần và mặc định bỏ qua các giá trị null

```python
Series.value_counts(normalize=False, sort=True, ascending=False, bins=None, dropna=True)
```
Trong đó:

- `normalize`: `True` sẽ trả về tỉ lệ xuất hiện của các phần tử

- `sort`: `True` sẽ trả về kết quả sắp xếp theo số lần xuất hiện, `False` sẽ trả về kết quả sắp xếp theo trình tự xuất hiện của phần tử

- `ascending`: `True` sẽ trả về kết quả sắp xếp theo số lần xuất hiện tăng dần.

- `bins`: gom nhóm các phần tử, tương tự `pd.cut`

- `dropna`: `False` sẽ đếm tất cả các phần tử kể cả null

**Ví dụ**

```python
s = pd.Series([3, 1, 2, 3,  np.nan, 4, np.nan])
s.value_counts()
```

```{.python_output}
3.0    2
1.0    1
2.0    1
4.0    1
dtype: int64
```

```python
s.value_counts(normalize=True, sort=False, dropna=False)
```

```{.python_output}
3.0    0.285714
1.0    0.142857
2.0    0.142857
NaN    0.285714
4.0    0.142857
dtype: float64
```

```python
s.value_counts(bins=3)
```

```{.python_output}
(0.996, 2.0]    2
(2.0, 3.0]      2
(3.0, 4.0]      1
dtype: int64
```

## `.unique()` và `.nunique()`

Phương thức `.unique()` trả về các giá trị khác nhau của `Series` và `.nunique()` trả về số lượng các giá trị khác nhau của `Series`. Kết quả trả về của `.unique()` là danh sách các phần tử được sắp xếp theo thứ tự đầu vào của bảng. Để loại bỏ giá trị `NA` trong lúc đếm có thể gọi `.nunique(dropna=False)`

Cách sử dụng

```python
s = pd.Series([2, 3, 1 ,2, np.nan], name='col_0')
s
```

```{.python_output}
0    2.0
1    3.0
2    1.0
3    2.0
4    NaN
Name: col_0, dtype: float64
```

```python
s.unique()
```

```{.python_output}
array([ 2.,  3.,  1., nan])
```

```python
s.nunique(dropna=False)
```

```{.python_output}
4
```

## `.drop()`

Phương thức `.drop()` dùng để loại bỏ các dòng hoặc cột theo chỉ định.
Cú pháp của `.drop()` như sau

```python
DataFrame.drop(labels=None, axis=0, index=None, columns=None, level=None, inplace=False, errors='raise')
```

Trong đó:

- `labels`: Tên cột hoặc dòng cần loại bỏ.

- `axis`: Mặc đinh giá trị `0` loại bỏ theo dòng và `1` loại bỏ theo cột.

- `index`: Chỉ định index của dòng cần loại bỏ, tương đương `labels, axis=0`

- `columns`: Chỉ định cột cần loại bỏ, tương đương `labels, axis=1`

- `level`: Dành cho MultiIndex, khi đó chỉ định cấp độ index cần loại bỏ

- `inplace`: Thực hiện trên chính bảng hay tạo ra một bảng sao

- `errors`: mặc định `raise` sẽ trả ra lỗi và `ignore` nếu muốn bỏ qua lỗi.


**Ví dụ**

```python
df = pd.DataFrame(np.arange(16).reshape(4, 4),
                  columns=['A', 'B', 'C', 'D'],
                  index=['A', '1A', '2A', '3A'])
df
```

```{.python_output}
     A   B   C   D
A    0   1   2   3
1A   4   5   6   7
2A   8   9  10  11
3A  12  13  14  15
```

```python
df.drop('A')
```

```{.python_output}
	A	B	C	D
1A	4	5	6	7
2A	8	9	10	11
3A	12	13	14	15
```

```python
df.drop(columns=['A', 'C'])
```

```{.python_output}
     B   D
A    1   3
1A   5   7
2A   9  11
3A  13  15
```

```python
df.drop(index=['A', '2A'])
```

```{.python_output}
     A   B   C   D
1A   4   5   6   7
3A  12  13  14  15
```

```{block2, type='rmdnote'}
**_Lưu ý:_** 
Thực tế hay dùng các params `columns` và `index` để chỉ định các dòng hay cột cần được loại bỏ hơn là dùng `labels` và `axis`
``` 

## `.rename()`

Phương thức `.rename()` dùng để đổi tên nhãn của cột hoặc dòng. Cú pháp như sau

```python
DataFrame.rename(mapper=None, *, index=None, columns=None, axis=None, copy=True, inplace=False, level=None, errors='ignore')[source]
```

Trong đó:

- `mapper`: là một danh sách dạng dictionary chứa key là tên cần đổi và value là tên mới.

- `axis`: Mặc đinh giá trị `0` thay đổi theo index và `1` thay đổi theo cột.

- `index`: Chỉ định index của dòng cần thay đổi, tương đương `mapper, axis=0`, thay thế bằng `index=mapper`

- `columns`: Chỉ định cột cần thay đổi, tương đương `mapper, axis=1`, thay thế bằng `columns=mapper`

- `copy`: `True`, mặc định sao chép dữ liệu

- `level`: Dành cho MultiIndex, khi đó chỉ định cấp độ index cần đổi tên

- `inplace`: Thực hiện trên chính bảng hay tạo ra một bảng sao

- `errors`: mặc định `raise` sẽ trả ra lỗi và `ignore` nếu muốn bỏ qua lỗi.


**Ví dụ**

```python
df = pd.DataFrame(np.arange(16).reshape(4, 4),
                        columns=['A', 'B', 'C', 'D'],
                        index=['A', '1A', '2A', '3A'])
df.rename(mapper={'A':'aA'})
```

```{.python_output}
     A   B   C   D
aA   0   1   2   3
1A   4   5   6   7
2A   8   9  10  11
3A  12  13  14  15
```

```python
df.rename(mapper={'A':'aA'}, axis=1)
```

```{.python_output}
    aA   B   C   D
A    0   1   2   3
1A   4   5   6   7
2A   8   9  10  11
3A  12  13  14  15
```

```python
df.rename(columns={'A':'aA', 'B':'Bb'}, index={'A': 'OA','3A':'3a'})
```

```{.python_output}
    aA  Bb   C   D
OA   0   1   2   3
1A   4   5   6   7
2A   8   9  10  11
3a  12  13  14  15
```

```{block2, type='rmdnote'}
**_Lưu ý:_** 
Tương tự như `.drop()` thì `columns` và `index` thường được sử dụng hơn là `mapper` và `axis`.

Vẫn chưa rõ `copy` dùng để làm gì.
``` 

## `.set_index()`

Phương thức `.set_index()` dùng để chuyển đổi một cột của bảng thành index. Index này có thể thay thể index cũ hoặc thêm vào để thành `MultiIndex`. Cách sử dụng như sau:

```python
DataFrame.set_index(keys, drop=True, append=False, inplace=False, verify_integrity=False)
```

Trong đó:

- `keys`: Có thể truyền vào một cột duy nhất hoặc danh sách các cột. Ngoài ra còn có thể là 1 danh sách dạng `pd.Index`, `Series`, `np.array`, `iterator`

- `drop`: loại bỏ cột trong bảng nếu đã đưa vào index, mặc định là `True`

- `append`: mặc định là `False` ghi đè lên index đã có. Giá trị `True` sẽ thêm vào index sẵn có.

- `inplace`: Thực hiện trực tiếp trên bảng hoặc tạo ra một bản sao

- `verify_integrity`: Kiểm tra xem cột đánh index có chứa các phần tử trùng lặp hay không.


**Ví dụ**

```python
df = pd.DataFrame(np.arange(16).reshape(4, 4),
                  columns=['A', 'B', 'C', 'D'],
                  index=['A', '1A', '2A', '3A'])
df.index.name = 'index1'
df
```

```{.python_output}
         A   B   C   D
index1                
A        0   1   2   3
1A       4   5   6   7
2A       8   9  10  11
3A      12  13  14  15
```

```python
df.set_index('A')
```

```{.python_output}
     B   C   D
A             
0    1   2   3
4    5   6   7
8    9  10  11
12  13  14  15
```

```python
df.set_index(['A', 'B'], append=True)
```

```{.python_output}
               C   D
index1 A  B         
A      0  1    2   3
1A     4  5    6   7
2A     8  9   10  11
3A     12 13  14  15
```

```python
df.set_index([pd.Index([1, 2, 3, 4], name='new_index')])
```

```{.python_output}
            A   B   C   D
new_index                
1           0   1   2   3
2           4   5   6   7
3           8   9  10  11
4          12  13  14  15
```

```{block2, type='rmdnote'}
**_Lưu ý:_** 
`keys` không áp dụng cho kiểu `list`, `tuple` nhưng Iterator của nó thì được.
``` 
**Ví dụ** khi đưa list vào sẽ báo lỗi

```python
df.set_index([1, 2, 3, 4])
```

```{.python_output}
---------------------------------------------------------------------------
KeyError                                  Traceback (most recent call last)
~\AppData\Local\Temp/ipykernel_1380/3577861036.py in <module>
----> 1 df.set_index([1, 2, 3, 4])

D:\Vendors\anaconda\lib\site-packages\pandas\util\_decorators.py in wrapper(*args, **kwargs)
    309                     stacklevel=stacklevel,
    310                 )
--> 311             return func(*args, **kwargs)
    312 
    313         return wrapper

D:\Vendors\anaconda\lib\site-packages\pandas\core\frame.py in set_index(self, keys, drop, append, inplace, verify_integrity)
   5492 
   5493         if missing:
-> 5494             raise KeyError(f"None of {missing} are in the columns")
   5495 
   5496         if inplace:

KeyError: 'None of [1, 2, 3, 4] are in the columns'
```

Trong khi đưa vào `Iterator` thì hoạt động.

```python
df.set_index(iter([1, 2, 3, 4]))
```

```{.python_output}
    A   B   C   D
1   0   1   2   3
2   4   5   6   7
3   8   9  10  11
4  12  13  14  15
```

## `.sort_values`

Phương thức `.sort_values` dùng để sắp xếp dữ liệu trong DataFrame hoặc Series
```python
DataFrame.sort_values(by, axis=0, ascending=True, inplace=False, kind='quicksort', na_position='last', ignore_index=False, key=None)
```

Trong đó:

- `by` : nhãn hoặc danh sách nhãn cần sắp xếp

- `axis`: chỉ định chiều sắp xếp \{ `0` hoặc `index`, `1` hoặc `columns` \}

- `ascending`: Sắp xếp tăng dần hoặc giảm dần, có thể là một giá trị hoặc danh sách các giá trị boolean

- `inplace`: Thực hiện trên chính bảng đó hoặc tạo ra một bản sao

- `kind`: Thuật toán sắp xếp

- `na_postion`: chỉ định các giá trị `NA` được xếp đầu hoặc cuôi

- `ignore_index`: Nếu để giá trị `True` sẽ thực hiện đánh index lại từ 0

- `key`: key function 


```python
df = pd.DataFrame({
    'col1': ['A', 'A', 'B', np.nan, 'D', 'C'],
    'col2': [2, 1, 9, 8, 2, 4],
    'col3': [0, 1, 9, 4, 2, 3],
    'col4': ['a', 'B', 'c', 'D', 'e', 'F']
})
df
```

```{.python_output}
  col1  col2  col3 col4
0    A     2     0    a
1    A     1     1    B
2    B     9     9    c
3  NaN     8     4    D
4    D     2     2    e
5    C     4     3    F
```
Sắp xếp theo `col1`

```python
df.sort_values(by=['col1'])
```

```{.python_output}
  col1  col2  col3 col4
0    A     2     0    a
1    A     1     1    B
2    B     9     9    c
5    C     4     3    F
4    D     2     2    e
3  NaN     8     4    D
```
Sắp xếp theo nhiều cột

```python
df.sort_values(by=['col1', 'col2'])
```

```{.python_output}
  col1  col2  col3 col4
1    A     1     1    B
0    A     2     0    a
2    B     9     9    c
5    C     4     3    F
4    D     7     2    e
3  NaN     8     4    D
```

Sắp xếp theo tăng giảm

```python
df.sort_values(by=['col1', 'col2'], ascending=[False, True])
```

```{.python_output}
  col1  col2  col3 col4
4    D     2     2    e
5    C     4     3    F
2    B     9     9    c
1    A     1     1    B
0    A     2     0    a
3  NaN     8     4    D
```

Thay đổi vị trí của `NaN`

```python
df.sort_values(by='col1', ascending=False, na_position='first')
```

```{.python_output}
  col1  col2  col3 col4
3  NaN     8     4    D
4    D     2     2    e
5    C     4     3    F
2    B     9     9    c
0    A     2     0    a
1    A     1     1    B
```

Sắp xếp với key function

```python
df.sort_values(by='col4', key=lambda col: col.str.lower())
```

```{.python_output}
  col1  col2  col3 col4
0    A     2     0    a
1    A     1     1    B
2    B     9     9    c
3  NaN     8     4    D
4    D     2     2    e
5    C     4     3    F
```

