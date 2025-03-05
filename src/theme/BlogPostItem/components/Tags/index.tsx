import { useBlogPost } from "@docusaurus/theme-common/internal";
export default function Tags({ style }: { style?: React.CSSProperties }) {
  const {
    frontMatter: { tags },
  } = useBlogPost();

  const tag = tags.map((text) => {
    return (
      <span
        key={text.toString()}
        style={{
          marginBottom: 8,
          display: "block",
          borderRadius: 24,
          fontSize: 12,
          background: "#026992",
          color: "white",
          padding: "5px 9px",
        }}
      >
        {text.toString()}
      </span>
    );
  });
  return <div style={style}>{tag}</div>;
}
