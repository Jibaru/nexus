import type { ActivityItem } from "../_lib/types";

const typeIcons: Record<ActivityItem["type"], React.ReactNode> = {
  comment: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  closed_issue: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  reopened_issue: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="16 12 12 8 8 12" />
      <line x1="12" y1="16" x2="12" y2="8" />
    </svg>
  ),
  comment_issue: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

const typeColors: Record<ActivityItem["type"], string> = {
  comment: "text-accent",
  closed_issue: "text-danger",
  reopened_issue: "text-success",
  comment_issue: "text-accent",
};

export default function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <div className="space-y-0 divide-y divide-border-muted">
      {items.map((item) => (
        <div key={item.id} className="flex gap-3 py-3 first:pt-0">
          <div className="mt-1 shrink-0">
            <div className="w-8 h-8 rounded-full bg-surface-raised flex items-center justify-center">
              <span className={typeColors[item.type]}>
                {typeIcons[item.type]}
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-muted">
              <span className="font-medium text-foreground">{item.author}</span>{" "}
              <span className="text-muted">@crafter-station</span>{" "}
              {item.type === "comment"
                ? "commented on"
                : item.type === "closed_issue"
                  ? "closed issue"
                  : item.type === "reopened_issue"
                    ? "reopened issue"
                    : "commented on"}
            </p>
            {item.issueNumber && (
              <p className="text-sm text-accent">#{item.issueNumber}</p>
            )}
            {item.description && (
              <p className="text-xs text-muted mt-0.5 truncate">
                {item.description}
              </p>
            )}
          </div>
          <span className="text-xs text-subtle shrink-0 mt-1">
            {item.timeAgo}
          </span>
        </div>
      ))}
    </div>
  );
}
