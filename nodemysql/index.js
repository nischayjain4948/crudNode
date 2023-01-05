const express = require("express");
const app = express();

const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nischay",
    insecureAuth : true


});

conn.connect((err)=>{

    if(err){
        console.log("Error in Connection Only!",err);
    }
    else{
        console.log("Connected Successfully!");
    }

});



app.get("/", (req,res)=>{
    // res.send("Route working");
    console.log("Yes, it's working!");

    conn.query("select * from Persons", (err,result)=>{
        if(err){
            res.send("error in query ", err)
            
        }
        else{
            res.send(result)
        }
    })


})

// app.listen(8089 ,()=>{
//     console.log("server is listening on port!");
// });

app.set('port', process.env.PORT || 8089);