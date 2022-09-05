const express = require('express')
const { RecommentdationsPitchModel } = require('../../../../../schemas')
const app = express()

const GetUserWishlists = app.get('/get-hub-comments', (req, res) => {
    RecommentdationsPitchModel.find({hubId: req.query.hubId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserWishlists