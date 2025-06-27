const ex = require('express');
const path = require('path');
const fs = require('fs');

const app = ex();

app.get('/', (req, res) => {
  res.send("<h1>Server Started</h1>")
});




app.listen(3000);