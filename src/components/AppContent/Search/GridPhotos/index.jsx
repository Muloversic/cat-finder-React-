import { nanoid } from 'nanoid';
import { removeDuplicates } from '../../../Utilities/removeDuplicatObjFromArr';

const GridPhotos = ({ searchedImages, setIdToDelete }) => {
  const gridElement = [];
  let catsImages = [];
  if (searchedImages) {
    catsImages = removeDuplicates(searchedImages).map((cat) => {
      return (
        <div className="photos-picture" key={cat.id} data-photo-id={cat.vote_id}>
          <img src={cat.url} alt="cat" />
          <div className="photos-hover-label icon-heart-fill" data-photo-id={cat.vote_id}></div>
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
