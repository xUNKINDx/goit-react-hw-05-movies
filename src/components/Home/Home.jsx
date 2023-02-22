import { Link } from 'react-router-dom';
import { fetchTrandingMovies } from 'movieDbAPI/movieDbAPI';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);

      try {
        const response = await fetchTrandingMovies(1);
        return response.results.map(movie => ({
          id: movie.id,
          title: movie.title,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies().then(result => setTrendingMovies(result));
  }, []);

  return (
    <>
      <h1>Tredning movies</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        trendingMovies &&
        trendingMovies.length > 0 &&
        trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </>
  );
};

export default Home;
