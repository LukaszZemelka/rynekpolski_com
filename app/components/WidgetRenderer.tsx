'use client';

import MarketSummaryWidget from './widgets/MarketSummaryWidget';
import StockTickerWidget from './widgets/StockTickerWidget';
import NewsFeedWidget from './widgets/NewsFeedWidget';
import CalendarWidget from './widgets/CalendarWidget';
import TasksWidget from './widgets/TasksWidget';
import AnalyticsChartWidget from './widgets/AnalyticsChartWidget';
import WeatherWidget from './widgets/WeatherWidget';
import PlaceholderWidget from './widgets/PlaceholderWidget';

interface WidgetRendererProps {
  widget: any;
}

const widgetComponents: Record<string, React.ComponentType<any>> = {
  MarketSummaryWidget,
  StockTickerWidget,
  NewsFeedWidget,
  CalendarWidget,
  TasksWidget,
  AnalyticsChartWidget,
  WeatherWidget,
};

export default function WidgetRenderer({ widget }: WidgetRendererProps) {
  const WidgetComponent = widgetComponents[widget.component_name] || PlaceholderWidget;
  
  return <WidgetComponent widget={widget} />;
}
