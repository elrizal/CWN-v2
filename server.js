const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
//const routes = require("./routes");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 7000;
//const db = require("./models");

//const passport = require("./config/passport");

app.use(morgan());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/test',(req,res) => {
  if (req.user) return res.send({Hi:"There"});
  res.send({message: 'You\' not suppose to be here you filthy animal!'})
});

app.use(routes);


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});