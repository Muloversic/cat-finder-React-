import Navbar from '../Navbar';
import ActionBar from '../ActionBar';
import './index.scss';
const BreedsPage = ({ contentType }) => {
  return (
    <section className="breeds-page content">
      <Navbar />
      <ActionBar contentType={contentType} />
    </section>
  );
};

export default BreedsPage;
