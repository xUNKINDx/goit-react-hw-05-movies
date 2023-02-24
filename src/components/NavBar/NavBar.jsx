import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header>
        <nav className='header-nav'>
          <NavLink to="/" className='nav-link'>Home</NavLink>
          <NavLink to="/movies" className='nav-link'>Movies</NavLink>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
