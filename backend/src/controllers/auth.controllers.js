
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")


async function register(req,res){
  const {email,password,name} = req.body;

  const isAlreadyUserRegisterd =  await userModel.findOne({email});

  if(isAlreadyUserRegisterd){
    return res.status(409).json({
      message:"Already have an account with this email"
    })
  }
  
  const hashPassword = crypto.createHash("md5").update(password).digest("hex");
   
  const user = await userModel.create({
    name,
    email,
    password:hashPassword
  })

  const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

  res.cookie("JWT_TOKEN",token)

  res.status(201).json({
    message:"user registered sucessfully",
    user
  })

}


async function login(req,res){
  const {email,password} = req.body;

  const user = await userModel.findOne({email});

  if(!user){
    return res.status(404).json({
      message:"user is not found at this email"
    })
  }

  const isMatchedPassword = user.password === crypto.createHash("md5").update(password).digest("hex");

  if(!isMatchedPassword){
    return res.status(401).json({
      message:"you are not authorized to acess the resources"
    })
  }

  const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

  res.cookie("JWT_TOKEN",token)

  res.status(200).json({
    message:"user logged in sucessfully",
    user
  })

}


module.exports = {register,login}