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
    distance: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tested: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // isMoving: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    // },
    // isStill: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    // },
    source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drinkable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // depth: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    swimmable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    accessibility: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isHike: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isDrive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    parking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dogs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
