const cors = require("cors");
const express = require("express");
const connection = require("./db-config");

const app = express();

app.use(express.json());
app.use(cors());
const port = parseInt(process.env.APP_PORT ?? "5000", 10);

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
