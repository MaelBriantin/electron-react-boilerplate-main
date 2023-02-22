import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const AnimeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AnimeLayout;
