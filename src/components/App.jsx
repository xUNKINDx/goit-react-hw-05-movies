import NavBar from './NavBar/NavBar';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './MovieDetails/Cast/Cast';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Reviews from './MovieDetails/Reviews/Reviews';
import Movies from './Movies/Movies';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
