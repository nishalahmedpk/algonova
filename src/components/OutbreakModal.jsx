// OutbreakModal.jsx
import { MapContainer, TileLayer } from 'react-leaflet';
import HeatmapLayer from './HeatmapLayer';
import 'leaflet/dist/leaflet.css';

export default function OutbreakModal({ outbreak, onClose }) {
  const center = outbreak.points.length
    ? [outbreak.points[0][0], outbreak.points[0][1]]
    : [25.276987, 55.296249];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90vw] max-w-3xl h-[20vh] rounded-lg p-6 overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold mb-2">{outbreak.name}</h3>
        <p className="text-sm text-gray-700 mb-4">{outbreak.description}</p>
        {/* <MapContainer
          center={center}
          zoom={13}
          className="h-[60%] rounded-md"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <HeatmapLayer points={outbreak.points} />
        </MapContainer> */}
      </div>
    </div>
  );
}
