const axios = require("axios");
const mongoose = require("mongoose");
const MoviesDataModel = require("../models/moviesModel");

const moviesUrl = "https://api.tvmaze.com/shows";

const getAllMovies = () => {
  return axios.get(moviesUrl);
};


const getAllMoviesData = async () => {
  return await MoviesDataModel.find({});
};

const getMovieById = async (id) => {
  return axios.get(`${moviesUrl}/${id}`);
};

const addDataCollections = (movies) => {
  // Set Up the Database connection
  mongoose.connect("mongodb://localhost:27017/Subscriptions", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  MoviesDataModel.insertMany(movies).then((result) => {
    // console.log(result);
  });
};

const removeDataCollection = async () => {
  const collectionName = MoviesDataModel.schema.options.collection;
  try {
    await mongoose.connect('mongodb://localhost:27017/Subscriptions');
    await mongoose.connection.collection(collectionName).drop();
  } catch {
    console.log(collectionName, 'Collection not Exist');
  }
};

module.exports = {
  getAllMoviesData,
  getMovieById,
  getAllMovies,
  addDataCollections,
  removeDataCollection
};
