import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Website', value: 374.82, color: '#6366f1' },
  { name: 'Mobile App', value: 241.60, color: '#06b6d4' },
  { name: 'Other', value: 213.42, color: '#e5e7eb' },
];

const SalesDistribution = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-gray-600">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M9 2 L9 9 L14 9" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="text-sm font-medium">Sales Distribution</span>
        </div>
        <button className="text-sm text-gray-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg flex items-center gap-1">
          Monthly
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 mb-1">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-gray-500">{item.name}</span>
            </div>
            <div className="text-xl font-semibold text-gray-900">
              ${item.value.toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesDistribution;
