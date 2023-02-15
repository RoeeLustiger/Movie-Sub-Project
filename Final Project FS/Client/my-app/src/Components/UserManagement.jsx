import React from "react";
import { Link } from "react-router-dom";

const UserManagement = () => {
  return (
    <div>
      <h1>User Management </h1>
      <Link to='/Users'>Users</Link>
    </div>
  );
};

export default UserManagement;
