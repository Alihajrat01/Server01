const ex = require('express');
const path = require('path');
const fs = require('fs');

const app = ex();

app.get('/', (req, res) => {
  res.send("<h1>Server Started</h1>")
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "Login.html"))
})



app.listen(3000);
