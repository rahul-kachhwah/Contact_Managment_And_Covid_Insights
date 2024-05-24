import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapProps } from "../types/ItemType";
import markerIconPng from "../assets/marker.png";
import L from "leaflet";

const Map: React.FC<MapProps> = ({ countriesData }) => {
  // Define a custom icon using the PNG file
  const customMarkerIcon = new L.Icon({
    iconUrl: markerIconPng,
    iconSize: [32, 32], 
    iconAnchor: [16, 32], 
  });

  return (
    <MapContainer
      className="w-full h-full"
      bounds={[
        [-60, -180],
        [85, 180],
      ]}
      zoom={2}
      center={[20, 40]}
      scrollWheelZoom={true}
    >
      {/* OpenStreetMap tile layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      {/* Map markers for each country */}
      {countriesData.map((country, index) => (
        <Marker
          key={index} // Use index as key for simplicity (make sure it's unique)
          position={[country.countryInfo.lat, country.countryInfo.long]}
          icon={customMarkerIcon} // Use the custom icon
        >
          {/* Popup with country information */}
          <Popup>
            <div>
              <h2 className="font-bold">{country.country}</h2>
              <img
                src={country.countryInfo.flag}
                alt={`${country.country} flag`}
                className="w-8 h-6 mb-2"
              />
              <p>Active Cases: {country.active}</p>
              <p>Recovered Cases: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
