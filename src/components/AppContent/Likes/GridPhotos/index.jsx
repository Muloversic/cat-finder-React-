import { nanoid } from 'nanoid';
import { removeDuplicates } from '../../../Utilities/removeDuplicatObjFromArr';

const GridPhotos = ({ votedImages, setIdToDelete, setImageIdToShow }) => {
  const gridElement = [];
  let catsImages = [];
  if (votedImages) {
    catsImages = removeDuplicates(votedImages).map((cat) => {
      return (
        <div className="photos-picture" key={cat.id} data-photo-id={cat.vote_id} display-user-id={cat.id}>
          <img src={cat.url} alt="cat" />
          <div className="photos-hover-label icon-smile" data-photo-id={cat.vote_id} display-user-id={cat.id}></div>
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
    const idForUser = event.target.getAttribute('display-user-id');
    setIdToDelete(favCatId);
    setImageIdToShow(idForUser);
  };

  return (
    <div className="photos-container" onClick={selectCat}>
      {gridElement}
    </div>
  );
};

export default GridPhotos;
