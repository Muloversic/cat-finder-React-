import { useEffect } from 'react';
import { useLocation } from 'react-router';
const CatPage = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  });
  return <div>CatPage</div>;
};

export default CatPage;
