import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'movieDbAPI/movieDbAPI';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const loadCast = async () => {
      setIsLoading(true);

      try {
        const response = await getCast(movieId);
        return response;
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCast().then(result => setCast(result.cast));
  }, []);

  return (
    <>
      <hr />
      <section>
        {isLoading && <Loader />}
        {!isLoading && cast && (
          <ul>
            {cast.map(person => (
              <li key={person.id}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`}
                    alt={person.name}
                  />
                  <p>{person.name}</p>
                  <p>Character: {person.character}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Cast;
