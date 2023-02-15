const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    Name: { type: String },
    Email: { type: String },
    City: { type: String },
    // userId: { type: Number },
  },
  { collection: "members" }
);

module.exports = mongoose.model("members", memberSchema);
