import './index.scss';
import { useLocation } from 'react-router';
const ActionBar = () => {
  const location = useLocation();
  const pageName = location.pathname.split('/')[1];
  return (
    <div className="actionbar actionbar-cat">
      <button className="actionbar-btn-prev icon-arrow-left"></button>
      <h2 className="actionbar-heading">{pageName}</h2>
    </div>
  );
};

export default ActionBar;
