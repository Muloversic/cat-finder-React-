import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SharedBreedsPage from '../AppContent/Breeds/SharedBreedsPage';
import Sidebar from '../Sidebar';
import DefaultScreen from '../AppContent/DefaultScreen';
import BreedsPage from '../AppContent/Breeds//BreedsPage';
import CatPage from '../AppContent/Breeds//CatPage';
import './index.scss';

const Home = () => {
  const [currentPageName, setCurrentPageName] = useState('default');
  const location = useLocation();
  useEffect(() => {
    const pageName = location.pathname.split('/')[1];
    setCurrentPageName(pageName);
  }, [location]);

  return (
    <div className="home-page">
      <Sidebar currentPageName={currentPageName} />
      <Routes>
        <Route index element={<DefaultScreen />} />
        <Route path="breeds" element={<SharedBreedsPage />}>
          <Route index element={<BreedsPage currentPageName={currentPageName} />} />
          <Route path=":breedsId" element={<CatPage currentPageName={currentPageName} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Home;
