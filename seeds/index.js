const seedPosts = require("./post-seeds");
const seedUsers = require("./user-seeds");
const sequelize = require("../config/connection")
const seedAll = async () => {
  await sequelize.sync({force: true})

  await seedPosts();
  console.log("\n----- POSTS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");
  process.exit(0)
};


seedAll()
