import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetails,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import { AiFillStar, AiFillLike, AiFillCalendar } from "react-icons/ai";
import { BsFilm } from "react-icons/bs";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { selectedMovieOrShow } = useSelector((state) => state.movies);
  const {
    Title,
    Type,
    Poster,
    imdbRating,
    imdbVotes,
    Runtime,
    Released,
    Plot,
    Director,
    Actors,
    Genre,
    Language,
    Awards,
  } = selectedMovieOrShow;
  console.log(selectedMovieOrShow);
  /** 25 */
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(selectedMovieOrShow).length === 0 ? (
        <div className="loading loading2">
          <h3>Loading....</h3>
        </div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <AiFillStar className="icon star" />: {imdbRating}
              </span>
              <span>
                IMDB Votes <AiFillLike className="icon like" />: {imdbVotes}
              </span>
              <span>
                Runtime <BsFilm className="icon film" />: {Runtime}
              </span>
              <span>
                Year <AiFillCalendar className="icon calendar" />: {Released}
              </span>
            </div>
            <div className="movie-plot">{Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={Poster} alt={Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
