import { fetchCastMovie } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CastItem, CastList } from './Cast.styled';
import Loader from 'components/Loader';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewsMovie() {
      try {
        setIsLoading(true);

        const { cast } = await fetchCastMovie(movieId);
        if (cast.length === 0) {
          return;
        }
        setCast(cast);
      } catch (error) {
        toast.error(
          'Opps! Somathing went wrong! Please try reloading this page'
        );
      } finally {
        setIsLoading(false);
      }
    }
    getReviewsMovie();
  }, [movieId]);

  return (
    <section>
      {isLoading && <Loader />}
      {cast === null ? (
        <p>We don`t have cast for this movie</p>
      ) : (
        <CastList>
          {cast?.map(({ original_name, character, profile_path, id }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path &&
                  `http://image.tmdb.org/t/p/w342${profile_path}`
                }
                alt={original_name}
                width="240"
              />
              <h3>{original_name}</h3>
              <h3>Character: {character}</h3>
            </CastItem>
          ))}
        </CastList>
      )}
    </section>
  );
};

export default Cast;
