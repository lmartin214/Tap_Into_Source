const router = require("express").Router();
const { User, Post } = require("../../models");
const withAuth = require("../../utils/auth");
// The `/api/users` endpoint

//Post '/' - create a new User
router.post("/", async (req, res) => {
  try {
    console.log("Signup pinged")
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(newUser)
    req.session.save(() => {
    req.session.userId = newUser.id,
        req.session.username = newUser.username,
        req.session.logged_in = true;
        res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", withAuth, async (req, res) => {
  // delete a category by its `id` value
});

//Post '/login' matches the user's input with the database, if the user exists and the password matches the user will login.
router.post("/login", (req, res) => {
  console.log("Hitting login route");
  console.log(req.body);
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((dbUserData) => {
      console.log(dbUserData);
      if (!dbUserData) {
        res.status(400).json({ message: "No user with that name!" });
        return;
      }

      const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: "Incorrect password!" });
      }

      req.session.save(() => {
        req.session.userId = dbUserData.id,
          req.session.username = dbUserData.username,
          req.session.logged_in = true;
          res.json(dbUserData)
      });
    })
    .catch((err) => console.log(err));
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
