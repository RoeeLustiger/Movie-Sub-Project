const moviesWS = require("../DAL/moviesWS_DAL");

const getById = async (id) => {
  const movie = await moviesWS.getMovieById(id);
  return {
    id: movie.data.id,
    name: movie.data.name,
    geners: movie.data.genres,
    image: movie.data.image.medium,
    premiered: movie.data.premiered,
  };
};

const getALLMovies = async () => {
//From WebSite API
  const movies = await moviesWS.getAllMovies();

  // console.log(movies);
  const Movies = movies.data.map((movie) => {
    return {
      id: movie.id,
      name: movie.name,
      geners: movie.genres,
      image: movie.image.medium,
      premiered: movie.premiered,
    };
    
  });

  return Movies;
};

const addDataCollections = () => {
  getALLMovies().then((ret) => {
    //  console.log(ret);
    moviesWS.addDataCollections(ret);
    console.log("create Movies collection");
  });
};

module.exports = { getALLMovies, getById,addDataCollections };
