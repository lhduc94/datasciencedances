import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useWindowSize } from "@docusaurus/theme-common";

import styles from './index.module.css';
 
export default function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const windowSize = useWindowSize();
  let s = null;
  if (windowSize === "mobile"){
    s = styles.heroBannerMobile
  }
  else {
    s = styles.heroBanner
  }
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* <div className={clsx("hero-banner_filter", styles.banner_filter)}></div> */}
      <div className={clsx("hero-banner_image", styles.banner_image)}></div>
      <div className={clsx("hero-banner_intro",styles.banner_intro)}>
        <div className={clsx("hero-banner_title", styles.banner_title)}>
          <img 
            src="/img/dsd3-favicon.jpg" 
            alt={siteConfig.title}
            className={styles.banner_titleImage}
          />
          {/* {siteConfig.title} */}
        </div>
        <div className={clsx("hero-banner_tagline", styles.banner_tagline)}>
          {siteConfig.tagline}
        </div>
        <div>
          <Link
            className={clsx("button button--lg", styles.button)}
            to="/#homepagedoc">
            Cùng nhảy nào 🪇🪇!!
          </Link>
        </div>
      </div>
    </header>
  );
}