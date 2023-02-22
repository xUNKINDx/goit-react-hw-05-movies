import { Link } from 'react-router-dom';
import { fetchTrandingMovies } from 'movieDbAPI/movieDbAPI';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);

      try {
        const response = await fetchTrandingMovies(1);
        return response.results.map(movie => ({
          id: movie.id,
          title: movie.original_title,
        }));
      } catch (error) {
        console.error(error);
        return;
      } finally {
        setLoading(false);
      }
    };

    loadMovies().then(result => setTrendingMovies(result));
  }, []);

  return (
    <>
      <h1>Tredning movies</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </>
  );
};

export default Home;
