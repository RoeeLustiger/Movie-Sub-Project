import { React } from "react";
import { useState } from "react";
import { getAll, deleteItem } from "../utils";
import { useNavigate } from "react-router-dom";
import "../App.css";
import NewMovie from "./NewMovie";

const Subscriopsions = () => {
  const [members, setMembers] = useState([]);
  const [memberSelected, setmemberSelected] = useState(0);
  const navigate = useNavigate();

  const getAllMembers = async () => {
    getAll("/members").then((res) => setMembers([...res.data]));
  };

  const editBtn = (id) => {
    navigate("/EditMember/" + id);
  };
  const deleteBtn = (id) => {
    console.log(id, "Deleted");
    deleteItem("/members", id).then((res) => {
      const filteredArray = members.filter((item) => item._id !== id);
      setMembers(filteredArray);
    });
  };

  const openSub = (id) => {
    if (memberSelected == id) {
      setmemberSelected(0);
    } else {
      setmemberSelected(id);
    }
  };

  return (
    <div>
      members
      <button onClick={getAllMembers}>All Members</button>
      <button onClick={() => navigate("/AddNewMember")}>Add Member</button>
      <br></br>
      <ul>
        {members.map((member, index) => {
          return (
            <li key={index}>
              <div className="memberBox">
                Name: {member.Name}
                <br />
                Email:{member.Email}
                <br />
                City:{member.City}
                <br />
                <br />
                <button onClick={() => editBtn(member._id)}>Edit</button>
                <button onClick={() => deleteBtn(member._id)}>Delete</button>
                <div className="subsricptionsmember">
                  <h3>Movies Watched</h3>
                  <br />
                  <button onClick={() => openSub(member._id)}>
                    Subsribe to new movie
                  </button>
                  {memberSelected == member._id && (
                    <NewMovie userId={member._id} />
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Subscriopsions;
