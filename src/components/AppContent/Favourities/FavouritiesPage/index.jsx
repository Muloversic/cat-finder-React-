import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import { getVotedImages } from '../../../GetAPI';
import { useEffect, useState } from 'react';
const FavouritesPage = ({ currentPageName, subId }) => {
  const [votedImages, setVotedImages] = useState([]);
  useEffect(() => {
    (async () => {
      const catsImages = await getVotedImages('favourites', subId);
      setVotedImages(catsImages);
    })();
  }, []);
  return (
    <div className="favourites-page content">
      <Navbar />
      <ActionBar currentPageName={currentPageName} />
      <section className="favourites favourites-section content">
        <GridPhotos votedImages={votedImages} />
      </section>
    </div>
  );
};

export default FavouritesPage;
