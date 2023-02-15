import { useState, useEffect } from "react";
import React from "react";
import { getAll, postItem } from "../utils";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [allPermissions, setallPermissions] = useState([]);
  const [userpermissions, setUserPermissions] = useState([]);
  const [user, setUser] = useState({});
  const [UserName, setUserName] = useState("");

  const navigate = useNavigate();

  // const [CreatedDate, setCreatedDate] = useState('')
  // const [firstName, setFirstName] = useState('')

  useEffect(() => {
    getAll("/permissions").then((res) => {
      console.log(res.data);
      setallPermissions([...res.data]);
    });
  }, []);

  const checkPer = (ev, id) => {
    if (ev.target.checked) {
      setUserPermissions([...userpermissions, id]);
    } else {
      setUserPermissions(userpermissions.filter((item) => item !== id));
    }
  };
  const AddBtn = () => {
    if (!lastName || !firstName || !UserName) {
      console.log("Empty");
      return;
    }
    user.lastName = lastName;
    user.firstName = firstName;
    user.username = UserName;
    user.permission = userpermissions;
    user.name = firstName + " " + lastName;
    console.log(user);
    postItem("/users", user).then((res) => navigate("/Users"));
  };
  const CancelBtn = () => {
    navigate("/Users");
  };

  return (
    <div>
      AddUser <br /> <br />
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="fName"
            defaultValue={firstName}
            onChange={(ev) => setFirstName(ev.target.value)}
          />
        </label>{" "}
        <br /> <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lName"
            defaultValue={lastName}
            onChange={(ev) => setlastName(ev.target.value)}
          />
        </label>{" "}
        <br /> <br />
        <label>
          Created Date:
          {/* <input type="text" name="createdDate" /> */}
        </label>{" "}
        <br /> <br />
        <label>
          UserName
          <input
            type="text"
            name="username"
            defaultValue={UserName}
            onChange={(ev) => setUserName(ev.target.value)}
          />
        </label>{" "}
        <br /> <br />
        <label>
          Seesion Time Out:
          {/* <input type="text" name="seesionTimeOut" /> */}
        </label>{" "}
        <br /> <br />
        <label>
          permissions:
          <ul>
            {allPermissions.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={item.id}
                  onClick={(ev) => checkPer(ev, item.id)}
                  defaultChecked={userpermissions.includes(item.id)}
                />
                {item.permission}
              </li>
            ))}
          </ul>
        </label>
      </form>
      <button onClick={AddBtn}>update</button>
      <button onClick={CancelBtn}>Cancel</button>
    </div>
  );
};

export default AddUser;
