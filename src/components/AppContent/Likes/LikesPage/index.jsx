import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import UserLog from '../../UserLog';
import NoItemsFound from '../../NoItemsFound';
import { getVotedImages, deleteImageById, getImageById } from '../../../GetAPI';
import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
const LikesPage = ({ currentPageName, subId }) => {
  const [votedImages, setVotedImages] = useState([]);
  const [idToDelete, setIdToDelete] = useState(0);
  const [isShowLoad, setIsShowLoad] = useState(true);
  const [imageIdToShow, setImageIdToShow] = useState(0);
  const [userAction, setUserAction] = useState([
    {
      time: [],
      imageId: '',
      voteDir: '',
      voteAction: '',
    },
  ]);

  useEffect(() => {
    (async () => {
      const catsImagesInfo = await getVotedImages('votes', subId);
      catsImagesInfo.forEach(async (catImage) => {
        if (catImage.value === 1) {
          const getImage = await getImageById(catImage.image_id);
          if (getImage.breeds) delete getImage.breeds;
          setVotedImages((prevImages) => {
            return [...prevImages, { ...getImage, vote_id: catImage.id }];
          });
        }
      });

      setIsShowLoad(false);
    })();
  }, []);

  useEffect(() => {
    if (idToDelete) {
      (async () => {
        const isDelted = await deleteImageById(idToDelete);
        if (isDelted.message === 'SUCCESS') {
          const catsImagesInfo = await getVotedImages('votes', subId);
          const likedImages = [];
          for (let catImage of catsImagesInfo) {
            if (catImage.value === 1) {
              const getImage = await getImageById(catImage.image_id);
              if (getImage.breeds) delete getImage.breeds;
              likedImages.push({ ...getImage, vote_id: catImage.id });
            }
          }

          setVotedImages(likedImages);

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
              imageId: imageIdToShow,
              voteDir: 'Likes',
              voteAction: 'deleted from',
            },
          ]);
        }
      })();
    }
  }, [idToDelete]);
  return (
    <div className="likes-page content">
      <Navbar />
      <div className="content-wrapper">
        <ActionBar currentPageName={currentPageName} />
        <section className="likes likes-section content">
          {isShowLoad && (
            <TailSpin height="100" width="100" color="#ff868e4c" ariaLabel="loading" wrapperClass="content-loader" />
          )}
          {votedImages.length === 0 && !isShowLoad ? (
            <NoItemsFound />
          ) : (
            <GridPhotos votedImages={votedImages} setIdToDelete={setIdToDelete} setImageIdToShow={setImageIdToShow} />
          )}
        </section>
        <UserLog userAction={userAction} />
      </div>
    </div>
  );
};

export default LikesPage;
