'use client';

import { useState, useEffect } from 'react';
import WeatherCard from '@/components/WeatherCard';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('London');

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError('City not found. Please try another search.');
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=celsius`
      );
      const weatherData = await weatherResponse.json();

      setWeather({
        city: name,
        country: country,
        temperature: Math.round(weatherData.current.temperature_2m),
        humidity: weatherData.current.relative_humidity_2m,
        windSpeed: Math.round(weatherData.current.wind_speed_10m),
        weatherCode: weatherData.current.weather_code,
        description: getWeatherDescription(weatherData.current.weather_code),
        icon: getWeatherEmoji(weatherData.current.weather_code),
      });
      setCity(name);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherDescription = (code) => {
    const descriptions = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Foggy',
      51: 'Drizzle',
      61: 'Rain',
      71: 'Snow',
      80: 'Rain showers',
      85: 'Snow showers',
      95: 'Thunderstorm',
    };
    return descriptions[code] || 'Unknown';
  };

  const getWeatherEmoji = (code) => {
    if (code === 0) return '☀️';
    if (code === 1 || code === 2) return '⛅';
    if (code === 3) return '☁️';
    if (code === 45 || code === 48) return '🌫️';
    if (code === 51) return '🌦️';
    if (code === 61) return '🌧️';
    if (code === 71 || code === 85) return '❄️';
    if (code === 80) return '⛈️';
    if (code === 95) return '⚡';
    return '🌤️';
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (searchCity) => {
    if (searchCity.trim()) {
      fetchWeather(searchCity);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">🌤️ Weather Dashboard</h1>
          <p className="text-white text-opacity-80">Check weather anywhere in the world</p>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={loading} />

        {error && (
          <div className="mt-6 p-4 bg-red-500 bg-opacity-80 text-white rounded-lg text-center">
            {error}
          </div>
        )}

        {weather && !loading && (
          <WeatherCard weather={weather} />
        )}

        {!weather && !loading && !error && (
          <div className="mt-6 weather-card text-center text-gray-500">
            <p>Search for a city to see the weather</p>
          </div>
        )}
      </div>
    </div>
  );
}
