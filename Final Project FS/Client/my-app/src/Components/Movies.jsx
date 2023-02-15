import { React } from "react";
import { getAll } from "../utils";
import { useState, useEffect } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const Movies = () => {
  const [movies, setMovies] = useState([]);
  const permissions = useSelector((state) => state.permissions);

  const [userpermission, setUserpermission] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    if (permissions) console.log(permissions);
    setUserpermission(permissions);
  }, [permissions]);

  const getAllMoviesBtn = async () => {
    getAll("/Movies").then((res) => {
      console.log(res);
      setMovies([...res.data]);
    });
  };
  const deleteBtn = () => {};

  // const handlesearch = (ev) => {
  //   const searchData = ev.target.value
  //   const searchNewArr = movies.filter((movies) => {
  //     const name = movies.Name
  //     console.log(movies.Name)
  //     return(name.includes(searchData))
  //   })
  //   setSearchMovie([...searchNewArr])
  // }
  

  return (
    <div>
      <h1>Movies</h1>
      <br />
      <button onClick={getAllMoviesBtn}>All Movies</button>
      <button>Add Movie</button>
     {/* {""} Find Movie: <input type="text"  onChange={handlesearch}></input>{" "}  */}
      
      <ul className="movies">
        {movies.map((movie, index) => {
          return (
            <li className="movie" key={index}>
              {movie.name} <br />
              {movie.geners} <br />
              <img src={movie.image}></img> <br />
              {userpermission.includes(5) && (
                <button onClick={() => navigate(`/EditMovie/${movie.id}`)}>Edit</button>
              )}
              {userpermission.includes(6) && (
                <button onClick={() => deleteBtn}>Delete</button>
              )}
              <h3 className="subsricptionsWatched">Subscripition watched</h3>
              <br />
              <ul></ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
