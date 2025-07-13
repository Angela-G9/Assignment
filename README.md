###  Leaflet Map – Nakuru City
A simple and interactive React application built with Leaflet and React-Leaflet that allows users to:

✅ View a map of Nakuru
✅ Search for any location and drop a marker
✅ Add custom markers by clicking on the map
✅ See latitude/longitude in popups
✅ View all searched locations in a collapsible footer panel
✅ Remove individual search results and their markers
✅ Toggle between Light and Dark mode

### Features
Feature	Description
🗺️ Default Map View	Centered on Nakuru City with a marker at the city center
➕ Click to Add Marker	Clicking on the map adds a new marker and shows coordinates
🔍 Search Location	Uses OpenStreetMap Nominatim API to geocode location queries
📍 Marker Popup	Displays location name or latitude & longitude
📜 Search Result Panel (Footer Style)	Displays all searched locations below the map
❌ Remove Search Result & Marker	Users can remove items individually from the footer and map
🌙 Dark/Light Theme Toggle	User can switch between dark and light modes

### Tech Stack
React (Functional Components + Hooks)
Leaflet via react-leaflet
OpenStreetMap Nominatim API (for geocoding/search)
CSS (Custom styles with responsive design and dark mode)

### How to Run
Clone the repository
git clone https://github.com/Angela-G9/nakuru-leaflet-map.git
cd nakuru-leaflet-map
Install dependencies

bash Copy Edit npm install Run the application

bash Copy Edit npm run dev Open in your browser at http://localhost:5173

### Folder Structure
bash Copy Edit src/ ├── Components/ │ ├── MapView.jsx # Map logic & markers │ └── SearchBar.jsx # Location search bar ├── App.jsx # Main component ├── App.css # Custom styling └── main.jsx # App entry point

### Assignment Goals Met
✅ Display map of Nakuru with initial marker

✅ Add marker on map click with coordinates

✅ Display popup with lat/lng or label

✅ Search for location and display on map

✅ Clean, readable, modern JavaScript (async/await, destructuring)

✅ Optional: Used footer-style list for results + theme switch

#### Notes & Challenges
Integrated with Nominatim for geocoding without needing API keys.

Ensured user-friendly experience with clear UI and theming options.

Used CSS transitions to make Dark Mode and list interaction smooth.

### Final Thoughts
This project demonstrates effective use of mapping APIs, modern React development, and user interaction features with clean UI/UX. Perfect as a learning foundation or starting point for more advanced GIS web apps.

### License MIT License
