import Sidebar from '../Sidebar';
import DefaultScreen from '../AppContent/DefaultScreen';

import './index.scss';
const Home = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <DefaultScreen />
    </div>
  );
};

export default Home;
