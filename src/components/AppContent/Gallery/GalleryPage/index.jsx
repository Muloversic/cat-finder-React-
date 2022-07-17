import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import NoItemsFound from '../../NoItemsFound';
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
  }, [sortOrder, searchLimit, imageType, catBreed]);

  useEffect(() => {
    if (imgToFavour.image_id) {
      (async () => {
        const favouriteImages = await getVotedImages('favourites', subId);
        for (let image of favouriteImages) {
          if (image.sub_id === subId && image.image_id === imgToFavour.image_id) {
            await deleteVotedImages('favourites', image.id);
            return;
          }
        }

        await sendVotedImage(imgToFavour, 'favourites');
      })();
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

  return (
    <div className="gallery-page content">
      <Navbar />
      <ActionBar
        currentPageName={currentPageName}
        allBreeds={allBreeds}
        handleBreeds={handleBreeds}
        handleLimit={handleLimit}
        handleOrder={handleOrder}
        handleType={handleType}
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
      </section>
    </div>
  );
};

export default GallaeryPage;
