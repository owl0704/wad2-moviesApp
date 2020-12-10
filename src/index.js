import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom" 
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import UpcomingMoviePage from "./pages/UpcomingMoviePage";
import MovieCreditsPage from "./pages/movieCreditsPage";
import Now_playingMoviePage from "./pages/Now_playingMoviePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage' 
import MoviesContextProvider from "./contexts/moviesContext";  
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import SimilarMoviesPage from './pages/similarMoviesPage'
const App = () => {
  return (
   <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
            <Switch> 
            <Route path="/:id/similar"component={SimilarMoviesPage} />
            <Route path="/movies/Now_playing" component={Now_playingMoviePage} />   
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/upcoming" component={UpcomingMoviePage} />
          <Route exact path="/movies/:id/movieCredits" component={MovieCreditsPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>     {/* NEW */}
        </div>
      </div>
    </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root")); 