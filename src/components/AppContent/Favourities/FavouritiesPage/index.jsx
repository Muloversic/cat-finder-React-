import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
const FavouritesPage = ({ currentPageName }) => {
  return (
    <div className="favourites-page content">
      <Navbar />
      <ActionBar currentPageName={currentPageName} />
      <section className="favourites favourites-section content">
        <GridPhotos />
      </section>
    </div>
  );
};

export default FavouritesPage;
