const jsonfile = require("jsonfile");
const mongoose = require('mongoose');
const PermissionsDataModel = require('../models/permissionsModel');

const file = "./server/Data/permissions.json"; // the path of the file from where the terminal is opened

const getPermissions = () => {
  return jsonfile.readFile(file);
};



const removeDataCollection = async () => {
  const collectionName = PermissionsDataModel.schema.options.collection;
  try {
    await mongoose.connect('mongodb://localhost:27017/Subscriptions');
    await mongoose.connection.collection(collectionName).drop();
  } catch {
    console.log(collectionName, 'Collection not Exist');
  }
}

const addDataCollections = (permissions) => {
  // Set Up the Database connection
  mongoose.connect(
    'mongodb://localhost:27017/Subscriptions', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  PermissionsDataModel.insertMany(permissions).then((result) => {
    // console.log(result);
  })
}

module.exports = { getPermissions, removeDataCollection, addDataCollections };
