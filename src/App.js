import './App.css';
import HomePage from './pages/HomePage';
import HealthPage from './pages/HealthPage';
import EducationPage from './pages/EducationPage';
import AgriculturePage from './pages/AgriculturePage';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="health" element={<HealthPage />} />
        <Route path="agriculture" element={<AgriculturePage />} />
        <Route path="education" element={<EducationPage />} />
      </Routes>
    </div>
  );
}

export default App;
