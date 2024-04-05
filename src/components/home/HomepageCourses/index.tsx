import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link, { Props } from "@docusaurus/Link";
import clsx from "clsx";

// import { WHY_CLOUDBERRY_DATABASE } from "@site/src/consts/homeContent";
import LinkWithBaseUrl from "../../common/LinkWithBaseUrl";

import styles from "./styles.module.scss";

function NewlineText(text) {
    return text.split('\n').map(str => <p>❤️‍🔥 {str}</p>);
  }

export default function HomepageCourses() {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.left}>

          <div className={styles.imageleft}><a href="/courses"><img src={useBaseUrl("/img/home/image_course_5.png")}alt="" /></a></div>
          {/* <span className={styles.description}>
            <Translate>Các khóa học Data Science cho người mới bắt đầu cũng như cho các bạn đã đi làm</Translate>
          </span> */}
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <div className={styles.title}>
              Đào tạo
            </div>
            <div className={styles.desc}>
              {NewlineText("Các khóa học Data Science cơ bản cho người mới bắt đầu.\nKhóa học dựa trên các dự án thực tế.\nKhai phá tiềm năng của các thuật toán phân tích thay vì Machine Learning")}
            </div>
            <Link
              className={clsx("button button--lg", styles.button)}
              to="/courses">
              Cùng học nào🪇🪇!!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}