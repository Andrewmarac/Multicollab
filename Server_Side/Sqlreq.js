const sql = require('mssql');

 
const config = {
    user: 'MARASIGAN.JOSHUA',  
    password: 'AWWWWR6R+', 
    server: "213.140.22.237",  
    database: 'MARASIGAN.JOSHUA', 
    options: {
            trustServerCertificate: true,

  },
}

module.exports = class Sqlreq {

    static connect(req, res, connectedCallback)
    {
    sql.connect(config, (err) => {
        if (err) console.log(err);  
        else connectedCallback(req,res); 
        });
    }


    static makeSqlRequest(req, res) {
        let sqlRequest = new sql.Request(); 
        let q = 'select * from Influencer';
        sqlRequest.query(q, (err, result) => {Sqlreq.sendQueryResults(err,result,res)}); 
    }
    
  static sendQueryResults(err,result, res)
    {
        if (err) console.log(err); 
        res.send(result.recordset);  
    }

    static makeAziendaRequest(req,res) {
        let sqlRequest = new sql.Request(); 
        let q = 'select * from Azienda';
        sqlRequest.query(q, (err, result) => {Sqlreq.sendAziendaResult(err,result,res)}); 
    }


    static sendAziendaResult(err,result, res)
    {
            if (err) console.log(err); 
            res.send(result.recordset); 
    }

     static ciVettRequest(req,res) {
        let sqlRequest = new sql.Request(); 
        let Category_ = req.params.Category_; 
        let q = `select * from Influencer WHERE Category_ = '${Category_}'`
        sqlRequest.query(q, (err, result) => {Sqlreq.sendCiVettResult(err,result,res)}); 
    }

     static sendCiVettResult(err,result, res)
    {
        if (err) console.log(err); 
        res.send(result.recordset); 
    }
}