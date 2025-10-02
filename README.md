# Nexus Dashboard

A modern, responsive dashboard application built with React, TypeScript, and Tailwind CSS.

## Features

- 📊 **Sales Overview** - Stacked bar chart showing sales data across different regions
- 👥 **Total Subscriber** - Weekly subscriber metrics with bar chart visualization
- 💰 **Revenue Metrics** - Key performance indicators including page views, total revenue, and bounce rate
- 📈 **Sales Distribution** - Pie chart showing sales breakdown by channel
- 🔗 **Integration List** - Table displaying connected applications with performance metrics
- 🎨 **Modern UI** - Clean, professional interface with smooth transitions and hover effects

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library for data visualization
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
/workspace
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx       # Main dashboard layout
│   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   ├── MetricCard.tsx      # KPI metric cards
│   │   ├── SalesOverview.tsx   # Sales chart component
│   │   ├── TotalSubscriber.tsx # Subscriber chart component
│   │   ├── SalesDistribution.tsx # Pie chart component
│   │   └── IntegrationList.tsx # Integration table component
│   ├── App.tsx                 # Root component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Customization

### Colors

The primary color scheme can be modified in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Update these values
    500: '#8b5cf6',
    600: '#7c3aed',
    // ...
  }
}
```

### Data

Sample data in each component can be updated to connect to your API:
- `SalesOverview.tsx` - Sales data by region
- `TotalSubscriber.tsx` - Subscriber metrics
- `SalesDistribution.tsx` - Sales channel data
- `IntegrationList.tsx` - Connected applications

## License

MIT