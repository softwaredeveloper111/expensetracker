const express = require("express");
const {register,login} = require("../controllers/auth.controllers")


const authRouter = express.Router();

/**
 * POST  /api/auth/register
 * register a new user
 */

authRouter.post("/register",register)


/**
 * POST /api/auth/login
 * login a user
 */
authRouter.post("/login",login)




module.exports = authRouter;