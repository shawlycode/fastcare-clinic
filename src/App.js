import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import LandingPage from './pages/landingpage/LandingPage'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from "./pages/dashboard/Dashboard"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App