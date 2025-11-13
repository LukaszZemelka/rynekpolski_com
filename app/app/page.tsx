'use client';

import { useState, useEffect } from 'react';
import { useDashboard } from '@/contexts/DashboardContext';
import WidgetGrid from '@/components/WidgetGrid';

export default function Home() {
  const { activeDashboard } = useDashboard();
  const [widgets, setWidgets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const userId = 'demo-user';

  useEffect(() => {
    if (activeDashboard) {
      setLoading(true);
      setWidgets([]); // Clear widgets before loading new ones
      loadWidgets(activeDashboard.id);
    }
  }, [activeDashboard]);

  async function loadWidgets(dashboardId: number) {
    try {
      const res = await fetch(`/api/widgets?dashboardId=${dashboardId}&userId=${userId}`);
      const data = await res.json();
      setWidgets(data);
    } catch (error) {
      console.error('Failed to load widgets:', error);
    } finally {
      setLoading(false);
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

  if (!activeDashboard) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-xl text-[var(--text-secondary)]">Loading dashboards...</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            {activeDashboard.name}
          </h2>
          <button className="px-4 py-2 bg-gradient-to-r from-[var(--flame-deep-red)] via-[var(--flame-orange)] to-[var(--flame-burnt-orange)] text-white rounded-md hover:shadow-lg hover:shadow-[var(--flame-orange)]/30 transition-all duration-300">
            + Add Widget
          </button>
        </div>
        <div className="flex items-center justify-center h-96">
          <div className="text-xl text-[var(--text-secondary)]">Loading widgets...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4" key={activeDashboard.id}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          {activeDashboard.name}
        </h2>
        <button className="px-4 py-2 bg-gradient-to-r from-[var(--flame-deep-red)] via-[var(--flame-orange)] to-[var(--flame-burnt-orange)] text-white rounded-md hover:shadow-lg hover:shadow-[var(--flame-orange)]/30 transition-all duration-300">
          + Add Widget
        </button>
      </div>
      
      <WidgetGrid
        widgets={widgets}
        onWidgetMove={handleWidgetMove}
      />
    </div>
  );
}
