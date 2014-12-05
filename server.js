'use strict';

/**
 * Module dependencies.
 */
(function(){
	var express = require('express'),
	json = require('express-json'),
	routes = require('./routes'),
	passport = require('passport');
	
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
	app.all('*', routes.cors);

	app.get('/db',routes.db);
	app.get('/get/items',routes.getItems);
	app.post('/post/item',routes.postItem);
	app.get('/',routes.root);

	app.listen(3000, function(){
		console.log('server started, listening to port ' + 3000);
	});
})();