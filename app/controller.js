
const mysql = require('promise-mysql')
const config = require('./config')

pool = mysql.createPool(config.mysql)

module.exports = {
    home:function(req,res){
        pool.query('SELECT * FROM event;').then(function(rows){
            res.json(rows)
        });
    }
}