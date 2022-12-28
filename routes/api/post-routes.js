const router = require("express").Router();
const { Post } = require("../../models");

// get all posts
router.get("/", (req, res) => {
  try {
    Post.findAll().then((data) => res.json(data));
  } catch (err) {
    console.log(err.message);
  }
});

// get posts by zip and type //
router.get("/search/:zip/:type?", (req, res) => {
  const { params } = req;
  Object.keys(params).forEach((key) => {
    if (params[key] === undefined) {
      delete params[key];
    }
  });
  console.log("params", params);

  try {
    Post.findAll({
      where: params,
    }).then((data) => {
      if (!data.length) {
        res.status(404).json({ message: "No posts with these!" });
      } else {
        res.status(200).json(data);
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

// create new post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      type: req.body.type,
      country: req.body.country,
      zip: req.body.zip,
      state: req.body.state,
      accessibility: req.body.accessibility,
      testResults: req.body.testResults,
      footTraffic: req.body.footTraffic,
      trailDifficulty: req.body.trailDifficulty,
      parking: req.body.parking,
      depth: req.body.depth,
      dogs: req.body.dogs,
    });
    console.log("new post");
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
