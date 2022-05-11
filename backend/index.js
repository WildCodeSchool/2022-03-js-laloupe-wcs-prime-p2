/* eslint-disable no-shadow */
require("dotenv").config();
const bcrypt = require("bcrypt");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const connection = require("./db-config");

const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    method: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(express.json());
app.use(cors());
const port = parseInt(process.env.APP_PORT ?? "5000", 10);
app.post("/Register", (req) => {
  const { username, password } = req.body;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.warn(err);
    }
    connection.query(
      "INSERT INTO user (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.warn(err);
        console.warn(result);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/Login", (req, res) => {
  const { username, password } = req.body;
  connection.query(
    "SELECT * FROM user WHERE username = ?;",

    username,
    (err, result) => {
      if (err) {
        res.send({ err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.warn(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong Username/Password combination" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.post("/Login", (req, res) => {
  console.warn(res);
  const { username } = req.body;
  const { password } = req.body;

  connection.query(
    "INSERT INTO user (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      console.warn(err, result);
    }
  );
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
