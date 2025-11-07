import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import BrandStrip from './Components/BrandStrip/BrandStrip';
import HomePage from './Components/HomePage/HomePage';

import Team from './Components/Team/Team';
import SecuirtyStep from './Components/SecurityStep/SecuirtyStep';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
        <Route path="/header" element={<Header />} />
          <Route path="/" element={<Home />} />
        <Route path="/secure" element={<SecuirtyStep />} />
          <Route path="/brandstrip" element={<BrandStrip />} />
          <Route path="/homepage" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
