"use client";

import { useState } from "react";

const intensityClasses = [
  "bg-border-muted",
  "bg-success/25",
  "bg-success/45",
  "bg-success/70",
  "bg-success",
];

export default function ActivityHeatmap({ data }: { data: number[][] }) {
  const [tooltip, setTooltip] = useState<{
    week: number;
    day: number;
    x: number;
    y: number;
  } | null>(null);

  const totalCommits = data.reduce(
    (sum, week) => sum + week.reduce((s, d) => s + d, 0),
    0
  );

  return (
    <div className="bg-surface rounded-xl border border-border-default p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-foreground">
          Recent Activity
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>All</span>
          <span className="text-foreground font-medium border-b border-accent pb-0.5">
            Mine
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-muted mb-2">
        <span>Commits &middot; {data.length} weeks</span>
        <span>
          {(totalCommits / 100).toFixed(1)}k total
        </span>
      </div>

      <div className="relative">
        <div
          className="grid gap-[3px]"
          style={{
            gridTemplateColumns: `repeat(${data.length}, 1fr)`,
            gridTemplateRows: "repeat(7, 1fr)",
            gridAutoFlow: "column",
          }}
        >
          {data.map((week, wi) =>
            week.map((val, di) => (
              <div
                key={`${wi}-${di}`}
                className={`aspect-square rounded-sm ${intensityClasses[val]} cursor-pointer transition-opacity hover:opacity-80`}
                style={{ minWidth: "10px", minHeight: "10px" }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setTooltip({
                    week: wi,
                    day: di,
                    x: rect.left + rect.width / 2,
                    y: rect.top,
                  });
                }}
                onMouseLeave={() => setTooltip(null)}
              />
            ))
          )}
        </div>

        {tooltip && (
          <div className="fixed z-50 px-2 py-1 bg-foreground text-background text-xs rounded shadow-lg pointer-events-none -translate-x-1/2 -translate-y-full -mt-2"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            {data[tooltip.week][tooltip.day]} contributions
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-1.5 mt-3 text-xs text-muted">
        <span>Less</span>
        {intensityClasses.map((cls, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-sm ${cls}`}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
