// import models
const Post = require("./Post");
const User = require("./User");

// adds user_id to each post //
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Post,
  User,
};
