import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';
import { useEffect } from "react";


const MainPage = () => {
  const userid = useSelector((state) => state.userid);

 
  
  return (
    <div>
      <h1>Movies - subscripions WebSite {userid}</h1>
      <br />
      <br />
      <Link to='/Movies'>Movies</Link> <br />
      <Link to='/Subscriopsions'>Subscriopsions</Link>
      <br />
      <Link to='/UserManagement'>User Management</Link>
      <br />
      <Link to='/LogInPage'>Log Out</Link>
      <br />
    </div>
  );
};

export default MainPage;
