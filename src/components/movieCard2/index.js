import React from "react";
import { Link } from "react-router-dom";
import "./movieCard2.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rate } from 'antd';
import 'antd/dist/antd.css';
const MovieCard = ({movie, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{movie.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {movie.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(movie)}
           <Rate allowHalf defaultValue={2.5} />
        </div>
       
      </div>
    </div>
  );
};

export default MovieCard;