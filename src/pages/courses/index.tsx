import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link, { Props } from "@docusaurus/Link";
import clsx from "clsx";
import Layout from '@theme/Layout';

// import { WHY_CLOUDBERRY_DATABASE } from "@site/src/consts/homeContent";
import LinkWithBaseUrl from "@site/src/components/common/LinkWithBaseUrl";

import styles from "./styles.module.scss";

let ITEM_COURSES = [
    {
      pic: "/img/home/courses.jpg",
      href: "courses/list/time-series-analysis/time-series-analysis",
      title: "Phân tích dữ liệu chuỗi thời gian",
      desc: "Bao gồm các tài liệu và bài tập,\n Bao gồm các tài liệu và bài tập Bao gồm các tài liệu và bài tập",
    },
    {
      pic: "/img/home/courses.jpg",
      href: "/courses/list/analysis-in-practice/analysis-in-practice",
      title: "Thực hành phân tích dữ liệu",
      desc: "Bao gồm các tài liệu và bài tập",
    },
    {
      pic: "/img/home/courses.jpg",
      href: "/courses/list/ml-observation/ml-observation",
      title: "Giám sát mô hình Machine Learning",
      desc: "Bao gồm các tài liệu và bài tập",
    },
  ];
function NewlineText(text) {
    return text.split('\n').map(str => <p>{str}</p>);
  }

export default function Courses() {
  const itemDom = ITEM_COURSES.map((item, i) => {
    const style_: React.CSSProperties = {
        backgroundImage: `url(${item.pic})`,
        // Các thuộc tính khác của style
    };
    return (
      <LinkWithBaseUrl to={item.href} key={i}>
         <div className={styles.item} style={style_}>
            {/* <img className={styles.img} src={useBaseUrl(item.pic)} alt="" /> */}
            <div className={clsx(styles.title)}>{item.title}</div>
            <div className={clsx(styles.desc)}>{NewlineText(item.desc)}</div>
        </div>
      </LinkWithBaseUrl>
    );
  });
  return (
    <Layout>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div className={styles.left}>

            <div className={styles.imageleft}><a href="/courses"><img src={useBaseUrl("/img/home/image_course_4.png")}alt="" /></a></div>
            {/* <span className={styles.description}>
              <Translate>Các khóa học Data Science cho người mới bắt đầu cũng như cho các bạn đã đi làm</Translate>
            </span> */}
          </div>
          <div className={styles.right}>{itemDom}</div>
        </div>
      </div>
    </Layout>
  );
}