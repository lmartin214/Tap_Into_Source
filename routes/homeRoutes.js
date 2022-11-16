const router = require("express").Router();
const { User, Post } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("home", {
    layout: "main",
  });
});

router.get("/profile", withAuth, (req, res) => {
  res.render("profile", {
    layout: "main",
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

router.get("/search", (req, res) => {
  res.render("search", {
    layout: "main",
  });
});

module.exports = router;
