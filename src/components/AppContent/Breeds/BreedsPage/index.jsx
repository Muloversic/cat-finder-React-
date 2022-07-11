import { getAllBreedsLimited, getLimitedImages, getAllBreeds, getLimitedImagesByOrder } from '../../../GetAPI';
import ActionBar from '../BreedsActionBar';
import GridPhotos from '../GridPhotos';
import './index.scss';
import { useEffect, useState } from 'react';

const BreedsPage = ({ contentType }) => {
  const [limitedCats, setLimitedCats] = useState([]);
  const [limitedCatImages, setLimitedCatImages] = useState([]);
  const [allBreeds, setAllBreeds] = useState([]);
  const [catBreed, setCatBreed] = useState('');
  const [searchLimit, setSearchLimit] = useState(10);
  const [sortOrder, setSortOred] = useState('');
  useEffect(() => {
    const setLimitedBreedCats = async () => {
      const limitedBreeds = await getAllBreedsLimited(searchLimit);
      setLimitedCats(limitedBreeds);
    };

    const setLimitedBreedImages = async () => {
      const limitedBreeds = await getLimitedImages(searchLimit, catBreed);
      setLimitedCatImages(limitedBreeds);
    };

    const setAllBreedsData = async () => {
      const allBreeds = await getAllBreeds();
      setAllBreeds(allBreeds);
    };

    setLimitedBreedCats();
    setLimitedBreedImages();
    setAllBreedsData();
  }, [searchLimit, catBreed]);

  const handleBreeds = function (breed) {
    setCatBreed(breed.value);
  };

  const handleLimit = function (limit) {
    setSearchLimit(limit.value);
  };

  const handleImageOrder = function (event) {
    if ([...event.target.classList].includes('actionbar-sort--az')) {
      setSortOred('ASC');
    }

    if ([...event.target.classList].includes('actionbar-sort--za')) {
      setSortOred('DESC');
    }
  };
  
  return (
    <>
      <ActionBar
        contentType={contentType}
        allBreeds={allBreeds}
        handleBreeds={handleBreeds}
        handleLimit={handleLimit}
        handleImageOrder={handleImageOrder}
      />
      <GridPhotos
        limitedCatImages={limitedCatImages}
        limitedCats={limitedCats}
        allBreeds={allBreeds}
        catBreed={catBreed}
        sortOrder={sortOrder}
      />
    </>
  );
};

export default BreedsPage;
