import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { getById, updateItem } from "../utils";
import { useNavigate } from "react-router-dom";

const EditMember = () => {
  const fullNameRef = useRef();
  const cityref = useRef();
  const emailref = useRef();

  const navigate = useNavigate();

  const { id } = useParams();
  const [showMsg, setShowMsg] = useState("");

  useEffect(() => {
    getById("/members/edit", id).then((res) => {
      console.log(res);
      fullNameRef.current.value = res.data.Name;
      cityref.current.value = res.data.City;
      emailref.current.value = res.data.Email;

      // setFullName(res.data.Name);
      // setEmail(res.data.Email);
      // setCity(res.data.City);
    });
  }, [id]);

  const updateBtn = () => {
    if (
      fullNameRef.current.value.length == 0 ||
      cityref.current.value.length == 0 ||
      emailref.current.value.length == 0
    ) {
      setShowMsg("Missing Data");

      return;
    }
    setShowMsg("");
    updateItem("/members", id, {
      Name: fullNameRef.current.value,
      City: cityref.current.value,
      Email: emailref.current.value,
    });
    navigate("/Subscriopsions");
  };

  return (
    <div>
      <h1>Members</h1>
      <h2>Edit Member</h2>
      <br />
      Name:
      <input type="text" id="name" ref={fullNameRef}></input>
      <br />
      Email:
      <input type="text" id="email" ref={emailref}></input>
      <br />
      City:
      <input type="text" id="city" ref={cityref}></input>
      <br />
      <div>{showMsg}</div>
      <br />
      <button onClick={updateBtn}>Update</button>
      <button onClick={() => navigate("/Subscriopsions")}>cencel</button>
    </div>
  );
};

export default EditMember;
