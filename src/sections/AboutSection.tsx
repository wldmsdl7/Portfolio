import { BranchRail } from "../components/AboutmeSection/BranchRail";
import { CommitMessage } from "../components/AboutmeSection/CommitMessage";
import { COMMITS } from "../constants/commits";

export const AboutSection = () => (
  <section id="about" className="min-h-screen scroll-mt-16 p-8">
    <div className="max-w-7xl mx-auto h-full">
      <h1 className="text-5xl font-bold mb-12">About Me</h1>
      <div className="space-y-6">
        {COMMITS.map((commit, index) => (
          <div key={index} className="flex items-start gap-6 relative">
            {/* 왼쪽: 브랜치 레일 */}
            <div className="w-28 flex justify-center relative">
              <BranchRail
                branches={commit.branches}
                position={commit.position}
                isBranch={commit.isBranch}
              />
            </div>

            {/* 오른쪽: 커밋 카드 */}
            <CommitMessage commit={commit} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
