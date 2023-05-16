import React from "react";
import "./MovieCard.scss";
import { NavLink } from "react-router-dom";
/** #17 */
const MovieCard = ({ data }) => {
  const { Title, Year, imdbID, Type, Poster } = data;
  return (
    <div className="card-item">
      <NavLink to={`/movie/${imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={Poster} alt={Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default MovieCard;
