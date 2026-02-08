
const jwt = require("jsonwebtoken");



function authMiddleware(req,res,next){
   const token = req.cookies;

   if(token?.JWT_TOKEN){

      try {
         const decoded = jwt.verify(token?.JWT_TOKEN,process.env.JWT_SECRET);
         req.user = decoded;
         next();
         
      } catch (error) {
         return res.status(401).json({
            message:"Invalid token"
         })
      }
      
   }
   else{
     return res.status(401).json({ message: "Unauthorized" });
   }
}



module.exports = authMiddleware