'use client';

import { useState } from 'react';
import WidgetRenderer from './WidgetRenderer';

interface WidgetGridProps {
  widgets: any[];
  onWidgetMove: (widgetId: number, x: number, y: number, width: number, height: number) => void;
}

export default function WidgetGrid({ widgets, onWidgetMove }: WidgetGridProps) {
  const [draggingId, setDraggingId] = useState<number | null>(null);

  if (widgets.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 border-2 border-dashed border-[var(--border-color)] rounded-lg">
        <p className="text-[var(--text-secondary)]">
          No widgets added yet. Click '+ Add Widget' to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-4 auto-rows-min">
      {widgets.map((widget) => {
        const colSpan = Math.min(widget.width || 2, 12);
        const rowSpan = widget.height || 2;
        
        return (
          <div
            key={widget.placement_id || widget.id}
            className={`col-span-${colSpan} row-span-${rowSpan}`}
            style={{
              gridColumn: `span ${colSpan}`,
            }}
          >
            <div
              className="widget-card h-full cursor-move"
              draggable
              onDragStart={() => setDraggingId(widget.id)}
              onDragEnd={() => setDraggingId(null)}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-white">{widget.name}</h3>
                <button className="text-[var(--text-secondary)] hover:text-white text-xs">
                  •••
                </button>
              </div>
              <div className="text-[var(--text-secondary)]">
                <WidgetRenderer widget={widget} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
