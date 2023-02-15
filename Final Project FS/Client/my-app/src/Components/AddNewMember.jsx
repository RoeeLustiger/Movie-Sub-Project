import React from "react";
import { postItem } from "../utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const AddNewMember = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [userCity, setUserCity] = useState("");
  const [newMember, setNewMember] = useState({});
  

  const navigate = useNavigate();


  const addNewMemberBtn = () => {
    if (!username || !useremail || !userCity) {
      console.log("Empty");
      return;
    }
    newMember.Name = username;
    newMember.Email = useremail;
    newMember.City = userCity;
    console.log(newMember);
    postItem("/members", newMember).then((res) => navigate("/Subscriopsions"));
  };

  const CancelBtn = () => {
    navigate("/members");
  };
  return (
    <div>
      <h1>Add new Member</h1>
      <br />
      Name:
      <input
        type="text"
        defaultValue={username}
        onChange={(ev) => setUsername(ev.target.value)}
      ></input>
      <br />
      Email:
      <input
        type="email"
        defaultValue={useremail}
        onChange={(ev) => setUserEmail(ev.target.value)}
      ></input>
      <br />
      city:
      <input
        type="city"
        defaultValue={userCity}
        onChange={(ev) => setUserCity(ev.target.value)}
      ></input>
      <br />
      <button onClick={addNewMemberBtn}>Save</button>
      <button onClick={CancelBtn}>Cancel</button>
    </div>
  );
};

export default AddNewMember;
