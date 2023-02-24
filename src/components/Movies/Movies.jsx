import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { searchMovies } from 'movieDbAPI/movieDbAPI';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams] = useSearchParams('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const query = searchParams.get('query');
  const navigate = useNavigate();

  useEffect(() => {
    if (query && query.length > 0) {
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

  const onFilterChange = event => {
    setFilter(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    navigate(`/movies?query=${filter}`);
  };

  return (
    <>
      <div>
        <form className="form-block" onSubmit={onSubmit}>
          <input
            className="form-block__input"
            type="text"
            name="query"
            autoComplete="off"
            value={filter}
            onChange={onFilterChange}
          />
          <button className="form-block__submit" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="movies-list">
        <ul>
          {isLoading && <Loader />}
          {!isLoading &&
            movies &&
            movies.map(movie => (
              <li className="movie" key={movie.id}>
                <Link
                  to={`${movie.id}`}
                  state={{ from: `/movies?query=${query}` }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Movies;
