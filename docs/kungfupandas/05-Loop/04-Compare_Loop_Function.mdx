# Tối ưu hóa tốc độ lặp
## So sánh các phương pháp lặp

```python

def vectorizer(df):
    prices = df['Item_Outlet_Sales'] * 0.5

def applyer(df):
    prices = df['Item_Outlet_Sales'].apply(lambda x: x * 0.5)

def iterrows(df):
    prices = []
    for i, row in df.iterrows():
        prices.append(row['Item_Outlet_Sales'] * 0.5)

def itertuples1(df):
    prices = []
    for row in df.itertuples():
        prices.append(row.Item_Outlet_Sales * 0.5)

def itertuples2(df):
    prices = []
    for row in df.itertuples(index=False, name=None):
        prices.append(row[5] * 0.5)
```

```python
%timeit -n 10 vectorizer(df)
```

```{.python_output}
80.1 µs ± 42.8 µs per loop (mean ± std. dev. of 7 runs, 10 loops each)
```

```python
%timeit -n 10 applyer(df)
```

```{.python_output}
1.37 ms ± 112 µs per loop (mean ± std. dev. of 7 runs, 10 loops each)
```

```python
%timeit -n 10 iterrows(df)
```

```{.python_output}
256 ms ± 2.48 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
```

```python
%timeit -n 10 itertuples1(df)
```

```{.python_output}
6.61 ms ± 200 µs per loop (mean ± std. dev. of 7 runs, 10 loops each)
```

```python
%timeit -n 10 itertuples2(df)
```

```{.python_output}
3.91 ms ± 132 µs per loop (mean ± std. dev. of 7 runs, 10 loops each)
```

## Xử lý song song trong pandas

Xử lý song song là phương pháp tận dụng số lượng core của CPU để giải quyết vấn đề trong thời gian ngắn hơn.


### pandarallel
Để cài đặt pandarallel bằng `pip`
```python
pip install pandarallel
```
Cách sử dụng
```python
from pandarallel import pandarallel
pandarallel.initialize(progress_bar=True, n_workers=4)
```
Để thiết lập cho pandarallel ta dùng `.initialize`. Trong đó:

- `n_workers`: là số lượng cores của CPU

- `progress_bar`: show tiến trình

Để áp dụng pandarallel ta chỉ việc thay thế `.apply` bằng `.parallel_apply`

```python
# df.apply(func)
df.parallel_apply(func)
```

### Dask

Dask là một thư viện tính toán song song cho Python.

Để cài đặt dask bằng `pip`
```python
pip install dask
```

Cách sử dụng
```python
import dask.dataframe as dd
dd.read_csv('data/big_mart_sales.csv')
```


