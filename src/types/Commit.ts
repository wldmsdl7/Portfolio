export interface Commit {
  date: string;
  title: string;
  description: string;
  branches: string[];
  color: string;
  position: number;
  isBranch?: boolean;
}
