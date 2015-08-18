'use strict';
var pg = require('pg');
module.exports = function(connectionString) {
  var findAll = function(callback) {
    pg.connect(connectionString, function(err, client, done) {
      client.query('select * from items', function(err, result) {
        done();
        if (err) {
          return callback('failed to fetch all items');
        } else {
          return callback(null, result.rows);
        }
      });
    });
  };
  var findById = function(id, callback) {
    pg.connect(connectionString, function(err, client, done) {
      client.query('select * from items where id=$1', [id], function(err, result) {
        done();
        if (err) {
          return callback('failed to fetch all items');
        } else {
          return callback(null, result.rows);
        }
      });
    });
  };
  var findByCategory = function(category, callback) {
    pg.connect(connectionString, function(err, client, done) {
      client.query('select * from items where category=$1', [category], function(err, result) {
        done();
        if (err) {
          return callback('failed to fetch all items');
        } else {
          return callback(null, result.rows);
        }
      });
    });
  };
  var createItem = function(item, callback) {
    console.log('about to save ', item);
    pg.connect(connectionString, function(err, client, done) {
      client.query('insert into items (content, category, author, parent, status, rank, createdate) ' +
        ' values ($1,$2,$3,$4,$5,$6,$7)', [
          item.content,
          item.category,
          item.author,
          item.parent,
          item.status,
          item.rank,
          new Date()
        ],
        function(err) {
          done();
          if (err) {
            return callback('failed to generate item');
          } else {
            return callback(null, 'creation successful');
          }
        });
    });
  };
  var save = function(item, callback) {
    console.log('about to update ', item);
    pg.connect(connectionString, function(err, client, done) {
      client.query('update items set (content,category,author,parent,status,rank,editdate) = ($1,$2,$3,$4,$5,$6,$7) where id = $8', [
        item.content,
        item.category,
        item.author,
        item.parent,
        item.status,
        item.rank,
        new Date(),
        item.id
      ], function(err) {
        done();
        if (err) {
          return callback('failed to update item' + err);
        } else {
          return callback(null, 'update successful');
        }
      });
    });
  };
  return {
    findAll: findAll,
    findById: findById,
    findByCategory: findByCategory,
    createItem: createItem,
    save: save
  };
};
