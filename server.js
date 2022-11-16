const express = require("express");
const routes = require("./routes/");
const path = require("path");
// import sequelize connection
const sequelize = require("./config/connection");
// import handlebars express session utils off, sequelize store //
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;

// object will define parameters that a user will have //
const sess = {
  secret: "secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
// enabeling the use of session with sess paramaters //
app.use(session(sess));

// sequelize store and handlebars middleware here //
const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public/img"));
app.use(routes);

// sync sequelize models to the database, then turn on the server. change false to true when you want to recreate db but lose data
sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
