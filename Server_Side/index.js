const express = require('express');
const app = new express();
const cors = require('cors');
app.use(new cors());

const sqlreq = require('./Sqlreq.js'); 

app.get('/Influencer', function (req, res) {
   sqlreq.connect(req, res, sqlreq.getAllInfluencer);
});

app.get('/Azienda', function (req, res) {
    sqlreq.connect(req, res, sqlreq.getAllBrand);
 });

app.get('/:Category_', function (req, res) {
    sqlreq.connect(req, res, sqlreq.GetInfByCategory);
 });

app.get('/Influencer/:Screen_Name', function (req, res) {
    sqlreq.connect(req, res, sqlreq.GetInfById);
 });
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});