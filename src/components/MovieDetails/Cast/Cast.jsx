import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'movieDbAPI/movieDbAPI';
import Loader from 'components/Loader/Loader';
import defaultProfileImage from '../../../images/defaultProfile.png';

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
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <hr />
      <section>
        {isLoading ? (
          <Loader />
        ) : cast === null || cast.length === 0 ? (
          <p>There is no cast for this movie yet</p>
        ) : (
          <ul className="cast">
            {cast.map(person => (
              <li className="cast__list" key={person.id}>
                <img
                  className="cast__img"
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w300/${person.profile_path}`
                      : defaultProfileImage
                  }
                  alt={person.name}
                />

                <p className="cast__txt">{person.name}</p>
                <p className="cast__txt">Character: {person.character}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Cast;
