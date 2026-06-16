# 🌤️ Weather Dashboard

A beautiful, modern weather dashboard built with **Next.js 14**, **React 18**, and **Tailwind CSS**.

## ✨ Features

✅ **Search Any City** - Find weather information for cities worldwide  
✅ **Real-time Weather Data** - Powered by Open-Meteo API (free, no API key needed)  
✅ **Beautiful UI** - Modern glassmorphism design with smooth animations  
✅ **Weather Details** - Temperature, humidity, wind speed, and weather conditions  
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile  
✅ **Error Handling** - Friendly error messages  

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Ankriy/my-awesome-app.git
cd my-awesome-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Open-Meteo API** - Free weather data API

## 📁 Project Structure

```
my-awesome-app/
├── src/
│   ├── app/
│   │   ├── page.jsx          # Main page
│   │   ├── layout.jsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── SearchBar.jsx     # Search component
│       └── WeatherCard.jsx   # Weather display component
├── public/                    # Static assets
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── next.config.js           # Next.js configuration
```

## 🌐 API Integration

This project uses the **Open-Meteo API**, which is:
- ✅ Free - No API key required
- ✅ No rate limiting for reasonable usage
- ✅ Fast and reliable
- ✅ Privacy-friendly

### API Endpoints Used
- Geocoding: `https://geocoding-api.open-meteo.com/v1/search`
- Weather: `https://api.open-meteo.com/v1/forecast`

## 🎯 How to Use

1. **Search for a City**: Enter any city name in the search box and press Enter or click the search button
2. **View Weather**: The app displays:
   - 🌡️ Current temperature in Celsius
   - 💧 Humidity percentage
   - 💨 Wind speed in km/h
   - 📝 Weather condition description
   - 😊 Weather emoji for quick visual reference

3. **Error Handling**: If a city is not found, you'll see a clear error message

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub (already done!)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Other Deployment Options
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 License

MIT License - feel free to use and modify!

---

**Made with ❤️ by GitHub Copilot**
