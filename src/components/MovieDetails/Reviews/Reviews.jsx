import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'movieDbAPI/movieDbAPI';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const loadReviews = async () => {
      setIsLoading(true);

      try {
        const response = await getReviews(movieId);
        return response;
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews().then(result => setReviews(result.results));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <hr />
      <section>
        {isLoading ? (
          <Loader />
        ) : reviews === null || reviews.length === 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author_details.name || review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Reviews;
