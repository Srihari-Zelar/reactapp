var express = require("express");
var router=express.Router();

router.get("/",function(req,res,next){
    res.send("Employees Table");
});

app.get("/employees", async (req, res) => {
    try {
    const allemployees = await pool.query("SELECT * FROM employees");
    res.json(allemployees.rows);
    } catch (err) {
    console.error(err.message);
    }
})
module.exports=router;
