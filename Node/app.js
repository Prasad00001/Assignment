const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
let port=8080
app.listen(port, function(){
    console.log("App listen", port);
})

app.post('/signup', (req, res)=>{
    const sql="INSERT INTO login (`firstName`, `lastName`,`email`,`password`,`role`)VALUES(?)";
    const values=[
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.password,
        req.body.role
    ]
    db.query(sql,[values], (err, data)=>{
        if(err){
            return res.json("error")
        }
        return res.json(data);
    })
})
app.post('/login', (req, res)=>{
    const sql="SELECT * FROM WHERE `email`=? AND `password`=?";
    db.query(sql, [req.body.email, req.body.password], (err, data)=>{
        if(err){
            return res.json("Error");       
        }
        else if(data.role==="Customer"){
            return res.json("you are customer you cant login from here");
        }
        else if(data.length==0){
            return res.json("failed");
        }
        else{
            return res.json(data);
        }
    })
})
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test1m"
})