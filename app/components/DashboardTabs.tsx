'use client';

import { Dashboard } from '@/lib/types';
import { useSortable, SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface TabProps {
  dashboard: Dashboard;
  isActive: boolean;
  onClick: () => void;
}

function DraggableTab({ dashboard, isActive, onClick }: TabProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: dashboard.id.toString(),
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
      className={`tab-button whitespace-nowrap ${isActive ? 'active' : ''}`}
    >
      {dashboard.name}
    </button>
  );
}

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
  const handleDragEnd = (event: DragEndEvent) => {
    // TODO: Implement tab reordering
    console.log('Tab dragged:', event);
  };

  return (
    <div className="overflow-x-auto pb-2">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={dashboards.map((d) => d.id.toString())}
          strategy={horizontalListSortingStrategy}
        >
          <div className="flex gap-2">
            {dashboards.map((dashboard) => (
              <DraggableTab
                key={dashboard.id}
                dashboard={dashboard}
                isActive={activeDashboard?.id === dashboard.id}
                onClick={() => onSelectDashboard(dashboard)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
