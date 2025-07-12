const { json } = require('body-parser')
const Url = require('../models/urlSchema')
const { nanoid } = require('nanoid')


const addUrl = async (req, res) => {
    try {
        const body = req.body
        if (!req.body) return res.status(400).json({ error: "url is required" })

        const shortId = nanoid(8)
        const url = await Url.create({
            shortUrl: shortId,
            longerUrl: body.longerUrl
        })
        return res.status(200).json(url)
    }
    catch (err) {
        console.log(err.message)
    }
}


const getUrls = async (req, res) => {
    try {
        const allUrls = await Url.find({})
        res.json(allUrls)
        return res.status(200).json(allUrls)
    }
    catch (err) {
        console.log(err.message)
    }
}

const handleRedirect = async (req, res) => {
    try {
        const shortId = req.params.id
        const result = await Url.findOneAndUpdate(
            { shortUrl: shortId },
            {
                $push: {
                    visitorHistory: {
                        timestamps: Date.now()
                    }
                }
            }
        )
        return res.redirect(result.longerUrl)
    }
    catch (err) {
        console.log(err.message)
    }
}

module.exports = {
    addUrl,
    getUrls,
    handleRedirect
}