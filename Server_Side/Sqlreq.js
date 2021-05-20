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


    static getAllInfluencer(req, res) {
        let sqlRequest = new sql.Request(); 
        let q = 'select * from Influencer';
        sqlRequest.query(q, (err, result) => {Sqlreq.sendResult(err,result,res)}); 
    }


    static getAllBrand(req,res) {
        let sqlRequest = new sql.Request(); 
        let q = 'select * from Azienda';
        sqlRequest.query(q, (err, result) => {Sqlreq.sendResult(err,result,res)}); 
    }


     static GetInfByCategory(req,res) {
        let sqlRequest = new sql.Request(); 
        let Category_ = req.params.Category_; 
        let q = `select * from Influencer WHERE Category_ = '${Category_}'`
        sqlRequest.query(q, (err, result) => {Sqlreq.sendResult(err,result,res)}); 
    }

    static GetInfById(req,res) {
        let sqlRequest = new sql.Request(); 
        let Screen_Name = req.params.Screen_Name; 
        let q = `select * from Influencer WHERE Screen_Name = '${Screen_Name}'`
        sqlRequest.query(q, (err, result) => {Sqlreq.sendResult(err,result,res)}); 
    }

    static sendResult(err,result, res)
    {
        if (err) console.log(err); 
        res.send(result.recordset); 
    }

}