import { useBlogPost } from "@docusaurus/theme-common/internal";

export default function Level({ style }: { style?: React.CSSProperties }) {
  const {
    frontMatter: { level },
  } = useBlogPost();

  const defaultLevel = "Cơ bản";
  
  const getLevelColor = (level: string) => {
    const lowerLevel = level.toLowerCase();
    switch (lowerLevel) {
      case "trung cấp":
        return "#F1A23C";
      case "nâng cao":
        return "#E94F37";
      default: // Cơ bản
        return "#5CB338";
    }
  };

  const currentLevel = level?.toString() || defaultLevel;
  
  return (
    <div style={style}>
      <span
        style={{
          borderRadius: 24,
          fontSize: 12,
          background: getLevelColor(currentLevel),
          color: "white",
          padding: "5px 9px",
        }}
      >
        {currentLevel}
      </span>
    </div>
  );
}