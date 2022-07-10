import './index.scss';
import { nanoid } from 'nanoid';
import { useState } from 'react';
const GridPhotos = ({ limitedCatImages, limitedCats, allBreeds, catBreed }) => {
  const [selectedCat, setSelectedCat] = useState([]);
  const gridElement = [];
  let catsImages = [];

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

  const photoContainer = document.querySelector('.photos-container');
  if (photoContainer) {
    photoContainer.addEventListener('click', (event) => {
      const imageId = event.target.getAttribute('data-photo-id');
      if (catBreed === '') {
        const selectedCat = allBreeds.filter((cat) => cat.reference_image_id === imageId);
        setSelectedCat(selectedCat);
      }

      if (catBreed !== '') {
        const selectedCat = limitedCatImages.filter((cat) => cat.id === imageId);
        setSelectedCat(selectedCat);
      }
    });
  }

  return <div className="photos-container">{gridElement}</div>;
};

export default GridPhotos;
