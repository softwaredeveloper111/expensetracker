const express = require("express");
const authRouter = require("./routes/auth.routes")
const transactionRouter = require("./routes/transaction.routes")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express();


/**
 * Middleware
 */
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173", 
  credentials:true
}))

app.use("/api/auth",authRouter);
app.use("/api/v1/expenses",transactionRouter)


module.exports = app;