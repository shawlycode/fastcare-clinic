import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import LandingPage from './pages/landingpage/LandingPage'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from "./pages/sidebarPages/Dashboard"
import { Staff, StaffAndUsers, UserAccount, ResetPassWord } from './pages/sidebarPages/StaffAndUsers'


// cont[islogin, setIslogin]= useState(false)
const App = () => {
  return (
    <>

      <Routes >
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

      </Routes>



      <Routes >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff-users" element={<StaffAndUsers />} />
        <Route path="/staff-users/staff" element={<Staff />} />
        <Route path="/staff-users/account" element={<UserAccount />} />
        <Route path="/staff-users/reset-password" element={<ResetPassWord />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>

    </>
  )
}

export default App