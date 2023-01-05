const express = require("express");
require("./config");
const Product = require("./product");
const port = 8089;
const app = express();
const fs = require("fs");
const foldername = "/var/www/html/crudNode/uploads";

const multer = require("multer");

app.use(express.json());

try {
  if (!fs.existsSync(foldername)) {
    fs.mkdirSync(foldername);
  }
} catch (err) {
  console.log(err);
}

//  Create a item
app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  res.send(result);
  console.log(result);
});

// find all the items
app.get("/list", async (req, res) => {
  let data = await Product.find();

  console.log(data);
  res.send(data);
});

// Delete API
app.delete("/delete/:_id", async (req, res) => {
  let result = await Product.deleteOne(req.params);
  res.send(result);
  console.log("Data Deleted");
});

// Update API
app.put("/update/:_id", async (req, res) => {
  let data = await Product.updateOne(req.params, { $set: req.body });

  if (data) {
    res.send(data);
    console.log(`${data} updated Successfully!`);
  }
});

// Search API

app.get("/search/:key", async (req, res) => {
  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });

  res.send(data);
});

// Upload file with Multer Package!

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },

    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (req, res) => {
  res.send("file created!");
});

app.listen(port, () => {
  console.log(`App is listing on port ${port}`);
});
