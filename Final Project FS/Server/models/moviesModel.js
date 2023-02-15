const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    geners: { type: [String] },
    image: { type: String },
    premiered: { type: String },
  },
  { collection: "movies" }
);

module.exports = mongoose.model("movies", moviesSchema);
