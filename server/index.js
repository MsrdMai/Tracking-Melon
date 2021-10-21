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


app.get('/user', (req, res) => {
    db.query("SELECT * FROM user", (err, result) => {
        if (err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});


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


app.post('/user', (req,res)=> {

    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    const phone_user = req.body.phone_user
    const Typeuser_id = req.body.Typeuser_id
    db.query("INSERT INTO user (email, username, password, phone_user, Typeuser_id) VALUES (?,?,?,?,?)", 
    [email, username, password, phone_user, Typeuser_id], (err, result) => {

            console.log(err);
      
    });
})

app.listen('3001', () => {
    console.log('Sever is runing on port 3001')
})
