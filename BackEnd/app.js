const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

let counter = 0;

app.get("/api/increment", (req, res) => {
  counter++;
  res.json({ counter });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend API listening at http://0.0.0.0:${port}`);
});
