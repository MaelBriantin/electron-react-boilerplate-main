import './Button.scss';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { animeSlice } from '../../store/anime/animeSlice';
import api from '../../services/animeServices';
import fetchAnime from '../../services/animeServices';
import { fetchAnimeSuccessReducer } from '../../actions/anime/fetchAnimeStartReducer';
import fetchAnimeService from '../../services/animeServices';

enum Icons {
  book = '📚',
  prayer = '🙏',
}

type Props = {
  text: string;
  icon: keyof typeof Icons;
};
const Button = (props: Props) => {
  const { setName } = useContext(UserContext);
  const { text, icon } = props;
  return (
    <button
      type="button"
      className="benjamin"
      onClick={() => fetchAnimeService(15)}
    >
      <span role="img" aria-label="books">
        {icon && (
          <span role="img" aria-label="books">
            {Icons[icon]}
          </span>
        )}
      </span>
      {text}
    </button>
  );
};

export default Button;
