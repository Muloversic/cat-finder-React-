import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import NoItemsFound from '../../NoItemsFound';
import UserLog from '../../UserLog';
import Modal from '../../Modal';
import { getImageWithManyFiltres, getAllBreeds, sendVotedImage, getVotedImages, deleteVotedImages } from '../../../GetAPI';
import { useEffect, useState } from 'react';
import './index.scss';

const GallaeryPage = ({ currentPageName, subId }) => {
  const [allBreeds, setAllBreeds] = useState([]);
  const [searchedCatImages, setSearchedCatImages] = useState([]);
  const [searchLimit, setSearchLimit] = useState(5);
  const [sortOrder, setSortOred] = useState('RANDOM');
  const [imageType, setImageType] = useState('jpg,png');
  const [catBreed, setCatBreed] = useState('');
  const [imgToFavour, setImgToFavour] = useState('');
  const [isUserAddFavour, setIsUserAddFavour] = useState(false);
  const [isUpdateImages, setIsUpdateImages] = useState(false);
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
      const allBreedsName = await getAllBreeds();
      setAllBreeds(allBreedsName);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const images = await getImageWithManyFiltres(sortOrder, searchLimit, imageType, catBreed);
      setSearchedCatImages(images);
    })();
  }, [sortOrder, searchLimit, imageType, catBreed, isUpdateImages]);

  useEffect(() => {
    if (imgToFavour.image_id) {
      (async () => {
        const favouriteImages = await getVotedImages('favourites', subId);
        for (let image of favouriteImages) {
          if (image.sub_id === subId && image.image_id === imgToFavour.image_id) {
            await deleteVotedImages('favourites', image.id);
            setUserAction((prevAction) => [
              ...prevAction,
              {
                time: [new Date().getHours(), new Date().getMinutes()],
                imageId: imgToFavour.image_id,
                voteDir: 'favourites',
                voteAction: 'deleted from',
              },
            ]);
            return;
          }
        }

        await sendVotedImage(imgToFavour, 'favourites');
        setUserAction((prevAction) => [
          ...prevAction,
          {
            time: [new Date().getHours(), new Date().getMinutes()],
            imageId: imgToFavour.image_id,
            voteDir: 'favourites',
            voteAction: 'added to',
          },
        ]);
      })();

      if (userAction.length > 4) {
        setUserAction((prevAction) => {
          prevAction.shift();
          return [...prevAction];
        });
      }
    }
  }, [isUserAddFavour]);

  const handleBreeds = (event) => {
    setCatBreed(event.value);
  };

  const handleLimit = (event) => {
    setSearchLimit(event.value);
  };

  const handleOrder = (event) => {
    setSortOred(event.value);
  };

  const handleType = (event) => {
    setImageType(event.value);
  };

  const hadnleResetImages = () => {
    setIsUpdateImages((prevValue) => !prevValue);
  };

  const openModal = (e) => {
    e.preventDefault();
    document.body.classList.add('lock');
    document.querySelector('.modal').classList.add('modal-active');
  };

  return (
    <>
      <div className="gallery-page content">
        <Navbar />
        <ActionBar
          currentPageName={currentPageName}
          allBreeds={allBreeds}
          handleBreeds={handleBreeds}
          handleLimit={handleLimit}
          handleOrder={handleOrder}
          handleType={handleType}
          hadnleResetImages={hadnleResetImages}
          openModal={openModal}
        />
        <section className="gallery-section content">
          {searchedCatImages.length > 0 ? (
            <GridPhotos
              searchedCatImages={searchedCatImages}
              setImgToFavour={setImgToFavour}
              subId={subId}
              setIsUserAddFavour={setIsUserAddFavour}
            />
          ) : (
            <NoItemsFound />
          )}
          <UserLog userAction={userAction} />
        </section>
      </div>
      <Modal />
    </>
  );
};

export default GallaeryPage;
