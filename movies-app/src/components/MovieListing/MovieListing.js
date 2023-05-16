import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "./../MovieCard/MovieCard";
import Slider from "react-slick";
import "./MovieListing.scss";
/** 29 */
import { settings } from "../../common/settings";

const MovieListing = () => {
  // const movies = useSelector(getAllMovies); /** #15 */
  const { movies, shows, meta } = useSelector((state) => state.movies);
  console.log(meta.requestStatus);
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie) => {
        return <MovieCard key={movie.imdbID} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  /** 21 ,22*/
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((shows) => {
        return <MovieCard key={shows.imdbID} data={shows} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      {meta.requestStatus === "pending" ? (
        <div className="loading">
          <h3>Loading....</h3>
        </div>
      ) : (
        <>
          <div className="movie-list">
            <h2>Movies</h2>
            {/* <div className="movie-container">{renderMovies}</div> */}
            <div className="movie-container">
              <Slider {...settings}>{renderMovies}</Slider>
            </div>
          </div>

          <div className="show-list">
            <h2>Shows</h2>
            {/* <div className="movie-container">{renderShows}</div> */}
            <div className="movie-container">
              <Slider {...settings}>{renderShows}</Slider>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieListing;
