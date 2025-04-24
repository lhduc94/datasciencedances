import React from 'react';
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.scss";

// import { WHY_CLOUDBERRY_DATABASE } from "@site/src/consts/homeContent";
import LinkWithBaseUrl from "../../common/LinkWithBaseUrl";

interface DocItem {
  title: string;
  description: string[];
  imagePath: string;
}

interface ButtonItem {
  buttonText: string;
  buttonLink: string;
}

const ButtonContent: ButtonItem[] = [
  {
    buttonText: "Kungfu Pandas",
    buttonLink: "/docs/kungfupandas/gioithieu",
  },
  {
    buttonText: "Toán học cho Data Scientist",
    buttonLink: "/docs/math/gioithieu",
  },
  {
    buttonText: "Thực hành phân tích dữ liệu",
    buttonLink: "/docs/thuchanh/phan-tich-dinh-vi-thuong-hieu",
  }
];

const DocContent: DocItem = {
  title: "Tài liệu kỹ thuật",
  description: [
    "Tài liệu tham khảo về Pandas cho Xử lý dữ liệu",
    "Toán học cho Data Scientist và Machine Learning Engineer",
    "Thực hành phân tích dữ liệu với các bài toán thực tế"
  ],
  imagePath: "/img/home/image_doc_4.png"
};

const StarIcon = () => <span className={styles.spinningStar}>⭐</span>;

const DescriptionList = ({ items }: { items: string[] }) => (
  <>
    {items.map((item, index) => (
      <p key={index}>
        <StarIcon /> {item}
      </p>
    ))}
  </>
);

export default function HomepageDocs(): JSX.Element {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.maincontent}>
            <div className={styles.title}>
              {DocContent.title}
            </div>
            
            <div className={styles.desc}>
              <DescriptionList items={DocContent.description} />
            </div>

            <div className={styles.buttonContainer}>
              {ButtonContent.map((button, index) => (
                <Link
                  key={index}
                  className={clsx("button button--lg", styles.button)}
                  to={button.buttonLink}
                >
                  <span>{button.buttonText}</span> <StarIcon />!!
                </Link>
              ))}
            </div>
            

        </div>
        
              <img 
                src={useBaseUrl(DocContent.imagePath)} 
                alt={DocContent.title} 
              />
      </div>
    </div>
  );
}