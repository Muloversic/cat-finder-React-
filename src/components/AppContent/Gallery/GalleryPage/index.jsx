import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import NoItemsFound from '../../NoItemsFound';
import { getBreedByName, getAllBreeds } from '../../../GetAPI';
import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { removeDuplicates } from '../../../Utilities/removeDuplicatObjFromArr';
import './index.scss';
import { useLocation } from 'react-router';
const GallaeryPage = ({ currentPageName }) => {
  const [searchedBreedRes, setSearchedBreedRes] = useState([]);
  const [isShowLoad, setIsShowLoad] = useState(true);
  const location = useLocation();
  const searchRes = location.state;

  useEffect(() => {
    (async () => {
      const searchedBreedByName = await getBreedByName(searchRes);
      const allBreeds = await getAllBreeds();
      const searchedBreeds = searchedBreedByName.map((serchedBreed) =>
        allBreeds.filter((breed) => breed.id === serchedBreed.id)
      );

      const neededBreeds = [];
      searchedBreeds.forEach((breed) => neededBreeds.push(...breed));

      setSearchedBreedRes(neededBreeds);
      setIsShowLoad(false);
    })();
  }, [searchRes]);

  return (
    <div className="search-page content">
      <Navbar />
      <ActionBar currentPageName={currentPageName} />
      <section className="search search-section content">
        {isShowLoad && (
          <TailSpin height="100" width="100" color="#ff868e4c" ariaLabel="loading" wrapperClass="content-loader" />
        )}
        {searchedBreedRes.length === 0 && !isShowLoad ? <NoItemsFound /> : <GridPhotos />}
      </section>
    </div>
  );
};

export default GallaeryPage;
