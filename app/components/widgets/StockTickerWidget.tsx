export default function StockTickerWidget() {
  const stocks = [
    { ticker: 'PKN', price: '45.20', change: '+2.1%' },
    { ticker: 'PZU', price: '32.80', change: '-0.5%' },
    { ticker: 'KGHM', price: '78.90', change: '+1.8%' },
    { ticker: 'PKNORLEN', price: '55.40', change: '+0.9%' },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {stocks.map((stock) => (
        <div key={stock.ticker} className="flex-shrink-0 p-2 bg-[var(--bg-tertiary)] rounded">
          <div className="text-xs font-semibold">{stock.ticker}</div>
          <div className="text-sm mt-1">{stock.price}</div>
          <div className="text-xs text-green-400 mt-0.5">{stock.change}</div>
        </div>
      ))}
    </div>
  );
}
