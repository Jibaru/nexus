import type {
  RepoData,
  PullRequest,
  Issue,
  ActivityItem,
  Tab,
} from "./types";

export const mockRepoData: RepoData = {
  owner: "crafter-station",
  name: "crafter-station",
  description:
    "Just ship it",
  visibility: "public",
  language: "TypeScript",
  languageColor: "#3178c6",
  license: "MIT",
  defaultBranch: "canary",
  lastPush: "3h ago",
  size: "100 MB",
  homepage: "crafterstation.com",
  stars: 26300,
  forks: 2300,
  watchers: 35,
  openPRs: 355,
  openIssues: 297,
  topics: ["ai", "ship", "railly", "typescript", "nextjs"],
  latestCommit: {
    message: "fix(stripe): inject metadata to sch...",
    author: "bytaesu",
    authorAvatar: "",
    timeAgo: "5h ago",
    hash: "a1b2c3d",
  },
  contributors: Array.from({ length: 12 }, (_, i) => ({
    username: `contributor-${i + 1}`,
    avatarUrl: "",
  })),
  totalContributors: 480,
};

export const mockPullRequests: PullRequest[] = [
  {
    id: 1,
    title: "feat(stripe): track subscription schedule ID ...",
    number: 8070,
    author: "bytaesu",
    authorAvatar: "",
    createdAt: "Feb 19",
  },
  {
    id: 2,
    title: "fix(security): prevent account enumeration ...",
    number: 8068,
    author: "Oluwatobi-Mustapha",
    authorAvatar: "",
    createdAt: "Feb 19",
  },
  {
    id: 3,
    title: "fix(security): prevent OTP reuse via race co...",
    number: 8067,
    author: "Oluwatobi-Mustapha",
    authorAvatar: "",
    createdAt: "Feb 19",
  },
  {
    id: 4,
    title: "fix(organization): 'hasPermission' silent ret...",
    number: 8065,
    author: "himself65",
    authorAvatar: "",
    createdAt: "Feb 19",
  },
  {
    id: 5,
    title: "v1.4.x",
    number: 8047,
    author: "himself65",
    authorAvatar: "",
    createdAt: "Feb 18",
  },
  {
    id: 6,
    title: "refactor(admin): allow flexible admin imper...",
    number: 8045,
    author: "jslno",
    authorAvatar: "",
    createdAt: "Feb 18",
  },
  {
    id: 7,
    title: "feat(core): add experimental opentelemetr...",
    number: 8027,
    author: "jonathansamines",
    authorAvatar: "",
    createdAt: "Feb 17",
  },
  {
    id: 8,
    title: "chore: use library v2",
    number: 8021,
    author: "himself65",
    authorAvatar: "",
    createdAt: "Feb 17",
  },
];

export const mockIssues: Issue[] = [
  {
    id: 1,
    title: "SvelteKit build fails based on environment v...",
    number: 8061,
    author: "rosano",
    authorAvatar: "",
    createdAt: "Feb 18",
  },
  {
    id: 2,
    title: "[BUG] multi-session: listDeviceSessions() d...",
    number: 8060,
    author: "tahultumma-jnext",
    authorAvatar: "",
    createdAt: "Feb 18",
  },
  {
    id: 3,
    title: "Session token is not set in cookies for Tans...",
    number: 8059,
    author: "harshtalks",
    authorAvatar: "",
    createdAt: "Feb 18",
  },
  {
    id: 4,
    title: "emailOtp + changeEmail: sendVerificationO...",
    number: 8043,
    author: "hartbit",
    authorAvatar: "",
    createdAt: "Feb 18",
  },
  {
    id: 5,
    title: "feat(oauth-provider): Implement RFC 8693 ...",
    number: 8023,
    author: "AndreaJ-Vasquez2",
    authorAvatar: "",
    createdAt: "Feb 17",
  },
  {
    id: 6,
    title: "node adapter re-serializes pre-parsed req...",
    number: 8017,
    author: "lkeeHood",
    authorAvatar: "",
    createdAt: "Feb 16",
  },
  {
    id: 7,
    title: "enabledPaths option or typed disabledPath...",
    number: 8015,
    author: "ap-gun",
    authorAvatar: "",
    createdAt: "Feb 16",
  },
  {
    id: 8,
    title: "generateOpenAPISchema emits $schema a...",
    number: 8014,
    author: "lipenvs",
    authorAvatar: "",
    createdAt: "Feb 16",
  },
];

export const mockActivityFeed: ActivityItem[] = [
  {
    id: 1,
    type: "comment",
    title: "ping-maxwell @crafter-station commented on",
    description: "feat: support drizzle relations v2",
    author: "ping-maxwell",
    authorAvatar: "",
    timeAgo: "7h ago",
    issueNumber: 6913,
  },
  {
    id: 2,
    type: "closed_issue",
    title: "ping-maxwell @crafter-station closed issue",
    description: "Raise APIError messages with codes, not j...",
    author: "ping-maxwell",
    authorAvatar: "",
    timeAgo: "4dh ago",
    issueNumber: 3269,
  },
  {
    id: 3,
    type: "comment_issue",
    title: "ping-maxwell @crafter-station commented on",
    description: "Raise APIError messages with codes, not j...",
    author: "ping-maxwell",
    authorAvatar: "",
    timeAgo: "4dh ago",
    issueNumber: 3269,
  },
  {
    id: 4,
    type: "reopened_issue",
    title: "ping-maxwell @crafter-station reopened issue",
    description: "Raise APIError messages with codes, not j...",
    author: "ping-maxwell",
    authorAvatar: "",
    timeAgo: "4dh ago",
    issueNumber: 3269,
  },
  {
    id: 5,
    type: "comment",
    title: "ping-maxwell @crafter-station commented on",
    description: "",
    author: "ping-maxwell",
    authorAvatar: "",
    timeAgo: "1h ago",
    issueNumber: 2446,
  },
];

export const mockTabs: Tab[] = [
  { name: "Overview", active: true },
  { name: "Code" },
  { name: "Commits" },
  { name: "PRs", count: 355 },
  { name: "Issues", count: 297 },
  { name: "Prompts", count: 4 },
  { name: "People" },
  { name: "Actions" },
  { name: "Security" },
  { name: "Activity" },
  { name: "Insights" },
  { name: "Settings" },
];

// Generate heatmap data: 7 rows (days) x 16 columns (weeks)
// Values 0-4 representing activity intensity
export const mockHeatmapData: number[][] = Array.from({ length: 16 }, () =>
  Array.from({ length: 7 }, () => {
    const rand = Math.random();
    if (rand < 0.2) return 0;
    if (rand < 0.4) return 1;
    if (rand < 0.6) return 2;
    if (rand < 0.8) return 3;
    return 4;
  })
);

export const mockHighlightedActivity = {
  number: 2446,
  title: "API Key owned by Organization",
  author: "anaclumos",
  type: "issue" as const,
  comments: 19,
};
