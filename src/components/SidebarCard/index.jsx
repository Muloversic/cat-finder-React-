import './index.scss';
import { Link } from 'react-router-dom';
const SidebarCard = ({ cardImage, cardType, setContentType }) => {
  return (
    <div className="card-body" onClick={() => setContentType(cardType)}>
      <div className={`card-image-container ${cardType}`}>
        <img src={cardImage} alt="card-image" className="card-type" />
      </div>
      <h4 className="card-title">{cardType}</h4>
      <Link to={cardType} className="card-link" />
    </div>
  );
};

export default SidebarCard;
