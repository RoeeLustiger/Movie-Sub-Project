const express = require("express");
const subscriopsionsWSBLL = require("../BLL/subscriopsionsWS_BLL");
const app = express.Router();

// app.get("/", (req, res) => {
//     usersWS.getAllUsers().then(resp => {
//       res.send(resp)})

//   });

app.post("/", (req, res) => {
  subscriopsionsWSBLL.postSubscriopsions(req.body);
  res.send({ error: false });
});

app.get("/:userId", (req, res) => {
  subscriopsionsWSBLL.getAllSubMovie(req.params.userId).then((movies) => {
    res.send({ error: false, movies });
  });
});

module.exports = app;
