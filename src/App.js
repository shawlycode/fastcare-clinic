
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Overview from './pages/sidebar/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/sidebar/Reports';
import Team from './pages/sidebar/Team';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/overview' exact component={Overview} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/reports/reports1' exact component={ReportsOne} />
          <Route path='/reports/reports2' exact component={ReportsTwo} />
          <Route path='/reports/reports3' exact component={ReportsThree} />
          <Route path='/team' exact component={Team} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
