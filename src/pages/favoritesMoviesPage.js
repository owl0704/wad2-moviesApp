import React, {useContext} from "react";
import MovieListPageTemplate2 from "../components/templateMovieListPage2";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const favorites = context.movies.filter( m => m.favorite )
  const top = context.Top_rated.filter( m => m.favorite )
  const totalF = [...favorites,...top]
  return (
    <MovieListPageTemplate2
      movies={totalF}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
      
    />
  );
};



export default FavoriteMoviesPage;