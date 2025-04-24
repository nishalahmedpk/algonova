import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import polyline from '@mapbox/polyline';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { FaTruck, FaHospitalAlt } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';

export default function DeliveryModal({ delivery, onClose }) {
  const [route, setRoute] = useState(null);
  const { location: current, destination } = delivery;

  useEffect(() => {
    let isMounted = true;

    async function fetchRoute() {
      try {
        // const token = process.env.REACT_APP_MAPBOX_TOKEN;
        const token = 'pk.eyJ1IjoibmlzaGFsYWhtZWQiLCJhIjoiY205czlmMjN1MDBmazJqczhlcDNlY3hwOSJ9.YOH6Ovt0tl0khKtqASOk0A';
        if (!token) {
          console.error('Mapbox token is missing. Check your .env file.');
          return;
        }

        const coordsString = `${current.lng},${current.lat};${destination.lng},${destination.lat}`;
        const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coordsString}`
          + `?geometries=polyline6&overview=full&access_token=${token}`;

        const res = await fetch(url);
        const json = await res.json();

        if (json.routes && json.routes.length > 0) {
          // Decode precision‑6 polyline to [lat, lng] pairs
          const decoded = polyline.decode(json.routes[0].geometry, 6);
          const latLngs = decoded.map(([lat, lng]) => [lat, lng]);

          if (isMounted) {
            setRoute(latLngs);
          }
        } else {
          console.error('No routes returned by Mapbox:', json);
          if (isMounted) {
            setRoute([]); // empty array signals “no route”
          }
        }
      } catch (err) {
        console.error('Error fetching route from Mapbox:', err);
        if (isMounted) {
          setRoute([]); // fallback
        }
      }
    }

    fetchRoute();
    return () => {
      isMounted = false;
    };
  }, [current, destination]);

  // Create Leaflet divIcons from React Icons
  const truckIcon = new L.DivIcon({
    html: ReactDOMServer.renderToString(<FaTruck className="text-blue-600 text-3xl" />),
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  const pharmacyIcon = new L.DivIcon({
    html: ReactDOMServer.renderToString(<FaHospitalAlt className="text-red-600 text-3xl" />),
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-[90vw] max-w-4xl h-[80vh] rounded-lg p-6 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-4">{delivery.drug} Delivery Details</h3>
        <p className="text-sm text-gray-700 mb-4">
          Supplier: {delivery.supplier}<br />
          ETA: {delivery.eta}<br />
          Quantity: {delivery.quantity}<br />
          Status: {delivery.status}
        </p>

        <MapContainer
          center={[destination.lat, destination.lng]}
          zoom={10}
          className="h-[60%] rounded-lg"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[current.lat, current.lng]} icon={truckIcon} />
          <Marker position={[destination.lat, destination.lng]} icon={pharmacyIcon} />

          {route === null && (
            // Still loading
            <></>
          )}
          {route && route.length > 0 && (
            <Polyline positions={route} color="blue" weight={4} />
          )}
          {route && route.length === 0 && (
            // No route available
            <></>
          )}
        </MapContainer>
      </div>
    </div>
  );
}
