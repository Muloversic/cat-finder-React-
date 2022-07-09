import { getAllBreeds, getLimitedImages } from '../../GetAPI';
import Navbar from '../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import './index.scss';
import { useEffect, useState } from 'react';

const BreedsPage = ({ contentType }) => {
  const [allCats, setAllCats] = useState([]);
  const [limitedCatImages, setLimitedCatImages] = useState([]);
  const [catBreed, setCatBreed] = useState('');
  const [searchLimit, setSearchLimit] = useState(10);
  useEffect(() => {
    const setAllBreeds = async () => {
      const allBreeds = await getAllBreeds();
      setAllCats(allBreeds);
    };

    const setLimitedBreedImages = async () => {
      const limitedBreeds = await getLimitedImages(searchLimit, catBreed);
      setLimitedCatImages(limitedBreeds);
    };

    setAllBreeds();
    setLimitedBreedImages();
  }, [searchLimit, catBreed]);

  const handleBreeds = function (breed) {
    setCatBreed(breed.value);
  };

  const handleLimit = function (limit) {
    setSearchLimit(limit.value);
  };

  return (
    <section className="breeds-page content">
      <Navbar />
      <ActionBar contentType={contentType} allCats={allCats} handleBreeds={handleBreeds} handleLimit={handleLimit} />
      <GridPhotos limitedCatImages={limitedCatImages} />
    </section>
  );
};

export default BreedsPage;
