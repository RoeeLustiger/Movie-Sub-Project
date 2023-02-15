const express = require("express");
const app = express.Router();
const membersWS = require("../DAL/membersWS_DAL");
// const membersWSBLL = require("../BLL/membersWS");

app.get("/", (req, res) => {
  membersWS.getAllMemberFromDB().then((resp) => {
    res.send(resp);
  });
});

app.get("/edit/:id", (req, res) => {
  membersWS.getAllMembersById(req.params.id).then((resp) => {
    res.send(resp);
  });
});

app.put("/:id", (req, res) => {
  try {
    membersWS.putMember(req.params.id, req.body);
    res.send({ error: false });
  } catch {
    res.send({ error: true });
  }
});

app.delete("/:id", (req, res) => {
  membersWS.deleteMemberById(req.params.id)
    .then((resp) => res.send({ error: false }));
});

app.post("/", (req, res) => {
  membersWS.AddNewMember(req.body)
  res.send({error: false})
});

// app.post("/", (req, res) => {
//   membersWSBLL.postMember(req.body)
//   res.send({error: false})
// });

module.exports = app;
