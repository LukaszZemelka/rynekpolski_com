export default function WeatherWidget() {
  return (
    <div className="text-center">
      <div className="text-4xl mb-2">☀️</div>
      <div className="text-2xl font-bold">22°C</div>
      <div className="text-sm text-[var(--text-secondary)] mt-1">Warsaw</div>
      <div className="text-xs text-[var(--text-secondary)]">Sunny</div>
    </div>
  );
}
