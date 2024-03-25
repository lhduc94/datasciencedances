import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageCourses from '../components/home/HomepageCourses';
import HomepageDocs from '../components/home/HomepageDocs';
import HomepageBlogPosts from "../components/home/HomepageBlogPosts";
import HomepageHeader from "../components/home/HomepageHeader";
import { useWindowSize } from "@docusaurus/theme-common";
 
export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Trang chủ`}
      description="Nơi chia sẻ kiến thức về Data Science cho người mới bắt đầu cũng như những người đã đi làm về Data Science 😍">
      <HomepageHeader />
      <HomepageCourses/>
      <HomepageDocs/>
      <HomepageBlogPosts/>
    </Layout>
  );
}
