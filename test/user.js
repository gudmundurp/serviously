'use strict';
var config = require('../config/config'),
		User = require('../models/user.js')(config.db),
   	expect = require('chai').expect;

describe('User model test ',function(){
	it('should be able to find user by email',function(done){
		User.findByEmail('banana@factory.com',function(err, result){
			expect(err).to.equal(null);
			expect(result.length>0).to.equal(true);
			done();
		});
	});
	it('should be able to find user by id',function(done){
		User.findById(1,function(err, result){
			expect(err).to.equal(null);
			expect(result.length>0).to.equal(true);
			done();
		});
	});
	xit('should create an user ', function(done){
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
	});
});
