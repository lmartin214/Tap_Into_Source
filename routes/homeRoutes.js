const router = require("express").Router();
const { User, Post } = require("../models/");
const withAuth = require("../utils/auth")

router.get("/", (req, res) => {
  res.render("home", {
    layout: "homelayout",
    style: "home.css",
  });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login", {
    layout: "loginlayout",
    style: "login.css",
  });
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("signup", {
    layout: "signuplayout",
    style: "signup.css",
  });
});

router.get("/profile", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    res.render("profile", {
      layout: "profilelayout",
      style: "profile.css",
    });
  }
});

router.get("/post", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    res.render("post", {
      layout: "postlayout",
      style: "post.css",
    });
  }
});

router.get('/post', withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = dbUserData.map((post) => post.get({ plain: true }));

    res.render('post', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/search", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      const searchData = await Post.findAll();

      const searches = searchData.map((search) => search.get({ plain: true }));
    } catch (err) {
      console.log(searches);
      res.render("search", {
        layout: "searchlayout",
        style: "search.css",
        searches,
      });
    }
  }
});

module.exports = router;
