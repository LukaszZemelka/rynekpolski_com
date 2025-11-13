export default function CalendarWidget() {
  const events = [
    { time: '09:00', title: 'Board Meeting' },
    { time: '14:00', title: 'Client Call' },
    { time: '16:30', title: 'Team Sync' },
  ];

  return (
    <div className="space-y-2">
      <div className="text-sm font-semibold mb-3">Today's Schedule</div>
      {events.map((event, i) => (
        <div key={i} className="flex gap-3 text-sm">
          <span className="text-[var(--accent-red)] font-mono">{event.time}</span>
          <span>{event.title}</span>
        </div>
      ))}
    </div>
  );
}
