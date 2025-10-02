import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Filter, TrendingUp } from 'lucide-react';

const data = [
  {
    month: 'Oct',
    China: 1200,
    UE: 800,
    USA: 1100,
    Canada: 900,
    Other: 888,
  },
  {
    month: 'Nov',
    China: 900,
    UE: 700,
    USA: 950,
    Canada: 650,
    Other: 516,
  },
  {
    month: 'Dec',
    China: 2100,
    UE: 1500,
    USA: 1700,
    Canada: 1200,
    Other: 493,
  },
];

const COLORS = {
  China: '#6366f1',
  UE: '#8b5cf6',
  USA: '#06b6d4',
  Canada: '#14b8a6',
  Other: '#10b981',
};

const SalesOverview = () => {
  const totalSales = 9257.51;
  const increase = 15.8;
  const increaseAmount = 143.50;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="8" width="3" height="9" fill="currentColor" opacity="0.6"/>
              <rect x="8.5" y="4" width="3" height="13" fill="currentColor"/>
              <rect x="14" y="10" width="3" height="7" fill="currentColor" opacity="0.6"/>
            </svg>
            <span className="text-sm font-medium">Sales Overview</span>
          </div>
          <div className="flex items-baseline gap-3">
            <div className="text-3xl font-semibold text-gray-900">
              ${totalSales.toLocaleString()}
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-sm font-medium text-emerald-600">
                {increase}%
                <TrendingUp size={14} />
              </span>
              <span className="text-sm text-gray-500">
                +${increaseAmount.toFixed(2)} increased
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
            <Filter size={14} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
            Sort
          </button>
          <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded-lg">
            •••
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} barGap={0} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px'
            }}
          />
          <Legend 
            iconType="circle"
            wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
          />
          <Bar dataKey="China" fill={COLORS.China} radius={[4, 4, 4, 4]} />
          <Bar dataKey="UE" fill={COLORS.UE} radius={[4, 4, 4, 4]} />
          <Bar dataKey="USA" fill={COLORS.USA} radius={[4, 4, 4, 4]} />
          <Bar dataKey="Canada" fill={COLORS.Canada} radius={[4, 4, 4, 4]} />
          <Bar dataKey="Other" fill={COLORS.Other} radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverview;
