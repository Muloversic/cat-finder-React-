import { Outlet } from 'react-router';
import Navbar from '../../Navbar';
const SharedSearchPage = () => {
  return (
    <section className="search-page content">
      <Navbar />
      <Outlet />
    </section>
  );
};

export default SharedSearchPage;
