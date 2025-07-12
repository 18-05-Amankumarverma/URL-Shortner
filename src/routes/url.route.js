const express = require('express')
const router = express.Router()
const {addUrl,getUrls,handleRedirect}= require("../controllers/url.controller")

router
    .get('/',getUrls)
    .post('/',addUrl)
    .get('/:id',handleRedirect)

module.exports = router