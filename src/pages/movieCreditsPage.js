import React from "react";
import MovieCredits from "../components/movieCredits";
import useMovie from "../hooks/useMovie";

const movieCredits = props => {
  const { id } = props.match.params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movie] = useMovie(id)  // NEW
  
  return (
    <>
    {movie ? (
      <>
        <MovieCredits movie={movie} /> 
      </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default movieCredits;
