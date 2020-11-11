import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchlistButton from "../components/buttons/addToWatchlist";

const UpcomingMoviePage = () => {
    const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("watchlist" in m);
  });


  

  return (
      <PageTemplate
        title='Discover Movies'
        movies={movies}
        
        action={movie => <AddToWatchlistButton movie={movie} />}
      />
  );
};

export default UpcomingMoviePage;