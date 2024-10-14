---
sidebar_label: Phân loại dữ liệu text với Deberta Sequence Classification
---
#  Phân loại dữ liệu text với Deberta Sequence Classification

**Bước 1: Cài đặt các thư viện cần thiết**

Nếu bạn chưa cài đặt các thư viện, hãy cài đặt chúng bằng các lệnh sau:

```bash
pip install transformers[torch]
pip install torch
pip install datasets
```

**Bước 2: Chuẩn bị dữ liệu**

Trong ví dụ này, chúng ta dùng dữ liệu imdb

```python
# Load dataset
dataset = load_dataset("imdb")
```

Ở đây mình dùng dữ liệu nhỏ nên lấy mẫu

```python
# Lấy mẫu
train_dataset_small = dataset['train'].train_test_split(test_size=0.01)['test']
eval_dataset_small = dataset['test'].train_test_split(test_size=0.01)['test']
```

**Bước 3: Tạo tokenizer**

Bạn có thể sử dụng `DebertaTokenizer` riêng cho mô hình Deberta, hoặc có thể sử dụng `AutoTokenizer`, Tải về và lưu lại tại `cache_dir`

```python
tokenizer = DebertaTokenizer.from_pretrained('microsoft/deberta-base',cache_dir='D:/Vendors/huggingface/hub/')
# tokenizer = DebertaTokenizer.from_pretrained('microsoft/deberta-base',cache_dir='D:/Vendors/huggingface/hub/')
```

Tạo hàm tokenize, trong ví dụ dưới đây xử lý dữ liệu tại trường `text`

```python
# Tokenize data
def tokenize_function(examples):
    return tokenizer(examples['text'], padding="max_length", truncation=True, max_length=1024)
```

**Bước 4: Tạo train eval dưới tokenizer**

```python

# Tạo dataset train eval
tokenized_train_dataset = train_dataset_small.map(tokenize_function, batched=True)
tokenized_eval_dataset = eval_dataset_small.map(tokenize_function, batched=True)

# Thay đổi tên cột và format
tokenized_train_dataset = tokenized_train_dataset.rename_column("label", "labels")
tokenized_train_dataset.set_format("torch", columns=["input_ids", "attention_mask", "labels"])

tokenized_eval_dataset = tokenized_eval_dataset.rename_column("label", "labels")
tokenized_eval_dataset.set_format("torch", columns=["input_ids", "attention_mask", "labels"])
```

**Bước 5: tạo Model**

Trong ví dụ này, chúng ta chỉ sử dụng model mẫu nên chỉ cần tải về. Chúng ta có thể dùng `DebertaForSequenceClassification` hoặc `AutoModelForSequenceClassification`
Với `num_labels=2`

```python
model = DebertaForSequenceClassification.from_pretrained('microsoft/deberta-base', num_labels=2,cache_dir='D:/Vendors/huggingface/hub/')
# model = AutoModelForSequenceClassification.from_pretrained('microsoft/deberta-base', num_labels=2,cache_dir='D:/Vendors/huggingface/hub/')
```


**Bước 5: Huấn luyện mô hình**

Tạo Training Arguments

```python
training_args = TrainingArguments(
    output_dir="./results",
    fp16=True,
    eval_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=4,
    per_device_eval_batch_size=8,
    num_train_epochs=3,
    weight_decay=0.01,
)

```

Tạo data_collator để đảm bảo các batch của dữ liệu luôn được điền padding

```python
data_collator = DataCollatorWithPadding(tokenizer)
```

Huấn luyện mô hình

Nếu bạn muốn định nghĩa thêm metrics đánh giá thì tạo thêm function `compute_metrics`

```python
# Define Trainer
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_train_dataset,
    eval_dataset=tokenized_eval_dataset,
    tokenizer=tokenizer,
    data_collator=data_collator,
    #compute_metrics=compute_metrics
)

# Train the model
trainer.train()
```