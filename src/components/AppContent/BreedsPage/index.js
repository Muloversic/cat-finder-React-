import { getAllBreedsLimited, getLimitedImages, getAllBreeds } from '../../GetAPI';
import Navbar from '../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import './index.scss';
import { useEffect, useState } from 'react';

const BreedsPage = ({ contentType }) => {
  const [limitedCats, setLimitedCats] = useState([]);
  const [limitedCatImages, setLimitedCatImages] = useState([]);
  const [allBreeds, setAllBreeds] = useState([]);
  const [catBreed, setCatBreed] = useState('');
  const [searchLimit, setSearchLimit] = useState(10);
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

  return (
    <section className="breeds-page content">
      <Navbar />
      <ActionBar contentType={contentType} allBreeds={allBreeds} handleBreeds={handleBreeds} handleLimit={handleLimit} />
      <GridPhotos limitedCatImages={limitedCatImages} limitedCats={limitedCats} allBreeds={allBreeds} catBreed={catBreed} />
    </section>
  );
};

export default BreedsPage;
