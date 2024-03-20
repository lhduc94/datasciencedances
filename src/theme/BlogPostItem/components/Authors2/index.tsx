import { useBlogPost } from "@docusaurus/theme-common/internal";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Popper from "@site/src/components/common/Popper";
import BlogPostItemHeaderInfo from "@site/src/theme/BlogPostItem/components/Info";
import Link, {type Props as LinkProps} from '@docusaurus/Link';

function MaybeLink(props: LinkProps): JSX.Element {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}
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
    const {name, title, url, imageURL, email} = author;
    const link = url || (email && `mailto:${email}`) || undefined;
    return (
      <div >
        {imageURL && (
          <MaybeLink href={link} className="avatar__photo-link">
            <img
              className="avatar__photo"
              src={imageURL}
              alt={name}
              itemProp="image"
            />
          </MaybeLink>
        )}
  
        {name && (
          <div
            className="avatar__intro"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person">
            <div className="avatar__name">
              <MaybeLink href={link} itemProp="url">
                <span itemProp="name">{name}</span>
              </MaybeLink>
            </div>
            {title && (
              <small className="avatar__subtitle" itemProp="description">
                {title}
              </small>
            )}
          </div>
        )}
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
