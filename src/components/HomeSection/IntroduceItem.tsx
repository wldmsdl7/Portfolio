import { useState, type ReactNode } from "react";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

type IntroduceItemProps = {
  title: string;
  children: ReactNode;
};

const IntroduceItem: React.FC<IntroduceItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center font-semibold text-gray-800 hover:text-blue-600"
      >
        {title}
        <span className="ml-2">
          {isOpen ? <RxTriangleUp size="25" /> : <RxTriangleDown size="25" />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 leading-relaxed">{children}</div>
      )}
    </div>
  );
};

export default IntroduceItem;
