import { useEffect, useState } from 'react'
import MedicineModal from './MedicineModal'

export default function MedicineList() {
  const [medicines, setMedicines] = useState([])
  const [selectedMedicine, setSelectedMedicine] = useState(null)

  // Fetch data periodically every 15 seconds
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch('https://your-api.com/medicines') // ← Replace with your API
        // const data = await res.json()
        const data = [
            {
              "name": "Paracetamol 500mg",
              "stock": 120,
              "expectedDemand": 200,
              "supplier": "HealthPharm",
              "distributionCenter": "Dubai Central",
              "reorderThreshold": 100
            },
            {
              "name": "Ibuprofen 200mg",
              "stock": 80,
              "expectedDemand": 140,
              "supplier": "MediExpress",
              "distributionCenter": "Sharjah DC",
              "reorderThreshold": 60
            },
            {
              "name": "Amoxicillin 250mg",
              "stock": 50,
              "expectedDemand": 100,
              "supplier": "PharmaPlus",
              "distributionCenter": "Abu Dhabi DC",
              "reorderThreshold": 40
            },
            {
              "name": "Cetirizine 10mg",
              "stock": 200,
              "expectedDemand": 300,
              "supplier": "AllergyCare",
              "distributionCenter": "Dubai Central",
              "reorderThreshold": 150
            },
            {
              "name": "Metformin 500mg",
              "stock": 90,
              "expectedDemand": 180,
              "supplier": "DiabetesHealth",
              "distributionCenter": "Sharjah DC",
              "reorderThreshold": 70
            },
            {
              "name": "Aspirin 100mg",
              "stock": 60,
              "expectedDemand": 120,
              "supplier": "CardioPharm",
              "distributionCenter": "Abu Dhabi DC",
              "reorderThreshold": 50
            }
          ]
          
        setMedicines(data)
      } catch (error) {
        console.error('Failed to fetch medicine data', error)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 15000)
    return () => clearInterval(interval)
  }, [])

return (
  <div>
    <h2 className="text-2xl font-bold mb-4 px-2">Medicine Inventory</h2>
    <div className="h-[20vh] w-full overflow-y-auto p-2 space-y-4">
      {medicines.map((med, index) => (
        <div
          key={index}
          onClick={() => setSelectedMedicine(med)}
          className="bg-white h-25 w-full rounded-lg shadow-md p-2 flex justify-between items-center cursor-pointer hover:shadow-xl transition"
        >
          <div>
            <h3 className="text-l font-semibold text-gray-800">{med.name}</h3>
          </div>
          <div className="text-gray-600 text-right">
            <p>Stock Available: {med.stock}</p>
            <p>Expected Demand: {med.expectedDemand}</p>
          </div>
        </div>
      ))}

      {selectedMedicine && (
        <MedicineModal
          medicine={selectedMedicine}
          onClose={() => setSelectedMedicine(null)}
        />
      )}
    </div>
  </div>
)
}