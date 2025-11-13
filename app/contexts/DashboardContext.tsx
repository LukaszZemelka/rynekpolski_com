'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Dashboard } from '@/lib/types';

interface DashboardContextType {
  activeDashboard: Dashboard | null;
  setActiveDashboard: (dashboard: Dashboard | null) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [activeDashboard, setActiveDashboard] = useState<Dashboard | null>(null);

  return (
    <DashboardContext.Provider value={{ activeDashboard, setActiveDashboard }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
