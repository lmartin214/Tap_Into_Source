const router = require("express").Router();
const { User, Post } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("home", {
    layout: "homelayout",
    style: "home.css",
  });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render('login', {
    logged_in: true,
    layout: "loginlayout",
    style: "login.css",
  });
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup", {
    layout: "signuplayout",
    style: "signup.css",
  });
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      //include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
      layout: "profilelayout",
      style: "profile.css",
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
