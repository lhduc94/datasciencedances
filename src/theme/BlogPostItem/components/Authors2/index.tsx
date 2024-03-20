import { useBlogPost } from "@docusaurus/theme-common/internal";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Popper from "@site/src/components/common/Popper";
import BlogPostItemHeaderInfo from "@site/src/theme/BlogPostItem/components/Info";
export default function NewBlogPostItemHeaderAuthors({
  styles,
}: {
  styles?: React.CSSProperties;
}): JSX.Element {
  const {
    metadata: { authors, formattedDate },
    assets,
  } = useBlogPost();
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }

  const authorsDom = authors.map((author) => {
    return (
      <div>
        <span
          key={author.name}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            display: "inline-block",
            overflow: "hidden",
            boxSizing: "border-box",
            border: "1px solid var(--portrait-border-color)",
          }}
        >
          <Popper content={author.name}>
            <img
              style={{ width: 40, height: 40 }}
              src={useBaseUrl(author.imageURL)}
              srcSet={author.imageURL}
              alt=""
            />
          </Popper>
        </span>
      <span> {author.title}</span>
      </div>
    );
  });
  return (
    <div>
    <BlogPostItemHeaderInfo/>
    <div
      style={{
        color: "black",
        fontSize: 12,
        display: "flex",
        alignItems: "center",
        marginTop: 17,
        ...styles,
      }}
    >
      {/* <span>"Được viết bởi "</span> */}

      <span
        style={{
          marginRight: 23,
          marginLeft: 20,
          height: 22,
          marginBottom:20
        }}
      >
        {authorsDom}
      </span>
      {/* <span>{formattedDate}</span> */}
    </div>
    </div>
  );
}
