import React from 'react';
import { 
  LayoutDashboard, 
  CreditCard, 
  Users, 
  MessageSquare, 
  Package, 
  FileText, 
  BarChart3, 
  Wand2,
  Settings,
  Shield,
  HelpCircle,
  Command
} from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  active?: boolean;
}

const Sidebar = () => {
  const generalMenu: MenuItem[] = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard', active: true },
    { icon: <CreditCard size={18} />, label: 'Payment' },
    { icon: <Users size={18} />, label: 'Customers' },
    { icon: <MessageSquare size={18} />, label: 'Message', badge: '8' },
  ];

  const toolsMenu: MenuItem[] = [
    { icon: <Package size={18} />, label: 'Product' },
    { icon: <FileText size={18} />, label: 'Invoice' },
    { icon: <BarChart3 size={18} />, label: 'Analytics' },
    { icon: <Wand2 size={18} />, label: 'Automation', badge: 'BETA' },
  ];

  const supportMenu: MenuItem[] = [
    { icon: <Settings size={18} />, label: 'Settings' },
    { icon: <Shield size={18} />, label: 'Security' },
    { icon: <HelpCircle size={18} />, label: 'Help' },
  ];

  const MenuSection = ({ title, items }: { title: string; items: MenuItem[] }) => (
    <div className="mb-6">
      <h3 className="px-6 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
        {title}
      </h3>
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between px-6 py-2.5 cursor-pointer transition-colors ${
            item.active
              ? 'bg-gray-100 text-gray-900 border-r-2 border-primary-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </div>
          {item.badge && (
            <span className={`text-xs px-2 py-0.5 rounded ${
              item.badge === 'BETA' 
                ? 'bg-primary-100 text-primary-600' 
                : 'bg-red-100 text-red-600'
            }`}>
              {item.badge}
            </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-200">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
          <Command className="text-white" size={20} />
        </div>
        <span className="text-lg font-semibold text-gray-900">Nexus</span>
        <button className="ml-auto text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Menu Sections */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <MenuSection title="General" items={generalMenu} />
        <MenuSection title="Tools" items={toolsMenu} />
        <MenuSection title="Support" items={supportMenu} />
      </nav>

      {/* Team Info */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-2 py-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-semibold">
            M
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900">Team</div>
            <div className="text-xs text-gray-500">Marketing</div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <button className="w-full mt-3 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          Upgrade Plan
        </button>
        <div className="mt-3 text-center text-xs text-gray-400">
          © 2023 Nexus Ix Inc.
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
