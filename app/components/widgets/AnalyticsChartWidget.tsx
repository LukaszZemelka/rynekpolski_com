export default function AnalyticsChartWidget() {
  const colors = [
    'from-[var(--flame-deep-red)] to-[var(--flame-orange)]',
    'from-[var(--flame-orange)] to-[var(--flame-burnt-orange)]',
    'from-[var(--flame-burnt-orange)] to-[var(--flame-amber)]',
    'from-[var(--flame-deep-red)] to-[var(--flame-burnt-orange)]',
    'from-[var(--flame-orange)] to-[var(--flame-amber)]',
    'from-[var(--flame-deep-red)] to-[var(--flame-orange)]',
    'from-[var(--flame-burnt-orange)] to-[var(--flame-orange)]',
  ];

  return (
    <div className="h-40 flex items-end gap-2">
      {[65, 45, 80, 55, 70, 90, 75].map((height, i) => (
        <div key={i} className="flex-1 flex flex-col justify-end">
          <div
            className={`bg-gradient-to-t ${colors[i]} rounded-t shadow-lg hover:shadow-[var(--flame-orange)]/50 transition-all duration-300`}
            style={{ height: `${height}%` }}
          />
        </div>
      ))}
    </div>
  );
}
