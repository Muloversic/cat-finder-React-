import { Routes, Route } from 'react-router-dom';
import SharedBreedsPage from '../AppContent/Breeds/SharedBreedsPage';
import Sidebar from '../Sidebar';
import DefaultScreen from '../AppContent/DefaultScreen';
import BreedsPage from '../AppContent/Breeds//BreedsPage';
import CatPage from '../AppContent/Breeds//CatPage';

import './index.scss';
import { useState } from 'react';
const Home = () => {
  const [contentType, setContentType] = useState('default');
  console.log(contentType);

  return (
    <div className="home-page">
      <Sidebar setContentType={setContentType} />
      <Routes>
        <Route index element={<DefaultScreen />} />
        <Route path="breeds" element={<SharedBreedsPage />}>
          <Route index element={<BreedsPage contentType={contentType} />} />
          <Route path=":breedsId" element={<CatPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Home;
