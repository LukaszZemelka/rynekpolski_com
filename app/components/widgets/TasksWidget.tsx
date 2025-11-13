export default function TasksWidget() {
  const tasks = [
    { title: 'Review Q4 report', done: false },
    { title: 'Update project timeline', done: false },
    { title: 'Email client proposal', done: true },
  ];

  return (
    <div className="space-y-2">
      {tasks.map((task, i) => (
        <label key={i} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-[var(--bg-tertiary)] p-2 rounded transition-colors duration-200">
          <input
            type="checkbox"
            checked={task.done}
            className="w-4 h-4 accent-[var(--flame-orange)] cursor-pointer"
            readOnly
          />
          <span className={task.done ? 'line-through text-[var(--text-secondary)]' : ''}>
            {task.title}
          </span>
        </label>
      ))}
    </div>
  );
}
