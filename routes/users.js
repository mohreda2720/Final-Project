const express = require('express');
const router = express.Router();

const UsersModel=require('../models/users')
 var {login,createUser,getUser,deleteUser,updateUser}=require('../controllers/user')




    router.post("/",async(
      req,res,next)=>{//done
        var User=req.body
        try{
          var savedUser=await createUser(User)
          res.status(201).json(savedUser)
        }catch(err){
          res.status(422).json({message:err.message}) 
        }
        })



        router.get("/",async(
          req,res,next)=>{//done
           
            try{
              var savedUser=await getUser()
              res.status(201).json(savedUser)
            }catch(err){
              res.status(422).json({message:err.message}) 
            }
            })

          
 router.delete("/:id",async(req,res)=>{   //done
  try{
  var{id}=req.params
  
  var deleted=await deleteUser(id) 
  res.json(deleted)
  } catch(err){
   res.json({message:err.message});
  } 
})
router.patch("/:id",async(req,res)=>{      //update field by patch/done
  try{
     var{id}=req.params
     var User=req.body
    var updatedUser= await updateUser(id,User) 
     res.json(updatedUser)
   }catch(err){
   res.json({message:err.message})
   }
  })
     
  router.post('/login', login);

// export default router;
module.exports=router