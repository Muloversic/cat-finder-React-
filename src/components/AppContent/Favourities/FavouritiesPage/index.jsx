import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import { getVotedImages, deleteVotedImages } from '../../../GetAPI';
import { useEffect, useState } from 'react';
const FavouritesPage = ({ currentPageName, subId }) => {
  const [votedImages, setVotedImages] = useState([]);
  const [idToDelete, setIdToDelete] = useState('');
  useEffect(() => {
    if (idToDelete) (async () => await deleteVotedImages('favourites', idToDelete))();
    (async () => {
      const catsImages = await getVotedImages('favourites', subId);
      console.log('delete', catsImages);
      setVotedImages(catsImages);
    })();
  }, [idToDelete]);
  return (
    <div className="favourites-page content">
      <Navbar />
      <ActionBar currentPageName={currentPageName} />
      <section className="favourites favourites-section content">
        <GridPhotos votedImages={votedImages} setIdToDelete={setIdToDelete} />
      </section>
    </div>
  );
};

export default FavouritesPage;
