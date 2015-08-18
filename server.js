'use strict';

/**
 * Module dependencies.
 */
(function() {
	var express = require('express'),
		json = require('express-json'),
		basic = require('./routes/routes'),
		item = require('./routes/item'),
		passport = require('passport')
		/*,
				strategies = require('./passport')(passport)*/
	;

	//Connect to mongoDB
	//mongoose = require('mongoose'),
	//dbString = 'mongodb://localhost/philogi',
	//mongoose.connect(dbString);
	//var db = mongoose.connection;

	var app = express();
	app.use(json()); // to support JSON-encoded bodies

	//use passport session
	app.use(passport.initialize());
	app.use(passport.session());


	//routes should be at the last
	//app.use(app.router);
	//app.use('*', cors);
	//Before all requests, call cors function.
	app.all('*', basic.cors);

	app.get('/get/items', item.getItems);
	app.post('/update/item', item.updateItem);
	app.post('/create/item', item.createItem);
	app.get('/', basic.root);

	app.listen(8000, function() {
		console.log('server started, listening to port ' + 8000);
	});
})();
