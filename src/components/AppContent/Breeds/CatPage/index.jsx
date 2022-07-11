import { useLocation } from 'react-router';
import ActionBar from '../CatActionBar';
import './index.scss';
const CatPage = ({ currentPageName }) => {
  const location = useLocation();
  const catInfo = location.state[0];
  return (
    <>
      <ActionBar breedId={catInfo.id} currentPageName={currentPageName} />
      <section className="cat-info">
        <div className="cat-picture-container">
          <img src={catInfo.image.url} alt={catInfo.name} className="cat-picture" />
          <div className="cat-circles">
            <div className="circle"></div>
            <div className="circle active"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="cat-description-block">
          <h2 className="cat-name">{catInfo.name}</h2>
          <p className="cat-status">{catInfo.description}</p>
          <div className="cat-stats-container">
            <div className="cat-stats">
              <h3 className="cat-stats-title cat-stats-title-single">Temperament:</h3>
              <p className="cat-stats-text">{catInfo.temperament}</p>
            </div>
            <div className="cat-stats">
              <h3 className="cat-stats-title">
                Origin: <span>{catInfo.origin}</span>
              </h3>
              <h3 className="cat-stats-title">
                Weight: <span>{catInfo.weight.metric} kgs</span>
              </h3>
              <h3 className="cat-stats-title">
                Life span: <span>{catInfo.life_span}</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CatPage;
