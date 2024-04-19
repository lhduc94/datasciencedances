import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link, { Props } from "@docusaurus/Link";
import clsx from "clsx";

// import { WHY_CLOUDBERRY_DATABASE } from "@site/src/consts/homeContent";
import LinkWithBaseUrl from "../../common/LinkWithBaseUrl";

import styles from "./styles.module.scss";

const texts = ["Các khóa học Data Science cơ bản cho người mới bắt đầu.",
"Khóa học dựa trên các dự án thực tế.",
"Khai phá tiềm năng của các thuật toán phân tích"]

function NewlineText(_texts) {
  return _texts.map((item: string) => <p>❤️‍🔥 {item}</p>);
}

export default function HomepageCourses() {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.maincontent}>
          <div className={styles.item}>
            <div className={styles.title}>
              Đào tạo
            </div>
            <div className={styles.desc}>
              {NewlineText(texts)}
            </div>
            <Link
              className={clsx("button button--lg", styles.button)}
              to="/courses">
              Cùng học nào ❤️‍🔥!!
            </Link>
          </div>
        </div>
        <div className={styles.maintitle}>

      <div className={styles.imagecover}><a href="/courses"><img src={useBaseUrl("/img/home/image_course_7.png")}alt="" /></a></div>
      {/* <span className={styles.description}>
        <Translate>Các khóa học Data Science cho người mới bắt đầu cũng như cho các bạn đã đi làm</Translate>
      </span> */}
      </div>
      </div>
    </div>
  );
}