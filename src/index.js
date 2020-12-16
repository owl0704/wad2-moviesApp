import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom" 
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/css/bootstrap.min.css"
import PeoplesContextProvider from "./contexts/peoplesContext";
import AuthProvider from "./contexts/authContext"
import MoviesContextProvider from "./contexts/moviesContext";  
import GenresContextProvider from "./contexts/genresContext";

const HomePage=lazy(()=> import( "./pages/homePage"));
const UpcomingMoviePage =lazy(()=> import( "./pages/UpcomingMoviePage"));
const MovieCreditsPage =lazy(()=> import( "./pages/movieCreditsPage"));
const Now_playingMoviePage =lazy(()=> import( "./pages/Now_playingMoviePage"));
const MoviePage =lazy(()=> import('./pages/movieDetailsPage'));
const FavoriteMoviesPage =lazy(()=> import( './pages/favoritesMoviesPage')); 
const AddMovieReviewPage =lazy(()=> import( './pages/addMovieReviewPage'));
const SimilarMoviesPage =lazy(()=> import( './pages/similarMoviesPage'));
const PeoplePage =lazy(()=> import( './pages/peoplePage'));
const PeopleDetailsPage =lazy(()=> import( './pages/peopleDetailsPage'));
const signUpPage =lazy(()=> import( "./pages/signUpPage"));
const loginPage =lazy(()=> import( "./pages/loginPage"));
const userPage =lazy(()=> import( "./pages/userPage"));
const PrivateRoute =lazy(()=> import( "./components/privateRoute"));

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

ReactDOM.render(
  <Suspense fallback={<h3>loading...</h3>}>
<App/>
  </Suspense>,
document.getElementById("root"));