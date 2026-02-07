const mongoose = require("mongoose");



const expenseSchema = new mongoose.Schema({
  title:{       /** add a note here */
    type:String,
  },

  category:{    /** salary ,investment , food, groceries */
    type:String,
  },

  amount:{      /** 3459 */
    type:Number,
  },

  type:{    /** income or expense */
    type:String
  },

  date:{     /** 7feb 2026 23:38:44*/
    type:Date,
    default:Date.now
  },

  user:{      /** user id */
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  }


})


const expenseModel = mongoose.model("expense",expenseSchema)


module.exports = expenseModel