'use strict';
//CORS function
(function() {
    var formidable = require('formidable'),
		util = require('util'),
        Item = require('./models/item').Item;
    var error = function(message) {
        console.log('Error : ' + message);
    };

    exports.cors = function(req, res, next) {
        //Why does this get called several times each request?
        console.log('setting headers');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Accept');
        if ('OPTIONS' === req.method) {
            res.send(200);
        } else {
            next();
        }
    };

    exports.getItems = function(req, res) {
        Item.find({
            'status': 'valid'
        }, function(err, items) {
            res.send(items);
        });
    };
    exports.postItem = function(req, res) {
        // unable to get POST data (req.body or req.data... undefined...)
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files) {
            console.log(fields._id);
            console.log('files: ' + files);
            Item.findById(fields._id, function(err, item) {
                if (err) {
                    res.send(err);
                } else {
                    if (item) {
                        console.log('updating item');
                        item.content = fields.content;
                        item.category = fields.category;
                        item.childCategories = fields.childCategories;
                        item.author = fields.author;
                        item.children = fields.children;
                        item.access = fields.access;
                        item.status = 'valid';
                    } else {
                        item = new Item(fields);
                        console.log('new item: ' + item);
                        item.status = 'valid';
                    }
                    item.save(function(err) {
                        if (err) {
                            error(err);
                        } else{
                            res.end(util.inspect(item));
                        }
                        //res.writeHead(200, {'content-type': 'text/plain'});
                        //res.write('File saved: \n\n');
                        //res.end(util.inspect({fields: fields, files: files}));
                    });
                }
            });
        });
    };

    exports.root = function(req, res) {
        res.send('the server is online');
    };
})();
