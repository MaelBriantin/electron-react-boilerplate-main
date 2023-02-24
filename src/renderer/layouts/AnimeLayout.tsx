import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const AnimeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AnimeLayout;
