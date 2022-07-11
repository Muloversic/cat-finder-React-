import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import UserLog from '../UserLog';
import './index.scss';
const VotingPage = ({ currentPageName }) => {
  return (
    <section className="breeds-page content">
      <Navbar />
      <ActionBar currentPageName={currentPageName} />
      <section className="voting-section">
        <div className="voting-image-container">
          <img src="#" alt="" className="voting-img" />
          <div className="voting-actions">
            <div className="action action-like">
              <span className="action-icon icon-smile"></span>
            </div>
            <div className="action action-favour">
              <span className="action-icon icon-heart"></span>
            </div>
            <div className="action action-dislike">
              <span className="action-icon icon-sad-face"></span>
            </div>
          </div>
        </div>
      </section>
      <UserLog />
    </section>
  );
};

export default VotingPage;
