import { useEffect, useState } from 'react';
import DeliveryModal from './DeliveryModal';

export default function DeliveryList() {
  const [deliveries, setDeliveries] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  // Simulated data fetch
  useEffect(() => {
    const fetchData = () => {
    //   const data = // inside your fetchData() in DeliveryList.jsx
    const data = [
      {
      drug: "Paracetamol 500mg",
      supplier: "HealthPharm",
      eta: "12:45 PM",
      status: "In Transit",
      quantity: 500,
      driverName: "Ahmed Ali",
      truckId: "TRK-102",
      location: { lat: 25.276987, lng: 55.296249 },
      destination: { lat: 25.2048, lng: 55.2708 },
      pharmacyName: "Deira Community Pharmacy"
      },
      {
      drug: "Ibuprofen 200mg",
      supplier: "MediSupply Co.",
      eta: "1:30 PM",
      status: "Dispatched",
      quantity: 300,
      driverName: "John Doe",
      truckId: "TRK-205",
      location: { lat: 25.276987, lng: 55.296249 },
      destination: { lat: 25.2048, lng: 55.2708 },
      pharmacyName: "Al Barsha Pharmacy"
      },
      {
      drug: "Amoxicillin 250mg",
      supplier: "PharmaPlus",
      eta: "2:15 PM",
      status: "Pending",
      quantity: 200,
      driverName: "Fatima Khan",
      truckId: "TRK-308",
      location: { lat: 29.276987, lng: 55.296249 },
      destination: { lat: 25.2048, lng: 55.2708 },
      pharmacyName: "Jumeirah Health Center"
      },
      {
      drug: "Cough Syrup",
      supplier: "Wellness Distributors",
      eta: "3:00 PM",
      status: "In Transit",
      quantity: 150,
      driverName: "Ali Hassan",
      truckId: "TRK-410",
      location: { lat: 25.276987, lng: 55.296249 },
      destination: { lat: 25.2048, lng: 55.2708 },
      pharmacyName: "Karama Pharmacy"
      },
      {
      drug: "Vitamin C Tablets",
      supplier: "NutriHealth",
      eta: "4:00 PM",
      status: "Delivered",
      quantity: 600,
      driverName: "Sara Ahmed",
      truckId: "TRK-512",
      location: { lat: 25.276987, lng: 55.296249 },
      destination: { lat: 25.2048, lng: 55.2708 },
      pharmacyName: "Downtown Pharmacy"
      }
    ];      
      setDeliveries(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 px-2">Incoming Deliveries</h2>
      <div className="h-[20vh] w-full overflow-y-auto p-2 space-y-4 rounded">
        {deliveries.map((delivery, index) => (
          <div
            key={index}
            onClick={() => setSelectedDelivery(delivery)}
            className="bg-white w-full rounded-lg shadow-md p-4 flex justify-between items-center cursor-pointer hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{delivery.drug}</h3>
              <p className="text-sm text-gray-600">Supplier: {delivery.supplier}</p>
            </div>
            <div className="text-right text-gray-600 text-sm">
              <p>ETA: {delivery.eta}</p>
              <p>Status: {delivery.status}</p>
              <p>Quantity: {delivery.quantity}</p>
            </div>
          </div>
        ))}

        {selectedDelivery && (
          <DeliveryModal
            delivery={selectedDelivery}
            onClose={() => setSelectedDelivery(null)}
          />
        )}
      </div>
    </div>
  );
}
