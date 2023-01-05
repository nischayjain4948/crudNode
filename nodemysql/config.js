const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nischay"


});

conn.connect((err)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log("Connected Successfully!");
    }

});


module.exports = conn;