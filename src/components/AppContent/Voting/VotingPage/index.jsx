import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import UserLog from '../UserLog';
import { getRandomImage } from '../../../GetAPI';
import './index.scss';
import { useEffect, useState } from 'react';
const VotingPage = ({ currentPageName }) => {
  const [randomImage, setRandomImage] = useState(null);
  useEffect(() => {
    (async () => {
      const randomImage = await getRandomImage();
      setRandomImage(randomImage);
    })();

    return () => {};
  }, []);

  const imageElement = () => (randomImage ? <img src={randomImage[0].url} alt="cat" className="voting-img" /> : null);

  return (
    <section className="breeds-page content">
      <Navbar />
      <ActionBar currentPageName={currentPageName} />
      <section className="voting-section">
        <div className="voting-image-container">
          {imageElement()}
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
