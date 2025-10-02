import { Bell, Download, Filter, Grid2X2, Home, LineChart, Menu, Package, Percent, PieChart, Search, Settings, ShoppingCart, Users } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, Line, LineChart as RLineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Pie, PieChart as RPieChart, Cell } from 'recharts';
import { useMemo } from 'react';

const kpiCards = [
  { icon: Grid2X2, label: 'Page Views', value: '12,450', change: '+15.8%', tone: 'positive' },
  { icon: LineChart, label: 'Total Revenue', value: '$ 363.95', change: '-34.0%', tone: 'negative' },
  { icon: Percent, label: 'Bounce Rate', value: '86.5%', change: '+24.2%', tone: 'neutral' },
];

function Topbar() {
  return (
    <div className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200"> 
      <div className="mx-auto max-w-[1400px] px-6 h-16 flex items-center gap-3">
        <button className="md:hidden p-2 rounded-lg border border-slate-200">
          <Menu className="size-5" />
        </button>
        <div className="relative flex-1 max-w-lg hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input className="w-full h-10 rounded-xl border border-slate-200 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200" placeholder="Search" />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="h-9 px-3 rounded-xl border border-slate-200 text-sm flex items-center gap-2"><Filter className="size-4"/>Filter</button>
          <button className="h-9 px-3 rounded-xl border border-slate-200 text-sm flex items-center gap-2"><Download className="size-4"/>Export</button>
          <button className="h-9 w-9 rounded-xl border border-slate-200 flex items-center justify-center"><Bell className="size-4"/></button>
          <div className="size-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500"/>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const groups = [
    {
      title: 'General',
      items: [
        { icon: Home, label: 'Dashboard', active: true },
        { icon: Settings, label: 'Payment' },
        { icon: Users, label: 'Customers' },
        { icon: PieChart, label: 'Message' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { icon: Package, label: 'Product' },
        { icon: ShoppingCart, label: 'Invoice' },
        { icon: LineChart, label: 'Analytics' },
        { icon: Settings, label: 'Automation' },
      ],
    },
  ];
  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 shrink-0 h-full border-r border-slate-200 bg-white">
      <div className="flex flex-col w-full h-full p-4 gap-4">
        <div className="flex items-center gap-2 px-2 mt-1">
          <div className="size-8 rounded-lg bg-indigo-600"/>
          <div className="font-semibold">Nexus</div>
        </div>
        <div className="flex-1 overflow-auto thin-scrollbar px-2">
          {groups.map((g) => (
            <div key={g.title} className="mb-6">
              <div className="text-xs uppercase text-slate-400 px-3 mb-2 tracking-wide">{g.title}</div>
              <nav className="grid gap-1">
                {g.items.map((it) => (
                  <button key={it.label} className={`flex items-center gap-3 px-3 h-9 rounded-xl text-sm ${it.active? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <it.icon className="size-4" />
                    <span>{it.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="mt-auto p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div className="text-sm font-medium">Marketing</div>
          <button className="mt-2 w-full h-9 rounded-lg bg-indigo-600 text-white text-sm">Upgrade Plan</button>
        </div>
      </div>
    </aside>
  );
}

function KpiCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {kpiCards.map((c) => (
        <div key={c.label} className="card p-4">
          <div className="flex items-center justify-between">
            <div className="subheading flex items-center gap-2"><c.icon className="size-4"/>{c.label}</div>
          </div>
          <div className="mt-2 text-3xl font-semibold text-slate-900">{c.value}</div>
          <div className={`mt-2 inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full ${c.tone==='positive' ? 'bg-emerald-50 text-emerald-700' : c.tone==='negative' ? 'bg-rose-50 text-rose-700' : 'bg-slate-50 text-slate-700'}`}>{c.change}</div>
        </div>
      ))}
    </div>
  );
}

function SalesOverview() {
  const data = useMemo(() => [
    { name: 'Oct', a: 8, b: 12, c: 16 },
    { name: 'Nov', a: 6, b: 10, c: 12 },
    { name: 'Dec', a: 10, b: 15, c: 20 },
  ], []);
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <div className="subheading">Sales Overview</div>
        <div className="flex items-center gap-2">
          <button className="h-9 px-3 rounded-xl border border-slate-200 text-sm flex items-center gap-2"><Filter className="size-4"/>Filter</button>
        </div>
      </div>
      <div className="mt-2 text-2xl font-semibold">$ 9,257.51</div>
      <div className="h-56 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <RLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{fill:'#64748b', fontSize:12}} />
            <YAxis tickLine={false} axisLine={false} tick={{fill:'#64748b', fontSize:12}} />
            <Tooltip cursor={{stroke:'#94a3b8'}} contentStyle={{borderRadius:12, border:'1px solid #e2e8f0'}}/>
            <Line type="monotone" dataKey="a" stroke="#6366f1" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="b" stroke="#8b5cf6" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="c" stroke="#22c55e" strokeWidth={3} dot={false} />
          </RLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function SubscriberChart() {
  const data = useMemo(() => [
    { name: 'Sun', uv: 1200 },
    { name: 'Mon', uv: 1600 },
    { name: 'Tue', uv: 3874 },
    { name: 'Wed', uv: 2000 },
    { name: 'Thu', uv: 1700 },
    { name: 'Fri', uv: 1500 },
    { name: 'Sat', uv: 1800 },
  ], []);
  return (
    <div className="card p-4">
      <div className="subheading">Total Subscriber</div>
      <div className="mt-2 text-2xl font-semibold">24,473</div>
      <div className="h-56 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{fill:'#64748b', fontSize:12}}/>
            <YAxis tickLine={false} axisLine={false} tick={{fill:'#64748b', fontSize:12}}/>
            <Tooltip cursor={{fill:'rgba(99,102,241,.08)'}} contentStyle={{borderRadius:12, border:'1px solid #e2e8f0'}}/>
            <Bar dataKey="uv" radius={[8,8,0,0]} fill="url(#grad)"/>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1"/>
                <stop offset="100%" stopColor="#a78bfa"/>
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function SalesDistribution() {
  const COLORS = ['#14b8a6', '#06b6d4', '#93c5fd'];
  const data = [
    { name: 'Website', value: 374.82 },
    { name: 'Mobile App', value: 241.60 },
    { name: 'Other', value: 213.42 },
  ];
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <div className="subheading">Sales Distribution</div>
        <div className="text-sm text-slate-500">Monthly</div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <div className="text-sm text-slate-500">Website</div>
          <div className="text-xl font-semibold">$ 374.82</div>
        </div>
        <div>
          <div className="text-sm text-slate-500">Mobile App</div>
          <div className="text-xl font-semibold">$ 241.60</div>
        </div>
        <div>
          <div className="text-sm text-slate-500">Other</div>
          <div className="text-xl font-semibold">$ 213.42</div>
        </div>
      </div>
      <div className="h-56 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <RPieChart>
            <Tooltip contentStyle={{borderRadius:12, border:'1px solid #e2e8f0'}}/>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={4}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </RPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function IntegrationsList() {
  const rows = [
    { app: 'Stripe', type: 'Finance', rate: '40%', profit: '$650.00' },
    { app: 'Zapier', type: 'CRM', rate: '80%', profit: '$720.50' },
    { app: 'Shopify', type: 'Marketplace', rate: '20%', profit: '$432.25' },
  ];
  return (
    <div className="card p-0">
      <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <div className="subheading">List of Integration</div>
        <button className="text-sm text-indigo-600">See All</button>
      </div>
      <div className="divide-y divide-slate-200">
        <div className="grid grid-cols-4 text-xs text-slate-500 px-4 py-2">
          <div>Application</div>
          <div>Type</div>
          <div>Rate</div>
          <div>Profit</div>
        </div>
        {rows.map((r) => (
          <div key={r.app} className="grid grid-cols-4 items-center px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-slate-100"/>
              <div className="text-sm font-medium">{r.app}</div>
            </div>
            <div className="text-sm text-slate-600">{r.type}</div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-28 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-indigo-500" style={{width: r.rate}} />
              </div>
              <div className="text-sm text-slate-600">{r.rate}</div>
            </div>
            <div className="text-sm font-medium">{r.profit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-full bg-slate-50">
      <Topbar />
      <div className="mx-auto max-w-[1400px] px-6 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 py-6">
        <Sidebar />
        <main className="space-y-6">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
          <KpiCards />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <SalesOverview />
            </div>
            <div>
              <SubscriberChart />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <SalesDistribution />
            </div>
            <div className="lg:col-span-2">
              <IntegrationsList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
