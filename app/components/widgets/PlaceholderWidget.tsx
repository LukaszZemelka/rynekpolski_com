export default function PlaceholderWidget({ widget }: any) {
  return (
    <div className="flex items-center justify-center h-32">
      <div className="text-center">
        <p className="text-sm text-[var(--text-secondary)]">
          {widget.component_name}
        </p>
        <p className="text-xs text-[var(--text-secondary)] mt-1">
          Widget not implemented yet
        </p>
      </div>
    </div>
  );
}
