import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header>
        <nav className='header-nav'>
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/movies" className='nav-link'>Movies</Link>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
