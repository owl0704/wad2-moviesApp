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
import PeoplePage from './pages/peoplePage'
import PeopleDetailsPage from './pages/peopleDetailsPage'
import PeoplesContextProvider from "./contexts/peoplesContext";
import "bootstrap/dist/css/bootstrap.min.css"
import AuthProvider from "./contexts/authContext"
import signUpPage from "./pages/signUpPage";
import loginPage from "./pages/loginPage";
import userPage from "./pages/userPage";
import PrivateRoute from "./components/privateRoute"
const App = () => {
  return (
   <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <PeoplesContextProvider>{/* NEW  */}

          <GenresContextProvider>    {/* NEW */}
          <AuthProvider>
            <Switch> 
            <Route exact path="/movies/signup" component={signUpPage} />
          <Route exact path="/movies/login" component={loginPage} />
          <PrivateRoute exact path="/movies/user" component={userPage} />
            <Route exact path="/people" component={PeoplePage} />
            <Route exact path="/people/:id" component={PeopleDetailsPage} />
            <Route path="/:id/similar"component={SimilarMoviesPage} />
            <Route path="/movies/Now_playing" component={Now_playingMoviePage} />   
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/upcoming" component={UpcomingMoviePage} />
          <Route exact path="/movies/:id/movieCredits" component={MovieCreditsPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          </Switch>
         
          </AuthProvider>
          </GenresContextProvider>    {/* NEW */}
          </PeoplesContextProvider>
          </MoviesContextProvider>     {/* NEW */}
        </div>
      </div>
    </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root")); 