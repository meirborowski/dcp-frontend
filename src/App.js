import './App.css';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="education" element={<EducationPage />} />
      </Routes>
    </div>
  );
}

export default App;
