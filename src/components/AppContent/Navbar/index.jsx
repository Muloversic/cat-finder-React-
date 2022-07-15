import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './index.scss';
const Navbar = ({ setSearchRes }) => {
  const [inputData, setInputData] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setInputData(e.target.value);
  };

  const sendInputData = (e) => {
    e.preventDefault();
    setSearchRes(inputData);
    navigate('/search');
  };

  return (
    <nav className="navbar">
      <form className="navbar-form">
        <input type="text" className="navbar-form-input" placeholder="Search for breeds by name" onChange={handleSearch} />
        <button className="navbar-form-btn icon-search" type="submit" onClick={sendInputData}></button>
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
