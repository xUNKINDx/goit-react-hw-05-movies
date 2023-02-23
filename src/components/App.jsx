import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavBar from './NavBar/NavBar';
import Loader from './Loader/Loader';

const Movies = lazy(() => import('./Movies/Movies'));
const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('./MovieDetails/Reviews/Reviews'));

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
