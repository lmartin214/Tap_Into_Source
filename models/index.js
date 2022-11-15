// import models
const Post = require("./Post");
const User = require("./User");

// adds user_id to each post //
User.hasMany(Post);

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Post,
  User,
};
