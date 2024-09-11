// GoogleMapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
//import './activity-googlemap.css'; 

const containerStyle = {
  width: '100%', // Full width of the map container
  height: '100%', // Full height of the container div
};

const center = {
  lat: -37.8136,
  lng: 144.9631
};

// Sample markers
const markers = [
  {
    id: 1,
    position: { lat: -37.8136, lng: 144.9631 },
    title: "Melbourne City"
  },
  {
    id: 2,
    position: { lat: -37.8150, lng: 144.9650 },
    title: "Another Point"
  }
];

const GoogleMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAZMfIP7tO1KU-ejwIQ55D4FVnsm1KFQjo" 
    >
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ width: '66.67%', height: '80vh' }}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            {markers.map(marker => (
              <Marker
                key={marker.id}
                position={marker.position}
                title={marker.title}
              />
            ))}
          </GoogleMap>
        </div>
        <div style={{ width: '33.33%', height: '100%', padding: '20px' }}>
          {/* Additional content goes here */}
          <h2>Side Content</h2>
          <p>Details or other information can be added here.</p>
        </div>
      </div>
    </LoadScript>
  );
}

export default GoogleMapComponent;
