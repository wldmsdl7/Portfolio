import type { ReactNode } from "react";

interface SectionHeaderProps {
  icon?: ReactNode;
  title: string;
}

export const SectionHeader = ({ icon, title }: SectionHeaderProps) => {
  return (
    <h3 className="text-gray-900 text-xl mb-4 flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
      {icon}
      {title}
    </h3>
  );
};
