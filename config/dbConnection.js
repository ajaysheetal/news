const mongoose = require('mongoose');
var connection = {};

connection.connectCheck = (cb) => {

    mongoose.connect('mongodb://127.0.0.1:27017/news', { 
        useNewUrlParser: true,
        useCreateIndex: true
    }, (error, result) => {
        if (error) { 
            console.log('Connecton failed', error);
            cb('failed db connection');
        } else {
            console.log('Connection connected successfully');
            cb(null, ' db connected');

        }

    })


}

module.exports = connection;