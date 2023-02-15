const jsonfile = require("jsonfile");
const mongoose = require('mongoose');
const UsersDataModel = require('../models/userModel');


const file = "./server/Data/users.json"; // the path of the file from where the terminal is opened

const getUsers = () => {
  return jsonfile.readFile(file);
};

const getAllUsers = async () => {
  return await UsersDataModel.find({}); 
}

const removeDataCollection = async () => {
  const collectionName = UsersDataModel.schema.options.collection;
  try {
    await mongoose.connect('mongodb://localhost:27017/Subscriptions');
    await mongoose.connection.collection(collectionName).drop();
  } catch {
    console.log(collectionName, 'Collection not Exist');
  }
}

const addDataCollections = (users) => {
  // Set Up the Database connection
  mongoose.connect(
    'mongodb://localhost:27017/Subscriptions', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  UsersDataModel.insertMany(users).then((result) => {
    // console.log(result);
  })
}
const updateUser = async (id,obj) => {
 await UsersDataModel.updateOne({id}, obj);
}

const addUser = async (obj) => {
 await UsersDataModel.create(obj);
 return {error: false}
}

const getUserByLogIn = async(name,pass) => {
  user = await UsersDataModel.findOne({username:name,pass})
  return {error: !user, user};
  
}

const getById = async (id) => {
  user = await UsersDataModel.findOne({id})
  return {error: !user, user};
  
}
const deleteById = async (id) => {
  await UsersDataModel.deleteOne({_id:id})
  return {error: false}
}




module.exports = { deleteById,addUser,getUsers, removeDataCollection, addDataCollections,getAllUsers ,updateUser,getUserByLogIn,getById};
