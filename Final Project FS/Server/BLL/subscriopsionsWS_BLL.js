const subscriopsionsWS = require("../DAL/subscriopsionsWS_DAL");

const addDataCollections = () => {
  //   getALLMovies().then((ret) => {
  //     // console.log(ret);
  subscriopsionsWS.addDataCollections();
  console.log("create subscriopsions collection");
  //   });
};

const postSubscriopsions = (obj) => {
  subscriopsionsWS.addsubScriopsions(obj);
};

const getAllSubMovie = async (userId) => {
  const movies = await subscriopsionsWS.getSubMoies(userId);
  // console.log(movies);
  return movies;
};
module.exports = { addDataCollections, postSubscriopsions, getAllSubMovie };
