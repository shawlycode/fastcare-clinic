import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./pages/login/Login";
import Navbar from "./components/nav/Navbar";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
