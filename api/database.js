const Pool = require ('pg').Pool;

const pool = new Pool ({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "empdata"
});

client.connect();

client.query(`select * from employees`, (err, result) => {
        if(!err) {
                console.log(result.rows);
        }
        client.end();
})

module.exports = pool;
