import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList3";


const MovieListPageTemplate3 = ({ movies, title, action }) => {
  const [nameFilter ] = useState("");
  const [genreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  
  return (
    <>
      <Header title={title} numMovies={displayedMovies.length} />
      
      <MovieList
       action={action}
       movies={displayedMovies}
    />
    </>
  );
};

export default MovieListPageTemplate3 ;