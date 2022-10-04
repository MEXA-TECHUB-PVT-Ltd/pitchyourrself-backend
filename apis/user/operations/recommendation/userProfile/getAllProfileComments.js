const express = require('express')
const { RecommentdationsUserModel } = require('../../../../../schemas')
const app = express()

const GetUserWishlists = app.get('/get-profile-comments', (req, res) => {
    RecommentdationsUserModel.find({userId: req.query.userId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserWishlists