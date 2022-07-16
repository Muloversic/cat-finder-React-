import './index.scss';
const ActionBar = ({ breedId, currentPageName }) => {
  return (
    <div className="actionbar actionbar-cat">
      <button className="actionbar-btn-prev icon-arrow-left"></button>
      <h2 className="actionbar-heading">{currentPageName}</h2>
      <h3 className="actionbar-breed-id">{breedId}</h3>
    </div>
  );
};

export default ActionBar;
