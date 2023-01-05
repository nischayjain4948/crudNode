const dbConnect = require("./mongodb");


const updateData = async ()=>{

let data =  await dbConnect();

let result = await data.update({name:"motog-7"}, {
    $set:{name: "samsungmoto"}
});


console.log(result);


}


updateData()