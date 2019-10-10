const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
},
{
    toObject: {
      transform: function (doc, ret) {
        delete ret._id;
      }
    },
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
      }
    }

});

module.exports = mongoose.model('item', ItemSchema);