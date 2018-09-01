
const mysql = require('promise-mysql')
const config = require('./config')


pool = mysql.createPool(config.mysql)


module.exports = {
    getUser:function(req,res){
        let uid = req.params.uid

        if(!uid){
            res.status(400).send('No uid')
        }

        pool.query('SELECT * FROM customer WHERE u_id = ?',[uid])
        .then(function(rows){
            if(!rows){
                console.log('No rows')
                return
            }
            res.json(rows[0])
        })
        .catch(function(err){
            console.log(err)
        })
    },
    createUser:function(req,res){
        let fields = [
            'u_id',
            'name',
            'gender'
        ]

        pool.query(`
            INSERT INTO 
                customer (u_id, name, gender, image) 
            VALUES (?,?,?,?);
        `,[
            req.body['u_id'],
            req.body['name'],
            req.body['gender'],
            (Math.floor(Math.random() * 5) + 1)+'.png' 
        ])
        .then(function(result){
            if(result.affectedRows!==1){
                console.log("Can't insert")
                return
            }

            res.json('ok')
        })
        .catch(function(err){
            console.log(err)
        })

    },
    getInterest:function(req,res){
        pool.query('SELECT DISTINCT interest FROM customer_int;')
        .then(function(rows){
            if(!rows){
                console.log('No rows')
                return
            }
            res.json(rows.map(row=>row.interest))
        })
        .catch(function(err){
            console.log(err)
        })
    },
    createInterest:function(req,res){
        let fields = [
            'u_id',
            'interest',
            'rate'
        ]

        pool.query(`
            INSERT INTO 
                customer_int (u_id, interest, rate,t_created_datetime) 
            VALUES (?,?,?,NOW());
        `,[
            req.body['u_id'],
            req.body['interest'],
            req.body['rate']
        ])
        .then(function(result){
            if(result.affectedRows!==1){
                console.log("Can't insert")
                return
            }

            res.json('ok')
        })
        .catch(function(err){
            console.log(err)
        })


    },
    getEvents:function(req,res){
        let fields = [
            'uid',
            'budget'
        ]





    },
    getEvent:function(req,res){
        let id = req.params.id

        if(!id){
            res.status(400).send('No id')
        }

        pool.query('SELECT * FROM event WHERE pk = ?',[id])
        .then(function(rows){
            if(!rows){
                console.log('No rows')
                return
            }
            res.json(rows[0])
        })
        .catch(function(err){
            console.log(err)
        })
    }


}