---
title: Poetry
slug: Poetry
description: Poetry
authors: lhduc
tags: [Data Science, Draft]
keywords: [poetry, python package]
image: /img/blog/20241116_1_cover.jpg
hide_table_of_contents: false
draft: true
---

Hướng dẫn cài đặt 
Với window

```bash
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py 
```
Nếu bạn đã cài đặt python, thay chữ `py` thành `python`

## Các bước cơ bản

### Tạo dự án

ví dụ tạo dự án mới với tên `poetry-demo`

```bash
poetry new poetry-demo
```

Nó sẽ tạo ra project `poetry-demo` với cấu trúc sau

```bash
poetry-demo
├── pyproject.toml
├── README.md
├── poetry_demo
│   └── __init__.py
└── tests
    └── __init__.py
```

File `pyproject.toml` sẽ mô tả dự án và các thư viện.

```bash
[tool.poetry]
name = "poetry-demo"
version = "0.1.0"
description = ""
authors = ["duclh5@f88.vn"]
readme = "README.md"

[tool.poetry.dependencies]
python = "^3.12"


[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"

```

Phần `[tool.poetry]` mô tả về dự án. Để khai báo các thư viện hoặc version python, chúng ta khai báo vào phần `[tool.poetry.depedencies]`

Ví dụ ở đây mình đang dùng python 3.12

```bash
[tool.poetry.dependencies]
python = "^3.12"
```