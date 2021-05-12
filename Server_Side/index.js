const express = require('express');
const app = new express();
const cors = require('cors');
app.use(new cors());

const sqlreq = require('./Sqlreq.js'); 

app.get('/Influencer', function (req, res) {
   sqlreq.connect(res, sqlreq.makeSqlRequest);
});

app.get('/Azienda', function (req, res) {
    console.log(req.params.foglio);
    sqlreq.connect(req, res, sqlreq.makeAziendaRequest);
 });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});