const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expense.controller");

/* Expense Router */
/**
 * @swagger
 * /expenseList:
 *  get:
 *    description: all expenses listing api
 *    responses:
 *      '200':
 *        description: expense list fetched successfully
 */
router.get("/expenseList", expenseController.expenseList);
/**
 * @swagger
 * /expenseDetail:
 *  get:
 *    description: expense detail api
 *    responses:
 *      '200':
 *        description: expense detail fetched successfully
 */
router.get("/expenseDetail", expenseController.expenseDetail);
/**
 * @swagger
 * /expenseAdd:
 *  post:
 *    description: expense add api
 *    responses:
 *      '200':
 *        description: expense added successfully
 */
router.post("/expenseAdd", expenseController.expenseAdd);
/**
 * @swagger
 * /expenseUpdate:
 *  put:
 *    description: expense update api
 *    responses:
 *      '200':
 *        description: expense updated successfully
 */
router.put("/expenseUpdate", expenseController.expenseUpdate);
/**
 * @swagger
 * /expenseDelete:
 *  delete:
 *    description: expense delete api
 *    responses:
 *      '200':
 *        description: expense deleted successfully
 */
router.delete("/expenseDelete", expenseController.expenseDelete);

module.exports = router;
