import { mockRepoData } from "../_lib/mock-data";

function formatNumber(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return n.toString();
}

const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-yellow-500",
  "bg-teal-500",
  "bg-red-500",
  "bg-indigo-500",
  "bg-cyan-500",
  "bg-emerald-500",
  "bg-rose-500",
];

export default function Sidebar({
  user,
  repoName,
}: {
  user: string;
  repoName: string;
}) {
  const repo = mockRepoData;

  return (
    <div className="space-y-6">
      {/* Repo avatar + name */}
      <div className="space-y-3">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          >
            <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
          </svg>
        </div>
        <div>
          <h1 className="text-lg">
            <span className="text-muted">{user}</span>
            <span className="text-muted mx-1">/</span>
            <span className="font-semibold text-foreground">{repoName}</span>
          </h1>
          <p className="text-sm text-muted mt-1">{repo.description}</p>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-border-default text-xs text-muted">
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
          </svg>
          Public
        </span>
      </div>

      {/* Latest commit */}
      <div className="space-y-1">
        <p className="text-xs text-subtle uppercase tracking-wider font-medium">
          Latest Commit
        </p>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
            {repo.latestCommit.author[0].toUpperCase()}
          </div>
          <span className="text-foreground truncate">
            {repo.latestCommit.message}
          </span>
        </div>
        <p className="text-xs text-subtle ml-7">
          {repo.latestCommit.author} &middot; {repo.latestCommit.timeAgo}
        </p>
      </div>

      {/* Topics */}
      <div className="flex flex-wrap gap-1.5">
        {repo.topics.map((topic) => (
          <span
            key={topic}
            className="px-2.5 py-0.5 rounded-full bg-accent-emphasis/15 text-accent text-xs font-medium hover:bg-accent-emphasis/25 transition-colors cursor-pointer"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="space-y-2">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border-default bg-surface-raised hover:bg-surface text-sm font-medium transition-colors">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-warning"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>Starred</span>
          <span className="text-muted">{formatNumber(repo.stars)}</span>
        </button>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border-default bg-surface-raised hover:bg-surface text-sm transition-colors">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <polyline points="13 2 13 9 20 9" />
          </svg>
          Go to file
        </button>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border-default bg-surface-raised hover:bg-surface text-sm transition-colors">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Open on GitHub
        </button>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border-default bg-surface-raised hover:bg-surface text-sm transition-colors">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="6" r="3" />
            <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
            <path d="M12 12v3" />
          </svg>
          Fork
        </button>
      </div>

      {/* Info section */}
      <div className="space-y-3 text-sm border-t border-border-default pt-4">
        <p className="text-xs text-subtle uppercase tracking-wider font-medium">
          Info
        </p>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-muted">Language</span>
            <span className="flex items-center gap-1.5">
              <span
                className="w-3 h-3 rounded-full inline-block"
                style={{ backgroundColor: repo.languageColor }}
              />
              {repo.language}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted">License</span>
            <span>{repo.license}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted">Branch</span>
            <span className="font-mono text-xs bg-surface-raised px-2 py-0.5 rounded">
              {repo.defaultBranch}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted">Last push</span>
            <span>{repo.lastPush}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted">Size</span>
            <span>{repo.size}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted">Homepage</span>
            <span className="text-accent">{repo.homepage}</span>
          </div>
        </div>
      </div>

      {/* Contributors */}
      <div className="space-y-3 border-t border-border-default pt-4">
        <p className="text-xs text-subtle uppercase tracking-wider font-medium">
          Contributors{" "}
          <span className="text-muted">{repo.totalContributors}</span>
        </p>
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {repo.contributors.slice(0, 10).map((contributor, i) => (
              <div
                key={contributor.username}
                className={`w-7 h-7 rounded-full ${colors[i % colors.length]} ring-2 ring-background flex items-center justify-center text-white text-[10px] font-bold`}
                title={contributor.username}
              >
                {contributor.username.charAt(contributor.username.length - 1)}
              </div>
            ))}
          </div>
          <span className="ml-2 text-xs text-muted">
            +{repo.totalContributors - 10}
          </span>
        </div>
      </div>
    </div>
  );
}
