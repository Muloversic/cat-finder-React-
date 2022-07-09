import Navbar from '../Navbar';
import ActionBar from '../ActionBar';
import GridPhotos from '../GridPhotos';
import './index.scss';
const BreedsPage = ({ contentType }) => {
  return (
    <section className="breeds-page content">
      <Navbar />
      <ActionBar contentType={contentType} />
      <GridPhotos limit={5} />
    </section>
  );
};

export default BreedsPage;
