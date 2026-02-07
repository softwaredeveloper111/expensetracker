const express = require("express");
const expenseModel = require("../models/expense.model")
const jwt = require("jsonwebtoken")

const transactionRouter = express.Router();


/**
 * POST  /api/v1/expenses
 * create a new expense
 */

transactionRouter.post("/",async(req,res)=>{
   const {category,title,amount,type} = req.body;
   
    
   const user = jwt.verify(req.cookies.JWT_TOKEN , process.env.JWT_SECRET)

   const expense = await expenseModel.create({
     category,
     title,
     amount,
     type,
     user:user.id
   })


   res.status(201).json({
    message:"expense created sucessfully",
    expense
   })

})


/**
 * GET; /api/v1/expenses
 * fetch all the expenses
 */
transactionRouter.get("/",async (req,res)=>{

   const user = jwt.verify(req.cookies.JWT_TOKEN , process.env.JWT_SECRET)
    
   const expenses = await expenseModel.find({user:user.id})
   
   res.status(200).json({
    message:"all expenses fetched sucessfully",
    expenses
   })
})



/**
 * DELETE; /api/v1/expenses/id
 * delete a expense by id
 */
transactionRouter.delete('/:id',async(req,res)=>{
   const id = req.params.id;

   await expenseModel.findByIdAndDelete(id);

   res.status(204).json({
    message:"expense deleted sucessfully"
   })
})



/**
 * PATCH; /api/v1/expenses/id
 * update a expense
 */
transactionRouter.patch("/:id",async(req,res)=>{
   const id = req.params.id;

   const {title,category,amount,type} = req.body

   await expenseModel.findByIdAndUpdate(id,{title,category,amount,type});

   res.status(200).json({
    message:"expense update sucessfully"
   })
})




module.exports = transactionRouter