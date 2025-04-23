---
sidebar_label:  Lọc dữ liệu
sidebar_position: 2
---

# Lọc dữ liệu


## Lọc theo điều kiện
Các phương thức `[]`, `.loc` hay `.iloc` ngoài việc lấy dữ liệu theo hàng và cột còn có thể lấy ra những bảng con theo các điều kiện cho trước. Bản chất các câu điều kiện sẽ trả về một danh sách dạng bolean và các hàm trên thực hiện lọc theo danh sách đó.

Trước hết ta cần biết câu điều kiện trong Pandas như thế nào. Ví dụ ta có 1 `DataFrame` như sau

```python
               state  individuals  family_members  state_pop
region                                                      
Mountain     Arizona       7259.0          2606.0    7158024
Mountain    Colorado       7607.0          3250.0    5691287
Mountain       Idaho       1297.0           715.0    1750536
Pacific       Alaska       1434.0           582.0     735139
Pacific   California     109008.0         20964.0   39461588
Pacific       Hawaii       4131.0          2399.0    1420593
```

### Toán tử điều kiện

Giả sử ta có một điều kiện rằng `df['individuals'] > 5000`. Kết quả trả về là 1 `Series`

```python
df['individuals'] > 5000
```

<pythonoutput>
```
region
Mountain     True
Mountain     True
Mountain    False
Pacific     False
Pacific      True
Pacific     False
Name: individuals, dtype: bool
```
</pythonoutput>

Để lọc theo điều kiện này ta có các cách như sau

```python
## Dùng []
df[df['individuals'] > 5000]
```

<pythonoutput>
```
               state  individuals  family_members  state_pop
region                                                      
Mountain     Arizona       7259.0          2606.0    7158024
Mountain    Colorado       7607.0          3250.0    5691287
Pacific   California     109008.0         20964.0   39461588
```
</pythonoutput>

```python
## Dùng .loc
df.loc[df['individuals'] > 5000]
```

<pythonoutput>
```
               state  individuals  family_members  state_pop
region                                                      
Mountain     Arizona       7259.0          2606.0    7158024
Mountain    Colorado       7607.0          3250.0    5691287
Pacific   California     109008.0         20964.0   39461588
```
</pythonoutput>

:::note Lưu ý
`.iloc` không nhận `Series` boolean nhưng `array` thì có thể. Do đó ta có thể dùng `.values` để lấy kết quả của Câu điều kiện
:::

```python
## Dùng .iloc
df.iloc[(df['individuals'] > 5000).values]
```

<pythonoutput>
```
               state  individuals  family_members  state_pop
region                                                      
Mountain     Arizona       7259.0          2606.0    7158024
Mountain    Colorado       7607.0          3250.0    5691287
Pacific   California     109008.0         20964.0   39461588
```
</pythonoutput>
Ta cũng có thể áp nhiều điều kiện cùng lúc, mỗi điều kiện phải nằm trong dấu ngoặc đơn `()` và giữa các kiều kiện là toán tử `&` hoặc `|`

```python
## Nhiều câu điều kiện trên một cột
df.loc[(df['individuals'] > 5000) & (df['individuals'] < 10000)]
```

<pythonoutput>
```
             state  individuals  family_members  state_pop
region                                                    
Mountain   Arizona       7259.0          2606.0    7158024
Mountain  Colorado       7607.0          3250.0    5691287
```
</pythonoutput>

```python
## Nhiều câu điều kiện ở nhiều cột
df.loc[(df['individuals'] > 5000) & (df['family_members'] < 10000)]
```

<pythonoutput>
```
             state  individuals  family_members  state_pop
region                                                    
Mountain   Arizona       7259.0          2606.0    7158024
Mountain  Colorado       7607.0          3250.0    5691287
```
</pythonoutput>

```python
## Một câu điều kiện trên nhiều cột
df[df['individuals'] > 5 * df['family_members']]
```

<pythonoutput>
```
              state  individuals  family_members  state_pop
region                                                     
Pacific  California     109008.0         20964.0   39461588
```
</pythonoutput>

:::tip Mẹo
Bạn cũng có thể dùng `loc` để vừa lọc các dòng thỏa điều kiện, vừa chọn các cột muốn lấy 
:::


```python
df.loc[df['individuals'] > 5 * df['family_members'], ['individuals', 'family_members']]
```

<pythonoutput>
```
         individuals  family_members
region                              
Pacific     109008.0         20964.0
```
</pythonoutput>

Ngoài ra, `pandas` còn cho phép bạn lọc với cấu trúc câu truy vấn bằng `.query` theo cú pháp

```python
DataFrame.query(expr, inplace=False, **kwargs)
```

Trong đó:

- `expr`: là câu truy vấn

- `inplace`: thực hiện trên chính `DataFrame` đó hay tạo 1 bảng sao

- `**kwargs`: keyword arguments

Theo ví dụ trên, để thực hiện lọc theo điều kiện `df['individuals'] > 5000` và `df['family_members'] < 10000` ta có thể làm như sau

```python
df.query('individuals > 500 and family_members < 10000')
```

<pythonoutput>
```
             state  individuals  family_members  state_pop
region                                                    
Mountain   Arizona       7259.0          2606.0    7158024
Mountain  Colorado       7607.0          3250.0    5691287
```
</pythonoutput>

### `.isin()`
Phương thức `.isin(values)` để kiểm tra các phần tử trong `DataFrame` hoặc `Series` có nằm trong values hay không.

Ví dụ:
```python
df.isin(['Alaska', 'Oklahoma', 'Illinois', 'Arizona', 7259, 582, 300])
```

<pythonoutput>
```
          state  individuals  family_members  state_pop
region                                                 
Mountain   True         True           False      False
Mountain  False        False           False      False
Mountain  False        False           False      False
Pacific    True        False            True      False
Pacific   False        False           False      False
Pacific   False        False           False      False
```
</pythonoutput>

```python
df['state'].isin(['Alaska', 'Oklahoma', 'Illinois', 'Arizona'])
```

<pythonoutput>
```
region
Mountain     True
Mountain    False
Mountain    False
Pacific      True
Pacific     False
Pacific     False
Name: state, dtype: bool
```
</pythonoutput>
Ngoài ra bạn có thể truyền `values` là một `dictionary` để kiểm tra cho từng cột theo từng tập giá trị

```python
df.isin({'state': ['Alaska', 'Oklahoma', 'Illinois', 'Arizona'], 
         'individuals': [7259, 582, 300]})
```

<pythonoutput>
```
          state  individuals  family_members  state_pop
region                                                 
Mountain   True         True           False      False
Mountain  False        False           False      False
Mountain  False        False           False      False
Pacific    True        False           False      False
Pacific   False        False           False      False
Pacific   False        False           False      False
```
</pythonoutput>
Lọc với `.isin()`

```python
df[df['state'].isin(['Alaska', 'Oklahoma', 'Illinois', 'Arizona'])]
```

<pythonoutput>
```
            state  individuals  family_members  state_pop
region                                                   
Mountain  Arizona       7259.0          2606.0    7158024
Pacific    Alaska       1434.0           582.0     735139
```
</pythonoutput>

trong trường hợp sự dụng `.isin` với `DataFrame`, kết quả của lọc sẽ trả về một `DataFrame` với  giá trị các phần tử mà phép `isin` trả về `True`, các phần tử còn lại trả giá trị `NaN`

```python
df[df.isin(['Alaska', 'Oklahoma', 'Illinois', 'Arizona', 7259, 582, 300])]
```

<pythonoutput>
```
            state  individuals  family_members  state_pop
region                                                   
Mountain  Arizona       7259.0             NaN        NaN
Mountain      NaN          NaN             NaN        NaN
Mountain      NaN          NaN             NaN        NaN
Pacific    Alaska          NaN           582.0        NaN
Pacific       NaN          NaN             NaN        NaN
Pacific       NaN          NaN             NaN        NaN
```
</pythonoutput>
:::tip Mẹo

- Bạn có dùng `.any()` để tổng hợp điều kiện của 1 DataFrame với các phần tử `boolean`

- `.any(axis=1)` : Chỉ cần tồn tại 1 cột giá trị True, trả về giá trị True cho dòng

- `.any(axis=0)`: Chỉ cần tồn tại 1 dòng có giá trị True, trả về giá trị True cho cột.

- Phương thức `.any()` thường dùng để kiểm tra các dòng tồn tại 1 cột giá trị `NaN`
:::

Lọc với `.isin()` và `any(axis=1)`

```python
df.isin(['Alaska', 'Oklahoma', 'Illinois', 'Arizona', 7259, 582, 300]).any(axis=1)
```

<pythonoutput>
```
region
Mountain     True
Mountain    False
Mountain    False
Pacific      True
Pacific     False
Pacific     False
dtype: bool
```
</pythonoutput>
```python
df[df.isin(['Alaska', 'Oklahoma', 'Illinois', 'Arizona', 7259, 582, 300]).any(axis=1)]
```

<pythonoutput>
```
            state  individuals  family_members  state_pop
region                                                   
Mountain  Arizona       7259.0          2606.0    7158024
Pacific    Alaska       1434.0           582.0     735139
```
</pythonoutput>

Lọc với `isin()` và `any(axis=0)`

```python
df.isin(['Alaska', 'Oklahoma', 'Illinois', 'Arizona', 7259, 582, 300]).any(axis=0)
```

<pythonoutput>
```
state              True
individuals        True
family_members     True
state_pop         False
dtype: bool
```
</pythonoutput>
```python
df.loc[:,df.isin(['Alaska', 'Oklahoma', 'Illinois', 'Arizona', 7259, 582, 300]).any(axis=0)]
```

<pythonoutput>
```
               state  individuals  family_members
region                                           
Mountain     Arizona       7259.0          2606.0
Mountain    Colorado       7607.0          3250.0
Mountain       Idaho       1297.0           715.0
Pacific       Alaska       1434.0           582.0
Pacific   California     109008.0         20964.0
Pacific       Hawaii       4131.0          2399.0
```
</pythonoutput>
Lọc với `isin()` và `any(axis=0)` và `any(axis=1)`

```python
bool_df = df.isin(['Alaska', 'Oklahoma', 'Illinois', 'Arizona', 7259, 582, 300])
df.loc[bool_df.any(axis=1), bool_df.any(axis=0)]
```

<pythonoutput>
```
            state  individuals  family_members
region                                        
Mountain  Arizona       7259.0          2606.0
Pacific    Alaska       1434.0           582.0
```
</pythonoutput>

### Lọc missing value với `.dropna()`

Trong quá trình xử lý dữ liệu, chúng ta thường gặp những bảng có chứa giá trị missing value. Ví dụ bảng `missing_df`

```python
               state  individuals  family_members   state_pop
region                                                       
Mountain     Arizona       7259.0             NaN         NaN
Mountain    Colorado          NaN          3250.0   5691287.0
Mountain       Idaho       1297.0           715.0   1750536.0
Pacific       Alaska       1434.0             NaN    735139.0
Pacific   California     109008.0         20964.0  39461588.0
Pacific       Hawaii       4131.0          2399.0         NaN
```

Để lọc dữ liệu chứa `NaN` ta dùng phương thức `.dropna()`

```python
DataFrame.dropna(axis=0, how='any', thresh=None, subset=None, inplace=False)
```

Trong đó:

- `axis`: Nhận diện lọc theo dòng `0`, `index`, hay cột `1`, `column`

- `how`: Chỉ định cách lọc
    - `any`: Nếu có bất kì `NA`, loại bỏ dòng hoặc cột
    - `all`: Nếu tất cả là `NA`, loại bỏ dòng hoặc cột

- `thresh`: Số lượng `non-NA` yêu cầu

- `subset`: Chỉ định các cột cần lọc

- `inplace`: Thực hiện trên chính `DataFrame` hay tạo bản sao.


Lọc bỏ các hàng nếu ít nhất một phần tử `NA`
```python
missing_df.dropna(axis=0)
```

<pythonoutput>
```
               state  individuals  family_members   state_pop
region                                                       
Mountain       Idaho       1297.0           715.0   1750536.0
Pacific   California     109008.0         20964.0  39461588.0
```
</pythonoutput>

Lọc bỏ các cột nếu ít nhất một phần tử `NA`

```python
missing_df.dropna(axis='columns')
```

<pythonoutput>
```
               state
region              
Mountain     Arizona
Mountain    Colorado
Mountain       Idaho
Pacific       Alaska
Pacific   California
Pacific       Hawaii
```
</pythonoutput>
Lọc bỏ các dòng nếu tất cả phần tử trong các cột `['family_members', 'state_pop']` là `NA`

```python
missing_df.dropna(axis='index', how='all', subset=['family_members', 'state_pop'])
```

<pythonoutput>
```
               state  individuals  family_members   state_pop
region                                                       
Mountain    Colorado          NaN          3250.0   5691287.0
Mountain       Idaho       1297.0           715.0   1750536.0
Pacific       Alaska       1434.0             NaN    735139.0
Pacific   California     109008.0         20964.0  39461588.0
Pacific       Hawaii       4131.0          2399.0         NaN
```
</pythonoutput>
Giữ lại các dòng có ít nhất `3` phần tử `non-NA`

```python
missing_df.dropna(thresh=3)
```

<pythonoutput>
```
               state  individuals  family_members   state_pop
region                                                       
Mountain    Colorado          NaN          3250.0   5691287.0
Mountain       Idaho       1297.0           715.0   1750536.0
Pacific       Alaska       1434.0             NaN    735139.0
Pacific   California     109008.0         20964.0  39461588.0
Pacific       Hawaii       4131.0          2399.0         NaN
```
</pythonoutput>



