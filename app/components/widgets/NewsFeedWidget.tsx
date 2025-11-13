export default function NewsFeedWidget() {
  const news = [
    { title: 'Polish economy shows strong Q3 growth', time: '2h ago' },
    { title: 'New tech startup raises €5M in funding', time: '4h ago' },
    { title: 'Warsaw Stock Exchange hits new record', time: '6h ago' },
  ];

  return (
    <div className="space-y-3">
      {news.map((item, i) => (
        <div key={i} className="border-l-2 border-[var(--flame-orange)] pl-3 hover:border-[var(--flame-amber)] transition-colors duration-300">
          <p className="text-sm text-white hover:text-[var(--flame-light-orange)] transition-colors duration-200">{item.title}</p>
          <p className="text-xs text-[var(--text-secondary)] mt-1">{item.time}</p>
        </div>
      ))}
    </div>
  );
}
