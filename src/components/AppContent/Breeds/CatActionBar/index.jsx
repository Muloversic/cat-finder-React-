import './index.scss';
import { useLocation } from 'react-router';
const ActionBar = ({ breedId }) => {
  const location = useLocation();
  const pageName = location.pathname.split('/')[1];
  return (
    <div className="actionbar actionbar-cat">
      <button className="actionbar-btn-prev icon-arrow-left"></button>
      <h2 className="actionbar-heading">{pageName}</h2>
      <h3 className="actionbar-breed-id">{breedId}</h3>
    </div>
  );
};

export default ActionBar;
