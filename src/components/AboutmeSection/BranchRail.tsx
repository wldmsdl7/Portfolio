interface BranchRailProps {
  branches: string[];
  position: number;
  isBranch?: boolean;
}

export const BranchRail = ({
  branches,
  position,
  isBranch,
}: BranchRailProps) => {
  const GAP = 20;

  return (
    <div className="relative h-full w-full">
      {branches.map((branch, idx) => (
        <div
          key={idx}
          className="absolute top-2 flex flex-col items-center"
          style={{
            left: position * GAP,
          }}
        >
          {/* 노드 */}
          <div className="w-2 h-2 rounded-full bg-gray-800 z-10" />

          {/* 세로 라인 */}
          <div className="w-px h-20 bg-gray-300" />

          {/* 브랜치 시작 표시 */}
          {isBranch && <div className="w-3 h-px bg-gray-400 mt-1" />}
        </div>
      ))}
    </div>
  );
};
