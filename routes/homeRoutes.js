const router = require("express").Router();
const { User, Post } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("home", {
    layout: "homelayout",
    style: "home.css",
  });
});

router.get("/profile", (req, res) => {
  res.render("profile", {
    layout: "profilelayout",
    style: "profile.css",
  });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup", {
    layout: "signuplayout",
    style: "signup.css",
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login", {
    layout: "loginlayout",
    style: "login.css",
  });
});

router.get("/post", (req, res) => {
  res.render("post", {
  layout: "postlayout",
    style: "post.css",
  });
});

router.get("/search", async (req, res) => {
  const searchData = await Post.findAll();

  const searches = searchData.map((search) => search.get({ plain: true }));
  console.log(searches);
  res.render("search", {
    layout: "searchlayout",
    style: "search.css",
    searches,
  });
});

module.exports = router;
