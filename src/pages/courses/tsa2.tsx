import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index2.module.css';

const config = {
  title:"Phân tích dữ liệu chuỗi thời gian",
  tagline: "ABC"
}


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {config.title}
        </Heading>
        <p className="hero__subtitle">{config.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Khóa học`}
      description="Điệu Tango">
      <HomepageHeader />
      <main>
        <p> Chi tiết khóa học</p>
      </main>
    </Layout>
  );
}
