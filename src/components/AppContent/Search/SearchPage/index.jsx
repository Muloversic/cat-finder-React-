import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import NoItemsFound from '../../NoItemsFound';
import { getVotedImages, getImageById } from '../../../GetAPI';
import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import './index.scss';
const SearchPage = ({ currentPageName, subId }) => {
  const [searchedImages, setSearchedImages] = useState([]);
  const [isShowLoad, setSsShowLoad] = useState(true);
  const [searchRes, setSearchRes] = useState();

  return (
    <div className="search-page content">
      <Navbar setSearchRes={setSearchRes}/>
      <ActionBar currentPageName={currentPageName} />
      <section className="search search-section content">
        <p className="search-result">
          Search results for: <span>{searchRes}</span>
        </p>
        {isShowLoad && (
          <TailSpin height="100" width="100" color="#ff868e4c" ariaLabel="loading" wrapperClass="content-loader" />
        )}
        {searchedImages.length === 0 && !isShowLoad ? <NoItemsFound /> : <GridPhotos searchedImages={searchedImages} />}
      </section>
    </div>
  );
};

export default SearchPage;
