const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    username: { type: String },
    email: { type: String },
    pass: { type: String },
    address: {
      street: { type: String },
      suite: { type: String },
      city: { type: String },
      zipcode: { type: String },
      geo: {
        lat: { type: String },
        lng: { type: String },
      },
    },
    phone: { type: String },
    website: { type: String },
    company: {
      name: { type: String },
      catchPhrase: { type: String },
      bs: { type: String },
    },
    admin: {
      type: Boolean,
      default: false,
    },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    permission: { type: [Number], default: [] },
  },
  {
    collection: "users",
  }
);
module.exports = mongoose.model("Users", userSchema);
