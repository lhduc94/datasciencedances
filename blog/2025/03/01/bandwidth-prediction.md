---
title: Ứng dụng ML Time Series -  Dự đoán băng thông mạng
slug: 2025/03/ung-dung-ml-time-series-du-doan-bang-thong-mang
description: Ứng dụng ML Time Series - Dự đoán băng thông mạng
authors: lhduc
tags: [Data Science]
keywords: [time series, python, ml]
image: /img/blog/20250301_1_cover.jpg
hide_table_of_contents: false
draft: true
---

![](cover.jpg)

## Mô tả bài toán

Một công ty cung cấp nền tảng giải trí cho phép user sử dụng các dịch vụ music, video, live stream, chat, … Hệ thống công ty chia thành các zone theo khu vực địa lý. Để đáp ứng số lượng user ngày càng tăng, công ty muốn dự đoán được tổng bandwidth của mỗi server và số lượng tối đa user truy cập đồng thời vào server trong vòng một tháng tiếp theo để lên kế hoạch hoạt động.

## Dữ liệu

Dữ liệu được mô tả trong tập  [train.csv](https://drive.google.com/drive/folders/10dsUuxiMBdWj_NE0GjzXhzKQIZ0KxR0_)

```
UPDATE_TIME,ZONE_CODE,HOUR_ID,BANDWIDTH_TOTAL,MAX_USER
2017-10-01,ZONE01,0,16096.71031272728,212415.0
2017-10-01,ZONE01,1,9374.20790727273,166362.0
2017-10-01,ZONE01,2,5606.225750000003,146370.0
2017-10-01,ZONE01,3,4155.654660909094,141270.0
2017-10-01,ZONE01,4,3253.9785936363623,139689.0
```
Trong đó:
- UPDATE_TIME: ngày thực hiện lấy dữ liệu
- HOUR_ID: giờ thực hiện lấy dữ liệu
- ZONE_CODE: mã khu vực
- BANDWIDTH_TOTAL: tổng băng thông truy cập tương ứng trong vòng 1 giờ
- MAX_USER: số user truy cập đồng thời tối đa trong vòng 1 giờ (là một số tự nhiên)

Các đội chơi cần dự đoán BANDWIDTH_TOTAL, và MAX_USER cho mỗi dòng.

**Metric đánh giá**

$SMAPE = \frac{1}{n} \sum_{i=1}^{n} \frac{|y_i - \hat{y}_i|}{|y_i| + |\hat{y}_i|} \times 100$

Trong đó:
- $n$ là số lượng dòng dữ liệu
- $y_i$ là giá trị thực tế
- $\hat{y}_i$ là giá trị dự đoán


Dưới đây là code python cho metric đánh giá cơ bản

```python
def smape(y_true, y_pred):
    return np.mean(np.abs(y_true - y_pred) / (np.abs(y_true) + np.abs(y_pred))) * 100
```

Tuy nhiên chúng ta sẽ không chấm điểm cho trường hợp giá trị thực bằng 0 nên metric được điều chỉnh lại như sau:

```python
def smape(y_true, y_pred): 
    y_true = np.array(y_true)
    y_pred = np.array(y_pred)
    mask = y_true != 0
    return (np.abs(y_true - y_pred)/(np.abs(y_true)+np.abs(y_pred)))[mask].mean()*100
```

## Xử lý dữ liệu

**Load dữ liệu**

```python
import pandas as pd

train_df = pd.read_csv('train.csv')
test_df = pd.read_csv('test_id.csv')
sub = pd.read_csv('sample_submission.csv')
```
Loại bỏ dữ liệu trùng lặp

```python
#Drop duplicates and set time index
train_df.drop_duplicates(inplace=True)
train_df['DATE_TIME'] = train_df['UPDATE_TIME'] + ' ' + (train_df['HOUR_ID'].astype(str)) + ':00:00'
train_df['DATE_TIME'] = pd.to_datetime(train_df['DATE_TIME'])
train_df.set_index('DATE_TIME',inplace=True)
```

Để tránh missing value, chúng ta sẽ fill missing value. Bước đầu tiên sẽ tạo 1 hàm time đầy đủ với start là ngày đầu tiên và end là ngày cuối cùng của dữ liệu.

```python
def generate_date_time_series(d):
    start = d[0]
    end = d[1]
    step = datetime.timedelta(hours=1)
    result = []
    while start < end:
        result.append(start.strftime('%Y-%m-%d %H:%M:%S'))
        start += step
    result.append(d[1])
    return result
```

Với mỗi ZoneName mình tiến hành fill missing value cho BANDWIDTH, về MAX_USER mình sẽ xử lý cách khác. Mỗi vị trí bị thiếu sẽ được điền bằng trung bình giá trị tại 4 ngày trước. Ở đây mình có set Nlog=True để chuẩn hóa dữ liệu về dạng log(N). Để tránh bị lỗi log(0) mình replace những giá trị bằng 0 bằng 0.000003 (đây là giá trị nhỏ hơn giá trị min của BANDWIDTH của bài trước). Các bạn có thể thay thế hàm np.log bằng np.log1p mà không cần quan tâm tới giá trị 0.

```python
t1 = generate_date_time_series(train_df[train_df['ZONE_CODE'] == name].index[[0,-1]])
SERVER = train_df[train_df['ZONE_CODE'] == name]
x = pd.DataFrame({'DATE_TIME':t1, 'BANDWIDTH_TOTAL':np.nan, 'MAX_USER':np.nan})
x['DATE_TIME'] = pd.to_datetime(x['DATE_TIME'])
x.set_index('DATE_TIME', inplace=True)
df = pd.concat([SERVER[['BANDWIDTH_TOTAL','MAX_USER']],x])
df1 = df[~df.index.duplicated(keep='first')]
df1.sort_index(inplace=True)
if Nlog:
    df1.replace(0,0.000003,inplace=True)
TIMESERIAL = df1['BANDWIDTH_TOTAL'].values.copy()
xx = np.argwhere(np.isnan(TIMESERIAL)).flatten()
for i in xx:
    TIMESERIAL[i] = np.nanmean([ TIMESERIAL[i-24*j] for j in range(1,4)])
if Nlog:
    TIMESERIAL = np.log(TIMESERIAL)
```

## Xây dựng dữ liệu training cho Bandwidth

Có 2 cách để xây dựng dữ liệu training:

- Cách 1: Cho chuỗi thời gian seqseq, với mỗi giá trị $y=seq_t$ mình chọn x là $seq_{t-1-n_{steps}}$ đến $seq_{t-1}$
- Cách 2: Cho chuỗi thời gian seq, với mỗi giá trị $y=seq_t$ mình chọn x bao gồm các giá trị của giờ đó những ngày hôm trước cùng với mean,min,max của các giá trị đó. Ngoài ra mình còn thêm vào 24 giá trị gần nhất.

Code:

```python
def split_1(sequence, n_steps):
    X, y = list(), list()
    for i in range(len(sequence)):
        end_ix = i + n_steps
        if end_ix > len(sequence)-1:
            break
        seq_x, seq_y = sequence[i:end_ix], sequence[end_ix]
        X.append(seq_x)
        y.append(seq_y)
    
    return np.array(X), np.array(y)
```

Code cho cách 2:

```python
def split_2(sequence, n_steps):
    a = list(sequence)
    X,y = list(), list()
    for i in reversed(range(len(a))):
        if i == n_steps-1:
            break
        seq_y = a[i]
        seq_x = a[i-n_steps:i:24] + a[i-24:i] \
                +[np.mean(a[i-n_steps:i:24]),
                  np.min(a[i-n_steps:i:24]),
                  np.max(a[i-n_steps:i:24])]
        X.append(seq_x)
        y.append(seq_y)
    return np.array(X), np.array(y)
```
## Mô hình dự đoán 

### Dự đoán Bandwidth
Đối với dự đoán Bandwidth, mình sẽ sử dụng mô hình Linear Regression, cụ thể hơn là Ridge Regression.

```python
from sklearn.linear_model import Ridge
Nlog=True
def model_1(TIMESERIAL):
    
    train,test = TIMESERIAL[:-24*31],TIMESERIAL[-24*31:]
    n_steps = 24*31
    X, y = split_1(TIMESERIAL,n_steps)
    X_train = X
    y_train = y
    
    model = Ridge()
    model.fit(X_train, y_train)
    pred = model.predict(X_train)
    if Nlog:
        y_train = np.exp(y_train)
        pred = np.exp(pred)
    print(smape(y_train,pred))
    
    bw_pred = []
    for i in range(24*31):
        seq = TIMESERIAL[-n_steps:]
        yhat = model.predict(np.array([seq]))
        TIMESERIAL = np.append(TIMESERIAL,yhat[0])
        bw_pred.append(yhat[0])
    if Nlog:
        bw_pred = np.exp(bw_pred)
        
    return bw_pred
def model_2(TIMESERIAL):
    
    train,test = TIMESERIAL[:-24*31],TIMESERIAL[-24*31:]
    n_steps = 24*31
    X, y = split_2(TIMESERIAL,n_steps)
    X_train = X
    y_train = y
    
    model = Ridge()
    model.fit(X_train, y_train)
    pred = model.predict(X_train)
    if Nlog:
        y_train = np.exp(y_train)
        pred = np.exp(pred)
    print(smape(y_train,pred))
    
    bw_pred = []
    for j in range(24*31):
        i = len(TIMESERIAL)
        seq = np.append(TIMESERIAL[i-n_steps:i:24],TIMESERIAL[i-24:i])
        seq = np.append(seq,np.array([np.mean(TIMESERIAL[i-n_steps:i:24]),
                  np.min(TIMESERIAL[i-n_steps:i:24]),
                  np.max(TIMESERIAL[i-n_steps:i:24])]
            ))
        yhat = model.predict(np.array([seq]))
        TIMESERIAL = np.append(TIMESERIAL,yhat[0])
        bw_pred.append(yhat[0])
    if Nlog:
        bw_pred = np.exp(bw_pred)
        
    return bw_pred
```

Mình train và predict cho từng ZONENAME và kết hợp 2 model lại với nhau theo tham số [0.67, 0.33]

```python
bw_pred_1 = model_1(TIMESERIAL)
bw_pred_2 = model_2(TIMESERIAL)
bw_pred = bw_pred_1*0.67 + bw_pred_2*0.33
```

### Dự đoán MAX_USER

Về MAX_USER mình không dự đoán mà chỉ lấy giá trị của ngày cuối cùng (đầy đủ 24 giá trị) làm kết quả.

```python
list_df_2 = []
for idx,name in enumerate(test_df['ZONE_CODE'].unique()):
    print(idx,name)
    t = pd.DataFrame(train_df[train_df['ZONE_CODE']==name].groupby(['UPDATE_TIME']).size(),columns = ['num_hours'])
    t2 = train_df[(train_df['ZONE_CODE']==name)&(train_df['UPDATE_TIME']==t[t['num_hours']==24].index[-1])]
    list_df_2.append(t2)
mu_df = pd.concat(list_df_2)[['ZONE_CODE','HOUR_ID','MAX_USER']] 
mu_df.head()
```


