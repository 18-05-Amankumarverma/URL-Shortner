const {nanoid} = require('nanoid')

function generateRandomUUid() {
    console.log(nanoid(8))
}

module.exports = generateRandomUUid