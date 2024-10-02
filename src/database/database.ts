const mongoose = require('mongoose')

module.exports = async() => {
    await mongoose.connect('mongodb://localhost:27017/infirerp').then(() => {
        mongoose.set('debug', true)
        console.log(`DB connected`);
    }).catch((err) => {
        console.log(err);
        process.exit(2);
    })
    return mongoose
}
mongoose