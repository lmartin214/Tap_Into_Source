const { User } = require("../models");

const userData = [
  {
    username: "tweedledee",
    password: "password1234",
  },
  {
    username: "haleymay",
    password: "000000Zzz!!",
  },
  {
    username: "Punksterrr789",
    password: "Hiholetsgo333",
  },
  {
    username: "shaquille.oatmeal",
    password: "Bsktb0lll!",
  },
  {
    username: "BenAfleckIsAnOkActor",
    password: "YoYoYo666",
  },
  {
    username: "BeFkn4Real",
    password: "lmaoWhyyy",
  },
  {
    username: "Its_6_AM",
    password: "&IhaventSlept",
  },
  {
    username: "Ham_Sandwich",
    password: "Dijonayyyyyze123",
  },
  {
    username: "Mowgli_tha_Prince",
    password: "catzRule666",
  },
  {
    username: "whytfamistilldoingthis",
    password: "Goodnight!!!",
  },
  {
    username: "IheartWater",
    password: "lovemesumwatersourcesBBY",
  },
  {
    username: "lmart",
    password: "pass1",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
