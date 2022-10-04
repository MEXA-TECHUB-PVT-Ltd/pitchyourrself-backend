const express = require('express')
const { userLikesProfileModel } = require('../../../../schemas')
const app = express()
const GetUserRecipients = app.get('/get-all-user-likes', (req, res) => {
    userLikesProfileModel.find({userId: req.query.userId}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserRecipients