import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import UserLog from '../../UserLog';
import NoItemsFound from '../../NoItemsFound';
import { getVotedImages, deleteVotedImages } from '../../../GetAPI';
import { useEffect, useState } from 'react';
const FavouritesPage = ({ currentPageName, subId }) => {
  const [votedImages, setVotedImages] = useState([]);
  const [idToDelete, setIdToDelete] = useState('');
  const [userAction, setUserAction] = useState([
    {
      time: [],
      imageId: '',
      voteDir: '',
      voteAction: '',
    },
  ]);
  useEffect(() => {
    if (idToDelete) {
      (async () => await deleteVotedImages('favourites', idToDelete))();
      (async () => {
        const catsImages = await getVotedImages('favourites', subId);
        setVotedImages(catsImages);
      })();

      if (userAction.length > 4) {
        setUserAction((prevAction) => {
          prevAction.shift();
          return [...prevAction];
        });
      }

      setUserAction((prevAction) => [
        ...prevAction,
        {
          time: [new Date().getHours(), new Date().getMinutes()],
          imageId: idToDelete,
          voteDir: 'Favourites',
          voteAction: 'deleted from',
        },
      ]);
    }

    (async () => {
      const catsImages = await getVotedImages('favourites', subId);
      setVotedImages(catsImages);
    })();
  }, [idToDelete]);

  console.log(votedImages);
  return (
    <div className="favourites-page content">
      <Navbar />
      <ActionBar currentPageName={currentPageName} />
      <section className="favourites favourites-section content">
        {votedImages.length === 0 ? (
          <NoItemsFound />
        ) : (
          <GridPhotos votedImages={votedImages} setIdToDelete={setIdToDelete} />
        )}
      </section>
      <UserLog userAction={userAction} />
    </div>
  );
};

export default FavouritesPage;
