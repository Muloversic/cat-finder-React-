import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
const VotingPage = ({ currentPageName }) => {
  return (
    <section className="breeds-page content">
      <Navbar />
      <ActionBar currentPageName={currentPageName} />
      <div></div>
    </section>
  );
};

export default VotingPage;
