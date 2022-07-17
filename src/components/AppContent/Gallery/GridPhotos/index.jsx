import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
const GridPhotos = ({ searchedCatImages }) => {
  const navigate = useNavigate();
  const gridElement = [];
  let catsImages = [];

  if (searchedCatImages) {
    catsImages = searchedCatImages.map((cat) => {
      return (
        <div className="photos-picture" key={cat.id} data-photo-id={cat.id}>
          <img src={cat.url} alt="cat" />
          <div className="photos-hover-label icon-heart"></div>
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

  const selectCat = (event) => {
    const imageId = event.target.getAttribute('data-photo-id');

    // const formatedCatData = [{ ...mainInfo, image }];
    // navigate(imageId, { state: formatedCatData });
  };

  return (
    <div className="photos-container" onClick={selectCat}>
      {gridElement}
    </div>
  );
};

export default GridPhotos;
