import { Routes, Route } from 'react-router-dom';

import Sidebar from '../Sidebar';
import DefaultScreen from '../AppContent/DefaultScreen';
import BreedsPage from '../AppContent/BreedsPage';

import './index.scss';
import { useState } from 'react';
const Home = () => {
  const [contentType, setContentType] = useState('default');
  console.log(contentType);

  return (
    <div className="home-page">
      <Sidebar setContentType={setContentType} />
      <Routes>
        <Route path="/" element={<DefaultScreen />} />
        <Route path="breeds" element={<BreedsPage contentType={contentType} />}>
          <Route path=":breedsId" />
        </Route>
      </Routes>
    </div>
  );
};

export default Home;
