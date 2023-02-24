import './Button.scss';
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
