import defaultBackground from '../../../assets/girl-and-pet.png';

import './index.scss';
const DefaultScreen = () => {
  return (
    <div className="default-content">
      <img src={defaultBackground} alt="background" className="default-bg" />
    </div>
  );
};

export default DefaultScreen;
