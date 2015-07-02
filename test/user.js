'use strict';
var config = require('../config/config'),
	User = require('../models/users.js')(config.db),
   	expect = require('chai').expect;
    
describe('Database connection test ',function(){
	it('should get some items',function(done){
		User.findByEmail(function(result){
			expect(result.length>1).to.equal(true);
			done();
		});
	});
	it('should create an item', function(done){
		var user = {
			email:'banana@factory.com',
			name:'Banana Bender',
			short:'Tester',
			hash:'nohash'
		}
		User.createUser(user, function(err,result){
			expect(err).to.equal(null);
			expect(result).not.to.equal(null)
			done();
		});
	})
});