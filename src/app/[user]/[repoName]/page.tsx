import {
  mockRepoData,
  mockPullRequests,
  mockIssues,
  mockActivityFeed,
  mockHeatmapData,
  mockTabs,
} from "./_lib/mock-data";
import TabNavigation from "./_components/tab-navigation";
import StatsRow from "./_components/stats-row";
import HighlightedActivity from "./_components/highlighted-activity";
import ActivityHeatmap from "./_components/activity-heatmap";
import ActivityFeed from "./_components/activity-feed";
import OpenPRs from "./_components/open-prs";
import OpenIssues from "./_components/open-issues";

export default async function RepoPage({
  params,
}: {
  params: Promise<{ user: string; repoName: string }>;
}) {
  await params;

  return (
    <div className="flex-1 flex flex-col">
      <TabNavigation tabs={mockTabs} />

      <div className="p-6 space-y-6 flex-1">
        {/* Stats row */}
        <StatsRow data={mockRepoData} />

        {/* Highlighted activity */}
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <HighlightedActivity />
          </div>
          {/* Pagination dots */}
          <div className="hidden sm:flex items-center gap-1">
            <div className="w-6 h-1.5 rounded-full bg-foreground" />
            <div className="w-1.5 h-1.5 rounded-full bg-subtle" />
            <div className="w-1.5 h-1.5 rounded-full bg-subtle" />
            <div className="w-1.5 h-1.5 rounded-full bg-subtle" />
            <div className="w-1.5 h-1.5 rounded-full bg-subtle" />
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: Activity */}
          <div className="space-y-6">
            <ActivityHeatmap data={mockHeatmapData} />
            <ActivityFeed items={mockActivityFeed} />
          </div>

          {/* Middle column: Open PRs */}
          <div>
            <OpenPRs pullRequests={mockPullRequests} />
          </div>

          {/* Right column: Open Issues */}
          <div>
            <OpenIssues issues={mockIssues} />
          </div>
        </div>
      </div>
    </div>
  );
}
