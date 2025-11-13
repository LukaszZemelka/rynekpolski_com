# RynekPolski.com - Business Intelligence Dashboard

A highly customizable, modular dashboard application built with React, TypeScript, Next.js, and PostgreSQL.

## Features

- **Polish Flag Branding**: Application header displays "RynekPolski.com" with Polish flag colors
- **Dark Theme**: Modern dark theme optimized for prolonged use
- **Customizable Dashboards**: 10 pre-configured dashboards covering different business aspects
- **Modular Widget System**: Each widget is a separate, reusable module
- **Drag-and-Drop**: Rearrange dashboard tabs and widgets
- **User Preferences**: All customizations automatically saved to PostgreSQL database
- **Responsive Grid Layout**: Adaptive widget grid system

## Tech Stack

- **Frontend**: React 19, Next.js 16, TypeScript
- **Styling**: Tailwind CSS, Custom CSS Variables
- **Drag & Drop**: @dnd-kit
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL 16
- **ORM**: node-postgres (pg)

## Dashboards

1. **Overview** - General overview and key metrics
2. **Market & Economy** - Market trends and economic indicators
3. **Companies & Industries** - Company profiles and industry analysis
4. **Business News & Trends** - Latest business news and trending topics
5. **Finance & Investments** - Financial data and investment tracking
6. **Network & Partnerships** - Business network and partnership opportunities
7. **My Business** - Personal business management tools
8. **Analytics & Insights** - Data analytics and business insights
9. **Regulation & Compliance** - Legal and compliance information
10. **Innovation & Technology** - Technology trends and innovation tracking

## Available Widgets

- **Market Summary Widget** - Real-time market overview (WIG20, mWIG40, sWIG80)
- **Stock Ticker Widget** - Live stock prices
- **News Feed Widget** - Latest business news
- **Calendar Widget** - Business calendar and schedule
- **Tasks Widget** - Task management
- **Analytics Chart Widget** - Data visualizations
- **Weather Widget** - Weather forecast
- **Currency Converter Widget** - Currency exchange rates
- **Company Profile Widget** - Company information
- **Compliance Tracker Widget** - Compliance monitoring

## Database Schema

### Tables

- `dashboards` - Dashboard configurations
- `widgets` - Available widget definitions
- `user_preferences` - User theme and settings
- `user_dashboard_layouts` - User-specific dashboard tab ordering
- `user_widget_placements` - Widget positions and sizes per dashboard

## Project Structure

```
app/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   ├── dashboards/route.ts   # Dashboard CRUD
│   │   └── widgets/route.ts      # Widget placements CRUD
│   ├── globals.css               # Global styles with dark theme
│   ├── layout.tsx                # Root layout with Polish flag branding
│   └── page.tsx                  # Main page with dashboard tabs
├── components/                   # React components
│   ├── DashboardTabs.tsx         # Draggable dashboard tabs
│   ├── WidgetGrid.tsx            # Widget grid layout
│   ├── WidgetRenderer.tsx        # Dynamic widget renderer
│   └── widgets/                  # Widget modules
│       ├── MarketSummaryWidget.tsx
│       ├── StockTickerWidget.tsx
│       ├── NewsFeedWidget.tsx
│       ├── CalendarWidget.tsx
│       ├── TasksWidget.tsx
│       ├── AnalyticsChartWidget.tsx
│       ├── WeatherWidget.tsx
│       └── PlaceholderWidget.tsx
├── lib/                          # Utilities
│   ├── db.ts                     # PostgreSQL connection pool
│   └── types.ts                  # TypeScript type definitions
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── next.config.js                # Next.js configuration
```

## Installation & Setup

### Prerequisites

- Node.js 20+
- PostgreSQL 16
- npm or yarn

### Database Configuration

Database: `rynekpolski`
User: `rynekpolski_user`
Password: `rynekpolski2024`
Host: `localhost`

### Running the Application

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Production build
npm run build
npm start
```

The application will be available at:
- Local: http://localhost:3000
- Network: http://<EC2-IP>:3000

## Adding New Widgets

1. Create widget component in `components/widgets/YourWidget.tsx`
2. Add widget to database:
   ```sql
   INSERT INTO widgets (name, component_name, category, description, default_width, default_height)
   VALUES ('Your Widget', 'YourWidget', 'category', 'Description', 2, 2);
   ```
3. Register widget in `components/WidgetRenderer.tsx`
4. Widget will be available for users to add to their dashboards

## Customization

### Theme Colors

Edit CSS variables in `app/globals.css`:
```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --bg-tertiary: #2a2a2a;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --border-color: #333333;
  --accent-red: #DC143C;    /* Polish flag red */
  --accent-white: #FFFFFF;  /* Polish flag white */
}
```

### Dashboard Configuration

Dashboards can be customized in the database `dashboards` table or via the API.

## API Endpoints

### GET /api/dashboards?userId=demo-user
Get all dashboards with user's custom ordering

### POST /api/dashboards
Save user's dashboard tab ordering

### GET /api/widgets?dashboardId=1&userId=demo-user
Get widgets for a specific dashboard

### POST /api/widgets
Save widget placement (position, size)

### DELETE /api/widgets?placementId=123
Remove widget from dashboard

## User Preferences

All user customizations are automatically saved:
- Dashboard tab order
- Widget positions and sizes
- Theme preferences (future enhancement)

Currently using `demo-user` as default user ID. Integration with authentication system required for multi-user support.

## Future Enhancements

- [ ] User authentication (OAuth, JWT)
- [ ] Real-time data integration
- [ ] Widget library/marketplace
- [ ] Export dashboard configurations
- [ ] Mobile responsive improvements
- [ ] Widget-to-widget communication
- [ ] Custom widget builder
- [ ] Dashboard sharing/collaboration
- [ ] Advanced analytics
- [ ] Notification system

## License

Proprietary - RynekPolski.com

## Support

For issues or questions, contact the development team.
