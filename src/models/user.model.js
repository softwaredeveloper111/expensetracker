const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  email:{
    type:String,
    unique:[true,"Account already exists with this email"]
  },

  password:{
    type:String
  },
  
  income:{
    type:String
  }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel