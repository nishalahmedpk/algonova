// HeatmapLayer.jsx
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

export default function HeatmapLayer({ points }) {
  const map = useMap();

  useEffect(() => {
    // Create heat layer: gradient from blue (0) to red (1)
    const heat = L.heatLayer(points, {
      radius: 25,
      blur: 15,
      gradient: { 0: 'blue', 1: 'red' }
    });

    heat.addTo(map);
    return () => {
      map.removeLayer(heat);
    };
  }, [map, points]);

  return null;
}
