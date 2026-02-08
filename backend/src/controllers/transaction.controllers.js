const expenseModel = require("../models/expense.model")
const jwt = require("jsonwebtoken")


async function createExpense(req,res){
   const {category,title,amount,type} = req.body;
   
    
   const user = req.user.id

   const expense = await expenseModel.create({
     category,
     title,
     amount,
     type,
     user,
   })


   res.status(201).json({
    message:"expense created sucessfully",
    expense
   })

}



async function getExpenses(req,res){

   const user = req.user.id

   const expenses = await expenseModel.find({user})
   
   res.status(200).json({
    message:"all expenses fetched sucessfully",
    expenses
   })
}




async function deleteExpense(req,res){
   const id = req.params.id;

   await expenseModel.findByIdAndDelete(id);

   res.status(204).json({
    message:"expense deleted sucessfully"
   })
}



async function updateExpense(req,res){
   const id = req.params.id;

   const {title,category,amount,type} = req.body

   await expenseModel.findByIdAndUpdate(id,{title,category,amount,type});

   res.status(200).json({
    message:"expense update sucessfully"
   })
}



module.exports = {createExpense,getExpenses,deleteExpense,updateExpense}