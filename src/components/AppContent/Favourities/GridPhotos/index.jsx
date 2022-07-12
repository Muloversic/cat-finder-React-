import { nanoid } from 'nanoid';
const GridPhotos = ({ favCatImages }) => {
  const gridElement = [];
  const catsImages = favCatImages.map((cat) => {
    if (cat.breeds.length > 0) {
      return (
        <div className="photos-picture" key={cat.id} data-photo-id={cat.id}>
          <img src={cat.url} alt="cat" />
          <div className="photos-hover-label">{cat.breeds[0].name}</div>
        </div>
      );
    }
  });

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
