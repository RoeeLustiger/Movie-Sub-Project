import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getById } from "../utils";
import { useSelector } from 'react-redux';
import { CPermissions } from '../const/permissions'


const EditMovie = () => {
  const userid = useSelector((state) => state.userid);
  const permission = useSelector((state) => state.permissions);


  const [movieName, setMovieName] = useState("");
  const [movieGenres, setMmovieGenres] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [moviePremired, setmMviePremired] = useState("");
  const [updatePermission, setUpdatePermission] = useState(false)
  const { movieid } = useParams();

  useEffect(() => {
    if(permission && permission.includes(CPermissions.UpdateMovie)) {
      setUpdatePermission(true)
    }
  
  }, [permission])
  

  useEffect(() => {
    if (!movieid) return;
    getById("/Movies", movieid).then((res) => {
      setMovieName(res.data.name);
      setMmovieGenres(res.data.geners);
      setMovieImg(res.data.image);
      setmMviePremired(res.data.premiered);
    });
  }, [movieid]);

  return (
    <div>
      <h1>ID: {movieid}</h1>
      <br />
      <h1>Edit Movie:{movieName}</h1>
      <br />
      <br />
      name <input type="text" name="name" defaultValue={movieName} />
      <br />
      <br />
      Genres <input type="text" name="genres" defaultValue={movieGenres[0]} />
      <br />
      <br />
      imageUrl <input type="text" name="img" defaultValue={movieImg} />
      <br />
      <br />
      Premired{" "}
      <input type="text" name="premired" defaultValue={moviePremired} />
      <br />
      <br />
      {updatePermission && <button>Update</button>}
      <button>cancel</button>
      <h2>{userid}</h2>
    </div>
  );
};

export default EditMovie;
