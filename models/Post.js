// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize post model (table) by extending off Sequelize's Model class
class Post extends Model {}

// set up fields and rules for Post model
Post.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accessibility: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    whichTests: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trailDifficulty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    footTraffic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // parking: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // dogs: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // depth: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Post",
  }
);

module.exports = Post;
