import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchTopCharacters } from '../../store/characters/slice/characterSlice';
import selectTopCharacters from '../../selector/character/selectTopCharacters';
import { CharacterType } from '../../types/CharacterType';
import './TopCharacters.scss';

const TopCharacters = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTopCharacters());
  }, [dispatch]);
  const characters = useAppSelector(selectTopCharacters);
  let i = 0;
  return (
    <div className="topCharacters">
      {characters.map((e: CharacterType) => {
        return (
          <div key={e.mal_id + i}>
            <h4>{e.name}</h4>
            <img src={e.images?.jpg.image_url}/>
          </div>
        );
      })}
    </div>
  );
};

export default TopCharacters;
