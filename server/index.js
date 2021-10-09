const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "maimsrd",
    database: "melon_system"
})


app.get('/type_user', (req, res) => {
    db.query("SELECT * FROM type_user", (err, result) => {
        if (err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.listen('3001', () => {
    console.log('Sever is runing on port 3001')
})