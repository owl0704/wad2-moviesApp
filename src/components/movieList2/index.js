import React from "react";
import Movie from "../movieCard2";
import "./movieList.css";

const MovieList2 = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} />
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default MovieList2;