var express = require("express");
var router=express.Router();

router.get("/",function(req,res,next){
    res.send(var connect = "postgres://postgres:1234@ocalhost:5432/empdata");
});

module.exports=router;
