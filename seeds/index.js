const seedPosts = require("./post-seeds");
const seedUsers = require("./user-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedPosts();
  console.log("\n----- PRODUCTS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- TAGS SEEDED -----\n");

  process.exit(0);
};

seedAll();
