import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {getByNameByPass, getById} from '../utils'
import { useDispatch } from 'react-redux';
import { addUser, addpermissions } from '../redux/actions';

// const CounterChanger = () => {
//   const dispatch = useDispatch();

//   const increment = () => {
//     dispatch(doIncrement());
//   };

//   const increment3 = () => {
//     dispatch(doIncrement(3));
//   };

//   const decrement = () => {
//     dispatch(doDecrement());
//   };

const LogInPage = () => {

  const [errmsg, setErrmsg] = useState('');
  const navigate  = useNavigate()
  const dispatch = useDispatch();
  
  const logInBtn = () => {
    console.log(username, userpassword);
    setErrormsg("");
    if (username.length === 0) {
      setErrormsg("no data");
      return;
    }
    if (userpassword.length === 0) {
      setErrormsg("no data");
      return;
    }
    getByNameByPass("/users", username,userpassword).then(res => {
      console.log(res)
      if(!res.data.error){
        dispatch(addUser(res.data.user.id));

        getById("/users/edit", res.data.user.id).then((resp) => {
          dispatch(addpermissions(resp.data.user.permission))
        });
        setErrmsg('Log in sucsess');
        navigate('/MainPage')
        return
      }
      setErrmsg('Log In Fail ');
      return
    })
    
    
  };

  const [username, setUsername] = useState("");
  const [userpassword, setuserPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");
  return (
    <div className="logInPage"> 
      <h1>Movies - Subscripsion Web Site</h1>
      <h2>Log in Page!</h2>
      User Name:{" "}
      <input
        type="text"
        name="UserName"
        onChange={(ev) => setUsername(ev.target.value)}
      ></input>
      <div>{errormsg}</div>
      <br></br>
      PassWord:{" "}
      <input
        type="text"
        name="PassWord"
        onChange={(e) => setuserPassword(e.target.value)}
      ></input>
      <div>{errormsg}</div>
      <br></br>
      <button onClick={logInBtn}>LogIn</button>
      <br></br>
      <br></br>
      New user?: <Link to="/createAccount">create Account</Link>
      <br/>
    </div>
  );
};

export default LogInPage;
