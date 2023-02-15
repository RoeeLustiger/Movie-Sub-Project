import { useParams } from "react-router";
import { useState, useEffect } from "react";
import React from "react";
import { getAll, getById,patchItem } from "../utils";
import { useNavigate } from "react-router-dom";
import { CPermissions } from '../const/permissions'
import { useDispatch } from 'react-redux';
import { addpermissions } from '../redux/actions';

const EditUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [allPermissions, setallPermissions] = useState([]);
  const [userpermissions, setUserPermissions] = useState([]);
  const [user, setUser] = useState({});
  const [UserName, setUserName] = useState("");

  const navigate  = useNavigate()

  // const [CreatedDate, setCreatedDate] = useState('')
  // const [firstName, setFirstName] = useState('')
  const { id } = useParams();
  const dispatch = useDispatch();

  

  useEffect(() => {
    getById("/users/edit", id).then((res) => {
      setFirstName(res.data.user.firstName);
      setlastName(res.data.user.lastName);
      setUserName(res.data.user.username);
      setUser(res.data.user);
      setUserPermissions([...res.data.user.permission])
      getAll("/permissions").then((res) => {
        setallPermissions([...res.data]);
      });
    });
  }, []);

  // useEffect(()=>{
  //   setallPermissions([...allPermissions])
  // }, [userpermissions])

  const checkPer = (ev, id) => {
    if (ev.target.checked) {
        setUserPermissions([...userpermissions, id]);
    } else {
      setUserPermissions(userpermissions.filter((item) => item !== id));
    }

  };
  const updateBtn = () => {
    user.lastName = lastName;
    user.firstName = firstName;
    user.username = UserName;
    user.permission = userpermissions; 
    if(user.permission.includes(CPermissions.CreateSubscriptions) || user.permission.includes(CPermissions.DeleteSubscriptions)) {
      user.permission = [...user.permission, CPermissions.ViewSubscriptions]
    } 
    if (user.permission.includes(CPermissions.DeleteMovies) || user.permission.includes(CPermissions.CreateMovies)) {
      user.permission = [...user.permission, CPermissions.ViewMovies]
    } 
    user.permission = [...new Set(user.permission)]; 
    dispatch(addpermissions(user.permission))
    user.name = firstName + ' ' + lastName

    console.log(user);
    patchItem('/users',user.id,user).then(res => navigate('/LogInPage') )
    
  };
  const CancelBtn = () => {
    navigate('/Users')
  };



  return (
    <div>
      EditUser <br /> <br />
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
      <button onClick={updateBtn}>update</button>
      <button onClick={CancelBtn}>Cancel</button>
    </div>
  );
};

export default EditUser;
