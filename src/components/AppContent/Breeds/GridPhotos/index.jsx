import './index.scss';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const GridPhotos = ({ limitedCatImages, limitedCats, allBreeds, catBreed, sortOrder }) => {
  const navigate = useNavigate();
  const gridElement = [];
  let catsImages = [];
  if (sortOrder === 'ASC') {
    limitedCats.sort((a, b) => (b.name < a.name ? 1 : -1));
  }

  if (sortOrder === 'DESC') {
    limitedCats.sort((a, b) => (b.name > a.name ? 1 : -1));
  }

  if (catBreed !== '') {
    catsImages = limitedCatImages.map((cat) => {
      if (cat.breeds.length > 0) {
        return (
          <div className="photos-picture" key={cat.id} data-photo-id={cat.id}>
            <img src={cat.url} alt="cat" />
            <div className="photos-hover-label">{cat.breeds[0].name}</div>
          </div>
        );
      }
    });
  }

  if (catBreed === '') {
    catsImages = limitedCats.map((cat) => {
      if (cat.image) {
        return (
          <div className="photos-picture" key={nanoid()} data-photo-id={cat.reference_image_id}>
            <img src={cat.image.url} alt="cat" />
            <div className="photos-hover-label">{cat.name}</div>
          </div>
        );
      }
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
    if (catBreed === '') {
      const selectedCat = allBreeds.filter((cat) => cat.reference_image_id === imageId);
      navigate(imageId, { state: selectedCat });
    }

    if (catBreed !== '') {
      const selectedCat = limitedCatImages.filter((cat) => cat.id === imageId);
      console.log(limitedCatImages);
      const mainInfo = selectedCat[0].breeds[0];
      const image = {};
      for (let key in selectedCat[0]) {
        if (typeof selectedCat[0][key] !== 'object') {
          image[key] = selectedCat[0][key];
        }
      }

      const formatedCatData = [{ ...mainInfo, image }];
      navigate(imageId, { state: formatedCatData });
    }
  };

  return (
    <div className="photos-container" onClick={selectCat}>
      {gridElement}
    </div>
  );
};

export default GridPhotos;
