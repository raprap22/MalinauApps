'use client';
import React from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl/maplibre';
import { NavigationControl, FullscreenControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const MalinauMap: React.FC = () => (
  <Map
    initialViewState={{
      longitude: 116.615,
      latitude: 3.5861,
      zoom: 10,
    }}
    style={{ width: '100%', height: '100%' }}
    mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    mapLib={import('maplibre-gl')}
  >
    <NavigationControl position="top-left" />
    <FullscreenControl position="top-left" />
    <Marker longitude={116.615} latitude={3.5861} anchor="bottom">
      <div className="text-2xl" role="img" aria-label="marker">
        📍
      </div>
    </Marker>
  </Map>
);

export default MalinauMap;
