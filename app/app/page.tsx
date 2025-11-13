'use client';

import { useState, useEffect } from 'react';
import { Dashboard, Widget, WidgetPlacement } from '@/lib/types';
import DashboardTabs from '@/components/DashboardTabs';
import WidgetGrid from '@/components/WidgetGrid';

export default function Home() {
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  const [activeDashboard, setActiveDashboard] = useState<Dashboard | null>(null);
  const [widgets, setWidgets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const userId = 'demo-user';

  useEffect(() => {
    loadDashboards();
  }, []);

  useEffect(() => {
    if (activeDashboard) {
      loadWidgets(activeDashboard.id);
    }
  }, [activeDashboard]);

  async function loadDashboards() {
    try {
      const res = await fetch(`/api/dashboards?userId=${userId}`);
      const data = await res.json();
      setDashboards(data);
      if (data.length > 0) {
        setActiveDashboard(data[0]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Failed to load dashboards:', error);
      setLoading(false);
    }
  }

  async function loadWidgets(dashboardId: number) {
    try {
      const res = await fetch(`/api/widgets?dashboardId=${dashboardId}&userId=${userId}`);
      const data = await res.json();
      setWidgets(data);
    } catch (error) {
      console.error('Failed to load widgets:', error);
    }
  }

  async function handleWidgetMove(widgetId: number, x: number, y: number, width: number, height: number) {
    if (!activeDashboard) return;
    
    try {
      await fetch('/api/widgets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          dashboardId: activeDashboard.id,
          widgetId,
          x,
          y,
          width,
          height,
        }),
      });
    } catch (error) {
      console.error('Failed to save widget position:', error);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-xl text-[var(--text-secondary)]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <DashboardTabs
        dashboards={dashboards}
        activeDashboard={activeDashboard}
        onSelectDashboard={setActiveDashboard}
      />
      
      {activeDashboard && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              {activeDashboard.name}
            </h2>
            <button className="px-4 py-2 bg-[var(--accent-red)] text-white rounded-md hover:opacity-90">
              + Add Widget
            </button>
          </div>
          
          <WidgetGrid
            widgets={widgets}
            onWidgetMove={handleWidgetMove}
          />
        </div>
      )}
    </div>
  );
}
