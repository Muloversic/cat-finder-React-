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
      <BreedsPage />
    </div>
  );
};

export default Home;
