import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import NoItemsFound from '../../NoItemsFound';
import { getBreedByName, getAllBreeds } from '../../../GetAPI';
import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { removeDuplicates } from '../../../Utilities/removeDuplicatObjFromArr';
import './index.scss';

const GallaeryPage = ({ currentPageName }) => {
  const [allBreeds, setAllBreeds] = useState([]);
  const [searchedBreedRes, setSearchedBreedRes] = useState([]);
  const [searchLimit, setSearchLimit] = useState(5);
  const [sortOrder, setSortOred] = useState('');
  const [limitedCats, setLimitedCats] = useState([]);
  const [catBreed, setCatBreed] = useState('');
  const [imageType, setImageType] = useState('');

  useEffect(() => {
    (async () => {
      const allBreedsName = await getAllBreeds();
      setAllBreeds(allBreedsName);
    })();
  }, []);

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
    <div className="search-page content">
      <Navbar />
      <ActionBar
        currentPageName={currentPageName}
        allBreeds={allBreeds}
        handleBreeds={handleBreeds}
        handleLimit={handleLimit}
        handleOrder={handleOrder}
        handleType={handleType}
      />
      <section className="search search-section content">
        <GridPhotos currentPageName={currentPageName} />
      </section>
    </div>
  );
};

export default GallaeryPage;
