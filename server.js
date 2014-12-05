'use strict';

/**
 * Module dependencies.
 */
(function(){
	var express = require('express'),
	pg = require('pg'),
	json = require('express-json'),
	routes = require('./routes'),
	passport = require('passport'),
	dbString = 'postgres://olfhrisuigbnvu:fp1TZrojp_hQp376Y7op-PoHpx@ec2-54-83-204-85.compute-1.amazonaws.com:5432/d4dk6rhrotpta5',
	dbUser = 'olfhrisuigbnvu',
	dbPass = 'fp1TZrojp_hQp376Y7op-PoHpx';
	
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

    pg.connect(dbString, function(err,client){
    	var query = client.query('create table items (id serial,content text,category text,author text,parent integer,status text,rank smallint,createdate timestamp,editdate timestamp, PRIMARY KEY (id));');
    	query.on('row', function(row){
    		console.log(JSON.stringify(row,2,2));
    	});
    });

    //routes should be at the last
    //app.use(app.router);
	//app.use('*', cors);
	//Before all requests, call cors function.
	app.all('*', routes.cors);

	app.get('/get/items',routes.getItems);
	app.post('/post/item',routes.postItem);
	app.get('/',routes.root);

	app.listen(3000, function(){
		console.log('server started, listening to port ' + 3000);
	});
})();