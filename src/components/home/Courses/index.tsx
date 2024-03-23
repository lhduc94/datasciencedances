import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link, { Props } from "@docusaurus/Link";
import clsx from "clsx";

// import { WHY_CLOUDBERRY_DATABASE } from "@site/src/consts/homeContent";
import LinkWithBaseUrl from "../../common/LinkWithBaseUrl";

import styles from "./styles.module.scss";

let ITEM_COURSES = [
    {
      pic: "/img/home/courses.jpg",
      href: "courses/time-series-analysis",
      title: "Phân tích dữ liệu chuỗi thời gian",
      desc: "Bao gồm các tài liệu và bài tập,\n Bao gồm các tài liệu và bài tập Bao gồm các tài liệu và bài tập",
    },
    {
      pic: "/img/home/courses.jpg",
      href: "/courses/evaluation-metrics",
      title: "Đánh giá hiệu suất mô hình",
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
         <div className={styles.item} style={style_} >
            {/* <img className={styles.img} src={useBaseUrl(item.pic)} alt="" /> */}
            <div className={clsx(styles.title)}>{item.title}</div>
            <div className={clsx(styles.desc)}>{NewlineText(item.desc)}</div>
        </div>
      </LinkWithBaseUrl>
    );
  });
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.left}>
          {/* <img src={useBaseUrl("/img/home/light-mode.jpg")} alt="" /> */}
          <span className={styles.text}>
            <Translate>Khóa học</Translate>
          </span>
        </div>
        <div className={styles.right}>{itemDom}</div>
      </div>
    </div>
  );
}