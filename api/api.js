const pool =require('./database.js')
const express = require ('express');
const app = express();


app.listen(4000, ()=>{
    console.log("server is now listening at port 4000");
})

client.connect();


app.get('/emp', (req, res)=>{
    pool.query(`select * from employees`, (err,result) => {
    if(!err){
        res.send(result.rows);
        }
    });
    client.end;
})