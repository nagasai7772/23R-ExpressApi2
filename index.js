const express = require("express");
const app = express();
const fs = require("fs");
const port = 3001;

app.get("/products", (req, res) => {
  fs.readFile("index.json", "utf-8", (err, data) => {
    if (err) {
      res.send({
        msg: err.message,
        status: 400,
      });
    } else {
      res.send({
        status: 200,
        mydata: JSON.parse(data),
      });
    }
  });
});

app.get("/products/:id", (req, res) => {
  fs.readFile("index.json", "utf-8", (err, data) => {
    if (err) {
      res.send({
        msg: err.statusMessage,
        status: 400,
      });
    } else {
      let apidata = JSON.parse(data);
      let getid = apidata.filter((val) => {
        return val.id == req.params.id;
      });
      res.send({
        msg: "Success",
        mydata: getid,
      });
    }
  });
});
app.listen(port, () => {
  console.log(`server is at ${port}`);
});
