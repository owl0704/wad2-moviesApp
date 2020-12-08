import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToTopButton from "../components/buttons/addToTop";

const Top_ratedMoviePage = () => {
    const context = useContext(MoviesContext);
  const movies = context.Top_rated.filter((m) => {  // New
    return !("favourite" in m);
  });
  return (
      <PageTemplate
        title='Top Rated Movies'
        movies={movies}
        action={movie => <AddToTopButton movie={movie} />}
      />
  );
};

export default Top_ratedMoviePage;