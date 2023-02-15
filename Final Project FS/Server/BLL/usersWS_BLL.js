const UsersWS = require("../DAL/usersWS_DAL");

const getUsersData = async (id) => {
  //from file
  const Users = await UsersWS.getUsers();
  const user = Users.find((item) => item.id === id);
  const firstName = user.name.split(" ");

  return {
    id,
    name: user.name,
  };
};

const getUsersByName = async (name) => {
  //from file
  const Users = await UsersWS.getAllUsers();
  const user = Users.find((item) => item.username === name);
  if(user)
    return {
      error: false,
      id:user.id,
      _id:user._id,
      username: user.username,
      name: user.name,
    };
  return {error: true}
};


const getAllUsers = async () => {
  //from file
  const Users = await UsersWS.getAllUsers();
  const usersNames =  Users.map((item) => {
    const obj = Object.assign({}, item._doc);
    obj["firstName"] = item.name.split(" ")[0];
    obj["lastName"] = item.name.split(" ")[1];
    return obj;
  });
  return usersNames;

};

const getAllUsersData = async () => {
  //from file
  const Users = await UsersWS.getUsers();
  const usersNames = Users.map((item) => {
    const obj = Object.assign({}, item);
    obj["firstName"] = item.name.split(" ")[0];
    obj["lastName"] = item.name.split(" ")[1];
    return obj;
  });

  usersNames[0].admin = true;
  return usersNames;
};

const addDataCollections = () => {
  getAllUsersData().then((ret) => {
    // console.log(ret);
    UsersWS.addDataCollections(ret);
    console.log("create Users collection");
  });
};

const patchUser = (id,obj) => {
  UsersWS.updateUser(id,obj)
}

const postUser = (obj) => {
  UsersWS.addUser(obj)
}

const getByNameByPass = (name,pass) => {
  return UsersWS.getUserByLogIn(name,pass)
}

const getById = (id) => {
  return UsersWS.getById(id)
}

const deleteById = (id) => {
  return UsersWS.deleteById(id)
}




  module.exports = { deleteById,postUser,getUsersData, getAllUsers,getAllUsersData, addDataCollections,getUsersByName,patchUser,getByNameByPass,getById };
