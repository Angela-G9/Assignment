import React, { useState } from 'react';
import MapView from './Components/MapView';
import SearchBar from './Components/SearchBar';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [markers, setMarkers] = useState([
    { lat: -0.3031, lng: 36.0800, label: "Nakuru City Center" },
  ]);

  const [mapCenter, setMapCenter] = useState({ lat: -0.3031, lng: 36.0800 });
  const [darkMode, setDarkMode] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setMarkers((prev) => [...prev, { lat, lng }]);
  };

  const handleSearchResult = (coords, label) => {
    const newMarker = { ...coords, label };
    setMapCenter(coords);
    setMarkers((prev) => [...prev, newMarker]);
    setSearchResults((prev) => [...prev, newMarker]);
  };

  const handleResultClick = (lat, lng, label) => {
    setMapCenter({ lat, lng });
    toast.success(`Centered on: ${label}`, { position: 'bottom-right' });
  };

  const handleRemoveResult = (indexToRemove) => {
    const updatedResults = searchResults.filter((_, idx) => idx !== indexToRemove);
    const labelToRemove = searchResults[indexToRemove]?.label;
    setSearchResults(updatedResults);
    setMarkers((prev) => prev.filter((m) => m.label !== labelToRemove));
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-theme-btn">
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="header-section">
        <h2 className="app-title">Leaflet Map – Nakuru City</h2>
        <SearchBar onSearch={handleSearchResult} />
      </div>

      <MapView markers={markers} onMapClick={handleMapClick} center={mapCenter} />

      {searchResults.length > 0 && (
        <div className="results-panel">
          <h4>Search Results</h4>
          <ul>
            {searchResults.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => handleResultClick(item.lat, item.lng, item.label)}
                  style={{ flex: 1, cursor: 'pointer' }}
                >
                  📍 <strong>{item.label}</strong><br />
                  <small>Lat: {item.lat.toFixed(4)}, Lng: {item.lng.toFixed(4)}</small>
                </div>
                <button className="remove-btn" onClick={() => handleRemoveResult(index)} title="Remove">
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default App;