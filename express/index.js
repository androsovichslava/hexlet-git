const express = require('express');
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "slava2000",
    host: "localhost",
    port: 5432,
    database: "react"
});
pool.connect();
pool.query(`SELECT email FROM users`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    pool.end;
})
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
    res.send("HELLO SLAVA");
});

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));