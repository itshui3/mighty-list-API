// enable environment vars
require('dotenv').config()
const mongoose = require('mongoose')

// init a mongoose
mongoose.set('debug', true)

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

mongoose.connection.once('open', function() {

    console.log('db connection acquired..')

    const app = require('./Server/server.js')
    app.listen(process.env.PORT || 4444, () => {
        console.log(`service listening on port: ${process.env.PORT || 4444}`)
    })

})