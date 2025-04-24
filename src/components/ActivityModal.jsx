export default function ActivityModal({ activity, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-xl relative shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
          >
            ✕
          </button>
  
          <h2 className="text-2xl font-bold mb-4">{activity.title}</h2>
          <p className="text-gray-700">{activity.details}</p>
        </div>
      </div>
    )
  }
  