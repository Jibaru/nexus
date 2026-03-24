import type { PullRequest } from "../_lib/types";

const avatarColors = [
  "bg-green-600",
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-yellow-600",
  "bg-red-500",
];

export default function OpenPRs({ pullRequests }: { pullRequests: PullRequest[] }) {
  return (
    <div className="bg-surface rounded-xl border border-border-default">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border-muted">
        <h3 className="text-sm font-medium text-foreground">Open PRs</h3>
        <span className="text-xs text-accent">Newest +</span>
      </div>
      <div className="divide-y divide-border-muted">
        {pullRequests.map((pr, i) => (
          <div
            key={pr.id}
            className="px-5 py-3 hover:bg-surface-raised transition-colors"
          >
            <div className="flex items-start gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-success mt-0.5 shrink-0"
              >
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                <line x1="6" y1="9" x2="6" y2="21" />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground truncate">
                  <span className="text-muted">#{pr.number}</span>{" "}
                  {pr.title}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div
                    className={`w-4 h-4 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-[8px] font-bold`}
                  >
                    {pr.author[0].toUpperCase()}
                  </div>
                  <span className="text-xs text-muted truncate">
                    {pr.author}
                  </span>
                  <span className="text-xs text-subtle">&middot;</span>
                  <span className="text-xs text-subtle">{pr.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
