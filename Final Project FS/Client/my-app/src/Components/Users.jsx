import { React } from "react";
import { useState } from "react";
import { getAll, deleteItem } from "../utils";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const GetAllUsers = async () => {
    getAll("/users").then((res) => setUsers([...res.data]));
  };

  const editBtn = (id) => {
    navigate("/EditUser/" + id);
  };
  const deleteBtn = (id) => {
    console.log(id);

    deleteItem("/users", id).then((res) => {
      const filteredArray = users.filter((item) => item._id !== id);
      setUsers(filteredArray);
    });
  };

  return (
    <div>
      Users
      <button onClick={GetAllUsers}>All Users</button>
      <button onClick={() => navigate("/AddUser")}>Add User</button>
      <br></br>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <div className="userBox">
                UserName: {user.username}
                <br />
                Name: {user.name}
                <br />
                email:{user.email}
                <br />
                <button onClick={() => editBtn(user.id)}>Edit</button>
                <button onClick={() => deleteBtn(user._id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
