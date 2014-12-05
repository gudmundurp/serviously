'use strict';

(function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var itemSchema = new Schema({
        content: String,
        category: String,
        childCategories: [{
            id: String
        }],
        author: String,
        parent: String,
        children: [{
            id: String
        }],
        status: String,
        rank: Number,
        access: [{
            id: String
        }],
        date: {
            type: Date,
            default: Date.now()
        }
    });
    itemSchema.statics.getAll = function(cb) {
        this.find({}, cb);
    };
    module.exports.Item = mongoose.model('Item', itemSchema);
})();
