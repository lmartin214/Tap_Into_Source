const router = require("express").Router();
const { Post, User } = require("../../models");

// The `/api/products` endpoint

// get all products
router.get("/", (req, res) => {
  try {
    Post.findAll().then((data) => res.json(data));
  } catch (err) {
    console.log(err.message);
  }
});

// get posts by zip
router.get("/:zip", async (req, res) => {
  console.log("in the route2");
  try {
    // const postZip =  await Post.findAll({
    Post.findAll({
      where: { zip: req.params.zip },
    }).then((data) => {
      res.json(data);
      console.log(data);
    });
    // if (!postZip) {
    //   res.status(404).json({ message: "No posts with this zip code!" });
    // }
    // res.status(200).json(postZip);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

// create new post
router.post("/", async (req, res) => {
  console.log("in the route");
  try {
    const newPost = await Post.create({
      type: req.body.type,
      zip: req.body.zip,
    });
    console.log("new post");
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//   Product.create(req.body)
//     .then((product) => {
//       // if there's product tags, we need to create pairings to bulk create in the ProductTag model
//       if (req.body.tagIds.length) {
//         const productTagIdArr = req.body.tagIds.map((tag_id) => {
//           return {
//             product_id: product.id,
//             tag_id,
//           };
//         });
//         return ProductTag.bulkCreate(productTagIdArr);
//       }
//       // if no product tags, just respond
//       res.status(200).json(product);
//     })
//     .then((productTagIds) => res.status(200).json(productTagIds))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// // update product
// router.put("/:id", (req, res) => {
//   // update product data
//   Product.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((product) => {
//       // find all associated tags from ProductTag
//       return ProductTag.findAll({ where: { product_id: req.params.id } });
//     })
//     .then((productTags) => {
//       // get list of current tag_ids
//       const productTagIds = productTags.map(({ tag_id }) => tag_id);
//       // create filtered list of new tag_ids
//       const newProductTags = req.body.tagIds
//         .filter((tag_id) => !productTagIds.includes(tag_id))
//         .map((tag_id) => {
//           return {
//             product_id: req.params.id,
//             tag_id,
//           };
//         });
//       // figure out which ones to remove
//       const productTagsToRemove = productTags
//         .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//         .map(({ id }) => id);

//       // run both actions
//       return Promise.all([
//         ProductTag.destroy({ where: { id: productTagsToRemove } }),
//         ProductTag.bulkCreate(newProductTags),
//       ]);
//     })
//     .then((updatedProductTags) => res.json(updatedProductTags))
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
//     });
// });

// router.delete("/:id", (req, res) => {
//   // delete one product by its `id` value
// });

module.exports = router;
