export default function AnalyticsChartWidget() {
  return (
    <div className="h-40 flex items-end gap-2">
      {[65, 45, 80, 55, 70, 90, 75].map((height, i) => (
        <div key={i} className="flex-1 flex flex-col justify-end">
          <div 
            className="bg-[var(--accent-red)] rounded-t"
            style={{ height: `${height}%` }}
          />
        </div>
      ))}
    </div>
  );
}
