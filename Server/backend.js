let express = require("express");
let bodyParser = require("body-parser");
var ObjectId = require('mongodb').ObjectId; 
let app = express();
app.use(bodyParser.json());
let cors = require("cors");
app.use(cors());

const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "trons";

// Create a new MongoClient
const client = new MongoClient(url);

let db;

// Use connect method to connect to the Server
client.connect(function (err) {
  db = client.db(dbName);
});

// Signup
app.post("/signup", function (req, res, next) {
  let { email, password,phoneNumber } = req.body;

  db.collection("users").insertOne(
    {
      username: email,
      email: email,
      password: password,
      phoneNumber:phoneNumber
    },
    (err, response) => {
      if (err) res.send({ flag: false, message: "User not registered" });
      res.json({
        status: {
          username: email,
          token: response.insertedId
        },
      });
    }
  );
});

// Login
app.post("/login", function (req, res, next) {
  let { email, password } = req.body;
  db.collection("users")
    .find({ email: email, password: password })
    .toArray((err, response) => {
      if (response.length > 0) {
        res.json({
          status: {
            username: email,
            data:response[0],
            flag: true,
          },
        });
      } else {
        res.json({
          status: {
            message: "Not Found",
            flag: false,
          },
        });
      }
    });
});

// profile
app.post("/profile", function (req, res, next) {
  let { firstName, phoneNumber,lastName,time,userId,selectedDtate } = req.body;
  db.collection("usersProfile").insertOne(
    {
      firstName: firstName,
      phoneNumber: phoneNumber,
      lastName: lastName,
      time:time,
      userId:userId,
      selectedDtate:selectedDtate
    },
    (err, response) => {
      if (err) res.send({ flag: false, message: "User not registered" });
      res.json({
        status: {
          username: response,
          flag:true
        },
      });
    }
  );
});

//Edit profile
app.put("/editProfile", function (req, res, next) {
  let { firstName, phoneNumber,lastName,time,selectedDtate,updatedBy,recordId } = req.body;
  var o_id = new ObjectId(recordId);
  db.collection("usersProfile").findOneAndUpdate({_id:o_id},
    {$set:{
      firstName: firstName,
      phoneNumber: phoneNumber,
      lastName: lastName,
      time:time,
      updatedBy:updatedBy,
      selectedDtate:selectedDtate
    }
    },
    (err, response) => {
      if (err) res.send({ flag: false, message: "User not registered" });
      res.json({
        status: {
          username: response,
          flag:true
        },
      });
    }
  );
});

// get profile
app.get("/profileData", function (req, res, next) {
  let {data} = req.query;
  db.collection("usersProfile")
    .find({selectedDtate:data})
    .toArray((err, response) => {
      res.json({ data: response });
    });
});

app.listen(3002, () => {
  console.log("Listening on port 3002");
});