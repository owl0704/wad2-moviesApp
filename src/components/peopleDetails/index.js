import React from "react";
import "./peopleDetails.css";

export default ({ people }) => {
  return (
    <>
    
    <div className={"wrap1"}>
    <img
      src={`https://image.tmdb.org/t/p/w500/${people.profile_path}`}
      alt={people.name}
    />
 
    <div className={"info"}>
    <li className={"key"}>name</li>
      <li>{people.name}</li>
      <li className={"key"}>Birthday</li>
      <li>{people.birthday}</li>
      <li className={"key"}>Birthplace</li>
      <li>{people.place_of_birth}</li>
      <li className={"key"}>Profession</li>
      <li>{people.known_for_department}</li>
      <li className={"key"}>Popularity</li>
      <li>{people.popularity}</li>
      
    </div>
    </div>

      
    </>
  );
};
