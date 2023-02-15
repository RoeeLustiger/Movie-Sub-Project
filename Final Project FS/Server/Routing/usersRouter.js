const express = require("express");
const usersWS = require("../BLL/usersWS_BLL");
const app = express.Router();

// GET method route
app.get("/", (req, res) => {
  usersWS.getAllUsers().then(resp => {
    res.send(resp)})
  
});

app.get("/edit/:id", (req, res) => {
  usersWS.getById(req.params.id).then((resp) => {
    res.send(resp);
  });
});

app.patch("/:id", (req, res) => {
  try {
    usersWS.patchUser(req.params.id, req.body);
    res.send({ error: false });
  } catch {
    res.send({ error: true });
  }
});




app.get("/:name/:pass", (req, res) =>
  usersWS.getByNameByPass(req.params.name,req.params.pass).then((resp) => {
   res.send(resp);
  })
);

app.get("/:name", (req, res) => {
  usersWS.getUsersByName(req.params.name).then((resp) => {
    res.send(resp);
  });

});

app.delete('/:id', (req,res) => {
  usersWS.deleteById(req.params.id).then(resp => res.send({error: false}))
})



// POST method route
app.post("/", (req, res) => {
  usersWS.postUser(req.body)
  res.send({error: false})
});

app.patch("/", (req, res) => {
  console.log(req.body);
  usersWS.getUsersByName(req.body.username).then((resp) => {
    res.send(resp);
  });
});

module.exports = app;
