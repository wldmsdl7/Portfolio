interface IsPublicCardProps {
  isPublic: boolean;
}

export const IsPublicCard = ({ isPublic }: IsPublicCardProps) => {
  const bgColor = isPublic ? "bg-green-100" : "bg-gray-200";
  const textColor = isPublic ? "text-green-700" : "text-gray-500";
  const text = isPublic ? "Public" : "Private";

  return (
    <span
      className={`px-2 py-0.5 text-xs ${bgColor} ${textColor} rounded border ${
        isPublic ? "border-green-200" : "border-gray-300"
      }`}
    >
      {text}
    </span>
  );
};
