import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import BlogPosts from "../components/home/BlogPosts";

import styles from './index.module.css';
 
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <Link
            className={clsx("button button--secondary button--lg", styles.button)}
            to="/blog">
            Cùng nhảy nào 🪇🪇!!
          </Link>
          
        </div>
        {/* <div>
          <img className='trophy'
          src='https://github-profile-trophy.vercel.app/?username=lhduc94'
          alt='duclh'
          />
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Trang chủ`}
      description="Nơi chia sẻ kiến thức về Data Science cho người mới bắt đầu cũng như những người đã đi làm về Data Science 😍">
      <HomepageHeader />
      <main>
      <BlogPosts/>
      {/* <div>
          <img className='trophy'
          src='https://github-profile-trophy.vercel.app/?username=lhduc94'
          alt='duclh'
          />
        </div> */}
      <HomepageFeatures />
      </main>
    </Layout>
  );
}
