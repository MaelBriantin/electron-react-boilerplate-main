import { Link, NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/anime">Anime List</NavLink>
      <Link to="/anime/1">Anime Details</Link>
      <Link to="/character">Top Characters</Link>
    </div>
  );
};

export default NavBar;
