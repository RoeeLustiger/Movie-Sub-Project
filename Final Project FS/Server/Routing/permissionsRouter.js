const express = require("express");
const usersWS = require("../BLL/permissionsWS_BLL");
const app = express.Router();

app.get("/", (req, res) => {
  usersWS.getAllPermissions().then((resp) => res.send(resp));
  // console.log(res);
});

module.exports = app;
