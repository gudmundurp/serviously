'use strict';
var pg = require('pg');
module.exports =  function (connectionString){
    var findByEmail = function(email, callback){
        pg.connect(connectionString,function(err,client,done){
            client.query('select * from users where ',function(err,result){
                done();
                if(err){
                    return callback('failed to fetch all items');
                }
                else{
                    return callback(null, result.rows);
                }
            });
        });
    };

    var createUser = function(user, callback){
        client.query('insert into users (email, name, shortname, hash, createdate) ' +
            ' values ($1,$2,$3,$4,$5)',
            [
                user.email, 
                user.name, 
                user.shortname, 
                user.hash, 
                new Date()
            ], function(err,result){
                done();
                if(err){
                    return new Error('failed to generate user')
                }
                else {
                    return callback(null, result)
                }
            });       
    }
    return {
        findByEmail : findByEmail,
        createUser : createUser
    }
} 
