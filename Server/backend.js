
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.json());
let cors = require("cors");
app.use(cors());

let data=require("../Server/desk-now-hosts/hosts.json")
let bookingData=require("../Server/desk-now-bookings/bookings.json")

const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb+srv://desknow:desknow@cluster0.f8zlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const url = "mongodb+srv://desknow:desknow@mongodb.129ey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Database Name
const dbName = "desknow";

// Create a new MongoClient
const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true });

let db;

// Use connect method to connect to the Server
client.connect(function (err) {
  db = client.db(dbName);
});

// Get Host data
app.get("/host", function (req, res, next) {
  db.collection("host")
    .find({})
    .toArray((err, response) => {
      res.json({ data: response });
    });
});

// booking data migration
app.post("/booking", function (req, res, next) {
  db.collection("booking").insertMany(
    bookingData.poiList,
    (err, response) => {
      if (err) res.send({ flag: false, message: "booking data not available" });
      res.json({
        status: {
          username: response,
        },
      });
    }
  );
});

// host data migration
app.post("/host", function (req, res, next) {
  db.collection("host").insertMany(
    data.placemarks,
    (err, response) => {
      if (err) res.send({ flag: false, message: "Host data not available" });
      res.json({
        status: {
          username: response,
        },
      });
    }
  );
});




// Get booking data
app.get("/booking", function (req, res, next) {
  db.collection("booking")
    .find({})
    .toArray((err, response) => {
      res.json({ data: response });
    });
});

app.listen(3002, () => {
  console.log("Listening on port 3002.");
});