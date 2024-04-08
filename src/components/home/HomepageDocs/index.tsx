import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link, { Props } from "@docusaurus/Link";
import clsx from "clsx";

// import { WHY_CLOUDBERRY_DATABASE } from "@site/src/consts/homeContent";
import LinkWithBaseUrl from "../../common/LinkWithBaseUrl";

import styles from "./styles.module.scss";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const texts = ["Các tài liệu tự viết về các thư viện Data Science", 
"Các cuốn sách tự viết về các lĩnh vực chuyên môn Data Science",
"Roadmap về Data Science"]

function NewlineText(_texts) {
    return _texts.map((item: string) => <p>⭐ {item}</p>);
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
            {NewlineText(texts)}
            </div>
            <Link
              className={clsx("button button--lg", styles.button)}
              to="/docs/kungfupandas/gioithieu">
              Cùng đọc nào ⭐!!
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imageright}><a href="/docs/kungfupandas/gioithieu"><img src={useBaseUrl("/img/home/image_doc_3.png")}alt="" /></a></div>
        </div>
      </div>
    </div>
  );
}