import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/tmdb-api";

export default ({ movie }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCredits(movie.id).then(credits => {
      setCast(credits.cast);
    }); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <table className="table">
      <thead>
        <tr>
          <th>Cast name</th>
          <th>Character</th>
        </tr>
      </thead>
      <tbody>
        {cast.map(c => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.character}</td>
          </tr>
        ))}
      </tbody>
    </table>


    </>
  );
};
