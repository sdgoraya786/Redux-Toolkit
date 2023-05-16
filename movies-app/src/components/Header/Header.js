import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdAccountCircle, MdSearch } from "react-icons/md";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  /** 30 */
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term) {
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
      setTerm("");
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">
          <img src="./images/shahzad2.png" alt="logo" />
        </NavLink>
      </div>
      <div className="search-bar">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies Or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <MdSearch />
          </button>
        </form>
      </div>
      <div className="user-img">
        <MdAccountCircle className="user-icon" />
      </div>
    </div>
  );
};

export default Header;
