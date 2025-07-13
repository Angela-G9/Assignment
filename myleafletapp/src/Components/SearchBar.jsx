import React, { useState } from 'react';
import '../App.css';
import { toast } from 'react-toastify'; 

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ', Kenya')}` 
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        onSearch(
          { lat: parseFloat(lat), lng: parseFloat(lon) },
          display_name
        );
      } else {
        // ❌ Old alert
        // alert('Location not found.');

        // ✅ New Toast
        toast.error('Location not found in Kenya.', {
          position: 'top-right',
        });
      }
    } catch (error) {
      console.error('Search error:', error);
      toast.error('An error occurred while searching.', {
        position: 'top-right',
      });
    }
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        className="search-input"
        type="text"
        placeholder="Search for a location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
