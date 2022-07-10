import './index.scss';
const GridPhotos = ({ limitedCatImages }) => {
  const gridElement = [];;
  const catsImages = limitedCatImages.map((cat) => (
    <img src={cat.url} alt="cat" className="photos-picture" key={cat.id} />
  ));

  for (let i = 0; i < catsImages.length; i += 5) {
	gridElement.push(<div className="photos-grid">{catsImages.slice(i, i + 5)}</div>)
  }

  return <div className="photos-container">{gridElement}</div>;
};

export default GridPhotos;
