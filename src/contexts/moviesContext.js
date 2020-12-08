import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMoviePage ,getTop_ratedMoviePage } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      if(state.movies){
        return {
          movies: state.movies.map((m) =>
            m.id === action.payload.movie.id ? { ...m, favorite: true } : m
          ),
          upcoming: [...state.upcoming],
          Top_rated: [...state.Top_rated],
        }
      }else if(state.Top_rated){
        return {
          movies: [...state.movies],
          upcoming: [...state.upcoming],
          Top_rated: state.Top_rated.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
          ),
        }
      };
      break;
      case "add-watchlist":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        upcoming: [...state.upcoming],
        Top_rated: [...state.Top_rated]
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming],Top_rated: [...state.Top_rated] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies],Top_rated: [...state.Top_rated] };
   case "load-Top_rated":
        return { Top_rated: action.payload.movies, movies: [...state.movies],upcoming: [...state.upcoming] };  
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        Top_rated: [...state.Top_rated]
      };
   
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [],Top_rated:[] });

  const addToFavorites = (movieId) => {
    const index1 = state.movies.map((m) => m.id).indexOf(movieId);
    const index2 = state.Top_rated.map((m) => m.id).indexOf(movieId);
    if(index1){
      dispatch({ type: "add-favorite", payload: { movie: state.movies[index1] } });
    }else if(index2){
      dispatch({ type: "add-favorite", payload: { Top_rated: state.Top_rated[index2] } });
    }
  };
  const addToWatchlist = (movieId) => {
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
    getUpcomingMoviePage().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTop_ratedMoviePage().then((movies) => {
      dispatch({ type: "load-Top_rated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        Top_rated: state.Top_rated,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchlist:addToWatchlist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;