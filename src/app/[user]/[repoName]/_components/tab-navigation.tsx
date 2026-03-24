"use client";

import { useState } from "react";
import type { Tab } from "../_lib/types";

export default function TabNavigation({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState(
    tabs.find((t) => t.active)?.name ?? tabs[0].name
  );

  return (
    <div className="border-b border-border-default overflow-x-auto">
      <nav className="flex gap-1 px-6 [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-1.5 px-3 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.name
                ? "border-accent text-foreground font-medium"
                : "border-transparent text-muted hover:text-foreground hover:border-border-default"
            }`}
          >
            {tab.name}
            {tab.count !== undefined && (
              <span className="bg-surface-raised text-muted rounded-full px-2 py-0.5 text-xs ml-0.5">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
