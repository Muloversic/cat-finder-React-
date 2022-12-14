import { nanoid } from 'nanoid';

const GridPhotos = ({ votedImages, setIdToDelete }) => {
  const gridElement = [];
  let catsImages = [];
  if (votedImages) {
    catsImages = votedImages.map((cat) => {
      return (
        <div className="photos-picture" key={cat.image.id} data-photo-id={cat.id}>
          <img src={cat.image.url} alt="cat" />
          <div className="photos-hover-label icon-heart-fill" data-photo-id={cat.id}></div>
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
    const favCatId = event.target.getAttribute('data-photo-id');
    setIdToDelete(favCatId);
  };

  return (
    <div className="photos-container" onClick={selectCat}>
      {gridElement}
    </div>
  );
};

export default GridPhotos;
