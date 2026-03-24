export interface Contributor {
  username: string;
  avatarUrl: string;
}

export interface CommitInfo {
  message: string;
  author: string;
  authorAvatar: string;
  timeAgo: string;
  hash: string;
}

export interface RepoData {
  owner: string;
  name: string;
  description: string;
  visibility: "public" | "private";
  language: string;
  languageColor: string;
  license: string;
  defaultBranch: string;
  lastPush: string;
  size: string;
  homepage: string;
  stars: number;
  forks: number;
  watchers: number;
  openPRs: number;
  openIssues: number;
  topics: string[];
  latestCommit: CommitInfo;
  contributors: Contributor[];
  totalContributors: number;
}

export interface PullRequest {
  id: number;
  title: string;
  number: number;
  author: string;
  authorAvatar: string;
  createdAt: string;
}

export interface Issue {
  id: number;
  title: string;
  number: number;
  author: string;
  authorAvatar: string;
  createdAt: string;
}

export interface ActivityItem {
  id: number;
  type: "comment" | "closed_issue" | "reopened_issue" | "comment_issue";
  title: string;
  description: string;
  author: string;
  authorAvatar: string;
  timeAgo: string;
  issueNumber?: number;
}

export interface Tab {
  name: string;
  count?: number;
  active?: boolean;
}
