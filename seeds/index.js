const seedPosts = require("./post-seeds");
const seedUsers = require("./user-seeds");

const seedAll = async () => {
  await seedPosts();
  console.log("\n----- POSTS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");
};

module.exports = { seedAll };
