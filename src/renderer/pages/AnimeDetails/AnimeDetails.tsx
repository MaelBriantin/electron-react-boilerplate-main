import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchAnimeById } from '../../store/anime/animeSlice';
import { selectAnimeInfo } from '../../selector/anime/selectAnime';

const AnimeDetails = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(fetchAnimeById({ id: Number(id) }));
  }, [dispatch, id]);

  const { title, images } = useAppSelector(selectAnimeInfo);
  if (title === undefined) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <div>{title}</div>
      <img alt="" src={images?.jpg.image_url} />
    </div>
  );
};

export default AnimeDetails;
