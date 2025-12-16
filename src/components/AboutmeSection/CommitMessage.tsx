interface Commit {
  date: string;
  title: string;
  description: string;
  branches: string[];
}

export const CommitMessage = ({ commit }: { commit: Commit }) => {
  const normalizeBranch = (branch: string) => branch.replace("origin/", "");

  const getBranchColor = (branch: string) => {
    const name = normalizeBranch(branch);
    if (name === "main") return "border-blue-500 text-blue-700 bg-blue-50";
    if (name.includes("school"))
      return "border-green-500 text-green-700 bg-green-50";
    if (name.includes("frontend"))
      return "border-red-500 text-red-700 bg-red-50";
    if (name.includes("infra"))
      return "border-yellow-500 text-yellow-700 bg-yellow-50";
    if (name.includes("homeinspector"))
      return "border-red-500 text-red-700 bg-red-50";
    if (name.includes("price"))
      return "border-yellow-600 text-yellow-800 bg-yellow-50";
    return "border-purple-500 text-purple-700 bg-purple-50";
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-5 w-full hover:border-gray-300 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-2">
        <div className="flex flex-wrap items-center gap-2">
          {/* 브랜치 배지 */}
          {commit.branches.map((branch, idx) => (
            <span
              key={idx}
              className={`inline-block text-xs px-3 py-1 rounded-full border-2 ${getBranchColor(
                branch
              )}`}
            >
              {branch}
            </span>
          ))}

          {/* 제목 */}
          <h3 className="font-semibold text-gray-800 text-lg">
            {commit.title}
          </h3>
        </div>

        {/* 날짜 */}
        <span className="text-sm text-gray-500 shrink-0">{commit.date}</span>
      </div>

      <p className="text-sm text-gray-600">{commit.description}</p>
    </div>
  );
};
