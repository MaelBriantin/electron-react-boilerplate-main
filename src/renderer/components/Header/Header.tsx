import NavBar from './NavBar';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="appTitle">AnimeLand</div>
      <NavBar />
    </div>
  );
};

export default Header;
