import Layout from '@theme/Layout';
import HomepageBlogPosts from "../components/home/HomepageBlogPosts";
import HomepageHeader from "../components/home/HomepageHeader";
import HomepageAboutme from '../components/home/HomepageAboutme';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Trang chủ`}
      description="Nơi chia sẻ kiến thức về Data Science cho người mới bắt đầu cũng như những người đã đi làm về Data Science 😍">
      <HomepageHeader />
      <div id="homepageblog"><HomepageBlogPosts/></div>
      <HomepageAboutme />
    </Layout>
  );
}
