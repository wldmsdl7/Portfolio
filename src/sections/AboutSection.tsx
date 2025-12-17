import { CommitBranch } from "../components/AboutmeSection/CommitBranch";
import { COMMITS } from "../constants/commits";
import { sortCommitsByBranch } from "../utills/commitUtils";

const AboutSection = () => {
  const sortedCommits = sortCommitsByBranch(COMMITS);

  return (
    <section id="about" className="min-h-screen scroll p-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">About Me</h1>
        <div className="space-y-6">
          <CommitBranch commits={sortedCommits} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
