import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SharedBreedsPage from '../AppContent/Breeds/SharedBreedsPage';
import Sidebar from '../Sidebar';
import DefaultScreen from '../AppContent/DefaultScreen';
import BreedsPage from '../AppContent/Breeds//BreedsPage';
import CatPage from '../AppContent/Breeds//CatPage';
import VotingPage from '../AppContent/Voting/VotingPage';
import FavouritesPage from '../AppContent/Favourities/FavouritiesPage';
import LikesPage from '../AppContent/Likes/LikesPage';
import DislikesPage from '../AppContent/Dislikes/DislikesPage';
import SearchPage from '../AppContent/Search/SearchPage';
import SharedSearchPage from '../AppContent/Search/SharedSearchPage';
import SearchedCatPage from '../AppContent/Search/SearchedCatPage';
import GallaeryPage from '../AppContent/Gallery/GalleryPage';
import './index.scss';

const Home = () => {
  const [currentPageName, setCurrentPageName] = useState('default');
  const [subId, setSubId] = useState('Muloversic');
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
        <Route path="voting" element={<VotingPage currentPageName={currentPageName} subId={subId} />} />
        <Route path="favourites" element={<FavouritesPage currentPageName={currentPageName} subId={subId} />} />
        <Route path="likes" element={<LikesPage currentPageName={currentPageName} subId={subId} />} />
        <Route path="dislikes" element={<DislikesPage currentPageName={currentPageName} subId={subId} />} />
        <Route path="search" element={<SharedSearchPage />}>
          <Route index element={<SearchPage currentPageName={currentPageName} />} />
          <Route path=":breedsId" element={<SearchedCatPage currentPageName={currentPageName} />} />
        </Route>
        <Route path="gallery" element={<GallaeryPage currentPageName={currentPageName} subId={subId} />} />
      </Routes>
    </div>
  );
};

export default Home;
