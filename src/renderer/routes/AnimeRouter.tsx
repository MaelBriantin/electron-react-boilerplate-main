import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeDetails from '../pages/AnimeDetails/AnimeDetails';
import Dashboard from '../pages/Dashboard/Dashboard';
import AnimeList from '../pages/AnimeList/AnimeList';
import AnimeLayout from '../layouts/AnimeLayout';
import TopCharacters from '../pages/TopCharacters/TopCharacters';

const AnimeRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimeLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/anime">
            <Route index element={<AnimeList />} />
            <Route path="/anime/:id" element={<AnimeDetails />} />
          </Route>
          <Route path="/character">
            <Route index element={<TopCharacters />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AnimeRouter;
