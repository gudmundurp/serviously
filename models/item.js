'use strict';
var pg = require('pg');
module.exports =  function (connectionString){
    var findAll = function(callback){
        pg.connect(connectionString,function(err,client,done){
            client.query('select * from items',function(err,result){
                done();
                if(err){
                    return new Error('failed to fetch all items');
                }
                else{
                    return callback(result.rows);
                }
            });
        });
    };
    var findById = function(id,callback){
        pg.connect(connectionString,function(err,client,done){
            client.query('select * from items where id=$1',[id],function(err,result){
                done();
                if(err){
                    return new Error('failed to fetch all items');
                }
                else{
                    return callback(result.rows);
                }
            });
        });
    };
    var findByCategory = function(category,callback){
        pg.connect(connectionString,function(err,client,done) {
            client.query('select * from items where category=$1',[category],function(err,result){
                done();
                if(err){
                    return new Error('failed to fetch all items');
                }
                else{
                    return callback(result.rows);
                }
            });
        });
    };
    var createItem = function(item, callback){
        client.query('insert into items (content, category, author, parent, status, rank, createdate) ' +
            ' values ($1,$2,$3,$4,$5,$6,$7)',
            [
                item.content, 
                item.category, 
                item.author, 
                item.parent, 
                item.status, 
                item.rank, 
                new Date()
            ], function(err,result){
                done();
                if(err){
                    return new Error('failed to generate item')
                }
                else {
                    return callback(null, result)
                }
            });       
    }
    return {
        findAll : findAll,
        findById : findById,
        findByCategory : findByCategory,
        createItem: createItem
    }
} 
