import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import SecuirtyStep from './component/SecurityStep/SecuirtyStep';
import States from './component/StatesSection1/States';
import JoinOurTeam from './component/JoinOurTeam1/JoinOurTeam';
import XPediaGroupBar from './component/XPediaGroupBar 1/XPediaGroupBar';
import BenefitsSection from './component/BenefitsSection1/BenefitsSection';
import CareerList from './component/CareerList/CareerList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/secure" element={<SecuirtyStep />} />
        <Route path="/states" element={<States/>}/>
        <Route path="/join" element={<JoinOurTeam/>}/>
        <Route path="/xpedia" element={<XPediaGroupBar/>}/>
        <Route path="/benefit" element={<BenefitsSection />}/>
        <Route path="/careerlist" element={<CareerList />}/>
        
      </Routes>
    </Router>
  );
}

export default App;
