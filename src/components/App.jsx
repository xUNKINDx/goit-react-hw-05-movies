import NavBar from './NavBar/NavBar';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './MovieDetails/Cast/Cast';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<></>}/> */}
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          {/* <Route path="/reviews" element={<></>}/> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
