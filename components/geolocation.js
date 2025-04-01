"use client"
import React, { useState, useEffect } from 'react';
import { MapPin, Thermometer } from 'lucide-react';

const GeoLocation = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [permissionState, setPermissionState] = useState('prompt');

  useEffect(() => {
    // Check if browser supports permissions API
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'geolocation' })
        .then((permissionStatus) => {
          setPermissionState(permissionStatus.state);
          permissionStatus.onchange = () => {
            setPermissionState(permissionStatus.state);
          };
        });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          try {
            const url = `https://open-weather13.p.rapidapi.com/city/latlon/${latitude}/${longitude}`;
            const options = {
              method: 'GET',
              headers: {
                'x-rapidapi-key': 'bc42fd55b0msh70b8d0c443dad3dp1c19d5jsncddb6f66fb4b',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
              }
            };

            const response = await fetch(url, options);
            const data = await response.json();
            setWeather(data);
          } catch (err) {
            setError('Failed to fetch weather data');
            console.error(err);
          }
        },
        (err) => {
          if (err.code === 1) {
            setError('Please allow location access to see weather information');
          } else {
            setError('Failed to get location');
          }
          console.error(err);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }
  }, []);

  if (error) {
    return (
      <div className="flex items-center gap-2 text-red-500">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{error}</span>
      </div>
    );
  }

  if (!location || !weather) {
    return (
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 animate-pulse" />
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  const tempCelsius = Math.round(weather.main.temp - 273.15);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <MapPin className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-medium">{weather.name}</span>
      </div>
      <div className="flex items-center gap-1">
        <Thermometer className="w-4 h-4 text-red-500" />
        <span className="text-sm font-medium">{tempCelsius}°C</span>
      </div>
    </div>
  );
};

export default GeoLocation;
