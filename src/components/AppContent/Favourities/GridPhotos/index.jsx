import { nanoid } from 'nanoid';
import './index.scss';
const GridPhotos = ({ votedImages }) => {
  const gridElement = [];
  let catsImages = [];
  if (votedImages) {
    catsImages = votedImages.map((cat) => {
      return (
        <div className="photos-picture" key={cat.image.id} data-photo-id={cat.image.id}>
          <img src={cat.image.url} alt="cat" />
          <div className="photos-hover-label icon-heart-fill"></div>
        </div>
      );
    });
  }

  for (let i = 0; i < catsImages.length; i += 5) {
    gridElement.push(
      <div key={nanoid()} className="photos-grid">
        {catsImages.slice(i, i + 5)}
      </div>
    );
  }

  const selectCat = (event) => {};

  return (
    <div className="photos-container" onClick={selectCat}>
      {gridElement}
    </div>
  );
};

export default GridPhotos;
