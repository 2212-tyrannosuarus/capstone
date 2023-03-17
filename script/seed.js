//transactions
("use strict");
//overcview, alltrasn, signle trans, budget
const subcategoryArr = require("./subcategoryList");
const bulkTransactions = require("./transactionGenerator");
console.log("subact", subcategoryArr);
const subcategoryArrObj = subcategoryArr.map((subCategory) => {
  return {
    sub_category_name: subCategory,
  };
});

console.log("subact", subcategoryArr);

const {
  db,
  models: {
    Bank_Account,
    Budget_Scheme,
    Budget,
    Category,
    Goal,
    Note,
    Sub_Category,
    Transaction,
    User_Category,
    User,
  },
} = require("../server/db");
console.log("test");
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");
  //*******START OF DEMO DATA */
  const bulkSeedTransactions = await Transaction.bulkCreate(bulkTransactions);
  const bulkSeedSubCategories = await Sub_Category.bulkCreate(
    subcategoryArrObj
  );
  console.log(`seeded successfully`);
  return;
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
