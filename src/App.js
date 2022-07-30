import Home from './components/Home';
import { HashRouter } from 'react-router-dom';
const App = () => {
  return (
    <HashRouter>
      <div className="container">
        <Home />
      </div>
    </HashRouter>
  );
};

export default App;
