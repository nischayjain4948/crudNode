const express = require("express");

const EventEmitter = require("events");
const app = express();

const event = new EventEmitter();
let count = 0

event.on("countApi", ()=>{
    count+=1;
    console.log("Number of times the api hits is", count );
})



app.get("/count", (req,res)=>{
    res.send("Api called!")
    event.emit("countApi")

})



app.listen(8089);