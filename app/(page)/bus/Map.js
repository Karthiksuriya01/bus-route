'use client'

import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useState, useEffect } from 'react'

// Fix for default markers not showing
const icon = L.icon({
  iconUrl: '/mark-icon2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})

// Add this function before the Map component
const calculateDistance = (positions) => {
  let totalDistance = 0;
  for (let i = 0; i < positions.length - 1; i++) {
    const point1 = positions[i];
    const point2 = positions[i + 1];
    totalDistance += getDistanceFromLatLonInKm(point1[0], point1[1], point2[0], point2[1]);
  }
  return totalDistance.toFixed(2);
}

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1); 
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return R * c;
}

const deg2rad = (deg) => {
  return deg * (Math.PI/180);
}

const Map = () => {
  // Bus stop coordinates for Vijayawada route
  const busStops = [
    { position: [16.58907761006671, 80.52208823807315], name: "Ibrahimpatnam bus stop" },
    { position: [16.52591770657973, 80.59446306970092], name: "Swathi theatre" },
    { position: [16.519618078004104, 80.60192292357313], name: "Kummari palem" },
    { position: [16.513394478897595, 80.61339629355425], name: "KR market" },
    { position: [16.502976755308218, 80.64213752512788], name: "Bandar road bus stop" },
    { position: [16.503847724447496, 80.63817403537053], name: "IGMC stadium" },
    { position: [16.498471026371725, 80.65348328745029], name: "Benz circle" },
    { position: [16.495368774835597, 80.66161801649031], name: "Patamata" },
    { position: [16.491618, 80.668315], name: "Autonagar gate" },
    { position: [16.48467489184485, 80.6857939452055], name: "Kamayyathopu bus stop" },
    { position: [16.47975980416008, 80.6985242031307], name: "Poranki bus stop" }
  ]

  const [routePoints, setRoutePoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRouteData = async () => {
      const coordinates = busStops.map(stop => `${stop.position[1]},${stop.position[0]}`).join(';');
      const url = `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.routes && data.routes[0]) {
          // Convert coordinates from [lng, lat] to [lat, lng] format
          const points = data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
          setRoutePoints(points);
        }
      } catch (error) {
        console.error('Error fetching route:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRouteData();
  }, []);

  // Google Maps style polyline options
  const polylineOptions = {
    color: '#4285F4',  // Google Maps blue color
    weight: 4,
    opacity: 0.8,
    lineCap: 'round',
    lineJoin: 'round',
    dashArray: null,
    dashOffset: null
  }

  // Calculate bounds from all bus stop positions
  const bounds = L.latLngBounds(busStops.map(stop => stop.position))

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer 
        bounds={bounds}
        boundsOptions={{ padding: [50, 50] }}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {busStops.map((stop, index) => (
          <Marker key={index} position={stop.position} icon={icon}>
            <Popup>
              {stop.name}
            </Popup>
          </Marker>
        ))}
        {!loading && (
          <Polyline 
            positions={routePoints}
            pathOptions={polylineOptions}
          >
            <Popup>Route distance: {calculateDistance(routePoints)}km</Popup>
          </Polyline>
        )}
      </MapContainer>
    </div>
  )
}

export default Map