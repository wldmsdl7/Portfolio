import { BRANCH_ORDER } from "../constants/branch";
import type { Commit } from "../types/Commit";

export const normalizeBranch = (branch: string) =>
  branch.replace("origin/", "");

export const getPrimaryBranch = (branches: string[]) => {
  const normalized = branches.map(normalizeBranch);

  if (normalized.includes("main")) return "main";

  for (const branch of BRANCH_ORDER) {
    if (normalized.includes(branch)) return branch;
  }

  return normalized[0];
};

export const sortCommitsByBranch = (commits: Commit[]) => {
  return [...commits].sort((a, b) => {
    const aBranch = getPrimaryBranch(a.branches);
    const bBranch = getPrimaryBranch(b.branches);

    const aIndex = BRANCH_ORDER.indexOf(aBranch);
    const bIndex = BRANCH_ORDER.indexOf(bBranch);

    if (aIndex === bIndex) {
      return b.date.localeCompare(a.date);
    }

    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;

    return aIndex - bIndex;
  });
};
