import Navbar from '../../Navbar';
import ActionBar from '../ActionBar';
import UserLog from '../UserLog';
import { getRandomImage, sendVotedImage } from '../../../GetAPI';
import './index.scss';
import { useEffect, useState } from 'react';
const VotingPage = ({ currentPageName }) => {
  const [randomImage, setRandomImage] = useState(null);
  const [subId, setSubId] = useState('Muloversic');
  const [voteType, setVoteType] = useState('');
  const [voteBodyRequest, setVoteBodyRequest] = useState({
    image_id: '',
    sub_id: '',
  });
  const [userAction, setUserAction] = useState([
    {
      time: [],
      imageId: '',
      voteDir: '',
      iconClass: '',
    },
  ]);

  useEffect(() => {
    (async () => {
      const randomImage = await getRandomImage();
      setRandomImage(randomImage);
    })();

    if (voteBodyRequest.image_id) (async () => await sendVotedImage(voteBodyRequest, voteType))();

    return () => {};
  }, [voteBodyRequest]);

  const imageElement = () => (randomImage ? <img src={randomImage[0].url} alt="cat" className="voting-img" /> : null);

  const handleVote = (event) => {
    const [image] = randomImage;
    const like = [...event.target.classList].includes('like');
    const dislike = [...event.target.classList].includes('dislike');
    const favour = [...event.target.classList].includes('favour');
    if (userAction.length > 4) {
      setUserAction((prevAction) => {
        prevAction.shift();
        return [...prevAction];
      });
    }

    if (like) {
      setVoteType('votes');
      setVoteBodyRequest({ image_id: image.id, sub_id: subId, value: 1 });
      setUserAction((prevAction) => [
        ...prevAction,
        {
          time: [new Date().getHours(), new Date().getMinutes()],
          imageId: image.id,
          voteDir: 'Likes',
          iconClass: 'icon-smile',
        },
      ]);
    }

    if (dislike) {
      setVoteType('votes');
      setVoteBodyRequest({ image_id: image.id, sub_id: subId, value: 0 });
      setUserAction((prevAction) => [
        ...prevAction,
        {
          time: [new Date().getHours(), new Date().getMinutes()],
          imageId: image.id,
          voteDir: 'Dislikes',
          iconClass: 'icon-sad-face',
        },
      ]);
    }

    if (favour) {
      setVoteType('favourites ');
      setVoteBodyRequest({ image_id: image.id, sub_id: subId });
      setUserAction((prevAction) => [
        ...prevAction,
        {
          time: [new Date().getHours(), new Date().getMinutes()],
          imageId: image.id,
          voteDir: 'Favourites',
          iconClass: 'icon-heart',
        },
      ]);
    }
  };

  return (
    <section className="breeds-page content">
      <Navbar />
      <ActionBar currentPageName={currentPageName} />
      <section className="voting-section">
        <div className="voting-image-container">
          {imageElement()}
          <div className="voting-actions" onClick={handleVote}>
            <div className="action action-like like">
              <span className="action-icon icon-smile like"></span>
            </div>
            <div className="action action-favour favour">
              <span className="action-icon icon-heart favour"></span>
            </div>
            <div className="action action-dislike dislike">
              <span className="action-icon icon-sad-face dislike"></span>
            </div>
          </div>
        </div>
      </section>
      <UserLog userAction={userAction} />
    </section>
  );
};

export default VotingPage;
