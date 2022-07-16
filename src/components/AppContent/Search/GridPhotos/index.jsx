import { nanoid } from 'nanoid';

const GridPhotos = ({ searchedBreedRes }) => {
  const gridElement = [];
  let catsImages = [];

  if (searchedBreedRes) {
    catsImages = searchedBreedRes.map((cat) => {
      if (cat.image) {
        return (
          <div className="photos-picture" key={cat.image.id} data-photo-id={cat.image.id}>
            <img src={cat.image.url} alt="cat" />
            <div className="photos-hover-label" data-photo-id={cat.image.id}>
              {cat.name}
            </div>
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
    const favCatId = event.target.getAttribute('data-photo-id');
  };

  return (
    <div className="photos-container" onClick={selectCat}>
      {gridElement}
    </div>
  );
};

export default GridPhotos;
