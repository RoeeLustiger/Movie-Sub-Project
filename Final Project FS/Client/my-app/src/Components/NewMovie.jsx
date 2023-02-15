import { React, useState, useEffect } from "react";
import { getAll, postItem } from "../utils";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";

const NewMovie = ({ userId }) => {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [subMovies, setSubMovies] = useState([]);

  // const { userid } = useParams();

  const subBtn = () => {
    if (!userId) {
      console.log("no userId");
      return;
    }
    // console.log(movieId, dateValue);
    if (movieId.length === 0) {
      !setShowMsg("Choose a movie");
    }
    console.log();
    if (dateValue.length == 0) {
      !setShowMsg("Choose a date");
      return;
    }
    const movieName = movies.filter((movie) => movie.id == movieId)[0]["name"];
    const newMovie = {
      movieId: movieId,
      watchDate: dateValue,
      movieName: movieName,
      userId,
    };

    console.log(newMovie);
    postItem("/sub", newMovie).then((res) => console.log("post a new Movie"));
  };
  const movieSelect = (value) => {
    setMovieId(value);
  };

  const handleDate = (ev) => {
    setDateValue(ev.target.value);
  };

  useEffect(() => {
    console.log("userId", userId);
    if (userId) {
      getAll(`/sub/${userId}`).then((res) => {
        const subM = res.data.movies;
        setSubMovies([...res.data.movies]);
        getAll("/Movies").then((res) => {
          const uniqueMovies = res.data.filter(
            (movie) =>
              subM.filter((sub) => sub.movieId === movie.id).length === 0
          );
          setMovies([...uniqueMovies]);
        });
      });
    }
  }, [userId]);

  useEffect(() => {
    if (movies.length > 0 && subMovies.length > 0) {
      console.log("in filters");
      const uniqueMovies = movies.filter(
        (movie) =>
          subMovies.filter((sub) => sub.movieId === movie.id).length === 0
      );
      setMovies([...uniqueMovies]);
    }
  }, [subMovies]);

  return (
    <div className="newMovie">
      <h4>Add a new Movie</h4>
      <br />
      <select onChange={(event) => movieSelect(event.target.value)}>
        {movies.map((movie) => {
          return (
            <option key={movie.id} value={movie.id}>
              {movie.name}
            </option>
          );
        })}
      </select>

      <input
        key="date"
        type="date"
        min="2023-01-01"
        max="2023-12-31"
        onChange={handleDate}
      ></input>
      <div>
        <button onClick={subBtn}>Subscribe</button>
      </div>
      <div>{showMsg}</div>
      <ul className="sub">
        {subMovies.map((subMovie, index) => {
          return (
            <li className="lisub" key={index}>
              {subMovie.movieName} , {subMovie.watchDate}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewMovie;
