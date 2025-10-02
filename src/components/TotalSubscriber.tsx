import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { Users, TrendingUp } from 'lucide-react';

const data = [
  { day: 'Sun', value: 850, active: false },
  { day: 'Mon', value: 3874, active: true },
  { day: 'Tue', value: 1950, active: false },
  { day: 'Wed', value: 1650, active: false },
  { day: 'Thu', value: 2100, active: false },
  { day: 'Fri', value: 2800, active: false },
  { day: 'Sat', value: 3200, active: false },
];

const TotalSubscriber = () => {
  const total = 24473;
  const increase = 8.3;
  const increaseCount = 749;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <Users size={18} />
            <span className="text-sm font-medium">Total Subscriber</span>
          </div>
          <div className="text-3xl font-semibold text-gray-900 mb-2">
            {total.toLocaleString()}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1 font-medium text-emerald-600">
              {increase}%
              <TrendingUp size={12} />
            </span>
            <span className="text-gray-500">
              +{increaseCount} increased
            </span>
          </div>
        </div>
        <button className="text-sm text-gray-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg flex items-center gap-1">
          Weekly
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis 
            dataKey="day" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 11 }}
          />
          <Bar 
            dataKey="value" 
            radius={[6, 6, 6, 6]}
            maxBarSize={40}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.active ? '#6366f1' : '#e5e7eb'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalSubscriber;
