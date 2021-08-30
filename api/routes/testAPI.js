var express = require("express");
var router=express.Router();

router.get("/",function(req,res,next){
    res.send("Employees Table");

const Pool = require ('pg').Pool;

const pool = new Pool ({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "empdata"
});

pool.connect();

pool.query(`select * from employees`, (err, result) => {
        if(!err) {
                console.log(result.rows);
        }
        pool.end();
})

module.exports = pool;

});

module.exports=router;
