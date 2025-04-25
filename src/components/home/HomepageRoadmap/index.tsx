import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link, { Props } from "@docusaurus/Link";
import clsx from "clsx";

// import { WHY_CLOUDBERRY_DATABASE } from "@site/src/consts/homeContent";
import LinkWithBaseUrl from "../../common/LinkWithBaseUrl";

import styles from "./styles.module.scss";

const texts = ["Roadmap dành cho bạn(Đang cập nhật)"]

function NewlineText(_texts) {
  return _texts.map((item: string) => <p><span className={styles.pulseHeart}>❤️‍🔥</span> {item}</p>);
}

export default function HomepageRoadmap() {
  return (

    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.maincontent}>
            <div className={styles.imagetitle}>
              <img 
                src={useBaseUrl("/img/home/roadmap.png")}
                alt="Roadmap Banner"
                className={styles.roadmapImage}
              />
            </div>
            <div className={styles.desc}>
              {NewlineText(texts)}
            </div>
            <div className={styles.imagedesc}>
              <img 
                src={useBaseUrl("/img/home/roadmap_3.png")}
                alt="Roadmap Banner"
                className={styles.roadmapImage}
              />
            </div>
            <Link
              className={clsx("button button--lg", styles.button)}
              to="/boost/list/data-scientist/data-scientist">
              <span>Xem roadmap</span> <span className={styles.pulseHeart}>❤️‍🔥</span>
            </Link>
        </div>
      </div>
    </div>   
  );
}