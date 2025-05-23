const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://Nguyenphuhai143:Hai14032004@cluster0.rajwy0r.mongodb.net/node-f8-dev?retryWrites=true&w=majority&appName=Cluster0',
        );
        console.log('Connect successfully');
        console.log('Cơ sở dữ liệu:', mongoose.connection.name); // Xác nhận database
    } catch (error) {
        console.log('Connect failed !!!', error);
    }
}

module.exports = {
    connect,
};
