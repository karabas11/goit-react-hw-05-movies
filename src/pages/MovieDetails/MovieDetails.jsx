import { fetchMovieDetails } from 'api';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import {
  DetailsCard,
  DetailsContainer,
  DetailsLink,
} from './MovieDetails.styled';
import Loader from 'components/Loader';

export default function MovieDetails() {
  const location = useLocation();
  const linkRef = useRef(location);
  const backLinkHref = linkRef.current.state?.from ?? '/';

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetalis() {
      try {
        setIsLoading(true);

        const fetchDetails = await fetchMovieDetails(movieId);
        setMovieDetails(fetchDetails);
      } catch (error) {
        toast.error(
          'Opps! Somathing went wrong! Please try reloading this page'
        );
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetalis();
  }, [movieId]);

  if (!movieDetails) return;

  const { title, poster_path, release_date, vote_average, overview, genres } =
    movieDetails;

  const poster = poster_path && `http://image.tmdb.org/t/p/w342${poster_path}`;
  const date = release_date && release_date.slice(0, 4);
  const rating = vote_average && Math.round(vote_average * 10);

  return (
    <DetailsContainer>
      {isLoading && <Loader />}
      <div>
        <Link to={backLinkHref}>
          {/* <b>Go back</b> */}
          <span>
            <FaArrowRotateLeft size="20" />
          </span>
        </Link>
      </div>
      <DetailsCard>
        <img src={poster} alt={title} width="240" />
        <div>
          <h1>
            {title} ({date})
          </h1>
          <p>{overview}</p>
          <h3>user Score: {rating}%</h3>
          <h3>Genres</h3>
          <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </DetailsCard>
      <ul>
        <li>
          <DetailsLink to="cast">cast</DetailsLink>
        </li>
        <li>
          <DetailsLink to="reviews">reviews</DetailsLink>
        </li>
      </ul>
      <Outlet />
    </DetailsContainer>
  );
}
