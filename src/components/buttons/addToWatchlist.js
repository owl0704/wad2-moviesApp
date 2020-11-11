import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToWatchlistButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      
    >
      Add to Watchlist
    </button>
  );
};

export default AddToWatchlistButton;