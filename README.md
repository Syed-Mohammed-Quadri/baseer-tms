# Baseer TMS - Terminal Management System

A comprehensive airport terminal management platform built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone and install dependencies**

```bash
git clone <repository-url>
cd baseer-tms
npm install
```

2. **Create environment file**
   Create `.env.local` in the root directory:

```bash
NEXT_PUBLIC_RESOURCE_MANAGEMENT_URL=http://14.194.41.182/tms/login
```

3. **Start development server**

```bash
npm run dev
```

4. **Open application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm start       # Start production server
npm run lint    # Lint code
```

## 🎨 Features

- 📊 Real-time Dashboard with KPIs and charts
- 🔧 Rule Configuration Engine
- 📈 Analytics with interactive charts
- 👥 Resource Management (iframe integration)
- 📅 Resource Planning (Gantt chart)
- 🛩️ Operations Center with visual layout
- 🎯 Gate Management (grid/map views)
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive design

## 🔧 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Charts:** Custom SVG + Recharts

## 🐛 Troubleshooting

**Iframe not loading?**

- Check console for CORS errors
- Use "Open in New Tab" button as fallback
- Verify environment variable is set correctly

**Theme not working?**

- Restart dev server after env changes
- Check browser console for errors

---

**Need help?** Create an issue in the repository.
