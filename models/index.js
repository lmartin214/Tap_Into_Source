// import models
const Post = require("./Post");
const User = require("./User");

// adds user_id to each post //
User.hasMany(Post);


module.exports = {
  Post,
  User,
};
