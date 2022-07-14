import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import HealthPage from './pages/HealthPage';
import EducationPage from './pages/EducationPage';
import AgriculturePage from './pages/AgriculturePage';
import MediaPage from './pages/MediaPage';
import LoadingPage from './pages/LoadingPage';
import
{
  Routes,
  Route,
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import MediaCategory from './components/MediaCategory';

function App()
{
  const [categories, setCategories] = useState([]);

  const { t } = useTranslation();

  useEffect(() =>
  {
    // change language
    document.querySelector('html').setAttribute('lang', t('lang'));
  }, [t]);

  useEffect(() =>
  {
    fetch('http://192.168.100.1:40000/category/list')
      .then(response => response.json())
      .then(data =>
      {
        setCategories(data);
      }
      );
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route index element={<LoadingPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="health" element={<HealthPage />} />
        <Route path="agriculture" element={<AgriculturePage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="media" element={<MediaPage categories={categories} />}>
          {
            categories.map(category => (
              <Route key={category} path={`/media/${category.toLowerCase().split(' ')[0]}`} element={<MediaCategory category={category} />} />
            ))
          }
        </Route>
      </Routes>
    </div>
  );
}

export default App;
