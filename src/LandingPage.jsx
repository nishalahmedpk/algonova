import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function LandingPage() {
  const navigate = useNavigate()

  const categories = [
    { label: 'Strategic Planner', path: '/strategic' },
    { label: 'Tactical Manager', path: '/tactical' },
    { label: 'Front‑line Operator', path: '/frontline' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4"
    >
      <h1 className="text-4xl font-bold mb-8">Welcome to HealthSync AI</h1>
      <p className="mb-6 text-gray-700">Please select your user category to continue:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-xl">
        {categories.map(cat => (
          <button
            key={cat.path}
            onClick={() => navigate(cat.path)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
          >
            {cat.label}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
