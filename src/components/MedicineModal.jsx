export default function MedicineModal({ medicine, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 w-full max-w-3xl relative shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
          >
            ✕
          </button>
  
          <h2 className="text-3xl font-bold mb-4">{medicine.name}</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="mb-2"><strong>Stock Available:</strong> {medicine.stock}</p>
              <p className="mb-2"><strong>Expected Demand:</strong> {medicine.expectedDemand}</p>
              <p className="mb-2"><strong>Reorder Threshold:</strong> {medicine.reorderThreshold}</p>
            </div>
  
            <div>
              <p className="mb-2"><strong>Supplier:</strong> {medicine.supplier || 'N/A'}</p>
              <p className="mb-2"><strong>Distribution Center:</strong> {medicine.distributionCenter}</p>
              {/* Add more fields as needed */}
            </div>
          </div>
  
          {/* Optional footer or more info */}
          <div className="mt-6 text-sm text-gray-500 border-t pt-4">
            <p><em>Last updated:</em> {new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    )
  }
  