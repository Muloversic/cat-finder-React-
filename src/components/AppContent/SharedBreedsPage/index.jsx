import { Outlet } from 'react-router';
import Navbar from '../Navbar';
const SharedBreedsPage = () => {
  return (
    <section className="breeds-page content">
      <Navbar />
      <Outlet />
    </section>
  );
};

export default SharedBreedsPage;
