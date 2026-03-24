import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border-default px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <a href="/" className="text-foreground font-bold text-lg tracking-tight">
          NEXUS
        </a>
      </div>

      <div className="flex items-center gap-3">
        {/* Search hint */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-default bg-background text-muted text-sm">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>Search</span>
          <kbd className="ml-2 px-1.5 py-0.5 rounded bg-surface-raised border border-border-default text-xs font-mono">
            &#8984;K
          </kbd>
        </div>

        <ThemeToggle />

        {/* Notification bell */}
        <button className="p-2 rounded-lg hover:bg-surface-raised transition-colors text-muted">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        {/* User avatar */}
        <div className="w-8 h-8 rounded-full bg-accent-emphasis flex items-center justify-center text-white text-sm font-medium">
          U
        </div>
      </div>
    </header>
  );
}
