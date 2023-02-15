const express = require("express");
const moviesWS = require("../BLL/moviesWS_BLL");
const moviesWSDAl = require("../DAL/moviesWS_DAL");
const app = express.Router();

app.get("/", (req, res)=> {
  moviesWSDAl.getAllMoviesData().then(resp => {
      res.send(resp)})
    })

    app.get('/:id',(req, res)=> {
      moviesWS.getById(req.params.id).then(resp => {
        res.send(resp)})
      })

      module.exports = app;