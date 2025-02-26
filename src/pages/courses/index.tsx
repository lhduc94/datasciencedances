import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link, { Props } from "@docusaurus/Link";
import clsx from "clsx";
import Layout from '@theme/Layout';
import React, { useState } from 'react';

// import { WHY_CLOUDBERRY_DATABASE } from "@site/src/consts/homeContent";
import LinkWithBaseUrl from "@site/src/components/common/LinkWithBaseUrl";

import styles from "./styles.module.scss";

let ITEM_COURSES = [
    {
      pic: "/img/home/courses.jpg",
      href: "courses/list/time-series-analysis/time-series-analysis",
      title: "Phân tích dữ liệu chuỗi thời gian",
      desc: "Khám phá sức mạnh của phân tích chuỗi thời gian từ cơ bản đến nâng cao: \n" +
            "• Nắm vững các khái niệm nền tảng và thành phần của chuỗi thời gian \n" +
            "• Phân tích tính dừng và kỹ thuật làm mịn dữ liệu \n" +
            "• Thực hành với các mô hình dự báo hiện đại (AR, MA, ARMA, ARIMA) \n" +
            "• Khám phá mối tương quan trong dữ liệu chuỗi thời gian đa biến \n" +
            "• Ứng dụng mô hình phương sai có điều kiện trong thực tế",
      category: "Data Analysis",
      duration: "7 Buổi",
    },
    {
      pic: "/img/home/courses.jpg",
      href: "/courses/list/analysis-in-practice/analysis-in-practice",
      title: "Thực hành phân tích dữ liệu",
      desc: "Bao gồm các tài liệu và bài tập",
      category: "Data Analysis",
      duration: "11 Buổi",
    },
    {
      pic: "/img/home/courses.jpg",
      href: "/courses/list/ml-observation/ml-observation",
      title: "Giám sát mô hình Machine Learning",
      desc: "Bao gồm các tài liệu và bài tập",
      category: "Machine Learning",
      duration: "6 Buổi",
    },
  ];

// Sửa hàm NewlineText thành component React
function NewlineText({ text }) {
  return text.split('\n').map((str, index) => <p key={index}>{str}</p>);
}

export default function Courses() {
  // Xóa state và logic filter
  // const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Sử dụng trực tiếp ITEM_COURSES thay vì filtered courses
  const itemDom = ITEM_COURSES.map((item, i) => {
    return (
      <LinkWithBaseUrl to={item.href} key={i}>
        <div className={styles.courseCard}>
          <div className={styles.courseImage}>
            <img src={useBaseUrl(item.pic)} alt={item.title} />
            <div className={styles.category}>{item.category}</div>
          </div>
          <div className={styles.courseContent}>
            <h3 className={styles.courseTitle}>{item.title}</h3>
            <div className={styles.courseDesc}>
              <NewlineText text={item.desc} />
            </div>
            <div className={styles.courseFooter}>
              <span className={clsx(styles.duration, styles.durationHighlight)}>
                <i className="fas fa-clock"></i> {item.duration}
              </span>
              <button className={styles.enrollButton}>Xem chi tiết</button>
            </div>
          </div>
        </div>
      </LinkWithBaseUrl>
    );
  });

  return (
    <Layout>
      <div className={styles.coursesContainer}>
        <div className={styles.coursesBanner}>
          <h1>Khóa học Data Science</h1>
          <p>Nâng cao kỹ năng với các khóa học chất lượng cao</p>
        </div>
        
        {/* Xóa phần categoryFilter */}
        
        <div className={styles.coursesGrid}>
          {itemDom}
        </div>
      </div>
    </Layout>
  );
}