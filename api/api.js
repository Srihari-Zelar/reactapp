const client =require('./database.js')
const express = require ('express');
const app = express();


app.listen(4000, ()=>{
    console.log("server is now listening at port 4000");
})

client.connect();


app.get('/emp', (req, res)=>{
    client  .query(`select * from employee`, (err,result) => {
    if(!err){
        res.send(result.rows);
        }
    });
    client.end;
})