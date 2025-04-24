
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LandingPage from './LandingPage'
import StrategicDashboard from './StrategicDashboard'
import TacticalDashboard from './TacticalDashboard'
import FrontlineDashboard from './FrontlineDashboard'
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';  // registers L.heatLayer()




function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/strategic" element={<StrategicDashboard />} />
        <Route path="/tactical" element={<TacticalDashboard />} />
        <Route path="/frontline" element={<FrontlineDashboard />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}