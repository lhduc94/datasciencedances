import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link, { Props } from "@docusaurus/Link";
import clsx from "clsx";
import Layout from '@theme/Layout';
import React, { useState } from 'react';

// import { WHY_CLOUDBERRY_DATABASE } from "@site/src/consts/homeContent";
import LinkWithBaseUrl from "@site/src/components/common/LinkWithBaseUrl";

import styles from "./styles.module.scss";


// Hàm để format tên file thành tiêu đề

let item_roadmap = [
  {
    title: "Data Scientist",
    href: "roadmap/list/data-scientist/data-scientist",
    image: "/img/home/courses.jpg",
  },
  {
    title: "Phân tích định vị thương hiệu", 
    href: "roadmap/list/phan-tich-dinh-vi-thuong-hieu/phan-tich-dinh-vi-thuong-hieu",
    image: "/img/home/courses.jpg",
  }
  // Thêm các roadmap khác ở đây
];

export default function Roadmap() {
  const itemDom = item_roadmap.map((item, i) => {
    return (
      <LinkWithBaseUrl to={item.href} key={i}>
        <div className={styles.courseCard}>
          <div className={styles.courseImage}>
            <img src={useBaseUrl(item.image)} alt={item.title} />
            {/* <div className={styles.category}>Roadmap</div> */}
          </div>
          <div className={styles.courseContent}>
            <h3 className={styles.courseTitle}>{item.title}</h3>
            <div className={styles.courseFooter}>
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
          <div className={styles.bannerContent}>
            <h1>Roadmap</h1>
            <p>Định hướng và kế hoạch học tập chi tiết</p>
          </div>
        </div>
        
        <div className={styles.coursesGrid}>
          {itemDom}
        </div>
      </div>
    </Layout>
  );
}

