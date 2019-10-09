const mongoose = require('mongoose');

module.exports = () => {
    return new Promise((res, rej) => {
        mongoose.Promise = global.Promise;
        mongoose.set('debug', true);

        mongoose.connection
            .on('error', error => rej(err))
            .on('close', () => console.log("database closed"))
            .once('open', () => res(mongoose.connections[0]));
        mongoose.connect('mongodb://mongo:27017/expressmongol', { useNewUrlParser: true, useCreateIndex: true})
    })
}