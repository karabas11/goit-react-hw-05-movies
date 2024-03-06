/* eslint-disable react/prop-types */

import { Link, useLocation } from 'react-router-dom';
import { MovieListStyled } from './MovieList.styled';

// eslint-disable-next-line react/prop-types
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <MovieListStyled>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </MovieListStyled>
    </div>
  );
};

export default MovieList;
