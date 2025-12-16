type TagProps = {
  text: string;
  color?: "green" | "blue" | "red" | "yellow"; // 허용할 색상만
};

const Tag: React.FC<TagProps> = ({ text, color = "green" }) => {
  const bgClass = {
    green: "bg-green-50",
    blue: "bg-blue-50",
    red: "bg-red-50",
    yellow: "bg-yellow-50",
  }[color];

  const textClass = {
    green: "text-green-700",
    blue: "text-blue-700",
    red: "text-red-700",
    yellow: "text-yellow-700",
  }[color];

  const dotClass = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  }[color];

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${bgClass} ${textClass}`}
    >
      <span className={`w-2 h-2 rounded-full ${dotClass}`}></span>
      {text}
    </div>
  );
};

export default Tag;
