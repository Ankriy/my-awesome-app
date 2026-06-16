'use client';

export default function WeatherCard({ weather }) {
  return (
    <div className="mt-6 weather-card">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">
          {weather.city}, {weather.country}
        </h2>
        <p className="text-gray-600 text-lg">{weather.description}</p>
      </div>

      <div className="text-center mb-8">
        <div className="weather-icon">{weather.icon}</div>
        <div className="temp-display mt-4">{weather.temperature}°C</div>
      </div>

      <div className="grid grid-cols-3 gap-4 border-t pt-6">
        <div className="text-center">
          <p className="text-gray-600 text-sm font-semibold mb-2">HUMIDITY</p>
          <p className="text-2xl font-bold text-gray-800">{weather.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm font-semibold mb-2">WIND SPEED</p>
          <p className="text-2xl font-bold text-gray-800">{weather.windSpeed} km/h</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm font-semibold mb-2">CONDITION</p>
          <p className="text-lg font-bold text-gray-800">{weather.weatherCode}</p>
        </div>
      </div>
    </div>
  );
}
