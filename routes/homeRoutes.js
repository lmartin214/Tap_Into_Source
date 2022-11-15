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

router.get("/post", (req, res) => {
  res.render("post", {
    layout: "main",
  });
});

router.get("/search", (req, res) => {
  res.render("search", {
    layout: "searchlayout",
    style: "search.css",
  });
});

router.get("/results", (req, res) => {
  res.render("results", {
    layout: "main",
  });
});

module.exports = router;
