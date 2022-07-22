import SidebarCard from '../SidebarCard';
import logo from '../../assets/logo.svg';
import cardImageVoting from '../../assets/vote-table.png';
import cardImageBreeds from '../../assets/pet-breeds.png';
import cardImageGallery from '../../assets/images-search.png';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Sidebar = ({ currentPageName }) => {
  const openMenu = () => {
    const burger = document.querySelector('.aside-nav-burger');
    burger.classList.toggle('active');
  };

  return (
    <>
      <nav className="aside-nav">
        <div className="aside-nav-burger" onClick={openMenu}>
          <span className="aside-nav-burger-line"></span>
          <span className="aside-nav-burger-line"></span>
          <span className="aside-nav-burger-line"></span>
        </div>
        <div className="aside-nav-body">
          <img src={logo} alt="logo" className="aside-logo" />
          <h1 className="aside-title">Hi intern!</h1>
          <p className="aside-text">Welcome to MI 2022 Front-end test</p>
          <ul className="aside-nav aside-nav-list">
            <li className="aside-nav-item">
              <NavLink to="/voting" className="aside-nav-link">
                Voting
              </NavLink>
            </li>
            <li className="aside-nav-item">
              <NavLink to="/breeds" className="aside-nav-link">
                Breeds
              </NavLink>
            </li>
            <li className="aside-nav-item">
              <NavLink to="/gallery" className="aside-nav-link">
                Gallery
              </NavLink>
            </li>
          </ul>
          <ul className="aside-list">
            <li className="aside-list-item">
              <NavLink to="/likes" className="aside-list-link icon-smile" />
            </li>
            <li className="aside-list-item">
              <NavLink to="/favourites" className="aside-list-link icon-heart" />
            </li>
            <li className="aside-list-item">
              <NavLink to="/dislikes" className="aside-list-link icon-sad-face" />
            </li>
          </ul>
        </div>
      </nav>
      <aside className="aside">
        <img src={logo} alt="logo" className="aside-logo" />
        <div className="aside-welcome">
          <h1 className="aside-title">Hi intern!</h1>
          <p className="aside-text">Welcome to MI 2022 Front-end test</p>
        </div>
        <div className="aside-action">
          <h2 className="aside-action-title">Lets start using The Cat API</h2>
          <div className="aside-cards card">
            <SidebarCard cardImage={cardImageVoting} cardType={'voting'} currentPageName={currentPageName} />
            <SidebarCard cardImage={cardImageBreeds} cardType={'breeds'} currentPageName={currentPageName} />
            <SidebarCard cardImage={cardImageGallery} cardType={'gallery'} currentPageName={currentPageName} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
