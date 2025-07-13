import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapClickHandler({ onClick }) {
  useMapEvents({ click: onClick });
  return null;
}

function MapView({ markers, onMapClick, center, onMarkerDelete }) {
  return (
    <div className="leaflet-container">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler onClick={onMapClick} />
        {markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} icon={defaultIcon}>
            <Popup>
              {marker.label ? (
                <strong>{marker.label}</strong>
              ) : (
                <>
                  Lat: {marker.lat.toFixed(4)}, Lng: {marker.lng.toFixed(4)}
                </>
              )}
              <br />
              <button onClick={() => onMarkerDelete(index)} style={{ marginTop: '6px', cursor: 'pointer' }}>
                ❌ Remove Marker
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
