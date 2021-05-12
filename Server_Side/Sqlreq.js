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

    static connect(res, connectedCallback)
    {
        sql.connect(config, (err) => {
            if (err) console.log(err);  // ... error check
            else connectedCallback(res);     //callback da eseguire in caso di connessione avvenuta 
        });
    }

    static makeSqlRequest(res) {
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

    static makeAziendaRequest(req,res) {
        let sqlRequest = new sql.Request();  //sqlRequest: oggetto che serve a eseguire le query
        let q = `select * from Azienda`;
        //eseguo la query e aspetto il risultato nella callback
        sqlRequest.query(q, (err, result) => {Sqlreq.sendAziendaResult(err,result,res)}); 
    }


    static sendAziendaResult(err,result, res)
    {
            if (err) console.log(err); // ... error checks
            res.send(result.recordset);  //Invio il risultato al Browser
    }
}