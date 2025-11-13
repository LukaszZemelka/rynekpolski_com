'use client';

export default function MarketSummaryWidget() {
  const markets = [
    { name: 'WIG20', value: '2,234.56', change: '+1.23%', positive: true },
    { name: 'mWIG40', value: '5,678.90', change: '-0.45%', positive: false },
    { name: 'sWIG80', value: '23,456.78', change: '+0.89%', positive: true },
  ];

  return (
    <div className="space-y-3">
      {markets.map((market) => (
        <div key={market.name} className="flex items-center justify-between">
          <span className="text-sm font-medium">{market.name}</span>
          <div className="text-right">
            <div className="text-sm font-semibold">{market.value}</div>
            <div className={`text-xs ${market.positive ? 'text-green-400' : 'text-red-400'}`}>
              {market.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
