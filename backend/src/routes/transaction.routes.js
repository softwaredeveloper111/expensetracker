const express = require("express");
const {createExpense,getExpenses,deleteExpense,updateExpense} = require("../controllers/transaction.controllers");
const authMiddleware = require("../middleware/auth.middleware")

const transactionRouter = express.Router();


/**
 * POST  /api/v1/expenses
 * create a new expense
 */

transactionRouter.post("/",authMiddleware, createExpense)


/**
 * GET; /api/v1/expenses
 * fetch all the expenses
 */
transactionRouter.get("/",authMiddleware, getExpenses)



/**
 * DELETE; /api/v1/expenses/id
 * delete a expense by id
 */
transactionRouter.delete('/:id',authMiddleware, deleteExpense)



/**
 * PATCH; /api/v1/expenses/id
 * update a expense
 */
transactionRouter.patch("/:id",authMiddleware, updateExpense)




module.exports = transactionRouter