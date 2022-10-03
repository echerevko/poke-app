import { Routes, Route } from 'react-router-dom';
import ErrorPage from '../pages/404';
import SearchView from '../pages/SearchView';
import PokeBase from '../pages/PokeBase';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<PokeBase />} />
      <Route path='/single/:name' element={<SearchView />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default Routers;
