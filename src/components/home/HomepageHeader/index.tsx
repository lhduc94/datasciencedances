import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';
 
export default function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx("hero-banner_filter", styles.banner_filter)}></div>
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
            to="/#homepageblog"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('homepageblog')?.scrollIntoView({ behavior: 'smooth' });
            }}>
            Cùng nhảy nào 🪇🪇!!
          </Link>
        </div>
      </div>
    </header>
  );
}