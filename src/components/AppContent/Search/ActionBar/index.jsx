import './index.scss';
const ActionBar = ({ currentPageName }) => {
  return (
    <div className="actionbar actionbar-votign">
      <button className="actionbar-btn-prev icon-arrow-left"></button>
      <h2 className="actionbar-heading">{currentPageName}</h2>
    </div>
  );
};

export default ActionBar;
