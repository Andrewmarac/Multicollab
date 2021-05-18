const express = require('express');
const app = new express();
const cors = require('cors');
app.use(new cors());

const sqlreq = require('./Sqlreq.js'); 

app.get('/Influencer', function (req, res) {
   sqlreq.connect(req, res, sqlreq.makeSqlRequest);
});

app.get('/Azienda', function (req, res) {
    sqlreq.connect(req, res, sqlreq.makeAziendaRequest);
 });

app.get('/:Category_', function (req, res) {
    sqlreq.connect(req, res, sqlreq.ciVettRequest);
 });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});