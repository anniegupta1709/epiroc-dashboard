# Epiroc Vehicle Dashboard (Frontend)

## 📌 Overview
This is a React + TypeScript web application that recreates a vehicle dashboard interface.  
It displays real-time data from a backend API and allows user interaction such as adjusting motor speed and toggling battery charging.

---

## Live Demo
Frontend: https://epiroc-dashboard-three.vercel.app/
Backend API: https://epirocdashboardapi-1.onrender.com/api/dashboard

---

## Tech Stack
- React (TypeScript)
- Axios (API integration)
- Component-based architecture
- CSS / Inline styling
- SVG for circular gauges

---

## Features

### Top Row Indicators
- Parking Brake Indicator
- Check Engine Indicator
- Motor Status (high RPM warning)
- Battery Low Warning
- Tooltip support for each indicator

---

### Gauges
- Motor RPM Gauge (circular SVG)
- Power Gauge (real-time)

---

### Middle Row
- Gear Ratio
- Battery Percentage
- Motor RPM (numeric)
- Speed Slider (updates backend in real time)

---

### Bottom Row
- Navigation buttons (UI only)
- Charging Button (toggles backend state)
- Real-time UI updates based on backend simulation

---
### Key Functionality
Fetches dashboard data every 2 seconds
Updates speed using slider (API call)
Toggles charging state via backend
Reflects backend simulation instantly in UI

## API Integration

Environment variable:

```env
VITE_API_BASE=https://epirocdashboardapi-1.onrender.com/api/dashboard

Setup Instructions
-------------------
git clone https://github.com/anniegupta1709/epiroc-dashboard
cd your-frontend-folder
npm install
npm start

Build for Production
--------------------
npm run build

Deployment
-----------
Hosted on Vercel
Connected to backend hosted on Render
Environment variables configured in Vercel dashboard

## Author

Annie Gupta