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
      // comments: "",
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
    movingOrStill: {
      type: DataTypes.STRING,
      allowNull: false,
      comments: "",
    },
    // waterSource: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   comments: "",
    // },
    // tests: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   comments: "",
    // },
    // whichTests: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   comments: "",
    // },
    // ************************** //
    accessibility: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // trailDifficulty: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   comments: "",
    // },
    // parking: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   comments: "",
    // },
    // depth: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   comments: "",
    // },
    // rating: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   comments: "",
    // },
    // if yes, which tests have you done? what were the results? 10) does not apply instead of boolean
    // testsDone: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   comment: "",
    // },

    // distance: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },

    // tested: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   comments: "",
    // },
    // drinkable: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    //   comments: "",
    // },
    // visibility: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   comments: "",
    // },
    // depth: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   comments: "",
    // },
    // swimmable: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    //   comments: "",
    // },
    // accessibility: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   comments: "",
    // },
    // isHike: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    //   comments: "",
    // },
    // isDrive: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    //   comments: "",
    // },
    // parking: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   comments: "",
    // },
    // dogs: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   comments: "",
    // },
    // additionalComments: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
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
