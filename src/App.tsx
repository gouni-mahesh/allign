import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import SecuirtyStep from './component/SecurityStep/SecuirtyStep';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/secure" element={<SecuirtyStep />} />
      </Routes>
    </Router>
  );
}

export default App;
