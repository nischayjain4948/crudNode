const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:38015/";

const databaseName = "icollege";
const client = new MongoClient(url);


const dbConnect = async ()=>{

    let result = await client.connect();

    db = result.db(databaseName);

    return db.collection('products');

}

module.exports = dbConnect;