import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link, { Props } from "@docusaurus/Link";
import clsx from "clsx";
import {ItemCourses} from "../../../pages/courses/index";
// import { WHY_CLOUDBERRY_DATABASE } from "@site/src/consts/homeContent";
import LinkWithBaseUrl from "../../common/LinkWithBaseUrl";

import styles from "./styles.module.scss";

const texts = ["Các khóa học Data Science cơ bản cho người mới bắt đầu.",
"Khóa học dựa trên các dự án thực tế.",
"Khai phá tiềm năng của các thuật toán phân tích"]

function NewlineText(_texts) {
  return _texts.map((item: string) => <p><span className={styles.pulseHeart}>❤️‍🔥</span> {item}</p>);
}



export default function HomepageCourses(): JSX.Element {
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
            {/* <Link
              className={clsx("button button--lg", styles.button)}
              to="/courses">
              <span>Cùng học nào</span> <span className={styles.pulseHeart}>❤️‍🔥</span>!!
            </Link> */}
          </div>
          {/* <Link 
              className={styles.imagecover}
              to="/courses">
              <img src={useBaseUrl("/img/home/image_course_8.png")}alt="" />
            </Link> */}
          <div className={styles.coursesGrid}>
          <ItemCourses></ItemCourses>
        </div>
        </div>
      </div>
    </div>   
  );
}

