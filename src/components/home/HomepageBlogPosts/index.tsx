import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useGetNewBlogList from "@site/src/hooks/useGetNewBlogList";
import clsx from "clsx";
import LinkWithBaseUrl from "../../common/LinkWithBaseUrl";
import styles from "./styles.module.scss";
import BlogPostItemHeaderAuthors  from "@theme/BlogPostItem/Header/Authors"
import Link, { Props } from "@docusaurus/Link";

interface Author {
  name: string;
  imageURL: string;
}
function singleAuthor(author: Author, date: string) {
  return (
    <div className={clsx(styles.author, styles.singleAuthor)}>
      <div className={styles.nameLogo}>
        <img
          className={styles.portrait}
          src={useBaseUrl(author.imageURL)}
          alt=""
        />
        <span className="name">{author.name}</span>
      </div>
      {/* <div className="date">{date}</div> */}
    </div>
  );
}
function multipleAuthor(author: Author[], date: string) {
  return (
    <div className={clsx(styles.author, styles.multipleAuthor)}>
      <div className={styles.info}>
        <div className={styles.nameLogo}>
          {author.map((item, i) => (
            <div key={i} className={styles.authorItem}>
              <img
                className={styles.portrait}
                src={useBaseUrl(item.imageURL)}
                alt=""
              />
              <span className="name">
                {item.name}
                {i < author.length - 1 ? ', ' : ''}
              </span>
            </div>
          ))}
        </div>
        {/* <div className={styles.date}>{date}</div> */}
      </div>
    </div>
  );
}

export default function HomepageBlogPosts() {
  const itemDom = useGetNewBlogList(4).map((item, i) => {
    return (
      <LinkWithBaseUrl to={item.href} key={i}>
        <div className={styles.item}>
         <div className={clsx(styles.image)}><img src={item.image}/></div>
          <div className={clsx(styles.title)}>{item.title}</div>
          {item.authors.length === 1
            ? singleAuthor(item.authors[0], item.date)
            : multipleAuthor(item.authors, item.date)}
          {/* <BlogPostItemHeaderAuthors/> */}
        </div>
      </LinkWithBaseUrl>
    );
  });
  return (
    <div className={styles.wrap}>
      <div className={styles.gTitle}>
        Bài viết mới nhất <span className={styles.fireEmoji}>🔥🔥</span>
      </div>
      <div className={clsx(styles.listWrap, "link-wrap")}>{itemDom}</div>

    </div>
    
  );
}
