'use strict';
var config = require('../config/config'),
  Item = require('../models/item.js')(config.db),
  expect = require('chai').expect;

describe('Item model test ', function() {
  it('should be able to get some items', function(done) {
    Item.findAll(function(err, result) {
      expect(err).to.equal(null);
      expect(result.length > 0).to.equal(true);
      done();
    });
  });
  it('should be able to find item by id', function(done) {
    Item.findById(1, function(err, result) {
      expect(err).to.equal(null);
      expect(result.length > 0).to.equal(true);
      done();
    });
  });
  it('should be able to find item by category', function(done) {
    Item.findByCategory('The world', function(err, result) {
      expect(err).to.equal(null);
      expect(result.length > 0).to.equal(true);
      done();
    });
  });
  xit('should update an item ', function(done) {
    Item.save({
      id: 1,
      category: 'The world',
      content: 'The big bang',
      short: 'origin',
      author: 'banana@factory.com'
    }, function(err, result) {
      expect(err).to.equal(null);
      console.log(result);
      done();
    })
  })
  xit('should create an item ', function(done) {
    var item = {
      content: 'The big bang',
      category: 'world',
      short: 'origin',
      author: 'banana@factory.com'
    }
    Item.createItem(item, function(err, result) {
      expect(err).to.equal(null);
      expect(result).not.to.equal(null)
      done();
    });
  });
});
