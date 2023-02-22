import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'movieDbAPI/movieDbAPI';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const loadMovieDetails = async () => {
      setIsLoading(true);

      try {
        const response = await getMovieById(movieId);
        return response;
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovieDetails().then(result => setMovieDetail(result));
  }, []);

  return (
    <>
      <div>
        <Link to={backLinkHref}>Go back</Link>
      </div>
      {isLoading && <Loader />}
      {!isLoading && movieDetails && (
        <div>
          <section>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div>
              <h2>{movieDetails.title}</h2>
              <p>User Score: {movieDetails.vote_average}</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </section>
          <hr />
          <section>
            <h3>Additional infromation</h3>
            <ul>
              <li key="cast">
                <Link to="cast">Cast</Link>
              </li>
              <li key="Reviews">
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </section>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
