import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getUpcomingMoviePage } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage'
import { Link, Route, withRouter } from "react-router-dom";

const UpcomingMoviePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getUpcomingMoviePage().then(movies => {
        setMovies(movies);
      });
    }, []);

  const addToFavorites = movieId => {
    setMovies(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      StubAPI.add(movies[index]);
      let newMoviesState = [...movies]
      newMoviesState.splice(index, 1);
      return newMoviesState;
    });
  };

  return (
      <PageTemplate
        title='Discover Movies'
        movies={movies}
        buttonHandler={addToFavorites}
      />
  );
};

export default UpcomingMoviePage;