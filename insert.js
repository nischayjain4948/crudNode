const dbConnect = require("./mongodb");



const insert = async ()=>{

    const db = await dbConnect();

const result = await  db.insert({productname:"motog-7", brand:"motorola", ram:4, price:22000, category:"smartphones"});
console.log(result)

if(result){
    console.log("Data Inserted!");
}


}


insert();