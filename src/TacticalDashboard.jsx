import { motion } from 'framer-motion'
import DashboardHeader from "./components/DashboardHeader.jsx";
import MedicineList from "./components/MedicineList.jsx";
import AgentActivityList from "./components/AgentActivityList.jsx";
import DeliveryList from './components/DeliveryList.jsx';
import OutbreakList from './components/OutbreakList.jsx';

export default function FrontlineDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <DashboardHeader title="Tactical Dashboard" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white border border-blue-200 shadow-md rounded-xl p-5">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">📦 Medicine Inventory</h3>
            <MedicineList />
          </div>

          <div className="bg-white border border-green-200 shadow-md rounded-xl p-5">
            <h3 className="text-xl font-semibold text-green-700 mb-3">🧠 Agent Activity Feed</h3>
            <AgentActivityList />
          </div>

          <div className="bg-white border border-yellow-300 shadow-md rounded-xl p-5">
            <h3 className="text-xl font-semibold text-yellow-700 mb-3">🚚 Delivery Tracking</h3>
            <DeliveryList />
          </div>

          <div className="bg-white border border-red-300 shadow-md rounded-xl p-5">
            <h3 className="text-xl font-semibold text-red-700 mb-3">⚠️ Local Outbreak Trends</h3>
            <OutbreakList />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
