import { Link } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/24/outline'

export default function DashboardHeader({ title }) {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4 mb-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <Link
        to="/"
        className="text-gray-600 hover:text-blue-600 transition-colors"
        title="Go to Home"
      >
        <HomeIcon className="h-6 w-6" />
      </Link>
    </header>
  )
}
