const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
var cors = require("cors");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 4 });
const cookieParser = require("cookie-parser");
//Objects from models

const facultyObj = require("./models/faculty");

//Middleware authentication

const facultyAuth = require("./middleware/facultyAuth")

app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));


// CONNECTING SERVER TO MONGODB DATABASE --------------------------------------------------------
mongoose.connect("mongodb://127.0.0.1:27017/LMS");
var db = mongoose.connection;

db.on("error", console.log.bind(console, "Connection Error"));
db.once("open", () => {
  console.log("Connection Successful");
});

app.get('/setcookie', (req, res) => {
  res.cookie('mycookie', 'cookievalue');
  res.send('Cookie set successfully');
});

app.get("/", (req, res) => {
  res.send("Abhishek chorotiya");
});

app.post("/adminLogin", (req, res) => {
  const username = "admin";
  const password = "admin";
  // console.log(req.body)
  if (req.body.username == username && req.body.password == password) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.post("/regStudents", (req, res) => {
  for (let val in req.body) {
    console.log(req.body);
  }
});

app.post("/regFaculty", async (req, res) => {
  const faculty = new facultyObj({
    Id: "IIITK_" + uid(),
    Name: req.body.name,
    Contact: req.body.contact,
    Gender: req.body.gender,
    Email: req.body.email,
    Password: req.body.contact,
  });

  var data = await facultyObj.findOne({ Contact: req.body.contact });

  if (data) {
    res.json({msg:"Faculty already registered !",code:0});
  } else {
    faculty
      .save()
      .then(() => {
        res.json({msg:"faculty Registered Sucessfully",code:1});
      })
      .catch((e) => {
        res.json({msg:"An Error occured",code:2});
      });
  }

  // console.log(data)

  // res.json('hi')
});

app.post("/facultyLogin", async (req, res) => {
  try {
      const user = await facultyObj.findByCredentials(
          req.body.email,
          req.body.password
      );
      const token = await user.generateAuthToken();
      console.log(token)
      res.cookie("jwt", token)
      return res.send({ message: "LoggedIn" })
      // res.redirect("/home");
  } catch (e) {
      // res.send("Invalid Credentials");
      return res.send({message:'error'})
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
