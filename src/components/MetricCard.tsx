import React from 'react';
import { Info } from 'lucide-react';

interface MetricCardProps {
  icon: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, change, isPositive }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-lg">{icon}</span>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <Info size={16} />
        </button>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-3xl font-semibold text-gray-900">{value}</div>
        <div className={`flex items-center gap-1 text-sm font-medium ${
          isPositive ? 'text-emerald-600' : 'text-red-600'
        }`}>
          <span>{change}</span>
          <span>{isPositive ? '↗' : '↘'}</span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
