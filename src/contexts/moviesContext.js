import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies,getNow_playingMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        Now_playing:[...state.Now_playing]
      };
      case "add-watchlist":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        upcoming: [...state.upcoming],
        Now_playing:[...state.Now_playing]
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming],Now_playing:[...state.Now_playing] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies],Now_playing:[...state.Now_playing] };
      case "load-Now_playing":
      return { Now_playing: action.payload.movies, movies: [...state.movies],upcoming: [...state.upcoming] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        Now_playing:[...state.Now_playing]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [],Now_playing:[] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };
  const addToWatchList = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    getNow_playingMovies().then((movies) => {
      dispatch({ type: "load-Now_playing", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        Now_playing:state.Now_playing,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList: addToWatchList
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
