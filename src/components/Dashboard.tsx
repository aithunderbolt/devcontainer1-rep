import { Search, Gift, Bell, Plus, Calendar, Filter, Download } from 'lucide-react';
import MetricCard from './MetricCard';
import SalesOverview from './SalesOverview';
import TotalSubscriber from './TotalSubscriber';
import SalesDistribution from './SalesDistribution';
import IntegrationList from './IntegrationList';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                ⌘ + F
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 ml-8">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Gift size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Plus size={20} className="text-gray-600" />
            </button>
            <div className="flex items-center gap-3 ml-2">
              <img
                src="https://ui-avatars.com/api/?name=Young+Alaska&background=6366f1&color=fff"
                alt="User"
                className="w-9 h-9 rounded-full"
              />
              <div>
                <div className="text-sm font-semibold text-gray-900">Young Alaska</div>
                <div className="text-xs text-gray-500">Bussiness</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-8">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Calendar size={16} />
              Oct 18 - Nov 18
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Monthly
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter size={16} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <MetricCard
            icon="👁️"
            title="Page Views"
            value="12,450"
            change="+15.8%"
            isPositive={true}
          />
          <MetricCard
            icon="💰"
            title="Total Revenue"
            value="$363.95"
            change="-34.0%"
            isPositive={false}
          />
          <MetricCard
            icon="📊"
            title="Bounce Rate"
            value="86.5%"
            change="+24.2%"
            isPositive={true}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <SalesOverview />
          </div>
          <div>
            <TotalSubscriber />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 gap-6">
          <SalesDistribution />
          <IntegrationList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
