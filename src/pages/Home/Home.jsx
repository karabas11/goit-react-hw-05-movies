import { fetchTrendingMovie } from 'api';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { HomeTitle } from './Home.styled';
import Loader from 'components/Loader';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTrendingMovie() {
      try {
        setIsLoading(true);

        const { results } = await fetchTrendingMovie();
        setTrendMovies(results);
      } catch (error) {
        toast.error(
          'Opps! Somathing went wrong! Please try reloading this page'
        );
      } finally {
        setIsLoading(false);
      }
    }

    getTrendingMovie();
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      {trendMovies.length > 0 && (
        <>
          <HomeTitle>Trending movies</HomeTitle>
          <MovieList movies={trendMovies} />
        </>
      )}
    </div>
  );
}
