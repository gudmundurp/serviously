'use strict';
//CORS function
(function() {
  var formidable = require('formidable'),
    config = require('../config/config'),
    Item = require('../models/item')(config.db);
  exports.getItems = function(req, res) {
    Item.findAll(function(err, items) {
      res.send(items);
    });
  };
  exports.updateItem = function(req, res) {
    // unable to get POST data (req.body or req.data... undefined...)
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      console.log(fields);
      console.log('files: ', files);
      Item.save(fields, function(err, item) {
        if (err) {
          res.send(err);
        } else {
          res.send(item.id);
        }
      });
    });
  };
  exports.createItem = function(req, res) {
    // unable to get POST data (req.body or req.data... undefined...)
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      console.log(fields);
      console.log('files: ', files);
      Item.createItem(fields, function(err, item) {
        if (err) {
          res.send(err);
        } else {
          res.send(item.id);
        }
      });
    });
  };
})();
