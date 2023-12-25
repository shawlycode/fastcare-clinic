import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import LandingPage from '../src/pages/landingpage/LandingPage'
import { Routes, Route } from 'react-router-dom';
// import Overview from './pages/Overview';
// import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
// import Team from './pages/Team';
function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        {/* <Route path='/landingpage' exact component={<LandingPage />} /> */}
        {/* <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} /> */}
      </Routes>
    </>
  );
}

export default App;