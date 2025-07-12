const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
const router = require('./src/routes/url.route')
const dbConnection = require('./src/config/db') 
const generateRandomUUid = require('./src/services')

dbName = "urlShortner"

dbConnection(`mongodb://localhost:27017/${dbName}`)


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/url',router)

app.listen(PORT,()=>{
    console.log(`server is listening on PORT ${PORT} http://localhost:${PORT}/`)
})