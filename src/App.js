import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LandingPage from "./pages/landingpage/LandingPage";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
