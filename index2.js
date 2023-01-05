const dbConnect = require('./mongodb.js');


const main = async() =>{

    let data = await dbConnect();

    data = await data.find().toArray();

    console.warm(data);
}

main();