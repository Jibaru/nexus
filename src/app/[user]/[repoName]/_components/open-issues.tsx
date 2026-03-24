import type { Issue } from "../_lib/types";

const avatarColors = [
  "bg-red-500",
  "bg-cyan-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-violet-500",
  "bg-rose-500",
  "bg-sky-500",
  "bg-lime-500",
];

export default function OpenIssues({ issues }: { issues: Issue[] }) {
  return (
    <div className="bg-surface rounded-xl border border-border-default">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border-muted">
        <h3 className="text-sm font-medium text-foreground">Open Issues</h3>
        <span className="text-xs text-accent">Newest +</span>
      </div>
      <div className="divide-y divide-border-muted">
        {issues.map((issue, i) => (
          <div
            key={issue.id}
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
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground truncate">
                  <span className="text-muted">#{issue.number}</span>{" "}
                  {issue.title}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div
                    className={`w-4 h-4 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-[8px] font-bold`}
                  >
                    {issue.author[0].toUpperCase()}
                  </div>
                  <span className="text-xs text-muted truncate">
                    {issue.author}
                  </span>
                  <span className="text-xs text-subtle">&middot;</span>
                  <span className="text-xs text-subtle">
                    {issue.createdAt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
