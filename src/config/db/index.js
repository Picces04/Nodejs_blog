const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/node-f8-dev');
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failed !!!', error);
    }
}

module.exports = {
    connect,
};
