const express = require('express')
const { userProfileVideoModel } = require('../../../../schemas')
const app = express()

const GetUserProfile = app.get('/get-user-profileVideo', (req, res) => {
    userProfileVideoModel.find({userId: req.query.userId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserProfile