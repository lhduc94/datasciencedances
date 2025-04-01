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
      pic: "/img/courses/time-series-analysis.jpg",
      href: "courses/list/time-series-analysis/time-series-analysis",
      title: "Phân tích dữ liệu chuỗi thời gian",
      desc: "Khám phá sức mạnh của phân tích chuỗi thời gian từ cơ bản đến nâng cao",
      category: "Data Analysis",
      duration: "7 Buổi",
      status: "not open"
    },
    {
      pic: "/img/courses/analysis-in-practice.jpg",
      href: "/courses/list/analysis-in-practice/analysis-in-practice",
      title: "Thực hành phân tích dữ liệu",
      desc: "Bao gồm các tài liệu và bài tập",
      category: "Data Analysis",
      duration: "11 Buổi",
      status: "not open"
    },
    {
      pic: "/img/courses/ml-observation.jpg",
      href: "/courses/list/ml-observation/ml-observation",
      title: "Giám sát mô hình Machine Learning",
      desc: "Bao gồm các tài liệu và bài tập",
      category: "Machine Learning",
      duration: "6 Buổi", 
      status: "not open"
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
            <div className={clsx(styles.status, 
              item.status === 'open' ? styles.statusOpen : styles.statusNotOpen)}>
              {item.status === 'open' ? 'Đang mở' : 'Chưa mở'}
            </div>
          </div>
          <div className={styles.courseContent}>
            <h3 className={styles.courseTitle}>{item.title}</h3>
            <div className={styles.courseDesc}>
              <NewlineText text={item.desc} />
            </div>
            <div className={styles.courseFooter}>
              <div className={styles.courseInfo}>
                <span className={styles.durationHighlight}>
                  <i className="fas fa-clock"></i> {item.duration}
                </span>
              </div>
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