import { NavLink } from 'react-router-dom';

import './index.scss';
const Navbar = () => {
  return (
    <nav className="navbar">
      <form className="navbar-form">
        <input type="text" className="navbar-form-input" placeholder="Search for breeds by name" />
        <button className="navbar-form-btn icon-search" type="submit"></button>
      </form>
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <NavLink to="/likes" className="navbar-list-link icon-smile" />
        </li>
        <li className="navbar-list-item">
          <NavLink to="/favourites" className="navbar-list-link icon-heart" />
        </li>
        <li className="navbar-list-item">
          <NavLink to="/dislikes" className="navbar-list-link icon-sad-face" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
