const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(express.json());

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to melon application." });
});
const db = require("./server/models");

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  next();
});

//

require("./server/routes/user.routes")(app);
require("./server/routes/type_user.routes")(app);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "Maimsrd",
//     database: "melon_system"
// })


// app.post('/IntoLogin', (req, res) => {

//     const username = req.body.username
//     const password = req.body.password

//     db.query("SELECT * FROM users WHERE username = ? AND password = ?", (err, result) => {
//         if (err){
//             console.log(err);
//         }
//         if(result){
//             res.send(result);
//         } else {
//             res.send({message : "Wrong username or password"})
//         }
//     });
// });


// app.get('/type_user', (req, res) => {
//     db.query("SELECT * FROM type_user", (err, result) => {
//         if (err){
//             console.log(err);
//         }
//         else{
//             res.send(result);
//         }
//     });
// });


// app.get('/Getusers', (req, res) => {
//     db.query("SELECT * FROM users", (err, result) => {
//         if (err){
//             console.log(err);
//         }
//         else{
//             res.send(result);
//         }
//     });
// });

// app.post('/SaveRegister', (req,res)=> {

//     const email = req.body.email
//     const username = req.body.username
//     const password = req.body.password
//     const phone_user = req.body.phone_user
//     const Typeuser_id = req.body.Typeuser_id
//     db.query("INSERT INTO users (email, username, password, phone_user, Typeuser_id) VALUES (?,?,?,?,?)", 
//     [email, username, password, phone_user, Typeuser_id], (err, result) => {

//             console.log(err);
      
//     });
// })

// app.listen('3001', () => {
//     console.log('Sever is runing on port 3001')
// })
