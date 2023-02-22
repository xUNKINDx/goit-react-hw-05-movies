import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchMovies } from 'movieDbAPI/movieDbAPI';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams] = useSearchParams('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');
  useEffect(() => {
    if (query && query.length > 0) {
      console.log(query);
      const getMovies = async () => {
        setIsLoading(true);

        try {
          const response = await searchMovies(query, 1);
          return response;
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };

      getMovies().then(result => setMovies(result.results));
    }
  }, [query]);

  return (
    <>
      <div>
        <form>
          <input type="text" name="query" autoComplete="off" />
          <button type="submit">Search</button>
        </form>
      </div>
      {isLoading && <Loader />}
      {!isLoading &&
        movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: `/movies?query=${query}` }}>
              {movie.title}
            </Link>
          </li>
        ))}
    </>
  );
};

export default Movies;
