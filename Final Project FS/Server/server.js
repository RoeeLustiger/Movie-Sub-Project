const express = require("express");
const cors = require("cors");
const initilaize = require("./initilaize");
const usersRouter = require("./Routing/usersRouter");
const permissionsRouter = require("./Routing/permissionsRouter");
 const moviesRouter = require('./Routing/moviesRouter')
 const subRouter = require('./Routing/subscriopsionsRouter')
 const membersRouter = require('./Routing/membersRouter')
//const userslogin = require('./DAL/userslogin')
const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

// routers
app.use("/users", usersRouter);
app.use("/permissions", permissionsRouter);
app.use("/Movies",moviesRouter);
app.use("/sub",subRouter);
app.use("/members",membersRouter);

app.listen(port, () => {
  console.log(`app listening on: http://localhost:${port}`); // The server's Entry Point
  initilaize.init(); // Call initilaize functions
});
