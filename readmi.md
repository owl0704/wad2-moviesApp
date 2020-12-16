# Assignment 1 - ReactJS app.

Name: zhixiang li 
## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - display the upcoming movies.
 + Feature 2 - display the popular actors.
 + Feature 3 -display the now playing movies.
 + Feature 4 - display the now playing movies.
 + Feature 5 - add the movies you like to the Favorites list, you can write a review for it.and you can add the score to the movie.
 + Feature 6 - display the detail infomation if you want to know more about one movie or one actor.and you can click the button to see it.
 + Feature 7 - show the popular people and you can find the actor detail information.
 + Feature 8 - sign up/log in/log out (supported by firebase).
 + Feature 9 - show the favourite list after you login.

 ## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........
+ npm i bootstrap react-bootstrap
+ npm install antd --save
+ npm i firebase
+ install ES7 React/Redux/GraphQL/React-Native snippets

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/upcoming - get a list of upcoming movies in TMDB.
+ https://api.themoviedb.org/3/movie/now_playing- get a list of nowplaying movie in TMDB
+ https://api.themoviedb.org/3/movie/${id}/credits- get the movies' detail credits information which movie you are seeing
+ https://api.themoviedb.org/3/credit/${creditId}- get the credits' detail personal information
+ https://api.themoviedb.org/3/movie/${id}/similar- get the similar movies when you click one movie,it will give you other 20 similar movies.
+ https://api.themoviedb.org/3/person/popular- get the popular people in TMDB.
+ https://api.themoviedb.org/3/person/${id}- get popular people detail personal information.  

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][components1]
![][components2]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][login]
>if you want do some private action you should login by youself usename and password.

![][signup]
>if you don't have account you can signup a new account. 

![][user]
>after your login you will see your user page.

![][favourite]
>if you like some movie you can add those movies into your favourite file

![][scours]
>after you add favourite ,you can take scours to every movies you like.

![][moviedetail]
>you can cilck any movie to see the movie detail including review and movie credits and similar movies

![][moviecredits]
>it shows the movie's credit including credits' detail information

![][similarmovie]
>if you see one movie and you can click the similar button to look 20 similar movies.

![][people]
>it shows the popular people

![][peopledetail]
>you can cilck every people to see the information
## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (private) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/Now_playing (public) - displays nowplaying movies.
+ /movies/:id (public) - displays details information of movies.
+ /credit/:id (public) - displays information of credits.
+ /login (private) - displays the login 
+  /signup (private) - displays the sigup
+ /movies/user(protected) - displays the profile of the user.
+ /movies/favorites(protected) - displays the movies added to favorites by user.
+ /people/(public) -displays the popular people.
+ /people/id(public) -displays the popular people detail information
+ /movies/:id/movieCredits - show the movie credit that you want to look.
+ /:id/similar -show 20 similar movies.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][addfavouriteLink]
>click to add the movie which you are favourite.

![][loginLink]
>click to login

![][logoutLink]
>cilck to log out.

![][peopleLink]
>click to see popular people information

![][scoursLink]
>click to get scours.

![][showcreditlink]
>click to see the actor detail information.

![][signupLink]
>click to creat a new account.

![][similarLink]
>click to see the similar movies.
## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).
+ https://ant.design/ - Ant Design React UI framework.
+ https://blog.csdn.net/dfsgwe1231/article/details/107258662 -firebase to do login
---------------------------------

# Assignment 1 - Agile Software Practice.

Name: zhixiang li

## App Features.

[Document each new feature/page in your Movies Fan app, including: Feature Name; Its objective/purpose; The associated test file; a screenshot of its UI.]
e,g,
 
+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/movieDetails.spec.js 

![][moviedetail]

+ Movie Review page: Displays the full text of a movie review.

Tests: cypress/integration/homePage.spec.js 

![][home]

+ login page:do the login action

Test:cypress/integration/login-page.spec.js
![][login]

+ nowplaying page:it shows the now playing movies

Test:cypress/integration/nowplaying-page.spec.js

![][nowplaying]

+ people page: show the popular actor

Test:cypress/integration/people.spec.js

![][people]

## Testing.

Cypress Dashboard URL:https://dashboard.cypress.io/projects/ur5f42/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.

+ cypress/integration/loggin.spec.js - test the login page . 

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

List reference material links (articles/blogs).

---------------------------------

[component1]: ./public/component1.png
[component2]: ./public/component2.png
[login]: ./public/login.png
[moviecredits]: ./public/moviecredits.png
[moviedetail]: ./public/moviedetail.png
[nowplaying]: ./public/nowplaying.png
[people]: ./public/people.png
[peopledetail]: ./public/peopledetail.png
[scours]: ./public/scours.png
[signup]: ./public/signup.png
[silmilar]: ./public/silmilar.png
[user]: ./public/user.png
[favourite]: ./public/favourite.png
[loginLink]: ./public/loginLink.png
[logoutLink]: ./public/logoutLink.png
[peopleLink]: ./public/peopleLink.png
[reviewLink]: ./public/reviewLink.png
[addfavouriteLink]: ./public/addfavouriteLink.png
[similarLink]: ./public/similarLink.png
[signupLink]: ./public/signupLink.png
[showcreditLink]: ./public/showcreditLink.png
[scoursLink]: ./public/scoursLink.png
[cardLink]: ./public/cardLink.png
[home]: ./public/home.png
