import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import UserLog from '../../UserLog';
import NoItemsFound from '../../NoItemsFound';
import { getVotedImages, deleteVotedImages } from '../../../GetAPI';
import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
const FavouritesPage = ({ currentPageName, subId }) => {
  const [votedImages, setVotedImages] = useState([]);
  const [idToDelete, setIdToDelete] = useState('');
  const [isShowLoad, setIsShowLoad] = useState(true);
  const [userAction, setUserAction] = useState([
    {
      time: [],
      imageId: '',
      voteDir: '',
      voteAction: '',
    },
  ]);

  console.log('not mounted');
  useEffect(() => {
    console.log(' mounted');
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
      setIsShowLoad(false);
    })();
  }, [idToDelete]);

  return (
    <div className="favourites-page content">
      <Navbar />
      <ActionBar currentPageName={currentPageName} />
      <section className="favourites favourites-section content">
        {isShowLoad && (
          <TailSpin height="100" width="100" color="#ff868e4c" ariaLabel="loading" wrapperClass="content-loader" />
        )}
        {votedImages.length === 0 && !isShowLoad ? (
          <NoItemsFound />
        ) : (
          <>
            <GridPhotos votedImages={votedImages} setIdToDelete={setIdToDelete} />
          </>
        )}
      </section>
      <UserLog userAction={userAction} />
    </div>
  );
};

export default FavouritesPage;
