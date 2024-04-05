import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link, { Props } from "@docusaurus/Link";
import clsx from "clsx";

// import { WHY_CLOUDBERRY_DATABASE } from "@site/src/consts/homeContent";
import LinkWithBaseUrl from "../../common/LinkWithBaseUrl";

import styles from "./styles.module.scss";

function NewlineText(text) {
    return text.split('\n').map(str => <p>🔥 {str}</p>);
  }

export default function HomepageDocs() {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.item}>
            <div className={styles.title}>
              Tài liệu kỹ thuật
            </div>
            <div className={styles.desc}>
            {NewlineText("Các tài liệu tự viết về các thư viện Data Science\nCác cuốn sách tự viết về các lĩnh vực chuyên môn Data Science\nRoadmap về Data Science")}
            </div>
            <Link
              className={clsx("button button--lg", styles.button)}
              to="/docs/kungfupandas/gioithieu">
              Cùng đọc nào🪇🪇!!
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imageright}><a href="/docs/kungfupandas/gioithieu"><img src={useBaseUrl("/img/home/image_doc_2.png")}alt="" /></a></div>
        </div>
      </div>
    </div>
  );
}