---
title: Các dạng chuẩn hóa trong cơ sở dữ liệu quan hệ
slug: 2025/06/cac-dang-chuan-hoa-trong-co-so-du-lieu-quan-he
description: Các dạng chuẩn hóa trong cơ sở dữ liệu quan hệ
authors: lhduc
tags: [Database]
level: Cơ bản
keywords: [Data Science, Database]
image: /img/blog/20241116_1_cover.jpg
hide_table_of_contents: false
draft: true
---

# Các dạng chuẩn hóa trong cơ sở dữ liệu quan hệ

## First Normal Form (1NF) – Dạng chuẩn thứ nhất

### Định nghĩa
Một bảng được coi là ở 1NF nếu:
- Tất cả các cột đều có giá trị nguyên tố (atomic value)
- Không có cột lặp hoặc tập giá trị (multi-valued attributes)
- Mỗi ô trong bảng chỉ chứa một giá trị duy nhất

### Ví dụ

#### Chưa đạt 1NF:
| StudentID | Name  | Courses        |
|-----------|-------|----------------|
| 1         | Alice | Math, Physics  |
| 2         | Bob   | Chemistry      |

Vi phạm 1NF: Cột "Courses" có nhiều giá trị (Math, Physics)

#### Sau khi chuẩn hóa (đạt 1NF):
| StudentID | Name  | Course    |
|-----------|-------|-----------|
| 1         | Alice | Math      |
| 1         | Alice | Physics   |
| 2         | Bob   | Chemistry |

## Second Normal Form (2NF) – Dạng chuẩn thứ hai

### Định nghĩa
Một bảng được coi là ở 2NF nếu:
- Nó đã ở 1NF
- Không có phụ thuộc từng phần (partial dependency) của thuộc tính không khóa với khóa chính

> **Lưu ý**: Phụ thuộc từng phần xảy ra khi một thuộc tính không khóa phụ thuộc chỉ một phần của khóa chính (áp dụng khi khóa chính là tổ hợp nhiều cột)

### Ví dụ

#### Vi phạm 2NF:
| StudentID | CourseID | CourseName | Grade |
|-----------|----------|------------|-------|
| 1         | C101     | Math       | A     |
| 1         | C102     | Physics    | B     |

- Khóa chính: (StudentID, CourseID)
- Vấn đề: CourseName chỉ phụ thuộc vào CourseID, không phụ thuộc StudentID

#### Sau khi chuẩn hóa (đạt 2NF):

**Bảng 1: Enrollment**
| StudentID | CourseID | Grade |
|-----------|----------|-------|
| 1         | C101     | A     |
| 1         | C102     | B     |

**Bảng 2: Courses**
| CourseID | CourseName |
|----------|------------|
| C101     | Math       |
| C102     | Physics    |

## Third Normal Form (3NF) – Dạng chuẩn thứ ba

### Định nghĩa
Một bảng được coi là ở 3NF nếu:
- Nó đã ở 2NF
- Không có phụ thuộc bắc cầu (transitive dependency): tức là không có thuộc tính không khóa phụ thuộc vào thuộc tính không khóa khác

> **Lưu ý**: Phụ thuộc bắc cầu: Nếu A → B và B → C thì A → C là phụ thuộc bắc cầu

### Ví dụ

#### Vi phạm 3NF:
| StudentID | Name  | DepartmentID | DepartmentName |
|-----------|-------|--------------|----------------|
| 1         | Alice | D01          | Computer Sci   |
| 2         | Bob   | D02          | Physics        |

- Vấn đề: DepartmentName phụ thuộc vào DepartmentID, không phụ thuộc trực tiếp vào StudentID

#### Sau khi chuẩn hóa (đạt 3NF):

**Bảng 1: Students**
| StudentID | Name  | DepartmentID |
|-----------|-------|--------------|
| 1         | Alice | D01          |
| 2         | Bob   | D02          |

**Bảng 2: Departments**
| DepartmentID | DepartmentName |
|--------------|----------------|
| D01          | Computer Sci   |
| D02          | Physics        |

## Tổng kết

| Dạng chuẩn | Yêu cầu |
|------------|---------|
| 1NF | Không có tập giá trị lặp, giá trị phải nguyên tố |
| 2NF | 1NF + Không có phụ thuộc từng phần của khóa chính |
| 3NF | 2NF + Không có phụ thuộc bắc cầu giữa thuộc tính không khóa |