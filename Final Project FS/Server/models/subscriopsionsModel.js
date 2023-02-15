const mongoose = require("mongoose");

const subscriopsionsSchema = new mongoose.Schema(
  {
    movieId: { type: Number },
    movieName: { type: String },
    userId: { type: String },
    watchDate: { type : String}
   
  },
  { collection: "subscriopsions" }
);

module.exports = mongoose.model("subscriopsions", subscriopsionsSchema);
