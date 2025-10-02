# 🚀 Quick Start Guide - Nexus Dashboard

Get your dashboard running in **3 simple steps**!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages (~313 packages, takes ~30 seconds).

## Step 2: Start Development Server

```bash
npm run dev
```

Your dashboard will be available at: **http://localhost:5173**

## Step 3: Open in Browser

Open your browser and navigate to:
```
http://localhost:5173
```

## 🎉 That's it! Your dashboard is now running!

---

## 📝 Additional Commands

### Build for Production
```bash
npm run build
```
Creates optimized production files in `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Test the production build locally.

### Run Linter
```bash
npm run lint
```
Check code quality and catch errors.

---

## 🎨 What You'll See

Your dashboard includes:

✅ **Sidebar Navigation** - Full menu with Dashboard, Payment, Customers, Messages, etc.

✅ **Top Header** - Search bar, notifications, user profile

✅ **3 Metric Cards** - Page Views, Total Revenue, Bounce Rate

✅ **Sales Overview Chart** - Stacked bar chart showing regional sales data

✅ **Total Subscriber Chart** - Weekly subscriber metrics

✅ **Sales Distribution** - Pie chart showing sales by channel

✅ **Integration List** - Table of connected apps (Stripe, Zapier, Shopify)

---

## 🔧 Customization

### Update Data

All components use mock data. To customize:

1. **Metric Cards**: Edit `src/components/Dashboard.tsx`
2. **Sales Chart**: Edit `src/components/SalesOverview.tsx`
3. **Subscribers**: Edit `src/components/TotalSubscriber.tsx`
4. **Distribution**: Edit `src/components/SalesDistribution.tsx`
5. **Integrations**: Edit `src/components/IntegrationList.tsx`

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#8b5cf6',  // Change this
    600: '#7c3aed',  // And this
  }
}
```

---

## 📚 Documentation

- **README.md** - Detailed setup and usage
- **PROJECT_SUMMARY.md** - Complete project overview
- **DASHBOARD_FEATURES.md** - Feature documentation
- **IMPLEMENTATION_CHECKLIST.md** - Implementation details

---

## 🆘 Troubleshooting

### Port 5173 already in use?

```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9

# Or change the port in vite.config.ts
```

### Dependencies not installing?

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Build errors?

```bash
# Check for linting issues
npm run lint

# Make sure TypeScript compiles
npx tsc --noEmit
```

---

## 💡 Pro Tips

1. **Hot Reload**: Changes appear instantly during development
2. **VS Code**: Install Tailwind CSS IntelliSense extension
3. **DevTools**: React DevTools extension is very helpful
4. **TypeScript**: Hover over variables to see type information

---

## 🌟 Next Steps

Now that your dashboard is running, you might want to:

1. **Connect to API** - Replace mock data with real API calls
2. **Add Authentication** - Implement user login
3. **Create More Pages** - Add Payment, Customers, Analytics pages
4. **Add Dark Mode** - Implement theme toggle
5. **Deploy** - Push to Vercel, Netlify, or your hosting provider

---

## 🎯 Key Features

- ⚡ **Fast**: Built with Vite for instant HMR
- 🎨 **Beautiful**: Modern UI with Tailwind CSS
- 📊 **Charts**: Interactive visualizations with Recharts
- 🔒 **Type-Safe**: Full TypeScript support
- 📱 **Responsive**: Works on all screen sizes
- ♿ **Accessible**: Semantic HTML and ARIA labels

---

## 📞 Need Help?

Check the documentation:
- README.md for detailed instructions
- PROJECT_SUMMARY.md for project overview
- DASHBOARD_FEATURES.md for feature details

---

**Enjoy your new dashboard!** 🎉

Built with ❤️ using React, TypeScript, and Tailwind CSS
