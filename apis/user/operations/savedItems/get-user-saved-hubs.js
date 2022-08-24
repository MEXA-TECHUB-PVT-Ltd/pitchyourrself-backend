const express = require('express')
const { savedHubModel } = require('../../../../schemas')
const app = express()

const GetUserWishlists = app.get('/get-all-user-saved-hubs', (req, res) => {
    savedHubModel.find({userId: req.query.userId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("hubId")
})
module.exports = GetUserWishlists