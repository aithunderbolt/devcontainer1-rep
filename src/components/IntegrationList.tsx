import { Link2 } from 'lucide-react';

interface Integration {
  name: string;
  logo: string;
  type: string;
  rate: number;
  profit: number;
  color: string;
}

const integrations: Integration[] = [
  {
    name: 'Stripe',
    logo: 'S',
    type: 'Finance',
    rate: 40,
    profit: 650.00,
    color: '#6366f1'
  },
  {
    name: 'Zapier',
    logo: 'Z',
    type: 'CRM',
    rate: 80,
    profit: 720.50,
    color: '#f97316'
  },
  {
    name: 'Shopify',
    logo: 'S',
    type: 'Marketplace',
    rate: 20,
    profit: 432.25,
    color: '#22c55e'
  },
];

const IntegrationList = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-gray-600">
          <Link2 size={18} />
          <span className="text-sm font-medium">List of Integration</span>
        </div>
        <button className="text-sm text-primary-600 font-medium hover:text-primary-700">
          See All
        </button>
      </div>

      <div className="space-y-1">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-medium text-gray-500 uppercase">
          <div className="col-span-4">Application</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-3">Rate</div>
          <div className="col-span-3 text-right">Profit</div>
        </div>

        {/* Rows */}
        {integrations.map((integration, index) => (
          <div 
            key={index}
            className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors items-center"
          >
            <div className="col-span-4 flex items-center gap-3">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-semibold text-sm"
                style={{ backgroundColor: integration.color }}
              >
                {integration.logo}
              </div>
              <span className="text-sm font-medium text-gray-900">{integration.name}</span>
            </div>
            
            <div className="col-span-2">
              <span className="text-sm text-gray-600">{integration.type}</span>
            </div>
            
            <div className="col-span-3">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="h-1.5 rounded-full"
                    style={{ 
                      width: `${integration.rate}%`,
                      backgroundColor: integration.color
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600">{integration.rate}%</span>
              </div>
            </div>
            
            <div className="col-span-3 text-right">
              <span className="text-sm font-medium text-gray-900">
                ${integration.profit.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationList;
