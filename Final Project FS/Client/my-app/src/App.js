import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";
import LogInPage from "./Components/LogInPage";
import MainPage from "./Components/MainPage";
import Movies from "./Components/Movies";
import LogOut from "./Components/LogOut";
import Subscriopsions from "./Components/Subscriopsions";
import UserManagement from "./Components/UserManagement";
import Users from "./Components/Users";
import EditUser from "./Components/EditUser";
import AddUser from "./Components/AddUser";
import EditMovie from "./Components/EditMovie";
import EditMember from "./Components/EditMember";
import AddNewMember from './Components/AddNewMember'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/LogOut" element={<LogInPage />} />
        <Route path="/Subscriopsions" element={<Subscriopsions />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/LogInPage" element={<LogInPage />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/EditUser/:id" element={<EditUser />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/EditMovie/:movieid" element={<EditMovie />} />
        <Route path="/EditMember/:id" element={<EditMember />} />
        <Route path="/AddNewMember" element={<AddNewMember />} />
      </Routes>
    </div>
  );
};

export default App;
