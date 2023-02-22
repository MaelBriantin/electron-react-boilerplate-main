import { NavLink, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <NavLink to="/anime">Anime List</NavLink>
      <Link to="/anime/1">Anime Details</Link>
    </>
  );
};

export default Dashboard;
