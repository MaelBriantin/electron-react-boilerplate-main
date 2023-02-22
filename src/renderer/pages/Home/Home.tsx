import icon from '../../assets/img/icon.svg';
import Button from '../../components/Buttons/Button';
import './Home.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { selectAnime, selectAnimeInfo } from '../../selector/anime/selectAnime';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchAnimeService from '../../services/animeServices';
import { fetchAnimeById } from '../../store/anime/animeSlice';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAnimeById({ id: 1 }));
  }, [dispatch]);

  const { title } = useAppSelector(selectAnimeInfo);

  return (
    <div>
      {title}
      <div className="home">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        {/* <p>{title}</p> */}
        <Button text="Read our docs" icon="book" />
        <Button text="Donate" icon="prayer" />
      </div>
    </div>
  );
};

export default Home;
