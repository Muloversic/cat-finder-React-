import { useEffect } from 'react';
import { useLocation } from 'react-router';
import './index.scss';
const CatPage = () => {
  const location = useLocation();
  const catInfo = location.state;
  console.log(catInfo);

  return (
    <section className="cat-info">
      <div></div>
    </section>
  );
};

export default CatPage;
