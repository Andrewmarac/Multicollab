const sql = require('mssql');

 
const config = {
    user: 'MARASIGAN.JOSHUA',  //Vostro user name
    password: 'AWWWWR6R+', //Vostra password
    server: "213.140.22.237",  //Stringa di connessione
    database: 'MARASIGAN.JOSHUA', //(Nome del DB)
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
        let sqlRequest = new sql.Request();  //sqlRequest: oggetto che serve a eseguire le query
        let q = 'select * from Influencer';
        //eseguo la query e aspetto il risultato nella callback
        sqlRequest.query(q, (err, result) => {Sqlreq.sendQueryResults(err,result,res)}); 
    }
    
  static sendQueryResults(err,result, res)
    {
        if (err) console.log(err); 
        res.send(result.recordset);  
    }

    static makeAziendaRequest(res) {
        let sqlRequest = new sql.Request();  //sqlRequest: oggetto che serve a eseguire le query
        let q = 'select * from Azienda';
        //eseguo la query e aspetto il risultato nella callback
        sqlRequest.query(q, (err, result) => {Sqlreq.sendAziendaResult(err,result,res)}); 
    }


    static sendAziendaResult(err,result, res)
    {
            if (err) console.log(err); // ... error checks
            res.send(result.recordset);  //Invio il risultato al Browser
    }

     static ciVettRequest(req,res) {
        let sqlRequest = new sql.Request();  //sqlRequest: oggetto che serve a eseguire le query
        let Category_ = req.params.Category_; //ottengo il foglio passato come parametro dall'url
        let q = `select * from Influencer WHERE Category_ = ${foglio}`
        sqlRequest.query(q, (err, result) => {Sqlreq.sendCiVettResult(err,result,res)}); 
    }

     static sendCiVettResult(err,result, res)
    {
        if (err) console.log(err); // ... error checks
        res.send(result.recordset);  //Invio il risultato al Browser
    }
}