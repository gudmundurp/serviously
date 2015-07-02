'use strict';
var config = require('../config/config'),
   	Item = require('../models/item.js')(config.db),
   	expect = require('chai').expect;
    
describe('Database connection test ',function(){
	it('should be able to get some items',function(done){
		Item.findAll(function(result){
			expect(result.length>1).to.equal(true);
			done();
		});
	});
	it('should be able to find item by id',function(done){
		Item.findById(1,function(result){
			expect(result.length>0).to.equal(true);
			done();
		});
	});
	it('should be able to find item by id',function(done){
		Item.findByCategory('Test',function(result){
			expect(result.length>1).to.equal(true);
			done();
		});
	});
});