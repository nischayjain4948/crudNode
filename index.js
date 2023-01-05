const express = require("express");
const app = express();
const mongodb = require("mongodb");
const port = 8089;

app.use(express.json());

const dbConnect = require("./mongodb");

app.get("/", async (req, res) => {
  let data = await dbConnect();

  let result = await data.find().toArray();

  res.send(result);
  console.log(result);
});

app.post("/", async (req, res) => {
  let data = await dbConnect();

  let result = await data.insert(req.body);

  res.send(result);

  if (result) {
    console.log(result);
  }
});

// PUT Operation from body

// app.put("/", async (req,res)=>{

//   let data = await dbConnect();

//   let result = data.updateOne({name:"prasuk nagori"}, {$set: req.body})

//   res.send(result);
//   if(result){
//     console.log("result Updated!");
//   }

// })

// PUT operation from Params

app.put("/:name", async (req, res) => {
  let data = await dbConnect();

  let result = data.updateOne({ name: req.params.name }, { $set: req.body });

  if (result) {
    res.send("Data updated from params!");

    console.log("Data updated from params!");
  }
});

// Delete Method

app.delete("/:id", async (req, res) => {
  let data = await dbConnect();

  let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });

  if (result) {
    res.send(result);
    console.log("record deleted!");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
