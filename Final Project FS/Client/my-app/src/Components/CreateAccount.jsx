import React, { useState } from "react";
import { getByName,patchItem } from "../utils";
import { useNavigate } from "react-router-dom";



const createAccount = () => {
  const [errmsg, setErrmsg] = useState('');
  const [username, setUsername] = useState("");
  const [userpassword, setuserPassword] = useState("");
  const navigate = useNavigate();



  const createBtn = () => {
    console.log(username, userpassword);
    if (username.length === 0) {
      return;
    }
    if (userpassword.length === 0) {
      return;
    }
    getByName("/users", username).then(res=> {
      console.log(res.data);
      if(!res.data.error) {
        patchItem('/users',res.data.id,{pass:userpassword}).then(res=> setErrmsg('passWord sucsses'))
        navigate("/LogInPage");
        return
      }
      setErrmsg('user NOT found')
    });
  };

  

  
  return (
    <div className="createAccuontPage">
      <h1>Movies - Subscripsion Web Site</h1>
      <h2>Create Account Page</h2>
      User Name:{" "}
      <input
        type="text"
        name="UserName"
        onChange={(ev) => setUsername(ev.target.value)}
      ></input>
      <br></br>
      <br></br>
      PassWord:{" "}
      <input
        type="text"
        name="PassWord"
        onChange={(e) => setuserPassword(e.target.value)}
      ></input>
      <div></div>
      <br/>
      <button onClick={createBtn}>Create</button>
      <br/>
      <div>{errmsg}</div>
    </div>
  );
};

export default createAccount;
