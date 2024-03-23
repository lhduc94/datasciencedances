import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Courses from '../components/home/Courses';
import BlogPosts from "../components/home/BlogPosts";
import HomepageHeader from "../components/home/HomepageHeader";
import { useWindowSize } from "@docusaurus/theme-common";
 
export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Trang chủ`}
      description="Nơi chia sẻ kiến thức về Data Science cho người mới bắt đầu cũng như những người đã đi làm về Data Science 😍">
      <HomepageHeader />
      <Courses/>
      <BlogPosts/>
    </Layout>
  );
}
