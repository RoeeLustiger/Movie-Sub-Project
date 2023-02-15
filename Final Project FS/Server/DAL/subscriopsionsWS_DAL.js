const mongoose = require("mongoose");
const subscriopsionsModel = require("../models/subscriopsionsModel");

const addDataCollections = () => {
  // Set Up the Database connection
  mongoose.connect("mongodb://localhost:27017/Subscriptions", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const addsubScriopsions = async (obj) => {
  await subscriopsionsModel.create(obj);
  return {error: false}
 }


const getSubMoies = async (userId) => {
  return await subscriopsionsModel.find({userId})
}

const removeDataCollection = async () => {
  const collectionName = subscriopsionsModel.schema.options.collection;
  try {
    await mongoose.connect('mongodb://localhost:27017/Subscriptions');
    await mongoose.connection.collection(collectionName).drop();
  } catch {
    console.log(collectionName, 'Collection not Exist');
  }
};
module.exports = { addDataCollections,addsubScriopsions,getSubMoies,removeDataCollection };
