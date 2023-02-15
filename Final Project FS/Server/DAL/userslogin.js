const mongoose = require("mongoose");

const getuserslogin = () =>
  console.log("getuserslogin");
  mongoose
    .connect("mongodb://localhost:27017/Subscriptions", function(err, db)
    {
      console.log("Connected to Subscriptions!", "userslogin");
      db.connection.collection("userslogin").find({'admin':true}, function (err, res) {
        if (err) throw err;

        db.connection.close();
        return res[0]
      });
    })
    .catch((error) => console.log(error));

module.exports = { getuserslogin };