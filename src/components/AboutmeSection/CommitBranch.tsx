import type { Commit } from "../../types/Commit";
import { CommitMessage } from "./CommitMessage";
import branchBg from "../../assets/Commit Branch.png";

interface CommitBranchProps {
  commits: Commit[];
}

export const CommitBranch = ({ commits }: CommitBranchProps) => {
  const allBranches = new Set<string>();
  commits.forEach((commit) => {
    commit.branches.forEach((b: string) => {
      allBranches.add(b);
    });
  });

  const branchPositions: { [key: string]: number } = {};
  let xPosition = 16;

  Array.from(allBranches).forEach((branch) => {
    branchPositions[branch] = xPosition;
    xPosition += 24;
  });

  // 날짜를 숫자로 변환 (YYYY.MM 형식)
  const dateToNumber = (dateStr: string): number => {
    const [year, month] = dateStr.split(".").map(Number);
    return year * 100 + month;
  };

  // 각 브랜치의 최신 날짜 구하기
  const branchLatestDate: { [key: string]: number } = {};
  commits.forEach((commit) => {
    const branch = commit.branches[0];
    const date = dateToNumber(commit.date);
    if (!branchLatestDate[branch] || date > branchLatestDate[branch]) {
      branchLatestDate[branch] = date;
    }
  });

  // 정렬 로직
  const sortedCommits = [...commits].sort((a, b) => {
    const aBranch = a.branches[0];
    const bBranch = b.branches[0];
    const aDate = dateToNumber(a.date);
    const bDate = dateToNumber(b.date);

    if (aBranch === bBranch) {
      return aDate - bDate;
    }

    const aLatest = branchLatestDate[aBranch];
    const bLatest = branchLatestDate[bBranch];
    return aLatest - bLatest;
  });

  return (
    <div className="relative flex gap-6">
      <div className="relative w-90 min-h-150 shrink-0">
        <img
          src={branchBg}
          alt="branch rail"
          className="absolute inset-0 w-full h-full object-contain z-0"
        />
      </div>

      <div className="flex-1 space-y-4">
        {sortedCommits.map((commit, idx) => (
          <CommitMessage key={idx} commit={commit} />
        ))}
      </div>
    </div>
  );
};
