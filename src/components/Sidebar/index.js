import SidebarCard from '../SidebarCard';
import logo from '../../assets/logo.svg';

import cardImageVoting from '../../assets/vote-table.png';
import cardImageBreeds from '../../assets/pet-breeds.png';
import cardImageGallery from '../../assets/images-search.png';

import './index.scss';
const Sidebar = () => {
  return (
    <aside className="aside">
      <img src={logo} alt="logo" className="aside-logo" />
      <div className="aside-welcome">
        <h1 className="aside-title">Hi intern!</h1>
        <p className="aside-text">Welcome to MI 2022 Front-end test</p>
      </div>
      <div className="aside-action">
        <h2 className="aside-action-title">Lets start using The Cat API</h2>
        <div className="aside-cards card">
          <SidebarCard cardImage={cardImageVoting} cardType={'voting'} />
          <SidebarCard cardImage={cardImageBreeds} cardType={'breeds'} />
          <SidebarCard cardImage={cardImageGallery} cardType={'gallery'} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
