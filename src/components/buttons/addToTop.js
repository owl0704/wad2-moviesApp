import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToTopButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const handleAddToTop = e => {
    e.preventDefault();
    context.addToTop(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToTop}
    >
      Add to Favorites
    </button>
  );
};

export default AddToTopButton;