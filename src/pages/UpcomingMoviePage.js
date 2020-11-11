import React, { useState, useEffect } from "react";
import { getUpcomingMoviePage } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage'
import addToFavorites from '../components/buttons/addToFavorites'
import AddToFavoriteButton from "../components/buttons/addToFavorites";

const UpcomingMoviePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getUpcomingMoviePage().then(movies => {
        setMovies(movies);
      });
    }, []);

  

  return (
      <PageTemplate
        title='Discover Movies'
        movies={movies}
        buttonHandler={addToFavorites}
        action={movie => <AddToFavoriteButton movie={movie} />}
      />
  );
};

export default UpcomingMoviePage;