const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema(
    {
        shortUrl:{
            type:String,
            required:true,
            unique:true
        },
        longerUrl:{
            type:String,
            required:true
        },
        visitorHistory:[{timestamps:{type:Number}}]
    },
    {timestamps:true}
)

const Url = mongoose.model('Url',urlSchema)

module.exports = Url