## `[]`

Sử dụng `[<tên cột>]` để lấy 1 Series của bảng. Ví dụ để lấy Series của cột `department` ta làm như sau

```python
df['department']
```

<pythonoutput> 
```
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
</pythonoutput>

những Series này cũng có thế áp dụng các phương thức tương tự của `DataFrame` như `.head()`, `.tail()`....

## `.astype()`

Với phương thức `.astype()` ta có thể ép kiểu dữ liệu của cột về dạng khác. Việc ép kiểu này giúp thay đổi kiểu dữ liệu để tiện các thao tác như nối 2 cột có 2 kiểu `str` và `int`, ngoài ra việc ép kiểu cũng giúp giảm được dung lượng bộ nhớ dành cho bảng. 

Ở ví dụ trên, ta thấy cột `department` có giá trị max là `99` nhưng được mặc định là `int64` khá lãng phí, do đó ép kiểu về `int8`

**Trước khi ép kiểu**
```python
df['department'].dtypes
```

<pythonoutput>
```
dtype('int64')
```
</pythonoutput>

```python
df['department'].memory_usage() - df['department'].index.memory_usage()
```

<pythonoutput>
```
86192
```
</pythonoutput>

**Sau khi ép kiểu**

```python
df['department'].astype('int8').memory_usage() - df['department'].index.memory_usage()
```

<pythonoutput>
```
10774
```
</pythonoutput>

Ta thấy sau khi ép kiểu thì bộ nhớ lưu trữ của cột `department` giảm đi `8` lần.

:::info Lưu ý
`df['department'].memory_usage()` trả về dung lượng lưu trữ của cột `department` và dung lượng lưu trữ của `index`
:::

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

<pythonoutput>
```
        action  fruit   times
0         view  orange      1
1         view  orange      1
2  add to cart  orange      3
3  add to cart   apple      2
4  add to cart   apple      4
```
</pythonoutput>

```python
df.drop_duplicates()
```

<pythonoutput>
```
        action  fruit   times
0         view  orange      1
2  add to cart  orange      3
3  add to cart   apple      2
4  add to cart   apple      4
```
</pythonoutput>

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

<pythonoutput>
```
3.0    0.285714
1.0    0.142857
2.0    0.142857
NaN    0.285714
4.0    0.142857
dtype: float64
```
</pythonoutput>

```python
s.value_counts(bins=3)
```

<pythonoutput>
```
(0.996, 2.0]    2
(2.0, 3.0]      2
(3.0, 4.0]      1
dtype: int64
```
</pythonoutput>

## `.unique()` và `.nunique()`

Phương thức `.unique()` trả về các giá trị khác nhau của `Series` và `.nunique()` trả về số lượng các giá trị khác nhau của `Series`. Kết quả trả về của `.unique()` là danh sách các phần tử được sắp xếp theo thứ tự đầu vào của bảng. Để loại bỏ giá trị `NA` trong lúc đếm có thể gọi `.nunique(dropna=False)`

Cách sử dụng

```python
s = pd.Series([2, 3, 1 ,2, np.nan], name='col_0')
s
```

<pythonoutput>
```
0    2.0
1    3.0
2    1.0
3    2.0
4    NaN
Name: col_0, dtype: float64
```
</pythonoutput>

```python
s.unique()
```

<pythonoutput>
```
array([ 2.,  3.,  1., nan])
```
</pythonoutput>

```python
s.nunique(dropna=False)
```

<pythonoutput>
```
4
```
</pythonoutput>

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

<pythonoutput>
```
     A   B   C   D
A    0   1   2   3
1A   4   5   6   7
2A   8   9  10  11
3A  12  13  14  15
```
</pythonoutput>

```python
df.drop('A')
```

<pythonoutput>
```
	A	B	C	D
1A	4	5	6	7
2A	8	9	10	11
3A	12	13	14	15
```
</pythonoutput>


```python
df.drop(columns=['A', 'C'])
```

<pythonoutput>
```
     B   D
A    1   3
1A   5   7
2A   9  11
3A  13  15
```
</pythonoutput>

```python
df.drop(index=['A', '2A'])
```

<pythonoutput>
```
     A   B   C   D
1A   4   5   6   7
3A  12  13  14  15
```
</pythonoutput>

:::info Lưu ý
Thực tế hay dùng các params `columns` và `index` để chỉ định các dòng hay cột cần được loại bỏ hơn là dùng `labels` và `axis`
:::

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

<pythonoutput>
```
     A   B   C   D
aA   0   1   2   3
1A   4   5   6   7
2A   8   9  10  11
3A  12  13  14  15
```
</pythonoutput>

```python
df.rename(mapper={'A':'aA'}, axis=1)
```

<pythonoutput>
```
    aA   B   C   D
A    0   1   2   3
1A   4   5   6   7
2A   8   9  10  11
3A  12  13  14  15
```
</pythonoutput>

```python
df.rename(columns={'A':'aA', 'B':'Bb'}, index={'A': 'OA','3A':'3a'})
```

<pythonoutput>
```
    aA  Bb   C   D
OA   0   1   2   3
1A   4   5   6   7
2A   8   9  10  11
3a  12  13  14  15
```
</pythonoutput>

:::info Lưu ý
Tương tự như `.drop()` thì `columns` và `index` thường được sử dụng hơn là `mapper` và `axis`.

Vẫn chưa rõ `copy` dùng để làm gì.
:::

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

<pythonoutput>
```
         A   B   C   D
index1                
A        0   1   2   3
1A       4   5   6   7
2A       8   9  10  11
3A      12  13  14  15
```
</pythonoutput>

```python
df.set_index('A')
```

<pythonoutput>
```
     B   C   D
A             
0    1   2   3
4    5   6   7
8    9  10  11
12  13  14  15
```
</pythonoutput>
```python
df.set_index(['A', 'B'], append=True)
```

<pythonoutput>
```
               C   D
index1 A  B         
A      0  1    2   3
1A     4  5    6   7
2A     8  9   10  11
3A     12 13  14  15
```
</pythonoutput>

```python
df.set_index([pd.Index([1, 2, 3, 4], name='new_index')])
```

<pythonoutput>
```
            A   B   C   D
new_index                
1           0   1   2   3
2           4   5   6   7
3           8   9  10  11
4          12  13  14  15
```
</pythonoutput>

:::info Lưu ý
`keys` không áp dụng cho kiểu `list`, `tuple` nhưng Iterator của nó thì được.
:::

**Ví dụ** khi đưa list vào sẽ báo lỗi

```python
df.set_index([1, 2, 3, 4])
```

<pythonoutput>
```
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
</pythonoutput>
Trong khi đưa vào `Iterator` thì hoạt động.

```python
df.set_index(iter([1, 2, 3, 4]))
```

<pythonoutput>
```
    A   B   C   D
1   0   1   2   3
2   4   5   6   7
3   8   9  10  11
4  12  13  14  15
```
</pythonoutput>

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

<pythonoutput>
```
  col1  col2  col3 col4
0    A     2     0    a
1    A     1     1    B
2    B     9     9    c
3  NaN     8     4    D
4    D     2     2    e
5    C     4     3    F
```
</pythonoutput>
Sắp xếp theo `col1`

```python
df.sort_values(by=['col1'])
```

<pythonoutput>
```
  col1  col2  col3 col4
0    A     2     0    a
1    A     1     1    B
2    B     9     9    c
5    C     4     3    F
4    D     2     2    e
3  NaN     8     4    D
```
</pythonoutput>
Sắp xếp theo nhiều cột

```python
df.sort_values(by=['col1', 'col2'])
```

<pythonoutput>
```
  col1  col2  col3 col4
1    A     1     1    B
0    A     2     0    a
2    B     9     9    c
5    C     4     3    F
4    D     7     2    e
3  NaN     8     4    D
```
</pythonoutput>
Sắp xếp theo tăng giảm

```python
df.sort_values(by=['col1', 'col2'], ascending=[False, True])
```

<pythonoutput>
```
  col1  col2  col3 col4
4    D     2     2    e
5    C     4     3    F
2    B     9     9    c
1    A     1     1    B
0    A     2     0    a
3  NaN     8     4    D
``` 
</pythonoutput>
Thay đổi vị trí của `NaN`

```python
df.sort_values(by='col1', ascending=False, na_position='first')
```

<pythonoutput>
```
  col1  col2  col3 col4
3  NaN     8     4    D
4    D     2     2    e
5    C     4     3    F
2    B     9     9    c
0    A     2     0    a
1    A     1     1    B
```
</pythonoutput>
Sắp xếp với key function

```python
df.sort_values(by='col4', key=lambda col: col.str.lower())
```

<pythonoutput>
```
  col1  col2  col3 col4
0    A     2     0    a
1    A     1     1    B
2    B     9     9    c
3  NaN     8     4    D
4    D     2     2    e
5    C     4     3    F
```
</pythonoutput>
