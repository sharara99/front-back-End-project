const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*", // Change this to your frontend URL for security
    methods: ["GET", "POST"],
  })
);

let counter = 0;

app.get("/api/increment", (req, res) => {
  counter++;
  res.json({ counter });
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
