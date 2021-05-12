const express = require('express');
const app = new express();


const sqlcon = require('./Sqlcon.js'); 

app.get('/', function (req, res) {
   sqlcon.connect(res, sqlcon.makeSqlRequest);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});