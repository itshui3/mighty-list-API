// enable environment vars
require('dotenv').config()
const mongoose = require('mongoose');

// init a mongoose
const mogu = new mongoose.Mongoose();
mogu.set('debug', true)

mogu.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(res => {
    console.log('db connection acquired..')

    const app = require('./Server/server.js')
    app.listen(process.env.PORT, () => {
        console.log(`Service listening on port: ${process.env.PORT}`)
    })

}).catch(err => {

    console.log('db connection failed..')
    console.log('error: ', err)

})