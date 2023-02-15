const axios = require("axios");
const mongoose = require("mongoose");
const membersModel = require("../models/membersModel");

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const MoviesUrl = "https://api.tvmaze.com/shows";

const getAllMembers = () => {
  return axios.get(usersUrl);
};

const getAllMembersById = async (_id) => {
  return await membersModel.findOne({ _id });
};

const getAllMemberFromDB = async () => {
  return await membersModel.find({});
};

const getAllMovies = () => {
  return axios.get(MoviesUrl);
};

const removeDataCollection = async () => {
  const collectionName = membersModel.schema.options.collection;
  try {
    await mongoose.connect("mongodb://localhost:27017/Subscriptions");
    await mongoose.connection.collection(collectionName).drop();
  } catch {
    console.log(collectionName, "Collection not Exist");
  }
};

const addDataCollections = (members) => {
  // Set Up the Database connection
  mongoose.connect("mongodb://localhost:27017/Subscriptions", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  membersModel.insertMany(members).then((result) => {
    // console.log(result);
  });
};

const putMember = async (id, body) => {
  console.log(id);
  console.log(body);
  ret = await membersModel.updateOne({ _id: id }, body);
  console.log(ret);
};

const deleteMemberById = async (id) => {
  await membersModel.deleteOne({ _id: id });
  return { error: false };
};

const AddNewMember = async (obj) => {
  await membersModel.create(obj);
  console.log(obj);

  return { error: false };
};

module.exports = {
  getAllMovies,
  getAllMembers,
  addDataCollections,
  removeDataCollection,
  getAllMemberFromDB,
  getAllMembersById,
  putMember,
  deleteMemberById,
  AddNewMember,
};
