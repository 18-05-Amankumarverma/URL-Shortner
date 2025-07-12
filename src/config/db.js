const mongoose = require('mongoose')

const dbConnection = (url) => {
    try {
        mongoose
            .connect(url)
            .then((response) =>{
                console.log("Mongo db connected")
            })
            .catch((error) => console.log(error))
    }
    catch(err){
        console.log(err)
    }
}

module.exports = dbConnection