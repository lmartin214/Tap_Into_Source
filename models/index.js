// import models
const Post = require("./Post");
const User = require("./User");

// Products belongsTo Category
User.hasMany(Post);
// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Post,
  User,
};
