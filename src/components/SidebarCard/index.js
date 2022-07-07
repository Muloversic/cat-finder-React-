import './index.scss';
const SidebarCard = ({ cardImage, cardType, setContentType }) => {
  return (
    <div className="card-body" onClick={() => setContentType(cardType)}>
      <div className={`card-image-container ${cardType}`}>
        <img src={cardImage} alt="card-image" className="card-type" />
      </div>
      <h4 className="card-title">{cardType}</h4>
    </div>
  );
};

export default SidebarCard;
