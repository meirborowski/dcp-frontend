import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';

function App() {

  const { t } = useTranslation();


  return (
    <div className="App">
      <Header Title={t('header_title')} pageTitle="Home" withLogo />
    </div>
  );
}

export default App;
