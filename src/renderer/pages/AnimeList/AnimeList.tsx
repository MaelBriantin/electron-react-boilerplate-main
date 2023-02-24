import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAnimeList } from '../../store/anime/animeSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { selectAnimeList } from '../../selector/anime/selectAnime';
import { AnimeType } from '../../types/AnimeType';
import './AnimeList.scss';

const AnimeList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAnimeList());
  }, [dispatch]);
  let i = 0;
  const list = useAppSelector(selectAnimeList);
  return (
    <div className="animeList">
      {list.map((e: AnimeType) => {
        i += 1;
        const id: number = e.mal_id;
        return (
          <div key={e.mal_id + i} className="animeElement">
            <Link to={`/anime/${e.mal_id}`}>
              <img
                src={e.images?.jpg.image_url}
                title={e.title}
                alt={e.title}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
