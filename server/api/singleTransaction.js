const router = require("express").Router();

const {
  models: { Transaction, Sub_Category, Category, Note },
} = require("../db");

module.exports = router;

// GET api/transactions/#transactionId

router.get("/subcategory", async (req, res, next) => {
  try {
    const subCategory = await Sub_Category.findAll();
    res.json(subCategory);
  } catch (err) {
    next(err);
  }
});

router.put("/changeallsubcategory", async (req, res, next) => {
  try {
    const { name, body } = req.body;
    const transactions = await Transaction.findAll(
      {
        where: { merchant: name },
      },
      { include: [Note] }
    );
    transactions.forEach((transaction) => {
      transaction.update(body);
    });
    res.json(transactions);
  } catch (err) {
    next(err);
  }
});

router.get("/subcategory/:id", async (req, res, next) => {
  try {
    const subCategory = await Sub_Category.findByPk(req.params.id);
    res.json(subCategory);
  } catch (err) {
    next(err);
  }
});

router.get("/category/:id", async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id);
    res.json(category);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id, {
      include: [Note],
    });
    res.json(transaction);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id, {
      include: [Note],
    });
    res.json(await transaction.update(req.body));
  } catch (err) {
    next(err);
  }
});
