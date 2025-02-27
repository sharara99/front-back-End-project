const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

let counter = 0;

app.get('/api/increment', (req, res) => {
    counter++;
    res.json({ counter });
});

app.listen(port, () => {
    console.log(`Backend API listening at http://localhost:${port}`);
});
