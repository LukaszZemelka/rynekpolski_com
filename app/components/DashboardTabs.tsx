'use client';

import { Dashboard } from '@/lib/types';

interface DashboardTabsProps {
  dashboards: Dashboard[];
  activeDashboard: Dashboard | null;
  onSelectDashboard: (dashboard: Dashboard) => void;
}

export default function DashboardTabs({
  dashboards,
  activeDashboard,
  onSelectDashboard,
}: DashboardTabsProps) {
  return (
    <div className="flex flex-wrap gap-1 pb-1">
      {dashboards.map((dashboard) => (
        <button
          key={dashboard.id}
          onClick={() => onSelectDashboard(dashboard)}
          className={`tab-button whitespace-nowrap ${activeDashboard?.id === dashboard.id ? 'active' : ''}`}
        >
          {dashboard.name}
        </button>
      ))}
    </div>
  );
}
