import { useBlogPost } from "@docusaurus/theme-common/internal";
// import type { Props } from "@theme/BlogPostItem";

import BlogPostItemContainer from "./Container";
import BlogPostItemContent from "./Content";
import BlogItemTitle from "./components/Title";
import BlogItemTags from "./components/Tags";
import BlogItemCover from "./components/Cover";
import BlogItemDesc from "./components/Desc";
import NewBlogPostItemAuthors from "./components/Authors2";
import BlogPostItemAuthors  from "./components/Authors";

import styles from "./styles.module.scss";

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link, { Props } from "@docusaurus/Link";

function LinkWithBaseUrl(props: Props) {
  const to = useBaseUrl(props.to);
  const href = useBaseUrl(props.href);
  let target = props.target;
  if (
    !target &&
    (props.to?.startsWith("http") || props.href?.startsWith("http"))
  ) {
    target = "_blank";
  }
  return <Link {...props} to={to} href={href} target={target}></Link>;
}

const BlogListItem = () => {
  const {
    metadata: { permalink },
  } = useBlogPost();

  return (
    <BlogPostItemContainer className={styles["blogList"]}>
      <header style={{ padding: "7px 6px" }} className="link-wrap">
        <LinkWithBaseUrl to={permalink}>
          <BlogItemCover />
          <div style={{ padding: "0 11px" }}>
            <div style={{ cursor: "pointer" }}>
              <BlogItemTags style={{ marginTop: 6, marginBottom: 17 }} />
              <BlogItemTitle />
              <BlogItemDesc style={{ marginTop: 17 }} />
            </div>

            <BlogPostItemAuthors
              styles={{ position: "absolute",  bottom:10 }}
            />
          </div>
        </LinkWithBaseUrl>
      </header>
    </BlogPostItemContainer>
  );
};
const BlogDetailItem = ({ children }) => {
  return (
    <BlogPostItemContainer className={styles["blogDetail"]}>
      <header>
        <BlogItemTitle />
        <NewBlogPostItemAuthors/>
      </header>
      <br></br>
      <br></br>
      <br></br>

      {/* only show blog detail */}
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <div className={styles.tags}>
        <span className={styles.text}>Tags:</span>
        <BlogItemTags />
      </div>
    </BlogPostItemContainer>
  );
};

export default function BlogPostItem({ children }: Props): JSX.Element {
  const { isBlogPostPage } = useBlogPost();
  const RenderComp = isBlogPostPage ? BlogDetailItem : BlogListItem;
  return <RenderComp>{children}</RenderComp>;
}
