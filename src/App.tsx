import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import BrandStrip from './component/BrandStrip/BrandStrip';
import HomePage from './component/HomePage/HomePage';
import HeroTrust from './component/HeroTrust/HeroTrust';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/header" element={<Header />} />
          <Route path="/home" element={<Home />} />
          <Route path="/brandstrip" element={<BrandStrip />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/hero-trust" element={<HeroTrust />} />
      </Routes>
    </Router>
  );
}

export default App;
