'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dashboard } from '@/lib/types';
import DashboardTabs from '@/components/DashboardTabs';
import { useDashboard } from '@/contexts/DashboardContext';

export default function Header() {
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  const { activeDashboard, setActiveDashboard } = useDashboard();
  const userId = 'demo-user';

  useEffect(() => {
    loadDashboards();
  }, []);

  async function loadDashboards() {
    try {
      const res = await fetch(`/api/dashboards?userId=${userId}`);
      const data = await res.json();
      setDashboards(data);
      if (data.length > 0) {
        setActiveDashboard(data[0]);
      }
    } catch (error) {
      console.error('Failed to load dashboards:', error);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-black border-b-2 border-[var(--border-color)] shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Image 
            src="/logo.png" 
            alt="RynekPolski.com Logo" 
            width={80} 
            height={46}
            className="h-10 w-auto"
            priority
          />
          <DashboardTabs
            dashboards={dashboards}
            activeDashboard={activeDashboard}
            onSelectDashboard={setActiveDashboard}
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-[var(--text-secondary)]">Demo User</span>
        </div>
      </div>
    </header>
  );
}
