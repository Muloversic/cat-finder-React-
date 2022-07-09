import './index.scss';
const GridPhotos = ({ limitedCatImages }) => {
  const catsImages = limitedCatImages.map((cat) => <img src={cat.url} alt="cat" className="photos-picture" key={cat.id} />);
  return <div className="photos">{catsImages}</div>;
};

export default GridPhotos;
