const app = require('./Server/server.js')

app.listen(process.env.PORT, () => {
    console.log(`Service listening on port: ${process.env.PORT}`)
})